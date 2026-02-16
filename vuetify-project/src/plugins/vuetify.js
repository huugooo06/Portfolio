/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import '@/styles/main.scss' // Import custom styles

const portfolioTheme = {
  dark: true,
  colors: {
    'background': '#081b29',
    'surface': '#081b29',
    'primary': '#00abf0',
    'primary-darken-1': '#0099d6',
    'secondary': '#03DAC6',
    'secondary-darken-1': '#018786',
    'error': '#B00020',
    'info': '#2196F3',
    'success': '#4CAF50',
    'warning': '#FB8C00',
    'on-surface': '#ededed',
  },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'portfolioTheme',
    themes: {
      portfolioTheme,
    },
  },
})
