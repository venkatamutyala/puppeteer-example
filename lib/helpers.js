module.exports = {
    click: async function(page, selector) {
        try {
            await page.waitForSelector(selector)
            await page.click(selector)
            await console.log('selector: ' + selector)
        } catch (error){
            throw new Error(`Could not click on selector ${selector}`)
        }
    },

    typeText:  async function(page, text, selector) {
        try {
            await page.waitForSelector(selector)
            await page.type(selector, text)
            await console.log('selector: '+ selector + " text: " + text)

        } catch (error) {
            throw new Error(`Could not type text into selector: ${selector}`)
        }
        
    },

    loadUrl: async function(page, url) {
        await page.goto(url, { waitUntil: "networkidle0" }) //wait 5 seconds before calling the load done.
    },


    checkText: async function(page, text) {
        await console.log("text: " + text)
        await page.waitForFunction(
            `document.querySelector("body").innerText.includes("${text}")`
          );
    }


}