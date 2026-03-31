import config from '@/payload.config'
import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import { importMap } from './admin/importMap'
import { handleServerFunctions } from './server-actions'
import '@payloadcms/next/css'
import './custom.css'

type Args = {
  children: React.ReactNode
}

const Layout = async ({ children }: Args) => {
  return (
    <RootLayout config={config} importMap={importMap} serverFunction={handleServerFunctions}>
      {children}
    </RootLayout>
  )
}

export default Layout
