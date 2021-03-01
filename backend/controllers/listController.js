import mediproList1model from '../models/mediproList1model.js'
import mediproList2model from '../models/mediproList2model.js'
import TerapharmList1 from '../models/TerapharmList1model.js'
import TerapharmList2 from '../models/TerapharmList2model.js'


import asyncHandler from 'express-async-handler'




// @descr   fetch all products 
// @route   GET /api/products
// @access Public 

const getList1 = asyncHandler(async (req,res)=>{
    const list1 = await mediproList1model.find({})
    
    res.json(list1)
}) 



// @descr   fetch all products 
// @route   GET /api/products
// @access Public 

const getList2 = asyncHandler(async (req,res)=>{
    const List2 = await mediproList2model.find({})
    
    res.json(List2)
}) 








// @descr   fetch all products 
// @route   GET /api/products
// @access Public 

const getList3 = asyncHandler(async (req,res)=>{
    const List3 = await TerapharmList1.find({})
    
    res.json(List3)
}) 




// @descr   fetch all products 
// @route   GET /api/products
// @access Public 

const getList4 = asyncHandler(async (req,res)=>{
    const List4 = await TerapharmList2.find({})
    
    res.json(List4)
}) 


export {getList1,getList2,getList3,getList4} 
