<template>
    <v-list tile>
        <ul>
            <li v-for="user in users" :key="user.id">
                <span>{{ user.id }}</span>
                <v-btn @click="remove(user)">차단</v-btn>
            </li>
        </ul>
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