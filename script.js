// ============================================================================
// Part 1: JavaScript Basics - Variables, Conditionals, and User Interaction
// ============================================================================

// Variable declarations
const ageInput = document.getElementById('ageInput');
const checkEligibilityBtn = document.getElementById('checkEligibility');
const eligibilityResult = document.getElementById('eligibilityResult');

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const compareNumbersBtn = document.getElementById('compareNumbers');
const comparisonResult = document.getElementById('comparisonResult');

// Function to check voting eligibility
function checkVotingEligibility() {
    // Get user input
    const age = parseInt(ageInput.value);
    let message;
    
    // Conditional logic
    if (isNaN(age)) {
        message = "Please enter a valid age.";
    } else if (age < 0) {
        message = "Age cannot be negative.";
    } else if (age < 18) {
        message = `You are ${age} years old. You are not eligible to vote.`;
    } else {
        message = `You are ${age} years old. You are eligible to vote!`;
    }
    
    // Output result
    eligibilityResult.textContent = message;
}

// Function to compare two numbers
function compareNumbers() {
    // Get user inputs
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    let result;
    
    // Conditional logic with comparison operators
    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
    } else if (num1 > num2) {
        result = `${num1} is greater than ${num2}`;
    } else if (num1 < num2) {
        result = `${num1} is less than ${num2}`;
    } else {
        result = `${num1} is equal to ${num2}`;
    }
    
    // Output result
    comparisonResult.textContent = result;
}

// Add event listeners for Part 1
checkEligibilityBtn.addEventListener('click', checkVotingEligibility);
compareNumbersBtn.addEventListener('click', compareNumbers);

// ============================================================================
// Part 2: JavaScript Functions - Reusable Blocks of Logic
// ============================================================================

// Function declarations
const radiusInput = document.getElementById('radiusInput');
const calculateCircleBtn = document.getElementById('calculateCircle');
const circleResult = document.getElementById('circleResult');

const textInput = document.getElementById('textInput');
const formatUppercaseBtn = document.getElementById('formatUppercase');
const formatLowercaseBtn = document.getElementById('formatLowercase');
const formatCapitalizeBtn = document.getElementById('formatCapitalize');
const formattedText = document.getElementById('formattedText');

// Function to calculate circle properties
function calculateCircleProperties() {
    const radius = parseFloat(radiusInput.value);
    
    if (isNaN(radius) || radius <= 0) {
        circleResult.textContent = "Please enter a valid positive number for radius.";
        return;
    }
    
    // Calculate area and circumference using helper functions
    const area = calculateArea(radius);
    const circumference = calculateCircumference(radius);
    
    // Display results
    circleResult.innerHTML = `
        For a circle with radius ${radius}:<br>
        Area = ${area.toFixed(2)}<br>
        Circumference = ${circumference.toFixed(2)}
    `;
}

// Helper function to calculate area
function calculateArea(radius) {
    return Math.PI * radius * radius;
}

// Helper function to calculate circumference
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}

// Function to format text based on format type
function formatText(formatType) {
    const text = textInput.value;
    
    if (!text.trim()) {
        formattedText.textContent = "Please enter some text.";
        return;
    }
    
    let formattedTextValue;
    
    // Apply different formatting based on the formatType parameter
    switch(formatType) {
        case 'uppercase':
            formattedTextValue = text.toUpperCase();
            break;
        case 'lowercase':
            formattedTextValue = text.toLowerCase();
            break;
        case 'capitalize':
            formattedTextValue = text.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
            break;
        default:
            formattedTextValue = text;
    }
    
    formattedText.textContent = formattedTextValue;
}

// Add event listeners for Part 2
calculateCircleBtn.addEventListener('click', calculateCircleProperties);
formatUppercaseBtn.addEventListener('click', () => formatText('uppercase'));
formatLowercaseBtn.addEventListener('click', () => formatText('lowercase'));
formatCapitalizeBtn.addEventListener('click', () => formatText('capitalize'));

// ============================================================================
// Part 3: JavaScript Loops - Repetition and Iteration
// ============================================================================

// Loop examples
const multiplicationInput = document.getElementById('multiplicationInput');
const generateTableBtn = document.getElementById('generateTable');
const multiplicationResult = document.getElementById('multiplicationResult');

const countdownInput = document.getElementById('countdownInput');
const startCountdownBtn = document.getElementById('startCountdown');
const countdownResult = document.getElementById('countdownResult');

const arrayResult = document.getElementById('arrayResult');

