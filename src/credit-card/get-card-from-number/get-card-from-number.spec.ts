/* tslint:disable completed-docs no-implicit-dependencies no-import-side-effect no-unused-expression function-name */
import { suite, test } from '@testdeck/mocha';
import { expect } from 'chai';
import 'mocha';

import { getCardFromCardNumber } from './get-card-from-number';
import { CardType } from '../interface';
import { CARDS } from '../cards.const';

@suite export class GetCardTypeFromCardNumberTests {
  @test 'should return Visa, begins with 40'() {
    const actual = getCardFromCardNumber(Object.values(CARDS), '4012121212121212');

    expect(actual).to.not.be.undefined;
    expect(actual).to.equal(CARDS[CardType.Visa]);
  }

  @test 'should return MasterCard, begins with 5'() {
    const actual = getCardFromCardNumber(Object.values(CARDS), '5555555555554444');

    expect(actual).to.not.be.undefined;
    expect(actual).to.equal(CARDS[CardType.MasterCard]);
  }

  @test 'should return MasterCard, begins with 2'() {
    const actual = getCardFromCardNumber(Object.values(CARDS), '2221000010000015');

    expect(actual).to.not.be.undefined;
    expect(actual).to.equal(CARDS[CardType.MasterCard]);
  }

  @test 'should return American Express, begins with 34'() {
    const actual = getCardFromCardNumber(Object.values(CARDS), '3412121212121212');

    expect(actual).to.not.be.undefined;
    expect(actual).to.equal(CARDS[CardType.Amex]);
  }

  @test 'should return Elo, begins with 457393'() {
    const actual = getCardFromCardNumber(Object.values(CARDS), '4573931212121212');

    expect(actual).to.not.be.undefined;
    expect(actual).to.equal(CARDS[CardType.Elo]);
  }

  @test 'should not miscategorize cards with 5067 in them as Elo'() {
    const actual = getCardFromCardNumber(Object.values(CARDS), '4012506712121212');

    expect(actual).to.not.be.undefined;
    expect(actual).to.equal(CARDS[CardType.Visa]);
  }

  @test 'should return Troy, begins with 9792'() {
    const actual = getCardFromCardNumber(Object.values(CARDS), '9792123456789012');

    expect(actual).to.not.be.undefined;
    expect(actual).to.equal(CARDS[CardType.Troy]);
  }

  @test 'should return Hipercard, begins with 384100'() {
    const actual = getCardFromCardNumber(Object.values(CARDS), '384100');

    expect(actual).to.not.be.undefined;
    expect(actual).to.equal(CARDS[CardType.Hipercard]);
  }

  @test 'should return Hipercard, begins with 384140'() {
    const actual = getCardFromCardNumber(Object.values(CARDS), '384140');

    expect(actual).to.not.be.undefined;
    expect(actual).to.equal(CARDS[CardType.Hipercard]);
  }

  @test 'should return Hipercard, begins with 384160'() {
    const actual = getCardFromCardNumber(Object.values(CARDS), '384160');

    expect(actual).to.not.be.undefined;
    expect(actual).to.equal(CARDS[CardType.Hipercard]);
  }

  @test 'should return Hipercard, begins with 6062'() {
    const actual = getCardFromCardNumber(Object.values(CARDS), '6062');

    expect(actual).to.not.be.undefined;
    expect(actual).to.equal(CARDS[CardType.Hipercard]);
  }

  @test 'should return Hipercard, begins with 6012'() {
    const actual = getCardFromCardNumber(Object.values(CARDS), '6012');

    expect(actual).to.not.be.undefined;
    expect(actual).to.equal(CARDS[CardType.Hipercard]);
  }

  @test 'should return Discover, begins with 6011'() {
    const actual = getCardFromCardNumber(Object.values(CARDS), '6011');

    expect(actual).to.not.be.undefined;
    expect(actual).to.equal(CARDS[CardType.Discover]);
  }

  @test 'non-numbers should return undefined'() {
    const actual = getCardFromCardNumber(Object.values(CARDS), 'aoeu');

    expect(actual).to.be.undefined;
  }

  @test 'invalid number should return undefined'() {
    const actual = getCardFromCardNumber(Object.values(CARDS), '12345678');

    expect(actual).to.be.undefined;
  }
}
