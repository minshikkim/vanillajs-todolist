const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://minshikUser:alstlrdlspdlqj1!@cluster0-g5ynz.mongodb.net/Cluster0?retryWrites=true&w=majority"
MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});