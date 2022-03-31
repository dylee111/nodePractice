const nodemailer = require('nodemailer'); // 설치된 nodemailer를 불러옴
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "94271fdc4fd51c",
        pass: "baee15b06183dc"
    }
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

let email_data = {
    from: "dylee0568@gmail.com",
    to: "dylee0568@gmail.com",
    subject: "NODE TEST MAIL",
    text: "THIS IS NODE TEST EMAIL"
};

send(email_data);