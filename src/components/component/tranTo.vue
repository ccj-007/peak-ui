<template>
  <div class="tranTo">
    <div class="left">
      <span class="iconfont">&#xe628;</span>
      <slot class="text" name="left"></slot>
    </div>
    <div class="right">
      <slot class="text" name="right"></slot>
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
  .tranTo {
    border-top: 1px solid #eee;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    margin: 0 50px;
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
