#import "@preview/modern-cv:0.9.0": *

#show: resume.with(
  author: (
    firstname: "Nguyễn Thế",
    lastname: "Chính",
    email: "nguyenthechinhk25@gmail.com",
    homepage: "https://portfolio.chinhnt.xyz",
    phone: "0566113369",
    github: "chinhnt113",
    address: "Hà Nội",
    positions: (
      "Lập trình viên Fullstack",
    ),
  ),
  keywords: ("Kỹ sư", "Kiến trúc sư"),
  description: "CV đầy đủ của Chính",
  profile-picture: image("profile_ava_1_1.png"),
  date: datetime.today().display(),
  language: "vi",
  colored-headers: true,
  show-footer: false,
  show-address-icon: true,
  paper-size: "us-letter",
)

= Giới Thiệu

#resume-item[
  Lập trình viên Fullstack với ~4 năm kinh nghiệm xây dựng ứng dụng web có khả năng mở rộng.
  Thành thạo Java Spring Boot ở backend và ReactJS/TypeScript ở frontend.
  Có kinh nghiệm với hệ thống nhắn tin (Kafka, RabbitMQ) và giao tiếp thời gian thực (WebSocket).
  Tích cực sử dụng các công cụ AI coding như Claude Code và Cursor để nâng cao năng suất.
]

= Kinh Nghiệm

#resume-entry(
  title: "Lập trình viên Fullstack — Sapo GO",
  location: "Công ty Cổ phần Công nghệ Sapo",
  date: "07/2022 - Hiện tại",
)

#resume-item[
  - Dẫn dắt migration frontend từ đầu đến cuối: Node 14 → 18, React 16 → 18 (cải thiện hiệu suất build ~40%,
    đưa dự án về đúng phiên bản LTS hiện tại).
  - Xây dựng tính năng Kênh Mạng Xã Hội cho người bán trên Facebook, Instagram và Zalo — bao gồm
    chat trực tiếp, đồng bộ tồn kho, kịch bản nhắn tin tự động và bảng điều khiển phân tích
    (Kafka + WebSocket để cập nhật thời gian thực).
  - Phát triển và duy trì các API backend bằng Java Spring Boot; quản lý frontend bằng ReactJS và Redux state.
  - Tích hợp Sentry để giám sát lỗi thời gian thực và theo dõi hiệu suất — giúp xác định nguyên nhân gốc nhanh hơn và rút ngắn thời gian xử lý bug.
]

#resume-entry(
  title: "Lập trình viên Fullstack — Sapo Marketplace",
  location: "Công ty Cổ phần Công nghệ Sapo",
  date: "02/2026 - Hiện tại",
)

#resume-item[
  - Phát triển tính năng Kênh Marketplace giúp người bán trên Shopee, TikTok Shop và Lazada
    quản lý đơn hàng và đồng bộ dữ liệu sản phẩm từ một nền tảng duy nhất.
  - Xây dựng tiện ích mở rộng trình duyệt cho TikTok Seller để thu thập số điện thoại và địa chỉ khách hàng phục vụ các chiến dịch marketing có mục tiêu.
]

#resume-entry(
  title: "Lập trình viên Frontend — Sapo Social Mobile",
  location: "Công ty Cổ phần Công nghệ Sapo",
  date: "01/2025 - 06/2025",
)

#resume-item[
  - Xây dựng giao diện ứng dụng di động bằng React Native và tích hợp REST API cho Sapo Social Channel,
    phục vụ hàng nghìn người bán trên mạng xã hội vận hành ngay trên thiết bị di động.
]

#resume-entry(
  title: "Lập trình viên Frontend — Facebook Shopping",
  location: "Công ty Cổ phần Công nghệ Sapo",
  date: "10/2024 - 02/2025",
)

#resume-item[
  - Phát triển giao diện Facebook Catalog và Facebook Live Shopping bằng TypeScript,
    được tích hợp vào hệ sinh thái nền tảng Sapo.
]

= Dự Án

#resume-entry(
  title: "Portfolio Cá nhân",
  location: "Dự án cá nhân",
  date: "03/2026 - Hiện tại",
)

#resume-item[
  - Xây dựng và ship portfolio production-ready sử dụng workflow tăng cường AI —
    điều phối BMAD agents + Claude Code xuyên suốt SDLC (spec, implementation, tests, CI/CD).
  - Backend: Spring Boot (GCP Cloud Run) + Frontend: React/TypeScript (Vercel);
    WebSocket cho giao diện thời gian thực; PostgreSQL để lưu trữ dữ liệu.
  - 222 test pass; CI/CD pipeline live ngày thứ 13.
]

#resume-entry(
  title: "Hệ thống Đặt lịch Bệnh viện (Đồ án Tốt nghiệp)",
  location: "Đại học Bách Khoa Hà Nội",
  date: "2022 - 2023",
)

#resume-item[
  - Hệ thống đặt lịch và thông tin y tế toàn diện cho khách hàng và quản trị viên.
  - Triển khai cân bằng tải bằng nginx cho môi trường production.
  - Công nghệ: ReactJS, NodeJS, Python, MongoDB, nginx.
]

= Kỹ Năng

#resume-skill-grid(
  categories-with-values: (
    "Ngôn ngữ lập trình": ("Java", "TypeScript", "JavaScript", "Python"),
    "Frontend": ("ReactJS", "React Native", "Redux", "WebSocket"),
    "Backend": ("Spring Boot", "NodeJS", "REST APIs"),
    "Cơ sở dữ liệu": ("MySQL", "MongoDB"),
    "DevOps": ("Docker", "nginx", "CI/CD (GitHub Actions)"),
    "Hệ thống nhắn tin": ("Kafka", "RabbitMQ"),
    "Công cụ AI": ("Claude Code", "Cursor"),
  ),
)

= Học Vấn

#resume-entry(
  title: "Đại học Bách Khoa Hà Nội",
  location: "Hà Nội",
  date: "2018 - 2023",
  description: "Chương trình Global ICT — Kĩ sư Kỹ thuật Công nghệ Thông tin",
)

#resume-item[
  - Chương trình tập trung vào làm việc bằng tiếng Anh và kỹ năng kỹ thuật toàn cầu.
]

= Chứng Chỉ

#resume-entry(
  title: "TOEIC Listening & Reading — Điểm: 930",
  location: "",
  date: "02/2023",
)
