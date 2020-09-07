# Comunica Mediator <%= fullName %>

[![npm version](https://badge.fury.io/js/%40comunica%2Fmediator-<%= name %>.svg)](https://www.npmjs.com/package/@comunica/mediator-<%= name %>)

<%= description %>

This module is part of the [Comunica framework](https://github.com/comunica/comunica).

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
        "@id": "config-sets:sparql-init.json#mediatorHttpInvalidate",
        "@type": "Mediator<%= componentMediatorName %>",
        "cc:Mediator/bus": { "@id": "cbhi:Bus/HttpInvalidate" }
      }
    }
  ]
}
```

### Config Parameters

* `cc:Mediator/bus`: Identifier of the bus to mediate over.

