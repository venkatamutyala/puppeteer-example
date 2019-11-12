const puppeteer = require('puppeteer')
const expect = require('chai').expect

const config = require('../lib/config')
const click = require('../lib/helpers').click
const typeText = require('../lib/helpers').typeText
const loadUrl = require('../lib/helpers').loadUrl
const checkText = require('../lib/helpers').checkText


describe('My first puppeteer test', () => {
    let browser
    let page

    before(async function() {
        browser = await puppeteer.launch({
            headless: config.isHeadless,
            slowMo: config.slowMo,
            devtools: config.isDevtools,
            timeout: config.launchTimeout,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        })
        page = await browser.newPage()
        await page.setDefaultTimeout(config.waitingTimeout)
        await page.setViewport({
            width: config.viewportWidth,
            height: config.viewportHeight,
        })
    })


    after(async function() {
        await browser.close()
    })

    it('HTTPS Load Snappy Album Code: LLCR5PR5GEUI - snap.magicmemories.com', async () => {
        await loadUrl(page, 'https://snap.magicmemories.com/home')
        await click(page, '#input-overlay-code')
        await page.keyboard.type('LLCR5PR5GEUI');
        await page.keyboard.press('Enter')
        await page.waitForNavigation({timeout: config.waitingTimeout});
        await checkText(page, "Mar 9, 2019")
    })


    it('HTTP Load Snappy Album Code: LLCR5PR5GEUI - snap.magicmemories.com', async () => {
        await loadUrl(page, 'http://snap.magicmemories.com:80/home')
        await click(page, '#input-overlay-code')
        await page.keyboard.type('LLCR5PR5GEUI');
        await page.keyboard.press('Enter')
        await page.waitForNavigation({timeout: config.waitingTimeout});
        await checkText(page, "Mar 9, 2019")
    })

    it('HTTP Load Snappy Album Code: LLCR5PR5GEUI - mymagicphotos.com', async () => {
        await loadUrl(page, 'http://mymagicphotos.com:80')
        await click(page, '#input-overlay-code')
        await page.keyboard.type('LLCR5PR5GEUI');
        await page.keyboard.press('Enter')
        await page.waitForNavigation({timeout: config.waitingTimeout});
        await checkText(page, "Mar 9, 2019")
    })

    it('HTTPS Load Snappy Album Code: LLCR5PR5GEUI - mymagicphotos.com', async () => {
        await loadUrl(page, 'https://mymagicphotos.com')
        await click(page, '#input-overlay-code')
        await page.keyboard.type('LLCR5PR5GEUI');
        await page.keyboard.press('Enter')
        await page.waitForNavigation({timeout: config.waitingTimeout});
        await checkText(page, "Mar 9, 2019")
    })


})

