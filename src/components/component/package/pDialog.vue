<template>
  <transition name="dialog-fade">
    <div class="dialog_wrapper" v-show="visible">
      <div :style="{width:width}" class="dialog">
        <div class="dialog_header">
          <span class="dialog_title">
            <slot>{{title}}</slot>
          </span>
          <button class="dialog_headerbtn">
            <i class="icon-close"></i>
          </button>
        </div>
        <div class="dialog_body">
          <span name="info">
            <slot>信息展示</slot>
          </span>
        </div>
        <div class="dialog_footer">
          <p-button @click="closeDialog">取消</p-button>
          <p-button @click="closeDialog" type="success">确定</p-button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'pDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
  },
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    closeDialog () {
      this.$emit('update:visible', false)
    },
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
.dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,0.5);
  .dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &_header{
      padding: 20px 20px 10px;
      .dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .dialog_headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .icon-close{
          color:909399
        }
      }
    }
    &_body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .one-button:first-child{
        margin-right: 20px;
      }
    }
  }
}


.dialog-fade-enter-active{
  animation: fade .3s;
}
.dialog-fade-leave-active{
  animation: fade .3s reverse;
}
@keyframes fade{
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
