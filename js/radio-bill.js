// get reference to the radio buttons
const radioBtn = document.querySelectorAll('input[type="radio"][name="billItemType"]');
//get a reference to the add button
const addBtn = document.querySelector('.radioBillAddBtn');
// get reference to the reset button
const resetRadioBtn = document.querySelector('.radioResetBtn');
// get the reference to the call total element
const callTotalElem = document.querySelector('.callTotalTwo');
// get the reference to the sms total element
const smsTotalElem = document.querySelector('.smsTotalTwo');
// get the reference to the total of sms and call element
const totalBill = document.querySelector('.totalTwo');

callTotalElem.innerHTML = (0).toFixed(2);
smsTotalElem.innerHTML = (0).toFixed(2);
totalBill.innerHTML = (0).toFixed(2);


// create a variable for call total track and set it to 0
let callsTotal = 0;
// create a variable for sms total track and set it to 0
let smsTotal = 0;
// create a variable for call and sms total track and set it to 0
let callAndSmsTotal = 0;
//add an event listener for when the add button is pressed
addBtn.addEventListener('click', addBtnFunc = () => {
    // looping over the length of the nodeslist using .forEach method
    // and passing in a callback function which checks the current element if it is checked
    radioBtn.forEach(radioBtnNode => {
        if(radioBtnNode.checked) {
            // used a ternary operator to check if the value of the radio button is a call or an sms
            // and add to the correct total
            radioBtnNode.value === 'call' ?  callsTotal += 2.75 : smsTotal += 0.75;
        }
    })
    // for the case when the user tries to click the add button without checking a button first
    if (!(radioBtn[0].checked || radioBtn[1].checked)) {
        // alert the user with the message
        alert("Please check a call or bill button.")
    }

    callTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    callAndSmsTotal = (callsTotal + smsTotal).toFixed(2);
    totalBill.innerHTML = callAndSmsTotal;


    if (callsTotal > 50.00) {
        callTotalElem.classList.add('danger');
        totalBill.classList.add('danger');
    } else if (callsTotal > 30.00) {
        callTotalElem.classList.add('warning');
        totalBill.classList.add('warning');
    } else if (smsTotal > 50.00) {
        smsTotalElem.classList.add('danger');
        totalBill.classList.add('danger');
    } else if (smsTotal > 30.00) {
        smsTotalElem.classList.add('warning');
        totalBill.classList.add('warning');
    }

});
// create an event listener for the reset button
resetRadioBtn.addEventListener('click', resetBtnFunc = () => {
    // reassign the totals
    callsTotal = 0;
    smsTotal = 0;
    callAndSmsTotal = 0;

    callTotalElem.innerHTML = (0).toFixed(2);
    smsTotalElem.innerHTML = (0).toFixed(2);
    totalBill.innerHTML = (0).toFixed(2);

    // removing the color and set it to default
    callTotalElem.classList.remove('warning', 'danger'); 
    smsTotalElem.classList.remove('warning', 'danger'); 
    totalBill.classList.remove('warning', 'danger');
    // iterate over the NodeList of the radio buttons and set the checked radio to false
    for (let i = 0; i < radioBtn.length; i++) {
        (radioBtn[i]).checked = false;
    }
})