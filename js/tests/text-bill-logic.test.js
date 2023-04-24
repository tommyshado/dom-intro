describe('textBillFactory', function() {
    describe('get values', function() {
        it('should be able to get values for the call cost', function() {
            let returnedValue = textBillFactory();
            returnedValue.callSmsCost('call');

            assert.equal(returnedValue.getCallCost(), 2.75);

            let returnedValue2 = textBillFactory();
            returnedValue2.callSmsCost('call');

            assert.equal(returnedValue2.getCallCost(), 2.75);
        });

        it('should be able to get values for the sms cost', function() {
            let returnedValue = textBillFactory();
            returnedValue.callSmsCost('sms');

            assert.equal(returnedValue.getSmsCost(), 0.65);

            let returnedValue2 = textBillFactory();
            returnedValue2.callSmsCost('sms');

            assert.equal(returnedValue2.getSmsCost(), 0.65);
        });
    })

    describe('add the values to form a total', function() {
        it('should be able to return the correct total for call and sms value', function() {
            let returnedValue = textBillFactory();
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
    
            assert.equal(returnedValue.smsCallTotal(), 3.40);

            let returnedValue2 = textBillFactory();
                returnedValue2.callSmsCost('call');
                returnedValue2.callSmsCost('call');
                returnedValue2.callSmsCost('call');
                returnedValue2.callSmsCost('sms');
    
            assert.equal(returnedValue2.smsCallTotal(), 8.90);
        });

            
    })
})