(function() {
  $(function() {
    var $preview, editor, mobileToolbar, toolbar;
    Simditor.locale = 'en-US';
    mobileToolbar = ["bold", "underline", "strikethrough", "color", "ul", "ol"];
    if (mobilecheck()) {
      toolbar = mobileToolbar;
    }
    editor = new Simditor({
      textarea: $('#txt-content'),
      placeholder: '这里输入文字...',
      toolbar: toolbar,
      pasteImage: true,
      cleanPaste: true,
      defaultImage: 'assets/images/image.png',
      upload: location.search === '?upload' ? {
        url: '/upload'
      } : false
    });
    $preview = $('#preview');
    if ($preview.length > 0) {
      return editor.on('valuechanged', function(e) {
        var $test;
        console.log(editor.getValue());
        $test = $('<div />');
        $test.html(editor.getValue());
        $test.find('br').each(function(i, item) {
          if (!item.nextSibling || item.nextSibling.nodeName === 'BR') {
            return $(item).remove();
          }
        });
        console.log($test.html());
        return $preview.html(editor.getValue());
      });
    }
  });

}).call(this);
