
p1 = ""
p2 = ""
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vyhDh_qhR/model.json",modelloaded)

function check() {
    pic = document.getElementById("picture")
    classifier.classify(pic, gotresult)

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

function gotresult(error,result){
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        p1 = result[0].label;
        p2 = result[1].label;
        document.getElementById("emotion1").innerHTML = p1;
        document.getElementById("emotion2").innerHTML = p2;
        speak()
        if (p1 == "victory") {
            document.getElementById("emoji1").innerHTML = "✌"
        } if (p2 == "victory") {
            document.getElementById("emoji2").innerHTML = "✌"
        } if (p1 == "ok") {
            document.getElementById("emoji1").innerHTML = "👌"
        } if (p2 == "ok") {
            document.getElementById("emoji2").innerHTML = "👌"
        } if (p1 == "rock") {
            document.getElementById("emoji1").innerHTML = "🤘"
        } if (p2 == "rock") {
            document.getElementById("emoji2").innerHTML = "🤘"
        }
    }
}