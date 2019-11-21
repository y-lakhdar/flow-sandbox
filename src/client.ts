import * as program from 'commander';
const pkg: any = require('./../package.json');
const updateNotifier = require('update-notifier');
updateNotifier({ pkg }).notify();

console.log('*********************');
console.log(pkg.version);
console.log('*********************');

program
  .option('--env [value]', 'Environment (Production by default. Supported environments are: development|qa|production)')
  .version(pkg.version);
