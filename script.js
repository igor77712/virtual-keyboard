const arrayKeys = [];

arrayKeys[0] = [
  { className: 'Backquote', eng: { caseDown: '`', caseUp: '~' }, rus: { caseDown: 'ё', caseUp: 'Ё' } },
  { className: 'Digit1', eng: { caseDown: '1', caseUp: '!' }, rus: { caseDown: '1', caseUp: '!' } },
  { className: 'Digit2', eng: { caseDown: '2', caseUp: '@' }, rus: { caseDown: '2', caseUp: '"' } },
  { className: 'Digit3', eng: { caseDown: '3', caseUp: '#' }, rus: { caseDown: '3', caseUp: '№' } },
  { className: 'Digit4', eng: { caseDown: '4', caseUp: '$' }, rus: { caseDown: '4', caseUp: ';' } },
  { className: 'Digit5', eng: { caseDown: '5', caseUp: '%' }, rus: { caseDown: '5', caseUp: '%' } },
  { className: 'Digit6', eng: { caseDown: '6', caseUp: '^' }, rus: { caseDown: '6', caseUp: ':' } },
  { className: 'Digit7', eng: { caseDown: '7', caseUp: '&' }, rus: { caseDown: '7', caseUp: '?' } },
  { className: 'Digit8', eng: { caseDown: '8', caseUp: '*' }, rus: { caseDown: '8', caseUp: '*' } },
  { className: 'Digit9', eng: { caseDown: '9', caseUp: '(' }, rus: { caseDown: '9', caseUp: '(' } },
  { className: 'Digit0', eng: { caseDown: '0', caseUp: ')' }, rus: { caseDown: '0', caseUp: ')' } },
  { className: 'Minus', eng: { caseDown: '-', caseUp: '_' }, rus: { caseDown: '-', caseUp: '_' } },
  { className: 'Equal', eng: { caseDown: '=', caseUp: '+' }, rus: { caseDown: '=', caseUp: '+' } },
  { className: 'Backspace', eng: { caseDown: 'Backspace', caseUp: 'Backspace' }, rus: { caseDown: 'Backspace', caseUp: 'Backspace' } }];

arrayKeys[1] = [
  { className: 'Tab', eng: { caseDown: 'Tab', caseUp: 'Tab' }, rus: { caseDown: 'Tab', caseUp: 'Tab' } },
  { className: 'KeyQ', eng: { caseDown: 'q', caseUp: 'Q' }, rus: { caseDown: 'й', caseUp: 'Й' } },
  { className: 'KeyW', eng: { caseDown: 'w', caseUp: 'W' }, rus: { caseDown: 'ц', caseUp: 'Ц' } },
  { className: 'KeyE', eng: { caseDown: 'e', caseUp: 'E' }, rus: { caseDown: 'у', caseUp: 'У' } },
  { className: 'KeyR', eng: { caseDown: 'r', caseUp: 'R' }, rus: { caseDown: 'к', caseUp: 'К' } },
  { className: 'KeyT', eng: { caseDown: 't', caseUp: 'T' }, rus: { caseDown: 'е', caseUp: 'Е' } },
  { className: 'KeyY', eng: { caseDown: 'y', caseUp: 'Y' }, rus: { caseDown: 'н', caseUp: 'Н' } },
  { className: 'KeyU', eng: { caseDown: 'u', caseUp: 'U' }, rus: { caseDown: 'г', caseUp: 'Г' } },
  { className: 'KeyI', eng: { caseDown: 'i', caseUp: 'I' }, rus: { caseDown: 'ш', caseUp: 'Ш' } },
  { className: 'KeyO', eng: { caseDown: 'o', caseUp: 'O' }, rus: { caseDown: 'щ', caseUp: 'Щ' } },
  { className: 'KeyP', eng: { caseDown: 'p', caseUp: 'P' }, rus: { caseDown: 'з', caseUp: 'З' } },
  { className: 'BracketLeft', eng: { caseDown: '[', caseUp: '{' }, rus: { caseDown: 'х', caseUp: 'Х' } },
  { className: 'BracketRight', eng: { caseDown: ']', caseUp: '}' }, rus: { caseDown: 'ъ', caseUp: 'Ъ' } },
  { className: 'Backslash', eng: { caseDown: '\\', caseUp: '|' }, rus: { caseDown: '\\', caseUp: '/' } },
  { className: 'Delete', eng: { caseDown: 'Del', caseUp: 'Del' }, rus: { caseDown: 'Del', caseUp: 'Del' } }];

