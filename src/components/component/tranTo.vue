<template>
  <div class="tranTo">
    <div class="left">
      <span class="iconfont">&#xe628;</span>
      <router-link :to="downItem.path" class="text" name="left">{{downItem.name}}</router-link>
    </div>
    <div class="right">
      <router-link :to="upItem.path" class="text" name="right">{{upItem.name}}</router-link>
      <span class="iconfont">&#xe625;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tranTo',
  props: {},
  components: {},
  data () {
    return {
      upItem: {
        name: '', path: ''
      },
      downItem: {
        name: '', path: ''
      },
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
    const list = this.$router.options.routes[1].children[0].children[0].children.slice(2)
    let nowIndex = list.findIndex(item =>
      item.path === this.$route.path);
    if (nowIndex === 0) {
      this.upItem.name = list[nowIndex + 1].name
      this.upItem.path = list[nowIndex + 1].path
      this.downItem.name = '主页'
      this.downItem.path = '/home'
    } else if (nowIndex === list.length - 1) {
      this.downItem.name = list[nowIndex - 1].name
      this.downItem.path = list[nowIndex - 1].path
      this.upItem.name = '主页'
      this.upItem.path = '/home'
    } else {
      this.upItem.name = list[nowIndex + 1].name
      this.upItem.path = list[nowIndex + 1].path
      this.downItem.name = list[nowIndex - 1].name
      this.downItem.path = list[nowIndex - 1].path
    }
  },
  computed: {
  },
}
</script>
<style lang="scss" scoped>
  .tranTo {
    border-top: 1px solid #eee;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    margin: 20px 50px;
   .left {
         display: flex;

   }
       .text {
    color:  rgb(0, 184, 61);
    }
        .iconfont {
      margin: 0 5px;
   
    }
   .right {
    display: flex;
   }
  }
</style>
