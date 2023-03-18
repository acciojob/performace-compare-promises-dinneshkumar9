// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
// Function to fetch data from APIs using Promise.all() and Promise.any()
async function fetchData() {
  const startTimeAll = performance.now(); // Start time for Promise.all()
  const allResults = await Promise.all(apiUrls.map(url => fetch(url)));
  const endTimeAll = performance.now(); // End time for Promise.all()
  const timeTakenAll = endTimeAll - startTimeAll; // Time taken for Promise.all()

  const startTimeAny = performance.now(); // Start time for Promise.any()
  const anyResult = await Promise.any(apiUrls.map(url => fetch(url)));
  const endTimeAny = performance.now(); // End time for Promise.any()
  const timeTakenAny = endTimeAny - startTimeAny; // Time taken for Promise.any()

  // Display time taken for each method in the table
  document.getElementById("output-all").textContent = timeTakenAll;
  document.getElementById("output-any").textContent = timeTakenAny;
}

fetchData(); // Call the fetchData function to display the results in the table