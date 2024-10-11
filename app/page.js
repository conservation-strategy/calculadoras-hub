import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Calculators from "./components/calculators/calculators";
import Footer from "./components/footer/footer";
import MidSection from "./components/midsection/midsection";

export default function Home() {

  return (
    <main className={styles.page}>
      <Navbar/>
      {/* <div className={styles.hero}> */}
        <Calculators/>
      {/* </div> */}
      <div className={styles.divider}></div>
      <MidSection/>
      <Footer/>
    </main>
    );
}
