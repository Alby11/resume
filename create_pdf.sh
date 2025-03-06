#!/bin/bash

pandoc content.md -o resume.pdf \
  --pdf-engine=xelatex \
  -V geometry:margin=0.3in \
  -V mainfont="Liberation Sans" \
  -V fontsize=10pt \
  -V colorlinks=true
