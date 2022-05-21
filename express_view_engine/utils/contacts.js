const { dir } = require('console')
const express = require('express')
const fs = require('fs')

var path = './data/list_contact.json'

// membuat folder data jika tidak ada
const dirPath = './data'

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

// membuat file contacts json jika tidak ada
if (!fs.existsSync(path)) {
    fs.writeFileSync(path, '[]', 'utf-8')
}

// load contact ke json
const loadContact = () => {
    // baca file
    const fileBuffer = fs.readFileSync(path)
        // ubah ke JSON
    const contacts = JSON.parse(fileBuffer)
    return contacts
}

const detailContact = (nama) => {
    const load = loadContact()
    const contact = load.find((contact) => contact.nama == nama) // mencari berdasarkan nama dari param
    return contact
}

module.exports = { loadContact, detailContact }