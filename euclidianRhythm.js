function euc(onsets, pulses) {
    let timingsArr = []
    for (let i = 0; i < onsets; i++){
            timingsArr.push(Math.ceil(i*pulses/onsets))
    }
    
    let solutionArr = []
    solutionArr.length = pulses
    solutionArr.fill('0')

    timingsArr.forEach(item => {
        solutionArr[item] = '1'
    })

    return solutionArr.join('')
    // let onsArr = []
    // onsArr.length = onsets
    // onsArr.fill(true)

    // let offArr = []
    // offArr.length = pulses - onsets
    // offArr.fill(false)
     
    // let startArr = onsArr.concat(offArr)
}

// function recEuc() {
//     return [true, false, true]
// }
module.exports = euc