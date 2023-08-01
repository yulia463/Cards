import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import type { Preview } from '@storybook/react'
import '../src/styles/index.scss'
import {RouterDecorator} from "../src/storybook/routerDecorator/routerDecotator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/,
      },
    },
  },
    decorators: [RouterDecorator]
};

export default preview;