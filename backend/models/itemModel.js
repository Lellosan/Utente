const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    nome: {
        type: String,
        required: true,
        unique: true
    },
    prezzo: {
        type: Number,
        required: true,
        unique: false
    },
    descrizione: {
        type: String,
        required: true,
        unique: false
    },
    numero_acquisti: {
        type: Number,
        required: true,
        unique: false
    },
    quantità_disponibili: {
        type: Number,
        required: true,
        unique: false
    },
    tag: {
        type: String,
        required: true,
        unique: true
    },
    animale: {
        type: String,
        required: true,
        unique: false
        }
})

userSchema.statics.pItem = async function(id, nome,prezzo,descrizione,numero_acquisti,quantità_disponibili,tag,animale){
    const item = await this.create({id, nome,prezzo,descrizione,numero_acquisti,quantità_disponibili,tag,animale })

    return item
}

module.exports = mongoose.model('Item', itemSchema)