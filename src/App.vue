<template>
<div>
  <Header/>
  <router-view/>
  <Footer/>
</div>
</template>

<script>
import Footer from "./Components/Shared/Footer.vue"
import Header from './Components/Shared/Header.vue'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
    Footer,
    Header
  }
}
</script>

<style>

</style>
