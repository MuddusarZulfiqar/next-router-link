import Layout from "@/components/layout/Layout";
import "../scss/main.scss";
import {motion} from 'framer-motion'
function MyApp({ Component, pageProps,router }) {
  return (
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity:0,
        animation:{
          delay:2,
        }
      },
      pageAnimate: {
        opacity:1,
        animation:{
          delay:2,
        }
      }
    }} className="layOut">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </motion.div>
  );
}

export default MyApp;
