<template>
  <div class="hello">
    <mt-header fixed title="self information"></mt-header>
    <mt-field label="username" placeholder="Input username" v-model="userData.name"></mt-field>
    <mt-field label="sex" placeholder="Input sex" v-model="userData.sex"></mt-field>
    <mt-field label="bornDate" placeholder="Input bornDate" v-model="userData.bornDate"></mt-field>
    <mt-field label="photo" placeholder="Input photo" v-model="userData.photo"></mt-field>
    <mt-button type="default" @click="getTips()" >default</mt-button>
    <mt-popup
  v-model="popupVisible"
  popup-transition="popup-fade">

</mt-popup>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      msg: "baby description",
      userData: { name: "xiaomi", sex: 0, bornDate: "2018-01-01", photo: "" }
    };
  },

  methods: {
    getTips: function() {
      this.$toast("Upload Complete");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
