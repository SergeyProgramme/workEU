let animItems = document.querySelectorAll('._anim-item')
console.log(animItems)

if(animItems.length >0){
    window.addEventListener('scroll',animscroll)
    function animscroll(params){
        for (let index = 0; index < animItems.length; index++) {
            const element = animItems[index];
            console.log(element)
            const animItemHeight = element.offsetHeight;
            const animItemOffset = offset(element).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset +animItemHeight )){
                element.classList.add('_active')
                console.log(element)
            }else{
                if(!element.classList.contains('_anim-no-hide')){
                    element.classList.remove('_active')
                }
                
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect();
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left+ scrollLeft}

    }
   setTimeout(()=>{
    animscroll()
   }, 300)
}
const ANGLE = 40;

let card = document.querySelectorAll(".card");

card.forEach((element, i) => {
  floatable(element);
});

function floatable(panel) {
  let content = panel.querySelector(".content");
  panel.addEventListener('mouseout', e => {
    content.style.transform = `perspective(400px)
                   rotateX(0deg)
                   rotateY(0deg)
                   rotateZ(0deg)
                    translateZ(40px)`;
    content.style.transition = `all 1s linear`;
  });

  panel.addEventListener('mousemove', e => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    let y = (e.clientX - w * 0.5) / w * ANGLE;
    let x = (1 - (e.clientY - h * 0.5)) / h * ANGLE;

    content.style.transform = `perspective(400px)
                   rotateX(${x}deg)
                   rotateY(${y}deg)`;
  });
}
// count
// const time = 3000;
// const step = 100;

// function outNum(num, elem) {
//     let n = 0;  // Добавил объявление переменной n
//     let l = document.querySelector('#' + elem);
//     let t = Math.round(time / (num / step));
//     let interval = setInterval(() => {
//         n = n + step;
//         if (n >= num) {  // Заменил условие на >= чтобы избежать проблем с округлением
//             clearInterval(interval);
//             n = num;  // Установил точное значение, чтобы избежать погрешности округления
//         }
//         l.innerHTML = n;
//     }, t);
// }
// outNum(70000, 'out-1');
// outNum(70000, 'out-2');
// const timeSecond = 3000;
// const stepSecond = 10;

// function outNumSecond(num, elem) {
//     let n = 0;  // Добавил объявление переменной n
//     let l = document.querySelector('#' + elem);
//     let t = Math.round(timeSecond / (num / stepSecond));
//     let interval = setInterval(() => {
//         n = n + stepSecond;
//         if (n >= num) {  // Заменил условие на >= чтобы избежать проблем с округлением
//             clearInterval(interval);
//             n = num;  // Установил точное значение, чтобы избежать погрешности округления
//         }
//         l.innerHTML = n;
//     }, t);
// }
// outNumSecond(500, 'out-3');

// const timeThree = 3000;
// const stepThree = 1;

// function outNumThree(num, elem) {
//     let n = 0;  // Добавил объявление переменной n
//     let l = document.querySelector('#' + elem);
//     let t = Math.round(timeThree / (num / stepThree));
//     let interval = setInterval(() => {
//         n = n + stepThree;
//         if (n >= num) {  // Заменил условие на >= чтобы избежать проблем с округлением
//             clearInterval(interval);
//             n = num;  // Установил точное значение, чтобы избежать погрешности округления
//         }
//         l.innerHTML = n;
//     }, t);
// }
// outNumThree(14, 'out-4');
const time = 5000;
const step = 100;

function outNum(num, elem) {
  let n = 0;
  let l = document.querySelector('#' + elem);
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n >= num) {
      clearInterval(interval);
      n = num;
    }
    l.innerHTML = n;
  }, t);
}

function startCounterIfVisible() {
  const elements = document.querySelectorAll('[id^="out-"]');
  const windowHeight = window.innerHeight;

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < windowHeight && rect.bottom >= 0;

    if (isVisible) {
      const num = parseInt(element.innerHTML, 10);
      if (num === 0) {
        const targetNum = parseInt(element.dataset.targetNum, 10);
        outNum(targetNum, element.id);
      }
    }
  });
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', startCounterIfVisible);

// Запускаем счетчики для видимых элементов при загрузке страницы
window.addEventListener('load', startCounterIfVisible);