<template>
  <header class="tm-page-header">
    <div class="tm-page-header-container">
      <div class="tm-page-header-text">
        <div v-if="$slots['title']" class="tm-page-header-title">
          <slot name="title" />
        </div>
        <div v-if="$slots['subtitle']" class="tm-page-header-subtitle">
          <slot name="subtitle" />
        </div>
        <div v-if="$slots['menu-body']" class="tm-page-header-body">
          <slot name="menu-body" />
        </div>
      </div>
      <menu class="tm-page-header-menu">
        <slot name="menu" />
      </menu>
      <div class="tabs-and-buttons">
        <Tabs v-if="tabs" :tabs="tabs" />
        <div v-if="$slots['header-buttons']" class="header-buttons">
          <slot name="header-buttons" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Tabs from "common/Tabs"
export default {
  name: `tm-page-header`,
  components: { Tabs },
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.tm-page-header {
  background: white;
  display: flex;
  align-items: center;
  height: 56px;
  color: var(--gray);
  border-bottom: 1px solid var(--light);
}

.header-buttons {
  padding: 0 1rem 1rem 0;
}

.tabs-and-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}

.tm-page-header-title > div {
  display: inline-block;
}

.tm-page-header-text .tm-page-header-body {
  flex: 1;
  display: flex;
}

.tm-page-header-text .tool-bar i.material-icons {
  font-size: calc(1.375 * var(--x));
}

.tm-page-header-text > div {
  overflow: hidden;
  text-overflow: ellipsis;
}

.tm-page-header-text h2 {
  padding-left: var(--double);
  text-transform: uppercase;
  color: var(--blue);
}

@media screen and (max-width: 425px) {
  /* .header-buttons .tm-btn {
    width: 100%;
  } */
}

@media screen and (max-width: 767px) {
  /* .tm-page-header-body {
    padding: 0;
  }

  .tabs {
    width: 100%;
  }

  .tabs-and-buttons {
    flex-direction: column;
  }

  .header-buttons {
    width: 100%;
    padding: 1rem;
    background: var(--app-bg);
  }

  .tm-page-header-text .tm-page-header-body {
    display: block;
  } */
}
</style>
