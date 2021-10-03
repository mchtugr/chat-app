import React, { useRef } from 'react'
import styles from './HiddenFooter.module.css'
import { BsInfoSquareFill } from 'react-icons/bs'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const HiddenFooter = () => {
  const footerRef = useRef()
  const iconRef = useRef()
  const showFooter = () => {
    iconRef.current.style.display = 'none'
    footerRef.current.style.display = 'flex'
  }

  const closeFooter = () => {
    iconRef.current.style.display = 'flex'
    footerRef.current.style.display = 'none'
  }
  return (
    <footer className={styles.container}>
      <div ref={iconRef} className={styles.info_btn} onClick={showFooter}>
        <BsInfoSquareFill size='25px' />
      </div>

      <div ref={footerRef} className={styles.hidden_area}>
        <span onClick={closeFooter} className={styles.close_btn}>
          <AiOutlineClose size='20px' />
        </span>
        <div className={styles.writer}>
          Coded by <strong>Mucahit Ugur</strong>{' '}
        </div>
        <div className={styles.copyright}>
          <span>&copy;{new Date().getFullYear()}</span>
        </div>
        <div className={styles.about}>
          Kodluyoruz JavaScript & React Bootcamp Chat App Project
        </div>
        <div className={styles.links_container}>
          <a
            href='https://github.com/murtazaaylak'
            target='_blank'
            className={styles.link}
          >
            <FaGithub size='30px' />
          </a>
          <a
            href='https://www.linkedin.com/in/mchtugr/'
            target='_blank'
            className={styles.link}
          >
            <FaLinkedin size='30px' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default HiddenFooter
