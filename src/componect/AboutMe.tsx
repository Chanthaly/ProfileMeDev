
import { Card, Typography } from "antd"
import { useUi } from "../context/UIContext"
import AnimateOnScroll from "./AnimateOnScroll"

const { Title, Paragraph } = Typography

const titles = {
  lo: "ກ່ຽວກັບຂ້ອຍ",
  th: "เกี่ยวกับฉัน",
  en: "About Me",
}

const descriptions = {
  lo: `ສະບາຍດີ, ຂ້ອຍຊື່ ຈັນທະລີ , ອາຍຸ 25 ປີ 
ຂ້ອຍຈົບຈາກສະຖາບັນພັດທະນາສີ່ມືແຮງງານ ລາວ-ເກົາຫລີ (2020-2023) ສາຂາ IT.
ປັດຈຸບັນເຮັດວຽກເປັນ IT Support ມາແລ້ວ 2 ປີ, ແຕ່ໃນເວລາວ່າງຂ້ອຍໃຊ້ເວລາເພື່ອພັດທະນາຕົນໃນສາຍ Developer (Frontend & Backend).
ຂ້ອຍເຄີຍສ້າງ CV ແບບ Static Web ໂດຍໃຊ້ React + TypeScript + Tailwind CSS + Ant Design ແລະໄດ້ທຳ Project ອື່ນໆ ເຊັ່ນ Web POS, E‑Commerce ແລະລະບົບຂໍ້ມູນພື້ນຖານ.`,
  th: `สวัสดีครับ ผมชื่อ จันทะลี  อายุ 24 ปี เป็นคนลาว
ผมจบจากสถาบันพัฒนาทักษะแรงงาน ลาว‑เกาหลี (2020‑2023) สาขา IT
ปัจจุบันทำงานเป็น IT Support มาแล้วประมาณ 2 ปี และในเวลาว่างผมโฟกัสพัฒนาตัวเองในสาย Developer ทั้ง Frontend และ Backend
ผมเคยทำ CV แบบ Static Web ด้วย React + TypeScript + Tailwind CSS + Ant Design และมีโปรเจกต์อื่น ๆ เช่น Web POS, E‑Commerce และระบบฐานข้อมูลพื้นฐาน`,
  en: `Hi, my name is Chanthaly Lin, a 24‑year‑old developer from Laos.
I graduated from the Lao‑Korea Skills Development Institute (2020‑2023) in the IT program.
Currently I work as an IT Support with around 2 years of experience, and in my free time I focus on growing my skills as a Frontend & Backend developer.
I have built a static CV website using React, TypeScript, Tailwind CSS, and Ant Design, plus other projects such as a Web POS, E‑Commerce site, and basic data management systems.`,
}

const highlightCards = (lang: keyof typeof descriptions) => {
  switch (lang) {
    case "th":
      return [
        { title: "ประสบการณ์", value: "2+ ปี", detail: "IT Support & Web Dev" },
        { title: "เทคโนโลยีหลัก", value: "React / TS", detail: "Tailwind, Ant Design" },
        { title: "โฟกัส", value: "Full‑stack", detail: "Frontend & Backend" },
      ]
    case "en":
      return [
        { title: "Experience", value: "2+ years", detail: "IT Support & Web Dev" },
        { title: "Core Stack", value: "React / TS", detail: "Tailwind, Ant Design" },
        { title: "Focus", value: "Full‑stack", detail: "Frontend & Backend" },
      ]
    default:
      return [
        { title: "ປະສົບການ", value: "2+ ປີ", detail: "IT Support & Web Dev" },
        { title: "ເທັກໂນໂລຢີ", value: "React / TS", detail: "Tailwind, Ant Design" },
        { title: "ໂຟກັດ", value: "Full‑stack", detail: "Frontend & Backend" },
      ]
  }
}

const AboutMe = () => {
  const { language } = useUi()
  const currentLang = language as keyof typeof descriptions
  const cards = highlightCards(currentLang)

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 px-4 py-10 text-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="grid w-full max-w-6xl gap-8 md:grid-cols-[1.4fr,1fr] md:items-stretch">
        <AnimateOnScroll>
          <Card className="border-0 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
            <div className="mb-6 flex items-center gap-4">
              <img
                // src="/Profile.png"
                alt="Profile Image 60 X 60 px"
                className="h-24 w-24 rounded-2xl border border-emerald-400/60 object-cover shadow-lg shadow-emerald-500/30 md:h-28 md:w-28"
              />
              <div>
                <Title
                  level={2}
                  className="!mb-1 text-2xl font-bold tracking-tight text-emerald-300 md:text-3xl"
                >
                  {titles[currentLang]}
                </Title>
                <p className="text-sm text-slate-300">
                  IT Support & Web Developer
                </p>
              </div>
            </div>

            <Paragraph className="whitespace-pre-line text-sm leading-relaxed text-slate-100 md:text-base">
              {descriptions[currentLang]}
            </Paragraph>
          </Card>
        </AnimateOnScroll>

        <div className="grid gap-4 md:grid-rows-3">
          {cards.map((card, idx) => (
            <AnimateOnScroll key={card.title} delay={0.05 * idx}>
              <Card className="group flex flex-col justify-center border-0 bg-white/5 p-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-emerald-500/30">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  {card.title}
                </p>
                <p className="mt-1 text-2xl font-bold text-white">
                  {card.value}
                </p>
                <p className="mt-1 text-xs text-slate-300">{card.detail}</p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutMe
