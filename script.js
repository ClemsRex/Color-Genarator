// script.js

function generateColors() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    document.getElementById('generateColorButton').style.background = randomColor;
    document.getElementById('copyColorButton').style.background = randomColor;
    document.getElementById('resetButton').style.background = randomColor;
    // document.getElementById('text').style.background =  randomColor;
    document.getElementById('copyColorButton').setAttribute('data-color', randomColor);
    document.getElementById('colorDisplay').textContent = `Generated Color: ${randomColor}`;
    document.querySelector('h1').style.color = randomColor;
    // document.querySelector('#colorDisplay').style.color = randomColor;
}



function copyColor() {
    const color = document.getElementById('copyColorButton').getAttribute('data-color');
    if (color) {
        const tempInput = document.createElement('input');
        tempInput.value = color;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert(`Copied color: ${color}`);
    } else {
        alert('Generate a color first!');
    }
}

function resetPage() {
    document.body.style.backgroundColor = 'white';
    document.getElementById('generateColorButton').style.background = 'linear-gradient(45deg, #ff6f61, #ff9966)';
    document.getElementById('copyColorButton').style.background = 'linear-gradient(45deg, #ff6f61, #ff9966)';
    document.getElementById('resetButton').style.background = 'linear-gradient(45deg, #ff6f61, #ff9966)';
    document.getElementById('copyColorButton').removeAttribute('data-color');
    document.getElementById('colorDisplay').textContent = 'Generated Color: None';
    document.querySelector('h1').style.color = '#000';
    document.querySelector('#colorDisplay').style.color = '#000';
}
