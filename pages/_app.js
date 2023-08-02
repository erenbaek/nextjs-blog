// 하위에 import 된 컴포넌트들에 영향을 준다.
import '../styles/globals.css'
// import '../styles/global.css';

// The default export of _app.js is a top-level React component that wraps all the pages in your application.
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}