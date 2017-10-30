var Generator = require('yeoman-generator');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.argument('name', { type: String, required: false, optional: true });
    this.argument('busName', { type: String, required: false, optional: true });
  }

  prompting() {
    var prompts = [{
      name    : 'name',
      message : 'Actor name (without actor-bus- prefix)',
      default : this.options.name || 'my-name',
      validate: function(input) {
        return !/^actor-/.test(input) && !/\s/g.test(input) && /^[a-z-]+$/.test(input);
      }
    }, {
      name    : 'busName',
      message : 'Bus name (without bus- prefix)',
      default : this.options.busName || 'my-name',
      validate: function(input) {
        return !/^bus-/.test(input) && !/\s/g.test(input) && /^[a-z-]+$/.test(input);
      }
    }, {
      name    : 'fullName',
      message : 'The full readable name of the actor',
      default : function(props) {
        var fullName = props.name.replace(/-([a-z])/g, function (g) { return ' ' + g[1].toUpperCase(); });
        fullName = fullName[0].toUpperCase() + fullName.substr(1);
        fullName = fullName.replace('Rdf', 'RDF');
        return fullName;
      }
    }, {
      name    : 'fullBusName',
      message : 'The full readable name of the bus',
      default : function(props) {
        var fullName = props.busName.replace(/-([a-z])/g, function (g) { return ' ' + g[1].toUpperCase(); });
        fullName = fullName[0].toUpperCase() + fullName.substr(1);
        fullName = fullName.replace('Rdf', 'RDF');
        return fullName;
      }
    }, {
      name    : 'componentActorName',
      message : 'The component base name of the actor (without Bus part)',
      default : function(props) {
        var fullName = props.name.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
        fullName = fullName[0].toUpperCase() + fullName.substr(1);
        return fullName;
      },
      validate: function(input) {
        return !/\s/g.test(input) && !/\./.test(input);
      }
    }, {
      name    : 'componentBusName',
      message : 'The component base name of the bus',
      default : function(props) {
        var fullName = props.busName.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
        fullName = fullName[0].toUpperCase() + fullName.substr(1);
        return fullName;
      },
      validate: function(input) {
        return !/\s/g.test(input) && !/\./.test(input);
      }
    }, {
      name    : 'description',
      message : 'A description of the actor',
      default : function(props) {
        return 'A comunica ' + props.fullName + ' ' + props.fullBusName + ' Actor.';
      }
    }, {
      name    : 'prefix',
      message : 'The component context prefix',
      default : function(props) {
        return 'ca' + props.busName.split('-').map(function (part) { return part[0] }).join('') + props.name.split('-').map(function (part) { return part[0] }).join('');
      },
      validate: function(input) {
        return !/\s/g.test(input) && !/\./.test(input) && !/-/.test(input) && !/[A-Z]/.test(input) && input.length > 1;
      }
    }, {
      name    : 'prefixBus',
      message : 'The component bus context prefix',
      default : function(props) {
        return 'cb' + props.busName.split('-').map(function (part) { return part[0] }).join('');
      },
      validate: function(input) {
        return !/\s/g.test(input) && !/\./.test(input) && !/-/.test(input) && !/[A-Z]/.test(input) && input.length > 1;
      }
    }];
    var self = this;
    return this.prompt(prompts).then(function (props) {
      self.props = props;
      return props;
    });
  }

  writing() {
    var files = [
      { src: 'components/Actor/BUS/NAME.jsonld', dest: 'components/Actor/' + this.props.componentBusName + '/' + this.props.componentActorName + '.jsonld' },
      'components/components.jsonld',
      'components/context.jsonld',
      { src: 'lib/ActorBUSNAME.ts', dest: 'lib/Actor' + this.props.componentBusName + this.props.componentActorName + '.ts' },
      { src: 'test/ActorBUSNAME-test.ts', dest: 'test/Actor' + this.props.componentBusName + this.props.componentActorName + '-test.ts' },
      'test/tsconfig.json',
      'test/tslint.json',
      '.npmignore',
      'index.ts',
      'package.json',
      'README.md',
      'tsconfig.json',
      'tslint.json'
    ];
    var self = this;
    var basePath = this.destinationRoot().endsWith('packages') ? '' : 'packages/';
    files.forEach(function(file) {
      var s = typeof file == 'string' ? file : file.src,
          d = typeof file == 'string' ? file : file.dest;
      self.fs.copyTpl(
        self.templatePath(s),
        self.destinationPath(basePath + 'actor-' + self.props.busName + '-' + self.props.name + '/' + d),
        self.props
      )
    });
  }
};
