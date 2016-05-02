(function() {
  describe('Simditor subscript button', function() {
    var editor;
    editor = null;
    beforeEach(function() {
      return editor = spec.generateSimditor({
        content: '<p>sub text</p>',
        toolbar: ['sub']
      });
    });
    afterEach(function() {
      spec.destroySimditor();
      return editor = null;
    });
    it('should set selection sub after clicking', function() {
      var $p, $sub, $text, button, range;
      editor.focus();
      button = editor.toolbar.findButton('sub');
      $p = editor.body.find('p:first');
      $text = $p.contents().first();
      range = document.createRange();
      range.setStart($text[0], 0);
      range.setEnd($text[0], 3);
      editor.selection.range(range);
      button.command();
      $sub = $p.find('sub');
      expect($sub.length).toBe(1);
      return expect($sub.text()).toBe('sub');
    });
    return it('should be active when selection inside sub tag', function() {
      var $sub, button, range;
      editor.setValue('<p><sub>sub</sub> text</p>');
      editor.focus();
      $sub = editor.body.find('sub');
      range = document.createRange();
      range.setStart($sub[0], 1);
      range.setEnd($sub[0], 1);
      editor.selection.range(range);
      editor.inputManager.focused = true;
      editor.trigger('selectionchanged');
      button = editor.toolbar.findButton('sub');
      return expect(button.active).toBe(true);
    });
  });

}).call(this);
