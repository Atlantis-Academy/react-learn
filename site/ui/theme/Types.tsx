export interface FontSize extends Array<string | number> {
  xs?: string,
  s?: string,
  m?: string,
  l?: string,
  xl?: string,
  xxl?: string,
  ml?: string
}

export interface LineHeight extends Array<string | number> {
  xs?: string,
  s?: string,
  m?: string,
  l?: string,
}

export interface BorderRadius extends Array<string | number> {
  s?: string | number,
  m?: string | number
}

export interface Theme extends Array<string | number>{
  colors?: string,
  width?: string,
  fontFamilyText?: string,
  fontFamilyTitle?: string,
  whiteBlue?: string
}

export interface TabsRadius {
  left?: string,
  right?: string
}

export interface Border extends Array<string | number>{
  s?: string
}
