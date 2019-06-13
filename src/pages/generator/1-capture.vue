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
            <input
              type="text"
              v-model.trim.lazy="firstName"
              :class="['input', { 'is-danger': $v.firstName.$error }]"
              required
            >
          </div>
          <p v-if="$v.firstName.$error" class="help is-danger">
            First name is required
          </p>
        </div>
      </div>
      <div class="column is-half">
        <div class="field">
          <label class="label">Last Name</label>
          <div class="control">
            <input
              type="text"
              v-model.trim.lazy="lastName"
              :class="['input', { 'is-danger': $v.lastName.$error }]"
              required
            >
          </div>
          <p v-if="$v.lastName.$error" class="help is-danger">
            Last name is required
          </p>
        </div>
      </div>
      <div class="column is-half">
        <div class="field">
          <label class="label">Annual Salary</label>
          <div class="control has-icons-left">
            <span class="icon is-left">$</span>
            <input
              type="number"
              step="0.01"
              min="0"
              v-model.lazy="annualIncome"
              :class="['input', { 'is-danger': $v.annualIncome.$error }]"
              required
            >
          </div>
          <p v-if="$v.annualIncome.$error" class="help is-danger">
            Annual salary should be ≥ 0
          </p>
        </div>
      </div>
      <div class="column is-half">
        <div class="field">
          <label class="label">Superannuation Rate</label>
          <div class="control has-icons-left">
            <span class="icon is-left">%</span>
            <input
              type="number"
              step="0.01"
              min="0"
              max="100"
              v-model.lazy="superRate"
              :class="['input', { 'is-danger': $v.superRate.$error }]"
              required
            >
          </div>
          <p v-if="$v.superRate.$error" class="help is-danger">
            Superannuation rate should be between [0, 100]
          </p>
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
import validate from './_mixins/validate'
import module from './_store'

export default {
  mixins: [validate],
  components: { Headerr },
  metaInfo: {
    title: 'Capture Employee Info'
  },
  computed: ((fields) => {
    const computed = mapFields(module.name, fields)
    fields.slice(-2).forEach(field => {
      let origSetter = computed[field].set
      computed[field].set = function (value) {
        origSetter.call(this, roundNum(value))
      }
    })
    return computed
  })(Object.keys(module.state)),
  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$router.push('/generator/preview')
      }
    }
  }
}
</script>
