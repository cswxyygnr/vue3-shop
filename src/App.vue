<script setup>
import {ref,watch} from 'vue'
document.addEventListener('onbeforeunload',()=>{
  localStorage.removeItem('userInfo');
})
</script>

<template>
  <!-- 一级路由出口组件 -->
  <RouterView />
</template>

<style scoped lang="scss">

</style>