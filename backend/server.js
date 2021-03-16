import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productListRoutes from "./routes/productsListRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { NotFound, ErrorHandler } from "./middleware/errorMiddleware.js";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import path from "path";
import morgan from "morgan";

dotenv.config();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/Contact", (req, res) => {
  let Data = req.body;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "adnane.bachchar@gmail.com",
      pass: "Adnane-x1001",
    },
  });
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
  };

  let info = transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("mail est envoyé :" + info.res);
    }
  });
});

app.use("/Signup", (req, res) => {
  let Data = req.body;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "adnane.bachchar@gmail.com",
      pass: "Adnane-x1001",
    },
  });
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
  };

  let info = transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("mail est envoyé :" + info.res);
    }
  });
});

app.use("/Cart", (req, res) => {
  let Data = req.body;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "adnane.bachchar@gmail.com",
      pass: "Adnane-x1001",
    },
  });

  let mailOptions = {
    from: "service commercial", // sender address
    to: Data.mail, // list of receivers
    cc: "adnane.bachchar@gmail.com",
    subject: "Nouvelle Commande", // Subject line
    text: `Nouvelle Commande de : ${Data.clientname}`, // plain text body
    html: `
                <h2>Nouvelle commande</h2>
                <p>
                  <strong>Nom et prénom:</strong> ${Data.clientname}
                </p>
                <p>
                  <strong> adresse mail : </strong>
                  ${Data.mail}
                </p>
                
                  <h4>Résumé:</h4>

               <Table>
               <tr>
               <td>Prix des produits : </td>
               <td>${Data.itemsPrice} MAD</td>
               </tr>
               <tr>
               <td>TVA : </td>
               <td>${Data.taxPrice} MAD</td>
               </tr>
               <tr>
               <td>Prix total : </td>
               <td>${Data.totalPrice} MAD</td>
               </tr>
               </Table>
    `, // html body
  };

  let info = transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("mail est envoyé :" + info.res);
    }
  });
});

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/productsList", productListRoutes);
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/orders", orderRoutes);

const __dirname = path.resolve();
app.use("frontend/public/uploads", express.static(path.join(__dirname)));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}
app.use(NotFound);

app.use(ErrorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
