;(function () {
  //父層，裝監聽器
  const colorPicker = document.getElementById('color-picker')
  //R、G、B顯示數值
  const redValue = document.getElementById('red-value')
  const greenValue = document.getElementById('green-value')
  const blueValue = document.getElementById('blue-value')
  //hex code呈現區
  const hexPanel = document.getElementById('hex-panel')
  //背景
  const background = document.getElementById('background')
  //設定預設值
  let hexCode = '#0F4C81'
  let R_hex = '0F',
    G_hex = '4C',
    B_hex = '81'
  showColor()

  //=====EventListener=====
  colorPicker.addEventListener('input', (event) => {
    //input值顯示在下一行span
    event.target.nextElementSibling.innerText = event.target.value
    //轉成16進位後存回
    R_hex = formatSecondDigit(Number(redValue.innerText).toString(16))
    G_hex = formatSecondDigit(Number(greenValue.innerText).toString(16))
    B_hex = formatSecondDigit(Number(blueValue.innerText).toString(16))
    hexCode = `#${R_hex}${G_hex}${B_hex}`
    //更新顯示、上色
    showColor()
  })

  //萬一只有一位數，二位數補個0
  function formatSecondDigit(numberString) {
    if (numberString.length < 2) {
      numberString = '0' + numberString
    }
    return numberString
  }
  //將hexCode顯示並設為背景色
  function showColor() {
    hexPanel.innerText = hexCode
    background.setAttribute('style', `background-color:${hexCode};`)
  }
})()
