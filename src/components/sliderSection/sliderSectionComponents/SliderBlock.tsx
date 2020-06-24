import DivMargin from '../../ui/DivMargin'
import React from 'react'
import styled from '@emotion/styled'
import textComponent from '../../TextComponents'
import theme from '../../ui/Theme'
import { TextStyle } from '../../ui/TextStyle'
import Button from '../../ui/Button'
import SliderSvg from '../../ui/svg/SliderSvg'
import { WaveBig } from '../../ui/svg/Wave'
import { SvgStyle } from '../../ui/svg/SvgStyle'


const Slider = styled.div`
display: flex`

const SliderImg = styled.div`
width: 495px;
height: 370px;
left: 210px;
top: 306px;
background: ${theme.colors.dark};
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;`


const SliderText = styled(TextStyle)`
width: 390px;
font-size: 18px;
color: ${theme.colors.dark}`

const ButtonSlider = styled(Button)`
padding: 15px 20px;
height: 50px;
background: ${theme.colors.whiteBlue};
`

const Img = styled.div`
width: 63.14px;
height: 92.86px;
background: ${theme.colors.darkBlue};
position: absolute;
left: 560px;
z-index: 0`

const Img2 = styled.div`
position: absolute;
left: 297px;
top: 1458px;
z-index: 0`

const ImgSvg = styled.div`
position: relative;
z-index: 2`

const SliderBlock = ()=>{
  return(
    <Slider>
      <DivMargin width='210px' />
      <SliderImg>
        <Img/>
        <ImgSvg>
          <SliderSvg/>
        </ImgSvg>
        <Img2>
          <SvgStyle width='285px' height='118px' fill='none'>
            {WaveBig[0]}
          </SvgStyle>
        </Img2>
      </SliderImg>
      <DivMargin width='30px' />
        <div>
          <SliderText>
            {textComponent.sliderBlock[0]}
          </SliderText>
          <DivMargin height='25px' />
          <ButtonSlider>
            {textComponent.buttonText[1]}
          </ButtonSlider>
        </div>
    </Slider>
  )
}

export default SliderBlock
