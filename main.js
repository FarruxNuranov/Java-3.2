
let even = +prompt('Введите сколько раз сработает цикл');
let num = 0

 for(let i = 0; i < even;i++) {
     if(i %2 == 0) {
        
         num = num + i
        
         
    }
    
 }

 console.log('Сумма четных чисел ' + num);

 