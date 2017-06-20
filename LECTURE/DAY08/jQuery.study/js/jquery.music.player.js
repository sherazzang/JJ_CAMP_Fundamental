/*! jquery.music.player.js © yamoo9.net, 2017 */

// 모델 데이터 (배열)
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

// jQuery 코드(캡슐화)
jQuery(function($){

  /////////////
  // STEP 1. //
  /////////////

  // `.music-player` 요소 만들기
  var $m_player = $('<div class="music-player">');

  // <body> 요소의 첫번째 자식으로 추가(삽입)
  $m_player.prependTo('body');

  // 변수 $m_player에 담긴 객체 확인
  console.log('$m_player:', $m_player);


  /////////////
  // STEP 2. //
  /////////////

  // ul.music-coverlist 요소 $m_player 객체 내부에 추가하기
  // $('<ul class="music-coverlist is-list">').appendTo($m_player);
  $m_player.append('<ul class="music-coverlist is-list">');

  // ul.music-coverlist 요소를 참조하는 jQuery 객체 변수에 할당
  // var $m_coverlist = $('.music-coverlist', $m_player);
  var $m_coverlist = $m_player.find('.music-coverlist');
  // console.log('$m_coverlist:', $m_coverlist);

  // JavaScript 스타일 코드
  // for ( var i=0, l=coverList.length; i<l; ++i ) {
  //   var cover = coverList[i];
  //   var $cover = $([
  //     '<li class="music-cover-item">',
  //       '<img class="music-cover is-rwd" src="../../media/cover/'+ cover.src +'" alt="'+ cover.alt +'">',
  //     '</li>'
  //   ].join('')).appendTo($m_coverlist);
  //   // console.log($cover.html());
  //   // $m_coverlist.append($cover);
  // }

  // jQuery 스타일 코드
  // Utility(Static) Methods
  // http://api.jquery.com/jQuery.each/
  // $.each(coverList, function(index, cover) {
  //   $([
  //     '<li class="music-cover-item">',
  //       '<img class="music-cover is-rwd" src="../../media/cover/'+ cover.src +'" alt="'+ cover.alt +'">',
  //     '</li>'
  //   ].join('')).appendTo($m_coverlist);
  // });

  /////////////
  // STEP 3. //
  /////////////
  // var controls = [
  //   '<div class="player-indicators"></div>',
  //   '<div class="player-controller">',
  //     '<button type="button" class="button is-button is-prev" aria-label="PREV"></button>',
  //     '<button type="button" class="button is-button is-next" aria-label="NEXT"></button>',
  //   '</div>'
  // ].join('');

  // $m_player.append(controls);

  $([
    '<div class="player-indicators"></div>',
    '<div class="player-controller">',
      '<button type="button" class="button is-button is-prev" aria-label="PREV"></button>',
      '<button type="button" class="button is-button is-next" aria-label="NEXT"></button>',
    '</div>'
  ].join('')).appendTo($m_player);

  var $m_indicators = $('.player-indicators', $m_player);

  var distance = $m_player.width();

  // jQuery 스타일 반복문
  $.each(coverList, function(index, cover) {

    // 커버 이미지 삽입
    $([
      '<li class="music-cover-item">',
        '<img class="music-cover is-rwd" src="../../media/cover/'+ cover.src +'" alt="'+ cover.alt +'">',
      '</li>'
    ].join('')).appendTo($m_coverlist);

    // 인디케이터 삽입
    $m_indicators.append('<a href role="tab" class="indicator" aria-label="'+cover.alt+'"></a>');

    $m_indicators_tabs = $m_indicators.find('.indicator');

    $m_indicators_tabs.eq(index).on('click', function(){
      // console.log(this.find); // DOM Object
      // console.log( $(this).find ); // jQuery {}
      var $tab = $(this);
      var index = $tab.index();
      $tab.parent().find('.is-active').removeClass('is-active');
      $tab.addClass('is-active');
      // jQuery객체.css('속성', '값')
      $m_coverlist.css('transform', 'translateX(' + index * -1 * distance + 'px)');
      return false;
    });

  });

});
