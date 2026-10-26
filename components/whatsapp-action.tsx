import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/site-config'

type WhatsAppActionProps = {
  message: string
  className?: string
}

export function WhatsAppAction({ message, className = '' }: WhatsAppActionProps) {
  const href = getWhatsAppUrl(message)

  if (!href) {
    return (
      <div className={`whatsapp-action ${className}`}>
        <button className="button button--outline button--full" type="button" disabled>
          <MessageCircle size={17} aria-hidden="true" /> WhatsApp enquiry
        </button>
        <p>WhatsApp is not configured for this demo, so no message will be sent.</p>
      </div>
    )
  }

  return (
    <div className={`whatsapp-action ${className}`}>
      <a className="button button--outline button--full" href={href} target="_blank" rel="noreferrer">
        <MessageCircle size={17} aria-hidden="true" /> WhatsApp enquiry
      </a>
    </div>
  )
}
