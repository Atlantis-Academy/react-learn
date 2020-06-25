import styled from '@emotion/styled'
import theme from '../../ui/Theme'
import React from 'react'


const VideoBlockStyle = styled.div`
position: relative;
z-index: 2;
width: 810px;
height: 475px;
background-color: ${theme.colors.dark}`


const VideoBlock = ()=>{
  return(
    <VideoBlockStyle>

    </VideoBlockStyle>
  )
}

export default VideoBlock
