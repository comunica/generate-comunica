import {ActorQueryOperation, Bindings} from "@comunica/bus-query-operation";
import {Bus} from "@comunica/core";
import {ArrayIterator} from "asynciterator";
import {literal, variable} from "rdf-data-model";
import {ActorQueryOperation<%= componentActorName %>} from "../lib/ActorQueryOperation<%= componentActorName %>";
const arrayifyStream = require('arrayify-stream');

describe('ActorQueryOperation<%= componentActorName %>', () => {
  let bus;
  let mediatorQueryOperation;

  beforeEach(() => {
    bus = new Bus({ name: 'bus' });
    mediatorQueryOperation = {
      mediate: (arg) => Promise.resolve({
        bindingsStream: new ArrayIterator([
          Bindings({ a: literal('1') }),
          Bindings({ a: literal('2') }),
          Bindings({ a: literal('3') }),
        ]),
        metadata: () => Promise.resolve({ totalItems: 3 }),
        operated: arg,
        type: 'bindings',
        variables: ['a'],
      }),
    };
  });

  describe('The ActorQueryOperation<%= componentActorName %> module', () => {
    it('should be a function', () => {
      expect(ActorQueryOperation<%= componentActorName %>).toBeInstanceOf(Function);
    });

    it('should be a ActorQueryOperation<%= componentActorName %> constructor', () => {
      expect(new (<any> ActorQueryOperation<%= componentActorName %>)({ name: 'actor', bus, mediatorQueryOperation }))
        .toBeInstanceOf(ActorQueryOperation<%= componentActorName %>);
      expect(new (<any> ActorQueryOperation<%= componentActorName %>)({ name: 'actor', bus, mediatorQueryOperation }))
        .toBeInstanceOf(ActorQueryOperation);
    });

    it('should not be able to create new ActorQueryOperation<%= componentActorName %> objects without \'new\'', () => {
      expect(() => { (<any> ActorQueryOperation<%= componentActorName %>)(); }).toThrow();
    });
  });

  describe('An ActorQueryOperation<%= componentActorName %> instance', () => {
    let actor: ActorQueryOperation<%= componentActorName %>;

    beforeEach(() => {
      actor = new ActorQueryOperation<%= componentActorName %>({ name: 'actor', bus, mediatorQueryOperation });
    });

    it('should test on <%= operationName %>', () => {
      const op = { operation: { type: '<%= operationName %>' } };
      return expect(actor.test(op)).resolves.toBeTruthy();
    });

    it('should not test on non-<%= operationName %>', () => {
      const op = { operation: { type: 'some-other-type' } };
      return expect(actor.test(op)).rejects.toBeTruthy();
    });

    it('should run', () => {
      const op = { operation: { type: '<%= operationName %>' } };
      return expect(actor.run(op)).resolves.toMatchObject({ todo: true }); // TODO
    });
  });
});
