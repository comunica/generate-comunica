import {Actor, IAction, IActorArgs, IActorOutput, IActorTest} from "@comunica/core";

/**
 * <%= descriptionActor %>
 *
 * Actor types:
 * * Input:  IAction<%= componentBaseName %>:      TODO: fill in.
 * * Test:   <none>
 * * Output: IActor<%= componentBaseName %>Output: TODO: fill in.
 *
 * @see IActionRdfDereference
 * @see IActorRdfDereferenceOutput
 */
export abstract class Actor<%= componentBaseName %> extends Actor<IAction<%= componentBaseName %>, IActorTest, IActor<%= componentBaseName %>Output> {

  constructor(args: IActorArgs<IAction<%= componentBaseName %>, IActorTest, IActor<%= componentBaseName %>Output>) {
    super(args);
  }

}

export interface IAction<%= componentBaseName %> extends IAction {

}

export interface IActor<%= componentBaseName %>Output extends IActorOutput {

}
