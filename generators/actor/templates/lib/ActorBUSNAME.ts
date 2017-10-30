import {Actor<%= componentBusName %>, IAction<%= componentBusName %>, IActor<%= componentBusName %>Output} from "@comunica/bus-<%= busName %>";
import {IActorArgs, IActorTest} from "@comunica/core";

/**
 * <%= description %>
 */
export class Actor<%= componentBusName %><%= componentActorName %> extends Actor<%= componentBusName %> {

  constructor(args: IActorArgs<IAction<%= componentBusName %>, IActorTest, IActor<%= componentBusName %>Output>) {
    super(args);
  }

  public async test(action: IAction<%= componentBusName %>): Promise<IActorTest> {
    return true; // TODO implement
  }

  public async run(action: IAction<%= componentBusName %>): Promise<IActor<%= componentBusName %>Output> {
    return true; // TODO implement
  }

}
