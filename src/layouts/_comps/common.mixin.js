import Logo from '@/components/Logo.vue'
import GradientLine from './GradientLine.vue'

export default {
  components: { Logo, GradientLine },
  data: () => ({
    isNavMenuVisible: false
  }),
  methods: {
    // https://bulma.io/documentation/components/navbar/#navbar-menu
    toggleNavMenu () {
      this.isNavMenuVisible = !this.isNavMenuVisible
    }
  }
}
