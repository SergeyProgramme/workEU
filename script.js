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