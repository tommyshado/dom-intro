//get a reference to the calculate button
const btn = document.querySelector('.calculateBtn');
//get a reference to the billTotal element
const totalBill = document.querySelector('.billTotal');
//get a reference to the billString
const strBill = document.querySelector('.billString');

//create the function that will be called when the calculate button is pressed
const totalPhoneBill = () => {
    let billStrElem = strBill.value;
    //  * this function should read the string value entered - split it on a comma.
    let smsAndCallArr = billStrElem.split(',');
    // create a total variable and set it 0
    let smsAndCallSum = 0;
    // loop over all the entries in the the resulting list
    for (let i = 0; i < smsAndCallArr.length; i++) {
            // grab the current string
            const currentSmsOrCall = smsAndCallArr[i];
            // check if it is a call or an sms and add the right amount to the overall total
            currentSmsOrCall === 'call' ? smsAndCallSum += 2.75 : currentSmsOrCall === 'sms' ? smsAndCallSum += 0.65 : smsAndCallSum += 1.30;

    }
    let roundedValue =  `${smsAndCallSum.toFixed(2)}`;
    totalBill.innerHTML = roundedValue;
}

//link the function to a click event on the calculate button

btn.addEventListener('click', totalPhoneBill)