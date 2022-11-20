import { useState, useEffect, useRef } from 'react'
import _debounce from "lodash/debounce";
import { SlotMachine } from '@lucky-canvas/react'
import Fade from 'react-reveal/Fade';
import styles from './MySlotMachine.module.css'
const MySlotMachine = () => {
    const [Switch, setSwitch] = useState(true)

    const [FoodText, setFoodText] = useState('? ? ?')
    const myLucky = useRef()
    const defaultConfig = {
        rowSpacing: '50px'
    }
    const [blocks] = useState([
        {
            imgs: [{
                src: '/bg.png',
                width: '100%',
                height: '100%'
            }]
        }
    ])
    const slots =
        [
            {},
            { direction: -1 },
            { speed: 20 },
        ]
    const [prizes] = useState([
        {
            text: '寿司',
            imgs: [{
                id: 1,
                width: '100%',
                src: '/Food/sushi.png',
                text: '寿司',
            }],

        },

        {
            text: 'ピザ',
            imgs: [{
                id: 2,
                width: '100%',
                src: '/Food/pizza.png',
                text: 'ピザ',
            }],

        },
        {

            text: 'ダック',
            imgs: [{
                id: 3,
                width: '100%',
                src: '/Food/duck.png',
                text: 'ダック',
            }],


        },


    ])
    const res = [
        [0, 1, 2],
        [0, 2, 1],
        [1, 0, 2],
        [1, 2, 0],
        [2, 0, 1],
        [2, 1, 0],
    ]
    const Pizza = [0, 1, 2];
    const Photo = [0, 2, 1]


    useEffect(() => {
        if (Switch) {
            var timer = setInterval(() => {
                playGame()
            }, 100)
        } else {
            clearInterval(timer)
        }
        return () => {
            clearInterval(timer)
            console.log('销毁', timer)
        }

    }, [Switch])
    const StopGame = () => {
        console.log('点击1')
        if (Switch) {
            // if (Timer) {
            //     clearTimeout(Timer);
            // }
            const index = res[Math.random() * 6 >> 0]
            myLucky?.current?.stop(index[0])
            if (index ===
                [0, 1, 2] || [0, 1, 2]
                [0, 2, 1] ||
                [1, 0, 2] ||
                [1, 2, 0] ||
                [2, 0, 1] ||
                [2, 1, 0]) {
                // var Timer = setTimeout(() => {
                //     // alert('恭喜你中奖了')
                // }, 3400)
                setSwitch(_ => _ = false)
            }

        }
    }
    const playGame = () => {
        myLucky?.current?.play()
    }
    const debStopGame = _debounce(function (e) {
        console.log(e)
        StopGame()
    }, 2000)
    const onEnd = (item) => {
        console.log(item)
        alert(`今日のごはんはお${item.text}!`)
        setFoodText(item.text)
        if (item.id === 3) {
            alert('鴨は一羽だけ')
        }

    }
    return (
        <div style={{ minHeight: '100vh' }}>
            <div
                style={{ display: 'flex', height: '400px', justifyContent: 'center', alignItems: 'center' }}
            >
                <Fade top>
                    <SlotMachine
                        ref={myLucky}
                        width="320px"
                        height="200px"
                        blocks={blocks}
                        prizes={prizes}
                        slots={slots}
                        defaultConfig={defaultConfig}
                        onEnd={onEnd} />
                </Fade>
            </div>
            <Fade top>
                <div className={`${styles['FoodText']}`}>
                    <span>選択された: {FoodText}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center' }}>

                    <button
                        className={Switch ? `${styles['btn']}` : `${styles['btn_active']}`}
                        onClick={StopGame} >{Switch ? 'Stop' : 'Loading' ? FoodText : ''}</button>
                </div>
            </Fade>
        </div>
    )
}

export default MySlotMachine