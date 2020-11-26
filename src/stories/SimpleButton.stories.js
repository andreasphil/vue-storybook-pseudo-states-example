import { withPseudo } from "@ergosign/storybook-addon-pseudo-states-vue"
import { PseudoStateOrderDefault } from "@ergosign/storybook-addon-pseudo-states-vue/dist/share/types"
import SimpleButton from "../components/SimpleButton.vue"

export default {
  title: "Simple Button",
  decorators: [withPseudo],
  parameters: {
    withPseudo: {
      pseudo: PseudoStateOrderDefault,
      attributes: ["disabled", { attr: "appearance", value: "primary" }]
    }
  },
  argTypes: {
    appearance: {
      control: false
    }
  }
}

const template = (args, { argTypes }) => ({
  components: { SimpleButton },
  props: Object.keys(argTypes),
  template: '<simple-button :label="label" :disabled="disabled" />'
})

export const PseudoStates = template.bind({})
PseudoStates.args = {
  label: "Hello World",
  disabled: false,
  appearance: false
}
