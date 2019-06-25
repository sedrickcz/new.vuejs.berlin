<template>
  <Layout>
    <h1>{{ title }}</h1>
    <rich-text-renderer :document="content" />
    <ol>
      <li v-for="newsletter in newsletters">
        <g-link :to="newsletter.path">{{ newsletter.title }}</g-link>:
        <template v-if="newsletter.event">
        {{ newsletter.event.title }}
        ({{ niceDate(newsletter.event.date) }},
        {{ newsletter.event.talks.length }} talks)
        </template>
        <template v-else>
        This newsletter is not associated with particular event.
        </template>
      </li>
    </ol>
  </Layout>
</template>

<page-query>
query Newsletters {
  page: contentfulIndexPage (id: "6p9hv0dLjRDvDnvlunAbRH") {
    title
    content
  }
  newsletters: allContentfulNewsletter {
    edges {
      node {
        title
        path
        event {
          title
          date
          talks {
            id
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { dateFmt } from '@/lib/date'
import RichTextRenderer from '@/lib/contentful-rich-text-vue-renderer'

export default {
  metaInfo () {
    return {
      title: 'Newsletters'
    }
  },
  components: { RichTextRenderer },
  methods: {
    niceDate (date) {
      return dateFmt(date, 'YYYY-MM-DD')
    }
  },
  computed: {
    title () {
      return this.$page.page.title
    },
    content () {
      return this.$page.page.content
    },
    newsletters () {
      return this.$page.newsletters.edges.map(edge => edge.node)
    }
  }
}
</script>

<style scoped>
ol {
  list-style-type: none;
  padding: 0;
}
li {
  line-height: 2em;
}
</style>
