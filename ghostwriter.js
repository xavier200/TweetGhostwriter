function writeTweet()
{
  var randIndex = document.getElementById("tweet").value
  var sentence = intro[randIndex];

  var intro = ["The unexplainable compliments",
  "Existance unfolds""Your body transcends" "Imagination comprehends"  ]

var body = ["Storm in a teacup""point blank"
"through the eye of a needle" "Mad as a hatter" "Sweet fanny Adams"]

var end = ["how strange when an illusion dies.""money is a strange business."]
}
//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}

var randIndex = randomUpTo(intro.length-1);


var randIndex = randomUpTo(body.length-1)


var randIndex = randomUpTo(end.length-1)
;
