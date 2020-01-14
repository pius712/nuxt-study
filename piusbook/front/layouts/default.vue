<template>
  <v-app>
      <div>
        <v-toolbar color="blue">
            <v-toolbar-title>
                piusbook
            </v-toolbar-title>
            <v-spacer></v-spacer>
            
            <v-toolbar-items>
                <v-btn text>
                    <nuxt-link to="/">홈</nuxt-link>
                </v-btn>
                <v-btn text>
                    <nuxt-link to="/">프로필</nuxt-link>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-anchor</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-forum</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-watch</v-icon>
                </v-btn>
                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                    <v-btn
                        color="primary"
                        dark
                        v-on="on"
                        icon
                    >
                        <v-icon>mdi-menu-down</v-icon>
                    </v-btn>
                    </template>
                    <v-list>
                        
                        <v-list-item
                            v-for="(item, index) in items"
                            :key="index"
                            nuxt to="/signup"
                        >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-toolbar>
      </div>
      <nuxt/>
  </v-app>
</template>

<script>
export default {
    data(){
        return{
            items:[
                {title: '가나다'},
                {title: '라마바'},
                {title: '사아자'},
                {title: '로그아웃'},
            ]
        }
    },
    methods: {
        signout(){

        }
    }
}
</script>

<style>
nuxt-link{
    text-decoration: none;
}
</style>