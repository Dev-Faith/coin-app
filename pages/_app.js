import '@/styles/globals.css';
import { AnimatePresence, motion } from "framer-motion";
import { router } from "next/router";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Layout className="App">
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
}
