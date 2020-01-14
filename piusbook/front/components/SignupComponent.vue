<template>
  <v-col cols="8">
    <v-container>
      <v-card>
        <v-form ref="form" v-model="valid" @submit.prevent="signUp">
          <v-container>
            <v-text-field
            type="email"
            v-model="email"
            label="email"
            :rules="emailRules">

            </v-text-field>
            <v-text-field
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            v-model="password"
            label="password"
            :rules="passwordRules"
            @click:append="show1 = !show1">

            </v-text-field>
            <v-text-field
            type="text"
            v-model="nickname"
            label="닉네임"
            :rules="nicknameRules">

            </v-text-field>
            <v-btn type="submit">회원가입</v-btn>
          </v-container>
        </v-form>
      </v-card>
    </v-container>
  </v-col>
</template>

<script>
export default {
  data(){
    return{
      valid: false,
      email: '',
      emailRules:[
        v=> !!v || '이메일을 입력해주세요'
      ],
      show1: false,
      password: '',
      passwordRules:[
        v => v.length >= 8 || 'Min 8 characters',
        v => !!v || '비밀번호를 입력하세요'
      ],
      nickname: '',
      nicknameRules:[
        v => !!v || '닉네임을 입력해주세요'
      ]
    }
  },
  methods :{
    signUp(){
      const payload = {
        email: this.email,
        password: this.password,
        nickname: this.nickname
      };
      this.$store.dispatch('users/signUp', payload)
      .then(()=>{
        this.$store.dispatch('users/signIn', payload)
      })
      .then(()=>{
        this.$router.push('/');
      })
      .catch((err)=>{
        console.error(err);
      })
    },
  }

}
</script>

<style>

</style>