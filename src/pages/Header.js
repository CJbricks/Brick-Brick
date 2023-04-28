import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import PageHeader from './PageHeader.js'
import bricksLogo from 'public/images/clogs.png'


export default function Header() {
    return (
        <>
       
        <div class={styles.backdrop}>
        <PageHeader />
            <div class={styles.header}>
                <Image 
                src={bricksLogo}
                width={600}
                height={600} 
                class={styles.headimage}
                />
            </div>
        </div>

            
        </>
    )
}
