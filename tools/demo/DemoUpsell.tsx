/**
 * Demo-only notices, copied into the app at build time (tools/build-demo.sh).
 *
 * The demo runs on captured fixtures, so anything that would need a live
 * backend — connecting a bank, the other 13 currencies, syncing — can't work
 * here. Rather than letting those surfaces fail or sit there looking broken,
 * they say what the full app does and point at the waitlist.
 *
 * Links leave the demo for the marketing site, so they're plain anchors with
 * absolute paths, not router links.
 */
import { ReactNode } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

const SIGNUP = '/#contact'

/** A full card, for where a whole feature is unavailable. */
export function DemoUpsell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div
      className="flex flex-col gap-3 rounded-2xl border p-4"
      style={{ borderColor: 'rgb(var(--brand) / 0.28)', background: 'rgb(var(--brand) / 0.05)' }}
    >
      <div className="flex items-center gap-2.5">
        <div className="rounded-xl bg-brand/12 p-2 text-brand">
          <Sparkles size={18} />
        </div>
        <div className="font-semibold text-ink">{title}</div>
      </div>
      <p className="text-sm leading-relaxed text-muted">{children}</p>
      <a href={SIGNUP} className="btn-primary self-start">
        Get early access <ArrowRight size={16} />
      </a>
    </div>
  )
}

/** One line, for tucking under a control that only partly works here. */
export function DemoNote({ children }: { children: ReactNode }) {
  return (
    <div
      className="mt-1.5 border-t px-2.5 pb-1 pt-2 text-xs leading-relaxed text-muted"
      style={{ borderColor: 'rgb(var(--hairline) / 0.12)' }}
    >
      {children}{' '}
      <a href={SIGNUP} className="font-semibold text-brand hover:underline">
        Get early access
      </a>
    </div>
  )
}
