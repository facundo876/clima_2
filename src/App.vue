<template>
  <v-app>
    <v-main class="indigo darken-4">

      <v-navigation-drawer width="400">
        <Secundario/>
    </v-navigation-drawer>
    </v-main>
    
  </v-app>
  
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Principal from './components/Principal';
import Secundario from './components/Secundario';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Principal,
    Secundario,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>

</style>