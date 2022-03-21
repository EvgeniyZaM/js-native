const big = document.getElementById('big')
const medium = document.getElementById('medium')
const small = document.getElementById('small')

const smallHandler = (e) => {
   e.stopPropagation()
   if (e.target.tagName === 'BUTTON') {
      console.log(e.target.name)
   }
}

const mediumHandler = (e) => {
   e.stopPropagation()
   console.log(e.currentTarget.id)
}

const bigHandler = (e) => {
   // e.stopPropagation()
   console.log(e.currentTarget.id)
}

// addEventListener позволяет повесить несколько обработчиков на один и тот же элемент
small.addEventListener('click', smallHandler)
medium.addEventListener('click', mediumHandler)
big.addEventListener('click', bigHandler)

big.removeEventListener('click', bigHandler) // Удалить обрабочик


// index.html=============================================================
// <!DOCTYPE html>
// <html lang='en'>

// <head>
//    <meta charset='UTF-8'>
//    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
//    <meta http-equiv='X-UA-Compatible' content='ie=edge'>
//    <title>lesson_3</title>
//    <style>
//       body {
//          background-color: aliceblue;
//       }

//       #big {
//          background-color: rgb(74, 36, 109);
//          border: 2px solid blue;
//          border-radius: 5px;
//          margin: 50px auto;
//          width: 300px;
//          height: 300px;
//       }

//       #medium {
//          background-color: rgb(134, 82, 184);
//          border: 2px solid blue;
//          border-radius: 5px;
//          margin: 50px auto;
//          width: 200px;
//          height: 200px;
//       }

//       #small {
//          background-color: rgb(193, 162, 223);
//          border: 2px solid blue;
//          border-radius: 5px;
//          margin: 50px auto;
//          width: 100px;
//          height: 100px;
//       }
//    </style>

// </head>

// <body>
//    <div id='big'>
//       <div id='medium'>
//          <div id='small'>
//             <button name='1'>1</button>
//             <button name='2'>2</button>
//             <button name='3'>3</button>
//             <button name='4'>4</button>
//          </div>
//       </div>
//    </div>
//    <script src='lesson-3.js'></script>
// </body>

// </html>