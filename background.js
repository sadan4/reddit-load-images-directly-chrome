/*
Have to use manifest version 2 for this to work :/
Chrome extension page will report it as an error since it's deprecated,
but it still works for now.

-----------------------------------------------------------------------
Manifest version 2 is deprecated,
and support will be removed in 2023.
See https://developer.chrome.com/blog/mv2-transition/ for more details.
-----------------------------------------------------------------------
*/

chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        for (var i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name === 'Accept') {
                details.requestHeaders[i].value = 'image/avif,image/webp,*/*';
            }
        }
        return { requestHeaders: details.requestHeaders };
    },
    { urls: ["<all_urls>"] },
    ["blocking", "requestHeaders"]
);
