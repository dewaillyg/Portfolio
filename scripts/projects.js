const images = document.querySelectorAll(".item .img img");
const backgroundColorContainer = document.querySelector('.projects__container_more');
const previewContainerColor = document.querySelector('.preview-container');
const colorArray = [
    "#082434",
    "#272d43",
    "#41463D",
    "#484444",
    "#1A1D1A",
    "#401C54",
];

let color = "#082434";

function handleImageClick(event) {
    const imgSrc = event.currentTarget.src;
    const imgNumber = imgSrc.match(/(\d+)\.jpg/)[1];

    // backgroundColorContainer.style.backgroundColor = colorArray[parseInt(imgNumber) - 1];
    previewContainerColor.style.backgroundColor = colorArray[parseInt(imgNumber) - 1];
    color = colorArray[parseInt(imgNumber) - 1];

    console.log(colorArray[parseInt(imgNumber) - 1]);

    const newImgSrc = `./assets/img/projects/${imgNumber}.jpg`;
    const previewContainer = document.querySelector(".preview-container");
    const currentLastImg = previewContainer.querySelector("img:last-child");

    if (currentLastImg) {
        gsap.to(currentLastImg, {
            duration: 1,
            scale: 1.5,
            left: "-50%"
        });
    }

    const newImg = document.createElement("img");
    newImg.src = newImgSrc;
    newImg.style.position = "absolute";
    newImg.style.right = "-100%";
    newImg.classList.add("new-img");


    
    previewContainer.appendChild(newImg);
    
    gsap.to(newImg, {
        duration: 1,
        right: "0%",
    });

    // let projectNumber = document.getElementsByClassName("new-img");
    // let j;
    // for (let i = 0; i < projectNumber.length; i++) {
    //     j = projectNumber[i];
    // }

    // if (j.src.includes('1.jpg')) {
    //     console.log("1");
    // }

    // if (j.src.includes('2.jpg')) {
    //     console.log("2");
    // }

    // if (j.src.includes('3.jpg')) {
    //     console.log("3");
    // }
}

previewContainerColor.addEventListener("click", function() {
    // for (let i = 0; i < colorArray.length; i++) {
    //     if (colorArray[i] == color) {
    //         let nbr = i;
    //         window.open('./')
    //     }
    // }
    window.open(`./pages/project.html?nbr=${color}`, '_blank');
});

images.forEach((img) => {
    img.addEventListener("click", handleImageClick);
})



