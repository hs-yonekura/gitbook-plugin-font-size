module.exports = {
  blocks: {
    fontsize: {
      shortcuts: {
        parsers: ['markdown', 'asciidoc', 'restructuredtext'],
        start:   '++',
        end:     '++'
      },
      process(content) {
        var size = '140%';
        if(this.options.pluginsConfig['font-size'].fontSize !== undefined)
          size = this.options.pluginsConfig['font-size'].fontSize;
        return '<span style="font-size:' + size + ';">' + content.body + '</span>';
      }
    }
  }
}

