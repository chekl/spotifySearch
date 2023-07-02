import React, {useRef} from 'react'

export default function NetworkLinks({header, styles}) {
    const nofollow = useRef('nofollow')
    return (
      <div className={styles.network}>
            <a
              href='https://www.linkedin.com/in/harkboxUA/'
              target='_blank'
              rel='noreferrer'
              ref={nofollow}
            >
              <img src={`/${header ? "white-" : ''}linkedin-icon.webp`} alt='Linkedin Hark! українська музика' height='20px'/>
            </a>
            <a
              href='https://www.youtube.com/channel/UCq78UewtBliLnSJj3MSV2Vw'
              target='_blank'
              rel='noreferrer'
              ref={nofollow}
            >
              <img src={`/${header ? "white-" : ''}youtube-icon.webp`} alt='Youtube Hark! українська музика' height='20px'/>
            </a>
            <a href='https://t.me/harkboxUA' target='_blank' rel='noreferrer' ref={nofollow}>
              <img src={`/${header ? "white-" : ''}telegram-icon.webp`} alt='Telegram Hark! українська музика' height='20px'/>
            </a>
    </div>
  )
}
