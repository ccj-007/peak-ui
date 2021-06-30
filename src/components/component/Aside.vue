<template>
  <div class="Aside">
    <div class="left">
      <div class="big_title">
        <div class="title">开发指南</div>
        <router-link class="mini_title toggle-title" to="/brief">简介</router-link>
        <router-link class="mini_title toggle-title" to="/install">安装</router-link>
      </div>
      <div class="big_title">
        <div class="title">基础组件</div>
        <router-link
          :key="index"
          :to="item.path"
          class="mini_title toggle-title"
          v-for="(item,index) in componentList"
        >{{item.meta.title}} {{item.meta.english}}</router-link>
      </div>
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Aside',
  props: {},
  components: {},
  data () {
    return {
      componentList: []
    }
  },
  methods: {
  },
  created () {
    this.componentList = this.$router.options.routes[1].children[0].children[0].children.slice(2)

  },
  mounted () {
    window.addEventListener('scroll', () => {
      // 监听滚动事件
      var t = document.documentElement.scrollTop
      //获取要操作元素的id
      var scrollUp = document.getElementById('borderTop');
      console.log(t);
      //判断滚动条高度，设置事件
      if (t > 20) {
        scrollUp.style.boxShadow = ''
        scrollUp.style.boxShadow = '0 0px 0px #ccc'
      } else {
        scrollUp.style.borderBottom = ''
        scrollUp.style.boxShadow = '0 2px 6px #ccc'
      }
    })
  },
  computed: {
  },
}
</script>
<style lang="scss" scoped>
  .Aside {
    display: flex;
    justify-content: space-between;
     .left {
    width: 20%;
    border-right: 1px solid #ccc;
    padding-top: 20px;
    line-height: 24px;
    .big_title {
      line-height: 40px;
      margin-bottom: 30px;
    .title {
      font-size: 20px;
      font-weight: 600;
      margin: 0 30px;
      border-bottom: 1px solid rgb(0, 184, 61);
    }
    .mini_title {
      text-indent: 30px;
      display: block;
    }
    .mini_title:hover {
      background-color: #eee;
      border-left: 4px solid rgb(0, 184, 61);
    }
    }
  }
  .right {
     width: 80%;
  }

  }
</style>
