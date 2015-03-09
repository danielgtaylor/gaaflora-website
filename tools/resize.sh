#!/bin/bash

mv "$1" "$1.large.jpg"
convert "$1.large.jpg" -thumbnail ${2:-1000} -quality "100%" "$1.resized.jpg"
jpeg-recompress -q low "$1.resized.jpg" "$1"
rm "$1.resized.jpg"
