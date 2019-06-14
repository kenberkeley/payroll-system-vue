<template>
  <table class="table is-fullwidth -preview-table">
    <thead class="has-text-weight-medium">
      <tr>
        <td>{{ titles[0] }}</td>
        <td>{{ titles[1] }}</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, idx) in rows" :key="idx">
        <td>{{ item[0] }}</td>
        <td>{{ item[2] }} {{ item[1] }}</td>
      </tr>
      <tr></tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    /** [<key>, <val>, <val's prefix>?] */
    titles: { type: Array, required: true },
    rows: { type: Array, required: true }
  }
}
</script>
<style lang="scss">
// refer to https://stackoverflow.com/a/40213845/5172890
.-preview-table {
  tr th:first-child,
  tr td:first-child {
    width: 18%;
    min-width: 8.5em;
  }
}
</style>
