import Obniz from 'obniz';
import IrUnit from '..';

const obniz = new Obniz('OBNIZ_ID_HERE');
const pin = {
  in: 0,
  out: 1,
  vcc: 2,
  gnd: 3,
};

obniz.onconnect = async () => {
  const irUnit = new IrUnit(obniz, pin);

  irUnit.send([1, 1, 1, 0, 0, 0]);
  await obniz.wait(1000);

  obniz.close();
}