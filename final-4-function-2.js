/**
 * 프로토타입 이해하기 1
 */

/** 
 * 예제 1
 * 
 * 함수를 통해 생성된 객체는 부모함수에서 정의된 프로퍼티를 물려받는다.
 */

function Parent(name, age) {
  this.name = name;
  this.age = age;
}

var child1 = new Parent('foo', 7);
console.dir(child1);

var child2 = new Parent('bar', 8);
console.dir(child2);

/**
 * 예제 2
 * 
 * 함수를 통해 생성된 객체는 __proto__ 프로퍼티로 부모함수의 'prototype' 객체에 정의된
 * 프로퍼티를 사용할 수 있다.
 */

Parent.prototype.sayYourName = function() {
  console.log(this.name);
};

child1.sayYourName();
child2.sayYourName();

/**
 * 예제 3
 * 
 * __proto__ 프로퍼티를 통하여 가장 마지막 조상인 Object 함수의 'prototype' 까지 올라간다.
 */
function Parent1() {}
Parent1.prototype.first = 'first';
Parent1.prototype.whichDoYouCall = 'Parent1';

function Parent2() {}
Parent2.prototype = new Parent1();
Parent2.prototype.second = 'second';

function Parent3() {}
Parent3.prototype = new Parent2();
Parent3.prototype.third = 'third';
Parent3.prototype.whichDoYouCall = 'Parent3';

var childWithParents = new Parent3();

console.log(childWithParents.first);
console.log(childWithParents.second);
console.log(childWithParents.third);
console.log(childWithParents.whichDoYouCall);   // 가까운 부모의 'prototype' 에 존재하는 프로퍼티를 사용한다.

/**
 * 예제 4
 * 
 * 부모함수의 'prototype' 은 하나다.
 * 따라서 여러 자식들은 하나의 프로퍼티를 공유하게 된다.
 */
function Parent_ex4() {}
Parent.prototype.foo = 'foo';

var child1_ex4 = new Parent();
var child2_ex4 = new Parent();

console.log(child1_ex4.foo);
console.log(child2_ex4.foo);

Parent.prototype.foo = "child1's foo";

console.log(child1_ex4.foo);
console.log(child2_ex4.foo);