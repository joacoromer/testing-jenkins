#!/bin/bash

echo "Iniciaremos el testing!"

docker compose up 

resp=$(docker compose ps | grep testing | awk '{print $5}')

echo "Done!"

exit $resp 