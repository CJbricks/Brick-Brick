import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Vogelisms from '/src/pages/Vogelisms.js';
import StatSheet from '/src/pages/StatSheet.js';
import Header from './Header.js';
import Daybreak from './Daybreak.js';

export default function Web() {
    return (
        <div>
        <Header />
           <Vogelisms />
           <StatSheet />
           <Daybreak />
           <Link href="/Directory"><h4 class={styles.backbutton}>BACK</h4></Link>
        </div>
    )
}
