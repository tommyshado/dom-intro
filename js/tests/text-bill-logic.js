function textBillFactory() {
    let callTotal = 0;
    let smsTotal = 0;

    const callSmsCost = function(callSmsStr) {
        let callOrSmsValue = callSmsStr.toLowerCase().trim();
        if (callOrSmsValue === 'call') {
            callTotal += 2.75;
        } else if (callOrSmsValue === 'sms') {
            smsTotal += 0.65;
        }
    }

    const getCallCost = () => {
        return callTotal;
    }

    const getSmsCost = () => {
        return smsTotal;
    }

    const smsCallTotal = () => {
        return (getCallCost() + getSmsCost()).toFixed(2);
    }

    const addClassColor = () => {
        if (smsCallTotal() >= 50) {
            return 'red';
        } else if (smsCallTotal() >= 30) {
            return 'orange';
        }
    }

    return {
        callSmsCost,
        getCallCost,
        getSmsCost,
        smsCallTotal,
        addClassColor
    }
}

let returnedValue = textBillFactory()
returnedValue.callSmsCost('call')
console.log(returnedValue.getCallCost())
