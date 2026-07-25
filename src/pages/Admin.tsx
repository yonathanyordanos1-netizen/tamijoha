import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

interface Booking {
  _id: string;
  customerName: string;
  phone: string;
  email?: string;
  service: string;
  date: string;
  timeSlot: string;
  notes?: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  createdAt: number;
}

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "admin123";

export default function Admin() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [filter, setFilter] = useState<"all" | "pending" | "confirmed" | "completed" | "cancelled">("all");

  // Fetch bookings from Convex (or use empty array if not configured)
  const convexBookings = useQuery(api.bookings.getAllBookings);
  const updateStatusMutation = useMutation(api.bookings.updateBookingStatus);
  const deleteBookingMutation = useMutation(api.bookings.deleteBooking);

  const [localBookings, setLocalBookings] = useState<Booking[]>([]);

  useEffect(() => {
    if (convexBookings) {
      setLocalBookings(convexBookings as unknown as Booking[]);
    }
  }, [convexBookings]);

  const bookings = convexBookings ? (convexBookings as unknown as Booking[]) : localBookings;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const updateStatus = async (id: string, newStatus: Booking["status"]) => {
    try {
      await updateStatusMutation({ bookingId: id as any, status: newStatus });
    } catch (e) {
      // Fallback to local state if Convex not configured
      setLocalBookings((prev) =>
        prev.map((b) => (b._id === id ? { ...b, status: newStatus } : b))
      );
    }
  };

  const deleteBooking = async (id: string) => {
    try {
      await deleteBookingMutation({ bookingId: id as any });
    } catch (e) {
      setLocalBookings((prev) => prev.filter((b) => b._id !== id));
    }
  };

  const filteredBookings =
    filter === "all"
      ? bookings
      : bookings.filter((b) => b.status === filter);

  const getStatusColor = (status: Booking["status"]) => {
    switch (status) {
      case "pending": return "#f0ad4e";
      case "confirmed": return "#5bc0de";
      case "completed": return "#5cb85c";
      case "cancelled": return "#d9534f";
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="page-enter">
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "120px 24px",
          }}
        >
          <div
            style={{
              maxWidth: "400px",
              width: "100%",
              animation: "fadeInUp 0.5s ease",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <h1
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.6rem",
                  marginBottom: "8px",
                }}
              >
                Admin Login
              </h1>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                Enter your password to manage bookings
              </p>
            </div>

            <form
              onSubmit={handleLogin}
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                padding: "32px",
              }}
            >
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="admin-password"
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    color: "var(--color-text-muted)",
                    marginBottom: "8px",
                    fontWeight: 500,
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="admin-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setLoginError(false);
                  }}
                  placeholder="Enter admin password"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "var(--color-primary)",
                    border: `1px solid ${loginError ? "#d9534f" : "var(--color-border)"}`,
                    borderRadius: "4px",
                    color: "var(--color-text)",
                    fontSize: "0.95rem",
                    transition: "border-color 0.2s ease",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "var(--color-secondary)"; }}
                  onBlur={(e) => {
                    e.target.style.borderColor = loginError ? "#d9534f" : "var(--color-border)";
                  }}
                />
                {loginError && (
                  <p style={{ color: "#d9534f", fontSize: "0.8rem", marginTop: "6px" }}>
                    Incorrect password. Try again.
                  </p>
                )}
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Sign In
              </button>
            </form>

            <p
              style={{
                textAlign: "center",
                color: "var(--color-text-muted)",
                fontSize: "0.8rem",
                marginTop: "16px",
              }}
            >
              Default password: <code style={{ color: "var(--color-secondary)" }}>admin123</code>
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-enter">
      <section
        style={{
          padding: "140px 0 60px",
          background: "var(--color-primary-light)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <p
                style={{
                  color: "var(--color-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
              >
                Dashboard
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2rem",
                }}
              >
                Manage Bookings
              </h1>
            </div>
            <button
              onClick={() => {
                setIsLoggedIn(false);
                setPassword("");
                navigate("/");
              }}
              className="btn btn-outline btn-sm"
            >
              Sign Out
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0 80px" }}>
        <div className="container">
          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            {[
              { label: "Total", count: bookings.length, color: "var(--color-text)" },
              { label: "Pending", count: bookings.filter((b) => b.status === "pending").length, color: "#f0ad4e" },
              { label: "Confirmed", count: bookings.filter((b) => b.status === "confirmed").length, color: "#5bc0de" },
              { label: "Completed", count: bookings.filter((b) => b.status === "completed").length, color: "#5cb85c" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    color: stat.color,
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {stat.count}
                </div>
                <div
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Filter Tabs */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "24px",
              flexWrap: "wrap",
            }}
          >
            {(["all", "pending", "confirmed", "completed", "cancelled"] as const).map(
              (f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    padding: "8px 16px",
                    background:
                      filter === f
                        ? "var(--color-secondary)"
                        : "transparent",
                    color:
                      filter === f
                        ? "var(--color-primary)"
                        : "var(--color-text-muted)",
                    border: "1px solid",
                    borderColor:
                      filter === f
                        ? "var(--color-secondary)"
                        : "var(--color-border)",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    textTransform: "capitalize",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {f}
                </button>
              )
            )}
          </div>

          {/* Bookings Table */}
          {filteredBookings.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "60px 0",
                color: "var(--color-text-muted)",
              }}
            >
              No {filter === "all" ? "" : filter} bookings found.
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.9rem",
                }}
              >
                <thead>
                  <tr
                    style={{
                      borderBottom: "2px solid var(--color-secondary)",
                      color: "var(--color-text-muted)",
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    <th style={{ padding: "12px 16px", textAlign: "left" }}>Customer</th>
                    <th style={{ padding: "12px 16px", textAlign: "left" }}>Service</th>
                    <th style={{ padding: "12px 16px", textAlign: "left" }}>Date</th>
                    <th style={{ padding: "12px 16px", textAlign: "left" }}>Time</th>
                    <th style={{ padding: "12px 16px", textAlign: "left" }}>Phone</th>
                    <th style={{ padding: "12px 16px", textAlign: "left" }}>Status</th>
                    <th style={{ padding: "12px 16px", textAlign: "left" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking) => (
                    <tr
                      key={booking._id}
                      style={{
                        borderBottom: "1px solid var(--color-border)",
                        transition: "background 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(205, 127, 50, 0.06)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <td style={{ padding: "16px" }}>
                        <div style={{ fontWeight: 600 }}>{booking.customerName}</div>
                        {booking.email && (
                          <div style={{ color: "var(--color-text-muted)", fontSize: "0.8rem" }}>
                            {booking.email}
                          </div>
                        )}
                      </td>
                      <td style={{ padding: "16px", color: "var(--color-text-muted)" }}>
                        {booking.service}
                      </td>
                      <td style={{ padding: "16px" }}>{booking.date}</td>
                      <td style={{ padding: "16px" }}>{booking.timeSlot}</td>
                      <td style={{ padding: "16px", color: "var(--color-text-muted)" }}>
                        {booking.phone}
                      </td>
                      <td style={{ padding: "16px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            padding: "4px 12px",
                            borderRadius: "20px",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            textTransform: "capitalize",
                            background: `${getStatusColor(booking.status)}20`,
                            color: getStatusColor(booking.status),
                            border: `1px solid ${getStatusColor(booking.status)}40`,
                          }}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td style={{ padding: "16px" }}>
                        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                          {booking.status === "pending" && (
                            <button
                              onClick={() => updateStatus(booking._id, "confirmed")}
                              title="Confirm"
                              style={{
                                padding: "6px 12px",
                                background: "rgba(91, 192, 222, 0.1)",
                                color: "#5bc0de",
                                border: "1px solid rgba(91, 192, 222, 0.3)",
                                borderRadius: "4px",
                                fontSize: "0.75rem",
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = "rgba(91, 192, 222, 0.2)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = "rgba(91, 192, 222, 0.1)";
                              }}
                            >
                              ✓ Confirm
                            </button>
                          )}
                          {booking.status === "confirmed" && (
                            <button
                              onClick={() => updateStatus(booking._id, "completed")}
                              title="Complete"
                              style={{
                                padding: "6px 12px",
                                background: "rgba(92, 184, 92, 0.1)",
                                color: "#5cb85c",
                                border: "1px solid rgba(92, 184, 92, 0.3)",
                                borderRadius: "4px",
                                fontSize: "0.75rem",
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = "rgba(92, 184, 92, 0.2)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = "rgba(92, 184, 92, 0.1)";
                              }}
                            >
                              ✓ Complete
                            </button>
                          )}
                          {(booking.status === "pending" || booking.status === "confirmed") && (
                            <button
                              onClick={() => updateStatus(booking._id, "cancelled")}
                              title="Cancel"
                              style={{
                                padding: "6px 12px",
                                background: "rgba(217, 83, 79, 0.1)",
                                color: "#d9534f",
                                border: "1px solid rgba(217, 83, 79, 0.3)",
                                borderRadius: "4px",
                                fontSize: "0.75rem",
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = "rgba(217, 83, 79, 0.2)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = "rgba(217, 83, 79, 0.1)";
                              }}
                            >
                              ✕ Cancel
                            </button>
                          )}
                          <button
                            onClick={() => deleteBooking(booking._id)}
                            title="Delete"
                            style={{
                              padding: "6px 12px",
                              background: "transparent",
                              color: "var(--color-text-muted)",
                              border: "1px solid var(--color-border)",
                              borderRadius: "4px",
                              fontSize: "0.75rem",
                              cursor: "pointer",
                              transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "#d9534f";
                              e.currentTarget.style.borderColor = "#d9534f";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "var(--color-text-muted)";
                              e.currentTarget.style.borderColor = "var(--color-border)";
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
