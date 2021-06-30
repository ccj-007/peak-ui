import Button from './package/pButton'

const components = {
  pButton: Button,
}

const install = function (Vue, options = {}) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
}
export default install