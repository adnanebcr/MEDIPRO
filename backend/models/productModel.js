import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: { type: String, required: true },
    type: { type: String, required: true },
    liste: { type: String },
    metadesc: { type: String, required: true },
    image: { type: String, required: true },
    fiche: { type: String },
    gammes: { type: String, required: true },
    description: { type: String, required: true },
    proprietes: { type: String, required: true },
    proprietes2: { type: String },
    conseil: { type: String, required: true },
    conseil2: { type: String },
    precautions1: { type: String, required: true },
    precautions2: { type: String },
    precautions3: { type: String },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
