#!/bin/bash

echo "Iniciaremos el testing!"

docker compose build
docker compose up 

resp=$(docker compose ps | grep testing)

if [[ "$resp" =~ "Exit 0" ]];
then
    codeError=0
else
    codeError=1
fi

echo "Done!"

exit $codeError 
