const canvas = document.getElementById("drawingCanvas");
const context = canvas.getContext("2d");

readFirstImg = (input) => {
    if (input.files[0]) {
        var reader = new FileReader();

        reader.onload = (e) => {
            const img1 = new Image();
            img1.onload = () => {
                // context.clearRect(0, 0, canvas.width, canvas.height);
                // canvas.width = 300 * img1.width / img1.height;
                context.drawImage(img1, 0, 25, 300 * img1.width / img1.height, 300);
            };

            img1.src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}

readSecondImg = (input) => {
    if (input.files[0]) {
        var reader = new FileReader();

        reader.onload = (e) => {
            const img2 = new Image();
            img2.onload = () => {
                // context.clearRect(0, 0, canvas.width, canvas.height);
                // canvas.width = 300 * img2.width / img2.height;
                context.drawImage(img2, 300 * img1.width / img1.height, 25, 300 * img2.width / img2.height, 300);
            };

            img2.src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}

// readURL = (input) => {
//     if (input.files[0]) {
//         var reader = new FileReader();
//         const canvas = document.getElementById("drawingCanvas");
//         const context = canvas.getContext("2d");

//         reader.onload = (e) => {
//             const img = new Image();
//             drawImg = (pointX) => {
//                 context.clearRect(pointX, 0, canvas.width / 2, canvas.height);
//                 context.drawImage(img, pointX, 25, 300 * img.width / img.height, 300);
//             }
//             img.onload = () => {
//                 if(input.id === 'picture1') {
//                     drawImg(0)
//                 } else {
//                     drawImg(500)
//                 }
//             };

//             img.src = e.target.result;
//         }

//         reader.readAsDataURL(input.files[0]);
//     }
// }
