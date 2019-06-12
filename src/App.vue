<template>
  <component id="app" :is="$route.matched[$route.matched.length - 1].meta.layout || 'div'">
    <router-view />
  </component>
</template>
