import React, { useState, useRef, useEffect, useContext } from 'react'
import _debounce from "lodash/debounce";
import Fade from 'react-reveal/Fade';
import styles from '../styles/luckey.module.css';
import { CSSTransition } from 'react-transition-group'
import { useRouter } from 'next/router'
import GlobalContext from '../common/Store/GlobalContext'
export default function App() {
  const myLucky = useRef()
  const [showCloud, setShowCloud] = useState(false)
  const CloudDOM = useRef()
  const [Switch, setSwitch] = useState(true)
  const routers = useRouter()
  useEffect(() => {
    setShowCloud(true)
  }, [])



  const Enter = () => {
    setShowCloud(false)
    //移除云朵
    setTimeout(() => {
      // CloudDOM.current.remove()
      routers.push('/main')
    }, 1000)
    clearTimeout()
  }
  return <>
    <div className={`flex-col ${styles['page']}`}>
      <div className={`${styles['group']}`} >
        <Fade right when={showCloud}>
          <img
            className={`${styles['image']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301262078875163.png"
          />
          <div className={`flex-col items-start ${styles['image-wrapper']}`}>
            <img
              className={`${styles['image_2']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301271613572684.png"
            />
          </div>
          <img
            className={`${styles['image_3']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301272296463094.png"
          />
          <img
            className={`${styles['image_4']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301273279447388.png"
          />
          <img
            className={`${styles['image_5']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301273308752139.png"
          />
        </Fade>
        <Fade left when={showCloud}>
          <img
            className={`${styles['image_6']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301274116773754.png"
          />
          <img
            className={`${styles['image_7']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301274705731981.png"
          />
          <div className={`${styles['section_2']}`}></div>

          <img
            className={`${styles['image_8']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301265289970465.png"
          />
          <img
            className={`${styles['image_9']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301274843494980.png"
          />
          <div className={`flex-col items-end ${styles['image-wrapper_2']}`}>
          </div>
          <div className={`${styles['container']}`}>
            <div className={`${styles['next_contai']}`}>
              <span className={`${styles['tap']} `}>Tap</span>
              <div className={`${styles['next_icon']}`}>
                <img
                  onClick={Enter}
                  className={""}
                  style={{
                    width: '40px',
                    cursor: 'pointer',
                    zIndex: 1000,
                  }}
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301276186330878.png"
                />
              </div>
            </div>
          </div>

        </Fade>
      </div>
    </div>
  </>
}