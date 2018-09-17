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
        <b-form-input id="password"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Password">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="outline-primary" class="float-right">Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: null,
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
