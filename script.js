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

  // Create and show "Loading..." row
  const loadingRow = document.createElement("tr");
  loadingRow.setAttribute("id", "loading");

  const loadingCell = document.createElement("td");
  loadingCell.setAttribute("colspan", "2");
  loadingCell.textContent = "Loading...";
  loadingRow.appendChild(loadingCell);

  const table = document.createElement("table");
  table.appendChild(loadingRow);
  output.appendChild(table);

  // After delay, replace loading with text
  setTimeout(() => {
    loadingCell.textContent = text;
  }, delay);
});
