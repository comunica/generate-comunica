import {Actor, IAction, IActorOutput, IActorReply, IActorTest, IMediatorArgs, Mediator} from "@comunica/core";
import * as _ from "lodash";

/**
 * <%= description %>
 */
export class Mediator<%= componentMediatorName %><A extends Actor<I, T, O>, I extends IAction, T extends IActorTest, O extends IActorOutput>
  extends Mediator<A, I, T, O> {

  constructor(args: IMediatorArgs<A, I, T, O>) {
    super(args);
  }

  protected async mediateWith(action: I, testResults: IActorReply<A, I, T, O>[]): Promise<A> {
    const results: T[] = await Promise.all(_.map(testResults, 'reply'));
    // TODO
    return null;
  }

}
