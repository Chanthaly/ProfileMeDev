import Image from "./Image"
  // แก้ชื่อให้ถูก (เดิมเป็น typing)
import AnimateOnScroll from "./AnimateOnScroll"
import { Button, message } from "antd"
import { DownloadOutlined } from "@ant-design/icons"
import Typingtext from "./typing"

const Home = () => {
  const handleDownloadCv = async () => {
    try {
      const res = await fetch("/Cv.pdf", { method: "HEAD" })
      if (!res.ok) {
        message.error(
          "ไม่พบไฟล์ Cv.pdf — ให้วางไฟล์ที่ public/Cv.pdf แล้วรันใหม่",
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
    <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-gradient-to-bl from-pink-400 via-purple-500 to-blue-600 px-6 py-16 md:py-12 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* ส่วนข้อความด้านซ้าย */}
        <AnimateOnScroll className="flex-1 text-left max-w-xl lg:max-w-lg">
          <Typingtext />
          
          <div className="mt-8 flex flex-wrap items-center justify-start gap-4">
            <Button
              type="primary"
              size="large"
              icon={<DownloadOutlined />}
              className="!bg-emerald-600 hover:!bg-emerald-500 !border-none text-base px-8 py-6"
              onClick={handleDownloadCv}
            >
              Download my CV
            </Button>
          </div>
        </AnimateOnScroll>

        {/* ส่วนรูปภาพด้านขวา */}
        <AnimateOnScroll 
          className="flex-1 flex items-center justify-center" 
          delay={0.1}
        >
          <div className="relative w-full max-w-[380px] md:max-w-[420px] lg:max-w-[460px]">
            <Image />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  )
}

export default Home