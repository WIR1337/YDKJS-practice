// for (var i=0;i<5;++i){
//     (function qwe(i){
//         setTimeout(() => {
//             console.log(i)
//         })
//     })(i)
// }

for(var i=0;i<5;++i){
    function qwe(i) {
        setTimeout(() => {
            console.log(i)
        })
    }
    qwe(i)
}