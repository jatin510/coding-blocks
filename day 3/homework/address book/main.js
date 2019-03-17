window.onload = function() {
  var s = "";

  for (let i = 65; i <= 90; i++) {
    console.log(String.fromCharCode(i));
    s += `<li id="${i - 65}" class="initials" onclick="contacts(${i -
      65})"> ${String.fromCharCode(i)} </li>`;
  }

  var list = document.getElementById("alpha");

  list.innerHTML = s;

  contacts(0);
};

// function contacts(a) {

// }

contacts = unique => {
  var s = document.getElementsByClassName("0");

  var x = document.getElementById("a").getElementsByTagName("li");
  console.log(x);
};
