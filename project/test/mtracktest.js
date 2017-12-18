var Application = require('spectron').Application
var assert = require('assert')
var M = require("../work")

describe('application launch', function () {
  it('show total eat add100',function(){
      assert.equal('100',M.eat('100'))
  })
  it('show total traffic add50',function(){
    assert.equal('150',M.traffic('50'))
})
it('show total add10',function(){
    assert.equal('160',M.leisure('10'))
})
})