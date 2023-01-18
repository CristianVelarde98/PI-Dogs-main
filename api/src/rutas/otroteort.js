array = [
  "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",

  "Aloof, Clownish, Dignified, Independent, Happy",

  "Wild, Hardworking, Dutiful",

  "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",

  "Loyal, Independent, Intelligent, Brave",
];

let newArray = [];
array.map((element) => {
  let words = element.split(", ");
  newArray = newArray.concat(words);
});

console.log(newArray);

const uniqueArray = newArray.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueArray);
