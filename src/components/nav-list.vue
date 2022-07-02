<!--
 * @Title: nav-list.vue
 * @Description:
 * @Author: dscloudy 小云哥
 * @Date: 2022/6/30 18:08
 *     Date          UpdateBy        Description
 * 2022/6/30 18:08   dscloudy    Create File.
 -->
<template>
  <div>
    <el-button size="small"
               v-for="item in navConfigList"
               :key="item.path"
               @click="$router.replace(item.path)"
               link
               :type="$route.path === item.path ? 'primary' : 'default'"
    >{{ item.title }}</el-button>
  </div>
</template>

<script lang="ts" setup>
import { getNavConfigList } from '@/common/nav-config'

const navConfigList = getNavConfigList()
</script>

<style scoped lang="scss">
</style>
