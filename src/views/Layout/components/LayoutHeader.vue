<script setup>
import HeaderCart from './HeaderCart.vue'
import {useCategoryStore} from '@/stores/category.js'

const category = useCategoryStore();


</script>

<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>

      <ul>
        <li><router-link to='/'>首页</router-link></li>
        <li v-for="item in category.ulList" :key="item.id"><router-link active-class="active" :to='`/category/${item.id}`'>{{ item.name }}</router-link></li>
      </ul>

      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <!-- 头部购物车 -->
      <div class="cart">
        <HeaderCart></HeaderCart>
      </div>
      
    </div>
</header>
</template>


<style scoped lang='scss'>
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
    .active{
      color: $sucColor;
      border-bottom: 1px solid $sucColor;
    }
    ul{
      display: flex;
      list-style: none;
      justify-content: space-between;
      li{
        margin: 0 20px;
        &:hover{
          background-color: gray;
        }
      }
    }
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }


  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>