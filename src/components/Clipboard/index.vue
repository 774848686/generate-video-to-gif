<template>
  <div
    type="primary"
    size="mini"
    class="copyBtn"
    @click="validateEmpty"
    :data-clipboard-text="message"
  ><slot></slot>
  </div>
</template>
<script>
import Clipboard from "clipboard";
import {Toast} from 'vant'
export default {
  props: {
    message: {
      type: String,
      default: ""
    }
  },
  created() {
    var clipboard = new Clipboard(".copyBtn");
    clipboard.on("success", e => {
      console.log('复制信息',this.message)
      Toast("复制成功");
    });
    clipboard.on("error", e => {
      console.log(e,this.message)
     Toast("复制失败");
    });
  },
  methods: {
    validateEmpty() {
      if (!this.message) {
        Toast("当前数据为空，复制失败");
        return;
      }
      this.$emit("copySuccess");
    }
  }
};
</script>
