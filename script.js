// Select input range values
const inputPrecio = document.querySelector('#precio');
const inputCursos = document.querySelector('#cursos');
const inputCPL = document.querySelector('#cpl');
const inputConversion = document.querySelector('#conversion');

// Select display elements
const displayPrecio = document.querySelector('.precio');
const displayCursos = document.querySelector('.cursos');
const displayCPL = document.querySelector('.cpl');
const displayConversion = document.querySelector('.conversion');

// Select results elements
const cpa = document.querySelector('.cpa');
const bruta = document.querySelector('.bruta');
const neta = document.querySelector('.neta');
const costo = document.querySelector('.costo');

// Display initial input values
displayPrecio.textContent = '$' + inputPrecio.value;
displayCursos.textContent = '#' + inputCursos.value;
displayCPL.textContent = '$' + inputCPL.value;
displayConversion.textContent = inputConversion.value + '%';

// Function to display input values
const inputToDisplay = function (input, display, prefijo = '$', sufijo = '') {
  input.addEventListener('input', (event) => {
    const value = event.target.value;
    display.textContent = `${prefijo}${value}${sufijo}`;
  });
};

// Call functions to display input values
inputToDisplay(inputPrecio, displayPrecio);
inputToDisplay(inputCursos, displayCursos, '#');
inputToDisplay(inputCPL, displayCPL);
inputToDisplay(inputConversion, displayConversion, '', '%');

// Declare variables to store results
let cpaValue;
let brutaValue;
let costoValue;
let netaValue;

// Initial results
let calculateResults = () => {
  cpaValue = Math.trunc((inputCPL.value / inputConversion.value) * 100);
  brutaValue = Math.trunc(inputPrecio.value * inputCursos.value);
  costoValue = Math.trunc(
    (inputCPL.value * 100 * inputCursos.value) / inputConversion.value
  );
  netaValue = Math.trunc(inputPrecio.value * inputCursos.value - costoValue);
  cpa.textContent = cpaValue.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  bruta.textContent = brutaValue.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  costo.textContent =
    '-' +
    costoValue.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  neta.textContent = netaValue.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};
calculateResults();

// Refresh results
document.addEventListener('input', (event) => {
  calculateResults();
});
