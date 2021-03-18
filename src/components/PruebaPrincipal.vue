<template>
    <v-sheet style="background-color: grey;" class="px-16 fill-height">
        <v-container style="background-color: red;" class="px-16 fill-height">
            <v-row
                class="px-16"
                align="center"
                no-gutters
                justify="end"
                style="background-color: grey;"
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
            <v-row class="px-16" justify="space-between" style="background-color: grey;" no-gutters >
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
            <v-row 
                class="px-16"
                justify="start"
                no-gutters
                style="background-color: grey;"
            >
                <h3 class="text-center mb-n3" style="background-color: green;"><p class="ClaseFuente white--text ">Today's highlights</p></h3>
            </v-row>
            <v-row class="px-16" justify="space-between" style="background-color: grey;" no-gutters>
                <v-card
                    class="my-0"
                    v-for="n in 2"
                    :key="n"
                    outlined
                    tile
                    height="120"
                    width="265"
                    color="blue"
                >
                    .col-6 .col-md-4
                </v-card>
            </v-row>
            <v-row class="px-16" justify="space-between" style="background-color: grey;" no-gutters>
                <v-card
                    class="my-0"
                    v-for="n in 2"
                    :key="n"
                    outlined
                    tile
                    height="100"
                    width="265"
                    color="blue"
                >
                    .col-6 .col-md-4
                </v-card>
            </v-row>
                <v-row 
                class="px-16"
                justify="center"
                no-gutters
                style="background-color: grey;"
            >
                <h6 class="text-center mb-n3" style="background-color: green;"><p class="ClaseFuente grey--text ">Created by @Facundo_78 - devChallenger.io</p></h6>
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