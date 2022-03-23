const reverseString = function(val) {
    var split = val.split('')
    var reverse = split.reverse()
    var join = reverse.join('')

    return join
}

// Do not edit below this line
module.exports = reverseString