<template>
  <nav class="newsletter-navigation">
    <g-link :to="prev" v-if="prev">← {{ prev.title }}</g-link>
    <g-link to="/newsletters">overview</g-link>
    <g-link :to="next" v-if="next">{{ next.title }} →</g-link>
  </nav>
</template>

<static-query>
query AllNewsletters {
  contentful: allContentfulNewsletter (sortBy: "date", order: DESC) {
    edges {
      node {
        title
        path
      }
    }
  }
  markdown: allMarkdownNewsletter {
    edges {
      node {
        title
        path
      }
    }
  }
}
</static-query>

<script>
export default {
  computed: {
    allNewsletters () {
      const newNewsletters = this.$static.contentful.edges.map(e => e.node)
      const oldNewsletters = this.$static.markdown.edges.map(e => e.node)
      oldNewsletters.reverse()
      return [...newNewsletters, ...oldNewsletters]
    },
    currentNewsletterIndex () {
      const path = this.$page.post.path
      return this.allNewsletters.findIndex(nl => nl.path === path)
    },
    prev () {
      return this.allNewsletters[this.currentNewsletterIndex - 1]
    },
    next () {
      return this.allNewsletters[this.currentNewsletterIndex + 1]
    }
  }
}
</script>
