import { useContext, useState, useRef } from 'react'
import styles from './main.module.css';
import { useRouter } from 'next/router'
import GlobalContext from '../../common/Store/GlobalContext'
import Fade from 'react-reveal/Fade';
import Header from '../../components/Header';
import MySlotMachine from '../../common/Custom/MySlotMachine'
const Main = () => {



    return (
        <>
            <Header />
            <div className={`flex-col ${styles['page']}`}>
                <div className={`flex-col ${styles['group_2']} ${styles['space-y-8']}`}>
                    <Fade right cascade >
                        <span className={`${styles['text_2']}`}>Hello.</span>
                        <div className={`flex-row`}>
                            <img
                                className={`${styles['equal-division-item']}`}
                                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301267112885480.png" />
                            <img
                                className={`${styles['equal-division-item']}`}
                                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301268337855859.png" />
                            <img
                                className={`${styles['equal-division-item']}`}
                                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301269072485464.png" />
                            <img
                                className={`${styles['equal-division-item']}`}
                                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16685301268499283836.png" />
                        </div>
                    </Fade>
                </div>
                <Fade right cascade>
                    <span className={`${styles['text_3']}`}>ミスマッチ研究会ヘようこそ</span>
                    <span className={`${styles['font_1']} ${styles['text_4']}`}>ミスマッチ研究会改め</span>
                    <span className={`${styles['font_1']} ${styles['text_5']}`}>“ミス研”とは</span>
                    <span className={`${styles['font_1']} ${styles['text_6']}`}>一見ミスマッチな食材を</span>
                    <span className={`${styles['font_1']} ${styles['text_7']}`}>ランダムで合成し</span>
                    <span className={`${styles['font_1']} ${styles['text_5']}`}>マッチする組み合わせを</span>
                    <span className={`${styles['font_1']} ${styles['text_5']}`}>日夜研究しているサークルです</span>
                    <div className={`flex-col items-center ${styles['group_5']} ${styles['space-y-26']}`}>
                        <span className={`${styles['font_2']} ${styles['text_10']}`}>さあ、あなたも</span>
                        <span className={`${styles['font_2']} ${styles['text_10']}`}>合成してみましょう</span>
                    </div>
                </Fade>
                <MySlotMachine />
            </div>
        </>
    )
}

export default Main