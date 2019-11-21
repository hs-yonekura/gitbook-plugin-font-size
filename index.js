module.exports = {
  blocks: {
    fontsize: {
      shortcuts: {
        parsers: ['markdown', 'asciidoc', 'restructuredtext'],
        start:   '++',
        end:     '++'
      },
      process(content) {
        return '<span style="font-size:120%;">' + content.body + '</span>';
      }
    }
  }
}
