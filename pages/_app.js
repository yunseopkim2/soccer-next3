import '@/styles/globals.css'
import { wrapper } from '@/modules/store'
import {Header, Nav, Footer} from '@/components'

const App = ({ Component, pageProps }) => {
  return(<div>
  <Nav/>
       <Header/>
    <Component {...pageProps} />
    <Footer/>
  </div>
  )
  
}


export default wrapper.withRedux(App)