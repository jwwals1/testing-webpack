function reverseString(word) {
    let splitWord = word.split('')
    let reverseArray = splitWord.reverse()
    let joinArray = reverseArray.join("")
    return joinArray
}

export default reverseString