<template>
  <div class="pNotice">
    <div class="peak_notice" v-if="show">
      <div class="peak_title">提示</div>

      <div class="peak_content">{{value}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pNotice',
  props: {
    value: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
    console.log(this.show);

  },
  mounted () {
  },
  computed: {
  },
}
</script>
<style lang="scss" scoped>
 @import url('~@/assets/styles/page.css');
.peak_notice {
  position: fixed;
  right: 10px;
  top: 80px;
  overflow: hidden;
  width: 300px;
  padding: 0 20px 20px 20px;
  background-color: #fff;
  box-shadow: 2px 4px 10px #ccc;
  z-index: 34;
  border-radius: 10px;
  white-space:normal;//设置文字换行
 word-wrap : break-word;//设置数字强制换行
  .peak_title {
    padding-top: 10px;
  }
  .peak_content  {
    font-size: 12px;
    padding-top: 10px;
  }
}
</style>
