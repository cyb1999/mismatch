import { useState, useEffect, useRef } from 'react'
import _debounce from "lodash/debounce";
import { SlotMachine } from '@lucky-canvas/react'
import Fade from 'react-reveal/Fade';

const MySlotMachine = () => {
    const [Switch, setSwitch] = useState(true)
    const [Disabled, setDisabled] = useState(true)
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
            text: '爱心',
            imgs: [{
                text: '爱心',
                id: 1,
                width: '100%',
                src: '/1.png',
            }],

        },

        {
            text: '太阳',
            imgs: [{
                id: 2,
                width: '100%',
                src: '/2.png',
            }],

        },
        {
            borderRadius: '60px',
            text: '杯子',
            imgs: [{
                id: 3,
                width: '100%',
                src: '/3.png',
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
            myLucky?.current?.stop(index)
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
                        onEnd={prize => {
                            console.log(prize);
                        }} />
                </Fade>
            </div>
            <Fade top>
                <div
                    style=
                    {{ display: 'flex', justifyContent: 'center', alignItem: 'center' }}>
                    <button style={{
                        transition: 'all 0.5s',
                        width: '150px', height: '40px',
                        borderRadius: '20px',
                        border: 'none', fontSize: '20px',
                        backgroundColor: `${Switch ? 'red' : '#2d93d2'}`,
                        color: '#fff',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        cursor: `${Switch ? 'pointer' : 'wait'}`,
                    }}
                        onClick={debStopGame} >Stop</button>
                </div>
            </Fade>
        </div>
    )
}

export default MySlotMachine