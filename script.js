window.addEventListener("load", (e)=>{

const toggleBtn = document.querySelector("#toggle-btn")
const toggleBtnSwitch = document.querySelector(".toggle__btn--switch")


const views = document.querySelector('#views')
const price = document.querySelector('#price')


const input = document.querySelector('#myRange')
let prc
let width
let billing = false

function result() {
    if(input.value == 1){
        views.innerHTML = "10K"
        prc = 8
        width = "0%"
    }else if(input.value == 2){
        views.innerHTML = "50K"
        prc = 12
        width = "calc(25% - 7px)" 
    }else if(input.value == 3){
        views.innerHTML = "100K"
        prc = 16
        width = "calc(50% - 17px)" 
    }else if(input.value == 4){
        views.innerHTML = "500K"
        prc = 24
        width = "calc(75% - 27px)" 
    }else if(input.value == 5){
        views.innerHTML = "1M"
        prc = 36
        width = "calc(100% - 37px)" 
    }

    if(billing) {
        prc = (prc*3)/4;
    }

    price.innerHTML = `\$ ${prc}.00 `
    document.documentElement.style.setProperty('--fill', width);
}

input.addEventListener("input", result)


toggleBtn.addEventListener("click", (event)=>{
    toggleBtnSwitch.classList.toggle("toggle__btn--switch--on")
    billing = !billing
    result()
  })
  result()
})




/*
Here are the different page view ranges and the
corresponding monthly price totals:
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month
If the visitor switches the toggle to yearly billing,
 a 25% discount should be applied to all prices.
*/