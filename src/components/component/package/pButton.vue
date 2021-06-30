<template>
  <button :class="[`${type}`,`${size}`,{'is-plain':plain}]" @click="handleClick">
    <i :class="`iconfont ${icon}`" v-if="icon"></i>
    <slot></slot>
  </button>
  <!-- <slot name="primary">
      <button class="primary default">通用</button>
    </slot>
    <slot name="success">
      <button class="success default">成功</button>
    </slot>
    <slot name="warning">
      <button class="warning default">警告</button>
  </slot>-->
</template>
<script>
export default {
  name: 'pButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }

  },
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
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
button {
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #fff;
  margin-right: 10px;
}
button:hover {
  opacity: .8;
}
.default {
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #fff;
}
.primary {
  background-color: #ff6b00;
  border: none;
  color: #fff;
}
.info {
  background-color: #409EFF;
    border: none;
  color: #fff;
}
.success {
  background-color: #67C23A;
    border: none;
  color: #fff;
}
.warning {
  background-color: #E6A23C;
    border: none;
  color: #fff;
}
.danger {
  background-color: #F56C6C;
    border: none;
  color: #fff;
}

// 朴素按钮样式
.is-plain {
  border-radius: 20px;
}
.default .is-plain{
  &:hover,
  &:focus{
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.primary.is-plain{
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus{
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.success.is-plain{
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus{
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.info.is-plain{
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus{
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.warning.is-plain{
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus{
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.danger.is-plain{
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus{
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

//箭头
.iconfont {
  padding-right: 5px;
}

//大小
.mini {
  width: 80px;
  height:30px;
  font-size: 5px;
}
.large {
  width: 150px;
  height: 50px;
}

</style>
