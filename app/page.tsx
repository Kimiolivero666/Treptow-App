'use client '

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import PersonajesItem from "@/components/PersonajesItem";
import PersonajeList from "@/components/PersonajeList";

export default function Home() {
  return (
   <><Header/>
   <PersonajeList/></>
  );
}
