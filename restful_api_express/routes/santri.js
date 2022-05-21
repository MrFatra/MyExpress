const express = require('express')
const Santri = require('../models/Santri')
const router = express.Router()

router.post('/', async(req, res) => {
    const santriPost = new Santri({
        nama: req.body.nama,
        alamat: req.body.alamat
    })

    try {
        const santri = await santriPost.save()
        res.json(santri)
    } catch (err) {
        res.json({ message: err })
    }
})

router.get('/', async(req, res) => {
    try {
        const santri = await Santri.find()
        res.json(santri)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router