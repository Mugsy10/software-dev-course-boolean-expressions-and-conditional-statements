/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

// Inventory
const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = false;

console.log("You wake up in a dark forest.");
console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains") {
  if (hasTorch) {
    console.log("You safely navigate through the dark mountains.");
    const caveChoice = readline.question("You find a cave. Do you 'enter' or 'pass by'? ");
    if (caveChoice === "enter") {
      if (hasSword) {
        console.log("You fight off a wild beast inside and discover treasure!");
      } else {
        console.log("You are attacked by a beast and have no weapon to defend yourself...");
      }
    } else {
      console.log("You pass the cave and climb higher into the mountains.");
    }
  } else {
    console.log("It's too dark to proceed. You decide to turn back.");
  }
} else if (choice === "village") {
  if (hasMap || hasCompass) {
    console.log("Using your map or compass, you find your way to the village.");
  } else {
    console.log("You wander toward the village, but end up lost in the forest.");
  }

  const villageChoice = readline.question("A villager offers you a quest. Do you 'accept' or 'decline'? ");
  if (villageChoice === "accept") {
    console.log("You begin a new journey as the village hero!");
  } else {
    console.log("You decide to rest and enjoy the calm village life.");
  }
} else {
  console.log("You hesitate for too long and night falls. You're forced to set up camp in the woods.");
}
