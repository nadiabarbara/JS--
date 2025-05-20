'use strict'

// HomeWork

// Task 1: mouseover event to change background color
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = 'orange';
});

// Task 2: mouseout event to reset background color
const hoverBox2 = document.getElementById('hoverBox2');
hoverBox2.addEventListener('mouseover', () => {
    hoverBox2.style.backgroundColor = 'lightgreen';
});
hoverBox2.addEventListener('mouseout', () => {
    hoverBox2.style.backgroundColor = 'lightblue';
});

// Task 3: click event to count button clicks
const clickBtn = document.getElementById('clickBtn');
const clickCount = document.getElementById('clickCount');
let count = 0;

clickBtn.addEventListener('click', () => {
    count++;
    clickCount.innerText = count;
});