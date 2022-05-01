function throttle(functionName, ms) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper () {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;

      return;
    }

    functionName.apply(this, arguments);
    isThrottled = true;

    setTimeout(function() {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms)
  }

  return wrapper;
}

export {
  throttle,
}
