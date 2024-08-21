document.addEventListener("DOMContentLoaded", function() {
    // Hiệu ứng mờ dần khi cuộn trang
    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");
        header.style.opacity = 1 - window.scrollY / 600;
    });

    // Hiệu ứng hover trên biểu tượng mạng xã hội
    const socialLinks = document.querySelectorAll(".social-links a");
    socialLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            link.style.transform = "scale(1.2)";
            link.style.transition = "transform 0.3s ease";
        });

        link.addEventListener("mouseout", function() {
            link.style.transform = "scale(1)";
        });
    });

    // Hiệu ứng phóng to ảnh dự án khi di chuột qua
    const projectItems = document.querySelectorAll(".project-item");
    projectItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            item.style.transform = "scale(1.05)";
            item.style.transition = "transform 0.3s ease";
        });

        item.addEventListener("mouseout", function() {
            item.style.transform = "scale(1)";
        });
    });
});
