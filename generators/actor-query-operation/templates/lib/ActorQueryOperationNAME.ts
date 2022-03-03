import { ActorQueryOperationTypedMediated, IActorQueryOperationOutput,
  IActorQueryOperationTypedMediatedArgs } from '@comunica/bus-query-operation';
import { IActorTest } from '@comunica/core';
import type { IActionContext } from '@comunica/types';
import { Algebra } from 'sparqlalgebrajs';

/**
 * <%= description %>
 */
export class ActorQueryOperation<%= componentActorName %> extends ActorQueryOperationTypedMediated<Algebra.<%= operationInterfaceType %>> {
  public constructor(args: IActorQueryOperationTypedMediatedArgs) {
    super(args, '<%= operationName %>');
  }

  public async testOperation(pattern: Algebra.<%= operationInterfaceType %>, context: IActionContext): Promise<IActorTest> {
    return true; // TODO implement
  }

  public async runOperation(pattern: Algebra.<%= operationInterfaceType %>, context: IActionContext):
  Promise<IActorQueryOperationOutput> {
    // Call other query operations like this:
    // const output: IQueryOperationResult = await this.mediatorQueryOperation.mediate({ operation, context });
    return { type: 'bindings', bindingsStream, metadata }; // TODO: implement
  }
}
