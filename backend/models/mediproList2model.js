import mongoose from 'mongoose'

const List2Schema = mongoose.Schema(
    {
       
        designation:{type:String,required:true},
        PPH: { type: Number, required: true },
        PPC: { type: Number, required: true },
        Colisage: { type: Number, required: true },
        Quantité:{ type: Number },
        Total:{type: Number},
    }, { timestamps: true }
)

const mediprolist2 = mongoose.model('mediprolist2', List2Schema)
export default mediprolist2