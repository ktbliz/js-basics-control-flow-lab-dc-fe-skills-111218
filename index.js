// Write your code in this file!

function scuberGreetingForFeet(feet) {
  if (feet <= 400 ) {
    let result = "This one is on me!";
  }
    
  else if (feet > 2000 && feet <= 2500) {
    let result = "I will gladly take your thirty bucks.";
  }
    
  else if (feet > 2500) {
    let result = "No can do.";
  }
     
  return result;
}

scuberGreetingForFeet()


function ternaryCheckCity(city) {
  let result =
  city === "NYC" ? "Ok, sounds good." : "No go.";
  return result
}

ternaryCheckCity()