import '../styles/globals.css'
import '../styles/theme.css'
// import '../styles/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const loaderImg = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
