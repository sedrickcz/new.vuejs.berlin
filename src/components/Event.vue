<template>
  <div class="event-card">
    <header :style="headerStyle">
      <h1 v-show="!noTitle">{{ title }}</h1>
      <small>{{ date }} @ {{ address }}</small>
    </header>

    <p>{{ details }}</p>

    <transition-group name="grow" tag="ul" class="talks-list">
      <li v-for="(talk, i) in talks" v-if="expanded"
      :key="talk.id"
      :style="{transitionDelay: `${i * 100}ms`}"
      >
        <b>{{ talk.title }}</b>
        <span v-show="talk.speakers.length">
          by {{ talk.speakers.map(s => s.name).join(', ') }}
        </span>
        <p>{{ talk.details }}</p>
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
    talks: Array,
    noTitle: Boolean,
    expandTalks: Boolean
  },
  data () {
    return {
      expanded: false
    }
  },
  mounted () {
    this.expanded = !!this.expandTalks
  },
  computed: {
    headerStyle () {
      return {
        backgroundImage: `url(${this.headerImage.file.url})`
      }
    }
  }
}
</script>

<style>
.event-card > header {
  padding-top: 56.25%;
  background-size: contain;
  background-repeat: no-repeat;
}
.event-card > button {
  position: relative;
  display: block;
  cursor: pointer;
  width: 10em;
  font-size: .8em;
  margin: 0 auto 3em;
  color: #3aa676;
  border: none;
  border-left: 1px solid #AAA;
  border-right: 1px solid #AAA;
  background-color: white;
}
.event-card > button::after {
  content: "";
  position: absolute;
  left: calc(-1 * (320px - 5em));
  top: .85em;
  width: 640px;
  border-bottom: 1px solid #AAA;
  z-index: -1;
}
.event-card > ul.talks-list {
  margin: 0;
  overflow: hidden;
  transition: height 350ms ease-in-out;
}
.event-card > ul.talks-list > li {
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
