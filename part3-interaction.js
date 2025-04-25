
function sayHello() {
    document.getElementById("message").innerText = "Hello there!";
  }

  function showName() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("output").innerText = "Nice to meet you, " + name + "!";
  }