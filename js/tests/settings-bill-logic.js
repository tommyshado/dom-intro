function settingsBillFactory() {
    let smsCost = 0;
    let callCost = 0;
    let warningLevel = 0;
    let criticalLevel = 0;

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

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        setCriticalLevel,
        getWarningLevel,
        getCriticalLevel
    }
}