const axios = require('axios');
const cheerio = require('cheerio');
const baseUrl = require('../base/baseUrl');

const list = async (req, res) => {
    let tmp = []
    try {
        axios({
            url: baseUrl,
            method: 'GET',
            headers: {
                "User-Agent": "Chrome",
            },
        }).then((response) => {
            const $ = cheerio.load(response.data);

            $("body > main > ol > li > a").each((i, e) => {
                link = $(e).attr("href")
                surat = $(e).text()
                id = i + 1
                tmp.push({
                    id: id,
                    surat: surat,
                    link: `${baseUrl}${link}`,
                });
            });
            return res.json({
                status: true,
                message: 'success',
                data: {
                    ress: tmp
                }
            });
        });
    } catch (error) {
        res.json({
            status: false,
            message: error,
        });
    }
}

const getSurat = async (req, res) => {
    let latin, arti, bacaan, ayat;
    const page = req.params.page
    let tmp = []
    i = 0;
    try {
        axios({
            url: `${baseUrl}/${page}`,
            method: 'GET',
            headers: {
                "User-Agent": "Chrome",
            },
        }).then((response) => {
            const $ = cheerio.load(response.data);

            $("body > main > article > ol > li").each((i, e) => {
                latin = $(e).find("p.translate").text()
                arti = $(e).find("p.meaning").text()
                bacaan = $(e).find("p.arabic").text()
                ayat = (i += 1)
                tmp.push({
                    bacaan: bacaan,
                    latin: latin,
                    arti: arti,
                    ayat: ayat
                });
            });
            return res.json({
                status: true,
                message: 'success',
                surat: $("body > main > article > h1.page-title")
                    .text()
                    .split(" ").slice(1).join(" "),
                data: {
                    ress: tmp
                }
            });
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: error,
        });
    }
}


module.exports = {
    list,
    getSurat,
}