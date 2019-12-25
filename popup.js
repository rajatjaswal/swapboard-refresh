const code = `
    document.querySelector("[data-bind='click:refresh']").click();
    showClaim = document.querySelector("[data-bind='click:ShowClaim']");
    if(showClaim!==undefined){
        showClaim.click();
        console.log("Claimed");
    }
    delete showClaim
`;

const refresh = () =>{
    chrome.tabs.executeScript(null, {code}, function(result) {
        console.log("Refreshed");
    });
}
document.addEventListener('DOMContentLoaded', function() {
    refresh();

    document.getElementById("refresh").addEventListener("click", function() {
        refresh();
    })
}, false);
