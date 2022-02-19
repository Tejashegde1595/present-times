import PouchDB from "pouchdb";

const baseUrl = `https://b2kwq7bhkd.execute-api.us-east-1.amazonaws.com/news?`;
const category = `&category=`;
const country = `country=`;
const API_KEY="08e3fdb043fc41f8b43e35ccf3d18b8f";
var db = new PouchDB('news');
db.info().then(function (info) {
  console.log(info);
})

export default class HttpService {

    
    getNews(requestParameters, countryCode){
        return fetch(baseUrl+country+countryCode+category+requestParameters)
        .then(response => response.json());
    }

    getNewsSearch(query, countryCode){
        return fetch(baseUrl+country+countryCode+'&q='+query,{
            headers: {
                "X-Api-Key": API_KEY,
            }
        })
        .then(response => response.json());

    }

    postDocToIndexedDB(){
        var doc = {
            "_id": Math.random().toString(),
            "title":"First news to show"
          };
        db.put(doc);
        db.get('news').then(function (doc) {
            console.log(doc);
        });
    }


}