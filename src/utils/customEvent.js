/**
 * customEvent ponyfill
 * @param eventName
 * @param params
 * @returns {*}
 */
export default function customEvent(eventName, detail) {
  const params = Object.assign({ bubbles: false, cancelable: false, detail });
  let event;
  if (typeof window.CustomEvent === 'function') {
    event = new CustomEvent(eventName, params);
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, params.bubbles, params.cancelable, params.detail);
  }
  return event;
}

/**
 * customEmit - emit customEvent
 * @param element
 * @param eventName
 * @param params
 * @returns {*}
 */
export function customEmit(element, eventName, ...args) {
  const event = customEvent(eventName, [...args]);
  element.dispatchEvent(event);
}
