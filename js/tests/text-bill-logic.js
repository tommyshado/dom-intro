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
        return getCallCost() + getSmsCost();
    }

    return {
        callSmsCost,
        getCallCost,
        getSmsCost,
        smsCallTotal
    }
}

let returnedValue = textBillFactory()
returnedValue.callSmsCost('call')
console.log(returnedValue.getCallCost())
