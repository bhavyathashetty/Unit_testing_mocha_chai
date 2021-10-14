const assert = require('chai').assert;
const app = require('../app');


describe('App',function(){
    describe('sayHello',function(){
        it('sayHello returns hello',function(){
            let result = app.sayHello()
            assert.equal(result,'hello');
        })
        it('sayHello returns a type string',function(){
            let result = app.sayHello();
            assert.typeOf(result,'string');
        })
    })
    describe('addNumbers',function(){
        it('addNumbers should be above five',function(){
            let result = app.addNumbers(5,5);
            assert.isAbove(result,5);
        })
        it('addNumbers returns a type number',function(){
            let result = app.addNumbers(5,5);
            assert.typeOf(result,'number');
        })
    })
    
    
})