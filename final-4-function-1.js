/**
 * 함수
 * 
 */

/** 개념 1. 모든 함수의 조상은 Function 함수 이다. */
console.dir(Function);

/** 개념 2. 모든 함수는 Function 함수로부터 만들어진다. */
function func1() {}
var func2 = function() {};
var func3 = new Function();

console.dir(Function.prototype);
console.dir(func1.__proto__);
console.dir(func2.__proto__);
console.dir(func3.__proto__);

/** 개념 3. 모든 함수는 자식객체를 만들 수 있다. 
 * 
 * 자식이 물려받을 'prototype' 프로퍼티를 가지고 있기 때문이다.
 * 그리고 그 'prototype' 프로퍼티에는 객체를 생성할 자격을 가진 생성자 'constructor' 프로퍼티를 가지고 있다.
 */

// Chrome 에서 실행해주세요.
function Parent() {}

var child = new Parent();
console.dir(Parent.prototype);
console.dir(child.__proto__);