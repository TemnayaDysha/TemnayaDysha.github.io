let swatter = document.querySelector('.swatter')
let fly = document.querySelector('.fly')
let result = document.querySelector('.result')

swatter.addEventListener('mousemove', function(e)   {
    swatter.style.top = `${+e.pageY- parseFloat(getComputedStyle(swatter).width)/3}px`
    swatter.style.left = `${+e.pageX- parseFloat(getComputedStyle(swatter).width)/3}px`
})

let pon = 0
let op = document.querySelector('.container')
op.addEventListener('click', function(){
    anime({
        targets: '.swatter',
        scale: [
            { value: 1, duration: 100},
            { value: 0.5, duration: 200},
            { value: 1, duration: 100},
        ]
    })
    pon += 1
    result.innerHTML = pon

    fly.style.left = `${Math.random() * (window.innerWidth - fly.offsetWidth)}px`;
    fly.style.top = `${Math.random() * (window.innerHeight - fly.offsetHeight)}px`;
})
