const totalPhoneBill = (string) => {
    
    let billValue = string.toLowerCase();
    
    let smsAndCallArr = billValue.split(',');
    
    let totalSmsAndCall = 0;

    for (let i = 0; i < smsAndCallArr.length; i++) {
        const currentSmsOrCall = smsAndCallArr[i].trim();

        if (currentSmsOrCall === 'call') {
            totalSmsAndCall += 2.75;
        } else if (currentSmsOrCall === 'sms') {
                totalSmsAndCall += 0.65;
        }
    }
    
    return Number(totalSmsAndCall.toFixed(2));
}