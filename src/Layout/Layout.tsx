import { Button, Drawer, Layout, Menu, type MenuProps } from "antd"
import { Content, Header } from "antd/es/layout/layout"
import "./Layout.css"
import {
  GlobalOutlined,
  MenuOutlined,
  BulbOutlined,
  MoonOutlined,
} from "@ant-design/icons"
import { useLocation, useNavigate, Outlet } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import Aside from "../componect/Aside"
import { useUi, type Language } from "../context/UIContext"

const ProtectRoute = () => {
  const [current, setCurrent] = useState<string>("home")
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState<boolean>(false)
  const { language, setLanguage, theme, toggleTheme } = useUi()

  const menuLabels = useMemo(
    () => ({
      lo: {
        home: "ຫນ້າຫຼັກ",
        about: "ກ່ຽວກັບຂ້ອຍ",
        contact: "ຕິດຕໍ່ຂ້ອຍ",
        skills: "ທັກສະ",
        exprirent: "ປະສົບການ",
        service: "ບໍລີການ",
      },
      th: {
        home: "หน้าแรก",
        about: "เกี่ยวกับฉัน",
        contact: "ติดต่อฉัน",
        skills: "ทักษะ",
        exprirent: "ประสบการณ์",
            service: "บ่อรีกาน",
      },
      en: {
        home: "Home",
        about: "About",
        contact: "Contact",
        skills: "Skills",
        exprirent: "Experience",
        service: "Service"
      },
    }),
    [],
  )

  const items: (MenuProps)["items"] = useMemo(() => {
    const t = menuLabels[language]
    return [
      { key: "home", label: t.home },
      { key: "about", label: t.about },
      { key: "contact", label: t.contact },
      { key: "skills", label: t.skills },
      { key: "exprirent", label: t.exprirent },
      { key: "service", label: t.service },
    ]
  }, [language, menuLabels])

  const handleLink: MenuProps["onClick"] = (e) => {
    navigate(e.key)
    setCurrent(e.key)
  }

  useEffect(() => {
    const seg = location.pathname.split("/").filter(Boolean).at(-1)
    if (!seg) return
    setCurrent(seg)
  }, [location.pathname])

  const languageOptions: { code: Language; label: string }[] = [
    { code: "lo", label: "LO" },
    { code: "th", label: "TH" },
    { code: "en", label: "EN" },
  ]

  const renderLanguageButtons = (compact = false) => (
    <div className={`flex ${compact ? "gap-1" : "gap-2"}`}>
      {languageOptions.map((opt) => (
        <Button
          key={opt.code}
          size={compact ? "small" : "middle"}
          type={language === opt.code ? "primary" : "default"}
          icon={opt.code === "lo" ? <GlobalOutlined /> : undefined}
          onClick={() => setLanguage(opt.code)}
        >
          {opt.label}
        </Button>
      ))}
    </div>
  )

  return (
    <Layout className="min-h-screen w-full bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-white h-4/6">
      <Header className="app-header sticky top-0 z-50 flex h-20 w-full items-center justify-between gap-7 bg-white/80 px-4 text-slate-800 backdrop-blur-md md:px-8 dark:bg-slate-900/80 dark:text-white">
        <div className="flex items-center gap-2">
          <img
            src="/Logo.png"
            alt="MEDEV logo"
            className="navbar-logo h-10 w-10 rounded-lg object-cover sm:h-12 sm:w-12"
          />
        </div>

        <div className="hidden flex-1 items-center justify-center md:flex">
          <Menu
            className="w-full max-w-xl !bg-transparent !text-white font-bold"
            defaultSelectedKeys={[current]}
            selectedKeys={[current]}
            onClick={handleLink}
            items={items}
            mode="horizontal"
          />
        </div>

        <div className="flex items-center justify-end gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            {renderLanguageButtons(true)}
          </div>
          <Button
            type="text"
            aria-label="Toggle theme"
            icon={
              theme === "dark" ? (
                <MoonOutlined className="!text-white text-xl" />
              ) : (
                <BulbOutlined className="!text-white text-xl" />
              )
            }
            onClick={toggleTheme}
          />
          <div className="block md:hidden">
            <Button
              type="text"
              icon={
                <MenuOutlined className="!text-white font-bold !text-2xl" />
              }
              onClick={() => setOpen(true)}
            />
          </div>
        </div>

        <Drawer
          title="Menu"
          placement="left"
          className="w-full text-center !bg-blue-500"
          onClose={() => setOpen(false)}
          open={open}
        >
          <div className="mb-4 flex items-center justify-between">
            {renderLanguageButtons()}
            <Button
              type="default"
              icon={
                theme === "dark" ? (
                  <MoonOutlined />
                ) : (
                  <BulbOutlined />
                )
              }
              onClick={toggleTheme}
            >
              {theme === "dark" ? "Dark" : "Light"}
            </Button>
          </div>
          <Menu
            className="items-center"
            mode="vertical"
            items={items}
            selectedKeys={[current]}
            onClick={(e) => {
              handleLink(e)
              setOpen(false)
            }}
          />
        </Drawer>
      </Header>

      <Content className="w-full">
        <Outlet />
      </Content>

      <footer className="w-full">
        <div className="border-t border-slate-200 bg-white/60 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/40">
          <Aside />
        </div>
        <h2 className="bg-white/60 p-4 text-center text-2xl font-bold text-slate-900 dark:bg-slate-950/40 dark:text-white">
          © {new Date().getFullYear()} MEDEV
        </h2>
      </footer>
    </Layout>
  )
}

export default ProtectRoute

