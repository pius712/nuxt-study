<template>
    <v-form ref="form" v-model="valid" v-on:submit.prevent="onSubmitForm">
        <v-textarea
            v-model="content"
            filled
            auto-grow
            label="댓글 달기"
            :hide-datails="hideDetails"
            :success="success"
            :success-messages="successMessages"
            @input="onChangeTextarea">

        </v-textarea>
        <v-btn type="submit">
            확인
        </v-btn>
    </v-form>
</template>

<script>
export default {
    props:{
        postId:{
            type: Number,
            required: true,
        },
    },
    data(){
        return{
            valid:false,
            content:'',
            success: false,
            successMessages :'',
            hideDetails: true,
        }
    },
    computed:{
        me(){
            return this.$store.state.users.me;
        },

    },
    methods:{
        onChangeTextarea(value){
            if(value.length){
                this.hideDetails = true;
                this.success = false;
                this.successMessage = '';
            }
        },
        onSubmitForm(e){
            e.preventDefault();
            if(this.$refs.form.validate()){
                this.$store.dispatch('posts/addComment',{
                    id: Date.now(),
                    postId: this.postId,
                    content: this.content,
                    User:{
                        nickname:this.me.nickname
                    }
                })
                .then(()=>{
                    this.content = '';
                    this.success = true;
                    this.successMessages = "댓글이 작성되었습니다";
                })
            }
        }
    }
}
</script>

<style>

</style>