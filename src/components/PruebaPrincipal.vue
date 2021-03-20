<template>
    <v-sheet class="px-16 fill-height ColorSecundario">
        <v-container class="px-16 fill-height">
            <v-row
                class="px-16"
                align="center"
                no-gutters
                justify="end"               
            >
                <v-btn
                color="grey"
                elevation="5"
                fab
                x-small
                > 
                    <v-icon color="white">mdi-temperature-celsius</v-icon> 
                </v-btn>
                <v-btn
                class="ml-2"
                color="grey"
                elevation="5"
                fab
                x-small
                >     
                    <v-icon color="white">mdi-temperature-fahrenheit</v-icon> 
                </v-btn>
            </v-row>
            <v-row class="px-16" justify="space-between" no-gutters >
                <v-card
                    v-for="n in 5"
                    :key="n"
                    outlined
                    tile
                    height="125"
                    width="90"
                    color="#1c243c"
                ><div class="ClaseFuente text-center white--text mt-1"><h5>Tomorrow</h5></div>
                    <v-card-text >
                        <img class="ml-1" src="https://www.metaweather.com/static/img/weather/ico/s.ico" width="50">
                        <div class="ClaseFuente text-center white--text" style="word-spacing: 10px;"><h4>16° 11°</h4></div>
                    </v-card-text>
                </v-card>
            </v-row>
            <v-row 
                class="px-16"
                justify="start"
                no-gutters
                
            >
                <h3 class="text-center mb-n3" ><p class="ClaseFuente white--text ">Today's highlights</p></h3>
            </v-row>
            <v-row class="px-16" justify="space-between"  no-gutters>
                <v-card
                    class="my-0"
                    :key="n"
                    outlined
                    tile
                    height="120"
                    width="265"
                    color="#1c243c"
                >
                    <v-row class="mt-0" align="center" justify="center" >
                        <div class="ClaseFuente text-center white--text mt-1"><h5>Wind status</h5></div>
                    </v-row>
                    
                    <v-row align="center" justify="center" >
                        <div class="ClaseFuente white--text display-3"><h5>7</h5></div>
                        <div class="ClaseFuente white--text text-h5">mph</div>
                    </v-row>
                    <v-row align="center" justify="center" >
                        <v-btn
                            style="background-color: grey;"
                            class="mr-2"
                            color="grey"
                            elevation="0"
                            icon
                            small
                        > 
                            <v-icon small color="white">mdi-near-me</v-icon> 
                        </v-btn>
                        <div class="ClaseFuente white--text dispaly-1">wsw</div>
                    </v-row>
                </v-card>
                    <v-card
                    class="my-0"
                    :key="n"
                    outlined
                    tile
                    height="120"
                    width="265"
                    color="#1c243c"
                >
                    <v-row class="mt-0" align="center" justify="center" >
                        <div class="ClaseFuente text-center white--text mt-1"><h5>Humidity</h5></div>
                    </v-row>
                    
                    <v-row align="center" justify="center" >
                        <div class="ClaseFuente white--text display-3 pl-3"><h5>84</h5></div>
                        <div class="ClaseFuente white--text text-h4">%</div>
                    </v-row>
                    <v-row align="center" justify="center" >
                        <v-col cols="12" md="7" class="mb-n5" >
                           <v-row justify="space-between" >
                                <h6 class="grey--text">0</h6>
                                <h6 class="grey--text">50</h6>
                                <h6 class="grey--text">100</h6>
                            </v-row> 
                        </v-col>
                        <v-col class="mb-n3" md="8">
                            
                           
                            <v-progress-linear
                            color="yellow"
                            value="84"
                            rounded
                            height="8"
                        
                            ></v-progress-linear>
                        </v-col>
                    </v-row>
                </v-card>
            </v-row>
            <v-row class="px-16" justify="space-between" no-gutters>
                <v-card
                    class="my-0"
                    :key="n"
                    outlined
                    tile
                    height="100"
                    width="265"
                    color="#1c243c"
                >
                    <v-row class="mt-0" align="center" justify="center" >
                        <div class="ClaseFuente text-center white--text mt-1"><h5>Visibility</h5></div>
                    </v-row>
                    
                    <v-row align="center" justify="center" >
                        <div class="ClaseFuente white--text display-3 pl-3"><h5>4,6</h5></div>
                        <div class="ClaseFuente white--text text-h5">miles</div>
                    </v-row>
                </v-card>
                <v-card
                    class="my-0"
                    :key="n"
                    outlined
                    tile
                    height="100"
                    width="265"
                    color="#1c243c"
                >
                    <v-row class="mt-0" align="center" justify="center" >
                        <div class="ClaseFuente text-center white--text mt-1"><h5>Air Pressure</h5></div>
                    </v-row>
                    
                    <v-row align="center" justify="center" >
                        <div class="ClaseFuente white--text display-3 pl-3"><h5>998</h5></div>
                        <div class="ClaseFuente white--text text-h5">mb</div>
                    </v-row>
                </v-card>
            </v-row>
                <v-row 
                class="px-16"
                justify="center"
                no-gutters
            >
                <h6 class="text-center mb-n3" ><p class="ClaseFuente grey--text ">Created by @Facundo_78 - devChallenger.io</p></h6>
            </v-row>
        </v-container>
    </v-sheet>
</template>

<script>
export default {

}
</script>

<style>

</style>