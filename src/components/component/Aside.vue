<template>
  <div class="Aside">
    <div class="left">
      <div class="big_title">
        <div class="title">开发指南</div>
        <router-link class="mini_title" to="/brief">简介</router-link>
        <router-link class="mini_title" to="/install">安装</router-link>
      </div>
      <div class="big_title">
        <div class="title">基础组件</div>
        <router-link class="mini_title" to="/button">按钮 Button</router-link>
        <router-link class="mini_title" to="/input">表单 Input</router-link>
        <router-link class="mini_title" to="/form">表格 Form</router-link>
        <router-link class="mini_title" to="/notice">提示 Notice</router-link>
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
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
  },
  computed: {
  },
}
</script>
<style lang="scss" scoped>
  .Aside {
    display: flex;
    justify-content: space-between;
    height: 800px;
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
