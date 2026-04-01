import { Card } from "antd"
import { useEffect, useState } from "react"
import AnimateOnScroll from "./AnimateOnScroll"

interface SkillItem {
  name: string
  percent: number
  color: string
  level: "Beginner" | "Intermediate" | "Advanced"
}

const skillList: SkillItem[] = [
  {
    name: "HTML",
    percent: 90,
    color: "!bg-orange-500",
    level: "Advanced",
  },
  {
    name: "CSS",
    percent: 90,
    color: "!bg-sky-500",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    percent: 85,
    color: "!bg-yellow-400",
    level: "Advanced",
  },
  {
    name: "React",
    percent: 70,
    color: "!bg-cyan-400",
    level: "Intermediate",
  },
  {
    name: "Node.js",
    percent: 60,
    color: "!bg-emerald-500",
    level: "Intermediate",
  },
  {
    name: "TypeScript",
    percent: 55,
    color: "!bg-blue-500",
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    percent: 70,
    color: "!bg-teal-400",
    level: "Intermediate",
  },
  {
    name: "Ant Design",
    percent: 60,
    color: "!bg-indigo-500",
    level: "Intermediate",
  },
  {
    name: "MySQL",
    percent: 55,
    color: "!bg-lime-400",
    level: "Intermediate",
  },
]

const Skills = () => {
  const [progressValues, setProgressValues] = useState<number[]>(
    skillList.map(() => 0),
  )

  useEffect(() => {
    const intervals = skillList.map((skill, index) =>
      setInterval(() => {
        setProgressValues((prev) => {
          const updated = [...prev]
          if (updated[index] < skill.percent) {
            updated[index] += 1
          }
          return updated
        })
      }, 20),
    )

    return () => {
      intervals.forEach((intervalId) => clearInterval(intervalId))
    }
  }, [])

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-4 py-10">
      <AnimateOnScroll className="w-full max-w-5xl">
        <Card className="w-full border-0 bg-white/5 p-6 shadow-2xl backdrop-blur-md sm:p-8">
        <div className="mb-8 grid gap-6 md:grid-cols-[1.1fr,1fr] md:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              My Skills
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ທັກສະການນຳໃຊ້ເຟຣມເວີກ & Tools
            </h2>
            <p className="mb-4 text-sm text-slate-300 sm:text-base">
              ລວບລວມທັກສະ Frontend, Backend ແລະ Database ທີ່ໃຊ້ໃນການພັດທະນາ
              Web Application ຈາກປະສົບການຮຽນແລະທຳງານຈິງ.
            </p>
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-emerald-200">
                Frontend
              </span>
              <span className="rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 text-sky-200">
                Backend
              </span>
              <span className="rounded-full border border-violet-400/40 bg-violet-400/10 px-3 py-1 text-violet-200">
                Database
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-4 shadow-inner">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Overall skill level
            </p>
            <div className="mb-3 flex items-end justify-between">
              <span className="text-3xl font-semibold text-emerald-300">
                {Math.round(
                  progressValues.reduce((a, b) => a + b, 0) /
                    (progressValues.length || 1),
                )}
                %
              </span>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                Constantly improving
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400 transition-all duration-700 ease-out"
                style={{
                  width: `${
                    progressValues.length
                      ? progressValues.reduce((a, b) => a + b, 0) /
                        progressValues.length
                      : 0
                  }%`,
                }}
              />
            </div>
            <p className="mt-3 text-xs text-slate-400">
              ຄ່າສະເລ່ຍຂອງຄວາມຊຳນານໃນເທັກໂນໂລຢີທີ່ໃຊ້ເປັນປະຈຳ.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {skillList.map((skill, index) => (
            <div
              key={skill.name}
              className="group rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/70 hover:bg-slate-900 hover:shadow-emerald-500/20"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-100">
                    {skill.name}
                  </p>
                  <p className="text-xs text-slate-400">{skill.level}</p>
                </div>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-emerald-300">
                  {progressValues[index]}%
                </span>
              </div>

              <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className={`h-2 rounded-full ${skill.color}`}
                  style={{
                    width: `${progressValues[index]}%`,
                    transition: "width 0.6s ease-in-out",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen group-hover:opacity-70">
                  <div className="h-full w-[40%] translate-x-[-20%] bg-gradient-to-r from-white/40 via-white/5 to-transparent blur-[2px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
        </Card>
      </AnimateOnScroll>
    </div>
  )
}

export default Skills
