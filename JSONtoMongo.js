'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
import * as fs from 'fs';
import mongoose from 'mongoose';
import Listing from './ListingSchema.js';
import config from './config.js';
import ListingSchema from './ListingSchema.js';

let listingData, myCon, myDB, allListings, dataKeys;


/* Connect to your database using mongoose */
//see https://mongoosejs.com/docs/connections.html
//See https://docs.atlas.mongodb.com/driver-connection/

mongoose.connect(config.db.uri)
myDB = mongoose.connection;

allListings = myDB.listings;



/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
  //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

  Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
 */

 fs.readFile('./listings.JSON', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data)
  listingData = JSON.parse(data)

  listingData.entries.forEach(function(element)
  {
    myDB.collection("listings").insertOne(element)
    console.log(element)
  })
  
  
  

 })




/*  
  Check to see if it works: Once you've written + run the script, check out your local MongoDB database to ensure that
  it saved everything correctly. 
 */
