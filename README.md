# Utility to chunk GeoJSON lines

Only working on GeoJSON with `featureCollection` as input. It output GeoJSON

## Install

Not available on NPM at the moment, so do an install from github repo with

```bash
npm i ThomasG77/geojson-line-chunk -g
```

## Examples

```bash
cat mygeojson.json | geojson-line-chunk --distance 500 --units kilometers -
```

```bash
geojson-line-chunk --input myinput.json --distance 500 --units kilometers --output myoutput.json
```

## Help content

```bash
Options:
      --version       Show version number                              [boolean]
  -i, --input         Input GeoJSON file
  -o, --output        Provide an output path for GeoJSON
  -d, -d, --distance  Provide a distance for splitting line. If not units
                      specified, it's kilometers                      [required]
  -u, --units         Units
  [choices: "degrees", "radians", "miles", "kilometers"] [default: "kilometers"]
  -r, --reverse       Reverses coordinates to start the first chunked segment at
                      the end. Default to false       [boolean] [default: false]
      --help          Show help                                        [boolean]
```

