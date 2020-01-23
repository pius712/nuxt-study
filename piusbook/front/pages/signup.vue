<template>
  <v-row>
    <signin-component></signin-component>
    <signup-component></signup-component>
  </v-row>
</template>

<script>
import SigninComponent from "~/components/SigninComponent";
import SignupComponent from "~/components/SignupComponent";
export default {
  head() {
    return "piusbook-로그인";
  },
  components: {
    SigninComponent,
    SignupComponent
  },
  middleware: "authenticated"
};
</script>

<style>
</style>