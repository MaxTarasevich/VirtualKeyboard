let div1 = document.createElement('div')
div1.className = 'text'
let txtAr = document.createElement('textarea')
txtAr.className = 'textarea'
div1.append(txtAr)
document.body.append(div1)

let div = document.createElement('div')
div.id = 'keyboard'
document.body.append(div)



let h2 = document.createElement('h2')
    h2.textContent = 'Operating system: Windows'
    document.body.append(h2)

let h3 = document.createElement('h3')
    h3.textContent = 'Switch language: Alt + Shift'
    document.body.append(h3)

let h4 = document.createElement('h4')
    h4.classList.add('lng')
    h4.textContent = 'English'
    document.body.append(h4)
let nB = document.createElement('h4')
    nB.textContent = 'NB: Key animation works only if the system language matches the language in the application!'
    document.body.append(nB)




let keyArrRu = [
    "ё",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
    "Tab",
    "й",
    "ц",
    "у",
    "к",
    "е",
    "н",
    "г",
    "ш",
    "щ",
    "з",
    "х",
    "ъ",
    "Enter",
    "CapsLock",
    "ф",
    "ы",
    "в",
    "а",
    "п",
    "р",
    "о",
    "л",
    "д",
    "ж",
    "э",
    "\\",
    "Shift",
    "\\",
    "я",
    "ч",
    "с",
    "м",
    "и",
    "т",
    "ь",
    "б",
    "ю",
    ".",
    "Control",
    "OS",
    "Alt",
    " ",
    "ArrowLeft",
    "ArrowUp",
    "ArrowDown",
    "ArrowRight"
  ]

  let keyArr = [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
    "Tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "Enter",
    "CapsLock",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    ";",
    "'",
    "\\",
    "Shift",
    "\\",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ".",
    "/",
    "Control",
    "OS",
    "Alt",
    " ",
    "ArrowLeft",
    "ArrowUp",
    "ArrowDown",
    "ArrowRight"
  ]

  if(localStorage.getItem('lang') == 'ru'){
    virtualKeyBoard(keyArrRu)
    document.querySelector('.lng').textContent = 'Russian'
  }else{
    virtualKeyBoard(keyArr)
    document.querySelector('.lng').textContent = 'English'
  }

  

document.addEventListener('keydown',(e)=>{
    if (e.altKey && e.shiftKey ) {
        if(document.querySelector('.key').textContent == '`'){
            virtualKeyBoard(keyArrRu)
            document.querySelector('.lng').textContent = 'Russian'
            localStorage.clear();
            localStorage.setItem('lang','ru')
        }else{
            virtualKeyBoard(keyArr)
            document.querySelector('.lng').textContent = 'English'
            localStorage.clear();
            localStorage.setItem('lang','en')
        }
    }
})




function virtualKeyBoard(keyArr){

   

    let container = document.getElementById('keyboard')
        container.innerHTML = ''
    
        createKeyboard(keyArr)
    
    let textArea = document.querySelector('.textarea')
        textArea.focus()
        textArea.addEventListener('blur',()=>textArea.focus())
    
    let keys = document.querySelectorAll('.key')
    let capsLock = document.querySelector('.caps')

    capsLock.addEventListener('click',()=>{
        capsLock.classList.toggle('active')
        if(capsLock.classList.contains('active')){
           keys.forEach((i)=>{
               if(i.textContent.length == 1){
               i.textContent =  i.textContent.toUpperCase()
               }
           })
        }else{
            keys.forEach((i)=>{
                if(i.textContent.length == 1){
                    i.textContent = i.textContent.toLowerCase()
                }
            })
        }
    })
    
    
    
    document.addEventListener('keydown',(e)=>{
      if(e.key == 'CapsLock'){
          console.log(e.key)
        capsLock.classList.toggle('active')
        if(capsLock.classList.contains('active')){
            keys.forEach((i)=>{
                if(i.textContent.length == 1){
                i.textContent =  i.textContent.toUpperCase()
                }
            })
         }else{
             keys.forEach((i)=>{
                 if(i.textContent.length == 1){
                     i.textContent = i.textContent.toLowerCase()
                 }
             })
         }
      }else{
        keys.forEach((el)=>{
            if(el.textContent == e.key){
                el.classList.add('active')
            }
        })
      }
    })
    
    document.addEventListener('keyup',(e)=>{
        if(e.key !== 'CapsLock'){
            keys.forEach((el)=>{
           
                if(el.textContent == e.key){
                    setTimeout(()=>{
                        el.classList.remove('active')
                    },300)
                   
                }
            })
        }
         
    })
    
    function createKeyboard(arr){
        arr.forEach((i)=>{
                container.append( createKey(i))
        })
    }
    
      function createKey(text){
          let key = document.createElement('span')
          key.classList = 'key'
          key.innerText = text

          if(text.length > 1){
            key.classList.add('big')
          }
          if(text === ' '){
            key.classList.add('space')
          }
          if(text.includes('Arrow')){
              key.classList.add('arrow')            
          }
          if(text === 'CapsLock'){
            key.classList.add('caps')
          }
    
          key.addEventListener('click',(e)=>{
             textArea.focus()
              if(e.target.textContent.includes('Arrow')){
                  textArea.focus()
                let cursorPosition = textArea.selectionStart
                switch(e.target.textContent){
                    case 'ArrowLeft':
                            --cursorPosition
                        textArea.setSelectionRange(cursorPosition,cursorPosition)
                        break
                    case 'ArrowRight':
                            ++cursorPosition
                        textArea.setSelectionRange(cursorPosition,cursorPosition)
                        break
                }
              }else if(e.target.textContent.length == 1){
                textArea.value = textArea.value + e.target.textContent
              }else{
                  switch(e.target.textContent){
                    case 'Enter':
                        textArea.value = textArea.value + '\n'
                        break
                    case 'Tab':
                        textArea.value = textArea.value + '\t'
                        break
                    case 'Backspace':
                        textArea.value = textArea.value.substring(0,textArea.value.length-1)
                        break
                  }
              }
              
          })
          return key
      }
}

