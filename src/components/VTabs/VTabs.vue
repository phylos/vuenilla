<template>
  <div class="v-tabs">
    <ul class="v-tab-title">
      <li v-for="tab in tabs" :class="{ 'tabActive': tab.tabActive }">
        <a :href="tab.href" @click="tabClicked(tab)">{{ tab.name }}</a>
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
  export default {
    data () {
      return { 
        tabs: [] 
      }
    },

    created() {
      this.tabs = this.$children;
    },
    
    methods: {
      tabClicked(selectedTab) {
        this.tabs.forEach(tab => {
          tab.tabActive = (tab.href == selectedTab.href);
        });
      }
    }
  }
</script>
