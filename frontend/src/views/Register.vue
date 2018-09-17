<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group>
        <b-form-input id="email"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Email">
        </b-form-input>
      </b-form-group>
      
      <b-form-group>
        <b-form-input id="displayName"
                      type="text"
                      v-model="form.displayName"
                      required
                      placeholder="Display Name">
        </b-form-input>
      </b-form-group>
      
      <b-form-group>
        <b-form-input id="password"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Password">
        </b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input id="passwordRepeat"
                      type="password"
                      v-model="form.passwordRepeat"
                      required
                      placeholder="Repeat Password">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="outline-primary" class="float-right">Register</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        displayName: '',
        password: null,
        repeatPassword: null,
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
