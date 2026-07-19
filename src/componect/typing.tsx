import { useEffect, useState } from "react"

const Typingtext: React.FC = () => {
  const text = "ສະບາຍດີຍິນຕ້ອນຮັບສູ່ PROFILE-MEDEV"
  const [displayText, setDisplayText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index))
        setIndex((prev) => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [index, text])

  return (
    <h2 className="w-full p-2 text-left text-2xl font-semibold tracking-wide !text-blue-600 transition-all duration-300 ease-in-out sm:text-3xl md:text-4xl">
      {displayText}
      <span className="ml-1 inline-block h-[1em] w-[3px] bg-blue-600" style={{ animation: "blink 0.8s step-end infinite" }} />
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </h2>
  )
}

export default Typingtext
