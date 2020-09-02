import { Actor<%= componentBusName %> } from '@comunica/bus-<%= busName %>';
import { Bus } from '@comunica/core';
import { Actor<%= componentBusName %><%= componentActorName %> } from '../lib/Actor<%= componentBusName %><%= componentActorName %>';

describe('Actor<%= componentBusName %><%= componentActorName %>', () => {
  let bus: any;

  beforeEach(() => {
    bus = new Bus({ name: 'bus' });
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
