(function () {
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList = $('.siteList');
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastli = $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList.find(`li.last`);
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$x = localStorage.getItem('x');
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject = JSON.parse($16b5ad875ae907e2f7f79e7b8fe116cc$var$x);
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap = $16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject || [{
    logo: 'E',
    logoType: 'text',
    url: 'https://elearning.ufl.edu/'
  }, {
    logo: 'G',
    logoType: 'text',
    url: 'https://github.com/'
  }, {
    logo: 'S',
    logoType: 'text',
    url: 'https://www.sciencedirect.com/'
  }, {
    logo: 'W',
    logoType: 'text',
    url: 'http://www.webofknowledge.com/'
  }, {
    logo: 'T',
    logoType: 'text',
    url: 'https://translate.google.cn/'
  }, {
    logo: 'B',
    logoType: 'text',
    url: 'https://www.bilibili.com'
  }];
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl = url => {
    return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, '');
  };
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$render = () => {
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList.find(`li:not(.last)`).remove();
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.forEach((node, index) => {
      const $li = $(`
            <li>
                <div class="site">
                  <div class="logo">${node.logo}</div>
                  <div class="link">${$16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl(node.url)}</div>
                  <div class="close">
                    <svg class="icon">
                        <use xlink:href="#icon-close"></use>
                    </svg>
                  </div>
                </div>
            </li>`).insertBefore($16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastli);
      $li.on('click', () => {
        window.open(node.url);
      });
      $li.on('click', '.close', e => {
        e.stopPropagation();
        // ????????????
        $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.splice(index, 1);
        $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
      });
    });
  };
  $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
  $('.addButton').on('click', () => {
    let url = window.prompt(`??????????????????????????????`);
    if (url.indexOf(`http`) !== 0) {
      url = 'https://' + url;
    }
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.push({
      logo: $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl(url)[0].toUpperCase(),
      logoType: `text`,
      url: url
    });
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
  });
  window.onbeforeunload = () => {
    const string = JSON.stringify($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap);
    window.localStorage.setItem('x', string);
  };
})();

//# sourceMappingURL=index.de98438c.js.map
