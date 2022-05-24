/* tslint:disable completed-docs no-implicit-dependencies no-import-side-effect no-unused-expression function-name */
import { suite, test } from '@testdeck/mocha';
import { expect } from 'chai';
import 'mocha';
import { luhnCheck } from './luhn';

@suite export class LuhnCheckTests {
  @test 'should pass for 4242424242424242'() {
    const actual = luhnCheck('4242424242424242');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.true;
  }

  @test 'should fail for 4242424242424241'() {
    const actual = luhnCheck('4242424242424241');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail for 4666666666666666'() {
    const actual = luhnCheck('4666666666666666');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }
}
