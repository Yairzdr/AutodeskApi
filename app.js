const express = require('express');
const app = express();
var os 	= require('os-utils');//Required for Memory usage
var os2 = require('os');//required for OS type..
var Twitter = require('twitter');//Required for Twitter
const osInfo = require("@felipebutcher/node-os-info");//Required for CPU percentage

//Twitter keys
const TwitterAPIkey="B3oK5tLklVxqUFlvhCMfXT2gw";
const TwitterApiSecretKey="K38nLRcxFVcIRvGUeBEzurvo3R2YJ3ebxICilPUX9zbSVyvXwJ";
const AccessToken="53027121-KhuibasyqHf6tFBFBUTXklobfsvKY6jNWsyg27Ilc";
const AccessTokenSecret="jbTXOudhtkpjJ7qQCsaTwWTa4o3H4U3QdZmnx8UgpUu8y";


var client = new Twitter({
    consumer_key: TwitterAPIkey,
    consumer_secret: TwitterApiSecretKey,
    access_token_key: AccessToken,
    access_token_secret: AccessTokenSecret
  });

  

app.get ('/tweets',(req,res)=>{
    var params = {count:10,};//params for the twitter api request.
    client.get('search/tweets.json?q='+req.query.query+'&result_type=recent', params, function(error, tweets, response) {//query input should match twitter api. i.e: 'statuses/user_timeline'
        if (!error) {
            var object={}
            var size = Object.keys(tweets.statuses).length;
            if(size>10)//making sure i'm not trying to access out of bound index.
                size=10;
            for(i=0;i<size;i++)
                (object[i+1])=(tweets.statuses[i].text);//getting the text field only (I don't care about the rest of the information atm). could probably be done with a filter function instead a for loop but this is easier in this case
            res.send(object);
        }
        });
})


app.get('/health', (req, res) =>{
        osInfo.cpu(cpu => {
            res.send({"OS platform":os2.type(),
            "Nodejs platform version":process.version,
            "Memory usage":parseInt(100-os.freememPercentage()*100)+'%',
            "Proccess CPU Usage": Math.round(cpu * 100)+'%'})
        });
    });
 
const port = process.env.PORT||3000;
app.listen(port,()=>console.log('Listening.'))