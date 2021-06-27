<template>
  <div class="Form">
    <div class="item_container">
      <div class="item_title">表单</div>
      <div class="item_main">输入一下命令可以安装 peak-ui</div>
      <div class="code">sdad</div>
    </div>
    <tranTo>
      <router-link slot="left" to="/input">Input</router-link>
      <router-link slot="right" to="/notice">Notice</router-link>
    </tranTo>
  </div>
</template>
<script>
import tranTo from '@/components/component/tranTo'
export default {
  name: 'Form',
  props: {},
  components: { tranTo },
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
 @import url('~@/assets/styles/page.css');
</style>
