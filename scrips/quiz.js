import { baseurl } from "./baseurl.js";

document
  .getElementById("quiz-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let title = document.getElementById("ques").value;
    let optionA = document.getElementById("option1").value;
    let optionB = document.getElementById("option2").value;
    let optionC = document.getElementById("option3").value;
    let optionD = document.getElementById("option4").value;
    let correctOption = document.getElementById("correctOption").value;

    const quizObj = {
      title,
      optionA,
      optionB,
      optionC,
      optionD,
      correctOption,
    };

    fetch(baseurl + "/quiz", {
      method: "POST",
      headers: {
        contentType: "application/json",
      },
      body: JSON.stringify(quizObj),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Question Created");
      })
      .catch((error) => console.log(error));
  });
