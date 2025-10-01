import mongoose from 'mongoose';

export async function connectDB() {
  const uri =  "mongodb://Hadwa:Hadwa@ac-tl77fwg-shard-00-00.hpstsct.mongodb.net:27017,ac-tl77fwg-shard-00-01.hpstsct.mongodb.net:27017,ac-tl77fwg-shard-00-02.hpstsct.mongodb.net:27017/?ssl=true&replicaSet=atlas-4jfj3v-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0I";
  if (!uri) throw new Error('MONGO_URI is not set');
  try {
    await mongoose.connect(uri, { autoIndex: true });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error', err.message);
    process.exit(1);
  }
}
