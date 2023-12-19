#!/bin/bash

cp pac-completion.bash /usr/share/bash-completion/completions/pac
install -D -m 755 pac /usr/bin
