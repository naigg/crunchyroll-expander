const SIZE = {
    LARGE: 'large',
    ORIGINAL: 'original'
};
const BUTTON_VALUES = {
    LARGE: 'INC',
    ORIGINAL: 'DEC'
}
var current_size = SIZE.ORIGINAL;

// Button inside the video
var buttonToAdd = document.getElementsByClassName('ellipsis');

var button = document.createElement('button');

button.className = 'CRExp-button';
button.innerHTML = BUTTON_VALUES.LARGE;
button.onclick = function() {
    // Video container
    var videoContainer = document.getElementById('showmedia_video_box');
    var sideBarElement = document.getElementById('sidebar');

    if (current_size === SIZE.LARGE) {
        current_size = SIZE.ORIGINAL;
        sideBarElement.classList.remove('CRExp-sidebar');
        videoContainer.classList.remove('CRExp-video-container');
        button.innerHTML = BUTTON_VALUES.LARGE;
    } else if (current_size === SIZE.ORIGINAL) {
        current_size = SIZE.LARGE;
        sideBarElement.classList.add('CRExp-sidebar', 'CRExp-animation');
        videoContainer.classList.add('CRExp-video-container', 'CRExp-animation');
        button.innerHTML = BUTTON_VALUES.ORIGINAL;
    }
}

// Add the button to the DOM (first h1) inserting it before the titles
buttonToAdd[0].insertBefore(button, buttonToAdd[0].childNodes[0]);
