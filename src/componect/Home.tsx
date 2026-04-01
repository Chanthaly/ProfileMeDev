import Image from "./Image"
import Typingtext from "./typing"
import AnimateOnScroll from "./AnimateOnScroll"
import { Button, message } from "antd"
import { DownloadOutlined } from "@ant-design/icons"

const Home = () => {
  const handleDownloadCv = async () => {
    try {
      const res = await fetch("/Cv.pdf", { method: "HEAD" })
      if (!res.ok) {
        message.error(
          "ไม่พบไฟล์ Cv.pdf — ให้วางไฟล์ที่ react/ts/public/Cv.pdf แล้วรันใหม่",
        )
        return
      }

      const a = document.createElement("a")
      a.href = "/Cv.pdf"
      a.download = "My-CV.pdf"
      document.body.appendChild(a)
      a.click()
      a.remove()
    } catch {
      message.error("ดาวน์โหลดไม่สำเร็จ กรุณาลองใหม่อีกครั้ง")
    }
  }

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-8 bg-gradient-to-bl from-pink-400 via-purple-500 to-blue-600 px-4 py-12 md:flex-row md:justify-between dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <AnimateOnScroll className="max-w-xl">
        <Typingtext />
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button
            type="primary"
            size="large"
            icon={<DownloadOutlined />}
            className="!bg-emerald-600 hover:!bg-emerald-500"
            onClick={handleDownloadCv}
          >
            Download my CV
          </Button>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll className="flex items-center justify-center" delay={0.1}>
        <Image />
      </AnimateOnScroll>
    </div>
  )
}

export default Home
