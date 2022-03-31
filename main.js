function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/F6NJ4HzTS/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}