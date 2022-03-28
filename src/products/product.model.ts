import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: {
    type: String, // JavaScript type
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export interface Product extends mongoose.Document {
  id: string; // TypeScript type
  title: string;
  description: string;
  price: number;
}
