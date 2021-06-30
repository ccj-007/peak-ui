import Button from './package/pButton'
import Dialog from './package/pDialog'
import Form from './package/pForm'
import Input from './package/pInput'
import Notice from './package/pNotice'
const components = {
  pButton: Button,
  pDialog: Dialog,
  pForm: Form,
  pInput: Input,
  pNotice: Notice,
}

const install = function (Vue, options = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
}
export default install

