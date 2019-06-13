<template>
  <div class="box">
    <headerr
      title="Employee Info"
      :icon="require('./_assets/user.png')"
    />
    <form class="columns is-multiline" @submit.prevent="submit">
      <div class="column is-half">
        <div class="field">
          <label class="label">First Name</label>
          <div class="control">
            <input type="text" v-model.lazy="firstName" class="input" required>
          </div>
        </div>
      </div>
      <div class="column is-half">
        <div class="field">
          <label class="label">Last Name</label>
          <div class="control">
            <input type="text" v-model.lazy="lastName" class="input" required>
          </div>
        </div>
      </div>
      <div class="column is-half">
        <div class="field">
          <label class="label">Annual Salary</label>
          <div class="control has-icons-left">
            <span class="icon is-left">$</span>
            <input type="number" step="0.01" min="0"
              v-model.lazy="annualIncome" class="input" required>
          </div>
        </div>
      </div>
      <div class="column is-half">
        <div class="field">
          <label class="label">Superannuation Rate</label>
          <div class="control has-icons-left">
            <span class="icon is-left">%</span>
            <input type="number" step="0.01" min="0" max="100"
              v-model.lazy="superRate" class="input" required>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="control">
            <button type="submit" class="button is-primary">
              Generate Payslip
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { mapFields } from 'vuex-map-fields'
import Headerr from './_comps/Header.vue'
import roundNum from './_utils/roundNum'
import module from './_store'

export default {
  components: { Headerr },
  metaInfo: {
    title: 'Capture Employee Info'
  },
  computed: ((fields) => {
    const computed = mapFields(module.name, fields)
    fields.slice(-2).forEach(field => {
      let origSetter = computed[field].set
      computed[field].set = function (value) {
        origSetter.call(this, roundNum(value, 2))
      }
    })
    return computed
  })(Object.keys(module.state)),
  methods: {
    submit () {
      this.$router.push('/generator/preview')
    }
  }
}
</script>
