/*! loop.unsplash.js © yamoo9.net, 2017 */

/////////////////////////////////
// Source Unsplash 데이터 반복 처리
// https://source.unsplash.com
/////////////////////////////////



/////////////////////////////
// USE CASE 1. 사이즈 설정 방법
/////////////////////////////
// - width
// - height

// https://source.unsplash.com/470x210




/////////////////////////////
// USE CASE 2. 카테고리 설정 방법
/////////////////////////////
// - buildings
// - food
// - nature
// - people
// - technology
// - objects

// https://source.unsplash.com/category/technology




/////////////////////////////
// USE CASE 3. 일자별, 주차별
/////////////////////////////
// - daily
// - weekly
// - ?keyword

// https://source.unsplash.com/category/object/400x220/weekly?car


// ----------------------------------------------------------------------

// 포토 갤러리 컨테이너 요소 참조
var photo_gallery = document.querySelector('.photo-gallery');
// 제대로 문서의 객체를 참조해왔나 검증 (잘못 가져온 경우는 null 출력)
console.log('photo_gallery:', photo_gallery);

// unsplash API 를 사용하여 랜덤 이미지 서버에 요청
// <img src="http://source.unsplash.com/category/nature/620x314" alt="">

// 10회 반복 구문
// 우선은 숫자 상수로 구현
// var n = 1;
// while ( n++ <= max ) {
// var max = 9;
// while ( max-- ) {
//   photo_gallery.innerHTML += '<img src="http://source.unsplash.com/400x400" alt="">';
// }


// 카테고리를 순환하여 화면에 이미지 출력
// buildings
// food
// nature
// people
// technology
// objects
var categories = [];
categories.push('buildings');
categories.push('food');
categories.push('nature');
categories.push('people');
categories.push('technology');
categories.push('objects');
categories.push('nature');
categories.push('food');
categories.push('buildings');
categories.push('nature');
categories.push('people');
categories.push('technology');

// var categories_len = categories.length; // 6
// console.log('categories.length:', categories.length);

var i = 0, source, size;
while ( i < categories.length ) {
  // 0, 1, 2, 3, 4, 5
  // console.log(categories[i]);
  // size 설정
  // 200x200, 300x300, 400x400, 410x410
  size = (i+10) * 20;
  size = size + 'x' + size;
  // console.log(size);
  source = 'http://source.unsplash.com/category/'+ categories[i] +'/' + size;
  photo_gallery.innerHTML += '<div class="img-container"><img src="'+ source +'" alt=""></div>';
  i++;
}


// ------------------------------------------------------------
// do ~ while() 구문은
// 조건이 참/거짓의 유무에 상관없이 반드시 1회는 실행되는 구문이다.
// 자주 사용되지는 않으나, 필요한 상황이 되었을 때 이를 기억해내 사용하면 좋다.
var k = 10;
do {
   // console.log(k); // 10
   k++; // 11
} while( k > 20 );



// ------------------------------------------------------------
// while() {}  ->  for() {}

// 변수 반복자(i) 초기 값 0 설정
var i = 0;

// 조건 확인 (참이면 {} 수행)
while ( i < categories.length ) {
  console.log(i);
  // 조건 확인 변수 반복자 값을 변화
  i++;
}

for ( var i=0; i < categories.length; i++ ) {
  console.log(i);
}
