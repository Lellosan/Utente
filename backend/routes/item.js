const express= require('express')
const router= express.Router()

//GET all items
router.get('/', (req,res) => {
    res.json({mssg: 'GET all items'})
})

//GET one item
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET one item'})
})

//POST item
router.post('/', (req,res) => {
    res.json({mssg: 'post item'})
})

//DELETE item
router.delete('/:id', (req,res) => {
    res.json({mssg: 'DELETE item'})
})

//UPDATE item
router.patch('/:id', (req,res) => {
    res.json({mssg: 'UPDATE item'})
})

module.exports = router