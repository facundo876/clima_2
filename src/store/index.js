import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    climateJSON : null,
    today: null,
    week: [],
    woeid: null,
  },
  mutations: {
    setClimasJSON(state, JSON){
      state.climateJSON = JSON;
    }, 
    setTodayJSON(state, JSON){
      
      state.today = JSON.consolidated_weather[0];
      state.today.image = "https://www.metaweather.com/static/img/weather/png/"+JSON.consolidated_weather[0].weather_state_abbr+".png";
      state.today.the_temp = '' + parseInt(JSON.consolidated_weather[0].the_temp, 10);
      var fecha = new Date(JSON.consolidated_weather[0].applicable_date + "T00:00:00");
      state.today.str_today = RetornarFormatoFecha(fecha.toDateString());
      state.today.wind_speed = "" + parseInt(state.today.wind_speed, 10);
      state.today.visibility =  ("" + parseInt(state.today.visibility).toFixed(1)).replace('.', ',');
      state.today.air_pressure = "" + parseInt(state.today.air_pressure);
    },
    setWeekJSON(state, JSON){

      for(var i=1; i<=5; i++){
         state.week.push(JSON.consolidated_weather[i]) 
      }
      state.week.forEach(item => {
         item.max_temp = parseInt(item.max_temp, 10) + '°'
         item.min_temp = parseInt(item.min_temp, 10) + '°'
         var fecha = new Date(item.applicable_date + "T00:00:00");
         item.str_day = RetornarFormatoFecha(fecha.toDateString());
      });
      state.week[0].str_day = 'Tomorrow';
    },
    setWoeid(state, newWoeid){
     
      /*
       navigator.geolocation.getCurrentPosition(function(position) {
         var aux ='https://cors-anywhere.herokuapp.com/' + 'https://www.metaweather.com/api/location/search/?lattlong=' + position.coords.latitude + ',' + position.coords.longitude;
         axios
         .get(aux)
         .then(response => (state.woeid = response.data[0].woeid))
       });
      */
     state.woeid = newWoeid;
    },
  },
  actions: {
    ConsultaApi({ commit, state }){

      commit('setWoeid', 468739)

      var aux = {};
      var str ='https://cors-anywhere.herokuapp.com/' + 'https://www.metaweather.com/api/location/'+state.woeid+'/';
      axios
      .get(str)
      .then(response => {
        commit('setClimasJSON', response.data)
        commit('setTodayJSON', response.data)
        commit('setWeekJSON', response.data)
      })

      
    },
  },
  modules: {
  }
})

function RetornarFormatoFecha(strinDate){
  var array = strinDate.split(" ");
  return array[0] + ", " + array[2] + " " + array[1];
}