const SERVICE_ID = "service_ek1c8vm";
const TEMPLATE_ID = "template_dgicnqp";

const form = document.querySelector(".form");

form.addEventListener("submit", () => {
  const first_name = document.querySelector(".first-name");
  const last_name = document.querySelector(".last-name");
  const email = document.querySelector(".email");
  const message = document.querySelector(".message");

  const emailObj = {
    to_name: "Chinmay Janadri",
    from_name: first_name.value + " " + last_name.value,
    message: message.value,
    from_email: email.value,
  };

  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, emailObj)
    .then((res) => {
      first_name.value = "";
      last_name.value = "";
      email.value = "";
      message.value = "";
      alert("You message has been sent");
      console.log(res.status, res.text);
    })
    .catch((err) => {
      alert("Failed to send email");
      console.log(err);
    });
});
