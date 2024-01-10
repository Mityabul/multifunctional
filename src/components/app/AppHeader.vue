<template>
  <v-app-bar
      app
      absolute
      flat
      height="52"
      color="white"
      class="header"
  >
    <v-btn icon @click="setDrawer">
      <v-icon color="#0D4092" class="material-icons">menu</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { store } from '@/main';
import { mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters({
      name: 'name',
    }),
  },
  methods: {
    setDrawer () {
      store.commit('setDrawer', !store.state.drawer);
    },
  },
};
</script>

<style lang="scss" scoped>
.v {

  &-app-bar {

    &.header {

      &:before {
        position: absolute;
        content: '';
        top: calc(100% - 1px);
        left: 0;
        width: 100%;
        border-bottom: 1px solid #E2E4E7;
      }
    }
  }

  &-toolbar-title {

    span {
      color: #59606A;
    }
  }

  &-btn {

    span {
      font-size: 16px;
      line-height: 1;
      color: #59606A;
      text-transform: none;
    }
  }
}

.logout {
  cursor: pointer;
}
.logout:hover {
  text-decoration: underline;
  cursor: pointer;
}

.menu-list {
  margin-top: 25px;
  z-index: 9999;
}

</style>
