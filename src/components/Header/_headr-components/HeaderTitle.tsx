import React from 'react'
import HeaderTitleSvg from './HeaderTitleSvg'


const HeaderTitle = () => {
  return (
    <div className={'header-title'}>
      <h1>
        Riverdoc
      </h1>
      <h2>Система управления документами и задачами</h2>
      <HeaderTitleSvg />
      <p className={'header-text'}>
        Представляет собой готовое решение для
        автоматизации документооборота, делопроизводства
        и управления
        бизнес-процессами, включая контроль
        исполнительской дисциплины
      </p>
    </div>
  )
}

export default HeaderTitle
