import "./styles.css";

// Iteration 1: Names and Input

let hacker1 = "Estelle";
let hacker2 = "Victor";

console.log(`The Driver's name is ${hacker1}.`);
console.log(`The Navigators's name is ${hacker2}.`);

// Iteration 2: Conditionals

let driver = hacker1.length;
let navigator = hacker2.length;

if (driver > navigator) {
  console.log(`The Driver has the longest name, it has ${driver} characters`);
} else if (navigator > driver) {
  console.log(
    `Yo, navigator got the longest name, it has ${navigator} characters`
  );
} else {
  console.log(`Wow, you both got equally long names, ${driver} characters!`);
}

// Iteration 3: Loops

let driverSpace = hacker1.split("").join(" ");
console.log(driverSpace.toUpperCase());

let navigatorReverse = hacker2
  .split("")
  .reverse()
  .join("");
console.log(navigatorReverse);

let localeCompared = hacker1.localeCompare(hacker2);
if (localeCompared === -1) {
  console.log(`The driver's name goes first.`);
} else if (localeCompared === 1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both got the same name?`);
}

// Iteration 4: Lorem Ipsum

let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a ligula vel felis rhoncus finibus. Aenean vel faucibus nunc, ut faucibus lorem. Sed ullamcorper dui nulla, ac varius purus posuere eget. Donec vehicula elit non nisl vulputate, id tristique ex efficitur. Praesent semper efficitur diam, eu consequat ipsum lacinia ac. Sed nec dictum ipsum. Morbi pellentesque orci faucibus neque volutpat posuere. Mauris sed dui at augue varius cursus vitae ac risus. Mauris ligula purus, placerat auctor purus a, dictum mattis eros. Pellentesque ultricies elit id tortor laoreet porttitor. Nullam egestas orci quis consequat dignissim. Curabitur congue odio quis tincidunt vestibulum. Nam accumsan dolor vitae mi dapibus consequat. Integer varius blandit eros eget accumsan. Cras a sem id mauris sagittis tempus eu a risus.

Cras nec lobortis mauris, vel ultricies mauris. Integer volutpat tempor nunc. Pellentesque lobortis pellentesque suscipit. Vivamus eu facilisis ante. Duis id risus sit amet erat porttitor lacinia in id justo. Aenean turpis ipsum, elementum vel pharetra sit amet, blandit sed est. Curabitur scelerisque tortor at lectus venenatis, tempor feugiat tellus tincidunt. Donec laoreet, sapien vel varius imperdiet, purus enim consequat erat, et consectetur erat orci volutpat urna. Praesent neque nulla, porttitor nec tortor vitae, ultricies rhoncus velit. Phasellus quis ex augue. Aenean quis libero ligula. Proin nec enim quis lectus pellentesque condimentum. Ut eu luctus nisi. Suspendisse potenti. Phasellus mollis mi eget arcu lacinia, eget vehicula mi rhoncus.

Aenean at ligula in quam porta vulputate sit amet bibendum massa. Vivamus ut aliquet velit, elementum pharetra odio. Aliquam purus sem, vulputate sit amet tempus vitae, consectetur in diam. Cras luctus dui vel dui gravida tristique nec iaculis sem. Etiam arcu ante, congue at imperdiet id, egestas nec lorem. Morbi condimentum lorem in orci auctor posuere. Fusce ut velit efficitur, hendrerit massa sed, cursus nisi. Maecenas hendrerit nisi at scelerisque accumsan. Ut vel mi eget libero volutpat euismod sit amet a ligula. Morbi fringilla, nulla nec venenatis placerat, lorem nunc egestas justo, in efficitur orci elit quis ligula. Vivamus imperdiet efficitur semper. Pellentesque tristique, ante in vehicula suscipit, felis nisl accumsan nisi, nec finibus turpis ipsum ut leo. Mauris eget viverra nisl, in tincidunt leo. Phasellus malesuada orci vel quam rhoncus, mollis tempor tellus mollis. Aliquam faucibus risus vitae laoreet mollis.`;

let text2 = text.split(" ").length;
console.log(text2);

var searching = text.match(/et/gi);
console.log(searching.length);

document.getElementById("app").innerHTML = `
<h1></h1>
<div>
  
</div>
`;
