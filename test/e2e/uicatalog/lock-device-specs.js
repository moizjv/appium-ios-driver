import env from '../helpers/env';
import setup from "../setup-base";
import desired from './desired';

describe('uicatalog - lock device @skip-ios6', function () {
  let session = setup(this, desired);
  let driver = session.driver;

  let allowance = (env.IOS7 || env.IOS8 || env.IOS9) ? 9 : 2;
  it("should lock the device for 4 seconds (+/- " + allowance + "  secs)", async () => {
    let before = new Date().getTime() / 1000;
    await driver.lock(4);
    let now = (new Date().getTime() / 1000);
    (now - before).should.be.above(4);
    (now - before).should.be.below(4 + allowance + 1);
  });
});
