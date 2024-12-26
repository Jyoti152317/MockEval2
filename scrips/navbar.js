function navbar() {
  let navbar = `<div id="nav>
        <nav>
            <a href="index.html">Home</a>
            <a href="quiz.html">Quiz</a>
            <a href="questions.html">Question</a>
        </nav>
    </div>`;
  document.getElementById("navbar").innerHTML = navbar;
}
navbar();