arrayKeys[2] = [
  { className: 'CapsLock', eng: { caseDown: 'CapsLock', caseUp: 'CapsLock' }, rus: { caseDown: 'CapsLock', caseUp: 'CapsLock' } },
  { className: 'KeyA', eng: { caseDown: 'a', caseUp: 'A' }, rus: { caseDown: 'ф', caseUp: 'Ф' } },
  { className: 'KeyS', eng: { caseDown: 's', caseUp: 'S' }, rus: { caseDown: 'ы', caseUp: 'Ы' } },
  { className: 'KeyD', eng: { caseDown: 'd', caseUp: 'D' }, rus: { caseDown: 'в', caseUp: 'В' } },
  { className: 'KeyF', eng: { caseDown: 'f', caseUp: 'F' }, rus: { caseDown: 'а', caseUp: 'А' } },
  { className: 'KeyG', eng: { caseDown: 'g', caseUp: 'G' }, rus: { caseDown: 'п', caseUp: 'П' } },
  { className: 'KeyH', eng: { caseDown: 'h', caseUp: 'H' }, rus: { caseDown: 'р', caseUp: 'Р' } },
  { className: 'KeyJ', eng: { caseDown: 'j', caseUp: 'J' }, rus: { caseDown: 'о', caseUp: 'О' } },
  { className: 'KeyK', eng: { caseDown: 'k', caseUp: 'K' }, rus: { caseDown: 'л', caseUp: 'Л' } },
  { className: 'KeyL', eng: { caseDown: 'l', caseUp: 'L' }, rus: { caseDown: 'д', caseUp: 'Д' } },
  { className: 'Semicolon', eng: { caseDown: ';', caseUp: ':' }, rus: { caseDown: 'ж', caseUp: 'Ж' } },
  { className: 'Quote', eng: { caseDown: "'", caseUp: '"' }, rus: { caseDown: 'э', caseUp: 'Э' } },
  { className: 'Enter', eng: { caseDown: 'Enter', caseUp: 'Enter' }, rus: { caseDown: 'Enter', caseUp: 'Enter' } }];

arrayKeys[3] = [
  { className: 'ShiftLeft', eng: { caseDown: 'Shift', caseUp: 'Shift' }, rus: { caseDown: 'Shift', caseUp: 'Shift' } },
  { className: 'KeyZ', eng: { caseDown: 'z', caseUp: 'Z' }, rus: { caseDown: 'я', caseUp: 'Я' } },
  { className: 'KeyX', eng: { caseDown: 'x', caseUp: 'X' }, rus: { caseDown: 'ч', caseUp: 'Ч' } },
  { className: 'KeyC', eng: { caseDown: 'c', caseUp: 'C' }, rus: { caseDown: 'с', caseUp: 'С' } },
  { className: 'KeyV', eng: { caseDown: 'v', caseUp: 'V' }, rus: { caseDown: 'м', caseUp: 'М' } },
  { className: 'KeyB', eng: { caseDown: 'b', caseUp: 'B' }, rus: { caseDown: 'и', caseUp: 'И' } },
  { className: 'KeyN', eng: { caseDown: 'n', caseUp: 'N' }, rus: { caseDown: 'т', caseUp: 'Т' } },
  { className: 'KeyM', eng: { caseDown: 'm', caseUp: 'M' }, rus: { caseDown: 'ь', caseUp: 'Ь' } },
  { className: 'Comma', eng: { caseDown: ',', caseUp: '<' }, rus: { caseDown: 'б', caseUp: 'Б' } },
  { className: 'Period', eng: { caseDown: '.', caseUp: '>' }, rus: { caseDown: 'ю', caseUp: 'Ю' } },
  { className: 'Slash', eng: { caseDown: '/', caseUp: '?' }, rus: { caseDown: '.', caseUp: ',' } },
  { className: 'ArrowUp', eng: { caseDown: '▲', caseUp: '▲' }, rus: { caseDown: '▲', caseUp: '▲' } },
  { className: 'ShiftRight', eng: { caseDown: 'Shift', caseUp: 'Shift' }, rus: { caseDown: 'Shift', caseUp: 'Shift' } }];

