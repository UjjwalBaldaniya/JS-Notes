// ================================= Que - 1 ================================= //

const text = "The Tagline is top ten company"

for (let i = 0; i < text.length; i++) {
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    if (upperCase.includes(text[i])) {
        document.write(text[i].charCodeAt() - 64 + " ")
    } else if (lowerCase.includes(text[i])) {
        document.write(text[i].charCodeAt() - 96 + " ")
    } else {
        document.write(text[i])
    }
}
document.write("<br>" + text + "<br>" + "<br>")


// ================================= Que - 2 ================================= //

let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const strName = "The Tagline is top ten company"
document.write(strName + "<br>")

for (let i = 0; i < strName.length; i++) {
    if (upperCase.includes(strName[i])) {
        document.write(strName[i].toLowerCase())
    } else if (lowerCase.includes(strName[i])) {
        document.write(strName[i].toUpperCase())
    } else {
        document.write(strName[i])
    }
}
"<br>"

// ================================= Destructuring ================================= //
const str = {
    firstName2: "ujjwal",
    lastName2: "babubhai",
    surName: "baldaniya",
    rollNo: { first: "1", last: 2 }
}
const { firstName2, lastName2, surName, rollNo: { first, last } } = str

// console.log(firstName2, lastName2, surName, first, last)


// ================================= Rest Operators ================================= //
//rest operator return a array

const res = (firstName, lastName, ...rest) => {
    return rest
}
// console.log(res("ujjwal", "baldaniya", "babubhai", "aaa", "bbb"))

const res1 = (...value) => {
    return value
}
// console.log(res1("ujjwal", "Babubhai", "baldaniya"))

// destructuring array 
const [firstName, lastName, ...rest] = ["ujjwal", "baldaniya", "babubhai", "aaa", "bbb"]
// console.log(firstName, rest)    

// destructuring Object 
const { firstName1, lastName1, ...rest1 } = { firstName1: "ujjwal", lastName1: "baldaniya", rollno: 45, address: "surat", gender: "male" }
// console.log(rest1)

// ================================= Spread Operators ================================= //
// spread operators use for array, fuction call

const a1 = [1, 2, 3, 4, 5]
const a2 = [...a1, 6, 7, 8, 9]
// console.log(a2)

const myname = "Ujjwal Baldaniya"
const sp = [...myname]
// console.log(sp)

const array1 = [1, 2, 3, 4, 5]
const func = (a, b, c, d) => {
    return a + b + c + d
}
// console.log(func(...array1))

// ================================= Object.keys, values, entries ================================= //

const obj = {
    n: "ujjwal",
    s: "baldaniya",
    r: 22,
    e: { a: 10 }
}
// console.log(Object.keys(obj))

// console.log(Object.values(obj))

// console.log(Object.entries(obj))

// ================================= Local Storage ================================= //

// const array12 = { a: 2, b: 2, c: 3 }
// const set = localStorage.setItem('array', JSON.stringify(array12))
// const get = localStorage.getItem('array')
// console.log(JSON.parse(get))

const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const set1 = localStorage.setItem('array', JSON.stringify(arr11))
const get1 = localStorage.getItem('array')
// console.log(JSON.parse(get1))

// ================================= Que - 3 ================================= //

const data = [
    {
        "id": 17141,
        "name": "Avoided label 3",
        "labelCategory": "Label test cal 1"
    },
    {
        "id": 17139,
        "name": "Avoided label 1",
        "labelCategory": "Label test cal 1"
    },
    {
        "id": 17140,
        "name": "Avoided label 2",
        "labelCategory": "Label test cal 1"
    },
    {
        "id": 17143,
        "name": "Prohibited label 2",
        "labelCategory": "Label test cat 2"
    },
    {
        "id": 17142,
        "name": "Prohibited label 1",
        "labelCategory": "Label test cat 2"
    },
    {
        "id": 17147,
        "name": "Optional label 3",
        "labelCategory": "Label test cat 3"
    },
    {
        "id": 17145,
        "name": "Optional label 1",
        "labelCategory": "Label test cat 3"
    },
    {
        "id": 17146,
        "name": "Optional label 2",
        "labelCategory": "Label test cat 3"
    },
    {
        "id": 17148,
        "name": "Informational label 1",
        "labelCategory": "Label test cat 4"
    },
    {
        "id": 17150,
        "name": "Informational label 3",
        "labelCategory": "Label test cat 4"
    },
    {
        "id": 17153,
        "name": "Required label 3",
        "labelCategory": "Label test cat 5"
    },
    {
        "id": 17152,
        "name": "Required label 2",
        "labelCategory": "Label test cat 5"
    },
    {
        "id": 17151,
        "name": "Required label 1",
        "labelCategory": "Label test cat 5"
    }
];

console.log(data)
let store = []
let label1 = data.filter((element) => element.labelCategory === "Label test cal 1")
let label2 = data.filter((element) => element.labelCategory === "Label test cat 2")
let label3 = data.filter((element) => element.labelCategory === "Label test cat 3")
let label4 = data.filter((element) => element.labelCategory === "Label test cat 4")
let label5 = data.filter((element) => element.labelCategory === "Label test cat 5")

let name1 = label1.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0
})
store.push(name1)

let name2 = label2.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0
})
store.push(name2)

let name3 = label3.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0
})
store.push(name3)

let name4 = label4.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0
})
store.push(name4)

let name5 = label5.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0
})
store.push(name5)
// console.log(store)

let aaa = store.flatMap((element) => element)
console.log(aaa)