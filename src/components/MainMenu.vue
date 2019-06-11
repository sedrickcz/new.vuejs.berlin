<template>
  <header id="main-menu">
    <strong>
      <template v-if="title && title.length">
        {{ title }} —
      </template>
      <g-link to="/">{{ $static.metaData.siteName }}</g-link>
    </strong>
    <nav class="nav">
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/newsletters">Newsletters</g-link>
    </nav>
  </header>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  props: {
    title: String
  }
}
</script>
