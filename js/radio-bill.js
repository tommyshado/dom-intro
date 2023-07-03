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

// factory function instance

const instanceOfFactory = radioBillFactory();

// create a variable for call total track and set it to 0
let callsTotal = 0;
// create a variable for sms total track and set it to 0
let smsTotal = 0;
// create a variable for call and sms total track and set it to 0
let callAndSmsTotal = 0;

//add an event listener for when the add button is pressed
addBtn.addEventListener('click', addBtnFunc = () => {
    // get reference to the radio buttons
    const radioBtn = document.querySelector('input[type="radio"][name="billItemType"]:checked');

    if (radioBtn) {
        // set sms or call cost
        instanceOfFactory.setSmsOrCallCost(radioBtn.value);
    
        callTotalElem.innerHTML = userTemplate({ callCost: instanceOfFactory.getCallCost()});
        smsTotalElem.innerHTML = userTemplate({smsCost: instanceOfFactory.getSmsCost()});
        callAndSmsTotal = userTemplate({total: instanceOfFactory.smsCallTotal()});
        totalBill.innerHTML = callAndSmsTotal;
    
        totalBill.classList.add(instanceOfFactory.addClassColor());
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
    totalBill.classList.remove('warning', 'danger');
})