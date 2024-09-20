function executeCode() {
  // Get the code from the textarea
  const code = document.getElementById('code').value;

  // Clear previous output
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '';

  // Override console.log to redirect output to the div
  (function() {
    const originalLog = console.log;
    console.log = function(...args) {
      args.forEach(arg => {
        const message = document.createElement('p');
        message.textContent = arg;
        outputDiv.appendChild(message);
      });
      originalLog.apply(console, args);  // This maintains normal console logging as well
    };
  })();

  try {
    // Evaluate the user-provided JavaScript code
    eval(code);
  } catch (error) {
    // Display errors in the output div
    const errorMessage = document.createElement('p');
    errorMessage.style.color = 'red';
    errorMessage.textContent = `Error: ${error.message}`;
    outputDiv.appendChild(errorMessage);
  }
}
// Function to clear the output section
function clearCode() {
  const outputDiv = document.getElementById('output'); // Reference to the output section
  outputDiv.innerHTML = ''; // Clear the output section content
}
