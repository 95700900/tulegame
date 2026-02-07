document.addEventListener('DOMContentLoaded', () => {
    // 移动端导航切换
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // 点击链接后自动关闭移动端菜单
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // 滚动时导航栏背景效果
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
            navbar.style.padding = '1rem 0';
        }
    });
});
