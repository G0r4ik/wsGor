export const hotkeys = {
  showPopup: {
    description: 'Создать новую задачу',
    key: 'n',
    keyCode: 78,
    modifiers: ['alt'],
  },
  focusSearch: {
    description: 'Искать задачу',
    key: 'q',
    keyCode: 81,
    modifiers: ['ctrl'],
  },
  showSidebar: {
    description: 'Показать боковое меню',
    key: 'b',
    keyCode: 66,
    modifiers: ['ctrl'],
  },
  changeListAll: {
    description: 'Сменить лист задач на все',
    key: '1',
    keyCode: 49,
    modifiers: ['alt'],
  },
  changeListNotReady: {
    description: 'Сменить лист задач на активные',
    key: '2',
    keyCode: 50,
    modifiers: ['alt'],
  },
  changeListReady: {
    description: 'Сменить лист задач на выполненные',
    key: '3',
    keyCode: 51,
    modifiers: ['alt'],
  },
  closeModal: {
    description: 'Закрыть модальное окно',
    key: 'Esc',
    keyCode: 27,
    modifiers: [],
  },
  showHotkeys: {
    description: 'Открыть сочетания клавиш',
    key: 'k',
    keyCode: 75,
    modifiers: ['shift'],
  },
}

export function handleKeyDown(event) {
  for (const hotkeyName in hotkeys) {
    const hotkey = hotkeys[hotkeyName]
    const modifiers = hotkey.modifiers
    const hasCorrectModifiers = modifiers.every(m => event[m + 'Key'])
    const hasMatchingKeyCode = event.keyCode === hotkey.keyCode
    const hasHandler = hotkey.handler
    if (hasCorrectModifiers && hasMatchingKeyCode && hasHandler) {
      console.log(hotkeyName)
      hotkey.handler()
      break
    }
  }
}
