<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-subheader>회원가입</v-subheader>
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
            <v-text-field
              v-model="email"
              label="이메일"
              type="email"
              required
              :rules="emailRules"
              />
            <v-text-field
              v-model="password"
              label="비밀번호"
              type="password"
              required
              :rules="passwordRules"
              />
            <v-text-field
            v-model="passwordCheck"
              label="비밀번호 확인"
              type="password"
              required
              :rules="passwordCheckRules"
            />
            <v-text-field
              label="닉네임"
              type="nickname"
              required
              :rules="nicknameRules"
            />
            <v-checkbox
            v-model="terms"
              required
              :rules='[v => !!v || "약관에 동의해야합니다.."]'
              label="동의"/>
            <v-btn type="submit">가입하기</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      valid:false,
      email:'',
      password:'',
      passwordCheck:'',
      terms:'',
      emailRules:[
        v => !!v || '이메일을 입력하세요',
        v => /.+@cau\.ac\.kr/.test(v) || '이메일이 유효하지 않습니다.'
      ],
      nickname:'',
      nicknameRules:[
        v => !!v || '닉네임을 입력하세요',
      ],
      passwordRules:[
        v => !!v || '비밀번호를 입력하세요'
      ],
      passwordCheckRules:[
        v => !!v || '비밀번호를 확인하세요',
        v => v===this.password || '비밀번호가 일치하지 않습니다.'
      ],
    }
  },
  methods:{
    onSubmitForm(){
      if(this.$refs.form.validate()){
        console.log(this.valid);
        alert('회원가입시도');
      }else{
        alert('회원가입실패');
      }
    }
  }
  // head(){
  //     return {
  //         title: '회원가입',
  //     }
  // }
}
</script>

<style>

</style>