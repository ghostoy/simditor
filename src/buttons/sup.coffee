
class SupButton extends Button

  name: 'sup'

  icon: 'sup'

  htmlTag: 'sup'

  disableTag: 'pre,code'

  _activeStatus: ->
    active = document.queryCommandState('superscript') is true
    @setActive active
    @active

  command: ->
    document.execCommand 'superscript'
    unless @editor.util.support.oninput
      @editor.trigger 'valuechanged'

    # superscript command won't trigger selectionchange event automatically
    $(document).trigger 'selectionchange'


Simditor.Toolbar.addButton SupButton
