import { GoogleTagManager } from '@next/third-parties/google'
import { Sora } from '@next/font/google';
import Nav from "./Nav";
import TopLeftImg from "./TopLeftImg";
import Header from "./Header";

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

const Layout = ({children}) => {
  return <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sore relative`}>
    <GoogleTagManager gtmId="GTM-P4RV727J" />
    <TopLeftImg />
    <Nav />
    <Header />
    {children}
  </div>
};

export default Layout;
