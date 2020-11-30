var fs = require('fs');

function populateProps(props, basePath) {
  var cwd = process.cwd() + '/';
  var requirePath = cwd + basePath + '../node_modules/@comunica/';
  props['versionComunicaCore'] = require(requirePath + 'core/package.json').version;
  if (props.busName) {
    props['versionBus'] = require(requirePath + 'bus-' + props.busName + '/package.json').version;
  }
}

module.exports = {
  populateProps: populateProps,
};
