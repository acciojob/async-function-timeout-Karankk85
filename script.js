const btn = document.getElementById("btn");
const output = document.getElementById("output");

// Helper function to wait for delay using Promise
const delayPromise = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

btn.addEventListener("click", async () => {
  const text = document.getElementById("text").value.trim();
  const delay = parseInt(document.getElementById("delay").value);

  // Clear previous output
  output.textContent = "";

  // Input validation
  if (!text || isNaN(delay) || delay < 0) {
    output.textContent = "Please enter valid text and delay!";
    return;
  }

  // Await the delay
  await delayPromise(delay);

  // Show the message after delay
  output.textContent = text;
});
