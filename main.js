function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        const canvas = document.getElementById("drawingCanvas");
        const context = canvas.getContext("2d");

        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                context.drawImage(img, 0, 0);
            };

            img.src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}
