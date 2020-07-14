import { FontSize } from './Types'


const fontSize: FontSize = [16, 18, 22, 40, 45, 64, 28]

fontSize.xs = `${fontSize[0]}px`//16
fontSize.s = `${fontSize[1]}px`//18
fontSize.m = `${fontSize[2]}px`//22
fontSize.ml = `${fontSize[6]}px`//28
fontSize.l = `${fontSize[3]}px`//40
fontSize.xl = `${fontSize[4]}px`//45
fontSize.xxl = `${fontSize[5]}px`//64

export default fontSize