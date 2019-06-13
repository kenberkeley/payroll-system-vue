<template>
  <header class="is-clearfix" style="margin-bottom: 1em">
    <img
      :src="icon"
      class="is-pulled-left"
      width="40"
      alt="icon"
      style="margin-right: 1em"
    />
    <h2 class="is-size-5 has-text-weight-medium"
      style="line-height: 40px">
      {{ title }}
    </h2>
  </header>
</template>
<script>
export default {
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true }
  }
}
</script>