// Function to generate multiplication table using a for loop
function generateMultiplicationTable() {
    const number = parseInt(multiplicationInput.value);
    
    if (isNaN(number)) {
        multiplicationResult.textContent = "Please enter a valid number.";
        return;
    }
    
    let tableHTML = `<h4>Multiplication Table for ${number}</h4>`;
    
    // For loop to generate the table
    for (let i = 1; i <= 10; i++) {
        tableHTML += `${number} × ${i} = ${number * i}<br>`;
    }
    
    multiplicationResult.innerHTML = tableHTML;
}

// Function to start a countdown using a while loop
function startCountdown() {
    let count = parseInt(countdownInput.value);
    
    if (isNaN(count) || count <= 0) {
        countdownResult.textContent = "Please enter a positive number.";
        return;
    }
    
    // Clear previous countdown
    countdownResult.innerHTML = "";
    
    // While loop for countdown
    let current = count;
    const countdownInterval = setInterval(() => {
        if (current > 0) {
            countdownResult.innerHTML += `T-${current}...<br>`;
            current--;
        } else {
            countdownResult.innerHTML += "🚀 Liftoff!";
            clearInterval(countdownInterval);
        }
    }, 1000);
}

// Additional example: Processing arrays with forEach
function processArray() {
    const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
    let output = "<h4>Fruits List (Processed with forEach):</h4>";
    
    // Using forEach to iterate over array
    fruits.forEach((fruit, index) => {
        output += `${index + 1}. ${fruit} (${fruit.length} letters)<br>`;
    });
    
    arrayResult.innerHTML = output;
}

// Add event listeners for Part 3
generateTableBtn.addEventListener('click', generateMultiplicationTable);
startCountdownBtn.addEventListener('click', startCountdown);

// ============================================================================
// Part 4: DOM Manipulation - Interactive Web Pages
// ============================================================================

// DOM manipulation examples
const newItemInput = document.getElementById('newItemInput');
const addListItemBtn = document.getElementById('addListItem');
const dynamicList = document.getElementById('dynamicList');

const styleBox = document.getElementById('styleBox');
const colorBlueBtn = document.getElementById('colorBlue');
const colorRedBtn = document.getElementById('colorRed');
const colorGreenBtn = document.getElementById('colorGreen');
const toggleRoundedBtn = document.getElementById('toggleRounded');
const toggleVisibilityBtn = document.getElementById('toggleVisibility');

const eventButton = document.getElementById('eventButton');
const eventLog = document.getElementById('eventLog');

// Function to add new list items
function addNewListItem() {
    const newItemText = newItemInput.value.trim();
    
    if (!newItemText) {
        alert("Please enter some text.");
        return;
    }
    
    // Create new element
    const newItem = document.createElement('div');
    newItem.className = 'list-item';
    newItem.textContent = newItemText;
    
    // Add delete functionality
    newItem.addEventListener('click', function() {
        this.remove();
        logEvent(`Deleted item: "${this.textContent}"`);
    });
    
    // Append to list
    dynamicList.appendChild(newItem);
    logEvent(`Added new item: "${newItemText}"`);
    
    // Clear input
    newItemInput.value = '';
}

// Function to change box color
function changeColor(color) {
    styleBox.style.backgroundColor = color;
    logEvent(`Changed box color to ${color}`);
}

// Function to toggle rounded corners
function toggleRoundedCorners() {
    styleBox.style.borderRadius = styleBox.style.borderRadius === '50%' ? '5px' : '50%';
    logEvent('Toggled rounded corners');
}

// Function to toggle visibility
function toggleBoxVisibility() {
    styleBox.style.display = styleBox.style.display === 'none' ? 'block' : 'none';
    logEvent('Toggled box visibility');
}

// Function to log events
function logEvent(message) {
    const timestamp = new Date().toLocaleTimeString();
    eventLog.innerHTML += `[${timestamp}] ${message}<br>`;
    eventLog.scrollTop = eventLog.scrollHeight;
}

// Add event listeners for Part 4
addListItemBtn.addEventListener('click', addNewListItem);
colorBlueBtn.addEventListener('click', () => changeColor('blue'));
colorRedBtn.addEventListener('click', () => changeColor('red'));
colorGreenBtn.addEventListener('click', () => changeColor('green'));
toggleRoundedBtn.addEventListener('click', toggleRoundedCorners);
toggleVisibilityBtn.addEventListener('click', toggleBoxVisibility);

// Set up event listeners when page loads
window.addEventListener('load', function() {
    // Process array with forEach
    processArray();
    
    // Add click event listener to button
    eventButton.addEventListener('click', function() {
        logEvent("Button was clicked!");
    });
    
    // Add mouseover event listener to button
    eventButton.addEventListener('mouseover', function() {
        logEvent("Mouse over button");
    });
    
    // Add mouseout event listener to button
    eventButton.addEventListener('mouseout', function() {
        logEvent("Mouse out from button");
    });
    
    logEvent("Page loaded and event listeners added");
});