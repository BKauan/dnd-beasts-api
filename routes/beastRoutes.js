const router = require('express').Router();

const { request } = require('http');
const Beast = require('../models/Beast')

// Create
router.post('/', async (req, res) => {

    // req.body
    const {
        name,
        img,
        size,
        hp,
        roll,
        ac,
        speed,
        climb, 
        burrow, 
        fly, 
        swim,
        str,
        dex,
        con,
        int,
        wis,
        cha,
        skills,
        passive,
        cr,
        traits,
        actions,
        environments } = req.body

    if (!name) {
        response.status(422).json({ error: 'Nome é obrigatório' })
        return
    }

    const beast = {
        name,
        img,
        size,
        hp,
        roll,
        ac,
        speed,
        climb, 
        burrow, 
        fly, 
        swim,
        str,
        dex,
        con,
        int,
        wis,
        cha,
        skills,
        passive,
        cr,
        traits,
        actions,
        environments
    }

    // create
    try {
        await Beast.create(beast)

        res.status(201).json({ message: 'Successfully Created Beast!' });
    } catch (error) {
        res.status(500).json({ error: error })
    }
})


// Read 
router.get('/', async (req, res) => {

    try {
        const beasts = await Beast.find()

        res.status(200).json(beasts)

    } catch (error) {
        res.status(500).json({ error: error })
    }

})

// Read One
router.get('/:name', async (req, res) => {

    const name = req.params.name

    try {

        const beast = await Beast.findOne({ name: name })

        if (!beast) {
            res.status(422).json({ message: 'Beast not found' })
            return
        }

        res.status(200).json(beast)

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

// Update (PUT, PATCH)
router.patch('/:name', async (req, res) => {
    const nameBeast = req.params.name

    const {
        name,
        img,
        size,
        hp,
        roll,
        ac,
        speed,
        climb, 
        burrow, 
        fly, 
        swim,
        str,
        dex,
        con,
        int,
        wis,
        cha,
        skills,
        passive,
        cr,
        traits,
        actions,
        environments } = req.body

    const beast = {
        name,
        img,
        size,
        hp,
        roll,
        ac,
        speed,
        climb, 
        burrow, 
        fly, 
        swim,
        str,
        dex,
        con,
        int,
        wis,
        cha,
        skills,
        passive,
        cr,
        traits,
        actions,
        environments
    }

    try {
        const updateBeast = await Beast.updateOne({name: nameBeast}, beast)

        if(updateBeast === 0){
            res.status(422).json({message: 'Beast updated successfully'})
            return
        }

        res.status(200).json(beast)
    } catch (error) {
        res.status(500).json({error: error})
    }
    
})

// Delete
router.delete('/:name', async (req, res) => {

    const name = req.params.name

    const beast = await Beast.findOne({ name: name })

    if (!beast) {
        res.status(422).json({ message: 'Beast not found' })
        return
    }

    try {
        await Beast.deleteOne({ name: name })

        res.status(200).json({ message: 'Beast deleted successfully' })

    } catch (error) {
        res.status(500).json({ error: error })
    }

})

module.exports = router