from pymongo import MongoClient

# MongoDB Atlas connection string
MONGO_URI = "mongodb+srv://mohitkambli8:Euphie017119%23@mongodbcluster.q3xfw.mongodb.net/FilterBlastDB?retryWrites=true&w=majority&appName=MongoDBCluster"
# Connect to MongoDB Atlas
client = MongoClient(MONGO_URI)
db = client.get_database('FilterBlastDB')  # Specify the database name
filterblast_collection = db.get_collection('filterblast_collection')  # Specify the collection name
# Prepare the data to be inserted, including the timestamp

download_log = {
    "user_name": 'Hello',
    "image_name": 'World',
}

try:
    # Insert data into MongoDB collection
    filterblast_collection.insert_one(download_log)
except Exception as e:
    print(e)