arrayKeys[4] = [
  { className: 'ControlLeft', eng: { caseDown: 'Ctrl', caseUp: 'Ctrl' }, rus: { caseDown: 'Ctrl', caseUp: 'Ctrl' } },
  { className: 'MetaLeft', eng: { caseDown: 'Menu', caseUp: 'Menu' }, rus: { caseDown: 'Menu', caseUp: 'Menu' } },
  { className: 'AltLeft', eng: { caseDown: 'Alt', caseUp: 'Alt' }, rus: { caseDown: 'Alt', caseUp: 'Alt' } },
  { className: 'Space', eng: { caseDown: ' ', caseUp: ' ' }, rus: { caseDown: ' ', caseUp: ' ' } },
  { className: 'AltRight', eng: { caseDown: 'Alt', caseUp: 'Alt' }, rus: { caseDown: 'Alt', caseUp: 'Alt' } },
  { className: 'ArrowLeft', eng: { caseDown: '◄', caseUp: '◄' }, rus: { caseDown: '◄', caseUp: '◄' } },
  { className: 'ArrowDown', eng: { caseDown: '▼', caseUp: '▼' }, rus: { caseDown: '▼', caseUp: '▼' } },
  { className: 'ArrowRight', eng: { caseDown: '►', caseUp: '►' }, rus: { caseDown: '►', caseUp: '►' } },
  { className: 'ControlRight', eng: { caseDown: 'Ctrl', caseUp: 'Ctrl' }, rus: { caseDown: 'Ctrl', caseUp: 'Ctrl' } }];


const specialKey = ['Backspace', 'Tab', 'Enter', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'ControlLeft', 'ControlRight', 'MetaLeft', 'Delete', 'Space'];
const engAlphabet = [
  'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
  'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL',
  'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM',
];

const rusAlphabet = [
  'Backquote',
  'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight',
  'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote',
  'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period',
];

const state = {
  lang: localStorage.getItem('lang') || 'eng',
  caps: false,
  shift: false,
};

window.addEventListener('unload', () => {
  localStorage.setItem('lang', state.lang);
});


const BODY = document.body;
const WRAPPER = document.createElement('div');

WRAPPER.setAttribute('class', 'wrapper');
WRAPPER.innerHTML = `
        <textarea name='text' id='text' class='textarea-keyboard' cols='100' rows='10' autofocus></textarea>
        <div class='keyboard' id='keyboard'></div>
        <div class='instructions'>
            <p> Клавиатура создана в операционной системе Linux Mint 19.3 Tricia </p>
            <p> Для переключения языка комбинация: левыe ctrl + alt </p>
        </div>

`;

BODY.append(WRAPPER);

const KEYBOARD = document.querySelector('#keyboard');
const TEXTAREA = document.querySelector('textarea');

const drawKey = (key, type, lang) => `
      <button class='${type} ${key.className} key'>
          ${key[lang].caseDown}
      </button>
`;

const drawSpecialKey = (key) => {
  if (['Backspace', 'Enter', 'CapsLock', 'ShiftLeft', 'ShiftRight'].includes(key.className)) {
    KEYBOARD.insertAdjacentHTML('beforeend', drawKey(key, 'key__special-double', state.lang));
  } else if (key.className === 'Space') {
    KEYBOARD.insertAdjacentHTML('beforeend', drawKey(key, 'key__special-space', state.lang));
  } else {
    KEYBOARD.insertAdjacentHTML('beforeend', drawKey(key, 'key__special-simple', state.lang));
  }
};

const drawKeyboard = (keys) => {
  for (let i = 0; i < keys.length; i += 1) {
    for (let j = 0; j < keys[i].length; j += 1) {
      if (specialKey.includes(keys[i][j].className)) {
        drawSpecialKey(keys[i][j]);
      } else {
        KEYBOARD.insertAdjacentHTML('beforeend', drawKey(keys[i][j], 'key__simple', state.lang));
      }
    }
  }
};

drawKeyboard(arrayKeys);

