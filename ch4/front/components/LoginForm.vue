<template>
  <v-container v-if="!me">
    <v-card>
      <v-form ref="form" v-model="valid" @submit.prevent="onLogin">
        <v-container>
          <v-text-field v-model="email" label="이메일" type="email" required :rules="emailRules"></v-text-field>
          <v-text-field
            v-model="password"
            label="비밀번호"
            type="password"
            required
            :rules="passwordRules"
          ></v-text-field>
          <v-btn type="submit" :disabled="!valid">로그인</v-btn>
          <v-btn nuxt-to="/signup">회원가입</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
  <v-container v-else>
    <v-card>
      {{ me.nickname }}님이 로그인되었습니다.
      <v-btn v-on:click="onLogout">로그아웃</v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      email: "",
      password: "",
      emailRules: [
        v => !!v || "이메일을 입력하세요",
        v => /.+@cau.ac.kr/.test(v) || "이메일을 확인하세요"
      ],
      passwordRules: [v => !!v || "비밀번호를 입력하세요"]
    };
  },
  methods: {
    onLogin() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("users/logIn", {
          email: this.email,
          password: this.password,
          nickname: "pius"
        });
      }
    },
    onLogout() {
      // console.log('vue')
      this.$store.dispatch("users/logOut");
    }
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    }
  }
};
</script>

<style>
</style>