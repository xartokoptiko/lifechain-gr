import Image from 'next/image'
import { Inter } from 'next/font/google'
import University from './university';
import NewUI from "./university/newui/index";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <LifeChain />
    <NewUI />
  );
}