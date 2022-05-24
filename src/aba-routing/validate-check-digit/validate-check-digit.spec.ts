/* tslint:disable completed-docs no-implicit-dependencies no-import-side-effect no-unused-expression function-name */
import { suite, test } from '@testdeck/mocha';
import { expect } from 'chai';
import 'mocha';

import { validateCheckDigit } from './validate-check-digit';

@suite export class ValidateCheckDigitTests {
  @test 'should fail if empty'() {
    const actual = validateCheckDigit('');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if too short'() {
    const actual = validateCheckDigit('12345678');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if too long'() {
    const actual = validateCheckDigit('1234567890');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if invalid number 222222222'() {
    const actual = validateCheckDigit('222222222');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should succeed if valid number 111000025'() {
    const actual = validateCheckDigit('111000025');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.true;
  }

  @test 'should succeed if valid number 440000000'() {
    const actual = validateCheckDigit('440000000');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.true;
  }
}
