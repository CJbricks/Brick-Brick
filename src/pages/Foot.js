import React from 'react'
import styles from '@/styles/Footer.module.css';
import Image from 'next/image';



export default function Foot() {
   
    return (
        <div className={styles.footbox}> 
               <a href="https://www.instagram.com/oreo.blizman/" target="_blank" rel="noopener noreferrer">
                    <Image 
                    className={styles.iconig}
                    src='/images/iglogo.png'
                    alt="icon-ig"
                    height={35}
                    width={35}
                    />
                </a>
                <a href="https://www.github.com/CJbricks" target="_blank" rel="noopener noreferrer">
                    <Image
                    className={styles.giticon}
                    src="/images/gitlogo.png"
                    alt="git-icon"
                    height={35}
                    width={35}
                    />
                </a>
        </div>
    )
}