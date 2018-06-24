# Sample Code with Lolex using Heap instead of Array

## How to test

1. clone repo and run `npm install`
1. run `time node ./index.js` to establish a baseline for unmodified lolex.
1. uncomment the first line of `index.js` and comment the second line, and run `time node ./index.js` again to see the performance of a heap-queue based lolex.

## Results

With heap-based lolex -

```bash
$ time node ./index.js
All Done! 1080099

real	0m0.441s
user	0m0.563s
sys	0m0.017s
```

With original lolex -

```bash
$ time node ./index.js
All Done! 1080099

real	0m19.830s
user	0m19.827s
sys	0m0.064s
```

## Note

This queue-based implementation of lolex is **incomplete** - only the functions used in this sample have been implemented.
