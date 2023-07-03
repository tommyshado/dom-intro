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
callTotalElement.innerHTML = (0).toFixed(2);
smsTotalElement.innerHTML = (0).toFixed(2);
totalCallAndSms.innerHTML = (0).toFixed(2);

// create a call variable for the sum of calls
let callSum = 0;
// create an sms variable for the sum of sms
let smsSum = 0;
// create a variable for call and sms total
let callSmsTotal = 0;

// factory function instance
const instance = textBillFactory();

// add an event listener for a click event to the add bill button and 
// the .addEventListener() takes in a click event and an anonymous function
addBillBtn.addEventListener('click', textBillAdd = () => {

    // use setSmsCallCost() method to set sms or a call from the user
    instance.setSmsOrCall(billTextTypeElement.value);

    callTotalElement.innerHTML = userTemplate({callCost: instance.getCallCost()});
    smsTotalElement.innerHTML = userTemplate({smsCost: instance.getSmsCost()});
    callSmsTotal = userTemplate({total: instance.smsCallTotal()});
    totalCallAndSms.innerHTML = callSmsTotal;

    totalCallAndSms.classList.add(instance.addClassColor());
})

// add an event listener for a click event to the reset bill button and 
// the .addEventListener() takes in a click event and an anonymous function
resetBillBtn.addEventListener('click', textBillReset = () => {
    // set the bill type input form to default
    billTextTypeElement.value = '';
    // reassign the callSum var to 0, so that we can refresh the values and not continue from the previous counting
    callSum = 0;
    // reassign the smsSum var to 0, so that we can refresh the values and not continue from the previous counting
    smsSum = 0;
    // reassign the callSmsTotal var to 0, so that we can refresh the values and not continue from the previous counting
    callSmsTotal = 0;
    // set the total elements to '0.00'
    callTotalElement.innerHTML = (0).toFixed(2);
    smsTotalElement.innerHTML = (0).toFixed(2);
    totalCallAndSms.innerHTML = (0).toFixed(2);
    // removing the color and set it to default
    totalCallAndSms.classList.remove('warning', 'danger');
})