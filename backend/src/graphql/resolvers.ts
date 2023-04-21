import Product from "../models/Products";
import { IProduct } from "../types";

const resolvers = {
  Query: {
    product: async (
      _: any,
      { ID }: { ID: string }
    ): Promise<IProduct | null> => {
      return await Product.findById(ID);
    },
    async getProducts(_: any, { price }: { price: number }) {
      return await Product.find().sort({ createdAt: -1 }).limit(price);
    },
  },
  Mutation: {
    async createProduct(
      _parent: any,
      {
        productInput: {
          name,
          description,
          color,
          size,
          image,
          quantity,
          available,
          price,
        },
      }: { productInput: IProduct }
    ) {
      const createProduct = new Product({
        name: name,
        description: description,
        color: color,
        size: size,
        image: image,
        quantity: quantity,
        available: available,
        price: price,
        createdAt: new Date().toISOString(),
      });
      const res = await createProduct.save();

      return {
        ...res.toJSON(),
        id: res.id,
      };
    },
    async deleteProduct(_: any, { ID }: { ID: string }) {
      const wasDeleted = (await Product.deleteOne({ _id: ID })).deletedCount;
      return wasDeleted; // 1 if something was deleted, 0 if nothing was deleted
    },

    editProduct: async (
      _: any,
      {
        ID,
        productInput: {
          name,
          description,
          color,
          size,
          image,
          quantity,
          price,
          available,
        },
      }: {
        ID: string;
        productInput: {
          name?: string;
          description?: string;
          color?: string[];
          size?: string[];
          image?: string;
          quantity?: number;
          price?: number;
          available?: boolean;
        };
      }
    ) => {
      const wasEdited = (
        await Product.updateOne(
          { _id: ID },
          {
            name: name,
            description: description,
            color,
            size: size,
            image: image,
            quantity: quantity,
            price: price,
            available: available,
          }
        )
      ).modifiedCount;
      return wasEdited;
    },
  },
};

export default resolvers;
