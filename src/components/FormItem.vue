<template>
  <div class="form-item">
    <div class="layout">
      <div class="flex">
        <h3>Form item</h3>
      </div>
      <div class="toggle-btn flex"
           :class="{'reverse' : isOpen}"
           @click="toggleSettings">
        <img src="@/assets/arrow-down.svg"/>
      </div>

    </div>
    <div class="settings"
         :class="{'active' : isOpen}">
      <div>
        <label for="name">Name</label>
        <input type="text"
               name="name"
               :disabled="inherit"
               v-model="localName"/>
      </div>
      <div>
        <label for="budget">Budget</label>
        <input type="number"
               name="budget"
               :disabled="inherit"
               v-model="localBudget"/>
      </div>
      <div>
        <label for="override" name="override">Inherit</label>
        <input type="checkbox"
               name="override"
               v-model="inherit"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      isOpen: false,
      name: null,
      budget: null,
      inherit: false
    }
  },
  computed: {
    ...mapGetters([
      'getName',
      'getBudget'
    ]),
    localName: {
      get: function () {
        return this.inherit ? this.getName : this.name
      },
      set: function (val) {
        this.name = val
      }
    },
    localBudget: {
      get: function () {
        return this.inherit ? this.getBudget : this.budget
      },
      set: function (val) {
        this.budget = val
      }
    },
  },
  methods: {
    toggleSettings () {
      this.isOpen = !this.isOpen
    }
  },
  mounted () {
  }
}
</script>

<style>
  .form-item {
    box-shadow: 1px 1px 5px 1px rgba(50,50,50,.5);
    padding: 10px;
  }
  .settings {
    display: none;
  }
  .settings.active {
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