const insertAtCaret = function (
  e: {
    target: {
      focus: () => void
      selectionStart: number
      selectionEnd: any
      value: string
    }
  },
  text: string | any[]
) {
  text = text || ''
  // @ts-ignore
  if (document.selection) {
    // IE
    e.target.focus()
    // @ts-ignore
    const sel = document.selection.createRange()
    sel.text = text
  } else if (e.target.selectionStart || e.target.selectionStart === 0) {
    // Others
    const startPos = e.target.selectionStart
    const endPos = e.target.selectionEnd
    e.target.value =
      e.target.value.substring(0, startPos) +
      text +
      e.target.value.substring(endPos, e.target.value.length)
    e.target.selectionStart = startPos + text.length
    e.target.selectionEnd = startPos + text.length
    return [startPos, endPos]
  } else {
    e.target.value += text
  }
}

export default function handleHotkeys(e: {
  key: string
  preventDefault: () => void
  target: { selectionStart: number; selectionEnd: number; value: string }
}) {
  if (e.key == 'Tab') {
    e.preventDefault()
    const start = e.target.selectionStart
    const end = e.target.selectionEnd

    e.target.value =
      e.target.value.substring(0, start) + '\t' + e.target.value.substring(end)

    e.target.selectionStart = e.target.selectionEnd = start + 1
  }
  // if key pressed is "{", then add "}" after it
  if (e.key == '{') {
    e.preventDefault()
    const start = e.target.selectionStart
    const end = e.target.selectionEnd

    e.target.value =
      e.target.value.substring(0, start) + '{}' + e.target.value.substring(end)

    e.target.selectionStart = e.target.selectionEnd = start + 1
  }
  // if key pressed is "[", then add "]" after it
  if (e.key == '[') {
    e.preventDefault()
    const start = e.target.selectionStart
    const end = e.target.selectionEnd

    e.target.value =
      e.target.value.substring(0, start) + '[]' + e.target.value.substring(end)

    e.target.selectionStart = e.target.selectionEnd = start + 1
  }
  // if key pressed is "(", then add ")" after it
  if (e.key == '(') {
    e.preventDefault()
    const start = e.target.selectionStart
    const end = e.target.selectionEnd

    e.target.value =
      e.target.value.substring(0, start) + '()' + e.target.value.substring(end)

    e.target.selectionStart = e.target.selectionEnd = start + 1
  }
  // if key pressed is ", then add " after it
  if (e.key == '"') {
    e.preventDefault()
    const start = e.target.selectionStart
    const end = e.target.selectionEnd

    e.target.value =
      e.target.value.substring(0, start) + '""' + e.target.value.substring(end)

    e.target.selectionStart = e.target.selectionEnd = start + 1
  }
  // if key pressed is ":", then add " ;" after it
  if (e.key == ':') {
    e.preventDefault()
    const start = e.target.selectionStart
    const end = e.target.selectionEnd

    e.target.value =
      e.target.value.substring(0, start) + ': ;' + e.target.value.substring(end)

    e.target.selectionStart = e.target.selectionEnd = start + 2
  }
  // if key pressed is "!", then add "important " after it
  if (e.key == '!') {
    e.preventDefault()
    const start = e.target.selectionStart
    const end = e.target.selectionEnd

    e.target.value =
      e.target.value.substring(0, start) +
      '!important ' +
      e.target.value.substring(end)

    e.target.selectionStart = e.target.selectionEnd = start + 1
  }

  // if key pressed is "Enter" and if cursor is in between "{" and "}" then console log it
  if (
    e.key == 'Enter' &&
    e.target.value.substring(
      e.target.selectionStart - 1,
      e.target.selectionStart
    ) == '{' &&
    e.target.value.substring(
      e.target.selectionEnd,
      e.target.selectionEnd + 1
    ) == '}'
  ) {
  }
}
