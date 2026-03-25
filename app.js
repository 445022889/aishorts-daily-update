document.querySelectorAll('[data-copy-url]').forEach((button) => {
  button.addEventListener('click', async () => {
    const url = button.getAttribute('data-copy-url');
    try {
      await navigator.clipboard.writeText(url);
      button.textContent = '已复制链接';
      setTimeout(() => { button.textContent = '复制详情页链接'; }, 1200);
    } catch (_) {
      button.textContent = '复制失败';
      setTimeout(() => { button.textContent = '复制详情页链接'; }, 1200);
    }
  });
});
