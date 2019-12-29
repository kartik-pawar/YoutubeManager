chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if(details.url.endsWith("www.youtube.com/"))
            return {redirectUrl:"https://www.youtube.com/feed/subscriptions"};
    },
    {urls: ["http://*.youtube.com/*", "https://*.youtube.com/*"]},
    ["blocking"]);