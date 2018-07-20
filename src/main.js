import Vue from 'vue'
import App from './App.vue'
import Accordion from './components/Accordion.vue'
import Alert from './components/Alert.vue'
import Breadcrumbs from './components/Breadcrumbs.vue'
import Button from './components/Button.vue'
import Card from './components/Card.vue'
import Carousel from './components/Carousel.vue'
import Dropdown from './components/Dropdown.vue'
import Hero from './components/Hero.vue'
import Expander from './components/Expander.vue'
import Form from './components/Form.vue'
import Icon from './components/Icon.vue'
import List from './components/List.vue'
import Modal from './components/Modal.vue'
import Pagination from './components/Pagination.vue'
import Slab from './components/Slab.vue'
import Tabs from './components/Tabs.vue'
import Table from './components/Table.vue'
import Testimonial from './components/Testimonial.vue'
import Toast from './components/Toast.vue'
import Tooltip from './components/Tooltip.vue'

Vue.component('v-accordion', Accordion);
Vue.component('v-alert', Alert);
Vue.component('v-breadcrumbs', Breadcrumbs);
Vue.component('v-button', Button);
Vue.component('v-card', Card);
Vue.component('v-carousel', Carousel);
Vue.component('v-dropdown', Dropdown);
Vue.component('v-hero', Hero);
Vue.component('v-expander', Expander);
Vue.component('v-form', Form);
Vue.component('v-icon', Icon);
Vue.component('v-list', List);
Vue.component('v-modal', Modal);
Vue.component('v-pagination', Pagination);
Vue.component('v-slab', Slab);
Vue.component('v-tabs', Tabs);
Vue.component('v-table', Table);
Vue.component('v-testimonial', Testimonial);
Vue.component('v-toast', Toast);
Vue.component('v-tooltip', Tooltip);

new Vue({
  el: '#app',
  render: h => h(App)
})
