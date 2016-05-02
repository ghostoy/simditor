
$ ->
  Simditor.locale = 'en-US'

  mobileToolbar=["bold","underline","strikethrough","color","ul","ol"]
  toolbar = mobileToolbar if mobilecheck()
  editor = new Simditor
    textarea: $('#txt-content')
    placeholder: '这里输入文字...'
    toolbar: toolbar
    pasteImage: true
    cleanPaste: true
    defaultImage: 'assets/images/image.png'
    upload: if location.search == '?upload' then {url: '/upload'} else false

  $preview = $('#preview')
  if $preview.length > 0
    editor.on 'valuechanged', (e) ->
      console.log editor.getValue()
      $test = $('<div />')
      $test.html editor.getValue()
      $test.find('br').each (i,item) ->
        if not item.nextSibling or  item.nextSibling.nodeName is 'BR'
          do  $(item).remove

      console.log($test.html());

      $preview.html editor.getValue()
