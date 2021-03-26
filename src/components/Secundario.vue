<template>
  <v-sheet
    class="overflow-hidden fill-height"
    style="position: relative;"
  > 
    <v-container class="fill-height ColorPricipal">
        <v-row
          align="center"
          no-gutters
          justify="space-around"
        >
            <v-btn
              color="grey"
              elevation="5"
              small
              tile
              @click.stop="drawer = !drawer"
              class="white--text"
            ><h5>Seach for pleaces</h5></v-btn>

            <v-space></v-space>
            <v-btn
              color="grey"
              elevation="5"
              fab
              x-small
              @click="setUbicacion"
            >     
                 <v-icon color="white">mdi-crosshairs-gps</v-icon> 
            </v-btn>
          
        </v-row>
        <v-row 
          justify="center"
          no-gutters
          >
            <v-img v-bind:src="today.image" max-width="200"></v-img>
        </v-row>
        <v-row 
          justify="center"
          no-gutters
          align="end"
          >
            <h1 class=" text-center display-4">
              <p class="ClaseFuente white--text">{{today.the_temp}}</p>
            </h1>
            <h1 class="display-1">
              <p class="ClaseFuente grey--text" >&deg;C</p>
            </h1>
        </v-row>
        <v-row 
          justify="center"
          no-gutters
          >
            <h1 class="text-center"><p class="ClaseFuente grey--text">{{today.weather_state_name}}</p></h1>
        </v-row>
        <br><br>
        <v-row 
          justify="center"
          no-gutters
          >
            <h5>
              <p class="ClaseFuente grey--text" style="word-spacing: 5px;" >Today  &#183;  {{today.str_today}}</p>
              <p class="ClaseFuente grey--text"><v-icon color="grey">mdi-map-marker</v-icon>{{climateJSON.title}}</p>
            </h5>
        </v-row>
 
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      width="400"
    >
      <v-container class="ColorPricipal">
        
        <v-row 
          
          
          justify="end"
          no-gutters
          >
            <v-btn
              color="white"
              icon
              medium
            ><v-icon>mdi-close</v-icon></v-btn>   
        </v-row>
        <v-row >
          <v-col md="8"> 
             <v-text-field
              outlined
              class="rounded-0 white--text"
              label="Search Location"
              prepend-inner-icon="mdi-magnify"
              dense
              dark
            ></v-text-field>

          </v-col>
          <v-col md="4">
              <v-btn
              color="primary"
              elevation="2"
              medium
              tile
            >Search</v-btn>
          </v-col>
         
        </v-row>
        
      </v-container>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
  import {mapState, mapMutations} from 'vuex';

  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
        mensaje: "https://www.metaweather.com/static/img/weather/png/sn.png"
      }
    },
    computed: {
      ...mapState(['today', 'climateJSON']),
      
    },
    methods:{
      ...mapMutations(['setUbicacion']),
    },
  }
</script>

<style>

  .ClaseFuente{
    font-family: 'Raleway', sans-serif;
  }

  .ColorPricipal{
    background-color: #1c243c;
  }
</style>