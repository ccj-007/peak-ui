<template>
  <div class="Input">
    <div class="item_container">
      <div class="item_title">输入框</div>
      <div class="item_main">输入</div>
      <div class="code">sdad</div>
    </div>
    <tranTo>
      <router-link slot="left" to="/button">Button</router-link>
      <router-link slot="right" to="/form">Form</router-link>
    </tranTo>
  </div>
</template>
<script>
import tranTo from '@/components/component/tranTo'
export default {
  name: 'Input',
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
