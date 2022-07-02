<!--
 * @Title: gen-demo-page.vue
 * @Description:
 * @Author: dscloudy 小云哥
 * @Date: 2022/6/30 10:48
 *     Date          UpdateBy        Description
 * 2022/6/30 10:48   dscloudy    Create File.
 -->
<template>
  <div class="gen-demo-page">
    <div class="header">
      <div class="title">HERO Low Code - {{$route.meta['title']}}</div>
      <div class="header-center">
        <div class="f1"></div>
        <div>
          <slot name="header"></slot>
        </div>
      </div>
      <div class="more">
        <nav-list></nav-list>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { defineProps } from 'vue'
import NavList from '@/components/nav-list.vue'

// defineProps({
//   title: {
//     type: String,
//     default: ''
//   }
// })
</script>

<style scoped lang="scss">
@import "~@/scss/common.scss";

.gen-demo-page {
  width: 100%;
  height: 100%;
  min-height: 800px;
  overflow: hidden;
  background-color: #fff;
  @extend .fc;

  .header {
    border-bottom: 1px solid $border-color;
    @extend .fr;
    height: 50px;
    line-height: 50px;

    .title {
      width: $leftWidth;
      text-align: center;
      font-weight: 800;
    }

    .header-center {
      box-sizing: border-box;
      padding: 0 20px;
      @extend .f1;
      border-right: 1px solid $border-color;
      border-left: 1px solid $border-color;
      @extend .fr;
    }

    .more {
      width: $rightWidth;
      text-align: center;
    }
  }

  .content {
    @extend .f1;
    @extend .fr;

    .left {
      width: 300px;
      box-sizing: border-box;
    }

    .right {
      width: 350px;
    }

    .center {
      @extend .f1;
      @extend .fc;
      border-left: 1px solid $border-color;
      border-right: 1px solid $border-color;
    }
  }
}
</style>
