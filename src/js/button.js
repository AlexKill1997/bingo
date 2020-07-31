var button = document.getElementsByClassName('content__button')

var f = Array.prototype.forEach;


f.call(button, function(b) {
    b.addEventListener('click', addElement);
});

function addElement(e) {
    var addDiv = document.createElement('div');
    let mValue = Math.max(this.clientWidth, this.clientHeight);
    let rect = this.getBoundingClientRect();
    let sDiv = addDiv.style;
    let px = 'px'

    sDiv.width = sDiv.height = mValue + 'px';
    sDiv.left = e.clientX - rect.left - (mValue / 2) + px;
    sDiv.top = e.clientY - rect.top - (mValue / 2) + px;
    addDiv.classList.add('pulse');
    this.appendChild(addDiv);
    console.log('GIT PUSH')
}