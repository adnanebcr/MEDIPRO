import List1 from '../models/mediproList1model.js'
import List2 from '../models/mediproList2model.js'
import List3 from '../models/TerapharmList1model.js'
import List4 from '../models/TerapharmList2model.js'


import asyncHandler from 'express-async-handler'



// @descr   fetch all products list1
// @route   GET /api/products
// @access Public 

const getProductList1 = asyncHandler(async (req,res)=>{
    const list1 = await List1.find({})
    
    res.json(list1)
})

// @descr   fetch all products list2
// @route   GET /api/products
// @access Public 

const getProductList2 = asyncHandler(async (req,res)=>{
    const list2 = await List2.find({})
    
    res.json(list2)
})


// @descr   fetch all products list3
// @route   GET /api/products
// @access Public 

const getProductList3 = asyncHandler(async (req,res)=>{
    const list3 = await List3.find({})
    
    res.json(list3)
})


// @descr   fetch all products list4
// @route   GET /api/products
// @access Public 

const getProductList4 = asyncHandler(async (req,res)=>{
    const list4 = await List4.find({})
    
    res.json(list4)
})
export {getProductList1,getProductList2,getProductList3,getProductList4} 
