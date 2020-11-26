var fs = require('fs');

function populateProps(props, basePath, namespace) {
  var cwd = process.cwd() + '/';
  var requirePath = cwd + basePath + '../node_modules/@comunica/';
  props['versionComunicaCore'] = require(requirePath + 'core/package.json').version;
  if (namespace === "comunica:actor") {
    props['versionBus'] = require(requirePath + 'bus-' + props.busName + '/package.json').version;
  } else {
    props['versionBus'] = props['versionComunicaCore']
  }
}

module.exports = {
  populateProps: populateProps,
};
