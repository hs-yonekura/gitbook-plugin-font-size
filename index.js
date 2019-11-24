module.exports = {
  blocks: {
    fontsize: {
      shortcuts: {
        parsers: ['markdown', 'asciidoc', 'restructuredtext'],
        start:   '++',
        end:     '++'
      },
      process(content) {
        const config   = book.config.get('pluginsConfig.font-size', {});
        var fontSize = "140";
        if(config.fontsize !== undefined) fontSize = config.fontsize;
        return '<span style="font-size:'  + String(fontSize) + '%">' content.body + '</span>';
      }
    }
  }
}

