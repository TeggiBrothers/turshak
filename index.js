var argv = require('yargs')
      .usage('Usage: $0 --config [location]')
      .demandOption(['config'])
      .argv;
const config = require(argv.config)();
var app = require('./src/app');
app(config);
