const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(a) {
    a.preventDefault() //prevent button to the site
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the link: " + link)
    } catch (err) {
        console.error(err)
    }

}
shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))

const shareButtonTop = document.querySelectorAll('.share-button')
console.log(shareButtonTop)

async function copyText(e) {
    e.preventDefault() //prevent button to the site
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the link: " + link)
    } catch (err) {
        console.error(err)
    }

}
shareButtonTop.forEach(shareButton => shareButton.addEventListener('click', copyText))