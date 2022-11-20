import React, { useState, useEffect } from 'react';
import styles from './header.module.css';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={`flex-col items-center ${styles['image-wrapper']}`}
                style={{ width: open ? '310px' : '80px' }}
            >
                <img
                    onClick={() => setOpen(!open)}
                    className={`${styles['image']}`}
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16688856712931251307.png"
                />
            </div>
            <div className={`${styles['header']}`}
                style={{ width: open ? '' : '0px' }}>
                <div className={`flex-col items-end ${styles['group_4']} ${styles['space-y-72']}`}
                    style={{ right: open ? '' : '-240px' }}>
                    <div className={`flex-col items-center ${styles['section_2']} ${styles['space-y-11']}`}>
                        <span className={`${styles['font_1']} ${styles['text']}`}>Mix</span>
                        <span className={`${styles['font_2']}`}>合成</span>
                    </div>
                    <div className={`flex-col items-center ${styles['section_3']} ${styles['space-y-14']}`}>
                        <span className={`${styles['font_1']} ${styles['text_3']}`}>About</span>
                        <span className={`${styles['font_2']}`}>活動概要</span>
                    </div>
                    <div className={`flex-col items-center ${styles['section_4']} ${styles['space-y-14']}`}>
                        <span className={`${styles['font_1']}`}>List</span>
                        <span className={`${styles['font_2']}`}>実験結果一覧</span>
                    </div>
                    <div className={`flex-col items-center ${styles['section_5']} ${styles['space-y-8']}`}>
                        <span className={`${styles['font_3']}`}>NEWS</span>
                        <span className={`${styles['font_2']}`}>お知らせ</span>
                    </div>
                    <div className={`flex-col items-center ${styles['section_6']} ${styles['space-y-12']}`}>
                        <span className={`${styles['font_3']} ${styles['text_9']}`}>Members </span>
                        <span className={`${styles['font_2']}`}>メンバー紹介</span>
                    </div>
                </div>
            </div>
        </>

    );
}
export default Header