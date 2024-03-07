// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
if (isNaN(investment)) {alert( 'Please enter a valid number');}
rate = parseFloat(prompt('Enter interest rate as xx.x'));
if (rate > 0.3 || rate < 0.01) { alert("Interest rate  must be between 0.01 and  0.3"); }
years = parseInt(prompt('Enter the number of years you want to invest for'));
if (isNaN(years)) {alert( 'Please enter a valid number');}
// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);