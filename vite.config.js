// @ts-check
import Icons from 'unplugin-icons/vite'
import reactPlugin from 'vite-plugin-react'
/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [
    reactPlugin,
    Icons()
  ]
}

export default config
