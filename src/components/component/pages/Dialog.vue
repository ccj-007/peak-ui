<template>
  <div class="item_container">
    <div class="item_title">{{$route.meta.title}}</div>
    <div class="item_main"></div>
    <!-- 范例 -->
    <p-button @click="openShowDialog" type="success">点击我，打开对话框</p-button>
    <p-dialog :visible.sync="visible"></p-dialog>
    <!-- markdown -->
    <div class="item_code" v-highlight v-html="value"></div>
    <tranTo></tranTo>
  </div>
</template>
<script>
import tranTo from '@/components/component/tranTo'
import pDialog from '@/components/component/package/pDialog'
import marked from 'marked'

export default {
  name: 'Button',
  props: {
  },
  components: {
    tranTo,
    pDialog
  },
  data () {
    return {
      value: `
    <p-button @click="openShowDialog" type="success" width='50%'>点击我，打开对话框</p-button>
    <p-dialog :visible.sync="visible"></p-dialog>
    `,
      visible: false
    }
  },
  methods: {
    openShowDialog () {
      this.visible = true
    }
  },
  created () {
  },
  mounted () {
    this.value = marked(this.value)
  },
  computed: {
  },
}
</script>
<style lang="scss" scoped>
 @import url('~@/assets/styles/page.css');

</style>
