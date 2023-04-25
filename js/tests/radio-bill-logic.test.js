describe('radioBillFactory', function() {
    describe('get values when the user checks a radio button', function() {
        it('should be able to get values for the call cost', function() {
            let returnedValue = radioBillFactory();
            returnedValue.callSmsCost('call');

            assert.equal(returnedValue.getCallCost(), 2.75);

            let returnedValue2 = textBillFactory();
            returnedValue2.callSmsCost('call');

            assert.equal(returnedValue2.getCallCost(), 2.75);
        });

        it('should be able to get values for the sms cost', function() {
            let returnedValue = radioBillFactory();
            returnedValue.callSmsCost('sms');

            assert.equal(returnedValue.getSmsCost(), 0.75);

            let returnedValue2 = radioBillFactory();
            returnedValue2.callSmsCost('sms');

            assert.equal(returnedValue2.getSmsCost(), 0.75);
        });
    })

    describe('add the values to form a total', function() {
        it('should be able to return the correct total for call and sms value', function() {
            let returnedValue = radioBillFactory();
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
    
            assert.equal(returnedValue.smsCallTotal(), 3.50);

            let returnedValue2 = radioBillFactory();
                returnedValue2.callSmsCost('call');
                returnedValue2.callSmsCost('call');
                returnedValue2.callSmsCost('call');
                returnedValue2.callSmsCost('sms');
    
            assert.equal(returnedValue2.smsCallTotal(), 9.00);
        });

        it('should be able to return the correct total for call and sms value', function() {
            let returnedValue = radioBillFactory();
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
    
            assert.equal(returnedValue.smsCallTotal(), 3.50);

            let returnedValue2 = radioBillFactory();
                returnedValue2.callSmsCost('call');
                returnedValue2.callSmsCost('call');
                returnedValue2.callSmsCost('sms');
    
            assert.equal(returnedValue2.smsCallTotal(), 6.25);
        });
    })

    describe('red and orange levels', function() {
        it('should return `red` when the total is `50` or above', function() {
            let returnedValue = radioBillFactory();
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');

                assert.equal(returnedValue.addClassColor(), 'red');
        });

        it('should return `orange` when the total is between `30` and `50`', function() {
            let returnedValue = radioBillFactory();
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');
                returnedValue.callSmsCost('call');
                returnedValue.callSmsCost('sms');

                assert.equal(returnedValue.addClassColor(), 'orange');
        });
    });
    describe('undefined class name', function() {
        it('when the total is below `30`, it returns undefined', function() {
            let returnedValue = radioBillFactory();
                    returnedValue.callSmsCost('call');
                    returnedValue.callSmsCost('sms');
                    returnedValue.callSmsCost('call');
                    returnedValue.callSmsCost('sms');
                    returnedValue.callSmsCost('call');
                    returnedValue.callSmsCost('sms');
    
                    assert.equal(returnedValue.addClassColor(), undefined);
        });
        it('when the total is below `30`, it returns undefined', function() {
            let returnedValue = radioBillFactory();
                    returnedValue.callSmsCost('call');
                    returnedValue.callSmsCost('sms');
                    returnedValue.callSmsCost('call');
                    returnedValue.callSmsCost('sms');
                    returnedValue.callSmsCost('call');
                    returnedValue.callSmsCost('sms');
                    returnedValue.callSmsCost('call');
                    returnedValue.callSmsCost('sms');
                    returnedValue.callSmsCost('call');
                    returnedValue.callSmsCost('sms');
                    returnedValue.callSmsCost('call');
                    returnedValue.callSmsCost('sms');
                    returnedValue.callSmsCost('call');
                    returnedValue.callSmsCost('sms');
                    returnedValue.callSmsCost('call');
    
                    assert.equal(returnedValue.addClassColor(), undefined);
        });
    })
})