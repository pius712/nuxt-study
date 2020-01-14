<template>
    <v-list tile>
        <ul>
            <li v-for="follower in followingList" :key="follower.id">
                <span>{{ follower.id }} </span>
                <v-btn @click="removeFollowing(follower)">팔로잉 끊기</v-btn>
            </li>
        </ul>
    </v-list>
</template>

<script>
export default {

}
</script>

<style>

</style>