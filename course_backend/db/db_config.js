const mongoose = require('mongoose');

const connectMongo = () => {
    mongoose.connect('mongodb+srv://pranaywawalkar2005_db_user:hxeewgGY462MGoGN@cluster0.wpufa7z.mongodb.net/?appName=Cluster0')
        .then(() => console.log('connnected to db...'))
        .catch((err) => console.log(err))
}

module.exports = connectMongo
