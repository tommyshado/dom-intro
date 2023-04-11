// get reference to all radio buttons that share the same name, this will return a NodeList with two radio buttons
const radioBillSettingsBtn = document.querySelectorAll('input[type="radio"][name="billItemTypeWithSettings"]');
// get a reference to the add button
const addCallAndSmsBtn = document.querySelector('.billTypeButton');
// get the reference to the default button
const defaultReset = document.querySelector('.defaultTypeButton');
// get the refence to the callTotalSetting element
const totalCallSetting = document.querySelector('.callTotalSettings');
// get the refence to the smsTotalSetting element 
const totalSmsSetting = document.querySelector('.smsTotalSettings');
// get reference to the overall total
const smsCallTotalSettings = document.querySelector('.totalSettings');

// settings bill costs reference
// update settings reference
const updateSettingsBtn = document.querySelector('.updateSettings');
// get the reference for both call and sms input
const settingsCallCost = document.querySelectorAll('input[type="number"][name="settingsCost"]');
// warning level reference
const warningLevelElement = document.querySelector('.warningLevelSetting');
// critical level reference
const criticalLeveleElement = document.querySelector('.criticalLevelSetting')
// add an event listener to the update settings button

totalCallSetting.innerHTML = (0).toFixed(2);
totalSmsSetting.innerHTML = (0).toFixed(2);
smsCallTotalSettings.innerHTML = (0).toFixed(2);

// create variable that will keep track of the totals
let callRadioBtnTotal = 0;
let smsRadioBtnTotal = 0;
let callAndSmsSettingsTotal = 0;
// add an event listener to the button
addCallAndSmsBtn.addEventListener('click', settingsAddFunc = () => {
    // for each element in radioBillSettingBtn, check if they are checked
    // and add them to the correct totals
    radioBillSettingsBtn.forEach(radioSettingsNode => {
        // check if the node is checked
        if (radioSettingsNode.checked) {
            // check if the node value is a call or an sms
            // and add the cost to the right total
            radioSettingsNode.value === 'call' ? callRadioBtnTotal += 2.75 : smsRadioBtnTotal += 0.75;
        }
    })
    // for the case when the user tries to click the add button without checking a button first
    if (!(radioBillSettingsBtn[0].checked || radioBillSettingsBtn[1].checked)) {
        // alert the user with the message
        alert("Please check a call or bill button.")
    }

    totalCallSetting.innerHTML = callRadioBtnTotal.toFixed(2);
    totalSmsSetting.innerHTML = smsRadioBtnTotal.toFixed(2);
    callAndSmsSettingsTotal = (callRadioBtnTotal + smsRadioBtnTotal).toFixed(2);
    smsCallTotalSettings.innerHTML = callAndSmsSettingsTotal;
})

// add an event listener to the reset button
defaultReset.addEventListener('click', settingsDefaultFunc = () => {
    // reassign the totals to default zero
    callRadioBtnTotal = 0;
    smsRadioBtnTotal = 0;
    callAndSmsSettingsTotal = 0;

    totalCallSetting.innerHTML = (0).toFixed(2);
    totalSmsSetting.innerHTML = (0).toFixed(2);
    smsCallTotalSettings.innerHTML = (0).toFixed(2);
    
    // set the radio buttons to be not checked
    // iterate over the length of the NodeList on the radioBillSettingsBtn and set the checked button to false
    for(let i = 0; i < radioBillSettingsBtn.length; i++) {
        // set the current NodeList checked to false
        (radioBillSettingsBtn[i]).checked = false;
    }
})