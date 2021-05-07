const euc = require('./euclidianRhythm')

const euclidTestArr = require('./euclidianTestSet.json')

euclidTestArr.forEach((rhythm) => {
    rhythm.solutionArr = rhythm.solution.split('').map((bin) => bin == '1' ? true : false)
})

// console.table(euclidTestArr)
euclidTestArr.forEach(rhythm => {
    test('euclidian rhythms should match', () => {
        expect(euc(rhythm.onsets, rhythm.pulses)).toEqual(rhythm.solutionArr)
    })
})