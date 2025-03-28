import nodeMailer from "nodemailer";

export const sendEmail = async ({ email, subject, message,applyLink  }) => {

  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    service: process.env.SMTP_SERVICE,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const options = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: subject,
    text: message,

    html: `
      <p>${message.replace(/\n/g, "<br>")}</p>
      <p>
        <a href="${applyLink}" 
           style="display: inline-block; padding: 10px 15px; font-size: 16px; color: #fff; background-color: #007bff; text-decoration: none; border-radius: 5px;">
           Apply Now
        </a>
      </p>
    `,
  };

  await transporter.sendMail(options);
};
