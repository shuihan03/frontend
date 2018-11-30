<template>
  <div class="grow-record">
     <mt-header fixed title="corner"></mt-header>
    <ul>
      
      <li class="one-record clear" v-for="(item,index) in list" v-bind:key="index">
       
        <div>{{list[index].content}}</div>
        <img :src="list[index].url"/>
        <div><div class="time" v-text="list[index].time"></div></div>
        </li>
    </ul>
  </div>
</template>

<script>
var imgUrl = require("../assets/logo.png");
var restfulApis = require("../common/restful-apis.js");
import axios from "axios";
export default {
  name: "GrowRecord",

  mounted: function() {
    if(this.isFirstTime){
      this.getData();
      this.isFirstTime=false;
    }
      
  },
  data() {
    return {
      msg: "GrowRecord",
      isFirstTime:true,
      list: [
        {
          id: 1,
          time: "2012-03-03 21:00:00",
          // url: "../assets/a.jpg",
          url: imgUrl,
          content:
            "today,is a good day"
        },
        {
          id: 2,
          time: "2012-03-03 21:00:00",
          url: imgUrl,
          content:
            "today,is a good day"
        },
        {
          id: 3,
          time: "2012-03-03 21:00:00",
          url: imgUrl,
          content:
            "today,is a good day"
        }
      ]
    };
  },
  methods: {
    getData() {
      // axios.get().then
      let _this = this;
      this.$axios.get(restfulApis.getLifeList,{
        params:{ 
          id:1
         }}).then(function(response) {
        if (response.data.success) {
          _this.list = response.data.data;
          for(var item in _this.list)
          {
            _this.list[item].url=imgUrl;
          }
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grow-record {
  width: 100%;
  height: 100%;
}

ul li {
  list-style-type: none;
}
.time {
  font-size: 10px;
  float: left;
}
.one-record {
}
.clear {
  clear: both;
}
</style>
