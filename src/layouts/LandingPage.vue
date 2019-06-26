<template>
  <div class="greeting">
    <div id="wallpaper" v-lazy-load-bg="wallpaper">
      <Logo />
      <div class="hint animated twice tada">scroll down</div>
      <SiteFooter />
    </div>

    <article class="content-container">
      <slot/>
    </article>
  </div>
</template>

<script>
import wallpaper from '@/assets/wallpaper.jpg'
import Logo from '@/components/Logo.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  components: { Logo, SiteFooter },
  data () {
    return { wallpaper }
  }
}
</script>

<style src="@/assets/animations.css"></style>
<style>
.greeting #logo {
  position: absolute;
  top: 0;
  z-index: 1;
  display: block;
  width: 100vw;
  height: 40vh;
  margin-top: 30vh;
  transform: scale(1.0) translate(0, 0);
}
#wallpaper {
  z-index: -1;
  display: block;
  width: 100vw;
  height: 100vh;
  transition: opacity .5s ease-in;
  opacity: .5;
  background: grey url('../assets/wallpaper-preview.jpg') center no-repeat;
  background-size: cover;
}
.index-wrapper {
  height: calc(100vh - 5rem);
}
.hint {
  position: absolute;
  width: 100vw;
  top: 75vh;
  text-align: center;
  color: rgba(255, 255, 255, .65);
  font-weight: bold;
}
#wallpaper.lazy-load-progress { filter: blur(5px) saturate(25%); }
#wallpaper.lazy-load-success { opacity: 1; }

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

#wallpaper > footer {
  position: absolute;
  bottom: 1em;
  width: 97%;
  font-size: 1rem;
  text-align: right;
  color: rgba(255, 255, 255, .6);
}
#wallpaper > footer a {
  color: #41b883;
}
</style>
