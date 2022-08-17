const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    contactName: {
      type: String,
      required: [true, "Please enter a name."],
    },
    contactPhone: {
      type: String,
    },
    contactEmail: {
      type: String,
    },
    contactRole: {
      type: String,
    //   required: [true, "Please enter a valid role."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
