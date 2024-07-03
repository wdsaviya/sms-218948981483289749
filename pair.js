const { makeid } = require('./gen-id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");

const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers,
    jidNormalizedUser
} = require("@whiskeysockets/baileys");
const { upload } = require('./mega');

function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}

router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {




            
            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                browser: Browsers.macOS("Safari")
            });
            if (!sock.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await sock.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + /temp/${id}/creds.json);
                    let rf = __dirname + /temp/${id}/creds.json;

                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;

                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }

                        return randomText;
                    }

                    const randomText = generateRandomText();

let session_btoa = fs.readFileSync(rf, 'utf8');
await delay(500);
let dj = btoa(session_btoa)

let ddd = await sock.sendMessage(sock.user.id, { text: dj });

                        let eco = '*`';
                        let oce = '`*';
                        let oc = '>';

                        let desc = ⚠️ ${eco}Do not share this code with others. Use this to create the PRABATH-MD bot.${oce}\n\n${oc} 🎉 *Github:* https://github.com/saviya55/Saviya-Md\n\n${oc} 🔔 *Our Channel:* https://whatsapp.com/channel/0029Va4zj6D30LKGbUX0bd09 \n\n${oc} 🐋 *Our Website:* saviya-md.vercel.app;

                        sock.sendMessage(sock.user.id, { text: desc }, { quoted: ddd });

                 /*   try {
                        const PastebinAPI = require("pastebin-js");
                        const pastebin = new PastebinAPI('mmmQwSeLvlJrj1FMJ-68WnGQnEgoNWk5');
                        let session = fs.readFileSync(rf, 'utf8');
                        await delay(500);

                        let data = await pastebin.createPaste(session, randomText, null, 1, "N");

                        const string_sessionx = data.replace('https://pastebin.com/', '');
                        let mdx = "PRABATH-MD_" + string_sessionx;

                        let ddd = await sock.sendMessage(sock.user.id, { text: mdx });

                        let eco = '*`';
                        let oce = '`*';
                        let oc = '>';

                        let desc = ⚠️ ${eco}Do not share this code with others. Use this to create the PRABATH-MD bot.${oce}\n\n${oc} 🎉 *Github:* https://github.com/saviya55/Saviya-Md\n\n${oc} 🔔 *Our Channel:* https://whatsapp.com/channel/0029Va4zj6D30LKGbUX0bd09 \n\n${oc} 🐋 *Our Website:* saviya-md.vercel.app;

                        sock.sendMessage(sock.user.id, { text: desc }, { quoted: ddd });
                    } catch (e) {
                        try {
                            const { upload } = require('./mega');
                            const mega_url = await upload(fs.createReadStream(rf), ${sock.user.id}.json);
                            const string_session = mega_url.replace('https://mega.nz/file/', '');
                            let md = "PRABATH-MD~" + string_session;
                            let ddd = await sock.sendMessage(sock.user.id, { text: md });

                            let eco = '*`';
                            let oce = '`*';
                            let oc = '>';

                            let desc = ⚠️ ${eco}Do not share this code with others. Use this to create the PRABATH-MD bot.${oce}\n\n${oc} 🎉 *Github:* https://github.com/saviya55/Saviya-Md\n\n${oc} 🔔 *Our Channel:* https://whatsapp.com/channel/0029Va4zj6D30LKGbUX0bd09 \n\n${oc} 🐋 *Our Website:* saviya-md.vercel.app;

                            sock.sendMessage(sock.user.id, { text: desc }, { quoted: ddd });
                        } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });

                            let eco = '*`';
                            let oce = '`*';
                            let oc = '>';

                            let desc = ⚠️ ${eco}Do not share this code with others. Use this to create the PRABATH-MD bot.${oce}\n\n${oc} 🎉 *Github:* https://github.com/saviya55/Saviya-Md\n\n${oc} 🔔 *Our Channel:* https://whatsapp.com/channel/0029Va4zj6D30LKGbUX0bd09 \n\n${oc} 🐋 *Our Website:* saviya-md.vercel.app;

                            sock.sendMessage(sock.user.id, { text: desc }, { quoted: ddd });
                        }
                    }*/
                    await delay(100);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...);
                    await delay(1000);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
    await GIFTED_MD_PAIR_CODE();
});


setInterval(() => {
    console.log("⚙️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 1800000); //30min

module.exports = router;
