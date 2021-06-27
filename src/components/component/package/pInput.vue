<template>
  <div class="Input">
    <input :value="value" type="text" />
    {{value}}
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
      value: '输入内容!',
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
