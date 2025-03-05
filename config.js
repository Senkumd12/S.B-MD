import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//---------[ Añada los numeros a ser Propietario/a ]---------

global.owner = [['212625457341', 'ahmed aligur', true], ['593968585383'], ['595986172767'], ['5219999699999'], ['523482800300'], ['573007487856'], ['573008499604'], ['5492266613038']]
global.mods = []
global.prems = []

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
global.botNumberCode = "" //Ejemplo: +59309090909
global.confirmCode = "" 
global.gataJadibts = true //cambia a false Desactivar en "auto-reconexion" de sub-bots

//---------[ APIS GLOBAL ]---------

global.baileys = '@whiskeysockets/baileys'
global.apis = 'https://delirius-apiofc.vercel.app'

global.APIs = { lolhuman: { url: 'https://api.lolhuman.xyz/api/', key: 'GataDiosV3' },
skizo: { url: 'https://skizo.tech/api/', key: 'GataDios' },
alyachan: { url: 'https://api.alyachan.dev/api/', key: null }, 
neoxr: { url: 'https://api.neoxr.eu/api', key: 'GataDios' },
fgmods: { url: 'https://api.fgmods.xyz/api', key: 'elrebelde21' },
popcat: { url: 'https://api.popcat.xyz', key: null }}

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//------------------------[ Stickers ]-----------------------------

global.packname = 'SENKU BOT'
global.author = 'AHMED ALIGUE'

//------------[ Versión | Nombre | cuentas ]------------

global.wm = 'SENKU BOT' 
global.vs = '1.9.5'
global.yt = 'https://whatsapp.com/channel/0029Vay1N34Ae5VthwAYxi0u'
global.tiktok = 'https://whatsapp.com/channel/0029Vay1N34Ae5VthwAYxi0u'
global.md = 'https://whatsapp.com/channel/0029Vay1N34Ae5VthwAYxi0u'
global.fb = 'https://whatsapp.com/channel/0029Vay1N34Ae5VthwAYxi0u'
global.face = 'https://whatsapp.com/channel/0029Vay1N34Ae5VthwAYxi0u'

global.nna = 'https://whatsapp.com/channel/0029Vay1N34Ae5VthwAYxi0u' //Update
global.nna2 = 'https://whatsapp.com/channel/0029Vay1N34Ae5VthwAYxi0u' //LoliBot update
global.nnaa = 'https://whatsapp.com/channel/0029Vay1N34Ae5VthwAYxi0u' //LoliBot - Test
global.nn = 'https://chat.whatsapp.com/DpzhrV0CsbED7Dfwog2nYw' //Grupo 1
global.nnn = 'https://chat.whatsapp.com/DpzhrV0CsbED7Dfwog2nYw' //Grupo 2
global.nnnt = 'https://chat.whatsapp.com/DpzhrV0CsbED7Dfwog2nYw' //Grupo del Colaboracion
global.nnntt = 'https://chat.whatsapp.com/DpzhrV0CsbED7Dfwog2nYw' //enlace lolibot
global.nnnttt = 'https://chat.whatsapp.com/DpzhrV0CsbED7Dfwog2nYw' //A.T.T.M
global.nnntttt = 'https://chat.whatsapp.com/DpzhrV0CsbED7Dfwog2nYw' //Grupo ayuda sobre el bot
global.bot = 'wa.me/212713542982'
global.redes = [nna, nna2, yt, nn, nnn, nnnt, nnntt, nnnttt, nnntttt, md, tiktok, fb, face]

//------------------------[ Info | Datos ]---------------------------

global.wait = '*انتظر*'
global.waitt = '*⌛ _انتظر..._ ▬▬▭▭▭*'
global.waittt = '*⌛ _انتظر..._ ▬▬▬▬▭▭*'
global.waitttt = '*⌛ _انتظر..._ ▬▬▬▬▬▬▭*'
global.waittttt = '*⌛ _انتظر..._ ▬▬▬▬▬▬▬*'
global.rg = '『✅ النتائح ✅』\n\n'
global.ag = '『⚠️ تحدير ⚠️』\n\n'
global.iig = '『❕ معلومة』\n\n'
global.fg = '『❌ 𝙀𝙍𝙍𝙊𝙍 ❌』\n\n'
global.mg = '『❗️ 𝙇𝙊 𝙐𝙎𝙊 𝙈𝘼𝙇❗』\n\n'
global.eeg = '『📩 𝙍𝙀𝙋𝙊𝙍𝙏𝙀 📩』\n\n'
global.eg = '『💚 𝙀𝙓𝙄𝙏𝙊𝙎 💚』\n\n'

//-------------------------[ IMAGEN ]------------------------------
//global.img = "https://qu.ax/Zgqq.jpg"
global.img1 = 'https://qu.ax/hNJk.jpg'
global.img2 = 'https://qu.ax/jzhN.jpg'

global.imagen = fs.readFileSync('./Menu2.jpg')
global.imagen1 = fs.readFileSync('./media/Menu1.jpg')
global.imagen2 = fs.readFileSync('./media/Menu2.jpg')
global.imagen3 = fs.readFileSync('./media/Menu3.jpg')
global.imagen4 = fs.readFileSync('./media/Menu4.jpg')
global.imagen5 = 'https://qu.ax/rULv.jpg'
global.imagen6 = 'https://qu.ax/CySs.jpg'
global.menu18 = 'https://qu.ax/MOgO.jpg'
global.vid1 = 'https://qu.ax/dcAc.mp4'
global.img = [imagen, imagen1, imagen2, imagen3, imagen4]
global.imageUrl = ["https://qu.ax/HJnWj.jpg", "https://qu.ax/ehPzQ.jpg", "https://qu.ax/ilfbC.jpg"]

//----------------------------[ NIVELES | RPG ]---------------------------------

global.multiplier = 850 // Cuanto más alto, más difícil subir de nivel
global.maxwarn = '4' // máxima advertencias

//---------------[ IDs de canales ]----------------

global.ch = {
ch1: '120363297379773397@newsletter', 
ch2: '120363355261011910@newsletter', 
ch3: '120363160031023229@newsletter',
ch4: '120363301598733462@newsletter',
ch5: '120363374372683775@newsletter', 
ch6: '120363378052785679@newsletter',
}

//----------------------------------------------------

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
