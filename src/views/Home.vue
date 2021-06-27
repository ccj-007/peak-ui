<template>
  <div class="Home">
    <HeaderTop></HeaderTop>
    <transition name="router-fade">
      <router-view />
    </transition>
  </div>
</template>
<script>
import HeaderTop from '@/components/HeaderTop.vue'
export default {
  name: 'Home',
  props: {},
  components: {
    HeaderTop,
  },
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
  }
}
</script>
<style lang="scss" scoped>
@import url('~@/assets/styles/transition.scss');

</style>
