export const contactDetails = {
  email: 'paulriemii@gmail.com',
  phoneDisplay: '+254115346990',
  address: 'Westlands, Nairobi, Kenya',
  addressNote: 'Sample location for this portfolio demonstration',
}

export const WHATSAPP_PHONE = '+254115346990'

export function getWhatsAppUrl(message: string): string | null {
  const digits = WHATSAPP_PHONE.replace(/\D/g, '')

  if (digits.length < 10 || /^0+$/.test(digits)) {
    return null
  }

  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}
