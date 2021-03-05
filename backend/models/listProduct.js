import mongoose from 'mongoose'

const listProductSchema = mongoose.Schema(
    {
        liste:{type:String,required:true},
        designation:{type:String,required:true},
        PPH: { type: Number, required: true },
        PPC: { type: Number, required: true },
        Colisage: { type: Number, required: true },
        Quantité:{ type: Number },
        Total:{type: Number},
    }, { timestamps: true }
)

const listProduct = mongoose.model('listeProduct', listProductSchema)
export default listProduct