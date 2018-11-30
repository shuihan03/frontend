<template>
  <div class="hello">
    <mt-header fixed title="recording the notes"></mt-header>
    <mt-field label="username" placeholder="Input username" v-model="userData.name"></mt-field>
    
    <mt-button type="default" @click="updateUserInfo()" >save</mt-button>
    <mt-popup v-model="popupVisible" popup-transition="popup-fade">

</mt-popup>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "User",
  data() {
    return {
      msg: "baby description",
      userData: { name: "xiaomili", sex: 0, bornDate: "2017-03-01", photo: "" }
    };
  },

  methods: {
    getTips: function() {
      this.$toast("Upload Complete");
    },
    updateUserInfo() {
      axios.interceptors.response
      let _this = this;
      axios
        .post(restfulApis.getLifeList, {
          params: {
            userData
          }
        })
        .then(function(response) {
          if (response.data.success) {
            _this.list = response.data.data;
            for (var item in _this.list) {
              _this.list[item].url = imgUrl;
            }
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
