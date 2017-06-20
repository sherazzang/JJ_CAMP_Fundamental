/*! carousel.basic.js © yamoo9.net, 2017 */

// 커버 데이터(데이터베이스 내부에 저장)
// 클라이언트(사용자 환경: 웹 브라우저, 스마트폰 웹뷰): 요청 <-> 서버(데이터베이스, 자료)
var coverList = [
  {
    src: "001.EdSheeran-ShapeOfYou.jpg",
    alt: "Ed Sheeran - Shape Of You"
  },
  {
    src: "002.TheChainsmokers&Halsey-Closer.jpg",
    alt: "The Chainsmokers & Halsey - Closer"
  },
  {
    src: "003.Zayn&TaylorSwift-IDon'tWannaLiveForever(FiftyShadesDarker).jpg",
    alt: "Zayn & TaylorSwift - I Don't Wanna Live Forever (Fifty Shades Darker)"
  },
  {
    src: "004.KatyPerry&SkipMarley-ChainedToTheRhythm.jpg",
    alt: "Katy Perry & Skip Marley - Chained To The Rhythm"
  },
  {
    src: "005.Migos&LilUziVert-BadAndBoujee.jpg",
    alt: "Migos & Lil Uzi Vert - Bad And Boujee"
  },
  {
    src: "006.TheChainsmokers-Paris.jpg",
    alt: "The Chainsmokers - Paris"
  },
  {
    src: "007.Rihanna-LoveOnTheBrain.jpg",
    alt: "Rihanna - Love On The Brain"
  },
  {
    src: "008.BrunoMars-That'sWhatILike.jpg",
    alt: "Bruno Mars - That's What I Like"
  },
  {
    src: "009.BigSean-BounceBack.jpg",
    alt: "Big Sean - Bounce Back"
  },
  {
    src: "010.MachineGunKelly&CamilaCabello-BadThings.jpg",
    alt: "Machine Gun Kelly & Camila Cabello - Bad Things"
  }
];

// --------------------------------------------------------------------------------------------

// DOM API
// 문서 객체 모델
// 변수 참조
var coverList_el = document.querySelector('.music-coverlist');

var i = 0;
var l = coverList.length; // 10
var inner_html_code = '';
var src;
var alt;
var cover;

// MVC, MVP, MVVM, MVW
// Model + Template(HTML + CSS) = View
// Controller

// 템플릿
var template = [];

for ( ; i<l; i=i+1 ) {
  cover = coverList[i];
  src = '../../media/cover/' + cover.src;
  alt = cover.alt;

  // 템플릿 사용 방법 1 - 문자 사용
  // inner_html_code += '<li class="music-cover-item">';
  // inner_html_code +=   '<img class="music-cover is-rwd" src="'+ src +'" alt="'+ alt +'">';
  // inner_html_code += '</li>';

  // 템플릿 사용 방법 2 - 배열 사용
  // Method: 객체가 소유한 함수
  // 날다(fly): 함수
  // 새.날다(bird.fly()): 새(객체)가 소유한 메서드(수행가능한 일)

  // 배열객체.조인(join) 메서드
  // \n => newline
  // \t => tab
  template = template.concat([
    '<li class="music-cover-item">',
      '<img class="music-cover is-rwd" src="'+ src +'" alt="'+ alt +'">',
    '</li>'
  ]);
}

// coverList_el.innerHTML += inner_html_code; // 문자 데이터 사용
coverList_el.innerHTML += template.join('');  // 배열 -> 문자 데이터 사용

// --------------------------------------------------------------------------------------------

var index    = 0;
var distance = 400;

var controller = document.querySelector('.player-controller');
var prev_btn   = controller.querySelector('.is-prev');
var next_btn   = controller.querySelector('.is-next');

prev_btn.onclick = function() {
  if ( --index < 0 ) { index = coverList.length - 1; }
  // coverList_el.style.transform = 'translateX(' + index * -1 * distance + 'px)';
  indicatros_tabs[index].onclick();
};

next_btn.onclick = function() {
  if ( ++index === coverList.length ) { index = 0; }
  // coverList_el.style.transform = 'translateX(' + index * -1 * distance + 'px)';
  indicatros_tabs[index].onclick();
};

// --------------------------------------------------------------------------------------------

var indicators      = document.querySelector('.player-indicators')
var k               = coverList.length;
var indicators_html = [];

for( ; --k > -1; ) {
  var label = coverList[k].alt;
  indicators_html.push('<a href role="tab" class="indicator" aria-label="'+label+'"></a>');
}

indicators.innerHTML = indicators_html.reverse().join('');


var indicatros_tabs  = indicators.querySelectorAll('a');
var active_indicator = indicatros_tabs[index];
var h = indicatros_tabs.length
var j = 0;
var tab;

active_indicator.classList.add('is-active');

for ( ; j < h; j++ ) {
  tab = indicatros_tabs[j];
  tab.index = j;
  // console.log('tab:', tab);
  // tab.onclick = function(event) {
  tab.onclick = function() {
    // 브라우저 기본 동작 차단
    // event.preventDefault();
    index = this.index;
    this.parentNode.querySelector('.is-active').classList.remove('is-active');
    this.classList.add('is-active');
    coverList_el.style.transform = 'translateX(' + index * -1 * distance + 'px)';
    // 브라우저 기본 동작 차단
    return false;
  };
}

// 시뮬레이션 (마치 사용자가 클릭한 것처럼)
// indicatros_tabs[5].onclick();
