const sleep = time => new Promise(resolve => setTimeout(resolve, time || 1e3))

document.addEventListener(`DOMContentLoaded`, async function() {
  await sleep()
  console.log(`加载完成`)
  window.main = await new Sys()
  window.native = main.native
  // 逻辑可以是自动读取指定位置的 markdown 文件生成 html 保存到指定位置
  setInterval(async () => {
    await setText()
    await sleep()
    await getHtml()
  }, 1e3);
})

/**
 * 读取本地 markdown 文本并设置到 md 区域
 */
async function setText(path = `./readme.md`) {
  const [, res] = await native.string.load(path)
  console.log(`todo`, this.name, res)
}


/**
 * 读取渲染好的 html 保存到文件
 */
async function getHtml() {
  const html = `${Date.now()}`
  await native.string.save(`./out.html`, html)
}
