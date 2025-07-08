//your JS code here. If required.
// Select the line element
const line = document.getElementById('line');

//Initialize rotation angle
let angle = 0;

// Set up the continuous rotation using setInterval
setInterval(() => {
	// Increment the angle by 2 degrees
	angle += 2;

	// Apply the rotation to the line element using CSS transform
	line.style.transform = `rotate(${angle}deg)`;
},20);