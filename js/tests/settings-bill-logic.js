function settingsBillFactory() {
    let smsCost = 0;
    let callCost = 0;
    let warningLevel = 0;
    let criticalLevel = 0;

    let callCostTotal = 0;
    let smsCostTotal = 0;

    let setCallCost = function(callCostValue) {
        callCost = callCostValue;
    }

    let getCallCost = function() {
        return callCost;
    }

    let setSmsCost = function(smsCostValue) {
        smsCost = smsCostValue;
    }

    let getSmsCost = function() {
        return smsCost;
    }

    let setWarningLevel = function(warningLevelValue) {
        warningLevel = warningLevelValue;
    }

    let setCriticalLevel = function(criticalLevelValue) {
        criticalLevel = criticalLevelValue;
    }

    let getWarningLevel = function() {
        return warningLevel;
    }

    let getCriticalLevel = function() {
        return criticalLevel;
    }

    let makeCall = function() {
        if(!(criticalLevelReached())) {
            callCostTotal += callCost;
        }
    }

    let getTotalCost = function() {
        return callCostTotal + smsCostTotal;
    }

    let getTotalCallCost = function() {
        return callCostTotal;
    }

    let getTotalSmsCost = function() {
        return smsCostTotal;
    }

    let sendSms = function() {
        if (!(criticalLevelReached())) {
            smsCostTotal += smsCost;
        }
    }

    let criticalLevelReached = function() {
        return getTotalCost() >= getCriticalLevel()
    }

    let totalClassName = function() {
        if(!(criticalLevelReached())) {
            return 'critical';
        }
        if (getTotalCost() >= getWarningLevel()) {
            return 'warning';
        }
    }

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        setCriticalLevel,
        getWarningLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName
    }
}