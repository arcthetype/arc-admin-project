<template>
  <div class="arc-ly-main">
    <el-container class="ly-wraper">
      <el-container class="ly-middle">
        <el-aside width="auto">
          <ly-menu />
        </el-aside>
        <el-container class="ly-main">
          <el-header height="45px">
            <ly-header />
          </el-header>
          <el-main>
            <!-- <transition name="el-fade-in-linear"> -->
            <router-view :key="$route.fullPath" />
            <!-- </transition> -->
          </el-main>
        </el-container>
      </el-container>
      <el-footer height="36px">
        <ly-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import LyFooter from './widgets/footer'
import LyHeader from './widgets/header'
import LyMenu from './widgets/menu'
export default {
  components: {
    LyFooter,
    LyHeader,
    LyMenu
  }
}
</script>

<style lang="scss">
.arc-ly-main {
  height: 100%;
  background: #ffffff;
  display: flex;
  .el-header,
  .el-footer,
  .el-aside,
  .el-main {
    padding: 0;
  }
  .el-aside {
    background: $main-aside-bg;
    max-width: $menu-min-width;
  }
  .ly-middle {
    overflow: hidden;
  }
}
</style>
