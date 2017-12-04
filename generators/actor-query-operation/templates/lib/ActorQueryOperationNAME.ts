import {ActorQueryOperationTypedMediated, Bindings, IActorQueryOperationOutput,
  IActorQueryOperationTypedMediatedArgs} from "@comunica/bus-query-operation";
import {BindingsStream} from "@comunica/bus-query-operation";
import {IActorTest} from "@comunica/core";
import {Algebra} from "sparqlalgebrajs";

/**
 * <%= description %>
 */
export class ActorQueryOperation<%= componentActorName %> extends ActorQueryOperationTypedMediated<Algebra.<%= operationInterfaceType %>> {

  constructor(args: IActorQueryOperationTypedMediatedArgs) {
    super(args, '<%= operationName %>');
  }

  public async testOperation(pattern: Algebra.<%= operationInterfaceType %>, context?: {[id: string]: any}): Promise<IActorTest> {
    return true; // TODO implement
  }

  public async runOperation(pattern: Algebra.<%= operationInterfaceType %>, context?: {[id: string]: any})
    : Promise<IActorQueryOperationOutput> {
    // Call other query operations like this:
    // const output: IActorQueryOperationOutput = await this.mediatorQueryOperation.mediate({ operation, context });
    return { bindingsStream, metadata, variables }; // TODO: implement
  }

}
