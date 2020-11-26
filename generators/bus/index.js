var Generator = require('yeoman-generator');
var populateProps = require('../common/props').populateProps;

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.argument('name', { type: String, required: false, optional: true });
  }

  prompting() {
    var prompts = [{
      name    : 'name',
      message : 'Bus name (without bus- prefix)',
      default : this.options.name || 'my-name',
      validate: function(input) {
        return !/^bus-/.test(input) && !/\s/g.test(input) && /^[a-z0-9-]+$/.test(input);
      }
    }, {
      name    : 'fullName',
      message : 'The full readable name of the bus',
      default : function(props) {
        var fullName = props.name.replace(/-([a-z])/g, function (g) { return ' ' + g[1].toUpperCase(); });
        fullName = fullName[0].toUpperCase() + fullName.substr(1);
        fullName = fullName.replace('Rdf', 'RDF');
        return fullName;
      }
    }, {
      name    : 'componentBaseName',
      message : 'The base name of the actor and bus',
      default : function(props) {
        var fullName = props.name.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
        fullName = fullName[0].toUpperCase() + fullName.substr(1);
        return fullName;
      },
      validate: function(input) {
        return !/\s/g.test(input) && !/\./.test(input);
      }
    }, {
      name    : 'description',
      message : 'A description of the bus',
      default : function(props) {
        return 'A comunica bus for ' + props.name + ' events.';
      }
    }, {
      name    : 'descriptionActor',
      message : 'A description of the actor',
      default : function(props) {
        return 'A comunica actor for ' + props.name + ' events.';
      }
    }, {
      name    : 'prefix',
      message : 'The component context prefix',
      default : function(props) {
        return 'cb' + props.name.split('-').map(function (part) { return part[0] }).join('');
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
      { src: 'components/Actor/NAME.jsonld', dest: 'components/Actor/' + this.props.componentBaseName + '.jsonld' },
      { src: 'components/Bus/NAME.jsonld', dest: 'components/Bus/' + this.props.componentBaseName + '.jsonld' },
      'components/components.jsonld',
      'components/context.jsonld',
      { src: 'lib/ActorNAME.ts', dest: 'lib/Actor' + this.props.componentBaseName + '.ts' },
      '.npmignore',
      'index.ts',
      'package.json',
      'README.md',
    ];
    var self = this;
    var basePath = this.destinationRoot().endsWith('packages') ? './' : './packages/';

    populateProps(self.props, basePath, self.options.namespace);
    files.forEach(function(file) {
      var s = typeof file == 'string' ? file : file.src,
          d = typeof file == 'string' ? file : file.dest;
      self.fs.copyTpl(
        self.templatePath(s),
        self.destinationPath(basePath + 'bus-' + self.props.name + '/' + d),
        self.props
      )
    });
  }
};
