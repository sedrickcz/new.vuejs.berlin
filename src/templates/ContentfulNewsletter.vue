<template>
  <Layout :title="`${$page.post.title} Newsletter`">
    <rich-text-renderer :document="$page.post.details" />
  </Layout>
</template>

<page-query>
query ContentfulNewsletter ($path: String!) {
  post: contentfulNewsletter (path: $path) {
    title
    slug
    details
  }
}
</page-query>

<script>
import RichTextRenderer from '@/lib/contentful-rich-text-vue-renderer'

export default {
  metaInfo () {
    return {
      title: `${this.$page.post.title} Newsletter`
    }
  },
  components: { RichTextRenderer }
}
</script>

<style scoped>
ul {
  padding: 0 0 0 .8em;
}
ul > li > p {
  margin: 0;
  line-height: 1.5em;
}
</style>
