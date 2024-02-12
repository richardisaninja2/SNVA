let colors = new Map([
    ["1", "Red"],
    ["2", "Blue"],
    ["3", "Orance"],
    ["4", "Green"]
])

for(let obj of colors.values()){
    console.log(obj)
}

console.log("++++++++++++++++++++")

for(let obj of colors.entries()){
    console.log(`${obj[0]}:${obj[1]}`)
}