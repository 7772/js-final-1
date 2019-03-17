/**
 * 호이스팅
 * 
 * 호이스팅은 '끌어올리기' 입니다.
 * 
 * 자바스크립트는 변수의 선언을 호이스트 합니다. 할당되는 값은 호이스트 하지 않습니다.
 * 먼저 선언과 할당을 분명히 구분하고 가야합니다.
 * 
 * var declaration;             // 이것은 선언 입니다.
 * declaration = 'assignment';  // 이것은 할당(초기화) 입니다.
 * 
 * 즉, 자바스크립트는 compile 할 때에, 각 scope(유효범위) 내에 모든 변수의 선언을 호이스트 합니다.
 * 그리고 runtime 과정에서 할당이 이루어집니다.
 * 
 * 아래와 같은 코드가 있다고 할때에
 * 
 * console.log(declaration);
 * var declaration = 'assignment';
 * 
 * 실제로 compile 시의 코드가 읽혀지는 순서는
 *
 * var declaration;
 * console.log(declaration);
 * declaration = 'assignment'; 
 * 
 * 위와 같습니다.
 * 
 */

functionStatement();
function functionStatement() {
  console.log('함수 선언문 : 이것은 함수 선언문 입니다.');
}

functionExpression();
var functionExpression = function() {
  console.log('함수 표현식 : 이것은 함수 표현식 입니다.');
};

/**
 * 35 ~ 38 번 line 을 javascript 엔진이 compile 하는 순서대로 작성해보면?
 * 
 * var functionExpression;
 * functionExpression();
 * functionExpression = function() {...};
 * 
 * undefined 에 함수 실행문을 사용했기때문에 에러가 발생했다.
 */