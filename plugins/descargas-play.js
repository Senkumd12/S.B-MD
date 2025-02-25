//import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
import axios from 'axios'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { ytmp3, ytmp4 } = require("@hiudyy/ytdl");
const LimitAud = 725; //700MB
const LimitVid = 425 * 1024 * 1024; //425MB
const youtubeRegexID = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/

const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!text) return m.reply(`*🤔Que está buscando? 🤔*\n*Ingrese el nombre de la canción*\n\n*Ejemplo:*\n#play emilia 420`) 
const tipoDescarga = command === 'play' ? 'audio' : command === 'play2' ? 'video' : command === 'play3' ? 'audio doc' : command === 'play4' ? 'video doc' : '';
let videoIdToFind = text.match(youtubeRegexID) || null
const yt_play = await search(args.join(' '));
let ytplay2 = await yts(videoIdToFind === null ? text : 'https://youtu.be/' + videoIdToFind[1])
  
if (videoIdToFind) {
const videoId = videoIdToFind[1]  
ytplay2 = ytplay2.all.find(item => item.videoId === videoId) || ytplay2.videos.find(item => item.videoId === videoId)
} 
ytplay2 = ytplay2.all?.[0] || ytplay2.videos?.[0] || ytplay2  
await conn.sendMessage(m.chat, { text: `${yt_play[0].title}
*⇄ㅤ     ◁   ㅤ  ❚❚ㅤ     ▷ㅤ     ↻*

*⏰ Duración:* ${secondString(yt_play[0].duration.seconds)}
*👉🏻Aguarde un momento en lo que envío su ${tipoDescarga}*`,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363355261011910@newsletter', 
serverMessageId: '', 
newsletterName: 'LoliBot ✨️' },
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid: null,  
externalAdReply: {  
showAdAttribution: true,  
renderLargerThumbnail: true,  
title: yt_play[0].title,   
body: wm,
containsAutoReply: true,  
mediaType: 1,   
thumbnailUrl: yt_play[0].thumbnail, 
sourceUrl: [nna, nna2, nnaa].getRandom()
}}}, { quoted: m })
/*conn.sendFile(m.chat, yt_play[0].thumbnail, 'error.jpg', `${yt_play[0].title}
*⇄ㅤ     ◁   ㅤ  ❚❚ㅤ     ▷ㅤ     ↻*

*⏰ Duración:* ${secondString(yt_play[0].duration.seconds)}
*👉🏻Aguarde un momento en lo que envío su audio*`, m, null, fake);*/

