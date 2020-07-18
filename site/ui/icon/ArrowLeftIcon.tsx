import * as React from "react"
import { PropsType } from '../Types'

const ArrowLeftIcon = (props: PropsType) => {
  return (
    <svg
      width={31}
      height={28}
      viewBox='0 0 31 28'
      fill='none' {...props}>
      <path
        d='M2.68 14.833l.05.053 11.026 11.025a.833.833 0 01-1.179 1.178L1.552 16.065a2.905 2.905 0 01-.841-1.783.927.927 0 010-.566 2.905 2.905 0 01.839-1.774L12.56.912a.833.833 0 011.18 1.177L2.73 13.119l-.046.048h27.15c1.11 0 1.11 1.666 0 1.666H2.68z'
        fill='#3BB3C4'
      />
    </svg>
  )
}

export default ArrowLeftIcon
