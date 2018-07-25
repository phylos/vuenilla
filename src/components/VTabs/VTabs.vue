<template>
  <div class="v-tabs">
    <ul class="v-tab-title">
      <li v-for="tab in tabs" :key="tab.id" :class="{ 'tabActive': tab.tabActive }">
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
      tabClicked(tabClicked) {
        this.tabs.forEach(tab => {
          tab.tabActive = (tab.href == tabClicked.href);
        });
      }
    }
  }
</script>