function renderKeys(key) {
  if (key === 'changeLang') {
    for (let i = 0; i < arrayKeys.length; i += 1) {
      for (let j = 0; j < arrayKeys[i].length; j += 1) {
        const btn = BODY.querySelector(`.${arrayKeys[i][j].className}`);
        btn.innerHTML = arrayKeys[i][j][state.lang][state.caps ? 'caseUp' : 'caseDown'];
      }
    }
  }

  if (key === 'CapsLock') {
    for (let i = 0; i < arrayKeys.length; i += 1) {
      for (let j = 0; j < arrayKeys[i].length; j += 1) {
        if (state.lang === 'eng') {
          if (engAlphabet.includes(arrayKeys[i][j].className)) {
            const btn = BODY.querySelector(`.${arrayKeys[i][j].className}`);
            btn.innerHTML = arrayKeys[i][j][state.lang][state.caps ? 'caseUp' : 'caseDown'];
          }
        } else if (rusAlphabet.includes(arrayKeys[i][j].className)) {
          const btn = BODY.querySelector(`.${arrayKeys[i][j].className}`);
          btn.innerHTML = arrayKeys[i][j][state.lang][state.caps ? 'caseUp' : 'caseDown'];
        }
      }
    }
  }

  if (key === 'ShiftLeft' || key === 'ShiftRight') {
    if (state.caps === false) {
      for (let i = 0; i < arrayKeys.length; i += 1) {
        for (let j = 0; j < arrayKeys[i].length; j += 1) {
          const btn = BODY.querySelector(`.${arrayKeys[i][j].className}`);
          btn.innerHTML = arrayKeys[i][j][state.lang][state.shift ? 'caseUp' : 'caseDown'];
        }
      }
    } else {
      for (let i = 0; i < arrayKeys.length; i += 1) {
        for (let j = 0; j < arrayKeys[i].length; j += 1) {
          if (state.lang === 'eng' && !engAlphabet.includes(arrayKeys[i][j].className)) {
            const btn = BODY.querySelector(`.${arrayKeys[i][j].className}`);
            btn.innerHTML = arrayKeys[i][j][state.lang][state.shift ? 'caseUp' : 'caseDown'];
          } else if (!rusAlphabet.includes(arrayKeys[i][j].className)) {
            const btn = BODY.querySelector(`.${arrayKeys[i][j].className}`);
            btn.innerHTML = arrayKeys[i][j][state.lang][state.shift ? 'caseUp' : 'caseDown'];
          }
        }
      }
    }
  }
}

const addTextInTextarea = (e) => {
  TEXTAREA.value += e;
};

const verificationOnSpecialKey = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (specialKey.includes(arr[i])) {
      return true;
    }
  }
  return false;
};

const SpecialButtonFunc = (arr) => {
  if (arr.includes('Space')) {
    TEXTAREA.value += ' ';
  }

  if (arr.includes('Backspace')) {
    TEXTAREA.value = TEXTAREA.value.slice(0, -1);
  }

  if (arr.includes('CapsLock')) {
    state.caps = !state.caps;
    renderKeys('CapsLock');
  }

  if (arr.includes('Tab')) {
    TEXTAREA.value += '\t';
  }

  if (arr.includes('Enter')) {
    TEXTAREA.value += '\n';
  }
};

const clickVirtualButton = (e) => {
  if (!verificationOnSpecialKey(e.target.classList) && e.target !== e.currentTarget) {
    addTextInTextarea(e.target.innerHTML.trim());
  } else if (verificationOnSpecialKey(e.target.classList)) {
    SpecialButtonFunc(Array.from(e.target.classList));
  }
};

KEYBOARD.addEventListener('click', clickVirtualButton);

const mouseDownSpecialVirtualButton = (e) => {
  if (Array.from(e.target.classList).includes('ShiftLeft') || Array.from(e.target.classList).includes('ShiftRight')) {
    state.shift = true;
    renderKeys('ShiftLeft');
  }
};

KEYBOARD.addEventListener('mousedown', mouseDownSpecialVirtualButton);

const mouseUpSpecialVirtualButton = (e) => {
  if (Array.from(e.target.classList).includes('ShiftLeft') || Array.from(e.target.classList).includes('ShiftRight')) {
    state.shift = false;
    renderKeys('ShiftLeft');
  }
};

KEYBOARD.addEventListener('mouseup', mouseUpSpecialVirtualButton);

const keydownRealKeyboard = (e) => {
  const down = BODY.querySelector(`.${e.code}`);
  down.classList.add('key__down');

  const arr = [];
  const { code } = e;
  arr.push(code);

  if (!verificationOnSpecialKey(arr)) {
    addTextInTextarea(down.innerHTML.trim());
  } else if (verificationOnSpecialKey(arr)) {
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      state.shift = true;
      renderKeys('ShiftLeft');
    } else {
      SpecialButtonFunc(arr);
    }
  }
  e.preventDefault();
};


const keyupRealKeyboard = (e) => {
  const up = BODY.querySelector(`.${e.code}`);
  up.classList.remove('key__down');

  const arr = [];
  const { code } = e;
  arr.push(code);

  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    state.shift = false;
    renderKeys('ShiftLeft');
  }
};

BODY.addEventListener('keyup', keyupRealKeyboard);
BODY.addEventListener('keydown', keydownRealKeyboard);

const keyPressed = new Set();

const keydownLang = (e) => {
  keyPressed.add(e.code);
  if (keyPressed.has('ControlLeft') && keyPressed.has('AltLeft')) {
    state.lang = (state.lang === 'eng' ? 'rus' : 'eng');
    renderKeys('changeLang');
  }
};

const keyupLang = (e) => {
  keyPressed.delete(e.code);
};

BODY.addEventListener('keyup', keyupLang);
BODY.addEventListener('keydown', keydownLang);
