/*! dom-core.js © yamoo9.net, 2017 */

// DOM API(문서객체모델의 제품을 사용하기 위한 설명서)
// document {} 객체

// 문서 객체의 하위 객체들 중, 해당 CSS 선택자와 일치하는 요소 객체들을 수집하여 반환(집합)
// document.querySelectorAll('.target-list li'); // 유사 배열(Like Array Object)

// 문서객체모델 API를 사용하여 대상을 찾아오는 것은 매우 많은 비용을 들이게 된다.
// 고로 변수를 사용하여 힘들게 가져온 데이터를 기억해야 한다.
// var targetListItems;   // camelCase
var target_list_items; // underscore
target_list_items = document.querySelectorAll('.target-list li');
// console.log(target_list_items);

// target_list_items 변수에 참조된 유사배열 데이터 노드리스트(NodeList)의 원소 총 개수
console.log('target_list_items.length:', target_list_items.length);

// target_list_items 변수에 참조된 데이터의 개별 원소에 접근하는 방법
// 표준 API 방법
target_list_items.item(1);
// 유사 배열이기에 사용할 수 있는 방법
target_list_items[1];
// 변수 target_list_items에 참조된 데이터(유사 배열)의 마지막 원소에 접근하는 방법
var last_item = target_list_items[ target_list_items.length - 1 ];
console.log('last_item:', last_item);
