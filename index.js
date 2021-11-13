const fs = require('fs');
const lineChunk = require('@turf/line-chunk');

function generateLineChunk(args) {
  const content = fs.readFileSync(args.input, 'utf8')
  const json_content = JSON.parse(content);

  const chunked_features = json_content.features.reduce((acc, feature) => {
    const chunk = lineChunk(feature, args.distance, {
      units: args.units,
      reverse: args.reverse
    });
    return [...acc, ...chunk.features.map(ch => {
      ch.properties = feature.properties;  
      return ch;
    })]
  }, [])
  const json_content_output = JSON.stringify(chunked_features);
  if (args.output && args.output !== 0) {
    fs.writeFileSync(args.output, json_content_output);
  } else {
    process.stdout.write(json_content_output);
  }
}

module.exports = generateLineChunk;
