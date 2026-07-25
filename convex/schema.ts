import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  bookings: defineTable({
    customerName: v.string(),
    phone: v.string(),
    email: v.optional(v.string()),
    service: v.string(),
    date: v.string(),
    timeSlot: v.string(),
    notes: v.optional(v.string()),
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("completed"),
      v.literal("cancelled")
    ),
    createdAt: v.number(),
  }),
});
