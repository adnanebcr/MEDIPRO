import express from 'express'; 
import { config } from 'dotenv';
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'


import nodemailer from 'nodemailer'
import {NotFound,ErrorHandler} from './middleware/errorMiddleware.js'
import bodyParser from 'body-parser';



config()
connectDB()

const app =express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/Contact',(req,res)=>{
    let Data = req.body
    let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'adnane.bachchar@gmail.com',
        pass:'Adnane-x1001'
    }
})
let mailOptions = {
    from: Data.mail, // sender address
    to: "adnane.bachchar@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: `message de ${Data.name}`, // plain text body
    html: `<h3>informations<h3>
        <ul>
        <li>téléphone : ${Data.phone}</li>
        <li>email : ${Data.email}</li>
        <li>société : ${Data.societe}</li>
        </ul>
        <h3>Message : </h3>
        <p>${Data.message}</p>
    `, // html body
  }

 let info =  transporter.sendMail(mailOptions,function(err,info)
 {
     if(err)
     {
         console.log(err)
     }
     else 
     {
         console.log('mail est envoyé :' + info.res)
     }
 });
})


app.use('/Signup',(req,res)=>{
    let Data = req.body
    let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'adnane.bachchar@gmail.com',
        pass:'Adnane-x1001'
    }
})
let mailOptions = {
    from: Data.mail, // sender address
    to: "adnane.bachchar@gmail.com", // list of receivers
    subject: "Nouvelle demande d'enregistrement", // Subject line
    text: `Nouvelle demande d'enregistrement : ${Data.name}`, // plain text body
    html: `<h3>informations<h3>
        <ul>
        <li>Nom : ${Data.name}</li>
        <li>Mot de passe : ${Data.password}</li>
        <li>email : ${Data.email}</li>
        <li>Telephone : ${Data.phone}</li>
        <li>Adresse : ${Data.adress}</li>
        </ul>
        
    `, // html body
  }

 let info =  transporter.sendMail(mailOptions,function(err,info)
 {
     if(err)
     {
         console.log(err)
     }
     else 
     {
         console.log('mail est envoyé :' + info.res)
     }
 });
})



app.use(express.json())
app.get('/',(req,res)=>
{res.send('API is running ....')})


app.use('/api/products',productRoutes)
app.use('/api/users', userRoutes)

app.use(NotFound)

app.use(ErrorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))

