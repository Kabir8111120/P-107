function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio : true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/zwNXMf6pA/model.json", modelReady);
}
function modelReady()
{
    classifier.classify(gotResult)
}
function gotResult( error, results)
{
    console.log("Got Result")
}