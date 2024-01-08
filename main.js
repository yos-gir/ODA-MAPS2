// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

const isFullScreen = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;







// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";


if (!isFullScreen) {
    const docElem = document.documentElement;

    if (docElem.requestFullscreen) {
      docElem.requestFullscreen();
    } else if (docElem.mozRequestFullScreen) {
      docElem.mozRequestFullScreen();
    } else if (docElem.webkitRequestFullscreen) {
      docElem.webkitRequestFullscreen();
    } else if (docElem.msRequestFullscreen) {
      docElem.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }

    // Re-enter fullscreen
    const docElem = document.documentElement;

    if (docElem.requestFullscreen) {
      docElem.requestFullscreen();
    } else if (docElem.mozRequestFullScreen) {
      docElem.mozRequestFullScreen();
    } else if (docElem.webkitRequestFullscreen) {
      docElem.webkitRequestFullscreen();
    } else if (docElem.msRequestFullscreen) {
      docElem.msRequestFullscreen();
    }
  }


 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}





// -----------------------------------------------


const panoramaImage = new PANOLENS.ImagePanorama("image.jpeg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

viewer.add(panoramaImage);


//-----------------------------------------------------------


const panoramaImage1 = new PANOLENS.ImagePanorama("image1.jpeg");
const imageContainer1 = document.querySelector(".image-container1");

const viewer1 = new PANOLENS.Viewer({
  container: imageContainer1,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

viewer1.add(panoramaImage1);

//-----------------------------------------------------------


const panoramaImage2 = new PANOLENS.ImagePanorama("image2.jpeg");
const imageContainer2 = document.querySelector(".image-container2");

const viewer2 = new PANOLENS.Viewer({
  container: imageContainer2,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

viewer2.add(panoramaImage2);

//-----------------------------------------------------------


const panoramaImage3 = new PANOLENS.ImagePanorama("image3.jpeg");
const imageContainer3 = document.querySelector(".image-container3");

const viewer3 = new PANOLENS.Viewer({
  container: imageContainer3,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

viewer3.add(panoramaImage3);

//-----------------------------------------------------------


const panoramaImage4 = new PANOLENS.ImagePanorama("image4.jpeg");
const imageContainer4 = document.querySelector(".image-container4");

const viewer4 = new PANOLENS.Viewer({
  container: imageContainer4,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

viewer4.add(panoramaImage4);//-----------------------------------------------------------


const panoramaImage5 = new PANOLENS.ImagePanorama("image5.jpeg");
const imageContainer5 = document.querySelector(".image-container5");

const viewer5 = new PANOLENS.Viewer({
  container: imageContainer5,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

viewer5.add(panoramaImage5);

//-----------------------------------------------------------


const panoramaImage6 = new PANOLENS.ImagePanorama("image6.jpeg");
const imageContainer6 = document.querySelector(".image-container6");

const viewer6 = new PANOLENS.Viewer({
  container: imageContainer6,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

viewer6.add(panoramaImage6);

//-----------------------------------------------------------

const panoramaImage7 = new PANOLENS.ImagePanorama("image7.jpeg");
const imageContainer7 = document.querySelector(".image-container7");

const viewer7 = new PANOLENS.Viewer({
  container: imageContainer7,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

viewer7.add(panoramaImage7);

//-----------------------------------------------------------


const panoramaImage8 = new PANOLENS.ImagePanorama("image8.jpeg");
const imageContainer8 = document.querySelector(".image-container8");

const viewer8 = new PANOLENS.Viewer({
  container: imageContainer8,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

viewer8.add(panoramaImage8);

//-----------------------------------------------------------


const panoramaImage9 = new PANOLENS.ImagePanorama("image9.jpeg");
const imageContainer9 = document.querySelector(".image-container9");

const viewer9 = new PANOLENS.Viewer({
  container: imageContainer9,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

viewer9.add(panoramaImage9);

//-----------------------------------------------------------


const panoramaImage10 = new PANOLENS.ImagePanorama("image10.jpeg");
const imageContainer10 = document.querySelector(".image-container10");

const viewer10 = new PANOLENS.Viewer({
  container: imageContainer10,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

viewer10.add(panoramaImage10);

//-----------------------------------------------------------


const panoramaImage11 = new PANOLENS.ImagePanorama("image11.jpeg");
const imageContainer11 = document.querySelector(".image-container11");

const viewer11 = new PANOLENS.Viewer({
  container: imageContainer11,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

viewer11.add(panoramaImage11);

//-----------------------------------------------------------


const panoramaImage12 = new PANOLENS.ImagePanorama("image12.jpeg");
const imageContainer12 = document.querySelector(".image-container12");

const viewer12 = new PANOLENS.Viewer({
  container: imageContainer12,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

viewer12.add(panoramaImage12);

//-----------------------------------------------------------


const panoramaImage13 = new PANOLENS.ImagePanorama("image13.jpeg");
const imageContainer13 = document.querySelector(".image-container13");

const viewer13 = new PANOLENS.Viewer({
  container: imageContainer13,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

viewer13.add(panoramaImage13);

//-----------------------------------------------------------


const panoramaImage14 = new PANOLENS.ImagePanorama("image14.jpeg");
const imageContainer14 = document.querySelector(".image-container14");

const viewer14 = new PANOLENS.Viewer({
  container: imageContainer14,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar:  ['fullscreen'],
});

viewer14.add(panoramaImage14);

//-----------------------------------------------------------


// const panoramaImage15 = new PANOLENS.ImagePanorama("image15.jpeg");
// const imageContainer15 = document.querySelector(".image-container15");

// const viewer15 = new PANOLENS.Viewer({
//   container: imageContainer15,
//   autoRotate: true,
//   autoRotateSpeed: 0.3,
//   controlBar: true,
// });

// viewer15.add(panoramaImage15);
