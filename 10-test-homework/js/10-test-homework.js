console.log("SFE homework #10");


document.addEventListener('keydown', function(event){
  let keyButton = null;
  keyButton = document.getElementById(event.code);
  keyButton.classList.add('active');
  setTimeout(function(){ keyButton.classList.remove('active'); }, 150);

  let audio = null;
  audio = document.getElementById(`${event.code}-audio`);
  audio.currentTime = 0;
  audio.play();
});



function _createForOfIteratorHelper(o) {
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
      let i = 0;
      let F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  let it,
    normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      let step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  let n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (let i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

let buttons = document.getElementsByClassName("sound-btn");

let _iterator = _createForOfIteratorHelper(buttons),
  _step;

try {
  let _loop = function _loop() {
    let btn = _step.value;

    btn.onclick = function() {
      btn.getElementsByTagName("audio")[0].play();
      btn.getElementsByTagName("audio")[0].currentTime = 0;
      btn.classList.add('active');
      setTimeout(function(){ btn.classList.remove('active'); }, 150);
    };
  };

  for (_iterator.s(); !(_step = _iterator.n()).done; ) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
