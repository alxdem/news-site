chatInit();

function chatInit() {
  const body = document.body;

  setTimeout(function() {
    const webComponent = document.createElement('APP-CHAT');
    body.appendChild(webComponent);
    customElements.define('app-chat', AppChat);
  }, 100);
}

class AppChat extends HTMLElement {
  constructor() {
    super();

    const mainColor = '#136';
    const mainColorLighter = '#358';
    const secondColor = '#def';
    const easing = 'ease-out';
    const timing = '0.2s';

    const shadow = this.attachShadow({mode: 'open'});
    const wrapper = document.createElement('div');
    const btn = document.createElement('button');
    const inner = document.createElement('div');
    const style = document.createElement('style');

    let isActive = false;

    const btnIconsHtml = '<svg class="btn-icon btn-icon_inactive" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="60px" height="60px"><path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"/></svg>' +
      '<svg class="btn-icon btn-icon_active" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 47" width="47px" height="47px" xml:space="preserve"><path d="M28.228 23.986 47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"/></svg>';

    const socialsData = [
      {
        href: '#4',
        title: 'Facebook',
        icon: '<svg class="link-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="60px" height="60px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"/></svg>'
      },
      {
        href: 'https://github.com/alxdem',
        title: 'Github',
        icon: '<svg class="link-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="60px" height="60px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>'
      },
      {
        href: 'https://www.linkedin.com/in/demalx/',
        title: 'LinkedIn',
        icon: '<svg class="link-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="60px" height="60px">    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"/></svg>'
      }
    ];

    btn.innerHTML = btnIconsHtml;
    btn.addEventListener('click', btnClick);

    wrapper.setAttribute('class', 'wrapper');
    btn.setAttribute('class', 'btn');
    btn.setAttribute('type', 'button');
    inner.setAttribute('class', 'inner');

    socialsData.forEach(item => {
      const link = document.createElement('a');
      link.setAttribute('class', 'link');
      link.setAttribute('href', item.href);
      link.setAttribute('title', item.title);
      link.setAttribute('target', '_blank');
      link.innerHTML = item.icon;

      inner.appendChild(link);
    });

    wrapper.appendChild(inner);
    wrapper.appendChild(btn);

    function btnClick() {
      if (!wrapper) return;

      if (isActive) {
        wrapper.classList.remove('wrapper_active');
        isActive = false;
      } else {
        wrapper.classList.add('wrapper_active');
        isActive = true;
      }
    }

    style.textContent = `
      .wrapper {
        position: fixed;
        right: 15px;
        bottom: 15px;
      }

      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: ${mainColor};
        cursor: pointer;
        border: 0;
        color: #fff;
        overflow: hidden;
        position: relative;
        z-index: 10;
        transform: rotateX(0);
        transition: transform ${easing} ${timing};
      }

      .btn:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 0;
        left: 0;
        bottom: 0;
        background-color: ${mainColorLighter};
        z-index: 1;
        transition: height ${easing} ${timing};
      }

      .btn:hover:after {
        height: 100%;
      }

      .wrapper_active .btn {
        transform: rotateX(180deg);
      }

      .btn-icon {
        display: block;
        width: 24px;
        height: 24px;
        pointer-events: none;
        position: relative;
        z-index: 5;
      }

      .btn-icon_active {
        width: 16px;
        height: 16px;
        display: none;
      }

      .wrapper_active .btn-icon_inactive {
        display: none;
      }

      .wrapper_active .btn-icon_active {
        display: block;
      }

      .inner{
        position: absolute;
        bottom: 50px;
        left: 0;
        z-index: 5;
        overflow: hidden;
        background-color: #fff;
        border-radius: 26px;
        box-shadow: 1px 1px 11px -5px ${mainColor};
        transform: translateY(170%);
        transition: transform ${easing} ${timing};
      }

      .wrapper_active .inner {
        transform: translateY(0);
      }

      .link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        text-decoration: none;
        color: ${mainColor};
      }

      .link-icon {
        display: block;
        width: 26px;
        height: 26px;
        pointer-events: none;
      }

      .link:hover {
        background-color: ${secondColor};
        transition: background-color ${easing} ${timing};
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}
