/* tslint:disable completed-docs no-implicit-dependencies no-import-side-effect no-unused-expression function-name */
import { suite, test } from '@testdeck/mocha';
import { expect } from 'chai';
import 'mocha';

import {
  validateExpirationMonth,
  validateExpirationYear,
  validateExpiration,
} from './validate-expiration';

@suite export class ValidateExpirationMonthTests {
  @test 'should fail if empty'() {
    const actual = validateExpirationMonth('');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if too short'() {
    const actual = validateExpirationMonth('9');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if too long'() {
    const actual = validateExpirationMonth('123');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if too large'() {
    const actual = validateExpirationMonth('13');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if not numeric'() {
    const actual = validateExpirationMonth('1a');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if decimal'() {
    const actual = validateExpirationMonth('0.1');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should succeed if valid'() {
    const actual = validateExpirationMonth('12');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.true;
  }
}

@suite export class ValidateExpirationYearTests {
  @test 'should fail if empty'() {
    const actual = validateExpirationYear('');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if too short'() {
    const actual = validateExpirationYear('9');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if too long'() {
    const actual = validateExpirationYear('12345');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if 3 digits'() {
    const actual = validateExpirationYear('123');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if too old, 4 digit'() {
    const actual = validateExpirationYear('2000');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if too old, 2 digit'() {
    const actual = validateExpirationYear('12');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if not numeric'() {
    const actual = validateExpirationYear('1a');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if decimal'() {
    const actual = validateExpirationYear('0.12');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should succeed if valid, 2 digits'() {
    const actual = validateExpirationYear('30');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.true;
  }

  @test 'should succeed if valid, 4 digits'() {
    const actual = validateExpirationYear('2030');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.true;
  }
}

@suite export class ValidateExpirationTests {
  @test 'should fail if too old'() {
    const actual = validateExpiration('01', '2022');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should succeed if in future'() {
    const actual = validateExpiration('12', `${(new Date()).getFullYear() + 1}`);

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.true;
  }

  @test 'should fail if month is invalid'() {
    const actual = validateExpiration('13', '2040');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if year is invalid'() {
    const actual = validateExpiration('09', '202');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }
}
