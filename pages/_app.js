import '../styles/globals.css'
import { useContext, useEffect, useReducer } from 'react'
import GlobalContext from '../common/Store/GlobalContext'
import { reducer, Initialized } from '../common/Store/reducer'
import Layout from '../common/Layout'
function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, Initialized)

  return <GlobalContext.Provider value={{ state, getDispatch: dispatch }}>
    <Component {...pageProps} />
  </GlobalContext.Provider>

}

export default MyApp
