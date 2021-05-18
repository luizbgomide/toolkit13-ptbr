/* global Hooks, Babele */

Hooks.on('init', () => {

  if(typeof Babele !== 'undefined') {
      Babele.get().register({
          module: 'toolkit13-ptbr',
          lang: 'pt-br',
          dir: 'packs'
      });
  }
});
