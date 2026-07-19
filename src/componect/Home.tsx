import Image from "./Image"
  // แก้ชื่อให้ถูก (เดิมเป็น typing)
import AnimateOnScroll from "./AnimateOnScroll"
import { Button, message, Typography } from "antd"
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
    <div className="min-h-[100dvh] flex flex-col bg-gradient-to-bl from-pink-400 via-purple-500 to-blue-600 px-6 py-16 md:py-12 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
  <div  className=" w-full sm:items-center justify-center sm:m-5 ">
    <Typography.Text  className="!bg-red-100 text-3xl p-3 mx-5 rounded-3xl !text-blue-600 sm:justify-center ">
       FULLSTACK DEVELOPER
    </Typography.Text>
  </div>
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* ส่วนข้อความด้านซ้าย */}
        <AnimateOnScroll className="relative flex-1 max-w-xl text-left lg:max-w-lg">
          <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -bottom-6 right-0 h-40 w-40 rounded-full bg-fuchsia-400/20 blur-3xl" />
          <div className="relative">
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