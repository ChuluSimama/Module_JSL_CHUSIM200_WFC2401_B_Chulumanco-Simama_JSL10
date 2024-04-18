document.addEventListener("DOMContentLoaded", () => {
  // 🪲 Bug: Incorrect ID used for attaching the event listener
  document.getElementById("solveRoom1").addEventListener("click", () => {
    fetch("books.json")
      .then((response) => response.json())
      .then((books) => {
        const mostRecentBook = findMostRecentBook(books);
        // 🪲 Bug: Incorrect element ID
        document.getElementById(
          "room1Result"
        ).textContent = `The key to the next room is: ${mostRecentBook.title}`;
      });
  });

  document.getElementById("solveRoom2").addEventListener("click", () => {
    const jsConcepts = new Set(["closure", "scope", "hoisting"]);
    // 🪲 Bug: What's mssing from JS concepts?
    const reactConcepts = new Set(["components", "jsx", "hooks", "async"]);
    // 🪲 Bug: Incorrect function call
    const commonConcepts = findIntersection(jsConcepts, jsConcepts);
    document.getElementById(
      "room2Result"
    ).textContent = `The code to unlock the door is: ${Array.from(
      commonConcepts
    ).join(", ")}`;
  });

  // 🪲 Bug: Asynchronous function ?
  document.getElementById("solveRoom3").addEventListener("click", () => {
    fetch("directions.json")
      .then((response) => response.json())
      .then((directions) => {
        navigateLabyrinth(directions).then((message) => {
          // 🪲 Bug: Incorrect method
          document.getElementById("room3Result").innerHTML = message;
        });
      });
  });
});

function findMostRecentBook(books) {
  // 🪲 Bug: Logic error
  const recentbook = books.reduce((mostRecent, book) => {
    const currentDate = new Date(book.published);
    const mostRecentDate = new Date(mostRecent.published);
    return currentDate > mostRecentDate ? book : mostRecent;
  });
  return recentbook
}

function findIntersection(setA, setB) {
  // 🪲 Bug: Incorrect logic
  const intersection = new Set([...setA]);
  return intersection;
}

async function navigateLabyrinth(directions) {
  for (let direction of directions) {
    // 🪲 Bug: No delay
    new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Navigating: ${direction.step}`);
  }
  return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
