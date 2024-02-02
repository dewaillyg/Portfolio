import jsonData from '../bdd/bdd.json' assert {type : 'json'};

const myUrl =  window.location.href;
const idLength = 7;
const currentProject = myUrl.substring(myUrl.length - idLength);
const colorArray = [
    "#082434",
    "#272d43",
    "#41463D",
    "#484444",
    "#1A1D1A",
    "#401C54",
];
const number = ["un", "deux", "trois", "quatre", "cinq", "six"];

const projectName = document.getElementById('name');
const projectText = document.getElementById('texte');
const projectLink = document.getElementById('link');
const projectImage = document.getElementById('image');
const projectVideo = document.getElementById('video');

for (let i = 0; i < colorArray.length; i++) {
    if (colorArray[i] == currentProject) {
        let nbr = number[i];
        if (nbr == "un" || nbr == "deux" || nbr == "six") {
            projectVideo.style.display = "none";
        }
        projectName.textContent = jsonData[nbr].name;
        projectText.textContent = jsonData[nbr].text;
        projectLink.textContent = jsonData[nbr].link;
        projectImage.src = jsonData[nbr].img;
        projectLink.href = jsonData[nbr].link;
        projectVideo.src = jsonData[nbr].video;
    }
}




