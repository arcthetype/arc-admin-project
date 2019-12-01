<template>
  <div class="arc-ly-menu" ref="arcMenu">
    <el-menu
      default-active="2"
      @open="handleOpen"
      @close="handleClose"
      :collapse="false"
      text-color="#d3dce6"
    >
      <li class="el-submenu">
        <div class="el-submenu__title" style="color: rgb(211, 220, 230);">
          <img src="../../assets/images/logo.png" alt="" class="logo" />
          <span class="menu-title--text">Archetype</span>
        </div>
      </li>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="1-2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="1-3">
          <i class="el-icon-menu"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="2-1">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="2-3">
          <i class="el-icon-menu"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  mounted() {
    this.setMenuHeight()
  },
  methods: {
    setMenuHeight() {
      this.$refs.arcMenu.style.height = window.innerHeight - 36 + 'px'
    },
    handleOpen() {
      console.log('open')
    },
    handleClose() {
      console.log('close')
    }
  }
}
</script>

<style lang="scss">
.arc-ly-menu {
  .logo {
    width: 30px;
    height: 30px;
    margin: 0 5px 0 0;
    vertical-align: middle;
    text-align: center;
  }
  .menu-title--text {
    font-size: 16px;
    font-weight: 500;
  }
  .el-menu {
    background: $main-aside-bg;
    min-width: $menu-min-width;
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
