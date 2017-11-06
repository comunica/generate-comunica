import {Actor, Bus, IAction, IActorOutput, IActorTest, Mediator} from "@comunica/core";
import {Mediator<%= componentMediatorName %>} from "../lib/Mediator<%= componentMediatorName %>";

describe('Mediator<%= componentMediatorName %>', () => {
  let bus;

  beforeEach(() => {
    bus = new Bus({ name: 'bus' });
  });

  describe('The Mediator<%= componentMediatorName %> module', () => {
    it('should be a function', () => {
      expect(Mediator<%= componentMediatorName %>).toBeInstanceOf(Function);
    });

    it('should be a Mediator<%= componentMediatorName %> constructor', () => {
      expect(new (<any> Mediator<%= componentMediatorName %>)({ name: 'mediator', bus }))
        .toBeInstanceOf(Mediator<%= componentMediatorName %>);
      expect(new (<any> Mediator<%= componentMediatorName %>)({ name: 'mediator', bus }))
        .toBeInstanceOf(Mediator);
    });

    it('should not be able to create new Mediator<%= componentMediatorName %> objects without \'new\'', () => {
      expect(() => { (<any> Mediator<%= componentMediatorName %>)(); }).toThrow();
    });

    it('should throw an error when constructed without a name', () => {
      expect(() => { new (<any> Mediator<%= componentMediatorName %>)({ bus }); }).toThrow();
    });

    it('should throw an error when constructed without a bus', () => {
      expect(() => { new (<any> Mediator<%= componentMediatorName %>)({ name: 'mediator' }); }).toThrow();
    });

    it('should throw an error when constructed without a name and bus', () => {
      expect(() => { new (<any> Mediator<%= componentMediatorName %>)({}); }).toThrow();
    });

    it('should throw an error when constructed without arguments', () => {
      expect(() => { new (<any> Mediator<%= componentMediatorName %>)(); }).toThrow();
    });
  });

  describe('An Mediator<%= componentMediatorName %> instance', () => {
    let mediator: Mediator<%= componentMediatorName %><DummyActor, IAction, IDummyTest, IDummyTest>;

    beforeEach(() => {
      mediator = new Mediator<%= componentMediatorName %>({ name: 'mediator', bus });
    });

    beforeEach(() => {
      bus.subscribe(new DummyActor(10, bus));
      bus.subscribe(new DummyActor(100, bus));
      bus.subscribe(new DummyActor(1, bus));
    });

    it('should mediate', () => {
      return expect(mediator.mediate({})).resolves.toEqual({ todo: true });
    });
  });
});

class DummyActor extends Actor<IAction, IDummyTest, IDummyTest> {

  public readonly id: number;

  constructor(id: number, bus: Bus<DummyActor, IAction, IDummyTest, IDummyTest>) {
    super({ name: 'dummy' + id, bus });
    this.id = id;
  }

  public async test(action: IAction): Promise<IDummyTest> {
    return { field: this.id };
  }

  public async run(action: IAction): Promise<IDummyTest> {
    return { field: this.id };
  }

}

interface IDummyTest extends IActorTest, IActorOutput {
  field: number;
}
