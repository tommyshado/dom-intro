function calculateBillFactory() {
    let callTotal = 0;
    let smsTotal = 0;
    
    let callSms = function(smsCallStr) {
        let smsCallArr = (smsCallStr.toLowerCase()).split(',');
    
        for (let i = 0; i < smsCallArr.length; i++) {
            const currentSmsCall = smsCallArr[i].trim();
    
            if(currentSmsCall === 'call') {
                callTotal += 2.75;
            } else {
                smsTotal += 0.65;
            }
        }
    }

    let calculateTotal = function() {
        return (callTotal + smsTotal).toFixed(2);
    }

    let warningCriticalLevels = function(callSmsTotal) {
        if(calculateTotal() >= 30) {
            return 'critical';
        } else if (calculateTotal() >= 20) {
            return 'warning';
        }
    }

    return {
        callSms,
        calculateTotal,
        warningCriticalLevels
    }
}