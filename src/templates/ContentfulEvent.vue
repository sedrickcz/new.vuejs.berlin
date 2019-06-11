<template>
  <Layout :title="`${$page.post.title} Event`">
    <rich-text-renderer :document="$page.post.details" />
  </Layout>
</template>

<page-query>
query ContentfulEvent ($path: String!) {
  post: contentfulEvent (path: $path) {
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
      title: `${this.$page.post.title} Event`
    }
  },
  components: { RichTextRenderer }
}
</script>
