<template>
  <Layout :title="`${$page.post.title} Newsletter`">
    <aside>
      <newsletter-nav />
    </aside>

    <slot />

    <aside>
      <newsletter-nav />
    </aside>
  </Layout>
</template>

<script>
import NewsletterNav from './NewsletterNavigation'

export default {
  components: { NewsletterNav }
}
</script>
