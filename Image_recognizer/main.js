Webcam.set({
    width: 300,
    height: 300,
    image_format:"png",png_quality:90
});
camera=document.getElementById("foto_taker");
Webcam.attach("#camera");
function take_da_foto() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'">';
    })
}
console.log("ml5 version:", ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yDO_LK7HD/model.json',modelLoaded());
function modelLoaded() {
    console.log("da model has loaded");
    
}