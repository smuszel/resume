const puppeteer = require('puppeteer');
const handler = require('serve-handler');
const http = require('http');

const serverUp = new Promise(rez => {
    const server = http.createServer((request, response) => {
        return handler(request, response);
    });

    server.listen(3000, rez);
});

(async () => {
    const browser = await puppeteer.launch();
    await serverUp;
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.pdf({
        path: './dist/resume.pdf',
        width: 800,
        height: 1300,
        printBackground: true,
    });

    await browser.close();
    process.exit();
})();
