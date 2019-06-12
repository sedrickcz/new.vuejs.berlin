<template>
  <Event v-bind="event" />
</template>

<script>
import Event from './Event'

export default {
  components: { Event },
  props: {
    title: String,
    date: String,
    address: String,
    headerImage: Object,
    details: String,
    talks: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    event () {
      const { title, date, address, details } = this
      const headerImage = {
        ...this.headerImage.fields
      }
      const talks = this.talks.map(talk => {
        const speakers = (talk.speakers || []).map(s => ({...s.fields}))
        return {
          ...talk.fields,
          speakers
        }
      })

      return { title, date, address, headerImage, details, talks }
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
