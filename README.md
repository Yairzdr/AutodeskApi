# Autodesk
Link to live API on Heroku: https://node-webapi-autodesk.herokuapp.com/
Example of a twitter query call: https://node-webapi-autodesk.herokuapp.com/tweets?query=statuses/user_timeline
                                 this query gets the 10 latests tweets made by the account i'm using the api keys from (Tweets "test1-10)
*i'm assuming that you will provide your own query like this example above^
Example of a health query call: https://node-webapi-autodesk.herokuapp.com/health

This is the first time I'm working with Docker or Heroku, I hope i did it all as expected.
The container was created using the Dockerfile. I deployed it into Heroku. 
In order to run my service locally with Docker, you can use the Dockerfile to recreate the image using:
docker build . -t <your username>/node-api
and run it using
docker run -p 3000:3000 -d <your username>/node-api
*defult port is set to 3000.

The container can also be found at: https://hub.docker.com/r/yairzdr/node-api (was tested using Docker playground)

You could also use the latest.tar I made (I saved the image using docker save).
The function $ docker load --input latest.tar should reload the image, and all that is left is to run it on your machine.
Was uploaded to google drive because of the file size restrictions on git: https://drive.google.com/file/d/1gCnBHknYOsVIfoNwdBrEiSXwlIgzSaGG/view?usp=sharing
