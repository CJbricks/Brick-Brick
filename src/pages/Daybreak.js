import React from 'react';
import Image from 'next/image';
import { Text } from '@chakra-ui/react';
import styles from '@/styles/Home.module.css';
import daybreak from '/public/images/webprojects/daybreak.png';



export default function Daybreak() {

    return (
        <>
            <div class={styles.webx}>
                <Image
                src={daybreak}
                class={styles.box}
                width={550}
                height={350}
                alt="vogelisms-web-screenshot" />
            
                 <Text color="pink.300">
                A React based Web Page for the Art and Magazine project Daybreak. 
                The drawings are all done using a trac-pad in PS.
                The page is Written in JS and bootstrapped using Chakra and Next js.
                A previous version of this page was built using CRA and migrated to Next.
                Deployed using Vercel.
               </Text>

            </div>
        </>
    )
}