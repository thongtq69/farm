'use server'
import { handleServerFunctions as handle } from '@payloadcms/next/layouts'

export const handleServerFunctions = async (args: any) => {
  return handle(args)
}
