const assert = require('assert');
const baseConfig = require('../../lib/webpack.base.js');

// eslint-disable-next-line no-undef
describe('webpack.base.js test case', () => {
  // eslint-disable-next-line no-undef
  it('entry', () => {
    assert.equal(baseConfig.entry.index.indexOf('webpack-builder-sj/test/smoke/template/src/index/index.js') > -1, true);
    assert.equal(baseConfig.entry.search.indexOf('webpack-builder-sj/test/smoke/template/src/search/index.js') > -1, true );
  });
});
