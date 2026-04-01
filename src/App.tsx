
import { BrowserRouter } from "react-router-dom"
import Routes from "./Route/Routes"
import { ConfigProvider, theme as antdTheme } from "antd"
import { useUi } from "./context/UIContext"

const { defaultAlgorithm, darkAlgorithm } = antdTheme

const App = () => {
  const { theme: themeMode } = useUi()

  return (
    <ConfigProvider
      theme={{
        algorithm: themeMode === "dark" ? darkAlgorithm : defaultAlgorithm,
        token: {
          fontFamily: "Noto Sans Lao Looped",
        },
      }}
    >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
