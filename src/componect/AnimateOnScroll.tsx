import { motion, useInView } from "framer-motion"
import { useMemo, useRef } from "react"

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
}

const AnimateOnScroll = ({ children, className, delay = 0 }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-80px 0px" })

  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
      show: { opacity: 1, y: 0, filter: "blur(0px)" },
    }),
    [],
  )

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  )
}

export default AnimateOnScroll

