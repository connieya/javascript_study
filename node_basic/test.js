const nodemailer = require("nodemailer");
const email = {
  host: "",
  post: "",
  secure: false,
  auth: {
    user: "",
    pass: "",
  },
};

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let data = {
  from: "gunny6026@naver.com",
  to: "gunny6026@naver.com",
  subject: "test",
  text: "good",
};

send(data);
