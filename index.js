"use strict";
module.exports = /** @class */ (function () {
    function IrUnit(obniz, pin) {
        this.irLed = obniz.wired('InfraredLED', { anode: pin.out, cathode: pin.gnd });
    }
    IrUnit.prototype.start = function (callback) {
        // todo
    };
    ;
    IrUnit.prototype.send = function (arr) {
        this.irLed.send(arr);
    };
    return IrUnit;
}());
