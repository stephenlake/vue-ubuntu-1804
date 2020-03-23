import Vue from 'vue'
import UpperFirst from 'lodash/upperFirst'
import CamelCase from 'lodash/camelCase'

const requireComponent = require.context('./components/', true, /[A-Z]\w+\.(vue|js)$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = UpperFirst(
    CamelCase(
      fileName
      .split('/')
      .pop()
      .replace(/\.\w+$/, '')
    )
  )

  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})
