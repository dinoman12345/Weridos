function dino(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    x=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jvnY8Z4-o/model.json', modelloaded);
}
function modelloaded(){
    x.classify(gotresults);
}
function gotresults(error,results){
if(error){
console.log(error);
}
else{
    console.log(results);
    r=Math.floor(Math.random() * 255) + 1;
    g=Math.floor(Math.random() * 255) + 1;
    b=Math.floor(Math.random() * 255) + 1;
    document.getElementById("adino").innerHTML="I Can hear Every Word : "+results[0].label;
    document.getElementById("bdino").innerHTML="Accuracy :"+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("adino").style.color="rgb("+r+","+g+","+b+")";
    document.getElementById("bdino").style.color="rgb("+r+","+g+","+b+")";
    a=document.getElementById("alien1");
    b=document.getElementById("alien2");
    c=document.getElementById("alien3");
    d=document.getElementById("alien4");
    if(results[0].label=="Scream"){
        a.src='aliens-01.gif';
        b.src='aliens-02.png'
        c.src='aliens-03.png'
        d.src='aliens-04.png'
    }
    else if(results[0].label=="Background  Noise"){
        a.src='aliens-01.png';
        b.src='aliens-02.gif'
        c.src='aliens-03.png'
        d.src='aliens-04.png'
    }
    else if(results[0].label=="Clap"){
        a.src='aliens-01.png';
        b.src='aliens-02.png'
        c.src='aliens-03.gif'
        d.src='aliens-04.png'
    }
    else{ 
    a.src='aliens-01.png';
    b.src='aliens-02.png'
    c.src='aliens-03.png'
    d.src='aliens-04.gif'
}
}
}