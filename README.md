# Utility to chunk GeoJSON lines

Only working on GeoJSON with `featureCollection`

```
npm i
```

```
cat mygeojson.json | ./bin/geojson-line-chunk --output toto.json --distance 500 --units kilometers -
```
