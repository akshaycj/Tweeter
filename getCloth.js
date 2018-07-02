function getClothing(isCold) {
  var text = "";

  if (isCold) {
    text = "Grab a jacket!";
  } else {
    text = "Its a shorts kind of day.";
  }
  console.log(text);
}

getClothing(false);
