#!/bin/bash -i
cd ~/backend
forever start app.js | tee ~/forever_logs.txt
