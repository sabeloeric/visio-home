import React from "react";
import './scss/vision-block.scss'
import BlockImage from './assets/vision-block-image.png'

const VisionBlock = ({content}) => {
    return (
        <div className={'vision-block'}>
            <div className={'vision-block__figure'}>
                <img className={'vision-block__image'} src={BlockImage} alt={'vision-block'} />
            </div>
            <div className={'vision-block__content'}>
                {content}
            </div>
        </div>
    )
}

export default VisionBlock;
