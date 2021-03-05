import mongoose from 'mongoose'

const List4Schema = mongoose.Schema(
    {
       
        designation:{type:String,required:true},
        PPH: { type: Number, required: true },
        PPC: { type: Number, required: true },
        Colisage: { type: Number, required: true },
        Quantité:{ type: Number },
        Total:{type: Number},
    }, { timestamps: true }
)

const TerapharmList2 = mongoose.model('TerapharmList2', List4Schema)
export default TerapharmList2