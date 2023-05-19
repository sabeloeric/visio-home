import React from 'react'
import BlockImage from "./assets/mini-block-image.png";
import './scss/mini-block.scss'
const MiniBlock = ({content}) => {
    return (
        <div className={'mini-block'}>
            <div className={'mini-block__content'}>
                {content}
            </div>
            <div className={'mini-block__figure'}>
                <img className={'mini-block__image'} src={BlockImage} alt={'mini-block'} />
            </div>
        </div>
    )
}

export default MiniBlock