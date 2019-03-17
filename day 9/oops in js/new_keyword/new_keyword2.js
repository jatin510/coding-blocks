console.log(this);

function fun() {
  console.log(this == global);
}

fun();
