import * as program from 'commander';
const pkg: any = require('./../package.json');
const updateNotifier = require('update-notifier');
updateNotifier({ pkg }).notify();

program
  .option('--env [value]', 'Environment (Production by default. Supported environments are: development|qa|production)')
  .version(pkg.version);
