module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@ergosign/storybook-addon-pseudo-states-vue",
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: false // TODO: Implement docs support in plugin
      }
    }
  ]
}
