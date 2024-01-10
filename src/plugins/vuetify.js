import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import ru from 'vuetify/es5/locale/ru';
import DatetimePicker from 'vuetify-datetime-picker';

Vue.use(Vuetify);
Vue.use(DatetimePicker);

export default new Vuetify({
  lang: {
    locales: { ru },
    current: 'ru',
  },
});
