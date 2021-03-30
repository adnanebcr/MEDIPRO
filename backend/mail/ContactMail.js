import asyncHandler from "express-async-handler";

const contactMail = (req, res) => {
  let Data = req.body;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "testmedipro@gmail.com",
      pass: "test@1234",
    },
  });
  let mailOptions = {
    from: Data.mail, // sender address
    to: "adnane.bachchar@gmail.com", // list of receivers
    subject: "Hello3 ✔", // Subject line
    text: `message de ${Data.name}`, // plain text body
    html: `<h3>informations<h3>
        <ul>
        <li>Nom : ${Data.name}</li>
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
};

export { contactMail };
