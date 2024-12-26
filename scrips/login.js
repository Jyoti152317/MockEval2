import { baseurl } from "./baseurl.js";
document
  .getElementById("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(email, password);
    try {
      let res = await fetch(baseurl + "user");
      let data = await res.json();
      console.log(data);
      let user = data.filter((ele) => ele.email == email);
      //   console.log(user);
      if (user.length != 0) {
        if (user[0].password == password) {
          alert("Login Success, you are directing to quiz page");
          window.location.href = `quiz.html`;
        } else {
          alert(
            "Invalid email or password, please enter correct email or password"
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
