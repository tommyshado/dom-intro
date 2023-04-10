// get a reference to the sms or call radio buttons
const addCallAndSmsBtn = document.querySelector('.billTypeButton');

const totalCallSetting = document.querySelector('.callTotalSettings');

const totalSmsSetting = document.querySelector('.smsTotalSettings');

let callRadioBtnTotal = 0;
let smsRadioBtnTotal = 0;

addCallAndSmsBtn.addEventListener('click', () => {
    const radioBillType = document.querySelector(".billItemTypeWithSettings:checked");

    if (radioBillType.value === 'call') {
        callRadioBtnTotal += 2.75;
    } else {
        smsRadioBtnTotal += 0.65;
    }

    totalCallSetting.innerHTML = callRadioBtnTotal.toFixed(2);
    totalSmsSetting.innerHTML = smsRadioBtnTotal.toFixed(2);
})