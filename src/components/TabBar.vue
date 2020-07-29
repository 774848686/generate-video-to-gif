<template>
  <van-tabbar v-model="active" @change="onChange" active-color="#F13536" inactive-color="#BEB9B4">
    <van-tabbar-item v-for="(item,index) in tabList" :key='index'>
      <span>{{item.title}}</span>
      <img slot="icon" slot-scope="props" :src="props.active ? item.inactive : item.active" />
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Array,
      default(){
          return []
      }
    },
    activeindex:{
      type:Number,
      default:0
    }
  },
  data() {
    return {
      active:0
    };
  },
  created(){
    this.active = this.activeindex;
  },
  methods:{
     onChange(index) {
       this.$router.push(this.tabList[index].path)
    }
  },
};
</script>

<style scoped>
.van-tabbar{
    height: 48px;
}
</style>
