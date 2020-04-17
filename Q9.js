function findRalativeNum(numInBaseRange,newRange){
    let scale = numInBaseRange/100
    result = scale * (newRange[1] - newRange[0] + 1) + newRange[0] - 1
    console.log(`${numInBaseRange} in base Range is: ${result} in new range(${newRange})`)
}