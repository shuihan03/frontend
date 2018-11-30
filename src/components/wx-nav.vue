<template>
  <div id="wx-nav">
	<nav>
        <router-link to="/" tag="dl">
            <dt class="iconfont icon-find" >
                <i class="new-msg-dot"></i>
            </dt>
            <dd>history</dd>
        </router-link>
          <router-link to="/new" tag="dl">
            <dt class="iconfont icon-find"  >
                <i class="new-msg-dot"></i>
            </dt>
            <dd>input</dd>
        </router-link>
		<router-link to="/user" tag="dl">
            <dt class="iconfont icon-me" >
                <!--<i class="new-msg-dot"></i>-->
            </dt>
            <dd>myself</dd>
        </router-link>
    </nav>
  </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
          
        },
        methods:{
             toRecord:function(){
                 debugger;
               this.$toast("2");
           }
        }
    }
</script>
<style>
   /* @import "../assets/css/wx-nav.css";*/
   #wx-nav
   {
       width: 100%;
       height: 100%;
   }
   nav{
       width: 100%;
       height: 100%;
   }
   dl{
       width: 33.33%;
       float: left;
   }
    .router-link-exact-active
   {
       color:green;
   }
</style>