"use client";
import styles from "./page.module.css";
import ResponsiveAppBar from "@/app/components/responsiveappbar";
import MainContent from "../components/MainContent";

export default function Home() {
  return (
    <div className={styles.page}>
      <ResponsiveAppBar />
      <main className={styles.main}>
        <MainContent></MainContent>
      </main>
    </div>
  );
}
