const slide = document.querySelector('.slide');
const images = document.querySelectorAll('.slide img');

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let counter = 1;
const size = images[0].clientWidth;
console.log(size);
slide.style.transform = 'translateX('+ (-size * counter) +'px)'

// button listener
nextBtn.addEventListener('click', ()=>{
    if(counter>= images.length - 1) return;
    slide.style.transition='transform 1.5s ease-in-out';
    counter++;
    slide.style.transform= 'translateX('+ (-size * counter) +'px)';

})
prevBtn.addEventListener('click', ()=>{
    if(counter<=0) return;
    slide.style.transition='transform 1.5s ease-in-out';
    counter = counter-1;
    slide.style.transform= 'translateX('+ (-size * counter) +'px)';

})

slide.addEventListener('transitionend', ()=>{
    if(images[counter].id==='lastClone'){
        slide.style.transition = 'none';
        counter = images.length-2;
        slide.style.transform= 'translateX('+ (-size * counter) +'px)';
    }
})
slide.addEventListener('transitionend', ()=>{
    if(images[counter].id==='firstClone'){

        slide.style.transition = 'none';
        counter = images.length - counter;
        console.log(counter)
        slide.style.transform= 'translateX('+ (-size * counter) +'px)';
    }
})

setInterval(
    ()=>{
        if(counter>= images.length - 1) return;
        slide.style.transition='transform 2s ease-in-out';
        counter++;
        slide.style.transform= 'translateX('+ (-size * counter) +'px)';
    }, 6000
)

// ini konten dua
const btnMyuzu = document.getElementById("btnMyuzu");
const btnAqours = document.getElementById("btnAqours")
const myuzu = document.querySelector(".myuzu");
const aqours = document.querySelector(".aqours");
const member = document.querySelectorAll(".member");
const memberImg = document.querySelectorAll(".member .img");



for(let i=0; i<member.length; i++){
    member[i].addEventListener("mouseenter", (e)=>{
        e.target.style.boxShadow = "0px 3px 7px black"
        e.target.style.zIndex = "20"
        e.target.children[0].style.width = "278px"
        console.log(e.target + " enter")
    });
    member[i].addEventListener("mouseleave", (e)=>{
        e.target.style.boxShadow = "none"
        e.target.style.boxShadow = "10"
        e.target.children[0].style.width = "270px"
        console.log(e.target + " leave")
    })
}



btnMyuzu.addEventListener("click", ()=>{
    btnMyuzu.style.backgroundColor = "#fff"
    btnAqours.style.backgroundColor = "#eee"
    btnMyuzu.style.opacity = "1"
    btnAqours.style.opacity = "0.8"

    myuzu.style.opacity = "1"
    aqours.style.opacity = "0"
    myuzu.style.zIndex = "10"
    aqours.style.zIndex = "5"
})
btnAqours.addEventListener("click", ()=>{
    btnMyuzu.style.backgroundColor = "#eee"
    btnAqours.style.backgroundColor = "#fff" 
    btnAqours.style.opacity = "1"
    btnMyuzu.style.opacity = "0.8"

    myuzu.style.opacity = "0"
    aqours.style.opacity = "1"
    aqours.style.zIndex="10"
    myuzu.style.zIndex = "5"
})

const btnMyuzuSub = document.getElementById("btnMyuzuSub");
const btnAqoursSub = document.getElementById("btnAqoursSub")
const myuzuSub = document.getElementById("submyuzu");
const aqoursSub = document.getElementById("subaqours");

const subUnit = document.querySelectorAll(".sub-unit img");

btnMyuzuSub.addEventListener("click", ()=>{
    btnMyuzuSub.style.backgroundColor = "#fff";
    btnAqoursSub.style.backgroundColor = "#eee";
    btnMyuzuSub.style.opacity = "1";
    btnAqoursSub.style.opacity = "0.8"
;
    myuzuSub.style.opacity = "1";
    aqoursSub.style.opacity = "0";
    myuzuSub.style.zIndex = "10";
    aqoursSub.style.zIndex = "5";
    aqoursSub.style.position = "absolute"
    myuzuSub.style.position = "static"

    if(window.innerWidth < 767){
        for(let i=0; i<3; i++){
            subUnit[i].style.zIndex="200"
        }


        // for(let i=0; i<subUnit.length; i++){
        //     const artikel = subUnit[i].nextElementSibling;
        //     if(i<3){
        //         artikel.style.display = "none";
        //         artikel.style.zIndex = "200"
        //     }
        // }
    }
})
btnAqoursSub.addEventListener("click", ()=>{
    btnMyuzuSub.style.backgroundColor = "#eee"
    btnAqoursSub.style.backgroundColor = "#fff" 
    btnAqoursSub.style.opacity = "1"
    btnMyuzuSub.style.opacity = "0.8"

    myuzuSub.style.opacity = "0"
    aqoursSub.style.opacity = "1"

    aqoursSub.style.zIndex="10"
    myuzuSub.style.zIndex = "5"
    aqoursSub.style.position = "static"
    myuzuSub.style.position = "absolute"

    if(window.innerWidth < 767){
        for(let i=3; i<6; i++){
            subUnit[i].style.zIndex="200"
        }
    }
})



for(let i=0; i<subUnit.length; i++){
    subUnit[i].addEventListener("click", (e)=>{
        const width = window.innerWidth;
        const artikel = e.target.nextElementSibling;
        // console.log(artikel)
        // console.log("Ini sebelum di toggle")

        if(width < 767) {
            artikel.classList.toggle("show")
            // console.log("Ini setelah di toggle ")
            // console.log(artikel)

            if(artikel.classList.contains("show")){
                artikel.style.display = "block";
                artikel.style.zIndex = "50"
                console.log("Ini setelah diklik biar show")
                console.log(artikel)
            } else {
                artikel.style.display = "none";
                artikel.style.zIndex= "-6";
                console.log("Ini setelah diklik biar tutup")
                console.log(artikel)
        }}
        else {
            return
        }
    });
}