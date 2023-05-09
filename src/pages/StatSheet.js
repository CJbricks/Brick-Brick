import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { Text } from '@chakra-ui/react';
import statsheet from '/public/images/webprojects/screenstat.png';

export default function StatSheet() {

    return (
        
        <div class={styles.webx}>
               <Image
                src={statsheet}
                class={styles.box}
                width={550}
                height={350}
                alt="statsheet-web-screenshot" />

                    <Text color="blue.200">
                    A Javascript game based around the Jomboy media game RefGuess. 
                    The page is Written in JS and HTML some CSS transitions and effects using the Animate.CSS library.
                    Deployed to a Surge server.
                  </Text>
        </div>
    )
}
