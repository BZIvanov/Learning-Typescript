///// create Object to use for the examples
let myObj = {
    obj1: {value: 3},
    obj2: {value: 1},
    obj3: {value: 2},
    obj4: {value: 5},
    obj5: {value: 4},
}
//console.log(myObj)


function exampleA() {
    let sortedKeys = Object.keys(myObj).sort()
    return sortedKeys
}
//console.log(exampleA())
    


function exampleB() {
    let sortedKeys = Object.keys(myObj).sort((a, b) => {
        let diff = myObj[a]["value"] > myObj[b]["value"]
        if (myObj[a]["value"] === myObj[b]["value"]) {
            return 0
        }
        return diff
    })
    return sortedKeys
}
console.log(exampleB())




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
//console.log(htmlFormatter('return 0'))


