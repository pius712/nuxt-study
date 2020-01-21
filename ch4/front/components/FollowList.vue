<template>
    <v-list tile>
        <v-col v-for="user in users" :key="user.id" cols="12" md="4" style="display: inline-block">
            <v-list-item>
                <v-list-item-avatar color="blue">
                    <span> {{ user.nickname[0] }}</span>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title> {{user.nickname}} </v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon @click="remove(user)">mdi-minus-circle-outline</v-icon>
                </v-list-item-action>
            </v-list-item>
        </v-col>
    </v-list>
</template>

<script>
export default {
    props:{
        'users':{
            type: Array,
            required:true
        }, 
        'remove':{
            type: Function,
            required: true,
        }},
    computed:{
        followerList(){
            return this.$store.state.users.followerList;
        },
        followingList(){
            return this.$store.state.users.followingList;
        }
    },
    
}
</script>

<style>

</style>