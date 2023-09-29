// ================================= then/catch ================================= //

// const promise = new Promise((resolve, reject) => {
//     let a = 0
//     let b = 0
//     if (a === b) {
//         resolve()
//     } else {
//         reject()
//     }
// })
// promise.then(() => console.log("success")).catch(() => console.log("error"))

// ================================= async/await ================================= //

// const main = () => {
//     const promise1 = new Promise((resolve, reject) => {
//         let a = 20
//         let b = 20
//         if (a === b) {
//             resolve("success")
//         } else {
//             reject("error")
//         }
//     })
//     return promise1
// }
// const result1 = async () => {
//     try {
//         let message = await main()
//         console.log(message)
//     } catch (error) {
//         console.log(error)
//     }
// }
// result1()

const url = "https://api.publicapis.org/entries"

//-------------------------------------------------
fetch(url)
    .then(response => {
        return response.json()
    })
    .then(user => {
        // console.log(user.entries[0])
    })

//-------------------------------------------------
const func = async () => {
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data)
}
func()