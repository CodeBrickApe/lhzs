import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ThemeMode, useDarkMode } from '../src/hooks/useDarkMode'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import { darkTheme, lightTheme } from '../src/styled/theme'
import '../src/styled/theme'
import GlobalStyle from '../src/styled/globalStyles'
import '../src/components/ShootingStar/style.css'
import '../src/components/DynamicEffectBg/components/NinthDE/style.css'
import '../src/components/DynamicEffectBg/components/TenthDE/style.css'
import '../src/components/DynamicEffectBg/components/EleventhDE/style.css'
import '../src/components/DynamicEffectBg/components/EighthDE/style.css'
import '../src/components/DynamicEffectBg/components/SeventhDE/style.css'
import '../src/components/SwitchTheme/style.css'
import ToggleTheme from 'src/components/ToggleTheme/ToggleTheme'
import ThemeBackground from 'src/components/ThemeBackground/ThemeBackground'
import { SnackbarProvider } from 'notistack'
import { SNACKBAR_ANCHOR_ORIGIN, SNACKBAR_AUTO_HIDE_DURATION, SNACKBAR_MAX_NUM } from 'src/shared/constants'
import { SnackbarUtilsConfigurator } from 'src/components/Toast/Toast'
import RunCat from 'src/components/RunCat/RunCat'
import SwitchTheme from 'src/components/SwitchTheme/SwitchTheme'
function MZYBlog({ Component, pageProps }: AppProps) {

  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      // console.log(111111);

    })
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())
  }, [router.events])

  const { theme, toggleTheme } = useDarkMode()
  const themeMode = theme === ThemeMode.LIGHT ? lightTheme : darkTheme
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle></GlobalStyle>
      <SnackbarProvider
        maxSnack={SNACKBAR_MAX_NUM}
        anchorOrigin={SNACKBAR_ANCHOR_ORIGIN}
        autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION} >
        <SnackbarUtilsConfigurator></SnackbarUtilsConfigurator>
        <ThemeBackground Component={Component} pageProps={pageProps} theme={theme}></ThemeBackground>
        {/* <ToggleTheme theme={theme} onToggle={toggleTheme}></ToggleTheme> */}
        <SwitchTheme theme={theme} onToggle={toggleTheme}></SwitchTheme>
        <RunCat></RunCat>
      </SnackbarProvider>
    </ThemeProvider >
  )
}

export default MZYBlog
