<template>
  <v-app> 
    <v-navigation-drawer app width="400">
        <Secundario/>
    </v-navigation-drawer>
    <v-main>
    <PruebaPrincipal/>
      
    </v-main>
    
  </v-app>
  
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Principal from './components/Principal';
import Secundario from './components/Secundario';
import PruebaPrincipal from './components/PruebaPrincipal';
export default {
  name: 'App',

  components: {
    HelloWorld,
    Principal,
    Secundario,
    PruebaPrincipal,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .ColorSecundario{
    background-color: #140c1c;
  }
  .ColorTargetas{
    background-color: #1c243c;
  }
</style>