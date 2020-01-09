<template>
    <v-app>
        <nav>
            <v-toolbar dark>
                <v-toolbar-title>
                    <nuxt-link to="/">NodeBird</nuxt-link>
                </v-toolbar-title>
            
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-text-field label="검색" prepend-icon="mdi-magnify" :style="{alignItems: 'center'}"/>
                    <v-btn text nuxt to="/profile">
                        <div>프로필</div>
                    </v-btn>
                    <v-btn text nuxt to="/signup">
                        <div>회원가입</div>
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
        </nav>
        <div>{{ name }}</div>
        <v-btn @click="onChangeName">바잉~</v-btn> 
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
        }
    }
}
</script>

<style>

</style>