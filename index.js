document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("keypress", function(event) {
      const key = event.key;
      const display = document.getElementById('display');
  
      // Check if the key is a digit or an operator
      if (/[0-9+\-*/.^!]/.test(key)) {
        appendToDisplay(key);
      } else if (key === "Enter") {
        calculate();
      } else if (key === "Escape") {
        clearDisplay();
      }
    });
  });
  
  document.addEventListener("keypress",(event)=>{
    console.log(event.key)
  })
  // Rest of the calculator functions remain the same as before
  
  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    let result;
    try {
      result = eval(document.getElementById('display').value);
    } catch (error) {
      result = 'Error';
    }
    document.getElementById('display').value = result;
  }
  
  function calculateExponent() {
    let expression = document.getElementById('display').value;
    let parts = expression.split('^');
    if (parts.length === 2) {
      let base = parseFloat(parts[0]);
      let exponent = parseFloat(parts[1]);
      let result = Math.pow(base, exponent);
      document.getElementById('display').value = result;
    }
  }
  
  function calculateSquareRoot() {
    let expression = document.getElementById('display').value;
    let value = parseFloat(expression);
    if (!isNaN(value)) {
      let result = Math.sqrt(value);
      document.getElementById('display').value = result;
    }
  }
  
  function calculateFactorial() {
    let expression = document.getElementById('display').value;
    let value = parseFloat(expression);
    if (!isNaN(value) && Number.isInteger(value) && value >= 0) {
      let result = 1;
      for (let i = 2; i <= value; i++) {
        result *= i;
      }
      document.getElementById('display').value = result;
    } else {
      document.getElementById('display').value = 'Error';
    }
  }
  
  function storeToMemory() {
    let value = document.getElementById('display').value;
    memory = parseFloat(value);
  }
  
  function recallMemory() {
    document.getElementById('display').value = memory;
  }
  
  function clearMemory() {
    memory = 0;
  }
  