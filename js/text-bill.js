// get reference to the bill type element 
const billTextTypeElement = document.querySelector('.billTypeText');
// get reference to the call total one element
const callTotalElement = document.querySelector('.callTotalOne');
// get reference to the sms total one element
const smsTotalElement = document.querySelector('.smsTotalOne');
// get reference to the sms and total one element
const totalCallAndSms = document.querySelector('.totalOne');
// get reference to the add bill button
const addBillBtn = document.querySelector('.addToBillBtn');
// get reference to the reset bill button element
const resetBillBtn = document.querySelector('.billsClearBtn');

// set the totals element to '0.00'
callTotalElement.innerHTML = '0.00';
smsTotalElement.innerHTML = '0.00'; 
totalCallAndSms.innerHTML = '0.00';

// create a call variable for the sum of calls
let callSum = 0;
// create an sms variable for the sum of sms
let smsSum = 0;
// create a variable for call and sms total
let callSmsTotal = 0;

// add an event listener for a click event to the add bill button and 
// the .addEventListener() takes in a click event and an anonymous function
addBillBtn.addEventListener('click', () => {
    // get the value of sms or call and set it to lower case and trim for spaces around it
    let callOrSmsValue = billTextTypeElement.value.toLowerCase().trim();
    // check if the value is a call
    if (callOrSmsValue === 'call') {
        // append to the call sum variable
        callSum += 2.75;
    // otherwise check if it is === an sms
    } else if (callOrSmsValue === 'sms') {
        // append to the sms sum variable
        smsSum += 0.65;
    // otherwise alert the user to enter the correct bill type
    } else {
        alert("Invalid bill type. Please enter correct bill type.");
    }

    callTotalElement.innerHTML = callSum.toFixed(2);
    smsTotalElement.innerHTML = smsSum.toFixed(2);
    callSmsTotal = (callSum + smsSum).toFixed(2);
    totalCallAndSms.innerHTML = callSmsTotal;

    if (callSum > 50.00) {
        callTotalElement.classList.add('danger');
        totalCallAndSms.classList.add('danger');
    } else if (callSum > 30.00) {
        callTotalElement.classList.add('warning');
        totalCallAndSms.classList.add('warning');
    } else if (smsSum > 50.00) {
        smsTotalElement.classList.add('danger');
        totalCallAndSms.classList.add('danger');
    } else if (smsSum > 30.00) {
        smsTotalElement.classList.add('warning');
        totalCallAndSms.classList.add('warning');
    }
})

// add an event listener for a click event to the reset bill button and 
// the .addEventListener() takes in a click event and an anonymous function
resetBillBtn.addEventListener('click', () => {
    // set the bill type input form to default
    billTextTypeElement.value = '';
    // reassign the callSum var to 0, so that we can refresh the values and not continue from the previous counting
    callSum = 0;
    // reassign the smsSum var to 0, so that we can refresh the values and not continue from the previous counting
    smsSum = 0;
    // reassign the callSmsTotal var to 0, so that we can refresh the values and not continue from the previous counting
    callSmsTotal = 0;
    // set the total elements to '0.00'
    callTotalElement.innerHTML = '0.00';
    smsTotalElement.innerHTML = '0.00';
    totalCallAndSms.innerHTML = '0.00';
    // removing the color and set it to default
    callTotalElement.classList.remove('warning', 'danger'); 
    smsTotalElement.classList.remove('warning', 'danger'); 
    totalCallAndSms.classList.remove('warning', 'danger');
})