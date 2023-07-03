function textBillFactory() {
    let callTotal = 0;
    let smsTotal = 0;

    const setSmsOrCall = function(callSmsStr) {
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
            return 'danger';
        } else if (smsCallTotal() >= 30) {
            return 'warning';
        }
    }

    return {
        setSmsOrCall,
        getCallCost,
        getSmsCost,
        smsCallTotal,
        addClassColor
    }
}
