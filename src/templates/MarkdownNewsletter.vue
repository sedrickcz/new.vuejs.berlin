<template>
  <newsletter-view>
    <div v-html="$page.post.content" />
  </newsletter-view>
</template>

<page-query>
query MarkdownNewsletter ($path: String!) {
  post: markdownNewsletter (path: $path) {
    title
    content
    path
  }
}
</page-query>

<script>
import NewsletterView from '@/components/NewsletterView'

export default {
  metaInfo () {
    return {
      title: `${this.$page.post.title} Newsletter`
    }
  },
  components: { NewsletterView }
}
</script>
