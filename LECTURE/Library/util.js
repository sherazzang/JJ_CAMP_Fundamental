/*! util.js © yamoo9.net, 2017 */

/**
 *  JavaScript 데이터 유형을 정확하게 감지하는 유틸리티 함수
 *  @param  {anything}  data  모든 데이터 유형
 *  @return {string}          데이터 감지한 문자 값
 */
function checkDataType(data) {
  return Object.prototype.toString.call(data).toLowerCase().slice(8,-1);
}

// 래퍼 함수: checkDataType() 함수를 래핑하는 유틸리티 함수
function isNumber(data) {
  return checkDataType(data) === 'number';
}
function isString(data) {
  return checkDataType(data) === 'string';
}
function isBoolean(data) {
  return checkDataType(data) === 'boolean';
}
function isFunction(data) {
  return checkDataType(data) === 'function';
}
function isArray(data) {
  return checkDataType(data) === 'array';
}
function isObject(data) {
  return checkDataType(data) === 'object';
}
function isNull(data) {
  return checkDataType(data) === 'null';
}
function isUndefined(data) {
  return checkDataType(data) === 'undefined';
}

function id(name) {
  // 오류 검증 (Valid Validation, Detect Invalid)
  if ( !isString(name) ) { throw new Error('전달인자는 문자열만 허용됩니다.'); }
  return document.querySelector('#' + name);
}
