import { useEffect, useState } from "react"

const Typingtext: React.FC = () => {
  const text = "Full Stack Dev"
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1))
      }, 90)

      return () => clearTimeout(timeout)
    }
  }, [displayText])

  return (
    <h2 className="w-full p-2 text-left text-2xl font-semibold tracking-wide text-white transition-all duration-300 ease-in-out sm:text-3xl md:text-4xl">
      <span className="inline-flex min-h-[1.4em] items-center bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-400 bg-clip-text text-transparent">
        {displayText}
        <span
          className="ml-1 inline-block h-[1em] w-[3px] rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.7)]"
          style={{ animation: "blink 1s step-end infinite" }}
        />
      </span>
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
