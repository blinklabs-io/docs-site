import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Blink Labs</span>,
  project: {
    link: 'https://github.com/blinklabs-io/docs-site',
  },
  chat: {
    link: 'https://discord.com/5fPRZnX4qW',
  },
  docsRepositoryBase: 'https://github.com/blinklabs-io/docs-site',
  footer: {
    text: 'Blink Labs',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
}

export default config
