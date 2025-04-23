const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  name: { type: String, required: true },
  categoryID: { type: String, required: true },
  detail: { type: String, required: false },
  significance:  { type: String, required: false },
  date:{type: Date, required: true, default: Date.now},
  active:{type: Boolean, required: true}
});



module.exports = mongoose.model("Task", taskSchema);