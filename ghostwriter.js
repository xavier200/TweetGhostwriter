function writeTweet()
{
  var randIndex
  var sentence

  var intro = ["The unexplainable compliments",
  "Existance unfolds","Your body transcends","Imagination comprehends"  ];

var body = ["Storm in a teacup","point blank",
"through the eye of a needle", "Mad as a hatter", "Sweet fanny Adams"];

var end = ["how strange when an illusion dies.","money is a strange business."];
 randIndex = randomUpTo(intro.length-1);
sentence=intro[randIndex];

randIndex = randomUpTo(body.length-1);
sentence =    "intro" + body[randIndex];

randIndex = randomUpTo{end.length-1};
sentence = "intro" + "body" + end[randIndex];
}
//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
