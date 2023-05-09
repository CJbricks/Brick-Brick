import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { Text } from '@chakra-ui/react'


export default function Vogelisms() {

    return (
        <>
            <div class={styles.webx}>
                <Image
                src="/images/webprojects/screenvog.png"
                class={styles.box}
                width={550}
                height={350}
                alt="vogelisms-web-screenshot" />
            
                 <Text color="orange.200">
                 A React web page to recreate a defunct web page from 2006.  
                The page is Written in JS and bootstrapped using CRA before it's demise.
                Deployed using Surge.
               </Text>

            </div>
        </>
    )
}
