let scale = 0.3,
    imgList = [];
let canvas = document.createElement("canvas");
window.requestAnimFrame = (function (callback) {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
export const captureImage = (video) => {
    canvas.width = video.videoWidth * scale;
    canvas.height = video.videoHeight * scale;
    video.addEventListener("timeupdate",function(){
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        imgList.push(canvas.toDataURL("image/png"));
    },false);
    return imgList;
}