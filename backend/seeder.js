import { config } from "dotenv";
/*models */
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import listProduct from "./models/listProduct.js";
import Order from "./models/orderModel.js";
/*products list data*/ console;
import productList from "./data/productsList.js";
import connectDB from "./config/db.js";

config();

connectDB();

const importData = async () => {
  try {
    // await Order.deleteMany()
    // await Product.deleteMany()
    // await User.deleteMany()
    await listProduct.deleteMany();
    await listProduct.insertMany(productList);

    // const createdUsers = await User.insertMany(users)

    // const adminUser = createdUsers[0]._id
    // const sampleProducts =Products.map(p=>{
    //     return {...p,user: adminUser}
    // })

    // await Product.insertMany(sampleProducts)

    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
