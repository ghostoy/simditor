
class SubButton extends Button

  name: 'sub'

  icon: 'sub'

  htmlTag: 'sub'

  disableTag: 'pre'

  _activeStatus: ->
    active = document.queryCommandState('subscript') is true
    @setActive active
    @active

  command: ->
    document.execCommand 'subscript'
    unless @editor.util.support.oninput
      @editor.trigger 'valuechanged'

    # subscript command won't trigger selectionchange event automatically
    $(document).trigger 'selectionchange'


Simditor.Toolbar.addButton SubButton
