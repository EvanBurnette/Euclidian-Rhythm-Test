function euc(onsets, pulses) {
    let onsArr = []
    onsArr.length = onsets
    onsArr.fill(true)

    let offArr = []
    offArr.length = pulses - onsets
    offArr.fill(false)
     
    let startArr = onsArr.concat(offArr)
    return recEuc(onsArr, offArr)
}

function recEuc() {
    return [true, false, true]
}
module.exports = euc