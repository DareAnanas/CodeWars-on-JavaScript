function hasSubpattern(string){
    if (string.length == 1)
        return false;
    let strArray = Array.from(string);
    if ((new Set(strArray)).size == string.length)
        return false;
    if (strArray.every(char => char == string[0]))
        return true;
    let patternSize = 2;
    while (patternSize <= string.length / 2) {
        if (string.length % patternSize != 0) {
            patternSize++;
            continue;
        }
        let hasPattern = true;
        let pattern = string.slice(0, patternSize);
        for (let i = patternSize; i < string.length; i += patternSize) {
            let strPart = string.slice(i, i+patternSize);
            if (strPart != pattern) {
                hasPattern = false;
                break;
            }
        }
        if (hasPattern) return hasPattern;
        patternSize++;
    }
    return false;
}

console.log(hasSubpattern('a'));
console.log(hasSubpattern('aaaa'));
console.log(hasSubpattern('abcd'));
console.log(hasSubpattern('abababab'));
console.log(hasSubpattern('ababababa'));
console.log(hasSubpattern('OpxC2zT6Iz3DGEBsIK4eT0n76OGNELYE4PuWBdffGA1FCsNBzIvf2X5adK5E9PqxaCzEbc5Vp1Zu5HUDldY8jkpTOpxC2zT6Iz3DGEBsIK4eT0n76OGNELYE4PuWBdffGA1FCsNBzIvf2X5adK5E9PqxaCzEbc5Vp1Zu5HUDldY8jkpT'));