import {Actor<%= componentBusName %>} from "@comunica/bus-<%= busName %>";
import {Bus} from "@comunica/core";
import {Actor<%= componentBusName %><%= componentActorName %>} from "../lib/Actor<%= componentBusName %><%= componentActorName %>";

describe('Actor<%= componentBusName %><%= componentActorName %>', () => {
  let bus;

  beforeEach(() => {
    bus = new Bus({ name: 'bus' });
  });

  describe('The Actor<%= componentBusName %><%= componentActorName %> module', () => {
    it('should be a function', () => {
      expect(Actor<%= componentBusName %><%= componentActorName %>).toBeInstanceOf(Function);
    });

    it('should be a Actor<%= componentBusName %><%= componentActorName %> constructor', () => {
      expect(new (<any> Actor<%= componentBusName %><%= componentActorName %>)({ name: 'actor', bus })).toBeInstanceOf(Actor<%= componentBusName %><%= componentActorName %>);
      expect(new (<any> Actor<%= componentBusName %><%= componentActorName %>)({ name: 'actor', bus })).toBeInstanceOf(Actor<%= componentBusName %>);
    });

    it('should not be able to create new Actor<%= componentBusName %><%= componentActorName %> objects without \'new\'', () => {
      expect(() => { (<any> Actor<%= componentBusName %><%= componentActorName %>)(); }).toThrow();
    });

    it('should throw an error when constructed without a name', () => {
      expect(() => { new (<any> Actor<%= componentBusName %><%= componentActorName %>)({ bus }); }).toThrow();
    });

    it('should throw an error when constructed without a bus', () => {
      expect(() => { new (<any> Actor<%= componentBusName %><%= componentActorName %>)({ name: 'actor' }); }).toThrow();
    });

    it('should throw an error when constructed without a name and bus', () => {
      expect(() => { new (<any> Actor<%= componentBusName %><%= componentActorName %>)({}); }).toThrow();
    });

    it('should throw an error when constructed without arguments', () => {
      expect(() => { new (<any> Actor<%= componentBusName %><%= componentActorName %>)(); }).toThrow();
    });
  });

  describe('An Actor<%= componentBusName %><%= componentActorName %> instance', () => {
    let actor: Actor<%= componentBusName %><%= componentActorName %>;

    beforeEach(() => {
      actor = new Actor<%= componentBusName %><%= componentActorName %>({ name: 'actor', bus });
    });

    it('should test', () => {
      return expect(actor.test({ todo: true })).resolves.toEqual({ todo: true }); // TODO
    });

    it('should run', () => {
      return expect(actor.run({ todo: true })).resolves.toMatchObject({ todo: true }); // TODO
    });
  });
});
