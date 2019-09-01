<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar>
      <TabbarItem path="/home" itemColor="#f10180">
        <span class="icon-home" slot="item-icon"></span>
         <div slot="item-text" class="item-font">
           首页
         </div>
      </TabbarItem>
      <TabbarItem path="/category" itemColor="#f10180">
        <span class="icon-price-tags" slot="item-icon"></span>
        <div slot="item-text" class="item-font">
          分类
        </div>
      </TabbarItem>
      <TabbarItem path="/cart" itemColor="#f10180">
        <span class="icon-cart" slot="item-icon"></span>
        <div slot="item-text" class="item-font">
          购物车
        </div>
      </TabbarItem>
      <TabbarItem path="/profile" itemColor="#f10180">
        <span class="icon-users" slot="item-icon"></span>
        <div slot="item-text" class="item-font">
          我的
        </div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
  import Tabbar from './components/tabbar/Tabbar'
  import TabbarItem from './components/tabbar/TabbarItem'
export default {
  name: 'App',
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style>
  @import "./assets/css/base.css";
  @import "./components/tabbar/style.css";
</style>
