import mongoose from 'mongoose'

const List3Schema = mongoose.Schema(
    {
    
        designation:{type:String,required:true},
        PPH: { type: Number, required: true },
        PPC: { type: Number, required: true },
        Colisage: { type: Number, required: true },
        Quantité:{ type: Number },
        Total:{type: Number},
    }, { timestamps: true }
)

const TerapharmList1 = mongoose.model('TerapharmList1', List3Schema)
export default TerapharmList1