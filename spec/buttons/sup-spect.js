(function() {
  describe('Simditor superscript button', function() {
    var editor;
    editor = null;
    beforeEach(function() {
      return editor = spec.generateSimditor({
        content: '<p>sup text</p>',
        toolbar: ['sup']
      });
    });
    afterEach(function() {
      spec.destroySimditor();
      return editor = null;
    });
    it('should set selection sup after clicking', function() {
      var $p, $sup, $text, button, range;
      editor.focus();
      button = editor.toolbar.findButton('sup');
      $p = editor.body.find('p:first');
      $text = $p.contents().first();
      range = document.createRange();
      range.setStart($text[0], 0);
      range.setEnd($text[0], 3);
      editor.selection.range(range);
      button.command();
      console.log($p);
      $sup = $p.find('sup');
      expect($sup.length).toBe(1);
      return expect($sup.text()).toBe('sup');
    });
    return it('should be active when selection inside sup tag', function() {
      var $sup, button, range;
      editor.setValue('<p><sup>sup</sup> text</p>');
      editor.focus();
      $sup = editor.body.find('sup');
      range = document.createRange();
      range.setStart($sup[0], 1);
      range.setEnd($sup[0], 1);
      editor.selection.range(range);
      editor.inputManager.focused = true;
      editor.trigger('selectionchanged');
      button = editor.toolbar.findButton('sup');
      return expect(button.active).toBe(true);
    });
  });

}).call(this);
