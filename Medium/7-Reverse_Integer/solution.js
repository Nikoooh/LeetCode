const reverse = (x) => {
  
  const checkRange = (reversedX) => {
    if (reversedX < -Math.pow(2, 31) || reversedX > Math.pow(2, 31) - 1) return 0
    return reversedX
  }

  let arr = Array.from(x.toString(), String)

  if (arr.find((el) => el === '-') || arr.find((el) => el === '+')) {
    let operator = arr.shift()
    arr.reverse().unshift(operator)
    return Number(checkRange(arr.join('')))
  } else {
    return Number(checkRange(arr.reverse().join('')))
  }

};

console.log(reverse(-123));