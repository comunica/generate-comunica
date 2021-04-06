# Comunica Bus <%= fullName %>

[![npm version](https://badge.fury.io/js/%40comunica%2Fbus-<%= name %>.svg)](https://www.npmjs.com/package/@comunica/bus-<%= name %>)

<%= description %>

This module is part of the [Comunica framework](https://github.com/comunica/comunica),
and should only be used by [developers that want to build their own query engine](https://comunica.dev/docs/modify/).

[Click here if you just want to query with Comunica](https://comunica.dev/docs/query/).

## Install

```bash
$ yarn add @comunica/bus-<%= name %>
```

## Usage

## Bus usage

* **Context**: `"https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-<%= name %>/^1.0.0/components/context.jsonld"`
* **Bus name**: `<%= prefix %>:Bus/<%= componentBaseName %>`

## Creating actors on this bus

Actors extending [`Actor<%= componentBaseName %>`](TODO:jsdoc_url) are automatically subscribed to this bus.
