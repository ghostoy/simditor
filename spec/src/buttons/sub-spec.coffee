describe 'Simditor subscript button', ->
  editor = null
  beforeEach ->
    editor = spec.generateSimditor
      content: '''
        <p>sub text</p>
      '''
      toolbar: ['sub']


  afterEach ->
    spec.destroySimditor()
    editor = null

  it 'should set selection sub after clicking', ->
    editor.focus()

    button = editor.toolbar.findButton('sub')

    $p = editor.body.find 'p:first'
    $text = $p.contents().first()
    range = document.createRange()
    range.setStart($text[0], 0)
    range.setEnd($text[0], 3)
    editor.selection.range range

    button.command()

    $sub = $p.find('sub')
    expect($sub.length).toBe(1)
    expect($sub.text()).toBe('sub')

  it 'should be active when selection inside sub tag', ->
    editor.setValue '''
      <p><sub>sub</sub> text</p>
    '''
    editor.focus()

    $sub = editor.body.find 'sub'
    range = document.createRange()
    range.setStart $sub[0], 1
    range.setEnd $sub[0], 1
    editor.selection.range range
    editor.inputManager.focused = true
    editor.trigger 'selectionchanged'

    button = editor.toolbar.findButton('sub')
    expect(button.active).toBe(true)
