import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required: true,
            ref :'User'
        },

        orderItems:
        [
          {
              name :{type:String ,required:true},
              product :{type:mongoose.Schema.Types.ObjectId,required:true,ref:'Product'},
              quantity:{type:Number,required:true},
              price:{type:Number,required:true},
              totalPrice:{type:Number,required:true}
          }  
        ],
      

    }, { timestamps: true }
)

const Order = mongoose.model('Order', orderSchema)
export default Order