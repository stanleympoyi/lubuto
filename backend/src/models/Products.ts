import { InferSchemaType, model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    color: { type: [String] },
    image: { type: String },
    size: { type: [String] },
    quantity: { type: Number },
    price: { type: Number },
    available: { type: Boolean },
  },
  { timestamps: true }
);

type Product = InferSchemaType<typeof productSchema>;

export default model<Product>("Product", productSchema);
