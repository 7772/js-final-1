/**
 * 객체 1
 * 
 */

/** 
 * 개념 1. 모든 객체의 (가장 상위) 조상은 Object 함수 이다. 
 * 
 * Object 함수는 자신의 'prototype' 에 정의된 모든 내용을 자바스크립트의 모든 객체에게 물려주었다.
 */
console.dir(Object);

/** 개념 2. 즉, 모든 객체는 함수로부터 만들어진다. */
var obj1 = {};
var obj2 = new Object();

console.dir(obj1);
console.dir(obj2);

/** 개념 3. 
 * 객체는 __proto__ 라는 프로퍼티로 자신을 만든 부모함수의 'prototype' 프로퍼티를 가리킨다. 
 * 즉, 자식은 부모함수의 'prototype' 에 있는 프로퍼티를 물려받는다.
 */

// Chrome 에서 실행해주세요.
var obj3 = {};
var obj4 = new Object();
console.log(Object.prototype);
console.log(obj3.__proto__);
console.log(obj4.__proto__);