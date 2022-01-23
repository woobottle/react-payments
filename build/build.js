const webpack = require('webpack');
const ora = require('ora');
const rm = require('rimraf');
const chalk = require('chalk');
const config = require('./webpack.config');

const env = process.env.NODE_ENV || 'development';
const spinner = ora(env === 'development' ? 'Building for development' : 'Building for production');
spinner.start()

rm('./www/', (removeErr) => {
  if (removeErr) throw removeErr;

  webpack(config, (err, stats) => {
    if (err) throw err;
    spinner.stop();

    process.stdout.write(
      `${stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      })}\n\n`,
    );

    if (stats.hasErrors()) {
      process.exit(1);
    }

    console.log(chalk.cyan('Build complete'));
  })
})