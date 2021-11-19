/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    if(sentence.length >= 26){
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let count = 0
    for(i = 0; i < 26; i++){
        for(j = 0; j < sentence.length; j++){
            if(alpha[i] === sentence[j]){
                count++
                break
            }
        }
    }
    if(count === 26){
        return true
    }else{
        return false
    }
}else{
    return false
}
};