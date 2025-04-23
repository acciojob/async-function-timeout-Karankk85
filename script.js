const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  const text = document.getElementById("text").value.trim();
  const delay = parseInt(document.getElementById("delay").value);

  // Clear previous content
  output.innerHTML = "";

  // Validation
  if (!text || isNaN(delay) || delay < 0) {
    output.textContent = "Please enter valid text and delay!";
    return;
  }

  // Show "Loading..." text
  output.textContent = "Loading...";

  // After delay, replace loading with text
  setTimeout(() => {
    output.textContent = text;
  }, delay);
});
