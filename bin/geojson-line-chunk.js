#!/usr/bin/env node

import yargs from 'yargs';

const args = yargs(process.argv.slice(2))
  .option('input', {
    alias: 'i',
    describe: 'Input GeoJSON file. You can use stdin if using - option'
  })
  .option('output', {
    alias: 'o',
    describe: 'Provide an output path for GeoJSON. If not used, output goes to stdout'
  })
  .option('distance', {
    alias: 'd',
    describe: "Provide a distance for splitting line. If not units specified, it's kilometers"
  })
  .default('units', 'kilometers')
  .option('units', {
    alias: 'u',
    describe: 'Units',
    choices: ['degrees', 'radians', 'miles', 'kilometers'],
  })
  .option('distance', {
    alias: 'd',
    describe: "Provide a distance for splitting line. If not units specified, it's kilometers"
  })
  .default('reverse', false)
  .boolean('reverse')
  .option('reverse', {
    alias: 'r',
    describe: "Reverses coordinates to start the first chunked segment at the end. Default to false"
  })
  .check((argv, options) => {
    if (argv._ && argv._.includes('-')) {
      argv.input = 0;
    }
    if (!('output' in argv)) {
      argv.output = 0;
    }
    if (!('input' in argv)) {
      throw new Error("You need to provide an input file from --input option or use an entry from stdin with - option e.g `cat myfile.geojson |  node index.js --output out.json --distance 50 --units kilometers -`")
      } else {
      return true
    }
  })
  .demandOption(['distance'], 'Please provide a --distance argument, an --input from file or stdin with - option')
  .help()
  .argv;

import geojson_line_chunk from '../index.js';
geojson_line_chunk(args);
