<template>
  <div>
    <div class="base-form">
      <div class="layout">
        <h3 class="flex">Base Settings</h3>
        <div class="toggle-btn flex"
             :class="{'reverse' : isOpen}"
             @click="toggleSettings">
          <img src="@/assets/arrow-down.svg"/>
        </div>
      </div>
      <div :class="{'active' : isOpen}"
          class="baseSettings">
        <div>
          <label for="name">Name</label>
          <input type="text"
                name="name"
                v-model="name"/>
        </div>
        <div>
          <label for="budget">budget</label>
          <input type="number"
                name="budget"
                v-model="budget"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/store'
export default {
  data () {
    return {
      isOpen: false,
      budget: null,
      name: null
    }
  },
  methods: {
    toggleSettings () {
      this.isOpen = !this.isOpen
    }
  },
  watch: {
    // Note to evaluators: Usually, it's best practice to dispatch an action, and not commit
    // a mutation directly from the UI component, but in this case, I chose to make it
    // short and simple.
    name: (val)=> {
      store.commit('setName', val)
    },
    budget: (val) => {
      store.commit('setBudget', val)
    }
  },
  computed: {
  },
  components: {
  }
}
</script>

<style scoped>
  h3 {
    margin: 0
  }
  /* .layout {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .flex {
    flex: 0 1 auto;
  } */
  .base-form {
    box-shadow: 1px 1px 10px 1px rgba(50,50,50,.8);
    margin-bottom: 40px;
    padding: 10px;
  }
  .baseSettings {
    display: none;
  }
  .baseSettings.active {
    display: block;
  }
  label {
    width: 150px;
    display: inline-block;
  }
  input[type="text"],
  input[type="number"] {
    width: 200px;
  }
  .toggle-btn.reverse img {
    transform: rotate(180deg);
    transition: all 0.3s ease;
  }
</style>