import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';
import Dropbox from '../../src/pages/Dropbox.js';
import daybreak from '/public/images/webprojects/daybreak.png';



export default function Daybreak() {

    const [drop, setDrop] = useState(true);

    

    return (
        <>
            <div class={styles.webx}onClick={() => { setDrop(!drop) }}>
                <Image
                src={daybreak}
                class={styles.box}
                width={550}
                height={350}
                alt="vogelisms-web-screenshot" />
            
                { drop === true  && 
                <Dropbox 
                langOne="React"
                langTwo="Javascript"
                langThree="Next.JS"
                langFour="CSS"
                langFive="Vercel"
                /> }

            </div>
        </>
    )
}