<template>
  <div id="home">
    <div class="upload">
      <van-uploader
        accept="video/*"
        v-model="fileList"
        multiple
        :after-read="afterRead"
        max-count="1"
      />
    </div>
    <div class="my-video" v-show="videoUrl" @click="playerControl">
      <div class="pause" v-show="isPlay"></div>
      <video ref="player" :src="videoUrl" autoplay></video>
      <img v-show="isPlay" src="../../assets/images/pause.png" alt />
    </div>
    <div class="slide-setting">
      <van-slider v-model="slideValue" :min="0" :max="10">
        <template #button>
          <div class="custom-button">{{ slideValue }}</div>
        </template>
      </van-slider>
    </div>
    <div class="progress">
      <van-circle v-model="currentRate" :rate="0" :speed="100" :text="text" />
    </div>
    <div class="result">
      <img :src="transformImg" alt />
    </div>
    <div>
      <img :src="item" v-for="(item,index) in imgList" :key="index" alt="">
    </div>
    <div class="to-gif">
      <van-button type="info" @click="toGenerateGif">生成GIF</van-button>
    </div>
  </div>
</template>

<script>
import generateGif from "@/utils/toGif";
import { captureImage } from "@/utils/drawImage";
export default {
  components: {},
  data() {
    return {
      fileList: [],
      videoUrl: "",
      isPlay: false,
      slideValue: 0,
      currentRate: 0,
      transformImg: "",
      toGif: null,
      imgList:[]
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    },
  },
  methods: {
    afterRead(file) {
      file.status = "uploading";
      file.message = "上传中...";

      setTimeout(() => {
        file.status = "success";
        file.message = "上传";
        this.videoUrl = file.content;
        this.toGif = this.generateGif();
      }, 1000);
    },
    playerControl() {
      this.isPlay ? this.$refs.player.play() : this.$refs.player.pause();
      this.isPlay = !this.isPlay;
    },
    generateGif() {
      let _this = this;
      return generateGif({
        width: 600,
        height: 800,
        video: this.$refs.player,
        sampleInterval: 100,
        progressFn(value) {
          _this.currentRate = value;
        },
        finishFn(data) {
          _this.transformImg = data.link;
          console.log(data);
        },
      });
    },
    toGenerateGif() {
      this.toGif.start();
    },
  },
  created() {},
  mounted() {
    this.$refs.player.addEventListener('click',()=>{
      this.imgList = captureImage(this.$refs.player);
    })
  },
};
</script>

<style lang="scss" scoped>
#home {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f9f7fa;
  overflow-y: scroll;
  .upload {
    margin-top: 20px;
  }
  .my-video {
    position: relative;
    width: 100%;
    height: 500px;
    video {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100px;
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 3;
      transform: translate(-50%, -50%);
    }
    .pause {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 2;
      background: rgba(0, 0, 0, 0.5);
    }
  }
  .slide-setting {
    width: 500px;
    margin-left: 50px;
    margin-top: 50px;
    .custom-button {
      width: 52px;
      color: #fff;
      font-size: 20px;
      line-height: 36px;
      text-align: center;
      background-color: #1989fa;
      border-radius: 100px;
    }
  }
}
</style>