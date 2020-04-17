function getSubSet(text){
    let list=[]
    let i = 0
    let j = 1
    for( i in text){
        for( j in text){
            list.push(text.substr(i, j))
        }
    }
    return Array.from(new Set(list))
}