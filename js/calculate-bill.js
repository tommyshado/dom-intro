// get reference to the billString element
const billString = document.querySelector('.billString');
// get reference to the button element
const btnCalculate = document.querySelector('.calculateBtn');
// get a reference to the billTotal element
const billTotal = document.querySelector('.billTotal');
// get a reference to the resetBtn element
const resetBtn = document.querySelector('.resetBtn');

const totalPhoneBill = () => {
    // get the value of the billString element that the user types and set it to lower case and used trim for spaces around the value
    let billValue = billString.value.toLowerCase().trim();
    // split the bill value on the comma
    let smsAndCallArr = billValue.split(', ');
    // create a total variable and set it to zero
    let totalSmsAndCall = 0;
    // iterate over the length of the smsAndCallArr 
    for (let i = 0; i < smsAndCallArr.length; i++) {
        // grab the current sms or call
        const currentSmsOrCall = smsAndCallArr[i];
        // check if the currentSmsOrCall equals to a call or an sms and add the right amount to the overall total
        switch (currentSmsOrCall) {
            case 'call':
                totalSmsAndCall += 2.75;
                break;

            case 'sms':
                totalSmsAndCall += 0.65;
                break;
                
            default:
                alert("Invalid bill. Please enter correct bill.");
                break;
        }
    }
    // change the innerHTML body to the totalSmsAndCall rounded to two decimal places
    billTotal.innerHTML = totalSmsAndCall.toFixed(2);
    // check if the total variable is over 30.00
    if (totalSmsAndCall > 30.00) {
        // set it's color to danger
        billTotal.classList.add('danger');
        // else check if the total is over 20.00
    } else if (totalSmsAndCall > 20.00) {
        // set it's color to warning
        billTotal.classList.add('warning');
    // otherwise set to default 
    } else {
        billTotal.classList.remove('danger', 'warning');
    }
}
// create an event listener on the button and when the button clicked it will do the calculation
btnCalculate.addEventListener('click', totalPhoneBill);
// resetBtn event listener
resetBtn.addEventListener('click', () => {
    // set the bill string element to an empty string
    billString.value = '';
    // set the bill total element to the string '0.00'
    billTotal.innerHTML = '0.00';
    // set the billTotal to default color
    billTotal.classList.remove('danger', 'warning');
})