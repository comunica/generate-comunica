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
  public constructor(args: IActorArgs<IAction<%= componentBaseName %>, IActorTest, IActor<%= componentBaseName %>Output>) {
    super(args);
  }
}

export interface IAction<%= componentBaseName %> extends IAction {

}

export interface IActor<%= componentBaseName %>Output extends IActorOutput {

}

export type IActorRdfResolveHypermediaArgs = IActorArgs<
  IAction<%= componentBaseName %>, IActorTest, IActor<%= componentBaseName %>Output>;

export type MediatorRdfResolveHypermedia = Mediate<
  IAction<%= componentBaseName %>, IActor<%= componentBaseName %>Output>;
