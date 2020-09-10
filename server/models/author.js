import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

export default mongoose.model('Author', authorSchema);
