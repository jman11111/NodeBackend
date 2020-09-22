const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongo-exercises', {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('could not connect'));

const courseSchema = mongoose.Schema(
    {
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean,
    price: Number
    }
);

const Course = mongoose.model('course',courseSchema);

async function getRes(){
    const results = await Course.find()
        .or([{price: {$gte: 15}},{name: /.*by.*/}]);
    console.log(results);
}

getRes();