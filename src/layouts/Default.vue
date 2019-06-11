<template>
  <div class="layout" :class="{'with-menu': withMenu}">
    <Header :title="title" @logo-click="withMenu = !withMenu" :withMenu="withMenu" />
    <SideBar @click="withMenu = false" :menu-hint="hintMenu" />

    <article class="content-container">
      <slot/>
    </article>
  </div>
</template>

<script>
import Header from '@/components/Header'
import SideBar from '@/components/SideBar.vue'

export default {
  props: {
    title: String
  },
  components: { Header, SideBar },
  data () {
    return {
      withMenu: false,
      hintMenu: true
    }
  },
  watch: {
    $route () {
      // close menu on route change
      this.withMenu = false
    }
  },
  mounted () {
    if (localStorage.getItem('no-menu-hint')) this.hintMenu = false
    else localStorage.setItem('no-menu-hint', 1)
  }
}
</script>

<style>
.layout {
  transition: transform .2s ease;
  transform: translate(0, 0);
}
.layout.with-menu {
  transform: translate(260px, 0);
}
</style>
