// document.getElementById('enter-button').addEventListener('click', function() {
//     document.getElementById('image-upload').click();
// });

// document.getElementById('image-upload').addEventListener('change', function(event) {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = function() {
//         const img = new Image();
//         img.src = reader.result;
//         img.onload = function() {
//             document.getElementById('uploaded-image').src = reader.result;
//             const canvas = document.createElement('canvas');
//             canvas.width = this.width;
//             canvas.height = this.height;
//             canvas.style.position = 'absolute';
//             canvas.style.top = '0';
//             canvas.style.left = '0';
//             canvas.style.zIndex = '0';
//             document.getElementById('image-container').appendChild(canvas); // Append canvas to image container
//             const ctx = canvas.getContext('2d');
//             ctx.drawImage(this, 0, 0);
//             canvas.addEventListener('click', handleCanvasClick);
//         };
//     };
//     reader.readAsDataURL(file);
// });

// document.getElementById('close-popup').addEventListener('click', function() {
//     document.getElementById('color-popup').style.display = 'none';
// });

// function handleCanvasClick(event) {
//     const x = event.offsetX;
//     const y = event.offsetY;
//     const ctx = event.target.getContext('2d');
//     const pixelData = ctx.getImageData(x, y, 1, 1).data;
//     const r = pixelData[0];
//     const g = pixelData[1];
//     const b = pixelData[2];
//     const a = pixelData[3] / 255; // Alpha value normalized to range [0, 1]
//     const colorValue = rgbToHex(r, g, b);
//     document.getElementById('color-popup').style.display = 'block';
//     document.getElementById('color-box').style.backgroundColor = colorValue;
//     document.getElementById('color-value').textContent = `Color Value: ${colorValue}`;
//     document.getElementById('color-rgb').textContent = `RGB Value: (${r}, ${g}, ${b})`;
//     document.getElementById('alpha-slider').value = a;
//     document.getElementById('alpha-slider').oninput = function() {
//         document.getElementById('color-box').style.opacity = this.value;
// const baseColor = rgbToHex(Math.min(r + 50, 255), Math.min(g + 50, 255), Math.min(b + 50, 255)); // Lighter shade of the chosen color
// const baseRgb = hexToRgb(baseColor);
// const totalBaseColor = baseRgb.r + baseRgb.g + baseRgb.b; // Total value of RGB components of the base color
// const totalChosenColor = r + g + b; // Total value of RGB components of the chosen color
// const percentage = Math.round((totalChosenColor / totalBaseColor) * 100);
// document.getElementById('color-composition').textContent = `Percentage of base color in chosen color: ${percentage}%`;
//     };
// }

// document.getElementById('alpha-slider').addEventListener('input', function() {
//     // Get the selected alpha value from the slider
//     const alpha = this.value;
    
//     // Update the opacity of the color box
//     document.getElementById('color-box').style.opacity = alpha;

//     // Get the RGB values from the color box background color
//     const colorBoxStyle = window.getComputedStyle(document.getElementById('color-box'));
//     const backgroundColor = colorBoxStyle.backgroundColor;
//     const rgbValues = backgroundColor.match(/\d+/g);
    
//     // Calculate the alpha-adjusted RGB values
//     const adjustedRgbValues = rgbValues.map(value => Math.round(value * alpha));
    
//     // Convert the adjusted RGB values to hexadecimal
//     const hexCode = rgbToHex(adjustedRgbValues[0], adjustedRgbValues[1], adjustedRgbValues[2]);

//     // Update the displayed RGB values and hex code
//     document.getElementById('color-rgb').textContent = `RGB Value: (${adjustedRgbValues[0]}, ${adjustedRgbValues[1]}, ${adjustedRgbValues[2]})`;
//     document.getElementById('color-value').textContent = `Color Value: ${hexCode}`;
// });

// function rgbToHex(r, g, b) {
//     // Convert each RGB value to hexadecimal and ensure they are two characters long
//     const rHex = (r < 16 ? '0' : '') + r.toString(16);
//     const gHex = (g < 16 ? '0' : '') + g.toString(16);
//     const bHex = (b < 16 ? '0' : '') + b.toString(16);

//     // Concatenate the hexadecimal values to form the final color code
//     return `#${rHex}${gHex}${bHex}`;
// }
// function hexToRgb(hex) {
//     // Remove the hash character from the hex code
//     hex = hex.replace('#', '');

