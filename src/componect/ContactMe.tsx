import { Card } from "antd"
import AnimateOnScroll from "./AnimateOnScroll"
import {  FaWhatsapp } from "react-icons/fa6"

const ContactMe = () => {

  const phone = "8562098899655" // 
  // const messenger = "Laoearth lc"   // 👉 เปลี่ยน

  const message = encodeURIComponent("Hello, I'm interested in your service")

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4 py-10 text-slate-900 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-white">
      <AnimateOnScroll className="w-full max-w-5xl">
        <Card className="border-0 bg-white/80 shadow-2xl backdrop-blur-md dark:bg-white/5">
          
          <div>
            <h2 className="mb-6 text-4xl font-bold text-emerald-600 dark:text-emerald-300">
              ຕິດຕໍ່ຂ້ອຍ
            </h2>
            <hr className="border-slate-200 dark:border-slate-800" />
          </div>

          <div className="m-4 h-full w-full rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-xl dark:border-slate-800 dark:bg-slate-900/40">
            <h2 className="mb-4 text-center text-2xl font-semibold">
              ຊ່ອງທາງຕິດຕໍ່
            </h2>

            <div className="flex w-full gap-4 overflow-x-auto pb-2">

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${phone}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[260px] flex-1 rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-400/10 to-sky-400/10 p-4 shadow-lg transition hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-600">
                    <FaWhatsapp className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">WhatsApp</p>
                    <p className="text-xs">{phone}</p>
                  </div>
                  <span className="text-xs">Open</span>
                </div>
              </a>

              {/* LINE */}
              {/* <a
                href={`https://line.me/ti/p/${lineId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[260px] flex-1 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-sky-400/10 to-violet-400/10 p-4 shadow-lg transition hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-500/15 text-sky-700">
                    <FaLine className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">LINE</p>
                    <p className="text-xs">{lineId}</p>
                  </div>
                  <span className="text-xs">Open</span>
                </div>
              </a> */}

              {/* Messenger */}
              {/* <a
                href={`https://m.me/${messenger}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[260px] flex-1 rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-400/10 to-rose-400/10 p-4 shadow-lg transition hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/15 text-violet-700">
                    <FaFacebookMessenger className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Messenger</p>
                    <p className="text-xs">{messenger}</p>
                  </div>
                  <span className="text-xs">Open</span>
                </div>
              </a> */}

              {/* Phone */}
              <a
                href={`tel:${phone}`}
                className="min-w-[260px] flex-1 rounded-2xl border border-rose-400/30 bg-gradient-to-br from-rose-400/10 to-orange-400/10 p-4 shadow-lg transition hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-rose-500/15 text-rose-600">
                    📞
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Phone</p>
                    <p className="text-xs">{phone}</p>
                  </div>
                  <span className="text-xs">Call</span>
                </div>
              </a>

            </div>

            <p className="mt-4 text-center text-xs text-slate-500">
              ສາມາດຕິດຕໍ່ໄດ້ 24/7
            </p>
          </div>
        </Card>
      </AnimateOnScroll>
    </div>
  )
}

export default ContactMe