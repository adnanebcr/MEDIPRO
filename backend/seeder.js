import {config} from 'dotenv'
import users from './data/users.js'
import Products from './data/Products.js'
import User from './models/userModel.js'
import list1db from './data/mediprolist1.js'
import list2db from './data/mediprolist2.js'
import list3db from './data/therapharmlist1.js'
import list4db from './data/therapharmlist2.js'
import List1 from './models/mediproList1model.js'
import List2 from './models/mediproList2model.js'
import List3 from './models/TerapharmList1model.js'
import List4 from './models/TerapharmList2model.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'



    config()

connectDB()

const importData =async() =>{
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        await List1.deleteMany()
        await List2.deleteMany()
        await List3.deleteMany()
        await List4.deleteMany()
        
      
        await List1.insertMany(list1db)
        await List2.insertMany(list2db)
        await List3.insertMany(list3db)
        await List4.insertMany(list4db)
        

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id
        const sampleProducts =Products.map(p=>{
            return {...p,user: adminUser}
        })

 
        

        await Product.insertMany(sampleProducts)
      


        console.log('Data Imported')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}
const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        await List1.deleteMany()
        await List2.deleteMany()
        await List3.deleteMany()
        await List4.deleteMany()


        console.log('Data destroyed')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}


if (process.argv[2]=== '-d'){
    destroyData()
}else
{
    importData()
}


