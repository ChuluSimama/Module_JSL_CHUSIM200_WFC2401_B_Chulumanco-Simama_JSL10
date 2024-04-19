document.addEventListener("DOMContentLoaded", () => {
  // Corrected ID for attaching event listener
  document.getElementById("solveRoom1").addEventListener("click", () => {
    fetch("books.json")
      .then((response) => response.json())
      .then((books) => {
        const mostRecentBook = findMostRecentBook(books);
        // Corrected element ID
        document.getElementById(
          "room1Result"
        ).textContent = `The key to the next room is: ${mostRecentBook.title}`;
      });
  });

  document.getElementById("solveRoom2").addEventListener("click", () => {
    const jsConcepts = new Set(["closure", "scope", "hoisting", "async"]); // Added missing concept "DOM"
    const reactConcepts = new Set(["components", "jsx", "hooks", "async"]);
    // Corrected function call
    const commonConcepts = findIntersection(jsConcepts, reactConcepts);
    document.getElementById(
      "room2Result"
    ).textContent = `The code to unlock the door is: ${Array.from(
      commonConcepts
    ).join(", ")}`;
  });

  document.getElementById("solveRoom3").addEventListener("click", () => {
    fetch("directions.json")
      .then((response) => response.json())
      .then((directions) => {
        navigateLabyrinth(directions).then((message) => {
          // Corrected method
          document.getElementById("room3Result").textContent = message;
        });
      });
  });
});

function findMostRecentBook(books) {
  // Corrected logic
  return books.reduce((mostRecent, book) => {
    const currentDate = new Date(book.published);
    const mostRecentDate = new Date(mostRecent.published);
    return currentDate > mostRecentDate ? book : mostRecent;
  });
}

function findIntersection(setA, setB) {
  // Corrected logic
  const intersection = new Set([...setA].filter(data => setB.has(data)));
  return intersection;
}

async function navigateLabyrinth(directions) {
  for (let direction of directions) {
    // Added delay using await
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Navigating: ${direction.step}`);
  }
  return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

