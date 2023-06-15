
p1 = ""
p2 = ""
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vyhDh_qhR/mobel.json",modelloaded)

function check() {
    speak()
}

function capture() {
    Webcam.snap(
        function (data) {
            document.getElementById("result").innerHTML = "<img id='picture' src='" + data + "'>"
        }
    )
}

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
})

camera = document.getElementById("camera")
Webcam.attach("#camera")

function speak() {
    var synth = window.speechSynthesis;
    speak1 = "the first prediction is " + p1;
    speak2 = "and the second prediction is " + p2;
    utterthis = new SpeechSynthesisUtterance(speak1 + speak2)
    synth.speak(utterthis)
}

function modelloaded(){
    console.log("model is ready");
}