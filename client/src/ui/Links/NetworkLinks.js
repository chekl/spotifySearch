import React, { useRef } from 'react';
import { TfiLinkedin } from 'react-icons/tfi';
import { SlSocialYoutube } from 'react-icons/sl';
import { PiTelegramLogoBold } from 'react-icons/pi';
import { IconContext } from 'react-icons';

export default function NetworkLinks({ header, styles }) {
  const nofollow = useRef('nofollow');
  return (
    <IconContext.Provider value={{ color: 'black', size: '25px' }}>
      <div className={styles.network}>
        <a
          href='https://www.linkedin.com/in/harkboxUA/'
          target='_blank'
          rel='noreferrer'
          ref={nofollow}
        >
          <TfiLinkedin />
        </a>
        <a
          href='https://www.youtube.com/channel/UCq78UewtBliLnSJj3MSV2Vw'
          target='_blank'
          rel='noreferrer'
          ref={nofollow}
        >
          <SlSocialYoutube />
        </a>
        <a
          href='https://t.me/harkboxUA'
          target='_blank'
          rel='noreferrer'
          ref={nofollow}
        >
          <PiTelegramLogoBold />
        </a>
      </div>
    </IconContext.Provider>
  );
}
