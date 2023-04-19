// radio button reference
// add and reset button reference
let billAddTypeBtn = document.querySelector('.billTypeButton');
const billResetBtn = document.querySelector('.defaultTypeButton');
// totals reference
const callTotalSettings = document.querySelector('.callTotalSettings');
const smsTotalSettings = document.querySelector('.smsTotalSettings');
const totalSettings = document.querySelector('.totalSettings');
// set the totals to 0.00
callTotalSettings.innerHTML = (0).toFixed(2);
smsTotalSettings.innerHTML = (0).toFixed(2);
totalSettings.innerHTML = (0).toFixed(2);
// settings
const callCostSetting = document.querySelector('.callCostSetting');
const smsCostSetting = document.querySelector('.smsCostSetting');
// warning reference
const warningLevelSetting = document.querySelector('.warningLevelSetting');
// critical reference
const criticalLevelSetting = document.querySelector('.criticalLevelSetting');
// update settings reference
const updateSettingsBtn = document.querySelector('.updateSettings');
// global variables for the totals
let callCostUpdate = 0;
let smsCostUpdate = 0;
let warningUpdate = 0;
let criticalUpdate = 0;
// event listeners for the buttons

// add an event listener for the update btn
updateSettingsBtn.addEventListener('click', updateSettFunc = () => {
    callCostUpdate = Number(callCostSetting.value);
    smsCostUpdate = Number(smsCostSetting.value);
    warningUpdate = Number(warningLevelSetting.value);
    criticalUpdate = Number(criticalLevelSetting.value);

    totalSettings.classList.remove('danger');

    if (smsAndCallTotal < criticalUpdate) {
        billAddTypeBtn.disabled = false;
    } else {
        totalCallSet = 0;
        totalSmsSet = 0;
        smsAndCallTotal = 0;

        callTotalSettings.innerHTML = (0).toFixed(2);
        smsTotalSettings.innerHTML = (0).toFixed(2);
        totalSettings.innerHTML = (0).toFixed(2);
        totalSettings.classList.remove('warning');
        billAddTypeBtn.disabled = false;
    }
})

// global variable for my functions
let totalCallSet = 0;
let totalSmsSet = 0;
let smsAndCallTotal = 0;

// add button event listener
billAddTypeBtn.addEventListener('click', functBillAdd = () => {
    // reomoved the billTypeRadioBtn reference inside my function
    let billTypeRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    
    if(billTypeRadioBtn.value === 'call') {
        totalCallSet += callCostUpdate;
    } else if (billTypeRadioBtn.value === 'sms') {
        totalSmsSet += smsCostUpdate;
    }
    
    callTotalSettings.innerHTML = totalCallSet.toFixed(2);
    smsTotalSettings.innerHTML = totalSmsSet.toFixed(2);
    smsAndCallTotal = (totalCallSet + totalSmsSet).toFixed(2);
    totalSettings.innerHTML = smsAndCallTotal;
 
    if (smsAndCallTotal > criticalUpdate) {
        totalSettings.classList.add('danger');
        billAddTypeBtn.disabled = true;
    } else if (smsAndCallTotal > warningUpdate) {
        totalSettings.classList.add('warning');
    }
});
// reset button event listener

billResetBtn.addEventListener('click', resetBillFunc = () => {
    totalCallSet = 0;
    totalSmsSet = 0;
    smsAndCallTotal = 0;

    callTotalSettings.innerHTML = (0).toFixed(2);
    smsTotalSettings.innerHTML = (0).toFixed(2);
    totalSettings.innerHTML = (0).toFixed(2);
    
    totalSettings.classList.remove('warning', 'danger');

    // setting the costs settings to default
    callCostSetting.value = '';
    smsCostSetting.value = '';
    warningLevelSetting.value = '';
    criticalLevelSetting.value = '';
})