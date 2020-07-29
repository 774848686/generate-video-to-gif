<template>
  <div class="tab-scroll">
    <van-tabs>
      <van-tabs v-model="active" scrollspy sticky>
        <van-tab v-for="(item,index) in tabList" :title="item.name" :key="index">
          <div class="scroll-content">
            <div class="title">{{item.name}}</div>
            <div class="grid">
              <div
                class="grid-item"
                v-for="(subItem,index) in item.details"
                :key="index"
                @click="tolink(item.categoryId,subItem)"
              >
                <img :src="subItem.icon" alt />
                <p>{{subItem.name}}</p>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </van-tabs>
  </div>
</template>
<script>
import { reportLog } from "@/utils";
export default {
  name: "TabSwiper",
  props: ["tabList"],
  data() {
    return {
      active: 0
    };
  },
  methods: {
    /**
     * tab 点击切换
     */
    tabSwitch(index) {},
    tolink(cid, row) {
      reportLog("3", {
        categoryId: cid,
        ...row,
        ...window.common.Gdata
      }).then(res => {
        window.location.href = row.url;
      });
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
/deep/ .van-tabs--line .van-tabs__wrap {
  height: auto;
}
/deep/ .van-tabs__nav--line {
  padding-bottom: 0;
}
/deep/ .van-tabs__line {
  bottom: 0;
}
.tab-scroll {
  box-sizing: border-box;
  .scroll-content {
    padding: 0 30px;
    background: #ffffff;
    .title {
      color: #98ac9f;
      font-size: 32px;
      margin-bottom: 20px;
      padding-top: 15px;
    }
    .grid {
      display: flex;
      flex-wrap: wrap;
      .grid-item {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 25px;
        img {
          width: 90px;
          height: 90px;
          border-radius: 100%;
          margin-bottom: 15px;
        }
        p {
          font-size: 30px;
          opacity: 0.75;
        }
      }
    }
  }
}
</style>