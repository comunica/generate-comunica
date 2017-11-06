var Generator = require('yeoman-generator');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.argument('name', { type: String, required: false, optional: true });
  }

  prompting() {
    var prompts = [{
      name    : 'name',
      message : 'Mediator name (without mediator- prefix)',
      default : this.options.name || 'my-name',
      validate: function(input) {
        return !/^mediator-/.test(input) && !/\s/g.test(input) && /^[a-z-]+$/.test(input);
      }
    }, {
      name    : 'fullName',
      message : 'The full readable name of the mediator',
      default : function(props) {
        var fullName = props.name.replace(/-([a-z])/g, function (g) { return ' ' + g[1].toUpperCase(); });
        fullName = fullName[0].toUpperCase() + fullName.substr(1);
        fullName = fullName.replace('Rdf', 'RDF');
        return fullName;
      }
    }, {
      name    : 'componentMediatorName',
      message : 'The base name of the mediator',
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
      message : 'A description of the mediator',
      default : function(props) {
        return 'A comunica ' + props.name + ' mediator.';
      }
    }, {
      name    : 'prefix',
      message : 'The component context prefix',
      default : function(props) {
        return 'cm' + props.name.split('-').map(function (part) { return part[0] }).join('');
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
      { src: 'components/Mediator/NAME.jsonld', dest: 'components/Mediator/' + this.props.componentMediatorName + '.jsonld' },
      'components/components.jsonld',
      'components/context.jsonld',
      { src: 'lib/MediatorNAME.ts', dest: 'lib/Mediator' + this.props.componentMediatorName + '.ts' },
      { src: 'test/MediatorNAME-test.ts', dest: 'test/Mediator' + this.props.componentMediatorName + '-test.ts' },
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
        self.destinationPath(basePath + 'mediator-' + self.props.name + '/' + d),
        self.props
      )
    });
  }
};
