<template>
  <v-card>
      <v-container>
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
              <v-textarea
                v-model="content"            
                outlined
                auto-grow
                clearable
                label="무슨 일이 있었는지 공유하세요"
                :hide-details="hideDetails"
                :success="success"
                :success-messages="successMessages"
                :rules="[v => !!v.trim() || '입력하라구~']"
                @input="onChangeTextareas">
               </v-textarea>
               <v-btn type="submit" absolute right>업로드</v-btn>
               <v-btn>이미지 업로드</v-btn>
          </v-form>
      </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            valid: false,
            hideDetails : true,
            success : false,
            successMessages: '',
            content: '',
        }
    },
    computed:{
        ...mapState('users',['me'])
    },
    methods:{
        onChangeTextareas(value){
            if(value.length){
                this.hideDetails = true;
                this.success = false;
                this.successMessage = '';
            }
            //글자 칠때마다 발생하는 메서드 input 
        },
        onSubmitForm(){
            if(this.$refs.form.validate()){
                console.log(this.me);
                this.$store.dispatch('posts/add', {
                    content: this.content,
                    User:{
                        nickname: this.me.nickname,
                    },
                    Comments:[],
                    images:[],
                    id: Date.now(),
                    createdAt: Date.now(),
                })
                .then(()=>{
                    this.hideDetails = false;
                    this.success = true;
                    this.successMessages = "게시글 등록 성공"
                    this.content = '';
                })
            }
        }
    }
}
</script>

<style>

</style>