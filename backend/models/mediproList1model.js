import mongoose from 'mongoose'

const List1Schema = mongoose.Schema(
    {
        id:{type: Number , required: true},
        designation:{type:String,required:true},
        PPH: { type: Number, required: true },
        PPC: { type: Number, required: true },
        Colisage: { type: Number, required: true },
        Quantité:{ type: Number },
        Total:{type: Number},
    }, { timestamps: true }
)

const mediprolist1 = mongoose.model('mediprolist1', List1Schema)
export default mediprolist1