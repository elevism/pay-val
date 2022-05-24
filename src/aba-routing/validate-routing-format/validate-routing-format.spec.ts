/* tslint:disable completed-docs no-implicit-dependencies no-import-side-effect no-unused-expression function-name */
import { suite, test } from '@testdeck/mocha';
import { expect } from 'chai';
import 'mocha';

import { validateRoutingFormat } from './validate-routing-format';

@suite export class ValidateRoutingFormatTests {
  @test 'should fail if empty'() {
    const actual = validateRoutingFormat('');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if too short'() {
    const actual = validateRoutingFormat('440000');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if too long'() {
    const actual = validateRoutingFormat('440000000444');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should fail if non-numeric'() {
    const actual = validateRoutingFormat('44000000a');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.false;
  }

  @test 'should succeed if valid'() {
    const actual = validateRoutingFormat('440000000');

    expect(actual).to.not.be.undefined;
    expect(actual).to.be.true;
  }
}
