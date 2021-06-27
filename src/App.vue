<template>
  <div id="app">
    <transition name="router-fade">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
@import url('~@/assets/styles/transition.scss');
</style>
