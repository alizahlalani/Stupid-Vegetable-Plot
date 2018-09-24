const Sequelize = require ("sequelize");
const db = new Sequelize ('postgres://localhost:5432/plantr', {
    logging: false,
});

const Gardener = db.define('gardeners', {
    name: {
        type: Sequelize.STRING
    },
    age: {
        type:Sequelize.INTEGER
    }
});

const Plot = db.define('plot', {
    size: {
        type: Sequelize.INTEGER
    },
    shaded: {
        type:Sequelize.BOOLEAN
    }
});
const Vegetable = db.define('vegetables', {
     name: {
        type: Sequelize.STRING
    },
    color: {
        type:Sequelize.STRING
    },
    planted_on:{
        type: Sequelize.DATE
    }
})

Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'});
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'});
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})
Plot.belongsTo(Gardener, {as: 'gardener'})

module.exports = {db, Vegetable, Gardener, Plot};