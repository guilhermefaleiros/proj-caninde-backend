require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()

const msg = (
        'SERVIDOR LIGANDO...\n'+
        '╭━━━━-╮\n'+
       '╰┃ ┣▇━▇\n'+
         '┃ ┃  ╰━▅╮ \n'+
         '╰┳╯ ╰━━┳╯\n'+
          '╰╮ ┳━━╯\n'+
         '|▔▋ ╰╮╭━╮\n'+
        '╱▔╲▋╰━┻┻╮╲╱▔▔▔╲\n'+
       '▏  ▔▔▔▔▔▔▔  O O┃\n'+
       '╲╱▔╲▂▂▂▂╱▔╲▂▂▂╱\n'+
        '▏╳▕▇▇▕ ▏╳▕▇▇▕\n'+
         '╲▂╱╲▂╱ ╲▂╱╲▂╱\n\n'+
        'DESENVOLVIDO POR: LEVEL 5 JR COM MUITO AMOR <3'
)

mongoose.connect('mongodb+srv://level5jr:level5jr@cluster0-akeuq.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})


app.use(express.json())
app.use(routes)


app.listen(process.env.PORT || 3333, ()=>{
    console.log(msg)
})