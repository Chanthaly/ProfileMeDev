import { motion } from "framer-motion"

const Image = () => {
  const coverPieces = [
    { id: 1, className: "left-0 top-0 h-[55%] w-[48%] rounded-tl-[1.5rem]" },
    { id: 2, className: "right-0 top-0 h-[55%] w-[48%] rounded-tr-[1.5rem]" },
    { id: 3, className: "bottom-0 left-0 h-[40%] w-[48%] rounded-bl-[1.5rem]" },
    { id: 4, className: "bottom-0 right-0 h-[40%] w-[48%] rounded-br-[1.5rem]" },
  ]

  return (
    <div className="relative mx-auto w-full max-w-[380px] overflow-hidden rounded-[2rem] bg-slate-900/10 p-3 shadow-none sm:max-w-[420px] md:max-w-[460px]">
      <motion.img
      
        alt="Profile 140 X 140 PX"
        className="relative z-10 h-auto w-full rounded-[1.5rem] object-cover"
        initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      />

      {coverPieces.map((piece, index) => (
        <motion.div
          key={piece.id}
          className={`absolute ${piece.className} bg-slate-950/80 backdrop-blur-sm`}
          initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          animate={{ opacity: 0, x: index % 2 === 0 ? -20 : 20, y: index < 2 ? -20 : 20, scale: 0.96 }}
          transition={{ duration: 1.0, delay: index * 0.2, ease: "easeOut" }}
        />
      ))}
    </div>
  )
}

export default Image
