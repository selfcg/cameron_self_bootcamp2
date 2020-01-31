/* Add all the required libraries*/
import mongoose from 'mongoose';
import Listing from './ListingSchema.js';
import config from './config.js';
import ListingSchema from './ListingSchema.js';

let myDB, allListings;


/* Connect to your database using mongoose - remember to keep your key secret*/

mongoose.connect(config.db.uri)
myDB = mongoose.connection;
allListings = myDB.collection("Listings")

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

const findLibraryWest = () => {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  myDB.collection("listings").findOne({code: "LBW"}, function (err, listing) {
      console.log(listing)
  })
};

const removeCable = () => {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  myDB.collection("listings").findOneAndDelete({code: 'CABL'}, function(err, listing){
    console.log(listing);
  })
};
const updatePhelpsLab = () => {

  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
  const Address = "1953 Museum Rd, Gainesville, FL 32603";
  const Code = "PHL";

  myDB.collection("listings").findOneAndUpdate({code: "PHL"}, {$set:{address: Address}}, {returnOriginal: false}, function(err, listing){
      console.log(listing);
  })

};


const retrieveAllListings = () => {
  myDB.collection("listings").find({},function(err, listings){
    listings.forEach(function(listing){
      console.log(listing)
    })
  })
};


findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings()