//     // Extract the individual RGB components
//     const r = parseInt(hex.substring(0, 2), 16);
//     const g = parseInt(hex.substring(2, 4), 16);
//     const b = parseInt(hex.substring(4, 6), 16);

//     // Return an object containing the RGB components
//     return { r, g, b };
// }



document.getElementById('enter-button').addEventListener('click', function() {
    document.getElementById('image-upload').click();
});

document.getElementById('image-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function() {
        const img = new Image();
        img.src = reader.result;
        img.onload = function() {
            document.getElementById('uploaded-image').src = reader.result;
            const canvas = document.createElement('canvas');
            canvas.width = this.width;
            canvas.height = this.height;
            canvas.style.position = 'absolute';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.zIndex = '0';
            document.getElementById('image-container').appendChild(canvas); // Append canvas to image container
            const ctx = canvas.getContext('2d');
            ctx.drawImage(this, 0, 0);
            canvas.addEventListener('click', handleCanvasClick);
        };
    };
    reader.readAsDataURL(file);
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('color-popup').style.display = 'none';
});

function handleCanvasClick(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    const ctx = event.target.getContext('2d');
    const pixelData = ctx.getImageData(x, y, 1, 1).data;
    const r = pixelData[0];
    const g = pixelData[1];
    const b = pixelData[2];
    const a = pixelData[3] / 255; // Alpha value normalized to range [0, 1]
    const colorValue = rgbToHex(r, g, b);
    document.getElementById('color-popup').style.display = 'block';
    document.getElementById('color-box').style.backgroundColor = colorValue;
    document.getElementById('color-value').textContent = `Color Value: ${colorValue}`;
    document.getElementById('color-rgb').textContent = `RGB Value: (${r}, ${g}, ${b})`;
    document.getElementById('alpha-slider').value = a;
    document.getElementById('alpha-slider').oninput = function() {
        document.getElementById('color-box').style.opacity = this.value;
        const baseColor = rgbToHex(Math.min(r + 50, 255), Math.min(g + 50, 255), Math.min(b + 50, 255)); // Lighter shade of the chosen color
        const baseRgb = hexToRgb(baseColor);
        const totalBaseColor = baseRgb.r + baseRgb.g + baseRgb.b; // Total value of RGB components of the base color
        const totalChosenColor = r + g + b; // Total value of RGB components of the chosen color
        const percentage = Math.round((totalChosenColor / totalBaseColor) * 100);
        document.getElementById('color-composition').textContent = `Percentage of base color in chosen color: ${percentage}%`;
        document.getElementById('base-color').style.backgroundColor = baseColor;
    };
}

document.getElementById('alpha-slider').addEventListener('input', function() {
    // Get the selected alpha value from the slider
    const alpha = this.value;
    
    // Update the opacity of the color box
    document.getElementById('color-box').style.opacity = alpha;

    // Get the RGB values from the color box background color
    const colorBoxStyle = window.getComputedStyle(document.getElementById('color-box'));
    const backgroundColor = colorBoxStyle.backgroundColor;
    const rgbValues = backgroundColor.match(/\d+/g);
    
    // Calculate the alpha-adjusted RGB values
    const adjustedRgbValues = rgbValues.map(value => Math.round(value * alpha));
    
    // Convert the adjusted RGB values to hexadecimal
    const hexCode = rgbToHex(adjustedRgbValues[0], adjustedRgbValues[1], adjustedRgbValues[2]);

    // Update the displayed RGB values and hex code
    document.getElementById('color-rgb').textContent = `RGB Value: (${adjustedRgbValues[0]}, ${adjustedRgbValues[1]}, ${adjustedRgbValues[2]})`;
    document.getElementById('color-value').textContent = `Color Value: ${hexCode}`;
});

function rgbToHex(r, g, b) {
    // Convert each RGB value to hexadecimal and ensure they are two characters long
    const rHex = (r < 16 ? '0' : '') + r.toString(16);
    const gHex = (g < 16 ? '0' : '') + g.toString(16);
    const bHex = (b < 16 ? '0' : '') + b.toString(16);

    // Concatenate the hexadecimal values to form the final color code
    return `#${rHex}${gHex}${bHex}`;
}

function hexToRgb(hex) {
    // Remove the hash character from the hex code
    hex = hex.replace('#', '');

    // Extract the individual RGB components
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Return an object containing the RGB components
    return { r, g, b };
}
