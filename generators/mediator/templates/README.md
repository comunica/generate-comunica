# Comunica Mediator <%= fullName %>

[![npm version](https://badge.fury.io/js/%40comunica%2Fmediator-<%= name %>.svg)](https://www.npmjs.com/package/@comunica/mediator-<%= name %>)

<%= description %>

This module is part of the [Comunica framework](https://github.com/comunica/comunica),
and should only be used by [developers that want to build their own query engine](https://comunica.dev/docs/modify/).

[Click here if you just want to query with Comunica](https://comunica.dev/docs/query/).

## Install

```bash
$ yarn add @comunica/mediator-<%= name %>
```

## Configure

After installing, this mediator can be instantiated as follows:
```text
{
  "@context": [
    ...
    "https://linkedsoftwaredependencies.org/bundles/npm/@comunica/mediator-all/^1.0.0/components/context.jsonld"  
  ],
  "actors": [
    ...
    {
      "@type": "SomeActor",
      "someMediator": {
        "@id": "#myMediator",
        "@type": "Mediator<%= componentMediatorName %>",
        "bus": { "@id": "ActorQueryOperation:_default_bus" }
      }
    }
  ]
}
```

### Config Parameters

TODO: fill in parameters (this section can be removed if there are none)

* `bus`: Identifier of the bus to mediate over.

