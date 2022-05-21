const express = require('express')
const siswaSchema = require('../models/siswaSchema')
const router = express.Router()

// ? POST Method
router.post('/', async(req, res) => {
    const siswa = new siswaSchema({
        nama: req.body.nama,
        kelas: req.body.kelas,
        umur: req.body.umur
    })

    try {
        const insertToSiswa = await siswa.save()
        result = res.json(insertToSiswa)
    } catch (err) {
        res.json({ message: err })
    }
})

// ? GET Method
router.get('/', async(req, res) => {
    try {
        const getAllSiswa = await siswaSchema.find()
        result = res.json(getAllSiswa)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router