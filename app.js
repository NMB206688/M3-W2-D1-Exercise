const { MongoClient } = require("mongodb");

// Create an instance of MongoClient for MongoDB
const client = new MongoClient("mongodb://127.0.0.1:27017/nodemongo");

async function main() {
  try {
    // Connect to the database
    await client.connect();
    console.log("Connected Successfully & Database Created!");

    // Get the database
    const dbo = client.db("nodemongo");

    // Sample data to insert
    var custData = [
      { name: "John", address: "Highway 71" },
      { name: "Peter", address: "Lowstreet 4" },
      { name: "Amy", address: "Apple st 652" },
      { name: "Hannah", address: "Mountain 21" },
      { name: "Michael", address: "Valley 345" },
      { name: "Sandy", address: "Ocean blvd 2" },
      { name: "Betty", address: "Green Grass 1" },
      { name: "Richard", address: "Sky st 331" },
      { name: "Susan", address: "One way 98" },
      { name: "Vicky", address: "Yellow Garden 2" },
      { name: "Ben", address: "Park Lane 38" },
      { name: "William", address: "Central st 954" },
      { name: "Chuck", address: "Main Road 989" },
      { name: "Viola", address: "Sideway 1633" },
    ];

    // Insert multiple documents
    //const result = await dbo.collection("customers").insertMany(custData);
    //console.log(`${result.insertedCount} documents inserted`);

    // Deactivate previous entry and insert a single record
    /*
    const singleData = { name: "Westcliff Inc", address: "Westcliff Blvd 123" };
    const singleResult = await dbo.collection("customers").insertOne(singleData);
    console.log("1 document inserted");
    */

    // Insert multiple records again
    
    const result = await dbo.collection("customers").insertMany(custData);
    console.log(`${result.insertedCount} documents inserted`);
    

    // Find one document
    /*
    const document = await dbo.collection("customers").findOne({});
    console.log(document);
    */

    // Filter documents
    /*
    const query = { address: "Park Lane 38" };
    const filteredDocs = await dbo.collection("customers").find(query).toArray();
    console.log(filteredDocs);
    */

    // Sort documents
    /*
    const sortedDocs = await dbo.collection("customers").find().sort({ name: 1 }).toArray();
    console.log(sortedDocs);
    */

    // Delete a document
    /*
    const deleteResult = await dbo.collection("customers").deleteOne({ name: "John" });
    console.log("1 document deleted");
    */

    // Update a document
    /*
    const updateResult = await dbo.collection("customers").updateOne(
      { name: "John" },
      { $set: { address: "New Highway 71" } }
    );
    console.log("1 document updated");
    */

  } catch (error) {
    console.error("Failed to perform operations", error);
  } finally {
    // Close the database connection
    await client.close();
  }
}

main().catch(console.error);
