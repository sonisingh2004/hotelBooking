import { MessageCircle } from "lucide-react"

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/919124754005"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-[200]
        w-14 h-14
        bg-[#25D366]
        rounded-full
        flex items-center justify-center
        shadow-lg
        hover:scale-110 transition
      "
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="text-white" size={28} />
    </a>
  )
}

export default WhatsAppFloat
