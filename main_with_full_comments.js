;(function () {
  //父層，裝監聽器
  const colorPicker = document.getElementById('color-picker')
  //抓R、G、B顯示數值
  const redValue = document.getElementById('red-value')
  const greenValue = document.getElementById('green-value')
  const blueValue = document.getElementById('blue-value')
  //抓hex code呈現區
  const hexPanel = document.getElementById('hex-panel')
  //背景，取得以視覺化數值
  const background = document.getElementById('background')
  //設定預設值為classical blue
  let hexCode = '#0F4C81'
  let R_hex = '0F', G_hex = '4C',B_hex = '81'

  //將hexCode顯示並設為背景色
  hexPanel.innerText = hexCode
  background.setAttribute('style', `background-color:${hexCode};`)
  // 以下同效果
  // background.style.backgroundColor=hexCode

  //=====EventListener=====
  //input值一被改變就會觸發input事件
  colorPicker.addEventListener('input', (event) => {
    //1.把input的值打在下一行span上
    event.target.nextElementSibling.innerText = event.target.value
    //2.去拿那個span的值
    //3.字串轉成數字(10進位)
    //4.10進位數轉成16進位字串
    //5.存回變數中
    //6.例外處理：萬一只有一位，前面補0
    R_hex = formatSecondDigit(Number(redValue.innerText).toString(16))
    // R_hex = Number(redValue.innerText).toString(16)
    // if (R_hex.length === 1) {
    //     R_hex = `0${R_hex}`
    //   }
    G_hex = formatSecondDigit(Number(greenValue.innerText).toString(16))
    // G_hex = Number(greenValue.innerText).toString(16)
    // if (G_hex.length === 1) {
    //     G_hex = `0${G_hex}`
    //   }
    B_hex = formatSecondDigit(Number(blueValue.innerText).toString(16))
    // B_hex = Number(blueValue.innerText).toString(16)
    // if (B_hex.length === 1) {
    //   B_hex = `0${B_hex}`
    // }
    hexCode = `#${R_hex}${G_hex}${B_hex}`
    //更新顯示、上色
    hexPanel.innerText = hexCode
    background.setAttribute('style', `background-color:${hexCode};`)
  })
  //重構：重複寫的地方拆出來做一個function
  //萬一只有一位數，二位數補個0
  function formatSecondDigit(numberString) {
    if (numberString.length < 2) {
      numberString = '0' + numberString
    }
    return numberString
  }
})()
