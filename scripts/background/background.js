import {blockedURLs, redirectTo} from '../utils/config.js';
import {endsWithAny, removeURLParameters} from '../utils/utils.js';

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        let cleanURL = removeURLParameters(details.url);
        if(endsWithAny(cleanURL, blockedURLs)){
            return {redirectUrl: redirectTo};
        }
    },
    {urls: ["*://*.youtube.com/*"]},
    ["blocking"]
);