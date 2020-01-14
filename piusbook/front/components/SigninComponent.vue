<template>
  
<v-col col=4>
  <v-container>
    <v-card v-if="!me">
      <v-form v-model="valid" @click="signIn">
          <v-container>
            <v-text-field
              v-model= "email"
              label="email"
              type="email"
              required>

            </v-text-field>
            <v-text-field
              v-model="password"
              label="password"
              type="password"
              required>
            </v-text-field>
            <v-btn @click="signIn">로그인</v-btn>
            <v-btn>회원가입</v-btn>
          </v-container>
      </v-form>
    </v-card>
  </v-container>
</v-col>
</template>

<script>
export default {
  data(){
    return {
      valid: false,
      email:'',
      id: '',
      password:'',
    }
  },
  methods: {
    signIn(){
      const payload = {
        id: this.id,
        password: this.password
      }
      this.$store.dispatch('users/signIn', payload);
    }
  },
  computed:{
    me(){
      return this.$store.state.users.me;
    }
  }
}
</script>

<style>

</style>