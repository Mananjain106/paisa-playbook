import { createClient, type SupabaseClient } from '@supabase/supabase-js'

/**
 * Supabase is optional. If the env vars are missing the app runs entirely on
 * localStorage and every sync call becomes a no-op — see `isSyncEnabled`.
 *
 * `import.meta.env` only exists under Vite, so fall back to `process.env` for
 * the Node-based test scripts that import this module.
 */
const viteEnv = (import.meta as unknown as { env?: Record<string, string | undefined> }).env
// `globalThis.process` avoids depending on @types/node in the app tsconfig.
const nodeEnv = (
  globalThis as unknown as { process?: { env?: Record<string, string | undefined> } }
).process?.env

const url = viteEnv?.VITE_SUPABASE_URL ?? nodeEnv?.VITE_SUPABASE_URL
const key = viteEnv?.VITE_SUPABASE_PUBLISHABLE_KEY ?? nodeEnv?.VITE_SUPABASE_PUBLISHABLE_KEY

const looksConfigured = Boolean(
  url && key && url.startsWith('https://') && !url.includes('your-project-ref'),
)

export const isSyncEnabled = looksConfigured

export const supabase: SupabaseClient | null = looksConfigured
  ? createClient(url!, key!, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null