if (command == 'play' || command == 'musica') {
try {
const audiodlp = await ytmp3(yt_play[0].url);
conn.sendMessage(m.chat, { audio: audiodlp, mimetype: "audio/mpeg" }, { quoted: m });
} catch {   
try {
const res = await fetch(`https://api.alyachan.dev/api/yta?url=${yt_play[0].url}&apikey=Gata-Dios`)
let data = await res.json();
await conn.sendMessage(m.chat, { audio: { url: data.data.url }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {   
try {
const res = await fetch(`https://api.agatz.xyz/api/ytmp3?url=${yt_play[0].url}`)
let data = await res.json();
await conn.sendMessage(m.chat, { audio: { url: data.data.downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {   
try {
const res = await fetch(`https://api.fgmods.xyz/api/downloader/ytmp3?url=${yt_play[0].url}&apikey=${fgkeysapi}`)
let data = await res.json();
await conn.sendMessage(m.chat, { audio: { url: data.result.dl_url }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {   
try {
const res = await fetch(`https://api.siputzx.my.id/api/d/ytmp4?url=${yt_play[0].url}`);
let { data } = await res.json();
await conn.sendMessage(m.chat, { audio: { url: data.dl }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {   
try {
const axeelUrl = `https://axeel.my.id/api/download/audio?url=${yt_play[0].url}`;
const axeelResponse = await fetch(axeelUrl);
const axeelData = await axeelResponse.json();
if (!axeelData || !axeelData.downloads?.url) throw new Error();
await conn.sendMessage(m.chat, { audio: { url: axeelData.downloads.url }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {   
try {
const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${yt_play[0].url}`)
let { result } = await res.json()
await conn.sendMessage(m.chat, { audio: { url: await result.download.url }, mimetype: 'audio/mpeg' }, { quoted: m })
} catch {   
try {
const ryzenUrl = `https://api.ryzendesu.vip/api/downloader/ytmp3?url=${encodeURIComponent(videoUrl)}`;
const ryzenResponse = await fetch(ryzenUrl);
const ryzenData = await ryzenResponse.json();
if (ryzenData.status === 'tunnel' && ryzenData.url) {
const downloadUrl = ryzenData.url;
await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
}
} catch {   
try {      
const apiUrl = `${apis}/download/ytmp3?url=${encodeURIComponent(yt_play[0].url)}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius.status) {
return m.react("❌")}
const downloadUrl = delius.data.download.url;
await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {   
try {
let d2 = await fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${yt_play[0].url}`);
let dp = await d2.json();
const audiop = await getBuffer(dp.result.media.mp3);
const fileSize = await getFileSize(dp.result.media.mp3);
await conn.sendMessage(m.chat, { audio: { url: audiop }, mimetype: 'audio/mpeg' }, { quoted: m });
if (fileSize > LimitAud) return await conn.sendMessage(m.chat, { document: { url: audiop }, mimetype: 'audio.mp3', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
} catch (e) {    
await m.react('❌'); 
console.log(e);
}}}}}}}}}}}

if (command == 'play2' || command == 'video') {
try {
const video = await ytmp4(yt_play[0].url);
if (fileSize > LimitVid) {
await conn.sendMessage(m.chat, { document: { url: video }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}` }, { quoted: m });
} else {
await conn.sendMessage(m.chat, { video: { url: video }, fileName: `video.mp4`, mimetype: 'video/mp4', caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}`}, { quoted: m })
}
} catch {   
try {            
const res = await fetch(`https://api.siputzx.my.id/api/d/ytmp4?url=${yt_play[0].url}`);
let { data } = await res.json();
if (fileSize > LimitVid) {
await conn.sendMessage(m.chat, { document: { url: data.dl }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}` }, { quoted: m });
} else {
await conn.sendMessage(m.chat, { video: { url: data.dl }, fileName: `video.mp4`, mimetype: 'video/mp4', caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}`}, { quoted: m })
}
} catch {   
try {
const res = await fetch(`https://api.alyachan.dev/api/ytv?url=${yt_play[0].url}&apikey=Gata-Dios`)
let data = await res.json();
let isLimit = LimitAud * 1024 < data.data.size
if (!isLimit) {
await conn.sendMessage(m.chat, { document: { url: data.data.url }, fileName: `video.mp4`, mimetype: 'video/mp4', caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}` }, { quoted: m });
} else {
await conn.sendMessage(m.chat, { video: { url: data.data.url }, fileName: `video.mp4`, mimetype: 'video/mp4', caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}`}, { quoted: m })
}
} catch {   
try {
const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${yt_play[0].url}`)
let { result } = await res.json()
if (fileSize > LimitVid) {
await conn.sendMessage(m.chat, { document: { url: result.download.url }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}` }, { quoted: m });
} else {
await conn.sendMessage(m.chat, { video: { url: result.download.url }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}` }, { quoted: m }) 
}
} catch {   
try {
const axeelApi = `https://axeel.my.id/api/download/video?url=${yt_play[0].url}`;
const axeelRes = await fetch(axeelApi);
const axeelJson = await axeelRes.json();
if (axeelJson && axeelJson.downloads?.url) {
const videoUrl = axeelJson.downloads.url;
if (fileSize > LimitVid) {
await conn.sendMessage(m.chat, { document: { url: videoUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}` }, { quoted: m });
} else {
await conn.sendMessage(m.chat, { video: { url: videoUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}` }, { quoted: m }) 
}}
} catch {   
try {            
const apiUrl = `${apis}/download/ytmp4?url=${yt_play[0].url}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius.status) return m.react("❌");
const downloadUrl = delius.data.download.url;
const fileSize = await getFileSize(downloadUrl);
if (fileSize > LimitVid) {
await conn.sendMessage(m.chat, { document: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}` }, { quoted: m });
} else {
await conn.sendMessage(m.chat, { video: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
}} catch {   
try {
let searchh = await yts(yt_play[0].url)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
conn.sendMessage(m.chat, { video: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
} catch {   
try {
let d2 = await fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${yt_play[0].url}`);
let dp = await d2.json();
const audiop = await getBuffer(dp.result.media.mp4);
const fileSize = await getFileSize(dp.result.media.mp4);
if (fileSize > LimitVid) {
await conn.sendMessage(m.chat, { document: { url: audiop }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}` }, { quoted: m });
} else {
await conn.sendMessage(m.chat, { video: { url: audiop }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m });
}} catch (e) {    
await m.react('❌');
console.log(e);
}}}}}}}}}

if (command == 'play3' || command == 'playdoc') {
try {
const audiodlp = await ytmp3(yt_play[0].url);
conn.sendMessage(m.chat, { document: audiodlp, mimetype: "audio/mpeg" }, { quoted: m });
} catch (e1) {
try {  
const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${yt_play[0].url}`)
let { result } = await res.json()
await conn.sendMessage(m.chat, { document: { url: result.download.url }, mimetype: 'audio/mpeg', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
} catch (e1) {
try {    
const apiUrl = `${apis}/download/ytmp3?url=${encodeURIComponent(yt_play[0].url)}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius.status) {
return m.react("❌")}
const downloadUrl = delius.data.download.url;
await conn.sendMessage(m.chat, { document: { url: downloadUrl }, mimetype: 'audio/mpeg', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
} catch (e1) {
try {    
let q = '128kbps'
const yt = await youtubedl(yt_play[0].url).catch(async _ => await youtubedlv2(yt_play[0].url))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3` }, { quoted: m });
} catch (e2) {
try {   
const downloadUrl = await fetch9Convert(yt_play[0].url); 
await conn.sendMessage(m.chat, { document: { url: downloadUrl }, mimetype: 'audio/mpeg', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
} catch (e3) {
try {
const downloadUrl = await fetchY2mate(yt_play[0].url);
await conn.sendMessage(m.chat, { document: { url: downloadUrl }, mimetype: 'audio/mpeg', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
} catch (e4) {
try {
const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${yt_play[0].url}`)
const audioData = await res.json()
if (audioData.status && audioData.result?.downloadUrl) {
await conn.sendMessage(m.chat, { document: { url: audioData.result.downloadUrl }, mimetype: 'audio/mpeg', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
}} catch (e5) {
try {
let d2 = await fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${yt_play[0].url}`);
let dp = await d2.json();
const audiop = await getBuffer(dp.result.media.mp3);
const fileSize = await getFileSize(dp.result.media.mp3);
await conn.sendMessage(m.chat, { document: { url: audioData.result.downloadUrl }, mimetype: 'audio/mpeg', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
} catch (e) {    
await m.react('❌');
console.log(e);
}}}}}}}}}

if (command == 'play4' || command == 'playdoc2') {
try {
const video = await ytmp4(text);
await conn.sendMessage(m.chat, { document: { url: video }, fileName: `${yt_play[0].title}.mp4`, caption: `🔰 Aquí está tu video \n🔥 Título: ${yt_play[0].title}` }, { quoted: m });
} catch (e1) {
try {   
const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${yt_play[0].url}`)
let { result } = await res.json()
await conn.sendMessage(m.chat, { document: { url: result.download.url }, fileName: `${yt_play[0].title}.mp4`, caption: `${wm}`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m })     
} catch (e1) {
try {    
const apiUrl = `${apis}/download/ytmp4?url=${encodeURIComponent(yt_play[0].url)}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius.status) return m.react("❌");
const downloadUrl = delius.data.download.url;
//const fileSize = await getFileSize(downloadUrl);
await conn.sendMessage(m.chat, { document: { url: downloadUrl }, fileName: `${yt_play[0].title}.mp4`, caption: `${wm}`, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m })     
} catch (e1) {
try {
let d2 = await fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${yt_play[0].url}`);
let dp = await d2.json();
const audiop = await getBuffer(dp.result.media.mp4);
await conn.sendMessage(m.chat, { document: { url: audiop }, fileName: `${yt_play[0].title}.mp4`, caption: null, thumbnail: yt_play[0].thumbnail, mimetype: 'video/mp4' }, { quoted: m })     
} catch (e2) {    
await m.react('❌');
console.log(e2);
}}}}}

/*if (command == 'play4') {
if (!text) return conn.reply(m.chat, `*🤔Que esta buscado? 🤔*\n*Ingrese el nombre del la canción*\n\n*Ejemplo:*\n#play emilia 420`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: '', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})
const yt_play = await search(args.join(' '))
const texto1 = `📌 *Título* : ${yt_play[0].title}\n📆 *Publicado:* ${yt_play[0].ago}\n⌚ *Duración:* ${secondString(yt_play[0].duration.seconds)}\n👀 *Vistas:* ${MilesNumber(yt_play[0].views)}`.trim()

await conn.sendButton(m.chat, texto1, botname, yt_play[0].thumbnail, [['Audio', `${usedPrefix}ytmp3 ${yt_play[0].url}`], ['video', `${usedPrefix}ytmp4 ${yt_play[0].url}`], ['Mas resultados', `${usedPrefix}yts ${text}`]], null, null, m)
}*/
}
handler.help = ['play', 'play2', 'play3', 'play4', 'playdoc'];
handler.tags = ['downloader'];
handler.command = ['play', 'play2', 'play3', 'play4', 'audio', 'video', 'playdoc', 'playdoc2']
//handler.limit = 3
handler.register = true 
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
  }
  
const getBuffer = async (url) => {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    return Buffer.from(buffer);
  } catch (error) {
    console.error("Error al obtener el buffer", error);
    throw new Error("Error al obtener el buffer");
  }
}

async function getFileSize(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        const contentLength = response.headers.get('content-length');
        return contentLength ? parseInt(contentLength, 10) : 0;
    } catch (error) {
        console.error("Error al obtener el tamaño del archivo", error);
        return 0;
    }
}

async function fetchY2mate(url) {
  const baseUrl = 'https://www.y2mate.com/mates/en60';
  const videoInfo = await fetch(`${baseUrl}/analyze/ajax`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ url, q_auto: 0 })
  }).then(res => res.json());

  const id = videoInfo.result.id;
  const downloadInfo = await fetch(`${baseUrl}/convert`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ type: 'youtube', _id: id, v_id: url, token: '', ftype: 'mp4', fquality: '360p' })
  }).then(res => res.json());

  return downloadInfo.result.url;
}

async function fetchInvidious(url) {
  const apiUrl = `https://invidious.io/api/v1/get_video_info`;

const response = await fetch(`${apiUrl}?url=${encodeURIComponent(url)}`);
const data = await response.json();

if (data && data.video) {
const videoInfo = data.video;
return videoInfo; 
} else {
throw new Error("No se pudo obtener información del video desde Invidious");
  }
}

async function fetch9Convert(url) {
const apiUrl = `https://9convert.com/en429/api`;
const response = await fetch(`${apiUrl}?url=${encodeURIComponent(url)}`);
const data = await response.json();

if (data.status === 'ok') {
    return data.result.mp3;
  } else {
    throw new Error("No se pudo obtener la descarga desde 9Convert");
  }
}