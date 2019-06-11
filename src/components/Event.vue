<template>
  <div class="event-card">
    <header :style="{backgroundImage: headerImage}">
      <h1>{{ title }}</h1>
      <small>{{ date }} @ {{ address }}</small>
    </header>

    <p>{{ details }}</p>

    <transition-group name="grow" tag="ul" class="talks-list">
      <li v-for="(talk, i) in talks" v-if="expanded"
      :key="talk.sys.id"
      :style="{transitionDelay: `${i * 100}ms`}"
      >
        <b>{{ talk.fields.title }} by {{ talk.fields.speakers[0].fields.name }}</b>
        <p>{{ talk.fields.details }}</p>
      </li>
    </transition-group>

    <transition name="fade">
      <button v-if="expanded" @click="expanded = false">show less</button>
      <button v-else @click="expanded = true">expand {{ talks.length }} talks</button>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    date: String,
    address: String,
    headerImage: Object,
    details: String,
    talks: Array
  },
  data () {
    return {
      expanded: false
    }
  }
}
</script>

<style>
.talks-list {
  overflow: hidden;
  transition: height 350ms ease-in-out;
}
.talks-list > li {
  display: block;
  background-color: white;
}

.fade-enter-active, .fade-leave-active { transition: opacity .5s; }
.fade-enter, .fade-leave-to { opacity: 0; }

.grow-enter, .grow-leave-to { opacity: 0; }
.grow-leave, .grow-enter-to { opacity: 1;}
.grow-enter-active, .grow-leave-active {
  transition: opacity 400ms ease-in-out;
}
.grow-enter-active { transition-delay: 100ms; }
</style>
