const getMediumAuthor = () => {
    const tag = document.querySelector('div.ck p.pw-author a') as HTMLElement
    return tag?.innerText ?? "No Data";
}

const getMediumTitle = () => {
    const tag = document.querySelector('div h1.pw-post-title') as HTMLElement
    return tag?.innerText ?? "No Data";
}

chrome.runtime.onMessage.addListener((msg, sender, cb)=>{
    cb(`Author: ${getMediumAuthor()}
    Title: ${getMediumTitle()}`);
})

