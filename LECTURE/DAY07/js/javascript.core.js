/*! javascript.core.js © yamoo9.net, 2017 */


// STEP 0
// media/ 디렉토리 내부의 cover 이미지를
// 사용자 화면(view)에 뿌리기 위해(순환 처리)
// 배열(집합) 데이터를 모델링 하시오.

var coverList = []; // Create Array

// Add Item in Array
coverList.push({
  src: "001.EdSheeran-ShapeOfYou.jpg",
  alt: "Ed Sheeran - Shape Of You"
});
coverList.push({
  src: "002.TheChainsmokers&Halsey-Closer.jpg",
  alt: "The Chainsmokers & Halsey - Closer"
});
coverList.push({
  src: "003.Zayn&TaylorSwift-IDon'tWannaLiveForever(FiftyShadesDarker).jpg",
  alt: "Zayn & TaylorSwift - I Don't Wanna Live Forever (Fifty Shades Darker)"
});
coverList.push({
  src: "004.KatyPerry&SkipMarley-ChainedToTheRhythm.jpg",
  alt: "Katy Perry & Skip Marley - Chained To The Rhythm"
});
coverList.push({
  src: "005.Migos&LilUziVert-BadAndBoujee.jpg",
  alt: "Migos & Lil Uzi Vert - Bad And Boujee"
});
coverList.push({
  src: "006.TheChainsmokers-Paris.jpg",
  alt: "The Chainsmokers - Paris"
});
coverList.push({
  src: "007.Rihanna-LoveOnTheBrain.jpg",
  alt: "Rihanna - Love On The Brain"
});
coverList.push({
  src: "008.BrunoMars-That'sWhatILike.jpg",
  alt: "Bruno Mars - That's What I Like"
});
coverList.push({
  src: "009.BigSean-BounceBack.jpg",
  alt: "Big Sean - Bounce Back"
});
coverList.push({
  src: "010.MachineGunKelly&CamilaCabello-BadThings.jpg",
  alt: "Machine Gun Kelly & Camila Cabello - Bad Things"
});


// STEP 1
// 문서 (HTML Document) 에서 제어할 대상 요소를 찾는다.
// 찾고자 하는 대상의 식별자를 사용하여 대상 찾기를 하자.
var coverList_el = document.querySelector('.music-coverlist');
// console.log('coverList_el:', coverList_el);

// STEP 2
// 데이터 coverList => HTML 템플릿에 순환 처리 하여 화면에 렌더링 => 뷰(View) 구현
// HTML Code: Template
// <li class="music-cover-item">
//   <img class="music-cover is-rwd" src="" alt="">
// </li>

// 순환 처리하여 완성할 HTML 코드를 담을 문자열 데이터
var inner_html_code = '';

for ( var i=0, l=coverList.length; i<l; ++i ) {
  // console.log(i);
  // console.log(coverList[i]); // 커버 이미지 경로
  // [{src:"001.EdSheeran-ShapeOfYou.jpg", alt:""}]
  var src = '../media/cover/' + coverList[i].src;
  var alt = coverList[i].alt;
  // console.log(src);
  // coverList_el // <ul> <- <li>
  inner_html_code += '<li class="music-cover-item">';
  inner_html_code +=     '<img class="music-cover is-rwd" src="'+ src +'" alt="'+ alt +'">';
  inner_html_code += '</li>';
}

coverList_el.innerHTML += inner_html_code;


// --------------------------------------------------------------------------------------------

// STEP 3
// 버튼 컨트롤 이벤트 리스너 설정 및 핸들러 연결
// 3.1.0 상태 변수 설정
// 현재 사용자에게 보여지는 커버의 인덱스 번호는?
var index = 0;
// console.log('index:', index);
// 커버 이미지 리스트 요소의 이동하는 거리?
var distance = 400;

// 3.1.1 버튼 컨트롤 찾기
var controller = document.querySelector('.player-controller');
var prev_btn   = controller.querySelector('.is-prev');
var next_btn   = controller.querySelector('.is-next');
// console.log('prev_btn:', prev_btn);
// console.log('next_btn:', next_btn);

// 3.2 버튼 컨트롤에 이벤트 리스너(속성) 설정
// 3.3 버튼 컨트롤 이벤트 리스너에 핸들러(함수) 연결
prev_btn.onclick = function() {
  // index = index - 1;
  index--;
  // console.log('index:', index);
  // console.log('index < 0:', index < 0);
    if ( index < 0 ) {
      // 함수 종료
      // return;
      index = coverList.length - 1;
    }
  // console.log('prev', coverList_el);
  coverList_el.style.transform = 'translateX(' + index * -1 * distance + 'px)';
};
next_btn.onclick = function() {
  // index = index + 1;
  index++; // 10
  // console.log('index:', index);
  // console.log('index === coverList.length:', index === coverList.length);
  if ( index === coverList.length ) {
    // 함수 종료
    // return;
    index = 0;
  }
  // console.log('next', coverList_el);
  coverList_el.style.transform = 'translateX(' + index * -1 * distance + 'px)';
};

// --------------------------------------------------------------------------------------------

// STEP 4
// 인디케이터 디자인(설계)

// 4.1 인디케이터 컨테이너 요소 탐색, 변수에 참조
var indicators = document.querySelector('.player-indicators');
// console.log('indicators:', indicators);

// 4.2 인디케이터 마크업을 coverList를 순환 처리하여 화면에 렌더링
// <a href role="button" class="indicator" aria-label="Ed Sheeran - Shape Of You"></a>

var k = coverList.length,
    indicators_html = [];

for( ; --k > -1; ) {
  var label = coverList[k].alt;
  indicators_html.push('<a href role="tab" class="indicator" aria-label="'+label+'"></a>');
}

indicators.innerHTML = indicators_html.reverse().join('');

// 초기화 과정 수행
// 첫번째(index = 0) 인디케이터에 활성화 클래스를 적용
var indicatros_tabs = indicators.querySelectorAll('a');
var active_indicator = indicatros_tabs[index];
active_indicator.classList.add('is-active');

// 인디케이터 <a> 요소 집합(Nodelist)에 이벤트 핸들링
for ( var j = 0, h = indicatros_tabs.length; j < h; j++ ) {
  var tab = indicatros_tabs[j];
  // 탭 객체에 새로운 속성 index를 추가한 후,
  // 순환문이 돌 때의 현재 시점의 j 값을 index 속성에 복사해둔다.
  tab.index = j;
  tab.onclick = function(event) {
    // 웹 브라우저 기본(default) 동작 차단(prevent)
    // event.preventDefault();
    event.preventDefault();
    // 사용자가 클릭했을 때, 각각의 탭에 기억되어 있는 index 값을
    // 정상적으로 출력해줄 수 있다.
    index = this.index;
    // 기존에 활성화되어 있던 탭의 활성화 클래스를 제거한다.
    this.parentNode.querySelector('.is-active').classList.remove('is-active');
    // 클릭한 탭에 활성화 클래스 is-active를 추가한다.
    this.classList.add('is-active');
    // 변경된 index 값으로 슬라이드가 이동된다.
    coverList_el.style.transform = 'translateX(' + index * -1 * distance + 'px)';
  };
}
