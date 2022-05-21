const mongoose = require('mongoose')

const siswaSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    kelas: {
        type: String,
        required: true
    },
    umur: {
        type: String
    }
})

module.exports = mongoose.model('Siswa', siswaSchema)