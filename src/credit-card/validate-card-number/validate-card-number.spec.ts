/* tslint:disable completed-docs no-implicit-dependencies no-import-side-effect no-unused-expression function-name */
import { suite, test } from '@testdeck/mocha';
import { expect } from 'chai';
import 'mocha';

import { CardType } from '../interface';
import { validateCardNumber } from './validate-card-number';

@suite export class ValidateCardNumberTests {
  @test 'should fail if empty'() {
    const actual = validateCardNumber(CardType.Visa, '');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if is a bunch of spaces'() {
    const actual = validateCardNumber(CardType.Visa, '                 ');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should succeed if is valid'() {
    const actual = validateCardNumber(CardType.Visa, '4242424242424242');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.true;
  }

  @test 'should succeed if it has dashes in it but is valid'() {
    const actual = validateCardNumber(CardType.Visa, '4242-4242-4242-4242');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.true;
  }

  @test 'should succeed if it has spaces in it but is valid'() {
    const actual = validateCardNumber(CardType.Visa, '4242 4242 4242 4242');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.true;
  }

  @test 'should fail if it does not pass the luhn check'() {
    const actual = validateCardNumber(CardType.Visa, '4242424242424241');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if is more than 16 digits'() {
    const actual = validateCardNumber(CardType.Visa, '42424242424242424');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if is less than 16 digits'() {
    const actual = validateCardNumber(CardType.Visa, '424242424');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail with non-digits'() {
    const actual = validateCardNumber(CardType.Visa, '4242424e42424241');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }
}
