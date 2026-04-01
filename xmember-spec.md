# X-member v2 — Standalone Presentation Screen

## Context
- Web app is used by Sale to PRESENT DIRECTLY to PHHS (parents watch the screen)
- X-member = a full-screen presentation mode, NOT an overlay on existing roadmap
- PHHS sees beautiful, convincing slides; Sale clicks through and talks
- Focus: Why learn tech early + Why Bảo trợ đa ngành

## Architecture
- When Sale clicks "X-member" button in sidebar → hide the entire roadmap UI → show full-screen X-member presentation
- Navigation: bottom bar with prev/next + slide indicator dots
- "Thoát" button to return to normal roadmap view

## Design
- Full-screen, white background, MindX red accents (#E31F26, #7D0005)
- Font: Be Vietnam Pro (already loaded)
- Each slide is a single viewport-height section
- Clean, modern, presentation-style (like Apple keynote)
- Large typography for key messages (parents sitting across desk can read)
- Subtle animations on slide transitions (fade + slide)

## Slides (12 slides total)

### Slide 1: Welcome
- MindX logo centered
- "Chào mừng đến với MindX Technology School"
- Tagline: "Kiến tạo thế hệ công dân số"
- Simple, clean, elegant

### Slide 2: Thế giới đang thay đổi
- Title: "Thế giới con sẽ sống khác hoàn toàn"
- 3 stats in big bold numbers:
  - "65%" — "nghề nghiệp năm 2035 hiện chưa tồn tại" (World Economic Forum)
  - "85%" — "công việc tương lai cần kỹ năng số" (Dell Technologies)
  - "24 quốc gia" — "đã đưa lập trình vào chương trình tiểu học bắt buộc"
- Message: Con cần được chuẩn bị từ HÔM NAY

### Slide 3: Tại sao cần học công nghệ từ sớm?
- Title: "Tại sao cần bắt đầu từ sớm?"
- 4 columns with icons:
  1. Tư duy logic — "Lập trình rèn phân tích, phản biện — nền tảng mọi ngành"
  2. Sáng tạo — "Biến ý tưởng thành sản phẩm thật từ 8 tuổi"
  3. Giải quyết vấn đề — "Chia nhỏ, thử-sai-sửa — kỹ năng #1 thế kỷ 21"
  4. Tự tin & Kỷ luật — "Mỗi dự án hoàn thành = 1 bước trưởng thành"
- Bottom quote: "Nhật Bản, Úc, Phần Lan, Singapore đã đưa lập trình vào bắt buộc từ tiểu học"

### Slide 4: Lộ trình MindX
- Title: "Lộ trình phát triển tại MindX"
- Visual staircase (simplified, built-in — NOT using roadmap):
  - Năm 1: Scratch (8+) → Tư duy thuật toán
  - Năm 2: Game Maker (9+) → Thiết kế hệ thống
  - Năm 3: App Producer (11+) → Lập trình Python + Thực tập 60h
  - Năm 4: Web Creator (12+) → JavaScript thực chiến
  - Năm 5: Computer Science (14+) → Giải thuật & AI
- Each step: year label + course name + one key outcome
- Animated staircase effect

### Slide 5: Hệ giá trị xuyên suốt
- Title: "3 hệ giá trị xuyên suốt mọi khóa học"
- 3 large cards:
  1. TƯ DUY — "Phân tích → Phản biện → Hệ thống → Chiến lược. Từ tư duy cơ bản đến tư duy CEO."
  2. KỸ NĂNG — "Lập trình → Thiết kế → Quản lý dự án → Thuyết trình. Từ kéo thả đến code chuyên nghiệp."
  3. KIẾN THỨC — "Scratch → Python → JavaScript → AI → Business. Từ nền tảng đến chuyên sâu."
- Visual: progression arrows showing growth

### Slide 6: Điểm rẽ — Tại sao Bảo trợ đa ngành?
- Title: "Sau 5 năm: Con sẵn sàng cho điểm rẽ lớn"
- Illustration concept: fork in the road
- Left: "Bảo trợ đa ngành" (highlighted, primary)
- Right: "Bảo trợ du học" (secondary mention)
- Key message: "Con không phải chọn ngành năm 18 tuổi rồi hối hận. Con được THỬ rồi mới CHỌN."

### Slide 7: Tại sao Bảo trợ đa ngành?
- Title: "Tại sao cần Bảo trợ đa ngành?"
- Problem statement (big, bold): "67% sinh viên Việt Nam làm trái ngành sau tốt nghiệp"
- 3 reasons:
  1. "Chọn ngành quá sớm" — Năm 18 tuổi, hầu hết chưa biết mình muốn gì
  2. "Thiếu trải nghiệm thực tế" — Lý thuyết 4 năm, chạm doanh nghiệp 0 giờ
  3. "Thế giới thay đổi nhanh" — Ngành hot hôm nay có thể biến mất sau 5 năm
- Solution: "Mô hình T-shaped: SÂU 1 ngành + RỘNG nhiều lĩnh vực"

### Slide 8: Business Foundation
- Title: "Business Foundation — Nền tảng kinh doanh toàn diện"
- 3 levels stacked:
  - Lv1: MKT & Communication (14 buổi)
  - Lv2: Sale & Operation (14 buổi)  
  - Lv3: Finance & Accounting (14 buổi)
- Key message: "Dù con làm ngành gì — lập trình, phân tích, thiết kế — HIỂU cách doanh nghiệp vận hành = thăng tiến nhanh hơn rất nhiều."
- Visual: Business icon illustrations

### Slide 9: 4 Domain chuyên sâu
- Title: "Chọn 1 trong 4 hướng chuyên sâu"
- 4 cards in grid:
  1. Tech (Web/Data/UIUX + AI4Tech) — icon: code brackets
  2. Marketing (MKT Fullstack + AI4MKT) — icon: megaphone
  3. Finance (Data/ITBA + AI4Finance) — icon: chart
  4. Business & Ops (ITBA/Data + AI4B&O) — icon: building
- "Tất cả đều tích hợp AI — con sẵn sàng cho kỷ nguyên AI"
- "Không cần chọn ngay — sau BF con sẽ hiểu mình phù hợp hướng nào"

### Slide 10: Internship X — Cam kết đầu ra
- Title: "Internship X — Cam kết việc làm"
- Big bold number: "30 giờ thực tập tại doanh nghiệp đối tác"
- 4 checkmarks:
  - ✓ Làm việc dự án thực tế
  - ✓ Mentor hướng dẫn 1-1
  - ✓ Portfolio chuyên nghiệp
  - ✓ Cam kết giới thiệu việc làm
- Bold statement: "Con không chỉ có bằng cấp — con có SẢN PHẨM THẬT, KINH NGHIỆM THẬT, CƠ HỘI VIỆC LÀM THẬT."

### Slide 11: Tổng kết giá trị
- Title: "Tóm lại, con nhận được gì?"
- Timeline visual (horizontal):
  - 5 năm nền tảng công nghệ (Scratch → CS)
  - Business Foundation (MKT + Sale + Finance)
  - Chuyên sâu 1 ngành (12 tháng + AI)
  - Thực tập + Việc làm
- 4 big value propositions:
  1. "Nền tảng vững" — Công nghệ + Kinh doanh
  2. "Được thử" — 3 mảng trước khi chọn chuyên sâu
  3. "Có nghề" — Portfolio + Thực tập + Job guarantee
  4. "Sẵn sàng" — Cho đại học, cho nghề nghiệp, cho AI

### Slide 12: CTA — Bước tiếp theo
- Title: "Bước tiếp theo"
- "Cho con trải nghiệm 1 buổi học thử MIỄN PHÍ"
- "Con sẽ tự tay làm 1 dự án — anh/chị sẽ thấy cách MindX dạy"
- Big CTA visual: "Đặt lịch Trial ngay hôm nay"
- MindX logo + contact info placeholder

## Technical Notes
- Pure JS, no frameworks
- Full-screen mode: hide sidebar, topbar, roadmap
- Slide transitions: CSS transform + opacity
- Keyboard support: Left/Right arrows, Escape to exit
- Touch swipe support for tablet
- Progress dots at bottom
- All content hardcoded (not editable) — this is a sales tool
- MindX branding: #E31F26 primary, #7D0005 dark, white backgrounds
- Large readable fonts: titles 2.5-3rem, body 1.25rem minimum
