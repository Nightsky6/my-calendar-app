// 별 생성
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = star.style.height = (Math.random() * 3 + 1) + 'px';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// 스크롤 애니메이션
function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// 부드러운 스크롤
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 헤더 스크롤 효과
function handleHeaderScroll() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 100) {
        header.style.background = 'rgba(12, 20, 69, 0.98)';
    } else {
        header.style.background = 'rgba(12, 20, 69, 0.95)';
    }
}

// 반응형 달 크기 조정
function adjustMoonSize() {
    const moon = document.querySelector('.moon');
    if (moon) {
        if (window.innerWidth < 768) {
            moon.style.width = '60px';
            moon.style.height = '60px';
            moon.style.top = '8%';
            moon.style.right = '10%';
        } else {
            moon.style.width = '80px';
            moon.style.height = '80px';
            moon.style.top = '10%';
            moon.style.right = '15%';
        }
    }
}

// 이벤트 리스너
window.addEventListener('scroll', handleScroll);
window.addEventListener('scroll', handleHeaderScroll);
window.addEventListener('resize', adjustMoonSize);
window.addEventListener('load', () => {
    createStars();
    handleScroll();
    smoothScroll();
    adjustMoonSize();
});

// CTA 버튼 클릭 이벤트
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            // 버튼 클릭 효과
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
});