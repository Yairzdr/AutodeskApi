# Autodesk
Link to live API on Heroku: https://apitest-autodesk.herokuapp.com/
Example of a twitter query call: https://node-webapi-autodesk.herokuapp.com/tweets?query=euro2021
                                 

Example of a health query call: https://node-webapi-autodesk.herokuapp.com/health

This is the first time I'm working with Docker or Heroku, I hope i did it all as expected.
The container was created using the Dockerfile. I deployed it into Heroku. 
In order to run my service locally with Docker, you can use the Dockerfile to recreate the image using:
docker build . -t <your username>/node-api
and run it using
docker run -p 3000:3000 -d <your username>/node-api
*defult port is set to 3000.

The container can also be found at: https://hub.docker.com/r/yairzdr/api (was tested using Docker playground)
