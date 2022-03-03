# Comunica Generator

This is a collection of Comunica package generators that can be used for creating new Comunica packages.

Learn more about [modifying Comunica](https://comunica.dev/docs/modify/).

## Usage

### Installation

Comunica requires [Node.JS](http://nodejs.org/) 14.0 or higher and is tested on OSX and Linux.

1. Make sure `yo` is globally installed: `npm install -g yo`
2. Clone this repository: `git clone git@github.com:comunica/generate-comunica.git`
3. Run `npm install` in the cloned directory.
4. Run `npm link` in this directory for installing this generator.

### Generating a new actor

Running `yo comunica:actor` or `yo comunica:actor --name my-name --bus bus-name` will create a new actor package.

Running `yo comunica:actor-query-operation` or `yo comunica:actor-query-operation operation-name` will create a new query operation actor package.

### Generating a new bus

Running `yo comunica:bus` or `yo comunica:bus --name my-name` will create a new bus package.

### Generating a new mediator

Running `yo comunica:mediator` or `yo comunica:mediator --name my-name` will create a new mediator package.

## License
This code is copyrighted by [the Comunica Association](https://comunica.dev/association/) and [Ghent University – imec](http://idlab.ugent.be/)
and released under the [MIT license](http://opensource.org/licenses/MIT).
