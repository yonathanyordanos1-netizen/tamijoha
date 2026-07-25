import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Create a new booking
export const createBooking = mutation({
  args: {
    customerName: v.string(),
    phone: v.string(),
    email: v.optional(v.string()),
    service: v.string(),
    date: v.string(),
    timeSlot: v.string(),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const bookingId = await ctx.db.insert("bookings", {
      customerName: args.customerName,
      phone: args.phone,
      email: args.email,
      service: args.service,
      date: args.date,
      timeSlot: args.timeSlot,
      notes: args.notes,
      status: "pending",
      createdAt: Date.now(),
    });
    return bookingId;
  },
});

// Get all bookings (for admin)
export const getAllBookings = query({
  args: {},
  handler: async (ctx) => {
    const bookings = await ctx.db.query("bookings").order("desc").collect();
    return bookings;
  },
});

// Update booking status
export const updateBookingStatus = mutation({
  args: {
    bookingId: v.id("bookings"),
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("completed"),
      v.literal("cancelled")
    ),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.bookingId, { status: args.status });
  },
});

// Delete a booking
export const deleteBooking = mutation({
  args: {
    bookingId: v.id("bookings"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.bookingId);
  },
});

// Get bookings by date
export const getBookingsByDate = query({
  args: {
    date: v.string(),
  },
  handler: async (ctx, args) => {
    const bookings = await ctx.db
      .query("bookings")
      .filter((q) => q.eq(q.field("date"), args.date))
      .collect();
    return bookings;
  },
});
