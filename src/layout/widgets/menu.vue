<template>
  <div class="arc-ly-menu">
    <el-menu
      default-active="2"
      @open="handleOpen"
      @close="handleClose"
      text-color="#d3dce6"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.arc-ly-menu {
  .el-menu {
    background: $main-aside-bg;
    border: 0 none;
  }
  .el-submenu .el-menu-item,
  .el-menu-item {
    min-width: $menu-min-width;
  }
  .el-submenu__title:hover,
  .el-submenu__title:focus {
    outline: none;
    background-color: transparent;
  }
  .el-menu-item:hover,
  .el-menu-item:focus {
    outline: none;
    background-color: $menu-item-hover;
  }
  .el-menu.el-menu--inline {
    background: $menu-inline-item;
  }
}
</style>
