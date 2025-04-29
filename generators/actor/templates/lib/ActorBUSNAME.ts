import { Actor<%= componentBusName %>, IAction<%= componentBusName %>, IActor<%= componentBusName %>Output, IActor<%= componentBusName %>Args } from '@comunica/bus-<%= busName %>';
import { TestResult, IActorTest, passTestVoid } from '@comunica/core';

/**
 * <%= description %>
 */
export class Actor<%= componentBusName %><%= componentActorName %> extends Actor<%= componentBusName %> {
  public constructor(args: IActor<%= componentBusName %>Args) {
    super(args);
  }

  public async test(action: IAction<%= componentBusName %>): Promise<TestResult<IActorTest>> {
    return passTestVoid(); // TODO implement
  }

  public async run(action: IAction<%= componentBusName %>): Promise<IActor<%= componentBusName %>Output> {
    return true; // TODO implement
  }
}
