const lg = 1024;
const md = 992;
const sm = 768;
const xs = 480;

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
  lg,
  md,
  sm,
  xs,
  throttle,
}
