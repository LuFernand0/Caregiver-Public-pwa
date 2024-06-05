import mongoose from "mongoose";

const ReservaSchema = new mongoose.Schema(
  {
    cuidador: {
      type: mongoose.Types.ObjectId,
      ref: "Cuidador",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
    ticketPrice: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);


ReservaSchema.pre(/^find/, function (next) {
  this.populate("user").populate({
    path: "cuidador",
    select: "name",
  });

  next();
});


export default mongoose.model("Appointment", ReservaSchema);