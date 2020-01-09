<template>
  <v-col cols="4">
    <v-form v-model="valid">
      <v-container>
        <v-card>
          <v-text-field
            v-model= "id"
            label="id"
            required>

          </v-text-field>
          <v-text-field
            v-model="password"
            label="password"
            required>

          </v-text-field>
        </v-card>
      </v-container>
      </v-form>
  </v-col>
</template>

<script>
export default {
  data(){
    return {
      valid: false,
      id: '',
      password:'',
    }
  }
}
</script>

<style>

</style>