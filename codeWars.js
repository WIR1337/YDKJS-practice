function filter_list(l) {
    let newArr = l.map(e => {
        if (typeof e == 'number' && !String(e).startsWith('-')) {
            return e
        } 
    })
    return newArr
  }

  let arr = [1,"a","b",0,15,0]

  let result = filter_list(arr)
  console.log(result)

//   !String(e).startsWith('-')
// Почему filter не возвращает 0 а map возвращает
