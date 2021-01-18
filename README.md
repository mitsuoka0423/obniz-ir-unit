# obniz-ir-unit

[obniz](https://obniz.com/ja/)で[M5Stack用赤外線送受信ユニット](https://www.switch-science.com/catalog/5699/)を操作するためのライブラリです。

// イメージ

## インストール

```bash
$ npm install obniz-ir-unit
```

## サンプルコード

```javascript
import Obniz from 'obniz';
import IrUnit from 'obniz-ir-unit';

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
```
