const mongoose = require('mongoose')

const Beast = mongoose.model('Beast', {
    name: String,
    img: String,
    size: String,
    hp: Number,
    roll: String,
    ac: Number,
    speed: Number,
    climb: Number,
    burrow: Number,
    fly: Number,
    swim: Number,
    str: Number,
    dex: Number,
    con: Number,
    int: Number,
    wis: Number,
    cha: Number,
    skills: String,
    passive: Number,
    cr: String,
    traits: [{}],
    actions: [{}],
    environments:[{}]
})

module.exports = Beast;