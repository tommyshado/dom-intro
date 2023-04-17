describe('totalPhoneBill', () => {
    it('totalPhoneBill is of type `function`', () => {
        assert.equal(typeof totalPhoneBill, 'function');
    });

    it('when passed in a string, the function returns a number', () => {
        let returnedValue = totalPhoneBill('call');
        assert.equal(typeof returnedValue, 'number');
    });

    it('when passed in a uppercase sms and/or call as an argument it handles them', () => {
        let returnedValue = totalPhoneBill('CAlL');
        assert.equal(returnedValue, 2.75);
    });

    it('when passed in sms and call it returns the correct sum of both sms and call', () => {
        let returnedValue = totalPhoneBill('smS,CalL');
        assert.equal(returnedValue, 3.40);
    });

    it('when passed in `sms, call`, it returns splits the string on commas', () => {
        let returnedValue = totalPhoneBill('sms, call');
        assert.equal(returnedValue, 3.40);
    });

})