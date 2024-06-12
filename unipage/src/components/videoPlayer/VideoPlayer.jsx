import React, { useRef } from 'react'
import './videoPlayer.css'
import aboutVideo from '../../assets/about-video.mp4'
const VideoPlayer = ({ playState, setPlayState }) => {
    const player = useRef(null);
    const closePlayer = (e) => {
        //if the area clicked is the same of video player div, then close the player
        if (e.target === player.current) {
            setPlayState(false)
        }
    }
    return (
        <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
            <video src={aboutVideo} autoPlay muted controls></video>
        </div>
    )
}

export default VideoPlayer

/* 创建引用对象：const player = useRef(null); 初始化了一个引用对象 player，初始值为 null。这个引用对象将在整个组件的生命周期中保持不变。

引用 DOM 元素：ref={player} 将 player 引用对象赋值给 div 元素的 ref 属性。这样，player.current 将引用这个 div 元素的 DOM 节点。

事件处理：在 closePlayer 函数中，通过 e.target === player.current 判断点击事件是否发生在 div 元素本身。如果点击的目标是 div 元素本身（而不是内部的其他元素，例如视频控件），则调用 setPlayState(false) 来关闭视频播放器。 */