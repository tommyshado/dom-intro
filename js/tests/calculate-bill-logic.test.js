describe('calculateBillFactory', () => {
    it('calculateBillFactory is of type `function`', () => {
        assert.equal(typeof calculateBillFactory, 'function');
    });

    it('when passed in a uppercase sms and/or call as an argument it handles them when a method is invoked', () => {
        let returnedValue = calculateBillFactory();
        returnedValue.callSms('CAlL');
        let total = returnedValue.calculateTotal();

        assert.equal(total, 2.75);
    });

    describe('sum of call and sms', function() {
        it('when passed in sms and call it returns the correct sum of both sms and call', () => {
            let returnedValue = calculateBillFactory();
            returnedValue.callSms('smS,CalL');
            let total = returnedValue.calculateTotal();
    
            assert.equal(total, 3.40);
        });
    
        it('when passed in `sms, call`, it returns splits the string on commas', () => {
            let returnedValue = calculateBillFactory();
            returnedValue.callSms('sms, call')
            let total = returnedValue.calculateTotal();
    
            assert.equal(total, 3.40);
        });
    
        it('when passed in more calls or sms, it returns the correct sum', () => {
            let returnedValue = calculateBillFactory();
            returnedValue.callSms('call, call, call, call');
            let total = returnedValue.calculateTotal();
    
            assert.equal(total, 11);
        });
    
        it('when passed in more calls or sms, it returns the correct sum', () => {
            let returnedValue = calculateBillFactory();
            returnedValue.callSms('sms, sms, sms, sms');
            let total = returnedValue.calculateTotal();
    
            assert.equal(total, 2.6);
        });
    });

    describe('warning and critical levels', function() {
        it('when the sum of call and sms exceeds 30, it returns the className = `critical`', () => {
            let returnedValue = calculateBillFactory();
            returnedValue.callSms('sms, call,sms, call,sms, call,sms, call,sms, call,sms, call,sms, call,call,call,call, call,call,call,call');
            let warningLevel = returnedValue.warningCriticalLevels();
    
            assert.equal(warningLevel, 'critical');
        })
        it('when the sum of call and sms exceeds 20, it returns the className = `warning`', () => {
            let returnedValue = calculateBillFactory();
            returnedValue.callSms('sms, call,sms, call,sms, call,sms, call,smssms, call,sms, call,sms, call,sms, call,sms');
            let warningLevel = returnedValue.warningCriticalLevels();
    
            assert.equal(warningLevel, 'warning');
        })
    });

    describe('undefined', function() {
        it('when the sum of call and sms is below 20, it returns `undefined`', function() {
            let returnedValue = calculateBillFactory();
            returnedValue.callSms('sms, call,sms');
            returnedValue.calculateTotal();
            let warningLevel = returnedValue.warningCriticalLevels();

            assert.equal(warningLevel, undefined);
        });
        it('when the sum of call and sms is below 20, it returns `undefined`', function() {
            let returnedValue = calculateBillFactory();
            returnedValue.callSms('sms, call');
            returnedValue.calculateTotal();
            let warningLevel = returnedValue.warningCriticalLevels();

            assert.equal(warningLevel, undefined);
        });
    })
})