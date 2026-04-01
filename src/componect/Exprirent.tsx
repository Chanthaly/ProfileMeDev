import { Card, Steps } from "antd"
import AnimateOnScroll from "./AnimateOnScroll"
import { useUi } from "../context/UIContext"

const Exprirent = () => {
  const { language } = useUi()

  const t =
    language === "th"
      ? {
          pageTitle: "ประสบการณ์",
          workTitle: "ประสบการณ์ทำงาน",
          projectTitle: "โปรเจกต์ที่เคยทำ",
          present: "ปัจจุบัน",
          jobs: [
            { title: "IT Support — บริษัท โชคทวี", desc: "2024 – 2026" },
            {
              title: "IT Support — บริษัท lailaolab",
              desc: "2026 – ปัจจุบัน",
            },
          ],
          projects: [
            { title: "Landing Page", desc: "หน้าเว็บโปรโมท / การตลาด" },
            { title: "Sale Page", desc: "หน้าขายสินค้า / โปรโมชัน" },
            { title: "E‑Commerce", desc: "สินค้า, ตะกร้า, เช็คเอาท์" },
            { title: "POS (Point of Sale)", desc: "ขายหน้าร้าน + สต๊อกพื้นฐาน" },
          ],
        }
      : language === "en"
      ? {
          pageTitle: "Experience",
          workTitle: "Work Experience",
          projectTitle: "Projects",
          present: "Present",
          jobs: [
            { title: "IT Support — Chokthavee Company", desc: "2024 – 2026" },
            { title: "IT Support — lailaolab", desc: "2026 – Present" },
          ],
          projects: [
            { title: "Landing Page", desc: "Static / marketing landing pages" },
            { title: "Sale Page", desc: "Product showcase / sales page" },
            { title: "E‑Commerce", desc: "Catalog, cart, checkout flow" },
            { title: "POS (Point of Sale)", desc: "Sales + basic inventory" },
          ],
        }
      : {
          pageTitle: "ປະສົບການ",
          workTitle: "ປະສົບການເຮັດວຽກ",
          projectTitle: "Project ທີ່ເຄີຍເຮັດ",
          present: "ປັດຈຸບັນ",
          jobs: [
            { title: "IT Support — ບໍລິສັດ ໂຊກທະວີ", desc: "2024 – 2026" },
            { title: "IT Support — ບໍລິສັດ lailaolab", desc: "2026 – ປັດຈຸບັນ" },
          ],
          projects: [
            { title: "Landing Page", desc: "ໜ້າໂປຣໂມດ / ການຕະຫຼາດ" },
            { title: "Sale Page", desc: "ໜ້າຂາຍ / ໂປຣໂມຊັນ" },
            { title: "E‑Commerce", desc: "ສິນຄ້າ, cart, checkout" },
            { title: "POS (Point of Sale)", desc: "ຂາຍໜ້າຮ້ານ + stock ພື້ນຖານ" },
          ],
        }

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4 py-10 text-slate-900 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-white">
      <AnimateOnScroll className="w-full max-w-5xl">
        <Card className="border-0 bg-white/80 p-6 shadow-2xl backdrop-blur-md dark:bg-white/5">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-4xl font-bold text-emerald-600 dark:text-emerald-300">
              {t.pageTitle}
            </h2>
            <div className="hidden text-sm text-slate-500 dark:text-slate-400 sm:block">
              {language.toUpperCase()}
            </div>
          </div>
          <hr className="border-slate-200 dark:border-slate-800" />

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white/60 p-5 text-slate-700 shadow-xl dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-200">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              {t.workTitle}
            </h3>
            <Steps
              direction="vertical"
              size="small"
              current={t.jobs.length - 1}
              items={t.jobs.map((j) => ({
                title: (
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {j.title}
                  </span>
                ),
                description: (
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    {j.desc}
                  </span>
                ),
              }))}
            />
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white/60 p-5 text-slate-700 shadow-xl dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-200">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              {t.projectTitle}
            </h3>
            <Steps
              direction="vertical"
              size="small"
              current={t.projects.length - 1}
              items={t.projects.map((p) => ({
                title: (
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {p.title}
                  </span>
                ),
                description: (
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    {p.desc}
                  </span>
                ),
              }))}
            />
          </div>
        </Card>
      </AnimateOnScroll>
    </div>
  )
}

export default Exprirent
