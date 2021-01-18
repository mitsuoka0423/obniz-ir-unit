import Obniz from 'obniz';
import InfraredLED from 'obniz/dist/src/parts/Infrared/InfraredLED';

interface IrUnitPin {
  in: number;
  out: number;
  vcc: number;
  gnd: number;
}

export = class IrUnit {
  private irLed: InfraredLED;

  constructor(obniz: Obniz, pin: IrUnitPin) {
    this.irLed = obniz.wired('InfraredLED', { anode: pin.out, cathode: pin.gnd });
  }

  public start(callback: (arr: (0|1)[]) => {}) {
    // todo
  };

  public send(arr: (0|1)[]) {
    this.irLed.send(arr);
  }
}