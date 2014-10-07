#!/bin/sh

rsync -avz -e 'ssh -i id_rsa' _site/ kari@gaaflora.com:/var/www/beta.gaaflora.com/
