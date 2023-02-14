import React, { useEffect } from 'react'

// gsap
import gsap from 'gsap'

function Cursor() {
    useEffect(() => {
        document.body.addEventListener('mousemove', onMouseMove)
        function onMouseMove(e){
            gsap.to(".cursor__ball--big", .4, {
                x: e.pageX - 15,
                y: e.pageY - 15
            })
            gsap.to(".cursor__ball--small", .1, {
                x: e.pageX - 5,
                y: e.pageY - 7
            })
        }
    }, [])

    return (
        <div class="cursor">
            <div class="cursor__ball cursor__ball--big">
                <svg height="30" width="30">
                    <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
                </svg>
            </div>
            <div class="cursor__ball cursor__ball--small">
                <svg height="15" width="15">
                    <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
                </svg>
            </div>
        </div>
    )
}

export default Cursor