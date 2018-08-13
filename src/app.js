// Parents
import Vue from 'vue'
import VAlert from './components/VAlert.vue'
import VBreadcrumbs from './components/VBreadcrumbs.vue'
import VButton from './components/VButton.vue'
import VCard from './components/VCard.vue'
import VDropdown from './components/VDropdown.vue'
import VHero from './components/VHero.vue'
import VExpander from './components/VExpander.vue'
import VForm from './components/VForm.vue'
import VList from './components/VList.vue'
import VModal from './components/VModal.vue'
import VPagination from './components/VPagination.vue'
import VSlab from './components/VSlab.vue'
import VSlide from './components/VSlide.vue'
import VSlider from './components/VSlider.vue'
import VTable from './components/VTable.vue'
import VTab from './components/VTab.vue'
import VTabs from './components/VTabs.vue'
import VTestimonial from './components/VTestimonial.vue'
import VTooltip from './components/VTooltip.vue'

// Children
import VContent from './components/children/VContent.vue'
import VImage from './components/children/VImage.vue'
import VTitle from './components/children/VTitle.vue'

new Vue({
  el: '#app',
  components: {
    // Parents
    'v-alert': VAlert,
    'v-breadcrumbs': VBreadcrumbs,
    'v-button': VButton,
    'v-card': VCard,
    'v-dropdown': VDropdown,
    'v-hero': VHero,
    'v-expander': VExpander,
    'v-form': VForm,
    'v-list': VList,
    'v-modal': VModal,
    'v-pagination': VPagination,
    'v-slab': VSlab,
    'v-slide': VSlide,
    'v-slider': VSlider,
    'v-table': VTable,
    'v-tab': VTab,
    'v-tabs': VTabs,
    'v-testimonial': VTestimonial,
    'v-tooltip': VTooltip,
    // Children
    'v-content': VContent,
    'v-image': VImage,
    'v-title': VTitle
  }
})
