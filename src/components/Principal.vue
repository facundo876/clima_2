<template >
    <div >
        <v-container>
            <v-row style="background-color: grey;" no-gutters>
                <v-col>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, perferendis ea. Cupiditate quam maxime quae aperiam illo aut soluta at est quas, harum veritatis corporis, animi nostrum! At, commodi pariatur.</p>
                </v-col>
            </v-row>
            <v-row justify="space-between" style="background-color: grey;" no-gutters >

                <v-card
                    v-for="n in 5"
                    :key="n"
                   
                    outlined
                    tile
                    height="120"
                    width="90"
                    color="blue"
                    
                >
                    .col-6 .col-md-4
                </v-card>

            </v-row>
            <v-row justify="center" style="background-color: grey;">
                <div>
                  <v-card
                    class="d-flex justify-space-around mb-6"
                    :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
                    flat
                    tile
                    >
                        <v-card
                            v-for="n in 3"
                            :key="n"
                            class="pa-2"
                            outlined
                            tile
                        >
                            justify-space-around
                        </v-card>
                    </v-card>  
                </div>
                
            </v-row>

            <v-row>
                <v-col
                  v-for="n in 5"
                  :key="n"

                >

                </v-col>
            </v-row>

            <v-row justify="center" style="background-color: grey;" no-gutters>
                <v-col
                    v-for="n in 5"
                    :key="n"
                    cols="6"
                    md="2"
                    style="background-color: red;"
                    class="mx-2"
                    
                >
                    <v-card
                        class="pa-2"
                        outlined
                        tile
                        height="110"
                        width="90"
                        color="blue"
                        
                    >
                        .col-6 .col-md-4
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
    
</template>


<script>
export default {

}
</script>

<style>

</style>