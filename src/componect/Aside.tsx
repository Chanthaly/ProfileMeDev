import { Typography } from "antd"
import { motion } from "framer-motion"
import {
  FaFacebookMessenger,
  FaGithub,
  FaHouse,
  FaLine,
  FaWhatsapp,
} from "react-icons/fa6"
import { MdContactSupport } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useUi } from "../context/UIContext"
import AnimateOnScroll from "./AnimateOnScroll"

const Aside = () => {
  const navigate = useNavigate()
  const { language } = useUi()

  const t =
    language === "en"
      ? {
          address: "Address",
          addressText: "Phonphanao Village, Xaysettha, Vientiane Capital",
          contact: "Contact me",
        }
      : language === "th"
      ? {
          address: "ที่อยู่",
          addressText: "บ้านโพนพะเนา ไซเสดถา นครหลวงเวียงจันทน์",
          contact: "ติดต่อฉัน",
        }
      : {
          address: "Address",
          addressText: "ບ້ານໂພນພະເນົາ ໄຊເຊດຖາ, ນະຄອນຫລວງ",
          contact: "ຕິດຕໍ່ຂ້ອຍ",
        }

  return (
    <AnimateOnScroll className="w-full">
      <div className="flex w-full flex-col items-center justify-center bg-transparent px-4 py-10">
        <motion.img
          className="h-24 w-24 rounded-2xl shadow-lg shadow-blue-500/20"
          src="/Logo.png"
          alt="logo"
          whileHover={{ scale: 1.08, rotate: 2 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
        />

        <Typography.Title
          level={4}
          className="!mb-3 !mt-4 flex w-full flex-col items-center justify-center gap-2 text-center !text-slate-900 dark:!text-white"
        >
          <FaHouse className="text-3xl text-cyan-500" title={t.address} />
          <span className="text-base font-semibold">{t.addressText}</span>
        </Typography.Title>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-lg font-semibold text-blue-700 transition hover:bg-blue-500/20 dark:text-blue-200"
          onClick={() => navigate("/contact")}
        >
          <MdContactSupport />
          {t.contact}
        </button>

        <div className="mt-6 flex h-10 w-72 items-center justify-center rounded-full border border-blue-500/30 bg-gradient-to-bl from-pink-400 to-blue-600 text-2xl text-white shadow-lg shadow-blue-500/20">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="m-2 rounded-full px-2 py-1 transition hover:bg-white/15"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="m-2 rounded-full px-2 py-1 transition hover:bg-white/15"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="#"
            className="m-2 rounded-full px-2 py-1 transition hover:bg-white/15"
            aria-label="Messenger"
            title="Messenger"
          >
            <FaFacebookMessenger />
          </a>
          <a
            href="#"
            className="m-2 rounded-full px-2 py-1 transition hover:bg-white/15"
            aria-label="LINE"
            title="LINE"
          >
            <FaLine />
          </a>
        </div>
      </div>
    </AnimateOnScroll>

  )
}

export default Aside
