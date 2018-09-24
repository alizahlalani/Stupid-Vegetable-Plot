// const db = require('./model');
const {db, Vegetable, Gardener, Plot} = require('./model');


db.sync({force: true})
.then( ()=> {
    return Vegetable.bulkCreate(
        [{name: 'eggplant', color: 'purple', planted_on:Date.now()},
        {name: 'squash', color: 'yellow', planted_on: Date.now()},
        {name: 'cukes', color: 'green', planted_on:Date.now()}]
    )}
).then(db => {
        console.log("Sync successful! :)")
        // db.close();
    })
    .catch(err => {
        console.log('ERROR! >:(');
        console.log(err);
    })
    .finally(() => {
        db.close();
    })

//  Vegetable.bulkCreate(
//     [{name: 'eggplant', color: 'purple', planted_on:Date.now()},
//     {name: 'squash', color: 'yellow', planted_on: Date.now()},
//     {name: 'cukes', color: 'green', planted_on:Date.now()}]
// ). then( () => {
//        return Vegetable.findAll();        
//  }).then ( vegetables => {
//     console.log(vegetables);
// });
// creating n array of prokmises for veg to bulk resolve 

// const vegetablesToSeed = ['eggplant', 'cucumber', 'squash', 'turnip' ];

// let vegPromises = vegetablesToSeed.map()
// let pokePromises = names.map(name => Pokemon.create({name}))

// [
//     Pokemon.create('pikachu'),
//     Pokemon.create('meowth')


