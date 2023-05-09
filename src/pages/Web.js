import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Vogelisms from '/src/pages/Vogelisms.js';
import StatSheet from '/src/pages/StatSheet.js';
import Header from './Header.js';
import Daybreak from '/src/pages/Daybreak.js';
import OnPoint from '/src/pages/OnPoint.js'

export default function Web() {
    return (
        <div>
        <Header />
           <Vogelisms />
           <StatSheet />
           <Daybreak />
           <OnPoint />
           <Link href="/Directory"><h4 class={styles.backbutton}>BACK</h4></Link>
        </div>
    )
}
