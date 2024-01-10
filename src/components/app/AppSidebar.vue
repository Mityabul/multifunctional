<template>
  <v-navigation-drawer
      app
      class="mx-auto nav"
      v-model="toggleSidebar"
  >
    <v-list dense nav class="nav-logo my-0 py-0 pl-0">
        <img src="../../../public/figures.jpg" alt="evo" class="logo">
    </v-list>
    <v-list dense nav class="sidebar list-mobile">
      <router-link
          v-for="(link, index) in filteredLinks"
          :key="index"
          :href="`${link.path}`"
          :title="link.meta.title"
          :to="link.path"
          class="text-none"
      >
        <v-list-item link class="list-item" :class="{ active: isActiveLink(link.path) }">
          <v-list-item-icon class="nav-icon mr-4">
            <v-icon size="16" tag="span" class="material-icons">
              {{ link.meta.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content class="py-0 nav-link">
            {{ link.meta.title }}
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppSidebar',
  methods: {
    isActiveLink (path) {
      return this.$route.path === path;
    },
  },
  computed: {
    ...mapGetters(['drawer']),
    toggleSidebar: {
      get () {
        return this.drawer;
      },
      set (value) {
        this.$store.commit('setDrawer', value);
      },
    },
    filteredLinks () {
      return this.$router.options.routes.filter(route => {
        return route.meta.auth === true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  transition: transform 0.3s ease;
}

.list-item:hover {
  transform: translateX(5px);
}
.active {
  background-color: rgba(49,62,129,100);
  color: white;
}
.nav {
  max-width: 256px;
  width: 100%;
  background: linear-gradient(300deg, rgba(91,19,110,1) 0%, rgba(49,62,129,1) 100%);

  &-logo {
    height: 52px;
    border: 1px solid #335283;

    .logo {
      width: 260px;
      height: 50px;
    }
  }

  &-icon {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    width: 16px;
    height: 16px;

    span {
      color: #ffffff;
    }
  }

  &-link {
    padding: 8px 0;
    color: #FFFFFF;
    font-family: "SF Pro Display";
    font-size: 16px;
    line-height: 16px;
  }

  a {
    text-decoration: none;
  }

  .v-list-group__header__prepend-icon span {
    color: #ffffff;
  }
}
</style>

<style lang="scss">
.users {
  .v-list-item__icon.v-list-group__header__prepend-icon {
    margin-right: 14px;
    margin-left: 4px;
  }
  .v-list-group__header__append-icon {
    display: none;
  }
}
@media screen and (max-width: 800px) {
  .list-mobile {
    padding-bottom: 100px
  }
}
</style>
