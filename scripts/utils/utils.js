export function endsWithAny(baseString, candidateStringArray) {
    for(let currentString of candidateStringArray) {
        if(baseString.endsWith(currentString))
            return true;
    }
    return false;
}

export function removeURLParameters(url) {
    return url.substring(0, url.indexOf('?'));
}