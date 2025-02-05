describe('settingsBillFactory', () => {
    describe('setting values for the settings bill', () => {
        it('should be able to set the call cost', () => {
            let settingsBill = settingsBillFactory();
            settingsBill.setCriticalLevel(10);

            settingsBill.setCallCost(5.87);
            assert.equal(5.87, settingsBill.getCallCost());
        });
    
        it('should be able to set the sms cost', () => {
            let settingsBill = settingsBillFactory();
    
            settingsBill.setSmsCost(5);
            assert.equal(5, settingsBill.getSmsCost());
        });
        
        it('should be able to set the warning level', () => {
            let settingsBill = settingsBillFactory();
    
            settingsBill.setWarningLevel(10);
            assert.equal(10, settingsBill.getWarningLevel());
        });
    
        it('should be able to set the critical level', () => {
            let settingsBill = settingsBillFactory();
    
            settingsBill.setCriticalLevel(10);
            assert.equal(10, settingsBill.getCriticalLevel());
        });
    })

    describe('using the values', () => {
        it('should be able to use the call cost', () => {
            let settingsBill = settingsBillFactory();
            settingsBill.setCriticalLevel(10);

            settingsBill.setCallCost(2.25);
            settingsBill.setSmsCost(0.85);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal(6.75, settingsBill.getTotalCost());
            assert.equal(6.75, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());
        });

        it('should be able to use the call cost for 2 calls at 1.35 each', () => {
            let settingsBill = settingsBillFactory();
            settingsBill.setCriticalLevel(10);

            settingsBill.setCallCost(1.35);
            settingsBill.setSmsCost(0.85);

            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal(2.70, settingsBill.getTotalCost());
            assert.equal(2.70, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());
        });

        it('should be able to use the sms cost', () => {
            let settingsBill = settingsBillFactory();
            settingsBill.setCriticalLevel(10);
    
            settingsBill.setCallCost(1.35);
            settingsBill.setSmsCost(0.85);

            settingsBill.sendSms();
            settingsBill.sendSms();

            assert.equal(1.70, settingsBill.getTotalCost());
            assert.equal(0.00, settingsBill.getTotalCallCost());
            assert.equal(1.70, settingsBill.getTotalSmsCost());
        });

        it('should be able to send 2 sms at 0.85 each and make calls at 1.35', () => {
            let settingsBill = settingsBillFactory();
            settingsBill.setCriticalLevel(10);
    
            settingsBill.setCallCost(1.35);
            settingsBill.setSmsCost(0.85);

            settingsBill.sendSms();
            settingsBill.makeCall();
            settingsBill.sendSms();

            assert.equal(3.05, settingsBill.getTotalCost());
            assert.equal(1.35, settingsBill.getTotalCallCost());
            assert.equal(1.70, settingsBill.getTotalSmsCost());
        });
    })

    describe('warning and critical levels', () => {
        it('should return the class name `critical` if the critical level is reached', () => {
            let settingsBill = settingsBillFactory();

            settingsBill.setCallCost(1.35);
            settingsBill.setSmsCost(0.85);
            settingsBill.setCriticalLevel(10);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal('critical', settingsBill.totalClassName());

        });

        it('should stop the Total call cost from increasing when the critical level is reached', () => {
            let settingsBill = settingsBillFactory();
            settingsBill.setCriticalLevel(10);
            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.85);
            settingsBill.setWarningLevel(5);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal('warning', settingsBill.totalClassName());
            assert.equal(10, settingsBill.getTotalCallCost());
        });

        it('should return the class name `warning` if the warning level is reached', () => {
            let settingsBill = settingsBillFactory();

            settingsBill.setCallCost(5);
            settingsBill.setSmsCost(0.85);
            settingsBill.setCriticalLevel(20);

            settingsBill.makeCall();
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();

            assert.equal('critical', settingsBill.totalClassName());
        });


    })
}) 