import { Actor, IAction, IActorArgs, IActorOutput, IActorTest, Mediate } from '@comunica/core';

/**
 * <%= descriptionActor %>
 *
 * Actor types:
 * * Input:  IAction<%= componentBaseName %>:      TODO: fill in.
 * * Test:   <none>
 * * Output: IActor<%= componentBaseName %>Output: TODO: fill in.
 *
 * @see IAction<%= componentBaseName %>
 * @see IActor<%= componentBaseName %>Output
 */
export abstract class Actor<%= componentBaseName %> extends Actor<IAction<%= componentBaseName %>, IActorTest, IActor<%= componentBaseName %>Output> {
  /**
  * @param args - @defaultNested {<default_bus> a <cc:components/Bus.jsonld#Bus>} bus
  */
  public constructor(args: IActor<%= componentBaseName %>Args) {
    super(args);
  }
}

export interface IAction<%= componentBaseName %> extends IAction {

}

export interface IActor<%= componentBaseName %>Output extends IActorOutput {

}

export type IActor<%= componentBaseName %>Args = IActorArgs<
IAction<%= componentBaseName %>, IActorTest, IActor<%= componentBaseName %>Output>;

export type Mediator<%= componentBaseName %> = Mediate<
IAction<%= componentBaseName %>, IActor<%= componentBaseName %>Output>;
