const $siteList = $('.siteList')
const $lastli = $siteList.find(`li.last`)
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)
const hashMap = xObject || [
    {logo: 'E', logoType:'text', url: 'https://elearning.ufl.edu/' },
    {logo: 'G', logoType: 'text', url: 'https://github.com/' },
    {logo: 'S', logoType: 'text', url: 'https://www.sciencedirect.com/' },
    {logo: 'W', logoType: 'text', url: 'http://www.webofknowledge.com/' },
    {logo: 'T', logoType: 'text', url: 'https://translate.google.cn/' },
    {logo: 'B', logoType: 'text', url: 'https://www.bilibili.com' },
]

const simplifyUrl = (url) => {
    return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, '')
}

const render = () => {
    $siteList.find(`li:not(.last)`).remove()
    hashMap.forEach((node, index) => {
        const $li = $(`
            <li>
                <div class="site">
                  <div class="logo">${node.logo}</div>
                  <div class="link">${simplifyUrl(node.url)}</div>
                  <div class="close">
                    <svg class="icon">
                        <use xlink:href="#icon-close"></use>
                    </svg>
                  </div>
                </div>
            </li>`
        ).insertBefore($lastli)
        $li.on('click', () => {
            window.open(node.url)
        })
        $li.on('click', '.close', (e) => {
            e.stopPropagation()//阻止冒泡
            hashMap.splice(index, 1)
            render()
        })
    })
}

render()

$('.addButton').on('click', () => {
    let url = window.prompt(`请输入需要添加的网址`)
    if (url.indexOf(`http`) !== 0) {
        url = 'https://'+url
    }
    hashMap.push({ logo: simplifyUrl(url)[0].toUpperCase(), logoType: `text`, url: url })
    render()
})

window.onbeforeunload = () => {
    const string = JSON.stringify(hashMap)
    window.localStorage.setItem('x', string)
}