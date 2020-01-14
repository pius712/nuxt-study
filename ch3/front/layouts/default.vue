<template>
    <v-app>
        <nav>
            <v-toolbar dark>
                <v-toolbar-title>
                    <nuxt-link to="/">NodeBird</nuxt-link>
                </v-toolbar-title>
            
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-form @submit.prevent="onSearchHashtag">
                        <v-text-field 
                        v-model="hashtag"
                        label="검색" 
                        prepend-icon="mdi-magnify" 
                        :style="{alignItems: 'center'}"/>
                    </v-form>
                    <v-btn text nuxt to="/profile">
                        <div>프로필</div>
                    </v-btn>
                    <v-btn text nuxt to="/signup">
                        <div>회원가입</div>
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
        </nav>
        <v-row>
            <v-col col="12" md="4">
                <login-form></login-form>
            </v-col>
            <v-col col="12" md="8">
                <nuxt/>
            </v-col>
            
        </v-row>
    </v-app>
    
</template>

<script>
import LoginForm from '~/components/Loginform.vue';

export default {
    head(){
      return {
          title: '디폴트',
      }
    },
    data(){
        return ({
            hashtag:'',
        })
    },
    components:{
        LoginForm,
    },
    computed:{
        name(){
            return this.$store.state.posts.name;
        }
    },
    methods:{
        onChangeName(){
            this.$store.dispatch('users/signUp');
        },
        onSearchHashtag(){
            this.$router.push({
                path: `/hashtag/${this.hashtag}`
            });
            this.hashtag = '';
        }
    }
}
</script>

<style>

</style>