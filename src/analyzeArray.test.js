import analyzeArray from "./analyzeArray"

test('1,2,3 to be 2', () => {
    expect(analyzeArray([1,2,3])).toMatchObject({
        average: 2,
        min: 1,
        max: 3,
        length: 3
    })
})