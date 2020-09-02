import { ActorQueryOperation, Bindings } from '@comunica/bus-query-operation';
import { Bus } from '@comunica/core';
import { literal } from '@rdfjs/data-model';
import { ArrayIterator } from 'asynciterator';
import { ActorQueryOperationReducedMy } from '../lib/ActorQueryOperationReducedMy';
const arrayifyStream = require('arrayify-stream');

describe('ActorQueryOperation<%= componentActorName %>', () => {
  let bus: any;
  let mediatorQueryOperation: any;

  beforeEach(() => {
    bus = new Bus({ name: 'bus' });
    mediatorQueryOperation = {
      mediate: (arg: any) => Promise.resolve({
        bindingsStream: new ArrayIterator([
          Bindings({ a: literal('1') }),
          Bindings({ a: literal('2') }),
          Bindings({ a: literal('3') }),
        ], { autoStart: false }),
        metadata: () => Promise.resolve({ totalItems: 3 }),
        operated: arg,
        type: 'bindings',
        variables: [ '?a' ],
        canContainUndefs: false,
      }),
    };
  });

  describe('An ActorQueryOperation<%= componentActorName %> instance', () => {
    let actor: ActorQueryOperation<%= componentActorName %>;

    beforeEach(() => {
      actor = new ActorQueryOperation<%= componentActorName %>({ name: 'actor', bus, mediatorQueryOperation });
    });

    it('should test on <%= operationName %>', () => {
      const op = { operation: { type: '<%= operationName %>' }};
      return expect(actor.test(op)).resolves.toBeTruthy();
    });

    it('should not test on non-<%= operationName %>', () => {
      const op = { operation: { type: 'some-other-type' }};
      return expect(actor.test(op)).rejects.toBeTruthy();
    });

    it('should run', () => {
      const op = { operation: { type: '<%= operationName %>' }};
      return expect(actor.run(op)).resolves.toMatchObject({ todo: true }); // TODO
    });
  });
});
