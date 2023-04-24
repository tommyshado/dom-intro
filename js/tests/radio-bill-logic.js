const radioBillFactory = () => {
    let callTotal = 0;
    let smsTotal = 0;

    const callSmsCost = (radioValue) => {
        // in the DOM the button is checked
        if(radioValue === 'call') {
            callTotal += 2.75;
        }else if (radioValue === 'sms') {
            smsTotal += 0.75;
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