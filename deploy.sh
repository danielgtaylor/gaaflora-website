#!/bin/sh

rsync -avz -e 'ssh -i id_rsa -o StrictHostKeyChecking=no' _site/ kari@gaaflora.com:/var/www/beta.gaaflora.com/
