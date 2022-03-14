import Head from 'next/head'
import MainMint from '../components/MainMint'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import {useState} from 'react';


export default function Home() {
  const [accounts, setAccounts] =  useState([]);
  return (
    <div className={styles.container}>
      
      <Navbar accounts={accounts} setAccounts={setAccounts}/>
      <MainMint accounts={accounts} setAccounts={setAccounts}/>
    </div>
  )
}
