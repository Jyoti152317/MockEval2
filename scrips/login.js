document
  .getElementById("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    try {
      let res = await fetch("http://localhost:3000/user");
      let data = await res.json();
      console.log(data);
      if (data.email == email && data.password == password) {
        alert("Login Success, you are directing to quiz page");
        window.location.href = "quiz.html";
      } else {
        alert(
          "Invalid email or password, please enter correct email or password"
        );
      }
    } catch (error) {
      console.log(error);
    }
  });
