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
     
       navigator.geolocation.getCurrentPosition(function(position) {
         var aux ='https://www.metaweather.com/api/location/search/?lattlong=' + position.coords.latitude + ',' + position.coords.longitude;
         axios
         .get(aux)
         .then(response => (state.woeid = response.data[0].woeid))
       });
      return true;
     //state.woeid = newWoeid;
    },
  },
  actions: {
    ConsultaApi({ commit, state }){

      /*navigator.geolocation.getCurrentPosition(function(position) {
        var aux ='https://infinite-oasis-04900.herokuapp.com/' + 'https://www.metaweather.com/api/location/search/?lattlong=' + position.coords.latitude + ',' + position.coords.longitude;
        axios
        .get(aux)
        .then(response => {
          console.log(response.data[0].woeid)
          axios
          .get('https://infinite-oasis-04900.herokuapp.com/' +'https://www.metaweather.com/api/location/'+response.data[0].woeid+'/')
          .then(rta => {
            console.log(rta.data)
            commit('setClimasJSON', rta.data)
            commit('setTodayJSON', rta.data)
            commit('setWeekJSON', rta.data)
          })
        })
      });*/
        //------

        var aux = {"consolidated_weather":[{"id":5092336850698240,"weather_state_name":"Heavy Rain","weather_state_abbr":"hr","wind_direction_compass":"NE","created":"2021-04-09T21:31:03.236959Z","applicable_date":"2021-04-10","min_temp":3.2249999999999996,"max_temp":8.035,"the_temp":5.609999999999999,"wind_speed":6.939251885922214,"wind_direction":46.418567468484184,"air_pressure":1014.0,"humidity":82,"visibility":7.802247375328084,"predictability":77},{"id":6303353966428160,"weather_state_name":"Showers","weather_state_abbr":"s","wind_direction_compass":"N","created":"2021-04-09T21:31:03.241712Z","applicable_date":"2021-04-11","min_temp":2.42,"max_temp":9.08,"the_temp":8.84,"wind_speed":7.373944712693867,"wind_direction":9.499999999999998,"air_pressure":1019.0,"humidity":44,"visibility":11.733041537421459,"predictability":73},{"id":5480095423660032,"weather_state_name":"Heavy Rain","weather_state_abbr":"hr","wind_direction_compass":"WNW","created":"2021-04-09T21:31:03.030779Z","applicable_date":"2021-04-12","min_temp":1.425,"max_temp":10.145,"the_temp":9.8,"wind_speed":4.96333051632864,"wind_direction":292.1667339102479,"air_pressure":1028.5,"humidity":44,"visibility":13.470084705320925,"predictability":77},{"id":5447610673397760,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"NW","created":"2021-04-09T21:31:03.651403Z","applicable_date":"2021-04-13","min_temp":3.965,"max_temp":11.36,"the_temp":10.78,"wind_speed":3.677948927911663,"wind_direction":310.75445925778604,"air_pressure":1031.5,"humidity":55,"visibility":12.995357114451602,"predictability":71},{"id":5055300039081984,"weather_state_name":"Heavy Rain","weather_state_abbr":"hr","wind_direction_compass":"N","created":"2021-04-09T21:31:05.036900Z","applicable_date":"2021-04-14","min_temp":4.0200000000000005,"max_temp":12.32,"the_temp":11.95,"wind_speed":2.837486081285294,"wind_direction":353.0,"air_pressure":1030.0,"humidity":59,"visibility":9.999726596675416,"predictability":77},{"id":5924722920390656,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"E","created":"2021-04-09T21:31:08.039050Z","applicable_date":"2021-04-15","min_temp":4.23,"max_temp":12.65,"the_temp":12.9,"wind_speed":3.740256303189374,"wind_direction":81.5,"air_pressure":1029.0,"humidity":52,"visibility":9.999726596675416,"predictability":71}],"time":"2021-04-10T01:13:45.745258+01:00","sun_rise":"2021-04-10T06:15:27.336556+01:00","sun_set":"2021-04-10T19:49:10.319679+01:00","timezone_name":"LMT","parent":{"title":"England","location_type":"Region / State / Province","woeid":24554868,"latt_long":"52.883560,-1.974060"},"sources":[{"title":"BBC","slug":"bbc","url":"http://www.bbc.co.uk/weather/","crawl_rate":360},{"title":"Forecast.io","slug":"forecast-io","url":"http://forecast.io/","crawl_rate":480},{"title":"HAMweather","slug":"hamweather","url":"http://www.hamweather.com/","crawl_rate":360},{"title":"Met Office","slug":"met-office","url":"http://www.metoffice.gov.uk/","crawl_rate":180},{"title":"OpenWeatherMap","slug":"openweathermap","url":"http://openweathermap.org/","crawl_rate":360},{"title":"Weather Underground","slug":"wunderground","url":"https://www.wunderground.com/?apiref=fc30dc3cd224e19b","crawl_rate":720},{"title":"World Weather Online","slug":"world-weather-online","url":"http://www.worldweatheronline.com/","crawl_rate":360}],"title":"London","location_type":"City","woeid":44418,"latt_long":"51.506321,-0.12714","timezone":"Europe/London"}
        commit('setClimasJSON', aux)
        commit('setTodayJSON', aux)
        commit('setWeekJSON', aux)
    },
  },
  modules: {
  }
})

function RetornarFormatoFecha(strinDate){
  var array = strinDate.split(" ");
  return array[0] + ", " + array[2] + " " + array[1];
}