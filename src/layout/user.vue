<template>
  <div class="arc-ly-user">
    <router-view :key="$route.fullPath" />
  </div>
</template>
<style lang="scss">
.arc-ly-user {
  height: 100%;
  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
