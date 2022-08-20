function filter_list(l) {
    let newArr = l.filter(e => {
        if (typeof e != 'string' && !String(e).startsWith('-')) {
            return e
        } else if (e == 0) {
            return e
        }
    })
    return newArr
  }

  let arr = [1,"a","b",0,15,0]

  let result = filter_list(arr)
  console.log(result)

//   !String(e).startsWith('-')
// Почему не выдает ноль ? 