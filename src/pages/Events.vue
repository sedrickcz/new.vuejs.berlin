<template>
  <Layout>
    <h1>{{ title }}</h1>
    <rich-text-renderer :document="content" />
    <ol>
      <li v-for="event in events">
        <g-link :to="event.path">{{ event.title }}</g-link>:
        ({{ event.date }}, {{ event.talks.length }} talks)
      </li>
    </ol>
  </Layout>
</template>

<page-query>
query Events {
  page: contentfulIndexPage (id: "3ZCL9VRLFc6c2sHen84RiN") {
    title
    content
  }
  events: allContentfulEvent {
    edges {
      node {
        title
        path
        date
        talks {
          id
        }
      }
    }
  }
}
</page-query>

<script>
import RichTextRenderer from '@/lib/contentful-rich-text-vue-renderer'

export default {
  metaInfo () {
    return {
      title: 'Events'
    }
  },
  components: { RichTextRenderer },
  computed: {
    title () {
      return this.$page.page.title
    },
    content () {
      return this.$page.page.content
    },
    events () {
      return this.$page.events.edges.map(edge => edge.node)
    }
  }
}
</script>

<style scoped>
ol {
  list-style-type: none;
  padding: 0;
}
</style>
