import mongoose from 'mongoose';

const Connection = async (username = 'usercode', password = 'binita123') => {
    const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.zuakq.mongodb.net:27017,cluster0-shard-00-01.zuakq.mongodb.net:27017,cluster0-shard-00-02.zuakq.mongodb.net:27017/?ssl=true&replicaSet=atlas-dpuhu2-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;

    try{
        await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');

    } catch (error) {
        console.error('Error while connecting with the database', error.message);
    }
}

export default Connection; 