import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Calculators from "./components/calculators/calculators";

export default function Home() {

  return (
    <main className={styles.page}>
      <Navbar/>
      {/* <div className={styles.hero}> */}
        <Calculators/>
      {/* </div> */}
      <div className={styles.divider}></div>
    </main>
    );
}
