
const con = document.querySelector('.con')
let willDelete = []
let shapes = []
let bitti = false
createTable()
function createTable(){
   for(let i=0; i<12;i++){
      shapes.push([])
      willDelete.push([])
      for(let j=0; j<10;j++){
         shapes[i][j] = 0
         willDelete[i][j] = 0
         let div = document.createElement('div')
         div.style.height = 30+'px'
         div.style.width = 30+'px'
         div.style.background = 'rgb(17, 15, 15)'
         con.append(div)
      }
   }
}

let globalThing
let k = 0;
let l = 0;
let globalType
let globalRotate=0
let globalCounter = 0
let globalDownFlag = false
function createObj(){
   let objAr = ['kare','dikdortgen','l','z']
   let localshapes = []
   let random = Math.floor(Math.random()*objAr.length)
   // let random = 2

   globalType = random
   globalRotate = 0
   k=0
   l=3
   if(random == 0){
      let obj = document.createElement('div')
      obj.style.width = 30+'px'
      obj.style.height = 30+'px'
      obj.style.background = 'crimson'
      obj.style.position = 'absolute'
      obj.style.left = 90+'px'
      obj.style.top = 2+'px'
      con.appendChild(obj)
      localshapes.push(obj)
      localshapes.forEach((elem)=>{
         elem.style.outline = '2px solid rgb(253, 97, 126)'
         elem.style.outlineOffset = '-2px'
         elem.style.borderRadius = '3px'
      })
   }else if(random == 1){
      let obj = document.createElement('div')
      let obj1 = document.createElement('div')
      let obj2 = document.createElement('div')
      obj.style.position = 'absolute'
      obj.style.left = 90+'px'
      obj.style.top = 0+'px'
      obj.style.height = 30+'px'
      obj.style.width = 30+'px'
      obj.style.background = 'white'
      
      obj1.style.position = 'absolute'
      obj1.style.left = 121+'px'
      obj1.style.top = 0+'px'
      obj1.style.height = 30+'px'
      obj1.style.width = 30+'px'
      obj1.style.background = 'white'
      
      obj2.style.position = 'absolute'
      obj2.style.left = 152+'px'
      obj2.style.top = 0+'px'
      obj2.style.height = 30+'px'
      obj2.style.width = 30+'px'
      obj2.style.background = 'white'
      con.appendChild(obj)
      con.appendChild(obj1)
      con.appendChild(obj2)
      localshapes.push(obj,obj1,obj2)
      localshapes.forEach((elem)=>{
         elem.style.outline = '2px solid rgb(139, 139, 139)'
         elem.style.outlineOffset = '-2px'
         elem.style.borderRadius = '3px'
      })
   }else if(random == 2){
      let obj = document.createElement('div')
      let obj1 = document.createElement('div')
      let obj2 = document.createElement('div')
      let obj3 = document.createElement('div')
      obj.style.position = 'absolute'
      obj.style.top = 2+'px'
      obj.style.left = 90+'px'
      obj.style.height = 30+'px'
      obj.style.width = 30+'px'
      obj.style.background = 'yellow'

      obj1.style.position = 'absolute'
      obj1.style.top = 33+'px'
      obj1.style.left = 90+'px'
      obj1.style.height = 30+'px'
      obj1.style.width = 30+'px'
      obj1.style.background = 'yellow'

      obj2.style.position = 'absolute'
      obj2.style.top = 64+'px'
      obj2.style.left = 90+'px'
      obj2.style.height = 30+'px'
      obj2.style.width = 30+'px'
      obj2.style.background = 'yellow'

      obj3.style.position = 'absolute'
      obj3.style.top = 64+'px'
      obj3.style.left = 122+'px'
      obj3.style.height = 30+'px'
      obj3.style.width = 30+'px'
      obj3.style.background = 'yellow'
      con.appendChild(obj)
      con.appendChild(obj1)
      con.appendChild(obj2)
      con.appendChild(obj3)
      localshapes.push(obj,obj1,obj2,obj3)
      localshapes.forEach((elem)=>{
         elem.style.outline = '2px solid rgb(117, 121, 64)'
         elem.style.outlineOffset = '-2px'
         elem.style.borderRadius = '3px'
      })
   }else{
      let obj = document.createElement('div')
      let obj1 = document.createElement('div')
      let obj2 = document.createElement('div')
      let obj3 = document.createElement('div')
      obj.style.position = 'absolute'
      obj.style.top = 0+'px'
      obj.style.left = 90+'px'
      obj.style.height = 30+'px'
      obj.style.width = 30+'px'
      obj.style.background = 'rgb(3, 71, 110)'

      obj1.style.position = 'absolute'
      obj1.style.top = 0+'px'
      obj1.style.left = 121+'px'
      obj1.style.height = 30+'px'
      obj1.style.width = 30+'px'
      obj1.style.background = 'rgb(3, 71, 110)'

      obj2.style.position = 'absolute'
      obj2.style.top = 32+'px'
      obj2.style.left = 122+'px'
      obj2.style.height = 30+'px'
      obj2.style.width = 30+'px'
      obj2.style.background = 'rgb(3, 71, 110)'

      obj3.style.position = 'absolute'
      obj3.style.top = 32+'px'
      obj3.style.left = 153+'px'
      obj3.style.height = 30+'px'
      obj3.style.width = 30+'px'
      obj3.style.background = 'rgb(3, 71, 110)'
      con.appendChild(obj)
      con.appendChild(obj1)
      con.appendChild(obj2)
      con.appendChild(obj3)
      localshapes.push(obj,obj1,obj2,obj3)
      localshapes.forEach((elem)=>{
         elem.style.outline = '2px solid rgb(79, 135, 218)'
         elem.style.outlineOffset = '-2px'
         elem.style.borderRadius = '3px'
      })
   }


   globalThing = localshapes
   return localshapes
}
function move(){
   let shape = createObj()
   let margintop = 0
   let moveinterval = setInterval(() => {
      if(bitti){
         console.log('bitti');
         clearInterval(moveinterval)
      }else{
         if(margintop != 341 && checkSpot()){ // margin top olmayadabilir.
            margintop+=31
            k++
            shape.forEach((elem)=>{
               elem.style.top = (parseInt(elem.style.top)+31)+'px'
            })
         }else{
            if(globalType === 0){
               shapes[k][l] = 1
               willDelete[k][l] = shape[0]
               if(shapes[0][3]===1) bitti=true
            }else if(globalType === 1){
               if(globalRotate == 0){
                  shapes[k][l] = 1
                  shapes[k][l+1] = 1
                  shapes[k][l+2] = 1
                  willDelete[k][l] = shape[0]
                  willDelete[k][l+1] = shape[1]
                  willDelete[k][l+2] = shape[2]
                  if(shapes[0][3]===1 || shapes[0][4]===1 || shapes[0][5]) bitti=true
               }else if(globalRotate == 1){
                  shapes[k][l]=1
                  shapes[k-1][l]=1
                  shapes[k-2][l]=1
                  willDelete[k][l] = shape[2]
                  willDelete[k-1][l] = shape[1]
                  willDelete[k-2][l] = shape[0]
               }
            }else if(globalType === 2){
               if(globalRotate == 0){
                  shapes[k][l] = 1
                  shapes[k+1][l] = 1
                  shapes[k+2][l] = 1
                  shapes[k+2][l+1] = 1
                  willDelete[k][l] = shape[0]
                  willDelete[k+1][l] = shape[1]
                  willDelete[k+2][l] = shape[2]
                  willDelete[k+2][l+1] = shape[3]
                  if(shapes[3][3]===1 || shapes[2][3]===1 || shapes[1][3]===1 || shapes[0][3]===1) bitti = true
               }else if(globalRotate == 1){
                  shapes[k][l] = 1
                  shapes[k][l-1] = 1
                  shapes[k][l-2] = 1
                  shapes[k+1][l-2] = 1
                  willDelete[k][l] = shape[0]
                  willDelete[k][l-1] = shape[1]
                  willDelete[k][l-2] = shape[2]
                  willDelete[k+1][l-2] = shape[3]
                  if(shapes[1][3]===1) bitti = true
               }else if(globalRotate == 2){
                  shapes[k][l] = 1
                  shapes[k-1][l] = 1
                  shapes[k-2][l] = 1
                  shapes[k-2][l-1] = 1
                  willDelete[k][l] = shape[0]
                  willDelete[k-1][l] = shape[1]
                  willDelete[k-2][l] = shape[2]
                  willDelete[k-2][l-1] = shape[3]
                  if(shapes[2][4]===1) bitti=true
               }else if(globalRotate == 3){
                  shapes[k][l] = 1
                  shapes[k][l+1] = 1
                  shapes[k][l+2] = 1
                  shapes[k-1][l+2] = 1
                  willDelete[k][l] = shape[0]
                  willDelete[k][l+1] = shape[1]
                  willDelete[k][l+2] = shape[2]
                  willDelete[k-1][l+2] = shape[3]
                  if(shapes[0][3]===1 || shapes[0][4]===1 || shapes[0][5]===1) bitti=true
               }
            }else{
               if(globalRotate == 0){
                  shapes[k][l] = 1
                  shapes[k][l+1] = 1
                  shapes[k+1][l+1] = 1
                  shapes[k+1][l+2] = 1
                  willDelete[k][l] = shape[0]
                  willDelete[k][l+1] = shape[1]
                  willDelete[k+1][l+1] = shape[2]
                  willDelete[k+1][l+2] = shape[3]
               }else if(globalRotate == 1){
                  shapes[k][l] = 1
                  shapes[k+1][l] = 1
                  shapes[k+1][l-1] = 1
                  shapes[k+2][l-1] = 1
                  willDelete[k][l] = shape[0]
                  willDelete[k+1][l] = shape[1]
                  willDelete[k+1][l-1] = shape[2]
                  willDelete[k+2][l-1] = shape[3]
               }
               if(shapes[1][4]===1 || shapes[1][5]===1) bitti = true
            }

            let willreplace = Number.MAX_SAFE_INTEGER
            for(let i=shapes.length-1; i>0; i--){
               if(!shapes[i].includes(0)){
                  globalDownFlag = true
                  globalCounter++
                  if(i < willreplace ) willreplace = i
                  willreplace = i
                  for(let j=0; j < shapes[i].length;j++){
                     willDelete[i][j].style.height = 0+'px'
                  }
                  shapes[i] = [0,0,0,0,0,0,0,0,0,0]
                  willDelete[i] = [0,0,0,0,0,0,0,0,0,0]
               }
            }
            if(globalDownFlag){
               for(let i=willreplace-1; i>=0;i--){
                  for(let j=0; j<10; j++){
                     if(shapes[i][j]===1){
                        shapes[i][j] = 0
                        shapes[i+globalCounter][j] = 1
                        willDelete[i][j].style.top = (parseInt(willDelete[i][j].style.top)+globalCounter*30)+'px'
                        let div = willDelete[i][j]
                        willDelete[i][j] = 0
                        willDelete[i+globalCounter][j] = div
                     }
                  }
               }
               globalDownFlag = false
               globalCounter=0
            }
            clearInterval(moveinterval)
            move()
         }
      }
   }, 150);
}
move()

