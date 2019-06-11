<template>
  <nav :style="{width: `${width}px`, left: `-${width}px`}">
    <router-link class="sidebar-home" to="/">
      back to start
    </router-link>
    <ol class="sidebar">
      <label>
        <router-link to="/newsletters">Newsletters</router-link>
      </label>
      <li v-for="item in newsletters">
        <router-link :to="item.path">{{ item.title }}</router-link>
      </li>
    </ol>
    <ol class="sidebar">
      <label>
        <router-link to="/events">Events</router-link>
      </label>
      <li v-for="item in events">
        <router-link :to="item.path">{{ item.title }}</router-link>
      </li>
    </ol>
  </nav>
</template>

<static-query>
query MenuItems {
  newsletters: allContentfulNewsletter {
    edges {
      node {
        path
        title
      }
    }
  }
  events: allContentfulEvent {
    edges {
      node {
        path
        title
      }
    }
  }
}
</static-query>

<script>
import Logo from './Logo.vue'

export default {
  components: { Logo },
  props: {
    width: {
      type: Number,
      default: 260
    }
  },
  computed: {
    newsletters () {
      return this.$static.newsletters.edges.map(edge => edge.node)
    },
    events () {
      return this.$static.events.edges.map(edge => edge.node)
    }
  }
}
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: -260px;
  display: block;
  width: 260px;
  height: 100vh;
  background: white;
}
ol.sidebar {
  display: block;
  list-style-type: none;
  padding: 0 0 0 1em;
  line-height: 1.2em;
}
ol.sidebar > label {
  font-weight: bold;
  line-height: 2em;
}
ol.sidebar > label > a {
  color: #DDD;
}
.sidebar-home {
  display: block;
  height: 4rem;
  padding: .5rem 1rem;
}
.sidebar-home > svg#logo {
  width: 3rem;
  height: 3rem;
}
</style>
