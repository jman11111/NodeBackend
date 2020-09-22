const mongoose = require('mongoose');
// this conn string should come from configuration file
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('could not connect'));
//Use debug here

const blasterSchema = new mongoose.Schema({
    name: String,
    style: String,
    tags: [String],
    dateMade: {type: Date, default: Date.now},
    isAvailable: Boolean
});

const Blaster = mongoose.model('Blaster', blasterSchema);

async function createBlaster(){
    
    //Pascal case for classes, camel for object
    const blaster = new Blaster({
        name: 'Jolt',
        style: 'spring',
        tags: ['performant', 'small'],
        isAvailable: true
    });

    const result = await blaster.save();
    console.log(result);
}

//createBlaster();

async function getBlaster() {
    // eq equal
    // ne not equal
    // gt greater than
    // gte greater than or equal to
    // lt
    // lte
    // in
    // nin
    // this will find a name value greater than 10, or less than or equal to 20
    // find({ price: {$in: [10,15,20]}})

    // or
    // and
    // this will get any with author MOSH OR published true
    // .or([{author: Mosh}, {isPublished: true}])
    
    // find where author starts with Mosh
    // .find({author: /^Mosh/})
    // find where author ends with Hamedani, i makes it case sens
    // .find({author: /Hamedani$/i})
    // Contains Mosh
    // .find({author: /.*Mosh.*/i})

    // .count() will return size of results
    // .skip() =>
    // will skip all up to the 'page' you are on
    // .skip((pageNumber -1) * pagesize)
    // .limit(pagesize)

    const blasters = await Blaster.find({name: {$gt: 10, $lte: 20}})
        .limit(10)
        .sort({name: 1})
        .select({name: 1, tags: 1});
    console.log(blasters);
}

getBlaster();