function checkSpot(){
   if(globalType === 0){
      if(shapes[k+1][l]===0){
         return true
      }
   }else if(globalType === 1){
      if(globalRotate == 0){
         if(shapes[k+1][l]===0 && shapes[k+1][l+1]===0 && shapes[k+1][l+2]===0) return true
      }else if(globalRotate == 1){
         if(shapes[k+1][l] === 0) return true
      }
   }else if(globalType === 2){
      if(globalRotate == 0){
         if(k<9){
            if(shapes[k+3][l]===0 && shapes[k+3][l+1]===0) return true
         }
      }else if(globalRotate == 1){
         if(k<10){
            if(shapes[k+1][l] === 0 && shapes[k][l-1]===0 && shapes[k+2][l-2]===0) return true
         }
      }else if(globalRotate == 2){
         if(k < 11){
            if(shapes[k+1][l]===0 && shapes[k-1][l-1] === 0) return true
         }
      }else if(globalRotate == 3){
         if(k<11){
            if(shapes[k+1][l]===0 && shapes[k+1][l+1] === 0 && shapes[k+1][l+2] === 0) return true
         }
      }
   }else{
      if(globalRotate == 0){
         if(k<10){
            if(shapes[k+1][l]===0 && shapes[k+2][l+1]===0 && shapes[k+2][l+2]===0){
               return true
            }
         }
      }else if(globalRotate == 1){
         if(k<9){
            if(shapes[k+2][l] === 0 && shapes[k+3][l-1]===0) return true
         }
      }
   }
}




