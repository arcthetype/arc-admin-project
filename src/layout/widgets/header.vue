<template>
  <div class="arc-ly-header">
    <el-avatar
      class="header-item"
      shape="square"
      size="small"
      :src="avatarUrl"
    ></el-avatar>
    <el-dropdown class="header-item" trigger="click">
      <span class="el-dropdown-link">
        HRDVV 
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <el-button type="text" @click="logout">退出</el-button>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { SET_TOKEN, SET_USER_INFO } from '@/store/types'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      avatarUrl:
        'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
    }
  },
  methods: {
    ...mapMutations('user', [SET_TOKEN, SET_USER_INFO]),
    logout() {
      this.SET_TOKEN(null)
      this.SET_USER_INFO(null)
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style lang="scss">
.arc-ly-header {
  background-color: $main-header-bg;
  height: 100%;
  line-height: $main-header-height;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  user-select: none;
  .header-item {
    margin-right: 8px;
  }
  .el-dropdown-link {
    color: #ffffff;
    cursor: pointer;
    outline: none;
  }
}
</style>
