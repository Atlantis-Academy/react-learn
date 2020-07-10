import * as React from "react"
import { PropsType } from '../Types'

const VideoBox = (props: PropsType)=>{
  return (
    <svg width={31} height={9} viewBox="0 0 31 9" fill="none" {...props}>
      <circle cx={4.5} cy={4.5} r={4.5} fill="#C4C4C4" />
      <circle cx={15.5} cy={4.5} r={4.5} fill="#C4C4C4" />
      <circle cx={26.5} cy={4.5} r={4.5} fill="#C4C4C4" />
    </svg>
  )
}

export default VideoBox