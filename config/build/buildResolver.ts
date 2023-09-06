import { type ResolveOptions } from 'webpack'

export function buildResolver (): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js']
  }
}
