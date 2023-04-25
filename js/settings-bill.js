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

let billFactoryInstance = settingsBillFactory();

const updateSettingsBill = () => {
    billFactoryInstance.setCallCost(Number(callCostSetting.value));
    billFactoryInstance.setSmsCost(Number(smsCostSetting.value));
    billFactoryInstance.setWarningLevel(Number(warningLevelSetting.value));
    billFactoryInstance.setCriticalLevel(Number(criticalLevelSetting.value));

    totalSettings.classList.remove('danger');

    // if (smsAndCallTotal < criticalUpdate) {
    //     billAddTypeBtn.disabled = false;
    // } else {
    //     totalCallSet = 0;
    //     totalSmsSet = 0;
    //     smsAndCallTotal = 0;

    //     callTotalSettings.innerHTML = (0).toFixed(2);
    //     smsTotalSettings.innerHTML = (0).toFixed(2);
    //     totalSettings.innerHTML = (0).toFixed(2);
    //     totalSettings.classList.remove('warning');
    //     billAddTypeBtn.disabled = false;
    // }
}

// add an event listener for the update btn
updateSettingsBtn.addEventListener('click', updateSettingsBill)

const billSettingsAdd = () => {
    let smsAndCallTotal = 0;
    let billTypeRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked").value;
    
    billFactoryInstance.radioSmsCall(billTypeRadioBtn);
    
    callTotalSettings.innerHTML = (billFactoryInstance.getTotalCallCost()).toFixed(2);
    smsTotalSettings.innerHTML = (billFactoryInstance.getTotalSmsCost()).toFixed(2);
    smsAndCallTotal = (billFactoryInstance.getTotalCost()).toFixed(2);
    totalSettings.innerHTML = smsAndCallTotal;
 
    // if (smsAndCallTotal > criticalUpdate) {
    //     totalSettings.classList.add('danger');
    //     billAddTypeBtn.disabled = true;
    // } else if (smsAndCallTotal > warningUpdate) {
    //     totalSettings.classList.add('warning');
    // }
}


// add button event listener
billAddTypeBtn.addEventListener('click', billSettingsAdd);
// reset button event listener

const resetBill = () => {
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
}

billResetBtn.addEventListener('click', resetBill)