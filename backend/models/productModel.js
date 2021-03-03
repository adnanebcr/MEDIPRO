import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
    {
        user : 
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
        },
        name:{type: String , required: true},
        type: { type: String, required: true },
        liste:{ type: String, required: true },
        metadesc:{ type: String, required: true },
        image:{type: String,required: true},
        fiche:{type: String},
        gammes:{type: String,required: true},
        description:{type: String,required: true},
        proprietes:{type: String,required: true},
        conseil:{type: String,required: true},
        precautions1:{type: String,required: true},
        precautions2:{type: String},
        precautions3:{type: String},
        PPH: { type: Number, required: true },
        PPC: { type: Number, required: true },
        Colisage: { type: Number, required: true },
    }, { timestamps: true }
)

const Product = mongoose.model('Product', productSchema)
export default Product