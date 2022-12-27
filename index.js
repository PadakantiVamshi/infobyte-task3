function converter() {
    let m = document.getElementsByTagName("input")[0].value
    let a = parseInt(m)
    let x = (a * 1.8) + 32
    document.getElementsByTagName("div")[4].innerHTML = `<h1> The temperature in fahrenheit is: 
     ${x}</h1>`
  }

  function converter2() {
    let m = document.getElementsByTagName("input")[0].value
    let a = parseInt(m)
    let x = (a-32) * (5/9)
    document.getElementsByTagName("div")[4].innerHTML = `<h1> The temperature in celsius is: 
     ${x}</h1>`
  }
 