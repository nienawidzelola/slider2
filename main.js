const slideList = [{
        img: "images/img1.jpg",
        text: 'Zboże'
    },
    {
        img: "images/img2.jpg",
        text: 'Krople'
    },
    {
        img: "images/img3.jpg",
        text: 'Woda'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]

const time = 2000;
let active = 0;



const Jeden = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const Dwa = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    Jeden()
}
let indexInterval = setInterval(Dwa, time)


const keyChangeSlide = (e) => {
    console.log(e.keyCode);
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexInterval)
        e.keyCode == 37 ? active-- : active++;
        if (active === slideList.length) {
            active = 0;
        } else if (active < 0) {
            active = slideList.length - 1;
        }
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        Jeden();
        indexInterval = setInterval(Dwa, time)
    }
}

window.addEventListener('keydown', keyChangeSlide)