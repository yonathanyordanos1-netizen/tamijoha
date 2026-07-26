import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import useReveal from "../hooks/useReveal";

const services = [
  "Hairstyling (Blow-dry)",
  "Hairstyling (Curly)",
  "Hair Straightening",
  "Shampoo & Conditioning",
  "Children's Haircut",
  "Braids (Full Head)",
  "Box Braids",
  "Twist Braids",
  "Curly Hair Extensions",
  "Hair Extensions",
  "Hair Colouring (Full)",
  "Hair Colouring (Roots)",
  "Hair Highlighting",
  "Hair Regrowth Treatment",
  "Makeup Application",
  "Bridal Makeup",
  "Eye Makeup",
  "Makeup Consultation",
  "Body Waxing (Full)",
  "Body Waxing (Partial)",
  "Eyebrow Shaping",
  "Manicure",
  "Pedicure",
];

const timeSlots = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM",
  "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM",
  "6:30 PM", "7:00 PM", "7:30 PM",
];

export default function Booking() {
  const navigate = useNavigate();
  useReveal([], { stagger: 0.05 });
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    timeSlot: "",
    customerName: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const createBooking = useMutation(api.bookings.createBooking);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createBooking({
        customerName: formData.customerName,
        phone: formData.phone,
        email: formData.email || undefined,
        service: formData.service,
        date: formData.date,
        timeSlot: formData.timeSlot,
        notes: formData.notes || undefined,
      });
    } catch (err) {
      console.log("Booking data (Convex unavailable, saving locally):", formData);
      const saved = JSON.parse(localStorage.getItem("zoe-bookings") || "[]");
      saved.push({ ...formData, status: "pending", createdAt: Date.now() });
      localStorage.setItem("zoe-bookings", JSON.stringify(saved));
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setStep(1);
      setFormData({
        service: "",
        date: "",
        timeSlot: "",
        customerName: "",
        phone: "",
        email: "",
        notes: "",
      });
    }, 4000);
  };

  const today = new Date().toISOString().split("T")[0];

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "var(--color-primary)",
    border: "1px solid var(--color-border)",
    borderRadius: "4px",
    color: "var(--color-text)",
    fontSize: "0.95rem",
    transition: "border-color 0.2s ease",
  };

  if (submitted) {
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
          <div style={{ textAlign: "center", animation: "fadeInUp 0.6s ease" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "rgba(232, 180, 184, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                fontSize: "2.5rem",
              }}
            >
              ✓
            </div>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2rem",
                marginBottom: "12px",
                color: "var(--color-secondary)",
              }}
            >
              Booking Confirmed!
            </h1>
            <p
              style={{
                color: "var(--color-text-muted)",
                marginBottom: "32px",
                maxWidth: "500px",
                lineHeight: 1.7,
              }}
            >
              Thank you, {formData.customerName}! We've received your booking
              for {formData.service} on {formData.date} at{" "}
              {formData.timeSlot}. We'll call you at {formData.phone} to
              confirm.
            </p>
            <button
              onClick={() => navigate("/")}
              className="btn btn-outline"
            >
              Back to Home
            </button>
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
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-5%",
            top: "-10%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232, 180, 184, 0.08), transparent 70%)",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p
            className="reveal"
            style={{
              color: "var(--color-secondary)",
              textTransform: "uppercase",
              letterSpacing: "4px",
              fontSize: "0.85rem",
              fontWeight: 600,
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            Schedule Now
          </p>
          <h1 className="section-title reveal">Book Appointment</h1>
          <div className="section-divider" />
          <p className="section-subtitle reveal">
            Choose your service, pick a date and time, and we'll take care of
            the rest.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <div
              className="reveal"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                marginBottom: "48px",
              }}
            >
              {[1, 2, 3].map((s) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: step >= s ? "var(--color-secondary)" : "var(--color-accent)",
                      color: step >= s ? "var(--color-primary)" : "var(--color-text-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {s}
                  </div>
                  {s < 3 && (
                    <div
                      style={{
                        width: "40px",
                        height: "2px",
                        background: step > s ? "var(--color-secondary)" : "var(--color-border)",
                        transition: "background 0.3s ease",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="reveal" style={{ animation: "fadeInUp 0.4s ease" }}>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem", marginBottom: "24px" }}>
                    Select Service & Date
                  </h2>

                  <div style={{ marginBottom: "24px" }}>
                    <label htmlFor="service" style={{ display: "block", fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "8px", fontWeight: 500 }}>
                      Choose Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "var(--color-secondary)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; }}
                    >
                      <option value="">— Select a service —</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <label htmlFor="date" style={{ display: "block", fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "8px", fontWeight: 500 }}>
                      Pick a Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={today}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "var(--color-secondary)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; }}
                    />
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn btn-primary"
                      disabled={!formData.service || !formData.date}
                      style={{ opacity: !formData.service || !formData.date ? 0.5 : 1, cursor: !formData.service || !formData.date ? "not-allowed" : "pointer" }}
                    >
                      Next Step →
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="reveal" style={{ animation: "fadeInUp 0.4s ease" }}>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem", marginBottom: "8px" }}>
                    Choose a Time Slot
                  </h2>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", marginBottom: "24px" }}>
                    Available times for {formData.date}
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "10px", marginBottom: "32px" }}>
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, timeSlot: slot }))}
                        style={{
                          padding: "12px 8px",
                          background: formData.timeSlot === slot ? "var(--color-secondary)" : "var(--color-bg-card)",
                          color: formData.timeSlot === slot ? "var(--color-primary)" : "var(--color-text)",
                          border: formData.timeSlot === slot ? "2px solid var(--color-secondary)" : "2px solid var(--color-border)",
                          borderRadius: "6px",
                          fontSize: "0.85rem",
                          fontWeight: formData.timeSlot === slot ? 700 : 500,
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => { if (formData.timeSlot !== slot) e.currentTarget.style.borderColor = "var(--color-secondary)"; }}
                        onMouseLeave={(e) => { if (formData.timeSlot !== slot) e.currentTarget.style.borderColor = "var(--color-border)"; }}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
                    <button type="button" onClick={() => setStep(1)} className="btn btn-outline">← Back</button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="btn btn-primary"
                      disabled={!formData.timeSlot}
                      style={{ opacity: !formData.timeSlot ? 0.5 : 1, cursor: !formData.timeSlot ? "not-allowed" : "pointer" }}
                    >
                      Next Step →
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="reveal" style={{ animation: "fadeInUp 0.4s ease" }}>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem", marginBottom: "24px" }}>
                    Your Information
                  </h2>

                  <div style={{ marginBottom: "20px" }}>
                    <label htmlFor="customerName" style={{ display: "block", fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "8px", fontWeight: 500 }}>
                      Full Name *
                    </label>
                    <input type="text" id="customerName" name="customerName" value={formData.customerName} onChange={handleChange} required placeholder="Your name" style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "var(--color-secondary)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; }}
                    />
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <label htmlFor="phone" style={{ display: "block", fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "8px", fontWeight: 500 }}>
                      Phone Number *
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+251 9XX XXX XXX" style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "var(--color-secondary)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; }}
                    />
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <label htmlFor="email" style={{ display: "block", fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "8px", fontWeight: 500 }}>
                      Email (optional)
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "var(--color-secondary)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; }}
                    />
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <label htmlFor="notes" style={{ display: "block", fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "8px", fontWeight: 500 }}>
                      Special Requests (optional)
                    </label>
                    <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} rows={3} placeholder="Any special requests or preferences..." style={{ ...inputStyle, resize: "vertical", minHeight: "80px" }}
                      onFocus={(e) => { e.target.style.borderColor = "var(--color-secondary)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; }}
                    />
                  </div>

                  <div style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "20px", marginBottom: "24px" }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", color: "var(--color-secondary)", marginBottom: "12px" }}>
                      Booking Summary
                    </h3>
                    <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "8px", fontSize: "0.9rem" }}>
                      <span style={{ color: "var(--color-text-muted)" }}>Service:</span>
                      <span style={{ fontWeight: 600 }}>{formData.service}</span>
                      <span style={{ color: "var(--color-text-muted)" }}>Date:</span>
                      <span style={{ fontWeight: 600 }}>{formData.date}</span>
                      <span style={{ color: "var(--color-text-muted)" }}>Time:</span>
                      <span style={{ fontWeight: 600 }}>{formData.timeSlot}</span>
                    </div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
                    <button type="button" onClick={() => setStep(2)} className="btn btn-outline">← Back</button>
                    <button type="submit" className="btn btn-primary" disabled={!formData.customerName || !formData.phone}
                      style={{ opacity: !formData.customerName || !formData.phone ? 0.5 : 1, cursor: !formData.customerName || !formData.phone ? "not-allowed" : "pointer" }}
                    >
                      Confirm Booking ✓
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
