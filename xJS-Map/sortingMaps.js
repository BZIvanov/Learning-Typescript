///// create Map to use for the examples
let exampleMap = new Map()
exampleMap.set("Lemon", new Map())
exampleMap.set("Peach", new Map())
exampleMap.set("Apple", new Map())
exampleMap.set("Banana", new Map())
exampleMap.get("Peach").set("January", 1)
exampleMap.get("Peach").set("April", 2)
exampleMap.get("Peach").set("March", 3)
exampleMap.get("Peach").set("July", 9)
exampleMap.get("Peach").set("September", 4)
exampleMap.get("Peach").set("December", 11)
exampleMap.get("Lemon").set("Sunday", 1)
exampleMap.get("Lemon").set("Tuesday", 2)
exampleMap.get("Lemon").set("Friday", 3)
exampleMap.get("Banana").set("Year", 2018)
exampleMap.get("Apple").set("dogs", 11)
exampleMap.get("Apple").set("cats", 12)
exampleMap.get("Apple").set("mouses", 3)
//console.log(exampleMap)


function exampleA() {
    let sortedMapKeys = Array.from(exampleMap.keys()).sort()
    return sortedMapKeys
}
//console.log(exampleA())
    

function exampleB() {
    let sortedMapKeys = Array.from(exampleMap.keys()).sort()
    for(const key of sortedMapKeys) {
        console.log(exampleMap.get(key))
    }
}
//exampleB()


function exampleC() {
    let sortedMapKeys = Array.from(exampleMap.keys()).sort()
    for(const key of sortedMapKeys) {
        let sortedNestedKeys = Array.from(exampleMap.get(key).keys()).sort()
        console.log(sortedNestedKeys)
    }
}
//exampleC()

function exampleD() {
    let sortedMapKeys = Array.from(exampleMap.keys()).sort()
    for(const key of sortedMapKeys) {
        let sortedNestedKeys = Array.from(exampleMap.get(key).keys()).sort((a, b) => {
            let difference = exampleMap.get(key).get(a) - exampleMap.get(key).get(b)
            if(difference === 0) {
                return a.localeCompare(b)
            }
            return difference
        })
        console.log(sortedNestedKeys)  
    }
}
//exampleD()


function workflow() {
    $(".btnInfo").click(function() {
        let that = $(this)
        $($(this).parent().parent().children()[1]).toggle("slow")
        let btnText = that.text() === "Hide" ? "Show" : "Hide"
        that.text(btnText)
    })
}

function htmlFormatter(str) {
    return (str
        .replace(/\bArray(?=\.)/g, `<span class="green">Array</span>`)
        .replace(/(?<=\.)from(?=\()/g, `<span class="yellow">from</span>`)
        .replace(/(?<=\.)keys(?=\()/g, `<span class="yellow">keys</span>`)
        .replace(/(?<=\.)sort(?=\()/g, `<span class="yellow">sort</span>`)
        .replace(/(?<=\.)localeCompare(?=\()/g, `<span class="yellow">localeCompare</span>`) 
        .replace(/\blet\b/g, `<span class="blue">let</span>`)
        .replace(/\bfor(?=\()/g, `<span class="purple">for</span>`)
        .replace(/(?<=\()const\b/g, `<span class="blue">const</span>`)
        .replace(/\bof\b/g, `<span class="blue">of</span>`)
        .replace(/\bconsole(?=\.)/g, `<span class="green">console</span>`)
        .replace(/(?<=\.)log(?=\()/g, `<span class="yellow">log</span>`)
        .replace(/(?<=\.)get(?=\()/g, `<span class="yellow">get</span>`)
        .replace(/(?<=\s{1})=>(?=\s{1})/g, `<span class="blue">=></span>`)
        .replace(/\bif(?=\s\()/g, `<span class="purple">if</span>`)
        .replace(/\breturn\b/g, `<span class="purple">return</span>`)
        .replace(/\b\d+(?=\)|\s)/g, x => `<span class="olive">${x}</span>`)
        .replace(/(?<=<\/span>.|-\s|=\s)[a-zA-Z]+|\w+(?= ===)/g, x => `<span class="lblue">${x}</span>`)
    )
}
//console.log(htmlFormatter("console.log(sortedNestedKeys)"))