window.addEventListener('keydown',(event)=>{
   if(event.keyCode == 68 && !bitti){ // sağ
      if(globalType == 0){
         if(shapes[k][l+1] === 0){
            globalThing.forEach((elem)=>{
               elem.style.left = (parseInt(elem.style.left)+31)+'px'
            })
            l++
         }
      }else if(globalType == 1){
         if(globalRotate == 0){
            if(shapes[k][l+3] === 0){
               globalThing.forEach((elem)=>{
                  elem.style.left = (parseInt(elem.style.left)+31)+'px'
               })
               l++
            }
         }else if(globalRotate == 1){
            if(shapes[k][l+1]===0 && shapes[k-1][l+1]===0 && shapes[k-2][l+1]===0){
               globalThing.forEach((elem)=>{
                  elem.style.left = (parseInt(elem.style.left)+31)+'px'
               })
               l++
            }
         }
      }else if(globalType == 2){
         if(globalRotate == 0){
            if(shapes[k][l+1]===0 && shapes[k+1][l+1] === 0 && shapes[k+2][l+2]===0){
               globalThing.forEach((elem)=>{
                  elem.style.left = (parseInt(elem.style.left)+31)+'px'
               })
               l++
            }
         }else if(globalRotate == 1){
            if(shapes[k][l+3]===0 && shapes[k+2][l]===0 && shapes[k+1][l+1]===0){
               globalThing.forEach((elem)=>{
                  elem.style.left = (parseInt(elem.style.left)+31)+'px'
               })
               l++
            }
         }else if(globalRotate == 2){
            if(shapes[k+3][l]===0 && shapes[k][l+1]===0 && shapes[k+1][l+1] === 0 && shapes[k+2][l+1]===0){
               globalThing.forEach((elem)=>{
                  elem.style.left = (parseInt(elem.style.left)+31)+'px'
               })
               l++
            }
         }else if(globalRotate == 3){
            if(shapes[k][l+1]===0 && shapes[k-1][l+1]===0){
               globalThing.forEach((elem)=>{
                  elem.style.left = (parseInt(elem.style.left)+31)+'px'
               })
               l++
            }
         }
      }else{
         if(globalRotate == 0){
            if(shapes[k][l+2]===0 && shapes[k+1][l+3]===0){
               globalThing.forEach((elem)=>{
                  elem.style.left = (parseInt(elem.style.left)+31)+'px'
               })
               l++
            }
         }else if(globalRotate == 1){
            if(shapes[k][l+1] === 0 && shapes[k+1][l+1] === 0 && shapes[k+2][l]===0){
               globalThing.forEach((elem)=>{
                  elem.style.left = (parseInt(elem.style.left)+31)+'px'
               })
               l++
            }
         }
      }
   }
   if(event.keyCode == 65 && !bitti){ // sol
      if(globalType == 0){
         if(shapes[k][l-1] === 0){
            globalThing.forEach((elem)=>{
               elem.style.left = (parseInt(elem.style.left)-31)+'px'
            })
            l--
         }
      }else if(globalType == 1){
         if(globalRotate == 0){
            if(shapes[k][l-1] === 0){
               globalThing.forEach((elem)=>{
                  elem.style.left = (parseInt(elem.style.left)-31)+'px'
               })
               l--
            }
         }else if(globalRotate == 1){
            if(shapes[k][l-1]===0 && shapes[k-1][l-1]===0 && shapes[k-2][l-1]===0){
               globalThing.forEach((elem)=>{
                  elem.style.left = (parseInt(elem.style.left)-31)+'px'
               })
               l--
            }
         }
      }else if(globalType == 2){
         if(globalRotate == 0){
            if(shapes[k][l-1]===0 && shapes[k+1][l-1]===0 && shapes[k+2][l-1] === 0){
               globalThing.forEach((elem)=>{
                  elem.style.left = (parseInt(elem.style.left)-31)+'px'
               })
               l--
            }
         }else if(globalRotate == 1){
            if(shapes[k][l-3]===0 && shapes[k+1][l-3]===0){
               globalThing.forEach((elem)=>{
                  elem.style.left = (parseInt(elem.style.left)-31)+'px'
               })
               l--
            }
         }else if(globalRotate == 2){
            if(shapes[k][l-1]===0 && shapes[k-1][l-1]===0 && shapes[k-2][l-2]===0){
               globalThing.forEach((elem)=>{
                  elem.style.left = (parseInt(elem.style.left)-31)+'px'
               })
               l--
            }
         }else if(globalRotate == 3){
            if(shapes[k][l-1]===0 && shapes[k-1][l+1]===0){
               globalThing.forEach((elem)=>{
                  elem.style.left = (parseInt(elem.style.left)-31)+'px'
               })
               l--
            }
         }
      }else{
         if(globalRotate == 0){
            if(shapes[k][l-1]===0 && shapes[k+1][l]===0){
               globalThing.forEach((elem)=>{
                  elem.style.left = (parseInt(elem.style.left)-31)+'px'
               })
               l--
            }
         }else if(globalRotate == 1){
            if(shapes[k+1][l-2] === 0 && shapes[k+2][l-2]===0 && shapes[k][l-1]===0){
               globalThing.forEach((elem)=>{
                  elem.style.left = (parseInt(elem.style.left)-31)+'px'
               })
               l--
            }
         }
      }
   }
   if(event.keyCode == 32 && !event.repeat && !bitti){ // space
      if(globalType == 1){
         if(l<8){
            if(globalRotate==0 && k>1){
               globalThing[0].style.top = (parseInt(globalThing[0].style.top)-60)+'px'
               globalThing[1].style.top = (parseInt(globalThing[1].style.top)-30)+'px'
               globalThing[1].style.left = (parseInt(globalThing[1].style.left)-31)+'px'
               globalThing[2].style.left = (parseInt(globalThing[2].style.left)-62)+'px'
               globalRotate++
            }else if(globalRotate==1){
               globalThing[0].style.top = (parseInt(globalThing[0].style.top)+60)+'px'
               globalThing[1].style.top = (parseInt(globalThing[1].style.top)+30)+'px'
               globalThing[1].style.left = (parseInt(globalThing[1].style.left)+31)+'px'
               globalThing[2].style.left = (parseInt(globalThing[2].style.left)+62)+'px'
               globalRotate=0
            }
         }
      }else if(globalType == 2){
         if(globalRotate==0){
            if(k<11 && l<8){
               globalThing[0].style.top=(parseInt(globalThing[0].style.top)+31)+'px'
               globalThing[0].style.left=(parseInt(globalThing[0].style.left)+61)+'px'
               globalThing[1].style.left=(parseInt(globalThing[1].style.left)+31)+'px'
               globalThing[2].style.top=(parseInt(globalThing[2].style.top)-31)+'px'
               globalThing[3].style.left=(parseInt(globalThing[3].style.left)-32)+'px'
               globalRotate++
               k++
               l++
               l++
            }
         }else if(globalRotate==1){
            globalThing[0].style.top=(parseInt(globalThing[0].style.top)+30)+'px'
            globalThing[0].style.left=(parseInt(globalThing[0].style.left)-30)+'px'
            globalThing[2].style.top=(parseInt(globalThing[2].style.top)-30)+'px'
            globalThing[2].style.left=(parseInt(globalThing[2].style.left)+31)+'px'
            globalThing[3].style.top=(parseInt(globalThing[3].style.top)-61)+'px'
            globalRotate++
            k++
            l--
         }else if(globalRotate == 2){
            globalThing[0].style.left=(parseInt(globalThing[0].style.left)-30)+'px'
            globalThing[1].style.top=(parseInt(globalThing[1].style.top)+30)+'px'
            globalThing[2].style.top=(parseInt(globalThing[2].style.top)+60)+'px'
            globalThing[2].style.left=(parseInt(globalThing[2].style.left)+30)+'px'
            globalThing[3].style.top=(parseInt(globalThing[3].style.top)+30)+'px'
            globalThing[3].style.left=(parseInt(globalThing[3].style.left)+62)+'px'
            globalRotate++
            l--
         }else if(globalRotate == 3){
            globalThing[0].style.top=(parseInt(globalThing[0].style.top)-61)+'px'
            globalThing[0].style.left=(parseInt(globalThing[0].style.left)-1)+'px'
            globalThing[1].style.top=(parseInt(globalThing[1].style.top)-30)+'px'
            globalThing[1].style.left=(parseInt(globalThing[1].style.left)-31)+'px'
            globalThing[2].style.top=(parseInt(globalThing[2].style.top)+1)+'px'
            globalThing[2].style.left=(parseInt(globalThing[2].style.left)-61)+'px'
            globalThing[3].style.top=(parseInt(globalThing[3].style.top)+31)+'px'
            globalThing[3].style.left=(parseInt(globalThing[3].style.left)-30)+'px'
            globalRotate=0
            k--
            k--
         }
      }else if(globalType == 3){
         if(k>0){
            if(globalRotate==0){
               globalThing[0].style.top=(parseInt(globalThing[0].style.top)-30)+'px'
               globalThing[0].style.left=(parseInt(globalThing[0].style.left)+30)+'px'
               globalThing[2].style.top=(parseInt(globalThing[2].style.top)-30)+'px'
               globalThing[2].style.left=(parseInt(globalThing[2].style.left)-30)+'px'
               globalThing[3].style.left=(parseInt(globalThing[3].style.left)-60)+'px'
               globalRotate++
               k--
               l++
            }else if(globalRotate==1){
               globalThing[0].style.top=(parseInt(globalThing[0].style.top)+30)+'px'
               globalThing[0].style.left=(parseInt(globalThing[0].style.left)-30)+'px'
               globalThing[2].style.top=(parseInt(globalThing[2].style.top)+30)+'px'
               globalThing[2].style.left=(parseInt(globalThing[2].style.left)+30)+'px'
               globalThing[3].style.left=(parseInt(globalThing[3].style.left)+60)+'px'
               globalRotate = 0
               k++
               l--
            }
         }
      }
   }
})










