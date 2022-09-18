// import { MyModules } from "./newModules.js";



// MyModules.define('AllFunc', [], function () {
//     function qwe() {
//         console.log(`Ya bar.js`)
//     }
//     return {
//         qwe: qwe
//     }
// })


// MyModules.get('AllFunc').qwe()

function hello(who) {
    return "Let me introduce: " + who;
}

export { hello };