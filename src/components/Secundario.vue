<template>
  <v-sheet
    class="overflow-hidden fill-height"
    style="position: relative;"
  >
    <!--<v-container class="grey lighten-1 ">
        <v-row
          align="start"
          no-gutters
          justify="space-around"
          
          class="grey lighten-2 "
        >
            <v-btn
              color="pink"
              dark
              @click.stop="drawer = !drawer"
            >
              Toggle
            </v-btn>
            <v-space></v-space>
            <v-btn
              elevation="2"
              icon
            >     
                 <v-icon>mdi-crosshairs-gps</v-icon> 
            </v-btn>
          
        </v-row>
    </v-container >-->
     
    <v-container class="fill-height grey lighten-1 ">
        <v-row
          align="start"
          no-gutters
          justify="space-around"
          
          class="grey lighten-2 "
        >
            <v-btn
              color="pink"
              dark
              @click.stop="drawer = !drawer"
            >
              Toggle
            </v-btn>
            <v-space></v-space>
            <v-btn
              elevation="2"
              icon
            >     
                 <v-icon>mdi-crosshairs-gps</v-icon> 
            </v-btn>
          
        </v-row>
        <v-row 
          justify="center"
          no-gutters
          class="grey lighten-3 ">
            <v-img  src="https://www.metaweather.com/static/img/weather/png/sn.png"
                    
                    max-width="200">
              
            </v-img>
        </v-row>
        <v-row 
          justify="center"
          no-gutters
          class="grey lighten-3 "
          align="end"
          >
            <h1 class=" text-center display-4">
              <p class="ClaseFuente">15</p>
            </h1>
            <h1 class="display-1">
              <p class="ClaseFuente" >&deg;C</p>
            </h1>
        </v-row>
        <v-row 
          
          justify="center"
          no-gutters
          class="grey lighten-3 "
          >
            <h1 class="text-center"><p class="ClaseFuente">Shower</p></h1>
        </v-row>
        <br><br>
        <v-row 
          justify="center"
          no-gutters
          class="grey lighten-3 "
          >
            <h5><p class="ClaseFuente">Today  °  Fri, 5 Jun</p><p class="ClaseFuente"><v-icon>mdi-map-marker</v-icon>Helsinki</p></h5>
        </v-row>
 
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      width="400"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
      }
    },
  }
</script>

<style>

  .ClaseFuente{
    font-family: 'Raleway', sans-serif;
  }
</style>