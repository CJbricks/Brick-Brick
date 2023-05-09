import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { Text } from '@chakra-ui/react';
import opImage from '/public/images/webprojects/op-screen.png';

export default function OnPoint() {

  return (
    <>
        <div class={styles.webx}>
                    <Image
                    src={opImage}
                    class={styles.box}
                    width={550}
                    height={350}
                    alt="vogelisms-web-screenshot" />
                
                  <Text color="teal.200">
                    A React based web page for OnPoint! Bird Dogs. 
                    OP! is a concept done for a company looking to train
                    bird dogs in Austin Tx. 
                    The page is Written in JSx and JS and bootstrapped using Chakra and Next js.
                  </Text>
        </div>
    </>
  )
}
