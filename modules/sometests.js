function qwe() {
    function a() {
        console.log('Hello World')
    }

    return {
        param: a
    }
}


let result = qwe.apply(qwe, [])

console.log(result.param())