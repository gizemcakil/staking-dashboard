<template>
  <div class="tm-page">
    <TmPageHeader v-if="!hideHeader" :tabs="tabs">
      <h2 v-if="title" slot="title">
        {{ title }}
      </h2>
      <h3 v-if="subtitle" slot="subtitle">
        {{ subtitle }}
      </h3>
      <slot slot="menu-body" name="menu-body">
      </slot>
      <slot slot="header-buttons" name="header-buttons" />
    </TmPageHeader>
    <main class="tm-page-main">
      <slot name="managed-body" />
    </main>
  </div>
</template>

<script>
import TmPageHeader from "./TmPageHeader.vue"
import { mapState } from "vuex"

export default {
  name: `page-container`,
  components: {
    TmPageHeader
  },
  props: {
    hideHeader: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ``
    },
    subtitle: {
      type: String,
      default: ``
    },
    managed: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: undefined
    },
    tabs: {
      type: Array,
      default: undefined
    },
    loading: {
      type: Boolean,
      default: false
    },
    loaded: {
      type: Boolean,
      default: undefined
    },
    dataEmpty: {
      type: Boolean,
      default: undefined
    },
    signInRequired: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState([`session`])
  },
  watch: {
    $route() {
      this.scrollContainer.scrollTop = 0
    }
  },
  mounted() {
    this.scrollContainer = this.$el.querySelector(`.tm-page-main`)
  }
}
</script>

<style scoped>
.tm-page {
  border-bottom: 1px solid var(--light);
  background:var(--background);
  position: relative;
  width: 100%;

}

.tm-page.small {
  max-width: 720px;
}

.tm-page-main {
  position: relative;
  padding: 0 var(--double);
}

.tm-page-title {
  color: var(--bright);
  font-size: var(--h2);
  padding: 0.5rem 1rem 1rem;
}

.tm-page-subtitle > div {
  color: var(--dim);
  font-size: var(--sm);
}

.column {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: normal;
  width: 100%;
}

.row {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 0 1rem;
}

.page-profile__section {
  margin-bottom: 1rem;
}

.page-profile__section-title {
  margin: 0 0 0.25rem 1rem;
  color: var(--dim);
  font-size: var(--sm);
  font-weight: 500;
}

li {
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid var(--bc-dim);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

li:last-child {
  border-bottom: none;
}

h4 {
  color: var(--txt);
  font-size: var(--sm);
  margin-bottom: 2px;
  font-weight: 500;
}

.row span {
  color: var(--txt);
  font-size: var(--sm);
  font-weight: 400;
  line-height: 1rem;
}

.footer {
  width: 100%;
  background: var(--app-fg);
  padding: 0.5rem;
  margin-top: 1rem;
}

.app-menu-item-small {
  display: inline-block;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.25rem;
  margin: 0 0.5rem;
  color: var(--dim);
  border-radius: 0.25rem;
  font-size: var(--sm);
}

.link-list {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.link-list li {
  display: inline;
}

@media screen and (min-width: 1024px) {
  .tm-page {
  }
}

@media screen and (max-width: 667px) {
  /* .row {
    flex-direction: column;
  }

  .page-profile__header__actions {
    margin-right: 0;
  }

  .tm-page {
  } */
}
</style>
