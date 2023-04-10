// get reference to all radio buttons that share the same name
const radioBillSettingsBtn = document.querySelectorAll('input[type="radio"][name="billItemTypeWithSettings"]');
// get a reference to the add button
const addCallAndSmsBtn = document.querySelector('.billTypeButton');
// get the reference to the default button
const defaultReset = document.querySelector('.defaultTypeButton');
// get the refence to the callTotalSetting element
const totalCallSetting = document.querySelector('.callTotalSettings');
// get the refence to the smsTotalSetting element 
const totalSmsSetting = document.querySelector('.smsTotalSettings');

let callRadioBtnTotal = 0;
let smsRadioBtnTotal = 0;
// add an event listener to the button
addCallAndSmsBtn.addEventListener('click', settingsAddFunc = () => {
    const radioBillType = document.querySelector(".billItemTypeWithSettings:checked");

    if (radioBillType.value === 'call') {
        callRadioBtnTotal += 2.75;
    } else {
        smsRadioBtnTotal += 0.65;
    }

    totalCallSetting.innerHTML = callRadioBtnTotal.toFixed(2);
    totalSmsSetting.innerHTML = smsRadioBtnTotal.toFixed(2);
})

// add an event listener to the reset button
defaultReset.addEventListener('click', settingsDefaultFunc = () => {

})