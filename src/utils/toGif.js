import GIF from 'gif.js.optimized';
const generateGif = (params) => {
    let {
        width,
        height,
        video,
        sampleInterval,
        progressFn,
        finishFn
    } = params;
    let startTime = null,
        timer = null,
        capture=null;
    const gif = new GIF({
        workers: 2,
        workerScript: 'static/js/gif.worker.js',
        width,
        height
    });
    gif.on('start', function () {
        return startTime = Date.now();
    });
    gif.on('progress', function (p) {
        return progressFn((Math.round(p * 100)));
    });
    gif.on('finished', function (blob) {
        var delta, img;
        finishFn({
            link: URL.createObjectURL(blob),
            size: `${((blob.size / 1000).toFixed(2))}kb`
        });
    });
    video.addEventListener('canplay', function () {
        gif.width = this.videoWidth;
        gif.height = this.videoHeight;
        return  gif.abort();
    });
    capture = function () {
        return gif.addFrame(video, {
            copy: true,
            delay: sampleInterval
        });
    };
    video.addEventListener('play', function () {
        
        
    });
    gif.start = ()=>{
        clearInterval(timer);
        return gif.render();
    }
    video.addEventListener('ended', function () {
        
    });
    video.addEventListener("timeupdate",function(){
        var timeDisplay;
        timeDisplay = Math.floor(video.currentTime);
        if(timeDisplay == 0){
            clearInterval(timer);
            return timer = setInterval(capture, sampleInterval);
        }
    },false);
    return gif;
}
export default generateGif;