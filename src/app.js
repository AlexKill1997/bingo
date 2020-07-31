import './scss/base.scss';
import 'normalize.css';
import './js/button.js'


const picture = document.querySelector("#switch")
const button = document.querySelector("#button")
const title = document.querySelector("#title")
const subtitle = document.querySelector("#subtitle")
const background = document.querySelector("#background")

picture.addEventListener('click', function() {
    if (background.style.background !== 'rgb(43, 35, 76)') {
        background.style.background = '#2B234C';
        button.style.background = '#D259F5';
        button.style.boxShadow = '0px 1px 10px rgba(210, 89, 245, 0.6)';
        title.style.color = '#FFFFFF';
        subtitle.style.color = '#D259F5';
    } else {
        background.style.background = '#E5E5E5';
        button.style.background = '#2B234C';
        button.style.boxShadow = '0px 1px 10px rgba(43, 35, 76, 0.3)';
        title.style.color = '#2B234C';
        subtitle.style.color = '#2B234C';
    }
})

button.addEventListener('click', function(a) {
    a.preventDefault();
})