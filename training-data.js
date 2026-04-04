/* ============================================================
   MindX Training Module — All Training Content Data
   Version: 3.0 | April 2026 — Full Content Upgrade
   K12 Sale (16 bài) + K18 Sale (20 bài) + CS K12 (21 bài)
   ============================================================ */

const TRAINING_DATA = {

  /* --------------------------------------------------------
     K12 SALE ONBOARD 5-DAY PROGRAM (16 bài)
     -------------------------------------------------------- */
  onboard: {
  title: "Lộ trình Onboard Sale K12 (5 ngày)",
  description: "Chương trình đào tạo chuyên sâu dành cho TVTS K12 mới. 5 ngày — 16 bài — từ tư duy đến thực chiến. Hoàn thành chương trình để tự tin tư vấn Coding, Robotics và Art cho phụ huynh có con từ 4–18 tuổi.",
  days: [

    /* ==================== DAY 1: WHY & MINDSET ==================== */
    {
      id: "day1",
      day: 1,
      title: "WHY & MINDSET",
      subtitle: "Tại sao & Tư duy nền tảng",
      icon: "💡",
      color: "#E53E3E",
      sections: [

        /* ---------- Bài 1: Tại sao PHHS đầu tư ---------- */
        {
          id: "day1_s1",
          title: "Tại sao PHHS đầu tư cho con học STEM/Coding/Art?",
          icon: "🎯",
          content: `<h3>5 Nỗi đau lớn của Phụ huynh Việt Nam 2025–2026</h3>
<p>Trước khi bán sản phẩm, TVTS cần <strong>hiểu sâu tâm lý phụ huynh</strong>. Mỗi phụ huynh đến với MindX đều đang mang một nỗi lo — công việc của bạn là nhận ra nỗi lo đó và kết nối đúng với giải pháp MindX.</p>
<p>Dưới đây là 5 nỗi đau phổ biến nhất, kèm dữ liệu thực tế và script tư vấn bạn có thể dùng ngay:</p>

<div class="insight-card">
  <div class="insight-number">1</div>
  <div class="insight-body">
    <h4>😰 Nỗi đau: Lo con nghiện game, lệ thuộc màn hình</h4>
    <p><strong>Thực trạng:</strong> Theo khảo sát Ipsos Vietnam 2025, <strong>72% phụ huynh</strong> có con từ 6–15 tuổi lo lắng về thời gian con dùng thiết bị điện tử. Trẻ Việt trung bình dành <strong>4–5 giờ/ngày</strong> cho game và mạng xã hội — tăng 40% so với năm 2020 (sau đại dịch). Nhiều phụ huynh đã cấm điện thoại nhưng thất bại, dẫn đến mâu thuẫn gia đình.</p>
    <p><strong>Giải pháp MindX:</strong> Không cấm — <em>chuyển hướng</em>. Khi con học Coding tại MindX, con chuyển từ <em>"người chơi game"</em> thành <em>"người tạo game"</em>. Hiểu cơ chế hoạt động của game giúp con tự giảm sức hấp dẫn của game thụ động. Đây là cách tiếp cận được nhiều chuyên gia tâm lý trẻ em khuyến nghị.</p>
    <p><strong>Sản phẩm phù hợp:</strong> Game Creator (11+), Scratch (8+)</p>
    <div class="script-box">
      <strong>Script mẫu:</strong><br>
      <em>"Anh/chị ơi, mình hiểu vì sao anh/chị lo — con mê game đến mức quên ăn quên học thật sự rất stress. Nhưng có một cách tiếp cận thú vị hơn là cấm: khi con học làm game tại MindX, con sẽ hiểu rằng game chỉ là sản phẩm của code — và bản thân con hoàn toàn có thể tạo ra game của riêng mình. Nhiều bạn học viên sau 3 tháng thậm chí không còn mê game người khác làm nữa vì bận làm game của mình rồi."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">2</div>
  <div class="insight-body">
    <h4>📊 Nỗi đau: Sợ con tụt hậu, thua bạn bè đồng trang lứa</h4>
    <p><strong>Thực trạng:</strong> Nghiên cứu World Bank về hành vi đầu tư giáo dục tại Việt Nam cho thấy <strong>competition externality</strong> (sợ thua người khác) là động lực mua khóa học mạnh hơn mong muốn con giỏi. <strong>24% chi tiêu hộ gia đình</strong> Việt Nam dành cho giáo dục — tỷ lệ cao nhất Đông Nam Á. Phụ huynh thấy "bạn cùng lớp con đã học Coding" → lập tức muốn cho con học ngay.</p>
    <p><strong>Giải pháp MindX:</strong> MindX đã có <strong>hơn 100,000 học viên K12</strong> từ năm 2015 đến nay. Theo WEF 2025, <strong>65% trẻ em hiện tại sẽ làm những nghề chưa tồn tại</strong>. Bắt đầu sớm = lợi thế cạnh tranh dài hạn. Phụ huynh nào hành động trước, con họ có lợi thế trước.</p>
    <p><strong>Sản phẩm phù hợp:</strong> Tất cả lộ trình — ưu tiên theo độ tuổi con</p>
    <div class="script-box">
      <strong>Script mẫu:</strong><br>
      <em>"Theo thống kê của chúng tôi, trung bình mỗi lớp tiểu học ở Hà Nội và TP.HCM đã có 3–5 bạn học Coding hoặc Robotics. Không phải để tạo áp lực cho anh/chị, nhưng nếu bây giờ con chưa bắt đầu, khoảng cách sẽ ngày càng rộng. Mình có thể tư vấn lộ trình phù hợp với độ tuổi và sở thích của con — hoàn toàn miễn phí."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">3</div>
  <div class="insight-body">
    <h4>💼 Nỗi đau: Lo tương lai nghề nghiệp của con không ổn định</h4>
    <p><strong>Thực trạng:</strong> Theo McKinsey Global Institute 2025, <strong>40–50% công việc truyền thống</strong> tại Việt Nam có nguy cơ bị tự động hóa đến 2030. Lương kỹ sư CNTT tại Việt Nam <strong>cao hơn 2.5–3 lần</strong> mức trung bình toàn quốc. Nhu cầu tuyển dụng nhân sự công nghệ tăng <strong>30%/năm</strong> trong khi nguồn cung chưa đáp ứng đủ.</p>
    <p><strong>Giải pháp MindX:</strong> Lộ trình 5 năm Coding hoặc 7 năm Art xây nền tảng vững chắc từ sớm. MindX cam kết <strong>bảo trợ việc làm</strong> cho học viên hoàn thành lộ trình — kết nối với 200+ đối tác doanh nghiệp. Senior Developer tại Việt Nam hiện nhận mức lương <strong>40–100 triệu/tháng</strong>.</p>
    <p><strong>Sản phẩm phù hợp:</strong> Coding (Web Developer, Computer Scientist), Art (Visual Communication, Motion & Video)</p>
    <div class="script-box">
      <strong>Script mẫu:</strong><br>
      <em>"Anh/chị quan tâm đến tương lai của con — điều đó rất đúng đắn. Mình muốn chia sẻ một số liệu: lương của một lập trình viên có 3–5 năm kinh nghiệm tại Việt Nam hiện là 30–60 triệu/tháng. Và MindX không chỉ dạy — mình cam kết bảo trợ việc làm cho học viên hoàn thành lộ trình. Nghĩa là con học xong, mình giúp con có việc."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">4</div>
  <div class="insight-body">
    <h4>🧠 Nỗi đau: Con thiếu tư duy logic, kém toán, không biết giải quyết vấn đề</h4>
    <p><strong>Thực trạng:</strong> Kết quả PISA 2022 cho thấy học sinh Việt Nam điểm Toán và Khoa học trên mức trung bình OECD, nhưng <strong>kỹ năng ứng dụng thực tế và tư duy phản biện</strong> còn thấp. Nhiều phụ huynh phản ánh con học giỏi nhưng không biết áp dụng, không biết tự giải quyết vấn đề khi không có đáp án mẫu.</p>
    <p><strong>Giải pháp MindX:</strong> Coding và Robotics là <em>"gym cho não"</em> — mỗi bài tập là một bài toán thực tế cần phân tích, chia nhỏ, thử nghiệm và điều chỉnh. Nghiên cứu từ MIT Media Lab cho thấy trẻ học lập trình <strong>cải thiện kỹ năng giải quyết vấn đề 30%</strong> và điểm Toán trung bình <strong>15–20%</strong> sau 12 tháng.</p>
    <p><strong>Sản phẩm phù hợp:</strong> Robotics (mọi độ tuổi), Scratch (8+), Game Creator (11+)</p>
    <div class="script-box">
      <strong>Script mẫu:</strong><br>
      <em>"Lập trình và Robotics giống như gym cho não vậy đó anh/chị. Mỗi buổi học, con phải tự đặt câu hỏi 'tại sao cái này không chạy được?' rồi tự tìm ra câu trả lời. Sau 6 tháng, nhiều phụ huynh phản hồi con không chỉ giỏi hơn ở trung tâm mà còn tự tin hơn khi làm bài tập về nhà ở trường."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">5</div>
  <div class="insight-body">
    <h4>🏫 Nỗi đau: Muốn con có portfolio/hồ sơ nổi bật cho tương lai</h4>
    <p><strong>Thực trạng:</strong> Theo khảo sát của Viện Nghiên cứu Giáo dục Việt Nam 2025, <strong>68% phụ huynh</strong> có con từ lớp 7 trở lên đang lo lắng về hồ sơ xét tuyển đại học. Các trường top trong nước và quốc tế ngày càng coi trọng <strong>hoạt động ngoại khóa, dự án thực tế và kỹ năng chuyên biệt</strong> hơn chỉ điểm số. 250,000 sinh viên Việt Nam du học mỗi năm — cạnh tranh ngày càng cao.</p>
    <p><strong>Giải pháp MindX:</strong> Học viên MindX ra trường với <strong>portfolio thật</strong>: game đã deploy, website đang chạy, portfolio Art chuyên nghiệp, chứng chỉ thi đấu Robotics quốc tế. Chương trình X-Global hỗ trợ trực tiếp hồ sơ du học CNTT và Art.</p>
    <p><strong>Sản phẩm phù hợp:</strong> Web Developer (14+), Computer Scientist (15+), Art Year 6–7, Robotics Year 3</p>
    <div class="script-box">
      <strong>Script mẫu:</strong><br>
      <em>"Anh/chị có biết không, học sinh MindX khi tốt nghiệp lộ trình Coding sẽ có một website thật đang chạy trên internet, GitHub profile với các dự án thật, và chứng chỉ từ các cuộc thi lập trình. Đây là thứ mà hội đồng tuyển sinh đại học và nhà tuyển dụng nhìn vào và hiểu ngay — không phải chỉ điểm số trên giấy."</em>
    </div>
  </div>
</div>

<h3>Bảng Mapping: Nỗi đau → Sản phẩm MindX phù hợp</h3>
<table class="compare-table">
  <thead>
    <tr>
      <th>Nỗi đau phụ huynh</th>
      <th>Độ tuổi con</th>
      <th>Sản phẩm ưu tiên</th>
      <th>Key message</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Con nghiện game, mê màn hình</td>
      <td>8–14</td>
      <td>Scratch, Game Creator</td>
      <td>"Từ người chơi → người tạo"</td>
    </tr>
    <tr>
      <td>Sợ con tụt hậu, thua bạn</td>
      <td>Mọi độ tuổi</td>
      <td>Tùy theo tuổi — bắt đầu ngay</td>
      <td>"Bắt đầu sớm = lợi thế dài hạn"</td>
    </tr>
    <tr>
      <td>Lo nghề nghiệp tương lai</td>
      <td>12–18</td>
      <td>Web Developer, Computer Scientist, Art Year 6–7</td>
      <td>"Cam kết bảo trợ việc làm"</td>
    </tr>
    <tr>
      <td>Con thiếu tư duy logic</td>
      <td>4–12</td>
      <td>Robotics, Scratch, Game Creator</td>
      <td>"Gym cho não — học bằng làm"</td>
    </tr>
    <tr>
      <td>Muốn hồ sơ nổi bật</td>
      <td>12–18</td>
      <td>Web Dev, CS, Art Year 6–7, Robotics Year 3</td>
      <td>"Portfolio thật, không phải bằng giấy"</td>
    </tr>
    <tr>
      <td>Con thích vẽ, lo "có thành nghề không"</td>
      <td>4–16</td>
      <td>Little Artist → Motion & Video</td>
      <td>"Designer lương 15–35 triệu/tháng"</td>
    </tr>
  </tbody>
</table>

<div class="key-takeaway">
  <strong>Key Takeaway:</strong> Đừng bao giờ giới thiệu sản phẩm trước khi hiểu nỗi đau. Hỏi trước: "Anh/chị lo nhất điều gì khi nghĩ đến tương lai của con?" — rồi mới kết nối với đúng giải pháp MindX.
</div>

<div class="practice-exercise">
  <strong>Bài tập thực hành:</strong> Viết ra 3 câu hỏi bạn có thể hỏi để xác định phụ huynh đang ở nhóm nỗi đau nào trong 5 nhóm trên. Chia sẻ với mentor của bạn vào cuối ngày.
</div>`,
          quiz: {
            id: "quiz_day1_s1",
            title: "Quiz: Tâm lý Phụ huynh K12",
            questions: [
              {
                q: "Theo khảo sát Ipsos Vietnam 2025, bao nhiêu % phụ huynh có con 6–15 tuổi lo lắng về thời gian con dùng thiết bị điện tử?",
                options: ["52%", "62%", "72%", "82%"],
                correct: 2,
                explanation: "72% phụ huynh Việt Nam lo lắng về vấn đề này — đây là nỗi đau số 1 và cũng là cửa vào tư vấn hiệu quả nhất cho sản phẩm Coding/Game Creator."
              },
              {
                q: "Khi phụ huynh lo con 'nghiện game', cách tiếp cận hiệu quả nhất của TVTS là gì?",
                options: ["Khuyên PH cấm hoàn toàn điện thoại", "Chuyển hướng từ người chơi sang người tạo game", "Nói với PH rằng game không có hại nếu chơi ít", "Giới thiệu ngay chương trình khuyến mãi"],
                correct: 1,
                explanation: "Chuyển hướng tích cực — biến đam mê game thành động lực học Coding — hiệu quả hơn nhiều so với cấm đoán. Đây cũng là thông điệp phù hợp với giá trị sản phẩm của MindX."
              },
              {
                q: "Theo WEF 2025, bao nhiêu % trẻ em hiện nay sẽ làm những nghề chưa tồn tại?",
                options: ["45%", "55%", "65%", "75%"],
                correct: 2,
                explanation: "65% — số liệu này từ World Economic Forum rất mạnh khi tư vấn về sự cần thiết của STEM. Dùng số liệu cụ thể tăng độ tin cậy."
              },
              {
                q: "Khi phụ huynh nói 'Con nhà tôi học giỏi toán rồi, cần gì học Coding?', TVTS nên phản hồi thế nào?",
                options: ["Đồng ý và giới thiệu sản phẩm Art thay thế", "Giải thích Coding không liên quan đến Toán", "Nhấn mạnh Coding phát triển kỹ năng ứng dụng thực tế mà Toán học thuần túy không dạy được", "Đề nghị PH thử lớp học miễn phí trước"],
                correct: 2,
                explanation: "Toán giỏi là nền tảng tốt, nhưng Coding phát triển tư duy giải quyết vấn đề thực tế, sáng tạo và kỹ năng số — những thứ điểm Toán không đo lường được."
              },
              {
                q: "Phụ huynh thuộc nhóm nào thường QUY HOẠCH dài hạn và muốn thấy lộ trình cụ thể từ đầu?",
                options: ["PH lo con nghiện game", "PH sợ con tụt hậu", "PH muốn hồ sơ du học nổi bật", "PH muốn con học vẽ vì thích"],
                correct: 2,
                explanation: "PH du học (Dream-driven) là nhóm quy hoạch dài hạn nhất — họ muốn thấy lộ trình rõ ràng, portfolio cụ thể và case study học viên thật. Cần chuẩn bị thông tin chi tiết hơn khi gặp nhóm này."
              }
            ]
          }
        },

        /* ---------- Bài 2: Tổng quan MindX ---------- */
        {
          id: "day1_s2",
          title: "Tổng quan MindX — Lịch sử, Sản phẩm & Điểm khác biệt",
          icon: "🏢",
          content: `<h3>Lịch sử MindX: Từ 20 học viên đến 100,000+ (2015–2026)</h3>
<p>Hiểu lịch sử MindX giúp TVTS kể câu chuyện thương hiệu một cách tự tin và thuyết phục. Đây không phải bài học thuộc — đây là nền tảng niềm tin của bạn khi tư vấn.</p>

<div class="insight-card">
  <div class="insight-number">📅</div>
  <div class="insight-body">
    <h4>Timeline MindX 2015 → 2026</h4>
    <table class="compare-table">
      <thead><tr><th>Năm</th><th>Cột mốc</th><th>Ý nghĩa</th></tr></thead>
      <tbody>
        <tr><td><strong>2015</strong></td><td>Thành lập với tên "Techkids" — 20 học viên đầu tiên tại Hà Nội</td><td>Khởi đầu từ đam mê giáo dục công nghệ cho trẻ em</td></tr>
        <tr><td><strong>2016–2017</strong></td><td>Đổi tên thành MindX Technology School. Mở rộng vào TP.HCM</td><td>Định vị thương hiệu "trường công nghệ" — không chỉ là trung tâm</td></tr>
        <tr><td><strong>2018</strong></td><td>Ra mắt lộ trình Coding 5 năm hoàn chỉnh. Đạt 5,000+ học viên</td><td>Chuyển từ khóa học ngắn hạn sang lộ trình dài hạn — đây là bước đột phá</td></tr>
        <tr><td><strong>2019</strong></td><td>Ra mắt Art & Design và Robotics. 15+ trung tâm toàn quốc</td><td>Mở rộng thành hệ sinh thái 3 track: Coding, Art, Robotics</td></tr>
        <tr><td><strong>2020–2021</strong></td><td>Online LMS trong đại dịch. Series A. 30,000+ học viên</td><td>Chứng minh khả năng adapt nhanh và scale</td></tr>
        <tr><td><strong>2022–2023</strong></td><td>30+ → 50+ trung tâm. Ra mắt Du học & Bảo trợ việc làm. 50,000+ HV</td><td>Mở rộng nhanh nhất trong lịch sử — tín hiệu thị trường xác nhận</td></tr>
        <tr><td><strong>2024</strong></td><td>Tích hợp AI vào giáo trình. Ra mắt X-Coding, X-Art, X-Global premium</td><td>Đi trước xu hướng AI trong giáo dục K12</td></tr>
        <tr><td><strong>2025–2026</strong></td><td><strong>50+ trung tâm, 100,000+ học viên, 200+ TVTS, 500+ giáo viên</strong></td><td>Số 1 Việt Nam về giáo dục công nghệ K12</td></tr>
      </tbody>
    </table>
  </div>
</div>

<h3>3 Track sản phẩm MindX K12</h3>

<div class="insight-card">
  <div class="insight-number">💻</div>
  <div class="insight-body">
    <h4>Track 1: Coding (5 năm) — Độ tuổi 8–18+</h4>
    <p>Lộ trình dài nhất và flagship của MindX. Từ lập trình kéo thả Scratch đến AI và Computer Science.</p>
    <ul>
      <li><strong>Năm 1 — Scratch (8+):</strong> Lập trình kéo thả MIT, tạo game đầu tiên</li>
      <li><strong>Năm 2 — Game Creator (11+):</strong> Python cơ bản, game 2D, deploy lên itch.io</li>
      <li><strong>Năm 3 — App Producer (11+):</strong> Mobile app, UI/UX, database cơ bản</li>
      <li><strong>Năm 4 — Web Developer (14+):</strong> Full-stack web, HTML/CSS/JS + Python backend</li>
      <li><strong>Năm 5 — Computer Scientist (15+):</strong> Thuật toán, AI/ML cơ bản, thi đấu quốc tế</li>
    </ul>
    <p><strong>Chương trình đặc biệt:</strong> AI4Learn, NextGen Coding, Internship 16+</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">🤖</div>
  <div class="insight-body">
    <h4>Track 2: Robotics (4 năm) — Độ tuổi 4–13+</h4>
    <p>Sản phẩm HANDS-ON — học bằng lắp ráp và lập trình robot thật. Kit quốc tế chuẩn thi đấu.</p>
    <ul>
      <li><strong>Năm 0 — Kỹ sư Robot nhí (4+):</strong> LEGO Spike Essential, robot động vật</li>
      <li><strong>Năm 1 — Nhập môn Robotics (6+):</strong> VEX GO, robot giao hàng, cửa thông minh</li>
      <li><strong>Năm 2 — Truy tìm bí ẩn (8+):</strong> VEX GO nâng cao, debug, thuyết trình</li>
      <li><strong>Năm 3 — Sáng tạo Robot (10+):</strong> VEX IQ, Python/C++, PID controller, thi đấu quốc tế</li>
    </ul>
    <p><strong>Điểm đặc biệt:</strong> Dùng kit chuẩn thi đấu VEX IQ Challenge — 30,000+ đội từ 80+ quốc gia</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">🎨</div>
  <div class="insight-body">
    <h4>Track 3: Art & Design (7 năm) — Độ tuổi 4–18+</h4>
    <p>Lộ trình Art dài nhất thị trường — từ bút chì đến Adobe Creative Suite và After Effects.</p>
    <ul>
      <li><strong>Năm 1 — Little Artist (4+):</strong> Tranh tay, kể chuyện bằng hình ảnh, iPad cơ bản</li>
      <li><strong>Năm 2 — Digital Art Foundations (7+):</strong> Procreate, character design, màu sắc</li>
      <li><strong>Năm 3 — Visual Thinking (9+):</strong> Infographic, editorial illustration, visual narrative</li>
      <li><strong>Năm 4 — Game Art (11+):</strong> Pixel art, sprite sheet, UI kit cho game</li>
      <li><strong>Năm 5 — Character & Mascot (12+):</strong> Brand character, mascot, style guide</li>
      <li><strong>Năm 6 — Visual Communication (13+):</strong> Adobe Illustrator/Photoshop/InDesign, brand identity</li>
      <li><strong>Năm 7 — Motion & Video (14+):</strong> Premiere Pro, After Effects, motion graphic</li>
    </ul>
    <p><strong>Chương trình đặc biệt:</strong> Cregen I & II (dự án thật), Internship, UX/UI chuyên sâu Năm 7</p>
  </div>
</div>

<h3>MindX vs Đối thủ — Điểm khác biệt cốt lõi</h3>
<table class="compare-table">
  <thead>
    <tr>
      <th>Tiêu chí</th>
      <th>MindX</th>
      <th>Teky</th>
      <th>Logicbase</th>
      <th>FUNiX Kids</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Lộ trình dài hạn</strong></td>
      <td>✅ 5–7 năm, có kết nối rõ từng năm</td>
      <td>⚠️ Có nhưng ít liên kết</td>
      <td>❌ Chủ yếu khóa ngắn hạn</td>
      <td>⚠️ Online là chính</td>
    </tr>
    <tr>
      <td><strong>3 Track đa dạng</strong></td>
      <td>✅ Coding + Robotics + Art</td>
      <td>⚠️ Coding là chính</td>
      <td>⚠️ Coding và Robotics</td>
      <td>❌ Chỉ Coding</td>
    </tr>
    <tr>
      <td><strong>Kit quốc tế (Robotics)</strong></td>
      <td>✅ LEGO Spike + VEX GO + VEX IQ</td>
      <td>⚠️ Một số kit nội địa</td>
      <td>✅ Có VEX</td>
      <td>❌ Không có Robotics</td>
    </tr>
    <tr>
      <td><strong>Bảo trợ việc làm / Du học</strong></td>
      <td>✅ Cam kết rõ, 200+ đối tác</td>
      <td>⚠️ Có nhưng quy mô nhỏ hơn</td>
      <td>❌ Không cam kết</td>
      <td>⚠️ Có nhưng chủ yếu online</td>
    </tr>
    <tr>
      <td><strong>Số lượng trung tâm</strong></td>
      <td>✅ 50+ toàn quốc</td>
      <td>30+</td>
      <td>10–15</td>
      <td>Online là chính</td>
    </tr>
    <tr>
      <td><strong>Chương trình thi đấu</strong></td>
      <td>✅ VEX IQ, Hackathon, thi lập trình</td>
      <td>⚠️ Một số sự kiện</td>
      <td>⚠️ Có nhưng ít hơn</td>
      <td>❌ Không nổi bật</td>
    </tr>
  </tbody>
</table>

<h3>Số liệu quan trọng TVTS cần thuộc</h3>
<div class="insight-card">
  <div class="insight-number">📊</div>
  <div class="insight-body">
    <ul>
      <li>🏢 <strong>50+ trung tâm</strong> trên toàn quốc (Hà Nội, TP.HCM, Đà Nẵng, và 20+ tỉnh thành)</li>
      <li>👥 <strong>100,000+ học viên</strong> K12 từ 2015 đến nay</li>
      <li>👨‍🏫 <strong>500+ giáo viên</strong> — 100% được đào tạo chuyên sâu theo track</li>
      <li>🤝 <strong>200+ đối tác doanh nghiệp</strong> trong chương trình Bảo trợ việc làm</li>
      <li>🌍 <strong>25+ quốc gia</strong> học viên MindX đã du học thành công</li>
      <li>🏆 <strong>10 năm</strong> kinh nghiệm giáo dục công nghệ K12 (2015–2025)</li>
    </ul>
  </div>
</div>

<div class="key-takeaway">
  <strong>Key Takeaway:</strong> MindX không phải "trung tâm dạy code" — MindX là <em>hệ sinh thái giáo dục công nghệ dài hạn</em>. Sự khác biệt lớn nhất là: lộ trình từ 4 đến 18 tuổi có kết nối rõ ràng, cam kết đầu ra thật (việc làm / du học), và 3 track đa dạng đáp ứng mọi sở thích con trẻ.
</div>

<div class="practice-exercise">
  <strong>Bài tập:</strong> Không nhìn tài liệu, hãy kể lại lịch sử MindX trong 60 giây và nêu 3 điểm khác biệt so với đối thủ. Luyện tập với đồng nghiệp của bạn.
</div>`,
          quiz: {
            id: "quiz_day1_s2",
            title: "Quiz: Tổng quan MindX",
            questions: [
              {
                q: "MindX được thành lập năm nào và với tên gọi ban đầu là gì?",
                options: ["2013 — iTeach Kids", "2014 — CodeKids Vietnam", "2015 — Techkids", "2016 — MindX Academy"],
                correct: 2,
                explanation: "MindX thành lập năm 2015 với tên ban đầu là 'Techkids', bắt đầu với 20 học viên tại Hà Nội."
              },
              {
                q: "MindX hiện có bao nhiêu học viên K12 tính đến năm 2026?",
                options: ["50,000+", "80,000+", "100,000+", "150,000+"],
                correct: 2,
                explanation: "Hơn 100,000 học viên K12 — đây là con số mạnh nhất khi nói về social proof với phụ huynh."
              },
              {
                q: "Lộ trình Art & Design của MindX kéo dài bao nhiêu năm?",
                options: ["5 năm", "6 năm", "7 năm", "8 năm"],
                correct: 2,
                explanation: "7 năm — từ Little Artist (4+) đến Motion & Video (14+). Đây là lộ trình Art dài nhất trên thị trường K12 Việt Nam."
              },
              {
                q: "Kit Robotics nào được dùng ở Năm 3 (Sáng tạo Robot — 10+) và cũng là kit thi đấu quốc tế VEX IQ Challenge?",
                options: ["LEGO Spike Prime", "VEX GO", "VEX IQ", "LEGO Mindstorms"],
                correct: 2,
                explanation: "VEX IQ — kit chính thức của VEX IQ Challenge với 30,000+ đội từ 80+ quốc gia. Đây là điểm bán hàng mạnh nhất của Robotics MindX."
              },
              {
                q: "Điểm khác biệt lớn nhất của MindX so với Teky và Logicbase là gì?",
                options: ["Giá học phí thấp hơn", "Có đủ 3 track: Coding + Robotics + Art, kèm bảo trợ việc làm và du học", "Chỉ dạy online", "Ít học viên hơn nên được quan tâm hơn"],
                correct: 1,
                explanation: "3 track đa dạng + cam kết bảo trợ việc làm/du học là USP mạnh nhất. Cạnh tranh chỉ trên giá sẽ không bền — hãy cạnh tranh trên giá trị."
              }
            ]
          }
        },

        /* ---------- Bài 3: Mindset TVTS ---------- */
        {
          id: "day1_s3",
          title: "Mindset TVTS chuyên nghiệp — 5 tư duy nền tảng",
          icon: "🧠",
          content: `<h3>5 Mindset cốt lõi của TVTS MindX xuất sắc</h3>
<p>TVTS giỏi không phải người biết nhiều nhất về sản phẩm — mà là người <strong>hiểu đúng nhất tâm lý khách hàng</strong> và <strong>hành động nhất quán với giá trị</strong>. 5 mindset dưới đây phân biệt TVTS trung bình với TVTS xuất sắc.</p>

<div class="insight-card">
  <div class="insight-number">1</div>
  <div class="insight-body">
    <h4>🩺 Mindset "Bác sĩ — không phải Nhân viên bán hàng"</h4>
    <p><strong>Ý nghĩa:</strong> Bác sĩ không bán thuốc — bác sĩ chẩn đoán bệnh và kê đúng phác đồ điều trị. TVTS không bán khóa học — TVTS xác định vấn đề của phụ huynh và đề xuất đúng lộ trình cho con.</p>
    <p><strong>Ứng dụng thực tế:</strong> Khi PH gọi điện hỏi "cho tôi biết giá khóa Coding", đừng báo giá ngay. Hãy hỏi: "Con anh/chị bao nhiêu tuổi? Đang học lớp mấy? Con có sở thích gì về công nghệ không?" — sau đó mới tư vấn đúng.</p>
    <p><strong>Lỗi phổ biến:</strong> Báo giá ngay khi PH hỏi mà chưa hiểu nhu cầu → PH so sánh giá với đối thủ → mất khách.</p>
    <div class="script-box">
      <strong>Ví dụ đúng:</strong><br>
      <em>PH: "Cho tôi hỏi học Coding bao nhiêu tiền?"</em><br>
      <em>TVTS: "Dạ, học phí phụ thuộc vào lộ trình phù hợp với con. Anh/chị cho mình hỏi nhanh: con đang học lớp mấy và có thích chơi game hay vẽ không? Để mình tư vấn đúng chương trình cho con."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">2</div>
  <div class="insight-body">
    <h4>🔬 Mindset "Tò mò — không phải giải thích"</h4>
    <p><strong>Ý nghĩa:</strong> TVTS xuất sắc dành 70% thời gian TƯ VẤN để HỎI và LẮNG NGHE — không phải để nói. Càng hỏi hay, bạn càng hiểu sâu nhu cầu, và khi nói đúng nhu cầu thì PH tự quyết định.</p>
    <p><strong>Ứng dụng thực tế:</strong> Dùng kỹ thuật SPIN: Situation (hoàn cảnh) → Problem (vấn đề) → Implication (hậu quả nếu không giải quyết) → Need-payoff (lợi ích khi giải quyết).</p>
    <p><strong>Lỗi phổ biến:</strong> Nói quá nhiều về sản phẩm trong khi PH chưa thấy sản phẩm liên quan gì đến con họ.</p>
    <div class="script-box">
      <strong>Câu hỏi tốt:</strong><br>
      <em>"Điều anh/chị lo nhất về tương lai của con hiện tại là gì?"</em><br>
      <em>"Con có từng nói với anh/chị là con muốn làm gì sau này chưa?"</em><br>
      <em>"Nếu con học 1 năm mà không có kết quả rõ ràng, anh/chị sẽ cảm thấy thế nào?"</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">3</div>
  <div class="insight-body">
    <h4>📈 Mindset "Dài hạn — không phải giao dịch đơn lẻ"</h4>
    <p><strong>Ý nghĩa:</strong> TVTS trung bình nghĩ: "Làm sao để close ngay buổi này?" TVTS xuất sắc nghĩ: "Làm sao để PH và con theo học MindX 3–5 năm?" Khách hàng dài hạn không chỉ đem lại doanh thu cao hơn — họ còn giới thiệu thêm khách mới.</p>
    <p><strong>Ứng dụng thực tế:</strong> Tư vấn đúng, không tư vấn quá. Nếu con 6 tuổi phù hợp Robotics Năm 0, đừng cố bán Coding Year 1. Phụ huynh cảm nhận được sự trung thực → tin tưởng → gắn bó lâu dài.</p>
    <p><strong>Lỗi phổ biến:</strong> Đẩy khóa học đắt nhất hoặc dài nhất cho mọi PH bất kể nhu cầu thực tế → PH mua nhưng bỏ học giữa chừng → review xấu.</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">4</div>
  <div class="insight-body">
    <h4>💪 Mindset "Kiên trì — không phải từ bỏ sau lần từ chối đầu tiên"</h4>
    <p><strong>Ý nghĩa:</strong> Nghiên cứu bán hàng cho thấy <strong>80% giao dịch đóng sau lần liên hệ thứ 5–12</strong>, nhưng <strong>80% TVTS dừng lại sau lần 1–2</strong>. Từ chối đầu tiên không phải "Không" — đó là "Tôi cần thêm thông tin" hoặc "Tôi chưa đủ tin tưởng."</p>
    <p><strong>Ứng dụng thực tế:</strong> Sau mỗi cuộc tư vấn không thành công, ghi lại: "PH từ chối vì lý do gì?" → Tìm cách cung cấp thêm giá trị trong lần follow-up tiếp theo (chia sẻ case study, mời thử lớp miễn phí, gửi thông tin chi tiết hơn về lộ trình).</p>
    <p><strong>Lỗi phổ biến:</strong> Gọi follow-up chỉ để hỏi "Anh/chị đã quyết định chưa?" — nghe như nhắc nợ. Phải cung cấp giá trị mới mỗi lần liên hệ.</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">5</div>
  <div class="insight-body">
    <h4>🎓 Mindset "Học liên tục — không phải biết đủ rồi thôi"</h4>
    <p><strong>Ý nghĩa:</strong> Phụ huynh ngày nay tra Google trước khi gặp TVTS. Họ đã đọc về AI, về STEM, về các trường quốc tế. TVTS không cập nhật kiến thức sẽ nói những điều PH đã biết và thua ở khâu expertise.</p>
    <p><strong>Ứng dụng thực tế:</strong> Mỗi tuần đọc ít nhất 1 bài về xu hướng giáo dục công nghệ K12. Theo dõi kết quả học viên MindX thật (case study). Biết ít nhất 3 câu chuyện thành công của học viên cũ.</p>
    <p><strong>Lỗi phổ biến:</strong> Nói những con số cũ (2020, 2021) hoặc không biết xu hướng mới nhất → PH mất tin tưởng.</p>
  </div>
</div>

<h3>Ngày đầu tiên — Checklist 10 điểm</h3>
<div class="insight-card">
  <div class="insight-number">✅</div>
  <div class="insight-body">
    <p>Hoàn thành 10 mục này trong 3 ngày đầu làm việc:</p>
    <ol>
      <li>☐ Đọc và nắm vững cấu trúc 3 track sản phẩm (Coding, Robotics, Art)</li>
      <li>☐ Biết thuộc lòng ít nhất 5 con số quan trọng của MindX (100K+ HV, 50+ TT, v.v.)</li>
      <li>☐ Tham quan toàn bộ trung tâm — biết phòng nào làm gì</li>
      <li>☐ Nghe/xem ít nhất 2 buổi tư vấn thật của TVTS senior</li>
      <li>☐ Cài app và công cụ CRM của MindX, biết cách nhập lead cơ bản</li>
      <li>☐ Biết quy trình đặt lịch trial class và các bước tiếp theo</li>
      <li>☐ Học thuộc 5 nỗi đau phụ huynh và script xử lý tương ứng</li>
      <li>☐ Role-play tư vấn với đồng nghiệp hoặc mentor ít nhất 1 lần</li>
      <li>☐ Đọc ít nhất 3 case study học viên MindX thành công</li>
      <li>☐ Biết chính sách học phí, khuyến mãi hiện tại và quy trình thanh toán</li>
    </ol>
  </div>
</div>

<h3>Tự đánh giá Mindset — Bảng điểm</h3>
<table class="compare-table">
  <thead>
    <tr><th>Mindset</th><th>Điểm yếu (1–3)</th><th>Đang phát triển (4–6)</th><th>Mạnh (7–10)</th></tr>
  </thead>
  <tbody>
    <tr><td>Bác sĩ — không phải sales</td><td>Hay báo giá ngay</td><td>Đôi khi hỏi thêm trước</td><td>Luôn hỏi trước, tư vấn sau</td></tr>
    <tr><td>Tò mò — hỏi nhiều hơn nói</td><td>Nói liên tục, ít hỏi</td><td>Hỏi được 1–2 câu</td><td>Có flow câu hỏi tự nhiên</td></tr>
    <tr><td>Dài hạn — không phải giao dịch</td><td>Chỉ muốn close ngay</td><td>Có nghĩ đến retention</td><td>Tư vấn đúng dù tốn thời gian</td></tr>
    <tr><td>Kiên trì — không bỏ cuộc</td><td>Gọi 1–2 lần rồi thôi</td><td>Follow-up 3–4 lần</td><td>Có hệ thống follow-up bài bản</td></tr>
    <tr><td>Học liên tục</td><td>Không đọc thêm gì</td><td>Đọc khi cần</td><td>Chủ động cập nhật hàng tuần</td></tr>
  </tbody>
</table>

<div class="key-takeaway">
  <strong>Key Takeaway:</strong> Mindset quyết định kết quả hơn kỹ năng. TVTS xuất sắc tư vấn như bác sĩ — họ hỏi nhiều hơn nói, họ kiên trì và họ không ngừng học. Bắt đầu từ hôm nay, mỗi ngày áp dụng ít nhất 1 mindset vào công việc thực tế.
</div>

<div class="practice-exercise">
  <strong>Bài tập cuối ngày 1:</strong> Chọn 1 mindset bạn thấy yếu nhất và viết ra 3 hành động cụ thể bạn sẽ thực hiện tuần này để cải thiện. Gửi cho mentor trước 9h sáng ngày mai.
</div>`,
          quiz: {
            id: "quiz_day1_s3",
            title: "Quiz: Mindset TVTS Chuyên nghiệp",
            questions: [
              {
                q: "Theo nghiên cứu bán hàng, bao nhiêu % giao dịch đóng sau lần liên hệ thứ 5–12?",
                options: ["40%", "60%", "80%", "90%"],
                correct: 2,
                explanation: "80% — đây là lý do TVTS xuất sắc có hệ thống follow-up bài bản, không bỏ cuộc sau 1–2 lần từ chối."
              },
              {
                q: "Phụ huynh hỏi 'học phí bao nhiêu?' — TVTS nên làm gì đầu tiên?",
                options: ["Báo ngay mức giá thấp nhất để thu hút", "Hỏi thêm về con (độ tuổi, sở thích) trước khi tư vấn lộ trình phù hợp", "Gửi bảng giá chi tiết qua Zalo", "Mời PH đến trung tâm rồi mới nói giá"],
                correct: 1,
                explanation: "Mindset 'Bác sĩ' — hỏi trước, tư vấn sau. Báo giá ngay khi chưa hiểu nhu cầu dẫn đến so sánh giá thuần túy với đối thủ."
              },
              {
                q: "TVTS nào thể hiện Mindset 'Dài hạn' đúng nhất?",
                options: ["Chốt được nhiều đơn nhất mỗi tháng dù PH không phù hợp", "Tư vấn đúng lộ trình cho con dù đó là khóa ngắn và rẻ hơn", "Luôn giới thiệu gói dài nhất và đắt nhất", "Gọi nhiều PH nhất trong ngày"],
                correct: 1,
                explanation: "Tư vấn đúng tạo niềm tin dài hạn. PH hài lòng sẽ học tiếp nhiều năm và giới thiệu bạn bè — giá trị cao hơn nhiều so với một đơn chốt ép."
              },
              {
                q: "Khi follow-up PH đã từ chối, nên làm gì?",
                options: ["Hỏi thẳng 'Anh/chị đã quyết định chưa?'", "Cung cấp thêm giá trị mới: case study, thông tin lộ trình, mời trial miễn phí", "Không liên hệ nữa để tránh phiền", "Giảm giá ngay để kéo PH quay lại"],
                correct: 1,
                explanation: "Mỗi lần follow-up phải mang thêm giá trị — không phải nhắc nợ. Chia sẻ case study phù hợp, thông tin mới, hoặc mời trial là các cách hay nhất."
              },
              {
                q: "Trong 10 mục checklist ngày đầu tiên, điều nào quan trọng nhất để làm NGAY trong ngày 1?",
                options: ["Đặt mục tiêu doanh số cá nhân", "Tham quan trung tâm và nghe buổi tư vấn thật của TVTS senior", "Học thuộc toàn bộ bảng giá", "Gọi điện cho 10 PH đầu tiên"],
                correct: 1,
                explanation: "Tham quan và quan sát TVTS senior trong thực tế là cách học nhanh nhất. Không gì thay thế được việc quan sát người giỏi làm việc thật."
              }
            ]
          }
        }
      ]
    },

    /* ==================== DAY 2: PRODUCT MASTERY ==================== */
    {
      id: "day2",
      day: 2,
      title: "PRODUCT MASTERY",
      subtitle: "Thành thạo sản phẩm",
      icon: "📚",
      color: "#2B6CB0",
      sections: [

        /* ---------- Bài 1: Lộ trình Coding ---------- */
        {
          id: "day2_s1",
          title: "Lộ trình Coding 5 năm — Từ Scratch đến Computer Scientist",
          icon: "💻",
          content: `<h3>Tổng quan Lộ trình Coding MindX — 5 năm</h3>
<p>Coding là track flagship và chiếm tỷ trọng lớn nhất trong doanh thu K12 của MindX. TVTS cần nắm vững từng năm để tư vấn đúng theo độ tuổi và mục tiêu của từng gia đình.</p>

<table class="compare-table">
  <thead>
    <tr>
      <th>Năm</th>
      <th>Tên khóa</th>
      <th>Độ tuổi</th>
      <th>Buổi học</th>
      <th>Sản phẩm con tạo ra</th>
      <th>Key selling point</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Năm 1</strong></td>
      <td>Scratch</td>
      <td>8–11 tuổi</td>
      <td>~48 buổi/năm</td>
      <td>Game platformer hoàn chỉnh, câu chuyện tương tác</td>
      <td>Ngôn ngữ MIT — 150+ quốc gia dùng; không cần biết gì trước</td>
    </tr>
    <tr>
      <td><strong>Năm 2</strong></td>
      <td>Game Creator</td>
      <td>11–14 tuổi</td>
      <td>~48 buổi/năm</td>
      <td>Game arcade 2D bằng Python, upload lên itch.io</td>
      <td>Viết Python thật sự; có portfolio online</td>
    </tr>
    <tr>
      <td><strong>Năm 3</strong></td>
      <td>App Producer</td>
      <td>11–14 tuổi</td>
      <td>~48 buổi/năm</td>
      <td>App mobile cài được trên Android, app có server</td>
      <td>Hiểu full-stack cơ bản; cài app trên điện thoại thật</td>
    </tr>
    <tr>
      <td><strong>Năm 4</strong></td>
      <td>Web Developer</td>
      <td>14–17 tuổi</td>
      <td>~48 buổi/năm</td>
      <td>Website thương mại điện tử mini, portfolio cá nhân</td>
      <td>Full-stack HTML/CSS/JS + Python; portfolio để xin việc/du học</td>
    </tr>
    <tr>
      <td><strong>Năm 5</strong></td>
      <td>Computer Scientist</td>
      <td>15–18+ tuổi</td>
      <td>~48 buổi/năm</td>
      <td>Hệ thống recommendation, AI project tích hợp</td>
      <td>Thuật toán nâng cao; nền tảng thi USACO/IOI; bảo trợ việc làm</td>
    </tr>
  </tbody>
</table>

<h3>Chi tiết từng năm — FAQ phụ huynh thường hỏi</h3>

<div class="insight-card">
  <div class="insight-number">📌</div>
  <div class="insight-body">
    <h4>Năm 1 — Scratch (8+): "Con chưa biết gì về code — có vào được không?"</h4>
    <p><strong>Scratch là gì:</strong> Ngôn ngữ lập trình kéo thả do MIT Media Lab tạo ra — dùng tại 150+ quốc gia cho học sinh 8–11 tuổi. Không có syntax khó, không lỗi chính tả — con tập trung vào logic và ý tưởng.</p>
    <p><strong>Con học được gì:</strong> Vòng lặp, điều kiện, biến số — 3 khái niệm nền tảng của mọi phần mềm trên thế giới. Con hiểu bằng cách TẠO RA, không đọc sách.</p>
    <p><strong>Sản phẩm:</strong> Game platformer hoàn chỉnh 3 màn — đủ sức thi Scratch cấp trường; câu chuyện tương tác có nhiều nhánh.</p>
    <div class="script-box">
      <strong>FAQ & Script:</strong><br>
      <em>PH: "Con 8 tuổi có học được không? Có quá khó không?"</em><br>
      <em>TVTS: "Scratch được thiết kế đặc biệt cho trẻ 8 tuổi — không cần biết gì trước cả. Buổi học đầu tiên, con đã kéo-thả ra một nhân vật chuyển động được rồi. Nhiều bạn về nhà làm đêm không chịu ngủ vì mê quá!"</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">📌</div>
  <div class="insight-body">
    <h4>Năm 2 — Game Creator (11+): "Tại sao cần học làm game? Có nghề gì không?"</h4>
    <p><strong>Game Creator là gì:</strong> Bước chuyển từ Scratch sang Python thật — con viết code bằng tay, hiểu OOP cơ bản, thiết kế game 2D với Pygame.</p>
    <p><strong>Con học được gì:</strong> Python hàm, vòng lặp, list, dictionary — nền tảng để học bất kỳ lĩnh vực lập trình nào. Portfolio game thật được upload lên itch.io — có người chơi thật.</p>
    <p><strong>Nghề nghiệp:</strong> Game Developer là nghề thiếu nhân lực nhất ngành CNTT Việt Nam — lương khởi điểm 15–25 triệu/tháng, kinh nghiệm 3–5 năm có thể đạt 40–70 triệu.</p>
    <div class="script-box">
      <strong>FAQ & Script:</strong><br>
      <em>PH: "Học làm game xong thì làm được gì?"</em><br>
      <em>TVTS: "Game Creator dạy con Python thật sự — ngôn ngữ phổ biến nhất trong AI, data science và web development. Game chỉ là 'sân chơi' để con học Python — sau khi xong, con có thể rẽ sang App, Web hoặc AI tùy sở thích."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">📌</div>
  <div class="insight-body">
    <h4>Năm 3 — App Producer (11+): "Con có cần iPhone mới để học không?"</h4>
    <p><strong>App Producer là gì:</strong> Xây app mobile thật — thiết kế UI, lập trình logic, kết nối database, cài được trên Android thật.</p>
    <p><strong>Con học được gì:</strong> Full-stack mobile cơ bản: UI (giao diện) + logic xử lý + dữ liệu. Tư duy UX — nghĩ cho người dùng, không phải cho thầy cô. Quản lý dự án cá nhân: ý tưởng → wireframe → code → test → launch.</p>
    <p><strong>Lưu ý kỹ thuật:</strong> App được build cho Android — không cần iPhone. Máy tính trung tâm được sử dụng trong giờ học.</p>
    <div class="script-box">
      <strong>FAQ & Script:</strong><br>
      <em>PH: "App con làm có phải trả phí lên App Store không?"</em><br>
      <em>TVTS: "App con làm cài được trực tiếp trên Android mà không cần qua App Store. Nếu con muốn đưa lên chợ ứng dụng là có thể — đây chính là bước tiếp theo mà chương trình hướng dẫn trong phần nâng cao."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">📌</div>
  <div class="insight-body">
    <h4>Năm 4 — Web Developer (14+): "Con học xong có xin việc được ngay không?"</h4>
    <p><strong>Web Developer là gì:</strong> Xây website thật từ A đến Z — HTML/CSS/JS (frontend) + Python/Node.js (backend) + SQL (database) — deploy lên internet thật.</p>
    <p><strong>Con học được gì:</strong> Kỹ năng full-stack — bộ kỹ năng tuyển dụng số 1 ngành IT Việt Nam hiện tại. Portfolio công khai trên GitHub — thể hiện được với nhà tuyển dụng và hội đồng xét tuyển đại học.</p>
    <p><strong>Bảo trợ:</strong> Sau Web Developer, con đủ điều kiện tham gia Internship Program (16+) — thực tập tại công ty đối tác MindX.</p>
    <div class="script-box">
      <strong>FAQ & Script:</strong><br>
      <em>PH: "Con 14 tuổi học web developer rồi xin việc được không?"</em><br>
      <em>TVTS: "Sau Web Developer, con có đủ kỹ năng để thực tập — MindX có chương trình kết nối thực tập cho học viên 16+. Thực tập trong quá trình học là lợi thế cực kỳ lớn khi con nộp hồ sơ đại học hoặc xin việc chính thức sau khi tốt nghiệp."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">📌</div>
  <div class="insight-body">
    <h4>Năm 5 — Computer Scientist (15+): "Khóa này khác Web Dev chỗ nào?"</h4>
    <p><strong>Computer Scientist là gì:</strong> Không học thêm ngôn ngữ — học cách tư duy hệ thống, giải quyết bài toán phức tạp, tối ưu thuật toán. Nền tảng để thi USACO, IOI, ICPC.</p>
    <p><strong>Con học được gì:</strong> Thuật toán và độ phức tạp, kiến trúc phần mềm, data structure — thứ mà kỹ sư Google, Amazon, Meta dùng hàng ngày. AI project thật: chatbot, image classifier, recommendation system.</p>
    <p><strong>Sau khóa này:</strong> 4 hướng chuyên sâu 18+: AI/ML Engineering, Data Science, Software Architecture, Cybersecurity — MindX hỗ trợ định hướng và bảo trợ việc làm.</p>
    <div class="script-box">
      <strong>FAQ & Script:</strong><br>
      <em>PH: "Con đã học Web Dev xong, Computer Scientist có cần thiết không?"</em><br>
      <em>TVTS: "Web Dev cho con biết xây nhà — Computer Scientist cho con biết thiết kế cả thành phố. Nếu con muốn làm ở các công ty top tier (Google, Grab, VNG, Shopee), CS là bắt buộc. Nếu chỉ muốn làm freelance web, Web Dev là đủ rồi — anh/chị chọn theo mục tiêu của con."</em>
    </div>
  </div>
</div>

<h3>Chương trình đặc biệt Coding</h3>
<div class="insight-card">
  <div class="insight-number">⭐</div>
  <div class="insight-body">
    <ul>
      <li><strong>AI4Learn:</strong> Tích hợp AI vào lập trình — học cách dùng AI như một công cụ sáng tạo, không phải thay thế. Phù hợp từ Game Creator trở lên.</li>
      <li><strong>NextGen Coding:</strong> Chương trình tăng cường — hackathon nội bộ, dự án thực tế với doanh nghiệp đối tác. Dành cho học viên xuất sắc từ năm 3 trở lên.</li>
      <li><strong>Internship 16+:</strong> Thực tập có định hướng tại 200+ đối tác — viết code thật, làm dự án thật, có mentor từ công ty. Mở đường ra thị trường lao động từ 16 tuổi.</li>
    </ul>
  </div>
</div>

<div class="key-takeaway">
  <strong>Key Takeaway:</strong> Khi tư vấn Coding, luôn bắt đầu bằng "Con đang học lớp mấy và có thích gì?" → map với năm học phù hợp → nêu sản phẩm cụ thể con sẽ tạo ra → kết nối với mục tiêu dài hạn (nghề nghiệp/du học). Đừng nói "học lập trình" — hãy nói "sau 1 năm, con sẽ có [sản phẩm cụ thể]".
</div>

<div class="practice-exercise">
  <strong>Bài tập:</strong> Với mỗi kịch bản sau, bạn sẽ tư vấn năm nào?<br>
  (1) Con trai 9 tuổi, thích Minecraft, chưa học code bao giờ.<br>
  (2) Con gái 13 tuổi, muốn làm app như TikTok.<br>
  (3) Con trai 16 tuổi, đang học Python tại trường, muốn thi đại học IT top.<br>
  Thảo luận với mentor và giải thích lý do chọn.
</div>`,
          quiz: {
            id: "quiz_day2_s1",
            title: "Quiz: Lộ trình Coding 5 năm",
            questions: [
              {
                q: "Phụ huynh có con 9 tuổi thích vẽ nhân vật trong Minecraft muốn bắt đầu học code. Năm nào phù hợp nhất?",
                options: ["Game Creator (Năm 2)", "Scratch (Năm 1)", "App Producer (Năm 3)", "Web Developer (Năm 4)"],
                correct: 1,
                explanation: "Scratch (8+) là điểm vào chuẩn cho trẻ 9 tuổi chưa có nền tảng code. Scratch dùng ngôn ngữ kéo thả dễ tiếp cận, phù hợp với cả trẻ thích sáng tạo và vẽ."
              },
              {
                q: "Điểm bán hàng mạnh nhất của Web Developer (Năm 4) với phụ huynh là gì?",
                options: ["Học phí thấp nhất trong 5 năm", "Con có website thật đang chạy trên internet — portfolio để xin việc và du học", "Học được nhanh nhất chỉ 3 tháng", "Không cần máy tính riêng"],
                correct: 1,
                explanation: "Portfolio thật — website đang chạy, GitHub profile — là thứ giúp con nổi bật trong hồ sơ đại học và nhà tuyển dụng. Đây là key selling point mạnh nhất của Web Developer."
              },
              {
                q: "Chương trình nào của MindX kết nối học viên Coding với doanh nghiệp thật từ 16 tuổi?",
                options: ["AI4Learn", "NextGen Coding", "Internship 16+", "Computer Scientist"],
                correct: 2,
                explanation: "Internship 16+ — thực tập tại 200+ đối tác doanh nghiệp của MindX. Đây là lợi thế cạnh tranh lớn mà Teky và Logicbase chưa có quy mô tương đương."
              },
              {
                q: "Phụ huynh hỏi: 'Game Creator học xong thì làm được gì, không phải chỉ biết làm game?' TVTS trả lời thế nào?",
                options: ["Game Creator chỉ phục vụ ngành game thôi ạ", "Sau Game Creator, con biết Python — có thể học App, Web hoặc AI tùy sở thích", "Con sẽ làm game cho các công ty lớn", "Anh/chị nên cho con học thẳng Web Developer"],
                correct: 1,
                explanation: "Python là ngôn ngữ phổ biến nhất cho AI, data science và web. Game chỉ là 'sân chơi' để học Python — sau đó con có nhiều hướng đi."
              },
              {
                q: "Sự khác biệt chính giữa Computer Scientist (Năm 5) và Web Developer (Năm 4) là gì?",
                options: ["Computer Scientist học thêm nhiều ngôn ngữ mới hơn", "Web Developer dạy xây nhà — Computer Scientist dạy tư duy thiết kế hệ thống phức tạp, thuật toán tối ưu", "Computer Scientist chỉ dành cho trẻ muốn du học", "Web Developer mắc tiền hơn"],
                correct: 1,
                explanation: "Web Dev = biết xây. CS = biết thiết kế kiến trúc và tối ưu. CS cần thiết cho các vai trò kỹ sư ở công ty top tier, thi lập trình quốc tế, hoặc nghiên cứu AI/ML."
              }
            ]
          }
        },

        /* ---------- Bài 2: Lộ trình Art ---------- */
        {
          id: "day2_s2",
          title: "Lộ trình Art & Design 7 năm — Từ Little Artist đến Motion & Video",
          icon: "🎨",
          content: `<h3>Tổng quan Lộ trình Art & Design MindX — 7 năm</h3>
<p>Art là track dài nhất của MindX — 7 năm từ 4 tuổi đến 18+. TVTS cần hiểu rõ để tư vấn phụ huynh có con thích vẽ, sáng tạo, hoặc muốn nghề nghiệp trong ngành thiết kế.</p>

<table class="compare-table">
  <thead>
    <tr>
      <th>Năm</th>
      <th>Tên khóa</th>
      <th>Độ tuổi</th>
      <th>Công cụ chính</th>
      <th>Sản phẩm con tạo ra</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Năm 1</strong></td>
      <td>Little Artist</td>
      <td>4–7 tuổi</td>
      <td>Bút màu, đất nặn, iPad cơ bản</td>
      <td>Tranh kể chuyện 4–6 tờ, digital art đầu tiên trên iPad</td>
    </tr>
    <tr>
      <td><strong>Năm 2</strong></td>
      <td>Digital Art Foundations</td>
      <td>7–10 tuổi</td>
      <td>iPad + Apple Pencil + Procreate</td>
      <td>Character design hoàn chỉnh, illustrated scene có perspective</td>
    </tr>
    <tr>
      <td><strong>Năm 3</strong></td>
      <td>Visual Thinking</td>
      <td>9–12 tuổi</td>
      <td>Procreate nâng cao, Canva</td>
      <td>Editorial illustration, infographic có thể đăng mạng xã hội</td>
    </tr>
    <tr>
      <td><strong>Năm 4</strong></td>
      <td>Game Art</td>
      <td>11–14 tuổi</td>
      <td>Aseprite (pixel art), Illustrator cơ bản</td>
      <td>Character sprite sheet với animation, Game UI kit hoàn chỉnh</td>
    </tr>
    <tr>
      <td><strong>Năm 5</strong></td>
      <td>Character & Mascot</td>
      <td>12–15 tuổi</td>
      <td>Procreate, Illustrator</td>
      <td>Mascot thương hiệu với brand guide, character sheet truyện tranh</td>
    </tr>
    <tr>
      <td><strong>Năm 6</strong></td>
      <td>Visual Communication</td>
      <td>13–16 tuổi</td>
      <td>Adobe Illustrator + Photoshop + InDesign</td>
      <td>Brand identity hoàn chỉnh (logo, màu, font, 5 vật phẩm), campaign visual</td>
    </tr>
    <tr>
      <td><strong>Năm 7</strong></td>
      <td>Motion & Video</td>
      <td>14–18+ tuổi</td>
      <td>Adobe Premiere Pro + After Effects</td>
      <td>Motion graphic explainer 60–90s, short film/branded content 3–5 phút</td>
    </tr>
  </tbody>
</table>

<h3>Insight tư vấn từng năm — Câu hỏi PH thường gặp</h3>

<div class="insight-card">
  <div class="insight-number">🖌️</div>
  <div class="insight-body">
    <h4>Năm 1–2 (Little Artist & Digital Art Foundations — 4–10 tuổi)</h4>
    <p><strong>Nhóm PH:</strong> PH có con nhỏ thích vẽ, hoặc PH muốn phát triển sáng tạo từ sớm.</p>
    <p><strong>Điểm bán hàng:</strong> Little Artist phát triển phối hợp tay-mắt, tự tin diễn đạt cảm xúc. Digital Art Foundations dùng iPad + Procreate — công cụ mà 80% illustrator chuyên nghiệp đang dùng.</p>
    <div class="script-box">
      <strong>Script với PH con 5 tuổi:</strong><br>
      <em>"Con thích vẽ và hay xin giấy bút ở nhà là dấu hiệu rất tốt anh/chị ơi. Little Artist không chỉ dạy vẽ — chúng tôi giúp con phát triển khả năng diễn đạt, phối hợp tay-mắt và tự tin thể hiện ý tưởng — những nền tảng mà cả cuộc đời con sẽ dùng đến, dù sau này con làm ngành gì."</em>
    </div>
    <div class="script-box">
      <strong>Script với PH lo "vẽ có thành nghề không":</strong><br>
      <em>"Anh/chị ơi, Procreate là app mà các illustrator ở Disney, Pixar đang dùng để vẽ concept. Con 7 tuổi học Procreate tại MindX — đây là công cụ thật của ngành thật. Sau này dù con làm UI designer, game artist hay motion designer — nền tảng này đều dùng được."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">🎮</div>
  <div class="insight-body">
    <h4>Năm 4 — Game Art (11+): Kết hợp hoàn hảo với Coding</h4>
    <p><strong>Điểm đặc biệt:</strong> Game Art + Game Creator (track Coding) = học viên có thể tự tạo game hoàn chỉnh từ A đến Z — một kỹ năng cực kỳ hiếm và được săn đón.</p>
    <p><strong>Career path:</strong> Game Artist Việt Nam được các studio quốc tế tuyển dụng — lương 15–30 triệu/tháng. Con học từ 11 tuổi có 7 năm để trở nên xuất sắc trước khi ra thị trường.</p>
    <div class="script-box">
      <strong>Script kết hợp 2 track:</strong><br>
      <em>"Con anh/chị vừa thích vẽ vừa thích game thì thú vị lắm — có thể kết hợp cả 2! Nếu con học Game Art để thiết kế nhân vật + học Game Creator để lập trình logic game, con sẽ có thể tự tạo ra game hoàn chỉnh 100% do mình làm. Rất ít người làm được cả 2 — và đó là lý do người có combo kỹ năng này luôn được tuyển dụng cao."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">🏢</div>
  <div class="insight-body">
    <h4>Năm 6–7 — Visual Communication & Motion/Video (13–18+)</h4>
    <p><strong>Công cụ Adobe:</strong> Illustrator, Photoshop, InDesign, Premiere Pro, After Effects — bộ công cụ tiêu chuẩn ngành, được dùng tại mọi agency và in-house design team Việt Nam và quốc tế.</p>
    <p><strong>Career path:</strong></p>
    <ul>
      <li>Graphic Designer / Brand Designer: 12–20 triệu/tháng</li>
      <li>UX/UI Designer: 18–35 triệu/tháng</li>
      <li>Motion Designer: 15–25 triệu/tháng</li>
      <li>Video Editor: 12–22 triệu/tháng</li>
    </ul>
    <div class="script-box">
      <strong>Script về nghề nghiệp:</strong><br>
      <em>"82% lưu lượng internet hiện nay là video. Mỗi thương hiệu, mỗi startup, mỗi creator đều cần người biết làm motion graphic và video chuyên nghiệp. Sau Motion & Video, con không chỉ có nghề — con có nghề được thế giới liên tục cần, và có thể làm remote từ bất kỳ đâu."</em>
    </div>
  </div>
</div>

<h3>Chương trình đặc biệt Art</h3>
<div class="insight-card">
  <div class="insight-number">⭐</div>
  <div class="insight-body">
    <ul>
      <li><strong>Cregen I & II:</strong> Dự án thật với khách hàng thật — con không làm bài tập mà làm brief thật từ doanh nghiệp. Triển lãm tác phẩm cuối chương trình. Phù hợp từ Năm 5 trở lên.</li>
      <li><strong>Internship Art:</strong> Thực tập tại agency design và studio trong nước. Được mentor bởi designer chuyên nghiệp đang làm việc trong ngành.</li>
      <li><strong>UX/UI Năm 7:</strong> Chuyên sâu Figma, user research, prototyping — hướng cho học viên muốn đi sâu vào thiết kế sản phẩm số. Lương UX/UI designer 18–35 triệu/tháng.</li>
    </ul>
  </div>
</div>

<div class="key-takeaway">
  <strong>Key Takeaway:</strong> Khi tư vấn Art, đừng để PH nghĩ "vẽ chỉ là sở thích". Hãy nói về <em>ngôn ngữ hình ảnh</em> — kỹ năng giao tiếp mạnh nhất thế kỷ 21 — và kết nối với nghề nghiệp cụ thể có mức lương rõ ràng. PH Art cần nghe con số thật để yên tâm đầu tư.
</div>

<div class="practice-exercise">
  <strong>Bài tập:</strong> Phụ huynh nói: "Con tôi vẽ đẹp lắm nhưng tôi sợ học nghệ thuật không nuôi sống được." Viết ra phản hồi 3–4 câu của bạn, không quá 60 giây khi nói. Thực hành với đồng nghiệp.
</div>`,
          quiz: {
            id: "quiz_day2_s2",
            title: "Quiz: Lộ trình Art & Design",
            questions: [
              {
                q: "Công cụ chính được dùng trong khóa Digital Art Foundations (Năm 2 — 7+) là gì?",
                options: ["Adobe Photoshop và Illustrator", "iPad + Apple Pencil + Procreate", "Canva và Figma", "Paint và Google Slides"],
                correct: 1,
                explanation: "Procreate trên iPad — công cụ mà 80% illustrator chuyên nghiệp đang dùng. Đây là điểm bán hàng mạnh: con 7 tuổi dùng công cụ thật của ngành thật."
              },
              {
                q: "Phụ huynh lo 'vẽ không có nghề'. TVTS nên nêu mức lương nào để thuyết phục?",
                options: ["Graphic Designer 5–8 triệu/tháng", "Không nên nói đến lương vì không chắc chắn", "UX/UI Designer 18–35 triệu, Motion Designer 15–25 triệu, Graphic Designer 12–20 triệu/tháng", "Chỉ nghề freelance mới kiếm được tiền từ Art"],
                correct: 2,
                explanation: "Số liệu cụ thể giúp PH thấy nghề Art là nghề thật có thu nhập rõ ràng. UX/UI Designer đặc biệt có mức lương rất cạnh tranh — cao hơn nhiều vị trí văn phòng truyền thống."
              },
              {
                q: "Chương trình Cregen của MindX dành cho học viên Art ở năm nào trở lên?",
                options: ["Từ Năm 1", "Từ Năm 3", "Từ Năm 5", "Chỉ Năm 7"],
                correct: 2,
                explanation: "Cregen I & II từ Năm 5 trở lên — khi học viên đã đủ kỹ năng để làm dự án thật với khách hàng thật. Đây là bước 'real-world experience' quan trọng trong portfolio."
              },
              {
                q: "Học viên học cả Game Art (Art track) lẫn Game Creator (Coding track) có lợi thế gì đặc biệt?",
                options: ["Học phí được giảm 50%", "Có thể tự tạo game hoàn chỉnh từ A đến Z — visual + code — kỹ năng cực kỳ hiếm", "Được học thêm Robotics miễn phí", "Được cấp chứng chỉ quốc tế đặc biệt"],
                correct: 1,
                explanation: "Combo Game Art + Game Creator là kỹ năng T-shaped độc đáo: tự làm game từ A đến Z. Rất ít người có combo này — và đó chính là lợi thế cạnh tranh khổng lồ khi xin việc vào game studio."
              },
              {
                q: "Khóa Motion & Video (Năm 7) dạy công cụ Adobe nào?",
                options: ["Illustrator và InDesign", "Photoshop và Lightroom", "Premiere Pro và After Effects", "XD và Figma"],
                correct: 2,
                explanation: "Premiere Pro (edit video) và After Effects (motion graphic, animation) — đây là 2 công cụ tiêu chuẩn của mọi video editor và motion designer chuyên nghiệp."
              }
            ]
          }
        },

        /* ---------- Bài 3: Lộ trình Robotics ---------- */
        {
          id: "day2_s3",
          title: "Lộ trình Robotics 4 năm — Từ Kỹ sư Robot nhí đến Sáng tạo Robot",
          icon: "🤖",
          content: `<h3>Tổng quan Lộ trình Robotics MindX — 4 năm</h3>
<p>Robotics là sản phẩm <strong>HANDS-ON</strong> độc đáo nhất của MindX — học viên học bằng cách <em>cầm, lắp, lập trình robot thật</em>. Đây là track lý tưởng cho trẻ 4–13 tuổi muốn trải nghiệm công nghệ theo cách trực quan nhất.</p>

<table class="compare-table">
  <thead>
    <tr>
      <th>Năm</th>
      <th>Tên khóa</th>
      <th>Độ tuổi</th>
      <th>Kit sử dụng</th>
      <th>Sản phẩm con tạo ra</th>
      <th>Key selling point</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Năm 0</strong></td>
      <td>Kỹ sư Robot nhí</td>
      <td>4–6 tuổi</td>
      <td>LEGO Spike Essential</td>
      <td>Robot động vật (bạch tuộc, cá sấu), trực thăng cứu hộ</td>
      <td>"Lần đầu chạm vào công nghệ bằng tay — không phải màn hình"</td>
    </tr>
    <tr>
      <td><strong>Năm 1</strong></td>
      <td>Nhập môn Robotics</td>
      <td>6–8 tuổi</td>
      <td>VEX GO</td>
      <td>Robot giao hàng, cánh cửa thông minh tự động</td>
      <td>Kit chuẩn quốc tế 80+ nước; thiết kế trước khi làm</td>
    </tr>
    <tr>
      <td><strong>Năm 2</strong></td>
      <td>Truy tìm bí ẩn Robot</td>
      <td>8–10 tuổi</td>
      <td>VEX GO (nâng cao)</td>
      <td>Robot cứu hộ né vật cản, xe gom rác tự động</td>
      <td>"Học cách debug — không sợ sai"; thuyết trình kỹ thuật</td>
    </tr>
    <tr>
      <td><strong>Năm 3</strong></td>
      <td>Sáng tạo Robot</td>
      <td>10–13 tuổi</td>
      <td>VEX IQ</td>
      <td>Xe tự lái PID, cánh tay robot độ sai số &lt;5mm</td>
      <td>Kit thi đấu VEX IQ Challenge 80+ quốc gia; Python/C++</td>
    </tr>
  </tbody>
</table>

<h3>Tại sao Robotics khác biệt với Coding?</h3>
<div class="insight-card">
  <div class="insight-number">🔬</div>
  <div class="insight-body">
    <p><strong>Robotics = Physical + Digital</strong>: Con vừa lắp ghép bằng tay vừa lập trình bằng máy tính. Kết quả hiển thị ngay lập tức và rõ ràng — robot chạy hay không chạy là câu trả lời trực tiếp.</p>
    <p><strong>Phù hợp nhất cho:</strong></p>
    <ul>
      <li>Trẻ 4–10 tuổi: còn nhỏ, học tốt nhất qua tay và mắt</li>
      <li>Trẻ thích xây dựng, lắp ghép, tháo ra rồi lắp lại</li>
      <li>Trẻ hiếu động, khó ngồi yên nhìn màn hình</li>
      <li>PH muốn con "chạm vào công nghệ" theo nghĩa đen</li>
    </ul>
    <p><strong>Robotics → Coding:</strong> Sau Năm 2–3 Robotics, con có nền tảng logic mạnh để bước vào Coding (Scratch, Python) với lợi thế đáng kể so với bạn bắt đầu Coding từ đầu.</p>
  </div>
</div>

<h3>Chi tiết từng năm — Script tư vấn cho PH</h3>

<div class="insight-card">
  <div class="insight-number">🧸</div>
  <div class="insight-body">
    <h4>Năm 0 — Kỹ sư Robot nhí (4–6 tuổi): "Con còn quá nhỏ không?"</h4>
    <p><strong>LEGO Spike Essential:</strong> Bộ kit an toàn, thiết kế cho trẻ 4–6 tuổi. Không có mảnh nhỏ nguy hiểm, màu sắc bắt mắt, kết nối kéo thả đơn giản.</p>
    <p><strong>Con học được gì:</strong> Nguyên lý nhân quả bằng tay (nhấn nút → motor quay → bánh xe lăn). Kiên nhẫn: lắp sai → tháo → lắp lại → thành công. Tự tin nói "Con làm được".</p>
    <div class="script-box">
      <em>"4 tuổi là độ tuổi vàng để não bộ tiếp nhận — con học bằng tay, bằng mắt, bằng cả cơ thể. LEGO Spike được thiết kế đặc biệt an toàn cho trẻ 4+ và các mảnh ghép đủ lớn để con không bị nuốt nhầm. Sau mỗi buổi, con về nhà kể 'con làm robot bạch tuộc vẫy chân được' — đó là kỷ niệm tự tin đầu tiên của con."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">🏆</div>
  <div class="insight-body">
    <h4>Năm 3 — Sáng tạo Robot (10+): "Kit VEX IQ có ở đâu không ngoài MindX?"</h4>
    <p><strong>VEX IQ là gì:</strong> Kit thi đấu chính thức của VEX IQ Challenge — giải Robotics K12 uy tín nhất thế giới, với <strong>30,000+ đội từ 80+ quốc gia</strong>. Học viên MindX Năm 3 dùng kit này không phải để học — mà để <em>thi đấu thật</em>.</p>
    <p><strong>Con học được gì:</strong> Lập trình text-based Python/C++. PID controller — nguyên lý của xe tự lái Tesla. Tư duy thi đấu: tối ưu dưới áp lực thời gian.</p>
    <div class="script-box">
      <em>"VEX IQ là bộ kit mà các học sinh trường quốc tế tại Mỹ, Singapore, Nhật Bản đang dùng để thi. Khi con học Năm 3 tại MindX, con đang ở cùng một sân chơi với các bạn đó. Và nếu con muốn, MindX có thể đưa con đi thi VEX IQ cấp quốc gia — đây là thành tích STEM mạnh nhất để đưa vào hồ sơ du học."</em>
    </div>
  </div>
</div>

<h3>MindX Robotics vs Đối thủ</h3>
<table class="compare-table">
  <thead>
    <tr>
      <th>Tiêu chí</th>
      <th>MindX Robotics</th>
      <th>Đối thủ phổ biến</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Độ tuổi bắt đầu</td>
      <td>4 tuổi (Năm 0)</td>
      <td>Thường từ 6–8 tuổi</td>
    </tr>
    <tr>
      <td>Kit quốc tế</td>
      <td>LEGO Spike + VEX GO + VEX IQ</td>
      <td>Nhiều nơi dùng kit nội địa hoặc chỉ 1 loại kit</td>
    </tr>
    <tr>
      <td>Thi đấu quốc tế</td>
      <td>VEX IQ Challenge — 80+ quốc gia</td>
      <td>Một số có thi trong nước</td>
    </tr>
    <tr>
      <td>Lộ trình rõ ràng</td>
      <td>4 năm kết nối sang Coding/AI</td>
      <td>Thường không có bridge sang Coding</td>
    </tr>
    <tr>
      <td>Lớp nhỏ</td>
      <td>6–10 học viên/lớp</td>
      <td>Thường 10–15+</td>
    </tr>
  </tbody>
</table>

<div class="key-takeaway">
  <strong>Key Takeaway:</strong> Khi tư vấn Robotics, nhấn mạnh 3 điểm: (1) HANDS-ON — con được <em>chạm thật</em> vào robot, (2) Kit quốc tế — cùng chuẩn với trường quốc tế toàn cầu, (3) Bridge sang Coding — Robotics không phải đích cuối, là cầu nối sang lập trình nâng cao.
</div>

<div class="practice-exercise">
  <strong>Bài tập:</strong> Phụ huynh có 2 con: con lớn 10 tuổi và con nhỏ 5 tuổi. Cả 2 đều chưa học gì về công nghệ. Bạn sẽ tư vấn chương trình nào cho từng con? Giải thích lý do trong 2 phút.
</div>`,
          quiz: {
            id: "quiz_day2_s3",
            title: "Quiz: Lộ trình Robotics",
            questions: [
              {
                q: "Kit LEGO Spike Essential dùng cho năm nào và độ tuổi nào trong lộ trình Robotics?",
                options: ["Năm 1 — 6 tuổi", "Năm 0 — 4–6 tuổi", "Năm 2 — 8–10 tuổi", "Năm 3 — 10–13 tuổi"],
                correct: 1,
                explanation: "LEGO Spike Essential dùng cho Năm 0 — Kỹ sư Robot nhí (4–6 tuổi). Đây là kit được thiết kế an toàn và phù hợp nhất cho trẻ nhỏ bắt đầu tiếp xúc Robotics."
              },
              {
                q: "VEX IQ Challenge là giải thi đấu Robotics với quy mô như thế nào?",
                options: ["500 đội từ 10 quốc gia", "5,000 đội từ 30 quốc gia", "30,000+ đội từ 80+ quốc gia", "100 đội chỉ tại Việt Nam"],
                correct: 2,
                explanation: "VEX IQ Challenge — 30,000+ đội từ 80+ quốc gia. Đây là điểm bán hàng mạnh nhất của Robotics Năm 3: học viên MindX cùng sân chơi với trường quốc tế toàn cầu."
              },
              {
                q: "Tại sao Robotics phù hợp hơn Coding cho trẻ 4–8 tuổi?",
                options: ["Robotics rẻ hơn Coding", "Robotics học online được, Coding thì không", "Robotics là HANDS-ON — trẻ nhỏ học tốt nhất qua tay và mắt, kết quả (robot chạy hay không) hiển thị ngay", "Robotics không cần giáo viên"],
                correct: 2,
                explanation: "Trẻ 4–8 tuổi học tốt nhất qua trải nghiệm thực tế. Robotics cho con chạm, lắp, nhìn kết quả ngay — phù hợp với giai đoạn phát triển nhận thức cụ thể của trẻ nhỏ."
              },
              {
                q: "Sau khi hoàn thành Robotics Năm 2–3, học viên có thể chuyển sang track nào của MindX?",
                options: ["Chỉ có thể tiếp tục Robotics", "Có thể chuyển sang Coding (Scratch, Python) với lợi thế nền tảng logic mạnh", "Phải học lại từ đầu Art & Design", "Không có đường chuyển sang track khác"],
                correct: 1,
                explanation: "Robotics → Coding là bridge tự nhiên. Sau Robotics, con đã quen với lập trình điều kiện, vòng lặp và debug — bước vào Scratch hoặc Python sẽ nhanh hơn đáng kể so với bạn bắt đầu từ đầu."
              },
              {
                q: "Điểm khác biệt lớn nhất của Robotics MindX so với nhiều đối thủ khác là gì?",
                options: ["Giá rẻ hơn nhiều", "Dùng 3 loại kit quốc tế (LEGO Spike + VEX GO + VEX IQ) theo lộ trình 4 năm kết nối rõ ràng", "Không cần giáo viên, tự học online", "Chỉ học ở nhà không cần đến trung tâm"],
                correct: 1,
                explanation: "Hệ thống 3 kit quốc tế theo lộ trình 4 năm có kết nối sang Coding là USP mạnh nhất. Nhiều đối thủ chỉ dùng 1 loại kit hoặc không có lộ trình dài hạn."
              }
            ]
          }
        },

        /* ---------- Bài 4: Bảng giá & Khuyến mãi ---------- */
        {
          id: "day2_s4",
          title: "Bảng giá & Chính sách khuyến mãi — Xử lý từ chối giá",
          icon: "💰",
          content: `<h3>Hiểu đúng về Học phí MindX</h3>
<p>Học phí là chủ đề nhạy cảm — TVTS cần hiểu rõ cơ cấu giá, chính sách khuyến mãi và đặc biệt là <strong>cách xử lý khi PH nói "đắt quá"</strong>. Mục tiêu không phải biện hộ cho giá — mà giúp PH thấy <em>giá trị</em> xứng đáng với đầu tư.</p>

<h3>Cơ cấu học phí tham khảo (theo gói lộ trình Bảo trợ)</h3>
<div class="insight-card">
  <div class="insight-number">📋</div>
  <div class="insight-body">
    <p><strong>Nguyên tắc quan trọng:</strong> MindX không công bố học phí theo buổi lẻ — luôn tư vấn theo <em>gói lộ trình</em> để phụ huynh thấy giá trị tổng thể dài hạn. Mức giá cụ thể tham khảo bảng học phí lộ trình Bảo trợ (xin từ manager).</p>
    <table class="compare-table">
      <thead>
        <tr>
          <th>Track</th>
          <th>Gói ngắn nhất</th>
          <th>Gói năm đầy đủ</th>
          <th>Gói lộ trình dài hạn (ưu đãi)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Coding</strong> (Scratch/Game Creator)</td>
          <td>Gói 1 học kỳ (~3 tháng)</td>
          <td>Gói 1 năm (~12 tháng)</td>
          <td>Gói 3–5 năm (tiết kiệm 15–25%)</td>
        </tr>
        <tr>
          <td><strong>Robotics</strong></td>
          <td>Gói 1 học kỳ</td>
          <td>Gói 1 năm</td>
          <td>Gói lộ trình 4 năm (tiết kiệm ~20%)</td>
        </tr>
        <tr>
          <td><strong>Art & Design</strong></td>
          <td>Gói 1 học kỳ</td>
          <td>Gói 1 năm</td>
          <td>Gói lộ trình 7 năm (tiết kiệm ~25%)</td>
        </tr>
      </tbody>
    </table>
    <p><em>* Giá cụ thể theo từng thời điểm và chương trình khuyến mãi — luôn kiểm tra với manager trước khi tư vấn.</em></p>
  </div>
</div>

<h3>Chính sách khuyến mãi thường gặp</h3>
<div class="insight-card">
  <div class="insight-number">🎁</div>
  <div class="insight-body">
    <ul>
      <li><strong>Early Bird:</strong> Đăng ký trước ngày khai giảng từ 7–14 ngày — giảm 5–10% hoặc tặng học kỳ bổ trợ. Dùng để tạo urgency: "Ưu đãi chỉ còn X ngày."</li>
      <li><strong>Referral (Giới thiệu bạn):</strong> PH giới thiệu người mới đăng ký — cả hai được ưu đãi (giảm học phí hoặc tặng buổi học thêm). Cách thu hút khách hàng tốt nhất và rẻ nhất.</li>
      <li><strong>Sibling (Anh chị em):</strong> Gia đình có 2 con trở lên đăng ký — con thứ 2 được giảm 10–15%. Áp dụng cùng track hoặc khác track.</li>
      <li><strong>Combo Track:</strong> Đăng ký 2 track cùng lúc (VD: Coding + Art) — được ưu đãi combo. Dành cho gia đình muốn con phát triển toàn diện.</li>
      <li><strong>KM đặc biệt theo mùa:</strong> Tết, khai giảng, hè — thường có ưu đãi lớn nhất trong năm. TVTS cần theo dõi thông báo nội bộ để nắm bắt kịp thời.</li>
    </ul>
  </div>
</div>

<h3>5 Cách xử lý khi PH nói "Học phí đắt quá"</h3>

<div class="insight-card">
  <div class="insight-number">1</div>
  <div class="insight-body">
    <h4>Phương pháp: Phân tích chi phí theo ngày/buổi</h4>
    <p>Chia nhỏ học phí ra đơn vị nhỏ nhất để PH thấy dễ chịu hơn.</p>
    <div class="script-box">
      <em>"Anh/chị biết không, nếu tính ra mỗi buổi học 90 phút tại MindX, mức học phí chỉ tương đương một buổi học thêm toán tại gia — nhưng con được học với giáo viên chuyên nghiệp, trong môi trường lab đầy đủ thiết bị, và có lộ trình kết nối rõ ràng theo năm. Nhiều gia đình nói 'học MindX thay được 2–3 lớp học thêm khác vì con tập trung và hứng thú hơn nhiều'."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">2</div>
  <div class="insight-body">
    <h4>Phương pháp: ROI dài hạn — So sánh đầu tư với giá trị thu về</h4>
    <p>Giúp PH nghĩ theo góc độ nhà đầu tư, không phải người tiêu dùng.</p>
    <div class="script-box">
      <em>"Anh/chị đang đầu tư X triệu/năm. Nếu sau 5 năm con có kỹ năng đủ để thực tập với mức lương 8–12 triệu/tháng, thì chỉ cần 3–4 tháng đi làm con đã hoàn vốn toàn bộ chi phí học tập. Và đó là chưa kể portfolio giúp con vào được trường đại học tốt hơn hoặc nhận học bổng."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">3</div>
  <div class="insight-body">
    <h4>Phương pháp: So sánh với chi phí thay thế</h4>
    <p>Giúp PH thấy MindX không đắt so với các lựa chọn tương đương.</p>
    <div class="script-box">
      <em>"Nếu anh/chị thuê gia sư IT về dạy con riêng với cùng nội dung, chi phí sẽ cao hơn nhiều mà lại không có môi trường học nhóm, không có sân chơi thi đấu, không có hệ sinh thái đối tác. Còn nếu anh/chị cho con học theo nhóm nhỏ 6–10 bạn tại MindX, con vừa học được kỹ năng vừa phát triển được kỹ năng làm việc nhóm và kết bạn cùng chí hướng."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">4</div>
  <div class="insight-body">
    <h4>Phương pháp: Đề xuất gói linh hoạt để giảm rào cản ban đầu</h4>
    <p>Không phải lúc nào cũng ép PH mua gói lớn ngay — bắt đầu nhỏ rồi mở rộng cũng là chiến lược tốt.</p>
    <div class="script-box">
      <em>"Mình hiểu là học phí là một khoản đầu tư đáng cân nhắc. Để anh/chị thấy giá trị thật sự trước khi quyết định dài hạn, mình đề xuất anh/chị thử gói 1 học kỳ đầu — nếu con thích và thấy tiến bộ, anh/chị chuyển sang gói năm sẽ được ưu đãi. Nếu không phù hợp, không ai ép anh/chị tiếp tục. Fair không ạ?"</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">5</div>
  <div class="insight-body">
    <h4>Phương pháp: Feel-Felt-Found (Cảm nhận — Đã từng — Nhận ra)</h4>
    <p>Đồng cảm trước, dẫn dắt sau — kỹ thuật kinh điển trong xử lý từ chối giá.</p>
    <div class="script-box">
      <em>"Mình <strong>hiểu</strong> anh/chị cảm thấy học phí cao [Feel]. Thực ra nhiều phụ huynh khi mới tìm hiểu cũng <strong>có cùng cảm nhận</strong> đó [Felt]. Nhưng sau khi con học được 3–6 tháng, đa số phụ huynh <strong>nhận ra</strong> rằng đây là khoản đầu tư xứng đáng nhất trong năm — vì đây là kỹ năng con giữ cả đời, không mất đi như điểm thi hay học thuộc lòng [Found]."</em>
    </div>
  </div>
</div>

<div class="key-takeaway">
  <strong>Key Takeaway:</strong> Khi PH nói "đắt", họ thực ra đang nói "tôi chưa thấy giá trị xứng đáng." Công việc của TVTS không phải giảm giá — mà <em>tăng giá trị cảm nhận</em>. Hãy giúp PH hiểu đây là đầu tư dài hạn, không phải tiêu dùng ngắn hạn.
</div>

<div class="practice-exercise">
  <strong>Bài tập role-play:</strong> Partner A đóng vai PH nói: "Chỗ X gần nhà tôi học phí chỉ bằng 60% của MindX, tại sao tôi phải chọn MindX?" Partner B đóng vai TVTS xử lý trong 3 phút. Sau đó đổi vai. Ghi lại 3 điểm mạnh và 1 điểm cần cải thiện.
</div>`,
          quiz: {
            id: "quiz_day2_s4",
            title: "Quiz: Học phí & Xử lý từ chối giá",
            questions: [
              {
                q: "Khi phụ huynh hỏi giá học, TVTS nên tư vấn theo cách nào?",
                options: ["Báo giá buổi lẻ để nghe rẻ hơn", "Tư vấn theo gói lộ trình để PH thấy giá trị tổng thể dài hạn", "Chỉ nói giá gói rẻ nhất để không sốc", "Gửi bảng giá chi tiết qua Zalo và chờ phản hồi"],
                correct: 1,
                explanation: "Tư vấn theo gói lộ trình giúp PH nhìn nhận học phí như đầu tư dài hạn, không phải chi phí đơn lẻ. Đây là cách định giá hiệu quả nhất."
              },
              {
                q: "Kỹ thuật Feel-Felt-Found có nghĩa là gì?",
                options: ["Cảm nhận — Đã từng — Nhận ra: đồng cảm trước, dẫn dắt sau", "Cảm xúc — Sự kiện — Phát hiện: kể chuyện theo trình tự", "Nhận ra — Cảm thấy — Tìm kiếm: phân tích vấn đề", "Tìm hiểu — Thực tế — Kết quả: trình bày logic"],
                correct: 0,
                explanation: "Feel (đồng cảm với PH) → Felt (có người khác cũng vậy — normalize) → Found (nhưng họ nhận ra giá trị). Kỹ thuật này giúp xử lý từ chối mà không đối đầu."
              },
              {
                q: "Chính sách Referral (giới thiệu bạn) mang lại lợi ích gì?",
                options: ["Chỉ lợi cho người mới đăng ký", "Cả người giới thiệu và người được giới thiệu đều được ưu đãi", "Chỉ áp dụng cho track Coding", "Không áp dụng cho gia đình đang học"],
                correct: 1,
                explanation: "Cả hai bên đều được ưu đãi — đây là lý do Referral là kênh marketing hiệu quả nhất và rẻ nhất. TVTS nên chủ động nhắc PH hài lòng về chính sách này."
              },
              {
                q: "Phụ huynh nói: 'Trung tâm X gần nhà rẻ hơn 40%'. TVTS nên phản hồi theo hướng nào?",
                options: ["Nói xấu trung tâm X", "Đồng ý giảm giá để cạnh tranh", "Phân tích sự khác biệt về giá trị: kit quốc tế, lộ trình dài hạn, bảo trợ việc làm — giúp PH hiểu đang so sánh 2 thứ khác nhau", "Bỏ qua và tiếp tục giới thiệu sản phẩm"],
                correct: 2,
                explanation: "Đừng so sánh giá — so sánh giá trị. Cạnh tranh trên giá là cuộc chiến không ai thắng. Cạnh tranh trên giá trị (kit quốc tế, lộ trình, bảo trợ) là nơi MindX mạnh nhất."
              },
              {
                q: "Khi PH ngần ngại vì học phí, đề xuất nào giúp giảm rào cản ban đầu TỐT NHẤT?",
                options: ["Giảm giá 30% ngay lập tức", "Đề xuất gói 1 học kỳ thử — nếu phù hợp mới chuyển sang gói năm với ưu đãi", "Nói học phí sắp tăng để tạo urgency", "Cho học thử miễn phí cả tháng"],
                correct: 1,
                explanation: "Gói 1 học kỳ thử giảm rủi ro cho PH, để con có thời gian xác nhận phù hợp. Đây là cách xây dựng niềm tin trước khi cam kết dài hạn — và thường dẫn đến retention cao hơn."
              }
            ]
          }
        }
      ]
    },

    /* ==================== DAY 3: SELLING SKILLS ==================== */
    {
      id: "day3",
      day: 3,
      title: "SELLING SKILLS",
      subtitle: "Kỹ năng bán hàng thực chiến",
      icon: "🎯",
      color: "#276749",
      sections: [

        /* ---------- Bài 1: Quy trình Sale 7 bước ---------- */
        {
          id: "day3_s1",
          title: "Quy trình Sale 7 bước — Từ Lead đến Bàn giao CS",
          icon: "🔄",
          content: `<h3>Quy trình Sale 7 bước của MindX K12</h3>
<p>Quy trình bán hàng không phải "thuyết phục người không muốn mua" — đó là <em>dẫn dắt người phù hợp đến đúng quyết định vào đúng thời điểm</em>. 7 bước dưới đây là khung hành động bạn thực hiện với mỗi lead.</p>

<div class="insight-card">
  <div class="insight-number">1</div>
  <div class="insight-body">
    <h4>Bước 1: Tiếp nhận Lead — Trong vòng 30 phút</h4>
    <p><strong>Mục tiêu:</strong> Xác nhận lead, phân loại nguồn và chất lượng, ghi vào CRM.</p>
    <p><strong>Timeline:</strong> Phản hồi trong <strong>30 phút đầu tiên</strong> — nghiên cứu cho thấy tỷ lệ chuyển đổi giảm 5 lần nếu phản hồi sau 1 giờ.</p>
    <p><strong>KPI:</strong> 100% lead được phản hồi trong 30 phút (giờ hành chính).</p>
    <p><strong>Lỗi phổ biến:</strong> Nhận lead xong để đó vì đang bận — lead nguội, PH liên hệ chỗ khác.</p>
    <div class="script-box">
      <strong>Phản hồi nhanh qua Zalo/Facebook:</strong><br>
      <em>"Chào anh/chị [tên], MindX Technology School xin chào! Cảm ơn anh/chị đã quan tâm đến chương trình học của MindX. Mình là [tên], TVTS tại cơ sở [X]. Anh/chị tiện cho mình xin thêm thông tin về con để mình tư vấn đúng chương trình nhất ạ?"</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">2</div>
  <div class="insight-body">
    <h4>Bước 2: Cuộc gọi đầu tiên — Trong ngày</h4>
    <p><strong>Mục tiêu:</strong> Xây dựng rapport, xác định nhu cầu, đặt lịch tư vấn trực tiếp hoặc trial class.</p>
    <p><strong>Timeline:</strong> Gọi trong ngày nhận lead. Thời điểm tốt nhất: 9–11h sáng và 7–9h tối.</p>
    <p><strong>KPI:</strong> Kết thúc cuộc gọi với ít nhất một trong 3 kết quả: (a) đặt lịch tư vấn trực tiếp, (b) đặt lịch trial class, (c) chốt được ngày gọi lại cụ thể.</p>
    <p><strong>Lỗi phổ biến:</strong> Nói quá nhiều về sản phẩm, không hỏi đủ câu hỏi để hiểu nhu cầu.</p>
    <div class="script-box">
      <strong>Mở đầu cuộc gọi:</strong><br>
      <em>"Chào anh/chị [tên], mình [tên], TVTS MindX cơ sở [X] gọi lại theo thông tin anh/chị để lại. Anh/chị có tiện nói chuyện khoảng 5–10 phút không ạ? Mình muốn tìm hiểu một chút về con để tư vấn đúng chương trình cho gia đình mình."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">3</div>
  <div class="insight-body">
    <h4>Bước 3: Booking — Đặt lịch trial/tư vấn</h4>
    <p><strong>Mục tiêu:</strong> Chốt ngày giờ cụ thể cho buổi trial class hoặc tư vấn trực tiếp tại trung tâm.</p>
    <p><strong>Timeline:</strong> Booking trong vòng 48 giờ sau cuộc gọi đầu — càng xa càng dễ bị hủy.</p>
    <p><strong>KPI:</strong> Tỷ lệ show-up (PH đến đúng hẹn) > 70%. Xác nhận lại 24h trước bằng Zalo.</p>
    <p><strong>Lỗi phổ biến:</strong> Booking mà không xác nhận lại → PH quên hoặc đổi ý.</p>
    <div class="script-box">
      <strong>Chốt lịch:</strong><br>
      <em>"Anh/chị thấy thứ [X] chiều [Y] giờ có tiện không? Chúng mình có buổi trial class cho con — con được làm robot/code game/vẽ thử miễn phí, anh/chị cũng được tư vấn lộ trình cụ thể tại chỗ. Khoảng 90 phút thôi ạ."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">4</div>
  <div class="insight-body">
    <h4>Bước 4: Buổi tư vấn — 45–90 phút</h4>
    <p><strong>Mục tiêu:</strong> Hiểu sâu nhu cầu, trình bày đúng giải pháp, xử lý từ chối, đề xuất đăng ký.</p>
    <p><strong>Timeline:</strong> 45 phút chuẩn (15 phút hỏi nhu cầu + 20 phút trình bày + 10 phút xử lý từ chối/chốt).</p>
    <p><strong>KPI:</strong> Tỷ lệ close ngay tại buổi tư vấn > 40%. Tỷ lệ có kết quả rõ (close hoặc follow-up có hẹn cụ thể) > 80%.</p>
    <p><strong>Lỗi phổ biến:</strong> Pitch quá nhiều, không lắng nghe; không dẫn dắt đến quyết định cuối buổi.</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">5</div>
  <div class="insight-body">
    <h4>Bước 5: Follow-up — 24h–72h sau tư vấn</h4>
    <p><strong>Mục tiêu:</strong> Giữ kết nối, cung cấp thêm thông tin, xử lý từ chối còn lại.</p>
    <p><strong>Timeline:</strong> Follow-up đầu tiên trong 24h. Nếu chưa quyết định: tiếp tục follow-up sau 3 ngày, 1 tuần, 2 tuần.</p>
    <p><strong>KPI:</strong> Không bỏ lead nào sau 1 lần từ chối — theo dõi ít nhất 30 ngày.</p>
    <p><strong>Lỗi phổ biến:</strong> Chỉ hỏi "Anh/chị đã quyết định chưa?" — không cung cấp giá trị mới.</p>
    <div class="script-box">
      <strong>Follow-up có giá trị:</strong><br>
      <em>"Chào anh/chị [tên], mình [tên] MindX. Mình vừa thấy có bài viết chia sẻ về bạn học viên 12 tuổi của MindX vừa giành giải VEX IQ quốc gia — câu chuyện hay quá, mình nghĩ đến con anh/chị vì con cũng đang ở lứa tuổi này. Mình gửi anh/chị đọc nhé?"</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">6</div>
  <div class="insight-body">
    <h4>Bước 6: Close — Chốt hợp đồng</h4>
    <p><strong>Mục tiêu:</strong> PH điền form đăng ký, thanh toán, nhận thông tin lớp học.</p>
    <p><strong>Timeline:</strong> Khi PH đã sẵn sàng — đừng để họ "về suy nghĩ thêm" nếu không có lý do cụ thể.</p>
    <p><strong>KPI:</strong> Tỷ lệ close toàn pipeline > 25%.</p>
    <p><strong>Lỗi phổ biến:</strong> Không dám hỏi close; để PH "về suy nghĩ" mà không chốt next step.</p>
    <div class="script-box">
      <strong>Câu hỏi close đơn giản và hiệu quả:</strong><br>
      <em>"Anh/chị thấy lộ trình này phù hợp với con chưa? Nếu phù hợp, mình có thể hoàn tất đăng ký hôm nay để giữ chỗ cho con — lớp sắp khai giảng và thường chỉ còn 2–3 chỗ."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">7</div>
  <div class="insight-body">
    <h4>Bước 7: Bàn giao CS — Sau khi close</h4>
    <p><strong>Mục tiêu:</strong> Giới thiệu học viên mới cho Customer Success team, đảm bảo trải nghiệm onboarding tốt.</p>
    <p><strong>Timeline:</strong> Bàn giao trong 24h sau khi close — trước ngày khai giảng.</p>
    <p><strong>KPI:</strong> 100% học viên mới có CS phụ trách rõ ràng.</p>
    <p><strong>Lỗi phổ biến:</strong> Sau khi close thì "quên" học viên — PH cảm thấy bị bỏ rơi sau khi đóng tiền.</p>
    <p><strong>Tại sao quan trọng:</strong> PH hài lòng sau bước 7 sẽ giới thiệu bạn bè và đăng ký năm tiếp theo — đây là nguồn khách hàng tốt nhất.</p>
  </div>
</div>

<h3>Tổng hợp KPI quy trình 7 bước</h3>
<table class="compare-table">
  <thead><tr><th>Bước</th><th>Thời hạn</th><th>KPI mục tiêu</th><th>Lỗi cần tránh</th></tr></thead>
  <tbody>
    <tr><td>1. Tiếp nhận lead</td><td>30 phút</td><td>100% phản hồi trong giờ hành chính</td><td>Để lead nguội</td></tr>
    <tr><td>2. Cuộc gọi đầu</td><td>Trong ngày</td><td>Có kết quả rõ (lịch/next step)</td><td>Pitch quá nhiều</td></tr>
    <tr><td>3. Booking</td><td>48h sau gọi</td><td>Show-up rate > 70%</td><td>Không xác nhận lại</td></tr>
    <tr><td>4. Tư vấn</td><td>45–90 phút</td><td>Close rate tại buổi > 40%</td><td>Không dẫn đến quyết định</td></tr>
    <tr><td>5. Follow-up</td><td>24h–30 ngày</td><td>Không bỏ lead sau 1 từ chối</td><td>Chỉ hỏi "quyết định chưa"</td></tr>
    <tr><td>6. Close</td><td>Khi sẵn sàng</td><td>Pipeline close rate > 25%</td><td>Không dám hỏi close</td></tr>
    <tr><td>7. Bàn giao CS</td><td>24h sau close</td><td>100% có CS phụ trách</td><td>Quên học viên sau close</td></tr>
  </tbody>
</table>

<div class="key-takeaway">
  <strong>Key Takeaway:</strong> Quy trình 7 bước không phải công thức cứng — đó là framework giúp bạn không bỏ sót bước nào quan trọng. Hai bước mà TVTS mới thường yếu nhất là: Bước 5 (Follow-up có giá trị) và Bước 6 (Dám hỏi close). Tập trung vào hai bước này sẽ cải thiện kết quả nhanh nhất.
</div>

<div class="practice-exercise">
  <strong>Bài tập:</strong> Vẽ pipeline của 5 lead bạn đang theo dõi (nếu chưa có, dùng 5 kịch bản giả định). Với mỗi lead, xác định họ đang ở bước nào và next action cụ thể là gì. Nộp cho mentor.
</div>`,
          quiz: {
            id: "quiz_day3_s1",
            title: "Quiz: Quy trình Sale 7 bước",
            questions: [
              {
                q: "Thời gian tối đa để phản hồi lead mới (trong giờ hành chính) là bao lâu?",
                options: ["1 giờ", "30 phút", "2 giờ", "Trong ngày"],
                correct: 1,
                explanation: "30 phút — nghiên cứu cho thấy tỷ lệ chuyển đổi giảm 5 lần nếu phản hồi sau 1 giờ. Tốc độ là lợi thế cạnh tranh trong bán hàng."
              },
              {
                q: "Kết quả tối thiểu cần đạt được sau cuộc gọi đầu tiên với PH là gì?",
                options: ["PH đã đồng ý đăng ký", "Có ít nhất 1 trong 3: đặt lịch tư vấn, lịch trial, hoặc ngày gọi lại cụ thể", "PH biết hết về tất cả sản phẩm MindX", "Thu thập đầy đủ thông tin vào CRM"],
                correct: 1,
                explanation: "Next step cụ thể là mục tiêu tối thiểu — nếu kết thúc cuộc gọi mà không có hành động tiếp theo được chốt, lead sẽ nguội và khó tiếp cận lại."
              },
              {
                q: "Tỷ lệ show-up (PH đến đúng hẹn) mục tiêu sau khi booking là bao nhiêu?",
                options: ["> 50%", "> 60%", "> 70%", "> 90%"],
                correct: 2,
                explanation: "> 70% — để đạt được tỷ lệ này, cần xác nhận lại lịch hẹn 24h trước bằng Zalo/gọi điện, và cung cấp đủ thông tin địa điểm."
              },
              {
                q: "Khi follow-up PH sau buổi tư vấn chưa quyết định, TVTS nên làm gì?",
                options: ["Hỏi thẳng: 'Anh/chị đã quyết định chưa?'", "Giảm giá ngay để thúc đẩy quyết định", "Cung cấp thêm giá trị mới: case study, thông tin liên quan, mời trải nghiệm bổ sung", "Không liên hệ nữa để tránh làm phiền"],
                correct: 2,
                explanation: "Mỗi lần follow-up phải mang giá trị mới — câu chuyện học viên, thông tin liên quan, hoặc mời trải nghiệm. Không phải nhắc quyết định."
              },
              {
                q: "Tại sao bước Bàn giao CS (Bước 7) quan trọng dù TVTS đã close xong?",
                options: ["Đây là yêu cầu pháp lý của MindX", "PH hài lòng sau onboarding sẽ giới thiệu bạn bè và đăng ký năm tiếp theo — nguồn khách hàng tốt nhất", "Chỉ để hoàn tất thủ tục hành chính", "CS team cần dữ liệu để ra lương cho TVTS"],
                correct: 1,
                explanation: "Trải nghiệm onboarding tốt là nền tảng của LTV (lifetime value) cao. PH giới thiệu bạn bè mà không cần TVTS chạy ads hay chi marketing."
              }
            ]
          }
        },

        /* ---------- Bài 2: Kịch bản tư vấn theo Flow ---------- */
        {
          id: "day3_s2",
          title: "Kịch bản tư vấn theo Flow — SPIN Selling & 3 Persona",
          icon: "📋",
          content: `<h3>Framework SPIN Selling ứng dụng cho MindX K12</h3>
<p>SPIN Selling là phương pháp bán hàng được nghiên cứu bởi Neil Rackham — dựa trên phân tích 35,000 cuộc gặp sales tại 23 quốc gia. Được điều chỉnh cho bối cảnh tư vấn giáo dục MindX:</p>

<div class="insight-card">
  <div class="insight-number">🔄</div>
  <div class="insight-body">
    <table class="compare-table">
      <thead><tr><th>Loại câu hỏi</th><th>Mục đích</th><th>Ví dụ với MindX</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>S — Situation</strong> (Hoàn cảnh)</td>
          <td>Hiểu bức tranh tổng thể của gia đình</td>
          <td>"Con đang học lớp mấy? Có anh/chị không? Anh/chị đang tìm trung tâm từ bao giờ?"</td>
        </tr>
        <tr>
          <td><strong>P — Problem</strong> (Vấn đề)</td>
          <td>Khai thác nỗi đau cụ thể</td>
          <td>"Anh/chị thấy con có điểm nào cần phát triển thêm không? Con hay gặp khó khăn gì trong học tập?"</td>
        </tr>
        <tr>
          <td><strong>I — Implication</strong> (Hậu quả)</td>
          <td>Làm PH thấy vấn đề nghiêm trọng hơn</td>
          <td>"Nếu con tiếp tục không có kỹ năng số, anh/chị nghĩ điều gì sẽ xảy ra khi con vào đại học/thị trường lao động?"</td>
        </tr>
        <tr>
          <td><strong>N — Need-Payoff</strong> (Lợi ích)</td>
          <td>Để PH tự nói ra giá trị của giải pháp</td>
          <td>"Nếu có một chương trình giúp con phát triển đúng điểm đó, anh/chị thấy có ích không? Điều đó ảnh hưởng thế nào đến con?"</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<h3>Kịch bản 1: Phụ huynh quan tâm Coding cho con</h3>
<div class="insight-card">
  <div class="insight-number">📱</div>
  <div class="insight-body">
    <p><strong>Persona:</strong> Chị Hương, 36 tuổi, nhân viên văn phòng, con trai 10 tuổi đang học lớp 4, thích Roblox và YouTube.</p>
    <p><strong>Kênh tư vấn:</strong> Tư vấn trực tiếp tại trung tâm</p>
    <hr>
    <p><strong>[Bước Situation — 5 phút đầu]</strong></p>
    <div class="script-box">
      <em>TVTS: "Chào chị Hương, cảm ơn chị đã đến thăm MindX. Mình là [tên]. Chị cho mình hỏi nhanh — em [tên con] đang học lớp mấy ạ?"</em><br>
      <em>PH: "Lớp 4, 10 tuổi."</em><br>
      <em>TVTS: "Ở nhà em thường thích làm gì chị? Có hay chơi game không ạ?"</em><br>
      <em>PH: "Ừ, nó mê Roblox lắm, ngày nào cũng đòi chơi."</em>
    </div>
    <p><strong>[Bước Problem — Khai thác nỗi đau]</strong></p>
    <div class="script-box">
      <em>TVTS: "Chị thấy việc em mê Roblox có ảnh hưởng gì đến học tập không ạ? Hay chị lo gì nhất về điều này?"</em><br>
      <em>PH: "Lo chứ, thấy bạn bè đi học thêm hết mà nó thì cứ dán mắt vào game."</em>
    </div>
    <p><strong>[Bước Implication — Tăng tầm quan trọng]</strong></p>
    <div class="script-box">
      <em>TVTS: "Mình hiểu lo lắng đó của chị. Chị có nghĩ đến không — nếu đến lớp 7-8 mà em vẫn chưa có kỹ năng số nào thực chất, trong khi bạn bè đã biết lập trình, thiết kế — sẽ thế nào khi thi vào trường cấp 3 tốt hoặc sau này xin việc?"</em>
    </div>
    <p><strong>[Bước Need-Payoff — Kéo PH vào giải pháp]</strong></p>
    <div class="script-box">
      <em>TVTS: "Nếu có cách chuyển niềm đam mê Roblox của em thành kỹ năng thật — em học làm game thay vì chỉ chơi game — chị thấy điều đó có phù hợp không? Em sẽ không mất đi điểm thích của mình, mà còn phát triển thêm được kỹ năng thật sự có giá trị."</em>
    </div>
    <p><strong>[Trình bày giải pháp]</strong></p>
    <div class="script-box">
      <em>TVTS: "Với em 10 tuổi đang thích game, mình nghĩ Game Creator là phù hợp nhất. Chị muốn xem demo lớp học thật không — mình dẫn chị qua phòng lab ngay bây giờ được ạ?"</em>
    </div>
  </div>
</div>

<h3>Kịch bản 2: Phụ huynh muốn con "bớt nghiện game"</h3>
<div class="insight-card">
  <div class="insight-number">🎮</div>
  <div class="insight-body">
    <p><strong>Persona:</strong> Anh Minh, 40 tuổi, kinh doanh, con gái 12 tuổi học lớp 6, ngày chơi điện thoại 5-6 tiếng, thành tích học sa sút.</p>
    <p><strong>Kênh tư vấn:</strong> Qua điện thoại (follow-up sau khi điền form)</p>
    <hr>
    <div class="script-box">
      <em>TVTS: "Chào anh Minh, mình [tên] từ MindX gọi lại theo thông tin anh để lại. Anh tiện nói chuyện 5 phút không ạ?"</em><br>
      <em>PH: "Được, mình đang hỏi về khóa Coding cho con."</em><br>
      <em>TVTS: "Anh chia sẻ thêm được không — con đang gặp vấn đề gì khiến anh tìm hiểu lúc này ạ?"</em><br>
      <em>PH: "Nó chơi điện thoại suốt, mình cấm thì khóc, không cấm thì học kém. Tôi nghe nói học code thì bớt nghiện game."</em><br>
      <em>TVTS: "Anh nghe đúng rồi. Khi học lập trình, các bạn chuyển từ 'tiêu thụ' sang 'sáng tạo' — hiểu cơ chế bên trong của game làm giảm sức hút của nó. Nhưng quan trọng hơn, con sẽ có sản phẩm của mình: game con tự làm — đây mới là thứ gây hứng thú dài hạn. Anh muốn mình tư vấn cụ thể hơn qua buổi gặp trực tiếp không ạ? Mình có thể xếp lịch linh hoạt theo anh."</em>
    </div>
  </div>
</div>

<h3>Kịch bản 3: Phụ huynh đang so sánh nhiều trường</h3>
<div class="insight-card">
  <div class="insight-number">⚖️</div>
  <div class="insight-body">
    <p><strong>Persona:</strong> Chị Lan, 38 tuổi, giáo viên, con trai 13 tuổi, đã xem 3 trung tâm khác nhau, rất kỹ tính.</p>
    <p><strong>Kênh tư vấn:</strong> Tư vấn trực tiếp + Zalo</p>
    <hr>
    <div class="script-box">
      <em>PH: "Tôi đã xem qua Teky và [X], tôi muốn so sánh với MindX trước khi quyết định."</em><br>
      <em>TVTS: "Chị kỹ tính như vậy là hoàn toàn đúng — đây là khoản đầu tư dài hạn cho con. Mình không cần chị chọn MindX ngay hôm nay — mình chỉ muốn đảm bảo chị có đủ thông tin để chọn đúng. Chị đã xem chỗ kia và thấy điểm nào chị chưa thỏa mãn chưa ạ?"</em><br>
      <em>[Lắng nghe PH nêu điểm chưa hài lòng với đối thủ]</em><br>
      <em>TVTS: "Điểm anh/chị vừa nêu — [lặp lại điểm PH nói] — là điểm MindX đặc biệt chú trọng. Cụ thể là... [kết nối với USP của MindX]. Chị có muốn thử một buổi trial miễn phí để tự trải nghiệm trước khi quyết định không ạ?"</em>
    </div>
    <p><strong>Lưu ý quan trọng:</strong> KHÔNG bao giờ nói xấu đối thủ trực tiếp. Thay vào đó, đặt câu hỏi để PH tự nhận ra điểm yếu của đối thủ. MindX thắng bằng giá trị — không phải bằng cách hạ thấp người khác.</p>
  </div>
</div>

<h3>Sự khác biệt: Điện thoại vs Trực tiếp vs Zalo</h3>
<table class="compare-table">
  <thead><tr><th>Kênh</th><th>Ưu điểm</th><th>Hạn chế</th><th>Best practice</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>Điện thoại</strong></td>
      <td>Nhanh, tiện, có thể gọi bất cứ lúc nào</td>
      <td>Không thấy ngôn ngữ cơ thể, dễ bị từ chối nhanh</td>
      <td>Giới hạn dưới 10 phút; luôn có next step cụ thể</td>
    </tr>
    <tr>
      <td><strong>Trực tiếp</strong></td>
      <td>Tỷ lệ close cao nhất; có thể demo, tour trung tâm</td>
      <td>Tốn thời gian PH; phải thuyết phục PH đến</td>
      <td>Chuẩn bị phòng, demo, và checklist tư vấn trước</td>
    </tr>
    <tr>
      <td><strong>Zalo</strong></td>
      <td>PH đọc khi tiện; có thể gửi hình, link, video</td>
      <td>Khó tạo cảm xúc; dễ bị bỏ qua</td>
      <td>Gửi content giá trị (case study, video), không chỉ text</td>
    </tr>
  </tbody>
</table>

<div class="key-takeaway">
  <strong>Key Takeaway:</strong> SPIN Selling không phải công thức — là tư duy. Trước mỗi cuộc tư vấn, chuẩn bị ít nhất 2 câu hỏi cho mỗi loại SPIN. Người hỏi tốt hơn là người nói hay. Mục tiêu: PH tự nói ra vấn đề của họ và tự nhận ra giải pháp MindX phù hợp.
</div>

<div class="practice-exercise">
  <strong>Bài tập:</strong> Với persona của bạn (chọn 1 trong 3 kịch bản trên), viết đầy đủ kịch bản tư vấn theo SPIN cho kênh bạn thích. Bao gồm ít nhất 2 câu hỏi cho mỗi loại S-P-I-N. Luyện tập với đồng nghiệp trong 10 phút.
</div>`,
          quiz: {
            id: "quiz_day3_s2",
            title: "Quiz: Kịch bản tư vấn SPIN",
            questions: [
              {
                q: "Trong SPIN Selling, câu hỏi 'Implication' (I) có mục đích gì?",
                options: ["Hiểu hoàn cảnh gia đình phụ huynh", "Khai thác vấn đề con gặp phải", "Giúp PH thấy hậu quả nghiêm trọng nếu không giải quyết vấn đề", "Dẫn dắt PH đến quyết định mua"],
                correct: 2,
                explanation: "Implication tăng tầm quan trọng của vấn đề trong tâm trí PH — giúp họ thấy 'không hành động bây giờ' là sai lầm đắt giá."
              },
              {
                q: "Khi PH nói 'Tôi đã xem 3 chỗ khác rồi', TVTS nên phản hồi thế nào?",
                options: ["Nói ngay các ưu điểm của MindX so với đối thủ", "Nói xấu đối thủ để PH thấy MindX tốt hơn", "Đặt câu hỏi để hiểu PH còn điểm gì chưa thỏa mãn, rồi kết nối với USP của MindX", "Giảm giá ngay để cạnh tranh"],
                correct: 2,
                explanation: "Đặt câu hỏi để PH tự nhận ra điểm yếu của đối thủ — hiệu quả hơn nhiều so với nói xấu trực tiếp. TVTS không bao giờ nói xấu đối thủ."
              },
              {
                q: "Kênh tư vấn nào có tỷ lệ close cao nhất?",
                options: ["Zalo — tiện nhất cho PH", "Điện thoại — nhanh nhất", "Trực tiếp tại trung tâm", "Email — chuyên nghiệp nhất"],
                correct: 2,
                explanation: "Trực tiếp tại trung tâm có tỷ lệ close cao nhất vì TVTS có thể demo, tour phòng học, tạo cảm xúc thật sự và xử lý từ chối ngay tại chỗ."
              },
              {
                q: "Câu hỏi 'Need-Payoff' (N) trong SPIN có mục đích gì?",
                options: ["Hỏi PH có cần báo giá không", "Để PH TỰ NÓI RA giá trị của giải pháp — họ thuyết phục bản thân thay vì TVTS thuyết phục", "Xác nhận lại vấn đề một lần nữa", "Chốt hợp đồng ngay"],
                correct: 1,
                explanation: "Need-Payoff là bước tinh tế nhất của SPIN — khi PH tự nói ra 'nếu có giải pháp như vậy thì tốt lắm', họ đã tự thuyết phục bản thân. TVTS chỉ cần xác nhận và dẫn đến hành động."
              },
              {
                q: "Khi tư vấn qua Zalo, loại nội dung nào hiệu quả nhất để gửi cho PH?",
                options: ["Chỉ gửi text mô tả sản phẩm", "Gửi bảng giá chi tiết ngay lập tức", "Gửi content có giá trị: case study học viên, video demo lớp học, thông tin liên quan đến nhu cầu của PH", "Gửi link đăng ký online"],
                correct: 2,
                explanation: "Content có giá trị (case study, video, thông tin liên quan) tạo engagement và xây dựng niềm tin. PH ít bỏ qua hơn so với text quảng cáo thuần túy."
              }
            ]
          }
        },

        /* ---------- Bài 3: Xử lý từ chối 10 tình huống ---------- */
        {
          id: "day3_s3",
          title: "Xử lý từ chối — 10 tình huống thực chiến",
          icon: "🛡️",
          content: `<h3>10 Tình huống từ chối phổ biến nhất — Script xử lý</h3>
<p>Từ chối là một phần tự nhiên của bán hàng — không phải thất bại. Mỗi lời từ chối là tín hiệu PH cần thêm thông tin hoặc niềm tin. Dưới đây là 10 tình huống thực tế và framework xử lý <strong>Feel–Felt–Found</strong>:</p>
<p><strong>Framework Feel–Felt–Found:</strong> "Mình hiểu anh/chị cảm thấy vậy (Feel) — nhiều phụ huynh khác cũng đã từng cảm thấy như vậy (Felt) — nhưng sau khi tìm hiểu kỹ, họ nhận ra... (Found)"</p>

<div class="insight-card">
  <div class="insight-number">1</div>
  <div class="insight-body">
    <h4>💸 "Đắt quá, học phí cao hơn chỗ khác"</h4>
    <p><strong>Root cause:</strong> PH so sánh giá tuyệt đối mà chưa thấy giá trị tương ứng. Hoặc ngân sách thực sự hạn chế.</p>
    <p><strong>Feel–Felt–Found:</strong></p>
    <div class="script-box">
      <em>"Mình hiểu anh/chị thấy học phí MindX cao hơn một số chỗ — nhiều phụ huynh ban đầu cũng có băn khoăn đó. Nhưng sau khi tìm hiểu kỹ, họ nhận ra sự khác biệt: MindX dùng kit VEX/LEGO quốc tế (không phải kit tự chế), lớp chỉ 6–10 học viên (không phải 20–30 bạn), giáo viên được đào tạo chuyên sâu, và lộ trình có CAM KẾT đầu ra rõ ràng. Anh/chị có muốn mình so sánh cụ thể giá trị theo từng điểm không? Vì 'rẻ' mà con không tiến bộ thì cuối cùng tốn kém hơn nhiều."</em>
    </div>
    <p><strong>Proof point:</strong> "Tính ra mỗi buổi học MindX chỉ khoảng [X] nghìn — tương đương một bát phở. Nhưng kỹ năng con học được là tài sản dùng cả đời."</p>
    <p><strong>Backup:</strong> Đề xuất chương trình trả góp, học thử 1 buổi miễn phí trước khi quyết định.</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">2</div>
  <div class="insight-body">
    <h4>😐 "Con không thích, con nói không muốn học"</h4>
    <p><strong>Root cause:</strong> Con chưa được trải nghiệm thực tế — thường trẻ sợ cái chưa biết. Hoặc con đang bị áp đặt bởi PH mà không có ý kiến.</p>
    <p><strong>Feel–Felt–Found:</strong></p>
    <div class="script-box">
      <em>"Mình hiểu — nhiều bạn ban đầu cũng nói không thích. Nhưng hầu hết các bạn sau buổi trial đầu tiên đều không muốn về! Vì đây không phải học bài thụ động — con được TỰ tạo ra thứ gì đó chạy được. Cảm giác đó rất khác với học trường. Mình đề xuất cho con thử 1 buổi trial hoàn toàn miễn phí — không áp lực gì. Nếu con thử xong vẫn không thích, anh/chị không cần quyết định gì thêm."</em>
    </div>
    <p><strong>Kỹ thuật:</strong> Luôn kéo con vào buổi trial — 90% trường hợp con sẽ thay đổi thái độ sau khi trải nghiệm thực.</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">3</div>
  <div class="insight-body">
    <h4>🤔 "Để tôi suy nghĩ thêm, sẽ liên lạc lại"</h4>
    <p><strong>Root cause:</strong> PH chưa đủ tin tưởng hoặc còn e ngại chưa nói ra. Đây thường là "từ chối tạm thời" để kết thúc cuộc trò chuyện.</p>
    <p><strong>Feel–Felt–Found:</strong></p>
    <div class="script-box">
      <em>"Mình hoàn toàn tôn trọng quyết định của anh/chị. Trước khi mình để anh/chị suy nghĩ thêm, cho mình hỏi một câu thẳng thắn: điều gì khiến anh/chị chưa tự tin quyết định ngay? Để mình có thể cung cấp đúng thông tin anh/chị cần." [Lắng nghe — đây là lúc PH nói từ chối thật] "Cảm ơn anh/chị chia sẻ. Vậy mình hẹn anh/chị vào [ngày/giờ cụ thể] để trả lời điểm đó nhé — mình sẽ chuẩn bị thêm thông tin."</em>
    </div>
    <p><strong>Quy tắc vàng:</strong> Luôn chốt NEXT STEP cụ thể (ngày giờ gọi lại). Không bao giờ để PH "rơi vào im lặng".</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">4</div>
  <div class="insight-body">
    <h4>🏫 "Con đang học chỗ khác rồi, không muốn thay đổi"</h4>
    <p><strong>Root cause:</strong> PH lo chuyển chỗ gây xáo trộn hoặc lãng phí tiền đã bỏ ra (sunk cost).</p>
    <div class="script-box">
      <em>"Mình không đề nghị anh/chị dừng chỗ kia ngay. Cho mình hỏi: con đang học gì ở đó và anh/chị hài lòng với tiến độ đến đâu?" [Lắng nghe] "Nếu có một điểm con chưa được đáp ứng tốt ở chỗ hiện tại, đó là điểm gì?" [Kết nối điểm đó với USP của MindX — lộ trình dài hạn, kit quốc tế, bảo trợ việc làm] "Nhiều học viên MindX trước đây cũng từ chỗ khác chuyển sang — và họ nói đây là quyết định đúng nhất. Anh/chị có muốn thử 1 buổi để so sánh trực tiếp không?"</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">5</div>
  <div class="insight-body">
    <h4>📚 "Con còn bận học văn hóa, không có thời gian"</h4>
    <p><strong>Root cause:</strong> PH sợ học thêm làm con quá tải. Đây là từ chối hợp lý — cần giải quyết bằng giải pháp lịch học linh hoạt.</p>
    <div class="script-box">
      <em>"Điều đó mình hiểu — sức khỏe và học văn hóa của con là ưu tiên số một. MindX có lịch học linh hoạt: cuối tuần và tối trong tuần (18h30–20h), thiết kế để không xung đột lịch trường. Con chỉ học 90 phút x 2 buổi/tuần — tương đương thời gian xem TikTok mỗi ngày. Hơn nữa, nhiều phụ huynh phản hồi rằng sau khi học MindX, con tập trung hơn ở trường vì đã được 'xả' năng lượng sáng tạo. Mình gửi anh/chị thời khóa biểu để tham khảo nhé?"</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">6</div>
  <div class="insight-body">
    <h4>💻 "Sợ học online không hiệu quả, con không tập trung"</h4>
    <p><strong>Root cause:</strong> PH có trải nghiệm xấu với online learning (thời COVID) hoặc con có vấn đề tập trung với màn hình.</p>
    <div class="script-box">
      <em>"Mình hiểu hoàn toàn — học online trong đại dịch thực sự khó khăn. Điều quan trọng cần biết: MindX học TRỰC TIẾP tại trung tâm là chủ yếu — con học trong lab thật, với giáo viên thật, bạn bè thật. Lớp chỉ 6–10 học viên, giáo viên quan sát được từng bạn. Chúng tôi chỉ dùng online cho một số nội dung bổ sung. Anh/chị muốn ghé thăm trung tâm và xem lớp học thật không? Mình sẽ sắp xếp tour ngay."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">7</div>
  <div class="insight-body">
    <h4>👶 "Con còn nhỏ quá, chờ lớn hơn mới học"</h4>
    <p><strong>Root cause:</strong> PH chưa biết MindX có chương trình từ 4 tuổi, hoặc có định kiến "công nghệ dành cho trẻ lớn".</p>
    <div class="script-box">
      <em>"Thực ra, 4–7 tuổi là 'cửa sổ vàng' của việc học — não bộ tiếp nhận nhanh nhất. Chờ con lớn hơn không sai, nhưng con sẽ bắt đầu muộn hơn bạn bè đồng trang lứa. MindX có chương trình Kỹ sư Robot nhí (4+) và Little Artist (4+) — thiết kế đặc biệt phù hợp tâm lý trẻ nhỏ: chơi, lắp ráp, khám phá — không phải ngồi học bài. Anh/chị muốn mình mô tả một buổi học của trẻ 4–5 tuổi tại MindX như thế nào không?"</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">8</div>
  <div class="insight-body">
    <h4>👫 "Chồng/vợ tôi chưa đồng ý"</h4>
    <p><strong>Root cause:</strong> Người ra quyết định chính (DM — Decision Maker) chưa tham gia vào quá trình tư vấn. TVTS cần kéo DM vào vòng.</p>
    <div class="script-box">
      <em>"Điều đó rất dễ hiểu — quyết định đầu tư cho con cần cả hai bên đồng thuận. Anh/chị có thể mời chồng/vợ cùng đến một buổi tư vấn không? Mình sẽ trình bày đầy đủ và trả lời tất cả câu hỏi. Hoặc nếu khó xếp lịch, mình chuẩn bị tài liệu tóm tắt — lộ trình, học phí, và feedback từ phụ huynh khác — để anh/chị gửi về nhà. Thường thì sau khi đọc, chồng/vợ sẽ có câu hỏi cụ thể hơn và mình có thể giải đáp qua video call."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">9</div>
  <div class="insight-body">
    <h4>😕 "Học mấy tháng rồi không thấy tiến bộ"</h4>
    <p><strong>Root cause:</strong> PH kỳ vọng kết quả ngắn hạn; hoặc thật sự có vấn đề trong quá trình học của con.</p>
    <div class="script-box">
      <em>"Cảm ơn anh/chị thẳng thắn chia sẻ — điều này rất quan trọng. Mình muốn hỏi: 'không tiến bộ' cụ thể là anh/chị mong đợi con đạt được gì sau thời gian đó?" [Lắng nghe] "Kết quả của Coding/Robotics/Art thường thể hiện qua sản phẩm con tạo ra — con đã làm được gì trong thời gian đó chưa? Từ đó mình và anh/chị cùng xem con đang ở mức nào trong lộ trình và có cần điều chỉnh không. MindX cam kết theo dõi tiến độ mỗi tháng — nếu có vấn đề, chúng tôi sẽ đề xuất điều chỉnh sớm."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">10</div>
  <div class="insight-body">
    <h4>⏳ "Muốn đợi khuyến mãi, chờ đợt giảm giá"</h4>
    <p><strong>Root cause:</strong> PH muốn tối ưu chi phí; hoặc chưa đủ urgency để quyết định ngay.</p>
    <div class="script-box">
      <em>"Mình hiểu muốn tiết kiệm là hoàn toàn hợp lý. Nhưng cho mình chia sẻ một góc nhìn: mỗi tháng con chưa học là một tháng bạn bè con đang học — khoảng cách đó khó bù lại được. Về khuyến mãi, MindX thường chỉ có 2–3 đợt KM/năm vào những thời điểm cố định (đầu năm học, hè). Hiện tại [có/không có] đợt KM — [nếu có: "đây là thời điểm tốt nhất để đăng ký"] [nếu không có: "đợt KM tiếp theo là khoảng X tháng nữa — trong thời gian đó con mất cơ hội học bao nhiêu buổi?"]. Mình muốn anh/chị có quyết định tốt nhất cho con — hãy để mình giúp."</em>
    </div>
    <p><strong>Lưu ý:</strong> Không hứa hẹn KM không chắc chắn. Chỉ offer những gì thực sự có thể thực hiện.</p>
  </div>
</div>

<div class="key-takeaway">
  <h4>🏆 Key Takeaway — Bài 3</h4>
  <p>Từ chối = Cơ hội. Mỗi "không" ẩn sau một "chưa hiểu đủ" hoặc "chưa tin đủ". Nhiệm vụ của TVTS không phải ép buộc — mà là <strong>tìm ra rào cản thật và giải quyết nó bằng thông tin đúng</strong>. Framework Feel–Felt–Found + luôn chốt next step cụ thể là công thức xử lý từ chối hiệu quả nhất.</p>
</div>

<div class="practice-exercise">
  <h4>✏️ Bài tập thực hành</h4>
  <p>Role-play với đồng nghiệp: Người A đóng vai phụ huynh nói 3 câu từ chối bất kỳ từ danh sách trên. Người B xử lý bằng Feel–Felt–Found. Đổi vai và cho nhau feedback. Thực hành ít nhất 5 vòng.</p>
</div>`,
          quiz: {
            id: "quiz_day3_s3",
            title: "Quiz: Xử lý từ chối",
            questions: [
              {
                q: "Trong framework Feel–Felt–Found, bước 'Found' có nghĩa là gì?",
                options: ["Hỏi PH đã tìm hiểu MindX từ nguồn nào", "Chia sẻ điều PH hoặc PH khác ĐÃ KHÁM PHÁ sau khi vượt qua e ngại đó", "Tìm ra điểm từ chối thật sự của PH", "Giới thiệu sản phẩm phù hợp nhất"],
                correct: 1,
                explanation: "Found = những gì PH (hoặc PH khác) tìm ra/nhận ra sau khi tìm hiểu kỹ hơn — đây là bước bạn cung cấp giá trị thực để vượt qua e ngại."
              },
              {
                q: "Khi PH nói 'Để tôi suy nghĩ thêm', TVTS nên làm gì ngay lập tức?",
                options: ["Cảm ơn và kết thúc cuộc gặp", "Hỏi thẳng: 'Điều gì khiến anh/chị chưa tự tin quyết định ngay?'", "Giảm giá ngay để thúc đẩy quyết định", "Gửi thêm tài liệu qua Zalo"],
                correct: 1,
                explanation: "'Để suy nghĩ' thường ẩn sau một từ chối thật chưa được nói ra. TVTS cần hỏi thẳng để lộ ra rào cản thật, rồi giải quyết đúng điểm đó."
              },
              {
                q: "PH nói 'Học phí MindX đắt hơn chỗ khác' — cách xử lý nào SAI?",
                options: ["So sánh giá trị: kit quốc tế, lớp nhỏ, cam kết đầu ra", "Đề xuất chương trình trả góp linh hoạt", "Nói xấu đối thủ để biện hộ cho giá MindX", "Tính giá theo buổi để PH thấy hợp lý hơn"],
                correct: 2,
                explanation: "TVTS không bao giờ nói xấu đối thủ — điều đó mất uy tín và vi phạm đạo đức nghề nghiệp. Hãy tập trung vào giá trị MindX thay vì nhấn vào điểm yếu của người khác."
              },
              {
                q: "PH nói 'Chồng tôi chưa đồng ý' — bước ưu tiên của TVTS là gì?",
                options: ["Chờ PH thuyết phục chồng tự xử lý", "Kéo người ra quyết định (chồng/vợ) vào vòng tư vấn càng sớm càng tốt", "Giảm giá để dễ thuyết phục hơn", "Gọi điện thẳng cho chồng mà không hỏi ý kiến PH"],
                correct: 1,
                explanation: "Người ra quyết định (DM) cần được tham gia vào quá trình tư vấn. Không có DM = không thể close. Ưu tiên mời DM vào buổi tư vấn hoặc tạo tài liệu để PH chia sẻ về nhà."
              },
              {
                q: "Cách tiếp cận nào hiệu quả nhất khi PH nói 'Con không thích học'?",
                options: ["Thuyết phục PH ép con học vì tương lai con", "Đề nghị cho con thử 1 buổi trial miễn phí không áp lực", "Nói con nhỏ nên PH quyết định được", "Hỏi con trực tiếp ngay tại buổi tư vấn"],
                correct: 1,
                explanation: "Trial miễn phí là công cụ mạnh nhất — 90% trẻ thay đổi thái độ sau khi TỰ TRẢI NGHIỆM tạo ra thứ gì đó. Trải nghiệm thực thuyết phục hơn bất kỳ lời nói nào."
              }
            ]
          }
        }

      ] // end day3 sections
    }, // end day3

    /* ==================== DAY 4: SIMULATION ==================== */
    {
      id: "day4",
      day: 4,
      title: "SIMULATION",
      subtitle: "Thực chiến & Kịch bản",
      icon: "🎭",
      color: "#805AD5",
      sections: [

        /* ---------- Bài 1: Kịch bản gọi điện ---------- */
        {
          id: "day4_s1",
          title: "Kịch bản gọi điện tư vấn",
          icon: "📞",
          content: `<h3>3 Kịch bản gọi điện thực tế — Script từng từ</h3>
<p>Điện thoại là kênh tiếp xúc đầu tiên và quan trọng nhất. Trong 60–90 giây đầu tiên, PH quyết định có tiếp tục nghe hay không. Dưới đây là 3 kịch bản hoàn chỉnh bạn có thể dùng ngay:</p>

<h4>📱 Kịch bản 1: Cold Call — Gọi cho lead mới (PH chưa biết MindX)</h4>
<div class="script-box">
  <p><strong>[TVTS gọi — PH nhấc máy]</strong></p>
  <em>
  TVTS: "Alo, cho mình hỏi đây có phải số điện thoại của anh/chị [Tên PH] không ạ?"<br><br>
  PH: "Ừ, ai vậy?"<br><br>
  TVTS: "Dạ, mình là [Tên], TVTS từ MindX Technology School ạ. Mình được giới thiệu số của anh/chị từ [nguồn: event/website/referral] — hiện tại anh/chị có bé đang ở độ tuổi [X] không ạ?"<br><br>
  PH: "Ừ, con tôi [X] tuổi."<br><br>
  TVTS: "Dạ tuyệt ạ. Lý do mình liên hệ là MindX đang có chương trình [Robotics/Coding/Art] rất phù hợp với bé [X] tuổi — nhiều phụ huynh gần đây tìm đến mình vì lo con bắt đầu tiếp xúc nhiều với công nghệ mà chưa biết định hướng như thế nào. Anh/chị hiện tại có mối quan tâm nào tương tự không ạ?"<br><br>
  PH: "Thật ra có, con tôi hay chơi game nhiều..."<br><br>
  TVTS: "Dạ, đây là điều rất nhiều phụ huynh lo! Mình có thể chia sẻ một cách tiếp cận hay hơn là cấm — nhưng mình muốn hiểu rõ hơn về bé trước. Anh/chị có thể dành 10–15 phút gặp mặt tại trung tâm MindX [gần nhất] để mình tư vấn cụ thể hơn không? Mình sẽ chuẩn bị thông tin phù hợp với bé nhà anh/chị."<br><br>
  PH: "Được, nhưng tôi bận..."<br><br>
  TVTS: "Dạ không sao ạ. Anh/chị rảnh vào buổi nào trong tuần này — sáng/chiều/tối? Mình sẽ đặt lịch theo thời gian của anh/chị."
  </em>
</div>
<p><strong>Lưu ý Cold Call:</strong> (1) Luôn xin phép 5–10 giây, (2) Nêu lý do gọi ngay từ đầu, (3) Đặt câu hỏi mở — không pitch ngay, (4) Mục tiêu: đặt lịch hẹn — không phải bán qua điện thoại.</p>

<h4>📲 Kịch bản 2: Follow-up Call — Gọi lại PH đã tư vấn nhưng chưa quyết định</h4>
<div class="script-box">
  <em>
  TVTS: "Alo anh/chị [Tên], mình là [Tên] từ MindX — hôm [ngày] mình có tư vấn cho anh/chị về lộ trình [Coding/Robotics/Art] cho bé [Tên con] ạ. Không biết anh/chị đã có thêm thời gian suy nghĩ chưa ạ?"<br><br>
  PH: "Ừ, mình vẫn đang cân nhắc..."<br><br>
  TVTS: "Dạ mình hiểu ạ. Cho mình hỏi thẳng: trong những điều mình chia sẻ hôm đó, điểm nào anh/chị vẫn còn băn khoăn nhất?"<br><br>
  PH: "Thật ra là học phí còn cao hơn mình dự kiến..."<br><br>
  TVTS: "Dạ cảm ơn anh/chị thẳng thắn. Cho mình chia sẻ thêm: MindX hiện có chương trình đăng ký theo học kỳ với mức học phí linh hoạt hơn — mình có thể tính toán cụ thể cho lộ trình của bé [Tên con] để anh/chị so sánh không? Ngoài ra, [nếu đang có KM]: hiện đang có chương trình ưu đãi [mô tả] đến hết [ngày] — anh/chị muốn mình giữ suất không?"
  </em>
</div>
<p><strong>Lưu ý Follow-up:</strong> Gọi trong vòng 24–48h sau buổi tư vấn. Hỏi thẳng về rào cản — không để PH "lơ lửng". Luôn có offer cụ thể để tạo urgency.</p>

<h4>🎓 Kịch bản 3: Post-trial Call — Gọi sau buổi học thử</h4>
<div class="script-box">
  <em>
  TVTS: "Alo anh/chị [Tên], mình là [Tên] từ MindX. Hôm nay bé [Tên con] vừa tham gia buổi trial [Robotics/Coding/Art] xong rồi ạ — anh/chị và bé cảm thấy thế nào?"<br><br>
  PH: "Con thích lắm, hỏi mẹ khi nào đi học tiếp!"<br><br>
  TVTS: "Thật tuyệt! Giáo viên cũng phản hồi với mình rằng bé [Tên con] rất tập trung và có tố chất tốt — đặc biệt ở phần [mô tả cụ thể theo ghi chép giáo viên]. Mình muốn chia sẻ với anh/chị ngay hôm nay một số options đăng ký phù hợp nhất cho bé."<br><br>
  [Nếu PH hỏi về học phí → trình bày gói phù hợp]<br><br>
  TVTS: "Để mình giúp anh/chị hoàn thành thủ tục đăng ký ngay hôm nay nhé — bé sẽ bắt đầu học từ [ngày gần nhất]. Anh/chị thanh toán tiện nhất qua hình thức nào ạ?"
  </em>
</div>
<p><strong>Quy tắc Post-trial:</strong> Gọi NGAY trong ngày trial — khi cảm xúc của PH và con đang cao nhất. Chốt sale trong cuộc gọi này nếu có thể.</p>

<div class="key-takeaway">
  <h4>🏆 Key Takeaway — Bài 1</h4>
  <p>Mỗi cuộc gọi có MỤC TIÊU RÕ RÀNG: Cold call → đặt lịch hẹn. Follow-up → tìm rào cản và giải quyết. Post-trial → chốt đăng ký. Đừng cố bán qua điện thoại nếu mục tiêu là đặt lịch hẹn.</p>
</div>

<div class="practice-exercise">
  <h4>✏️ Bài tập thực hành</h4>
  <p>Ghi âm bản thân thực hiện cả 3 kịch bản gọi điện. Nghe lại và tự đánh giá: giọng có tự tin không? Câu hỏi có mở không? Có chốt next step cụ thể không? Chia sẻ bản ghi âm với trưởng nhóm để nhận feedback.</p>
</div>`,
          quiz: {
            id: "quiz_day4_s1",
            title: "Quiz: Kịch bản gọi điện",
            questions: [
              {
                q: "Mục tiêu CHÍNH của một cold call là gì?",
                options: ["Bán khóa học qua điện thoại ngay lập tức", "Đặt lịch hẹn tư vấn trực tiếp", "Giới thiệu toàn bộ sản phẩm MindX", "Gửi bảng giá qua Zalo"],
                correct: 1,
                explanation: "Cold call chỉ có một mục tiêu: đặt lịch hẹn. Bán hàng thật sự diễn ra khi gặp mặt trực tiếp — khi TVTS có thể demo, tour phòng học và xử lý từ chối."
              },
              {
                q: "Thời điểm tốt nhất để gọi Post-trial Call là khi nào?",
                options: ["2–3 ngày sau buổi trial để PH có thời gian suy nghĩ", "Ngay trong ngày buổi trial diễn ra", "Tuần sau khi PH đã bình tĩnh hơn", "Chỉ gọi khi PH chủ động liên hệ lại"],
                correct: 1,
                explanation: "Gọi ngay trong ngày trial — khi cảm xúc của PH và con đang ở mức cao nhất. Để trễ 2–3 ngày, cảm xúc đó sẽ nguội và cơ hội close giảm đáng kể."
              },
              {
                q: "Khi PH Follow-up vẫn nói 'còn đang cân nhắc', TVTS nên hỏi câu gì tiếp theo?",
                options: ["'Anh/chị cần thêm thời gian bao lâu?'", "'Điểm nào anh/chị vẫn còn băn khoăn nhất?'", "'Anh/chị đã xem giá ở chỗ khác chưa?'", "'Mình có thể giảm thêm học phí cho anh/chị không?'"],
                correct: 1,
                explanation: "Hỏi thẳng về điểm băn khoăn là cách duy nhất để tìm ra rào cản thật và giải quyết đúng điểm. Câu hỏi 'còn đang cân nhắc' không bao giờ mang lại thông tin hữu ích."
              }
            ]
          }
        },

        /* ---------- Bài 2: Kịch bản tư vấn trực tiếp ---------- */
        {
          id: "day4_s2",
          title: "Kịch bản tư vấn trực tiếp tại trung tâm",
          icon: "🏢",
          content: `<h3>45 Phút Tư vấn Trực tiếp — Flow & Script hoàn chỉnh</h3>
<p>Tư vấn trực tiếp là kênh có tỷ lệ close cao nhất. Đây là cơ hội tốt nhất để tạo ấn tượng, xây niềm tin và chốt sale. Dưới đây là flow 45 phút chuẩn:</p>

<table class="compare-table">
  <thead><tr><th>Giai đoạn</th><th>Thời gian</th><th>Mục tiêu</th></tr></thead>
  <tbody>
    <tr><td>Welcome & Rapport</td><td>5 phút</td><td>Tạo thoải mái, hiểu PH</td></tr>
    <tr><td>Khám phá nhu cầu</td><td>10 phút</td><td>Tìm pain point, mục tiêu</td></tr>
    <tr><td>Tour phòng học (tùy)</td><td>5 phút</td><td>Tạo ấn tượng môi trường</td></tr>
    <tr><td>Trình bày lộ trình</td><td>15 phút</td><td>Kết nối sản phẩm với nhu cầu</td></tr>
    <tr><td>Xử lý từ chối & Chốt</td><td>10 phút</td><td>Close hoặc chốt next step</td></tr>
  </tbody>
</table>

<h4>🤝 Giai đoạn 1: Welcome & Rapport (5 phút)</h4>
<div class="script-box">
  <em>
  [PH bước vào reception]<br>
  TVTS: "Chào anh/chị [Tên]! Mình là [Tên] — mình đã chờ anh/chị ạ. Anh/chị có tìm chỗ đậu xe dễ không? / Đi đường có thuận tiện không?"<br>
  [Mời nước/café] "Anh/chị dùng nước gì ạ? Hôm nay có bé đi cùng không?"<br>
  [Nếu có con] → Cho con xem demo nhỏ hoặc khu waiting có tablet với game Scratch.<br>
  "Anh/chị đã biết đến MindX từ nguồn nào ạ? [Facebook / bạn bè / Google...] — mình hỏi để hiểu anh/chị đã biết những gì về mình rồi."
  </em>
</div>

<h4>🔍 Giai đoạn 2: Khám phá nhu cầu (10 phút)</h4>
<div class="script-box">
  <em>
  "Trước khi mình giới thiệu về MindX, mình muốn hiểu hơn về bé nhà mình. Bé hiện tại bao nhiêu tuổi và đang học lớp mấy ạ?"<br><br>
  "Anh/chị đến đây hôm nay có điều gì cụ thể nhất muốn tìm hiểu không? Hay là có mối quan tâm gì về việc học hoặc tương lai của bé?"<br><br>
  [Lắng nghe — ghi chép key points]<br><br>
  "Ngoài điều đó ra, anh/chị có kỳ vọng gì sau 1 năm học tại MindX — bé sẽ đạt được điều gì mà anh/chị sẽ cảm thấy hài lòng nhất?"<br><br>
  "Bé có sở thích gì đặc biệt không — thích xây dựng, vẽ vời, công nghệ, hay chơi game?"
  </em>
</div>

<h4>🏫 Giai đoạn 3: Tour phòng học (5 phút — nếu phù hợp)</h4>
<p>Tour chỉ nên thực hiện khi: PH quan tâm đến môi trường học hoặc lần đầu đến trung tâm. Dẫn qua phòng lab chính (nếu có lớp đang học → rất tốt), góc trưng bày sản phẩm học viên.</p>
<div class="script-box">
  <em>
  "Để anh/chị hiểu môi trường học tại MindX, mình mời anh/chị đi một vòng nhanh nhé."<br>
  [Tại phòng lab] "Đây là phòng lab Robotics — bé sẽ học tại đây. Mỗi lớp chỉ 6–10 bạn, mỗi bạn có một kit riêng."<br>
  [Trỏ vào sản phẩm trưng bày] "Đây là những sản phẩm các anh/chị học viên đã làm ra — robot này do bạn 8 tuổi thiết kế và lập trình trong 3 tháng."
  </em>
</div>

<h4>📊 Giai đoạn 4: Trình bày lộ trình (15 phút)</h4>
<p><strong>Nguyên tắc:</strong> Chỉ trình bày những gì LIÊN QUAN đến nhu cầu đã khai thác ở giai đoạn 2. Không cần giới thiệu tất cả 16 khóa.</p>
<div class="script-box">
  <em>
  "Từ những gì anh/chị chia sẻ, mình thấy bé [Tên con] phù hợp nhất với lộ trình [Coding/Robotics/Art] — cụ thể là bắt đầu từ khóa [tên khóa] vì [lý do cụ thể liên quan đến nhu cầu PH vừa nói]."<br><br>
  "Để anh/chị thấy toàn cảnh: trong [5/4/7] năm tới, bé sẽ đi từ [điểm A — mô tả cụ thể] đến [điểm B — sản phẩm, kỹ năng, cơ hội]. Năm đầu tiên, bé sẽ [mô tả cụ thể — tên khóa, sản phẩm tạo ra]."<br><br>
  "Điều anh/chị quan tâm nhất — [nhắc lại pain point] — được giải quyết ở năm [X] khi bé [mô tả cụ thể]. Anh/chị thấy hướng này có phù hợp không?"
  </em>
</div>

<h4>✅ Giai đoạn 5: Xử lý từ chối & Chốt (10 phút)</h4>
<div class="script-box">
  <em>
  [Sau khi trình bày] "Anh/chị có câu hỏi gì không? Hay có điểm nào chưa rõ?"<br><br>
  [Xử lý từ chối nếu có — theo framework Day 3_S3]<br><br>
  [Câu chốt thử] "Nếu không còn điều gì băn khoăn, mình có thể hỗ trợ anh/chị hoàn thành đăng ký ngay hôm nay — bé sẽ bắt đầu học từ [ngày]. Anh/chị muốn đăng ký khóa đầu tiên không?"<br><br>
  [Nếu PH chưa sẵn sàng] "Không sao ạ — vậy mình đề xuất bé thử 1 buổi trial miễn phí vào [ngày/giờ cụ thể] để bé có trải nghiệm thực. Mình sẽ đặt lịch ngay cho anh/chị."
  </em>
</div>

<h4>📋 Checklist chuẩn bị phòng tư vấn</h4>
<ul>
  <li>✅ Bàn ghế sạch, nước/café chuẩn bị sẵn</li>
  <li>✅ Máy tính/iPad với slide tư vấn đã chuẩn bị</li>
  <li>✅ Sản phẩm học viên trưng bày nổi bật</li>
  <li>✅ Tài liệu bảng học phí in sẵn (chỉ đưa khi cần)</li>
  <li>✅ Form đăng ký sẵn sàng</li>
  <li>✅ Thông tin lịch học của tuần tới</li>
</ul>

<div class="key-takeaway">
  <h4>🏆 Key Takeaway — Bài 2</h4>
  <p>Tư vấn trực tiếp không phải "thuyết trình về sản phẩm" — đó là <strong>cuộc trò chuyện định hướng mua hàng</strong>. TVTS giỏi nói ít hơn, hỏi nhiều hơn, và luôn dẫn dắt PH tự nhận ra con cần gì.</p>
</div>

<div class="practice-exercise">
  <h4>✏️ Bài tập thực hành</h4>
  <p>Thực hiện một buổi role-play tư vấn đầy đủ 45 phút với đồng nghiệp làm PH. Ghi hình lại, sau đó cùng xem và đánh giá theo checklist 5 giai đoạn. Mục tiêu: hoàn thành buổi tư vấn mượt mà trong 45 phút mà không đọc script.</p>
</div>`,
          quiz: {
            id: "quiz_day4_s2",
            title: "Quiz: Tư vấn trực tiếp",
            questions: [
              {
                q: "Trong 5 giai đoạn tư vấn trực tiếp, giai đoạn nào quan trọng nhất để cá nhân hóa tư vấn?",
                options: ["Welcome & Rapport", "Khám phá nhu cầu", "Tour phòng học", "Trình bày lộ trình"],
                correct: 1,
                explanation: "Khám phá nhu cầu là giai đoạn quan trọng nhất — thông tin thu thập ở đây quyết định toàn bộ cách bạn trình bày sau đó. Tư vấn không có khám phá nhu cầu = nói về sản phẩm không liên quan đến PH."
              },
              {
                q: "Tour phòng học nên được thực hiện khi nào?",
                options: ["Luôn luôn — trước khi bắt đầu tư vấn", "Chỉ khi PH hỏi về cơ sở vật chất", "Khi PH quan tâm đến môi trường học hoặc lần đầu đến trung tâm", "Sau khi đã chốt được đăng ký"],
                correct: 2,
                explanation: "Tour nên được thực hiện khi thích hợp — PH lần đầu đến hoặc quan tâm đến môi trường. Tour khi không cần thiết làm mất thời gian và gián đoạn flow tư vấn."
              },
              {
                q: "Câu 'chốt thử' (trial close) phù hợp nhất là câu nào?",
                options: ["'Anh/chị có muốn đăng ký không?'", "'Giá học phí như vậy anh/chị thấy ổn không?'", "'Nếu không còn điều gì băn khoăn, mình có thể hỗ trợ anh/chị hoàn thành đăng ký ngay hôm nay không?'", "'Anh/chị cần thêm thời gian suy nghĩ không?'"],
                correct: 2,
                explanation: "Câu chốt thử tốt có cấu trúc: giả định không còn e ngại + mời hành động cụ thể + thời gian bắt đầu rõ ràng. Câu này dẫn PH đến quyết định mà không áp lực."
              }
            ]
          }
        },

        /* ---------- Bài 3: DISC ---------- */
        {
          id: "day4_s3",
          title: "Nhận diện Type khách hàng — DISC",
          icon: "🧠",
          content: `<h3>4 Kiểu Phụ huynh theo DISC — Cách tiếp cận phù hợp</h3>
<p>DISC là framework đơn giản nhưng rất hiệu quả để nhận diện phong cách giao tiếp của PH và điều chỉnh cách tư vấn cho phù hợp. Tư vấn đúng với tính cách = rút ngắn thời gian chốt sale đáng kể.</p>

<div class="insight-card">
  <div class="insight-number">D</div>
  <div class="insight-body">
    <h4>🦁 Type D (Dominant) — "Quyết đoán, hướng kết quả"</h4>
    <p><strong>Nhận diện:</strong> Nói nhanh, đi thẳng vào vấn đề, không thích vòng vo. Hỏi ngay "học phí bao nhiêu?" hoặc "kết quả như thế nào?". Ngắt lời khi TVTS nói dài. Thường là doanh nhân, quản lý.</p>
    <p><strong>Cách tiếp cận:</strong></p>
    <ul>
      <li>✅ Đi thẳng vào vấn đề — không warm up quá lâu</li>
      <li>✅ Đưa ra số liệu, kết quả cụ thể, ROI rõ ràng</li>
      <li>✅ Cho họ cảm giác HỌ đang kiểm soát quyết định</li>
      <li>❌ Không nói dài dòng — họ sẽ ngắt lời hoặc mất hứng</li>
    </ul>
    <div class="script-box">
      <em>"Thẳng thắn nói với anh/chị: lộ trình Coding 5 năm tại MindX có 3 kết quả đo lường được — [kết quả 1, 2, 3]. Học phí là [X]/học kỳ. Muốn xem lộ trình cụ thể không?"</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">I</div>
  <div class="insight-body">
    <h4>🌟 Type I (Influential) — "Nhiệt tình, hướng người"</h4>
    <p><strong>Nhận diện:</strong> Nói nhiều, dễ hứng khởi, hay kể chuyện về con. Quan tâm đến cộng đồng, bạn bè, xã hội. Thích chia sẻ và được lắng nghe. Dễ bị cuốn vào câu chuyện hay.</p>
    <p><strong>Cách tiếp cận:</strong></p>
    <ul>
      <li>✅ Lắng nghe câu chuyện về con họ — đây là investment</li>
      <li>✅ Dùng testimonial, case study, câu chuyện học viên khác</li>
      <li>✅ Tạo cảm giác cộng đồng: "con sẽ có bạn bè cùng đam mê"</li>
      <li>❌ Không ngắt lời hoặc vội vào số liệu khô khan</li>
    </ul>
    <div class="script-box">
      <em>"Nghe chị kể về bé thật thú vị! Mình có một học viên 9 tuổi có hoàn cảnh tương tự — sau 6 tháng bé làm được [sản phẩm cụ thể] và tự khoe với cả lớp. Chị muốn nghe câu chuyện đó không?"</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">S</div>
  <div class="insight-body">
    <h4>🌿 Type S (Steady) — "Ổn định, hướng quan hệ"</h4>
    <p><strong>Nhận diện:</strong> Nói chậm, cẩn thận, muốn chắc chắn trước khi quyết định. Hay hỏi về cam kết, bảo đảm, chính sách hoàn học phí. Không muốn bị áp lực. Lo lắng nhiều.</p>
    <p><strong>Cách tiếp cận:</strong></p>
    <ul>
      <li>✅ Kiên nhẫn — không rush, cho họ thời gian</li>
      <li>✅ Nhấn mạnh sự ổn định: lộ trình rõ ràng, cam kết, chính sách bảo vệ</li>
      <li>✅ Xây dựng niềm tin từng bước — không đòi quyết định ngay</li>
      <li>❌ Không tạo áp lực "hôm nay phải đăng ký"</li>
    </ul>
    <div class="script-box">
      <em>"Mình hiểu anh/chị muốn chắc chắn trước khi quyết định — điều đó rất đúng đắn. MindX có chính sách: nếu sau 2 buổi đầu bé không thích, anh/chị có thể hoàn phí học kỳ. Ngoài ra, mình sẽ là người đồng hành với anh/chị trong suốt quá trình — bất cứ câu hỏi gì cũng liên hệ mình trực tiếp."</em>
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">C</div>
  <div class="insight-body">
    <h4>📊 Type C (Conscientious) — "Cẩn thận, hướng dữ liệu"</h4>
    <p><strong>Nhận diện:</strong> Đặt nhiều câu hỏi chi tiết, muốn xem chứng minh, hỏi về nguồn dẫn chứng. Mang theo danh sách câu hỏi hoặc đã nghiên cứu kỹ trước khi đến. Hay so sánh số liệu.</p>
    <p><strong>Cách tiếp cận:</strong></p>
    <ul>
      <li>✅ Chuẩn bị dữ liệu — số liệu, nghiên cứu, so sánh cụ thể</li>
      <li>✅ Trả lời chính xác, thừa nhận nếu không biết (không bịa)</li>
      <li>✅ Đưa tài liệu chi tiết để họ nghiên cứu thêm</li>
      <li>❌ Không dùng cảm xúc/story nếu chưa có dữ liệu nền</li>
    </ul>
    <div class="script-box">
      <em>"Câu hỏi của anh/chị rất hay. Để trả lời chính xác: [số liệu cụ thể + nguồn]. Ngoài ra mình có thể gửi anh/chị báo cáo so sánh chi tiết về giáo trình MindX so với chuẩn quốc tế — anh/chị muốn nhận qua email hay Zalo?"</em>
    </div>
  </div>
</div>

<h4>🔍 Cách nhận diện nhanh Type DISC trong 2 phút đầu</h4>
<table class="compare-table">
  <thead><tr><th>Dấu hiệu</th><th>D</th><th>I</th><th>S</th><th>C</th></tr></thead>
  <tbody>
    <tr><td>Tốc độ nói</td><td>Nhanh</td><td>Nhanh & nhiều</td><td>Chậm</td><td>Vừa phải</td></tr>
    <tr><td>Câu hỏi đầu tiên</td><td>"Giá bao nhiêu?"</td><td>"Con bạn học ở đây rồi?"</td><td>"Có đảm bảo không?"</td><td>"Giáo trình chuẩn gì?"</td></tr>
    <tr><td>Ngôn ngữ cơ thể</td><td>Thẳng lưng, ánh mắt sắc</td><td>Mỉm cười, cởi mở</td><td>Hơi cúi người, gật đầu</td><td>Ghi chép, ít cử chỉ</td></tr>
    <tr><td>Quyết định</td><td>Nhanh nếu thuyết phục</td><td>Theo cảm xúc</td><td>Chậm, cần thời gian</td><td>Chậm, cần dữ liệu</td></tr>
  </tbody>
</table>

<div class="key-takeaway">
  <h4>🏆 Key Takeaway — Bài 3</h4>
  <p>Không có script nào phù hợp với TẤT CẢ phụ huynh. TVTS giỏi là người <strong>quan sát nhanh, nhận diện type và điều chỉnh phong cách</strong> trong 2–3 phút đầu. Cùng một sản phẩm — nhưng khi trình bày đúng ngôn ngữ của PH — tỷ lệ close tăng đáng kể.</p>
</div>

<div class="practice-exercise">
  <h4>✏️ Bài tập thực hành</h4>
  <p>Nhìn lại 5 PH gần nhất bạn đã tư vấn. Phân loại họ vào 4 type DISC. Với những PH bạn chưa close được — type của họ là gì, và bạn đã tiếp cận đúng cách chưa? Ghi lại nhận xét.</p>
</div>`,
          quiz: {
            id: "quiz_day4_s3",
            title: "Quiz: DISC & Phong cách tư vấn",
            questions: [
              {
                q: "PH vừa ngồi xuống đã hỏi ngay 'Học phí bao nhiêu? Kết quả cụ thể thế nào?' — đây là type gì?",
                options: ["Type I — Influential", "Type D — Dominant", "Type C — Conscientious", "Type S — Steady"],
                correct: 1,
                explanation: "Type D đi thẳng vào kết quả và số liệu, không thích vòng vo. Câu hỏi đầu tiên về giá và kết quả là dấu hiệu đặc trưng của D."
              },
              {
                q: "PH Type S (Steady) lo lắng nhất về điều gì?",
                options: ["ROI và chi phí đầu tư", "Câu chuyện thành công của học viên khác", "Sự ổn định, cam kết và chính sách bảo vệ", "Số liệu và nghiên cứu chứng minh"],
                correct: 2,
                explanation: "Type S cần sự chắc chắn và ổn định — họ muốn biết có cam kết, có chính sách bảo vệ, và TVTS sẽ đồng hành trong suốt quá trình. Áp lực quyết định nhanh là cách tệ nhất với Type S."
              },
              {
                q: "Khi tư vấn PH Type C (Conscientious), TVTS nên tránh điều gì?",
                options: ["Đưa dữ liệu và số liệu cụ thể", "Dùng cảm xúc và câu chuyện mà không có dữ liệu hỗ trợ", "Chuẩn bị tài liệu chi tiết để PH nghiên cứu thêm", "Trả lời chính xác và thừa nhận khi không biết"],
                correct: 1,
                explanation: "Type C tin vào dữ liệu và logic. Dùng cảm xúc/story thuần túy mà không có bằng chứng sẽ khiến họ nghi ngờ uy tín của bạn. Hãy chắc chắn mọi tuyên bố đều có thể dẫn chứng."
              },
              {
                q: "PH hay kể chuyện về con, hỏi về bạn bè học viên và tỏ ra rất hứng khởi — đây là type gì?",
                options: ["Type D", "Type C", "Type S", "Type I"],
                correct: 3,
                explanation: "Type I nhiệt tình, hướng người, thích câu chuyện và cộng đồng. Họ quyết định theo cảm xúc và mối quan hệ — testimonial và case study là công cụ mạnh nhất với Type I."
              }
            ]
          }
        }

      ] // end day4 sections
    }, // end day4

    /* ==================== DAY 5: ASSESSMENT & SYSTEM ==================== */
    {
      id: "day5",
      day: 5,
      title: "ASSESSMENT & SYSTEM",
      subtitle: "Kiểm tra & Hệ thống",
      icon: "🏆",
      color: "#2B6CB0",
      sections: [

        /* ---------- Bài 1: Bài kiểm tra tổng hợp ---------- */
        {
          id: "day5_s1",
          title: "Bài kiểm tra tổng hợp — 30 câu",
          icon: "📝",
          content: `<h3>Bài kiểm tra cuối khóa Onboard K12 Sale</h3>
<p>Chúc mừng bạn đã hoàn thành 4 ngày học! Bài kiểm tra này gồm <strong>30 câu hỏi</strong> bao quát toàn bộ nội dung — Product (40%), Selling Skills (40%), Mindset & Company (20%). Hãy làm bài nghiêm túc để xác định những điểm cần củng cố thêm.</p>
<p><strong>Yêu cầu đạt:</strong> 80% (24/30 câu) để hoàn thành chứng chỉ Onboard.</p>
<div class="key-takeaway">
  <h4>💡 Lưu ý trước khi làm bài</h4>
  <p>Đây là bài thi nghiêm túc — không tra cứu tài liệu trong khi làm. Mục tiêu là đánh giá THẬT SỰ những gì bạn đã ghi nhớ và hiểu sau 4 ngày học. Sau khi nộp bài, bạn sẽ thấy giải thích chi tiết cho từng câu sai.</p>
</div>`,
          quiz: {
            id: "quiz_day5_s1",
            title: "Bài kiểm tra tổng hợp — 30 câu",
            questions: [
              // PRODUCT — Coding (6 câu)
              {
                q: "Lộ trình Coding tại MindX có bao nhiêu năm và bắt đầu từ độ tuổi nào?",
                options: ["3 năm, bắt đầu từ 6 tuổi", "5 năm, bắt đầu từ 8 tuổi", "4 năm, bắt đầu từ 10 tuổi", "6 năm, bắt đầu từ 7 tuổi"],
                correct: 1,
                explanation: "Coding MindX: 5 năm, bắt đầu từ Scratch (8+) → Game Creator (11+) → App Producer (11+) → Web Developer (14+) → Computer Scientist (15+)."
              },
              {
                q: "Khóa học nào trong lộ trình Coding giúp con tạo ra ứng dụng mobile cài được lên điện thoại thật?",
                options: ["Scratch", "Game Creator", "App Producer", "Web Developer"],
                correct: 2,
                explanation: "App Producer (11+) dạy con xây dựng ứng dụng mobile hoàn chỉnh — thiết kế giao diện, lập trình logic, kết nối dữ liệu và có thể cài trên điện thoại Android thật."
              },
              {
                q: "Khóa Web Developer của MindX phù hợp với độ tuổi nào?",
                options: ["11+", "12+", "14+", "16+"],
                correct: 2,
                explanation: "Web Developer là năm 4 trong lộ trình Coding, phù hợp với học sinh từ 14 tuổi trở lên."
              },
              {
                q: "Chương trình đặc biệt nào của MindX Coding kết nối học viên với thực tập tại doanh nghiệp thật?",
                options: ["AI4Learn", "NextGen", "Internship Program", "Computer Scientist"],
                correct: 2,
                explanation: "Chương trình Internship (thực tập) kết nối học viên 16+ với các công ty tech — MindX cam kết bảo trợ việc làm và hỗ trợ thực tập."
              },
              {
                q: "Điểm khác biệt lớn nhất của Computer Scientist (năm 5 Coding) so với các năm trước là gì?",
                options: ["Học ngôn ngữ lập trình mới", "Tư duy hệ thống, thuật toán tối ưu và chuẩn bị thi đấu quốc tế", "Thiết kế website thương mại", "Kết nối trực tiếp với doanh nghiệp"],
                correct: 1,
                explanation: "Computer Scientist đào tạo tư duy thuật toán và độ phức tạp — không chỉ viết code mà là thiết kế hệ thống. Đây là nền tảng cho USACO, IOI và cánh cửa học bổng đại học top."
              },
              {
                q: "Scratch được mô tả là 'ngôn ngữ lập trình kéo thả của MIT'. Điều này có nghĩa là gì với phụ huynh?",
                options: ["Con học bằng cách kéo thả block, không có syntax khó, tập trung vào logic và ý tưởng", "Con học bằng cách nghe giảng và ghi chép", "Con dùng phần mềm do MIT cung cấp miễn phí", "Con sẽ được cấp chứng chỉ MIT sau khi hoàn thành"],
                correct: 0,
                explanation: "Scratch không có syntax phức tạp — con kéo thả các block lệnh thay vì gõ code. Điều này giúp con tập trung vào LOGIC và TƯ DUY thay vì bị distracted bởi cú pháp."
              },
              // PRODUCT — Art (6 câu)
              {
                q: "Lộ trình Art & Design tại MindX có bao nhiêu năm?",
                options: ["4 năm", "5 năm", "6 năm", "7 năm"],
                correct: 3,
                explanation: "Art & Design MindX có 7 năm: Little Artist (4+) → Digital Art Foundations (7+) → Visual Thinking (9+) → Game Art (11+) → Character & Mascot (12+) → Visual Communication (13+) → Motion & Video (14+)."
              },
              {
                q: "Chương trình Cregen tại MindX Art là gì?",
                options: ["Khóa học nâng cao cho học viên cũ", "Chương trình làm dự án thật với khách hàng thật — thực tập sáng tạo", "Triển lãm tranh cuối năm", "Chương trình thi đấu Art quốc tế"],
                correct: 1,
                explanation: "Cregen là chương trình đặc biệt của MindX Art: học viên thực hiện dự án thật với khách hàng thật — tương đương thực tập sáng tạo — giúp xây portfolio chuyên nghiệp."
              },
              {
                q: "Phụ huynh có con yêu vẽ và muốn theo đuổi thiết kế đồ họa nên bắt đầu với khóa nào?",
                options: ["Visual Communication ngay", "Little Artist (4+) hoặc Digital Art Foundations (7+) tùy tuổi", "Motion & Video", "Game Art"],
                correct: 1,
                explanation: "Lộ trình Art phải đi tuần tự từ đầu. Tùy tuổi của con: 4–6 tuổi → Little Artist, 7+ tuổi → Digital Art Foundations. Không thể bỏ qua giai đoạn nền tảng."
              },
              {
                q: "Visual Thinking (năm 3 lộ trình Art) dạy con kỹ năng gì đặc biệt?",
                options: ["Vẽ chân dung và phong cảnh thực tế", "Dùng Adobe Illustrator chuyên nghiệp", "Kể chuyện và truyền đạt ý tưởng bằng hình ảnh — visual storytelling", "Thiết kế nhân vật game"],
                correct: 2,
                explanation: "Visual Thinking dạy con 'nói bằng hình ảnh' — kỹ năng giao tiếp quan trọng của thế kỷ 21. Infographic, editorial illustration, visual narrative là các sản phẩm con tạo ra."
              },
              {
                q: "Motion & Video là năm mấy trong lộ trình Art và dùng phần mềm gì?",
                options: ["Năm 5, dùng Canva và iMovie", "Năm 6, dùng Figma và Adobe XD", "Năm 7, dùng Adobe Premiere Pro và After Effects", "Năm 4, dùng Procreate và Photoshop"],
                correct: 2,
                explanation: "Motion & Video là năm 7 (cuối) của lộ trình Art, sử dụng Adobe Premiere Pro và After Effects — bộ công cụ tiêu chuẩn của video editor và motion designer chuyên nghiệp."
              },
              // PRODUCT — Robotics (4 câu)
              {
                q: "Lộ trình Robotics MindX gồm bao nhiêu năm và kit quốc tế nào được sử dụng?",
                options: ["3 năm — LEGO Mindstorms", "4 năm — LEGO Spike Essential + VEX GO + VEX IQ", "5 năm — Arduino + Raspberry Pi", "4 năm — VEX IQ toàn bộ"],
                correct: 1,
                explanation: "Robotics MindX: 4 năm — Năm 0 (4+): LEGO Spike Essential, Năm 1–2 (6+, 8+): VEX GO, Năm 3 (10+): VEX IQ. Đây là bộ kit chuẩn thi đấu quốc tế."
              },
              {
                q: "Năm 3 Robotics (VEX IQ) dạy con điều gì đặc biệt mà các năm trước không có?",
                options: ["Lập trình kéo thả Scratch", "Lập trình text-based (Python/C++) và nguyên lý PID Controller", "Lắp ráp LEGO cơ bản", "Thi đấu Robotics trong nước"],
                correct: 1,
                explanation: "Năm 3 VEX IQ là bước chuyển lớn: lập trình text-based thay vì kéo thả, và học nguyên lý PID Controller — nguyên lý điều khiển của xe tự lái Tesla và cánh tay robot công nghiệp."
              },
              {
                q: "VEX IQ Challenge là giải Robotics gì?",
                options: ["Giải trong nước tổ chức bởi Bộ Giáo dục Việt Nam", "Giải Robotics K12 uy tín nhất thế giới với 30,000+ đội từ 80+ quốc gia", "Giải khu vực Đông Nam Á", "Giải nội bộ của MindX"],
                correct: 1,
                explanation: "VEX IQ Challenge là giải Robotics K12 uy tín nhất toàn cầu — 30,000+ đội từ 80+ quốc gia tham dự. Học viên MindX năm 3 sử dụng cùng kit thi đấu quốc tế này."
              },
              {
                q: "Phụ huynh có con 5 tuổi muốn cho con làm quen với công nghệ — nên tư vấn khóa nào?",
                options: ["Scratch Coding (8+)", "Kỹ sư Robot nhí — Robotics năm 0 (4+)", "Little Artist (4+) Art", "Cả B và C đều phù hợp"],
                correct: 3,
                explanation: "Cả Kỹ sư Robot nhí (4+) và Little Artist (4+) đều phù hợp cho bé 5 tuổi. TVTS nên hỏi thêm về sở thích của bé để tư vấn đúng hướng."
              },
              // SELLING SKILLS (10 câu)
              {
                q: "Trong quy trình Sale 7 bước của MindX, bước nào quan trọng nhất để không bỏ lỡ lead?",
                options: ["Booking (đặt lịch hẹn)", "Tiếp nhận lead và phân loại ngay trong 24h đầu", "Follow-up sau tư vấn", "Handover sang CS"],
                correct: 1,
                explanation: "Tiếp nhận và phân loại lead trong 24h đầu là bước quyết định — lead 'nguội' nhanh hơn bạn nghĩ. Phân loại đúng (hot/warm/cold) giúp ưu tiên thời gian đúng chỗ."
              },
              {
                q: "Trong SPIN Selling, chữ 'P' là gì và có mục đích gì?",
                options: ["Problem — khai thác vấn đề con gặp phải", "Prospect — xác định tiềm năng mua của PH", "Payment — hỏi về ngân sách", "Product — giới thiệu sản phẩm phù hợp"],
                correct: 0,
                explanation: "SPIN = Situation (hoàn cảnh) → Problem (vấn đề) → Implication (hệ quả) → Need-payoff (giải pháp). 'P - Problem' là bước khai thác vấn đề cụ thể PH đang gặp."
              },
              {
                q: "Khi nào TVTS nên dùng câu 'chốt thử' (trial close)?",
                options: ["Ngay khi mới giới thiệu sản phẩm", "Sau khi đã trình bày xong và xử lý được từ chối", "Chỉ khi PH chủ động hỏi về đăng ký", "Sau ít nhất 3 lần gặp mặt"],
                correct: 1,
                explanation: "Trial close chỉ hiệu quả sau khi TVTS đã: (1) hiểu nhu cầu PH, (2) trình bày giải pháp phù hợp, (3) xử lý các từ chối chính. Chốt quá sớm gây áp lực và phản tác dụng."
              },
              {
                q: "PH Type D (Dominant) ngắt lời và hỏi thẳng về giá — TVTS nên phản ứng thế nào?",
                options: ["Xin lỗi và tiếp tục trình bày từ đầu", "Trả lời thẳng về giá và kết quả, không vòng vo", "Hỏi thêm câu hỏi khám phá nhu cầu trước", "Giải thích tại sao cần nghe đủ thông tin trước khi biết giá"],
                correct: 1,
                explanation: "Type D ghét vòng vo. Khi họ hỏi giá → trả lời thẳng giá + kết quả ngay. Sau đó mới dẫn vào chi tiết. Không 'delay' câu trả lời trực tiếp với Type D."
              },
              {
                q: "Tỷ lệ close cao nhất ở kênh tư vấn nào?",
                options: ["Zalo/Messenger", "Điện thoại", "Tư vấn trực tiếp tại trung tâm", "Email"],
                correct: 2,
                explanation: "Trực tiếp tại trung tâm có tỷ lệ close cao nhất — vì TVTS có thể demo, tour phòng học, tạo cảm xúc thật, xử lý từ chối ngay tại chỗ và dùng môi trường học để tạo ấn tượng."
              },
              {
                q: "KPI nào không phải KPI chuẩn của TVTS MindX?",
                options: ["Số lead tiếp nhận/tháng", "Tỷ lệ chuyển đổi từ lead thành trial", "Số bài post mạng xã hội/tháng", "Doanh thu từ đăng ký mới"],
                correct: 2,
                explanation: "Số bài đăng mạng xã hội không phải KPI cốt lõi của TVTS. KPI TVTS tập trung vào: số lead, tỷ lệ chuyển đổi, số buổi trial, tỷ lệ close và doanh thu."
              },
              {
                q: "Sau buổi trial, thời điểm tốt nhất để gọi điện cho PH là khi nào?",
                options: ["Sáng hôm sau", "Trong ngày diễn ra buổi trial", "2–3 ngày sau để PH có thời gian suy nghĩ", "Chỉ gọi khi PH chủ động nhắn tin"],
                correct: 1,
                explanation: "Gọi ngay trong ngày trial — khi cảm xúc của cả PH và con đang ở mức cao nhất. Mỗi ngày delay = cảm xúc nguội dần = cơ hội close giảm."
              },
              {
                q: "Phương pháp Feel–Felt–Found dùng để làm gì?",
                options: ["Khai thác nhu cầu PH bằng câu hỏi mở", "Xử lý từ chối bằng cách đồng cảm và chia sẻ kinh nghiệm", "Chốt sale bằng cách tạo urgency", "Giới thiệu sản phẩm theo thứ tự logic"],
                correct: 1,
                explanation: "Feel–Felt–Found là framework xử lý từ chối: đồng cảm với cảm xúc PH (Feel), chia sẻ rằng PH khác cũng từng cảm thấy vậy (Felt), rồi dẫn đến điều họ khám phá ra sau khi tìm hiểu kỹ (Found)."
              },
              {
                q: "Khi PH đang so sánh MindX với đối thủ, TVTS nên làm gì?",
                options: ["Nói xấu đối thủ để PH thấy MindX tốt hơn", "Giảm giá để cạnh tranh trực tiếp", "Hỏi PH còn điểm nào chưa thỏa mãn, rồi kết nối với điểm mạnh của MindX", "Không nói gì về đối thủ"],
                correct: 2,
                explanation: "TVTS không bao giờ nói xấu đối thủ. Thay vào đó, hỏi PH còn thiếu gì ở chỗ khác — rồi kết nối đúng điểm đó với USP của MindX. PH tự nhận ra sự khác biệt hiệu quả hơn nhiều."
              },
              {
                q: "Bước 'Handover sang CS' trong quy trình 7 bước có mục đích gì?",
                options: ["Kết thúc trách nhiệm của TVTS với học viên đó", "Đảm bảo học viên được chào đón, onboard tốt và không bị 'rơi' sau khi đăng ký", "Chuyển toàn bộ dữ liệu PH sang bộ phận chăm sóc", "Thu học phí còn lại"],
                correct: 1,
                explanation: "Handover tốt = học viên cảm thấy được chào đón và biết rõ bước tiếp theo. TVTS giới thiệu CS và đảm bảo không có khoảng trống thông tin. Đây là bước quan trọng để tránh refund."
              },
              // MINDSET & COMPANY (6 câu)
              {
                q: "MindX được thành lập năm nào và với tên gọi ban đầu là gì?",
                options: ["2010, tên 'TechKids VN'", "2015, tên 'Techkids'", "2017, tên 'MindX Coding'", "2013, tên 'iCode'"],
                correct: 1,
                explanation: "MindX thành lập năm 2015 với tên gọi 'Techkids' — lớp lập trình đầu tiên cho trẻ em tại Hà Nội. Chính thức đổi tên MindX Technology School năm 2017."
              },
              {
                q: "Theo số liệu 2025–2026, MindX có bao nhiêu học viên và trung tâm?",
                options: ["50,000 học viên, 30+ trung tâm", "80,000+ học viên, 50+ trung tâm", "100,000+ học viên, 50+ trung tâm", "200,000 học viên, 100+ trung tâm"],
                correct: 2,
                explanation: "MindX 2025–2026: 100,000+ học viên (tích lũy), 50+ trung tâm toàn quốc, 500+ giáo viên, 200+ TVTS."
              },
              {
                q: "Triết lý chọn trường của phụ huynh Việt Nam là gì? (Insight từ nghiên cứu hành vi)",
                options: ["'Chọn trường tốt nhất' ở mọi cấp", "'Cấp 1 chọn cô, Cấp 2 chọn lớp, Cấp 3 chọn trường'", "'Chọn theo bạn bè' ở mọi cấp", "'Ưu tiên học phí phù hợp'"],
                correct: 1,
                explanation: "Nghiên cứu hành vi PH Việt Nam: 'Cấp 1 chọn cô, Cấp 2 chọn lớp, Cấp 3 chọn trường'. Với K12, GIÁO VIÊN / MENTOR là yếu tố niềm tin quan trọng hơn cả thương hiệu."
              },
              {
                q: "Mindset nào KHÔNG phải mindset của TVTS chuyên nghiệp MindX?",
                options: ["Tư vấn viên — không phải người bán hàng", "Đồng hành dài hạn với PH và học viên", "Chốt sale nhanh nhất có thể trong buổi đầu tiên", "Hiểu sản phẩm sâu để tư vấn đúng"],
                correct: 2,
                explanation: "TVTS chuyên nghiệp không rush close ngay buổi đầu tiên — đặc biệt với sản phẩm giáo dục dài hạn. Chốt sale quá sớm = PH chưa hiểu đủ = tỷ lệ refund cao và không có referral."
              },
              {
                q: "Insight nào của PH Việt Nam có ảnh hưởng lớn nhất đến quyết định mua khóa học?",
                options: ["Muốn con giỏi hơn bản thân PH", "Sợ con thua bạn bè đồng trang lứa (competition externality)", "Muốn tiết kiệm chi phí giáo dục", "Muốn con có nhiều thời gian tự do"],
                correct: 1,
                explanation: "Nghiên cứu World Bank: 'competition externality' — sợ con thua người khác — là động lực mua mạnh nhất. PH thấy 'bạn con đã học' thì quyết định nhanh hơn so với nghe về lợi ích học thuật."
              },
              {
                q: "Checklist 'ngày đầu tiên' của TVTS MindX bao gồm những gì (ưu tiên cao nhất)?",
                options: ["Đọc toàn bộ tài liệu sản phẩm, học thuộc giá", "Chào hỏi đồng nghiệp và làm quen trung tâm, cài app CRM, nhận lead đầu tiên", "Thiết kế lại profile mạng xã hội cá nhân", "Học thuộc 10 kịch bản từ chối"],
                correct: 1,
                explanation: "Ngày đầu tiên ưu tiên: làm quen môi trường, thiết lập hệ thống công việc (CRM, liên lạc), hiểu qui trình cơ bản và nhận lead đầu tiên. Học sản phẩm và kịch bản là quá trình liên tục."
              }
            ]
          }
        },

        /* ---------- Bài 2: CRM cơ bản ---------- */
        {
          id: "day5_s2",
          title: "Hướng dẫn CRM cơ bản",
          icon: "💻",
          content: `<h3>CRM — Hệ thống quản lý khách hàng của TVTS</h3>
<p>CRM (Customer Relationship Management) là "bộ não" công việc của TVTS — nơi lưu trữ toàn bộ thông tin lead, theo dõi tiến trình và đảm bảo không bỏ sót bất kỳ cơ hội nào. Làm quen với CRM là ưu tiên số 1 trong tuần đầu làm việc.</p>

<h4>📋 Các bước cơ bản sử dụng CRM MindX</h4>

<div class="insight-card">
  <div class="insight-number">1</div>
  <div class="insight-body">
    <h4>Tạo và cập nhật hồ sơ Lead</h4>
    <p>Mỗi lead tiếp nhận phải được tạo hồ sơ trong CRM ngay — không trì hoãn. Thông tin cần điền đầy đủ:</p>
    <ul>
      <li><strong>Thông tin PH:</strong> Họ tên, SĐT, email, kênh tiếp cận</li>
      <li><strong>Thông tin con:</strong> Tuổi, lớp, sở thích, chương trình quan tâm</li>
      <li><strong>Tình trạng lead:</strong> New / Contacted / Qualified / Trial Booked / Enrolled / Closed</li>
      <li><strong>Ghi chú buổi tư vấn:</strong> Pain point chính, từ chối gặp phải, next step đã hẹn</li>
    </ul>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">2</div>
  <div class="insight-body">
    <h4>Phân loại và ưu tiên lead</h4>
    <p>Không phải lead nào cũng có cùng mức độ ưu tiên. Phân loại:</p>
    <ul>
      <li><strong>Hot Lead (🔴):</strong> Đã liên hệ, có nhu cầu rõ, chỉ cần book lịch → Liên hệ trong 2–4 giờ</li>
      <li><strong>Warm Lead (🟡):</strong> Quan tâm nhưng chưa cụ thể → Liên hệ trong 24 giờ</li>
      <li><strong>Cold Lead (🔵):</strong> Chỉ để thông tin, chưa thể hiện nhu cầu → Liên hệ trong 48–72 giờ, nuture dài hạn</li>
    </ul>
    <p><strong>Quy tắc:</strong> Hot lead phải được xử lý trước — đừng để mất cơ hội vì bận xử lý cold lead.</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">3</div>
  <div class="insight-body">
    <h4>Thiết lập Task và Reminder</h4>
    <p>Mỗi lead cần có ít nhất 1 task/reminder tiếp theo:</p>
    <ul>
      <li>Sau cold call → Reminder: "Gửi tài liệu qua Zalo" hoặc "Gọi lại vào [ngày/giờ đã hẹn]"</li>
      <li>Sau buổi tư vấn → Reminder: "Follow-up call trong 24h"</li>
      <li>Sau buổi trial → Reminder: "Gọi ngay trong ngày để chốt"</li>
      <li>Lead chưa phản hồi → Reminder: "Nuture sau 7 ngày"</li>
    </ul>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">4</div>
  <div class="insight-body">
    <h4>Theo dõi Pipeline và KPI cá nhân</h4>
    <p>CRM cho phép bạn xem pipeline của mình: bao nhiêu lead ở mỗi giai đoạn, tỷ lệ chuyển đổi giữa các bước, và dự báo doanh thu tháng. Kiểm tra pipeline <strong>mỗi sáng</strong> để ưu tiên công việc trong ngày.</p>
    <p><strong>Chỉ số cần theo dõi hàng tuần:</strong></p>
    <ul>
      <li>Số lead mới tiếp nhận</li>
      <li>Số cuộc gọi thực hiện</li>
      <li>Số buổi trial đặt được</li>
      <li>Số đăng ký mới</li>
      <li>Tỷ lệ trial-to-enroll</li>
    </ul>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">5</div>
  <div class="insight-body">
    <h4>Handover lead sang CS sau khi close</h4>
    <p>Sau khi lead đăng ký thành công, thực hiện handover sang bộ phận CS:</p>
    <ul>
      <li>Cập nhật status trong CRM: "Enrolled"</li>
      <li>Điền form handover: thông tin PH, sản phẩm đã mua, lịch học bắt đầu, ghi chú đặc biệt</li>
      <li>Giới thiệu PH với CS qua Zalo hoặc email</li>
      <li>Lưu lại để follow-up renewal sau 1–2 tháng</li>
    </ul>
  </div>
</div>

<h4>⚠️ 5 Sai lầm CRM phổ biến nhất của TVTS mới</h4>
<table class="compare-table">
  <thead><tr><th>#</th><th>Sai lầm</th><th>Hậu quả</th><th>Cách tránh</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Không tạo hồ sơ lead ngay — để "nhớ sau"</td><td>Mất thông tin, quên follow-up</td><td>Tạo hồ sơ ngay khi có lead — dù chỉ 2 phút</td></tr>
    <tr><td>2</td><td>Không ghi chú sau buổi tư vấn</td><td>Follow-up không nhớ đã nói gì → mất tin</td><td>Ghi chú ngay sau khi PH rời đi — tối đa 5 phút</td></tr>
    <tr><td>3</td><td>Không set reminder/task tiếp theo</td><td>Lead "nguội" vì không có ai chủ động</td><td>Mỗi lead phải có ít nhất 1 task scheduled</td></tr>
    <tr><td>4</td><td>Bỏ qua Cold lead hoàn toàn</td><td>Mất 20–30% cơ hội dài hạn</td><td>Có plan nurture tự động cho cold lead (2 tuần/lần)</td></tr>
    <tr><td>5</td><td>Không handover kỹ sau khi close</td><td>Học viên mới cảm thấy bị bỏ rơi → refund sớm</td><td>Dùng checklist handover chuẩn, giới thiệu CS cá nhân</td></tr>
  </tbody>
</table>

<div class="key-takeaway">
  <h4>🏆 Key Takeaway — Bài 2</h4>
  <p>CRM không phải "báo cáo để nộp cho sếp" — đó là <strong>hệ thống bảo vệ thu nhập của bạn</strong>. Mỗi lead trong CRM là tiền. Mỗi task không được set là cơ hội bị bỏ lỡ. TVTS có pipeline sạch và đầy đủ thông tin luôn outperform người không dùng CRM nghiêm túc.</p>
</div>

<div class="practice-exercise">
  <h4>✏️ Bài tập thực hành</h4>
  <p>Đăng nhập CRM MindX ngay hôm nay. Tạo ít nhất 3 hồ sơ lead thử (dùng thông tin giả hoặc lead thật nếu đã có). Đảm bảo mỗi hồ sơ có đủ: thông tin PH, thông tin con, tình trạng lead, ghi chú và ít nhất 1 task scheduled. Sau đó kiểm tra xem pipeline của bạn trông như thế nào.</p>
</div>`,
          quiz: {
            id: "quiz_day5_s2",
            title: "Quiz: CRM cơ bản",
            questions: [
              {
                q: "Hot lead cần được liên hệ trong khung thời gian nào?",
                options: ["24–48 giờ", "Trong ngày", "2–4 giờ", "Trong tuần"],
                correct: 2,
                explanation: "Hot lead — PH đã liên hệ, có nhu cầu rõ — cần được xử lý trong 2–4 giờ. Mỗi giờ delay = xác suất cao họ sẽ liên hệ đối thủ hoặc nguội hứng."
              },
              {
                q: "Sau buổi tư vấn trực tiếp, thông tin gì QUAN TRỌNG NHẤT cần ghi chú vào CRM ngay?",
                options: ["Diện mạo và trang phục của PH", "Pain point chính, từ chối gặp phải và next step đã hẹn", "Giá họ muốn trả", "Số điện thoại của PH"],
                correct: 1,
                explanation: "Pain point + từ chối + next step là tam giác vàng của ghi chú sau tư vấn. Thông tin này quyết định cách bạn follow-up — nếu quên sẽ phải hỏi lại từ đầu, rất mất chuyên nghiệp."
              },
              {
                q: "Sai lầm CRM nào dẫn đến tỷ lệ refund cao nhất?",
                options: ["Không phân loại lead đúng", "Không ghi chú sau tư vấn", "Không handover kỹ sau khi close — học viên mới cảm thấy bị bỏ rơi", "Quên set reminder"],
                correct: 2,
                explanation: "Handover kém = học viên mới không biết mình sẽ học ở đâu, với ai, khi nào → lo lắng → refund. Handover tốt tạo cảm giác chào đón và giảm anxiety giai đoạn đầu."
              }
            ]
          }
        },

        /* ---------- Bài 3: Hình ảnh & Tác phong ---------- */
        {
          id: "day5_s3",
          title: "Hình ảnh & Tác phong chuyên nghiệp",
          icon: "👔",
          content: `<h3>Hình ảnh chuyên nghiệp — Tiêu chuẩn TVTS MindX</h3>
<p>Ấn tượng đầu tiên được tạo ra trong 7 giây — và phụ huynh đang đánh giá bạn ngay từ khoảnh khắc họ bước vào trung tâm. Hình ảnh chuyên nghiệp không phải "ăn mặc đẹp" — đó là <strong>truyền tải sự đáng tin cậy</strong> để PH an tâm giao con cho MindX.</p>

<h4>👗 Dress Code chuẩn MindX</h4>
<table class="compare-table">
  <thead><tr><th>Hạng mục</th><th>✅ Chuẩn</th><th>❌ Không phù hợp</th></tr></thead>
  <tbody>
    <tr><td>Trang phục chung</td><td>Áo đồng phục MindX (nếu có) hoặc smart casual — áo sơ mi, polo, blazer nhẹ</td><td>Áo thun quảng cáo, áo thể thao, quần jean rách</td></tr>
    <tr><td>Màu sắc</td><td>Màu trung tính, chuyên nghiệp — navy, trắng, xám, be</td><td>Màu quá nổi, họa tiết rối mắt</td></tr>
    <tr><td>Giày dép</td><td>Giày da, sneaker sạch, loafer</td><td>Dép lê, giày thể thao bẩn</td></tr>
    <tr><td>Tóc</td><td>Gọn gàng, sạch sẽ, không quá phóng khoáng</td><td>Tóc bờm xờm, màu nhuộm quá nổi bật</td></tr>
    <tr><td>Phụ kiện</td><td>Tối giản — đồng hồ, bảng tên MindX</td><td>Phụ kiện cồng kềnh, mùi nước hoa quá nặng</td></tr>
  </tbody>
</table>

<h4>💬 Tiêu chuẩn giao tiếp với Phụ huynh</h4>

<div class="insight-card">
  <div class="insight-number">1</div>
  <div class="insight-body">
    <h4>Ngôn ngữ và xưng hô</h4>
    <ul>
      <li>✅ Gọi PH: "Anh/chị [Tên]" — cá nhân hóa, không gọi chung chung "quý khách"</li>
      <li>✅ Tự xưng: "mình" (thân thiện nhưng lịch sự) hoặc "em" (nếu PH lớn tuổi hơn nhiều)</li>
      <li>✅ Gọi con của PH: "bé [Tên]" — KHÔNG gọi "học viên" hay "con bạn"</li>
      <li>✅ Kết thúc câu: "ạ" — luôn lịch sự, không cộc lốc</li>
      <li>❌ Không dùng tiếng lóng, không nói trống không</li>
    </ul>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">2</div>
  <div class="insight-body">
    <h4>Ngôn ngữ cơ thể</h4>
    <ul>
      <li>✅ Giao tiếp bằng mắt — 60–70% thời gian nhìn vào PH</li>
      <li>✅ Gật đầu khi PH nói — thể hiện lắng nghe chủ động</li>
      <li>✅ Ngồi thẳng lưng, hướng người về phía PH</li>
      <li>✅ Mỉm cười tự nhiên khi chào hỏi</li>
      <li>❌ Không nhìn vào điện thoại khi PH đang nói</li>
      <li>❌ Không khoanh tay — ngôn ngữ cơ thể đóng</li>
    </ul>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">3</div>
  <div class="insight-body">
    <h4>Giao tiếp qua Zalo/điện thoại</h4>
    <ul>
      <li>✅ Phản hồi trong vòng 1 giờ trong giờ làm việc</li>
      <li>✅ Tin nhắn đầy đủ câu, không dùng viết tắt quá nhiều</li>
      <li>✅ Khi gọi điện: giới thiệu tên và trung tâm ngay từ đầu</li>
      <li>✅ Cuối buổi gọi: xác nhận lại next step bằng tin nhắn</li>
      <li>❌ Không nhắn tin lúc quá muộn (sau 21h) hoặc quá sớm (trước 8h)</li>
      <li>❌ Không dùng sticker/emoji quá nhiều trong tin nhắn tư vấn chính thức</li>
    </ul>
  </div>
</div>

<h4>📅 Daily Checklist — Bắt đầu mỗi ngày làm việc</h4>
<ul>
  <li>☐ Kiểm tra CRM: lead mới, reminder hôm nay, pipeline tổng quan</li>
  <li>☐ Ưu tiên top 3 task quan trọng nhất trong ngày</li>
  <li>☐ Xem lịch trial/tư vấn hôm nay — chuẩn bị hồ sơ từng PH</li>
  <li>☐ Kiểm tra trang phục, badge MindX đầy đủ</li>
  <li>☐ Chuẩn bị phòng tư vấn: nước, tài liệu, iPad/máy tính</li>
  <li>☐ Gửi confirm lịch cho PH có buổi tư vấn hôm nay</li>
  <li>☐ Follow-up lead từ hôm qua chưa phản hồi</li>
  <li>☐ Ghi nhận kết quả buổi tư vấn cuối ngày vào CRM</li>
</ul>

<h4>📱 Hình ảnh online — Mạng xã hội cá nhân</h4>
<p>PH ngày nay thường "research" TVTS trước buổi gặp. Profile mạng xã hội của bạn là phần mở rộng của hình ảnh chuyên nghiệp:</p>
<ul>
  <li>✅ Avatar ảnh chuyên nghiệp, nhận ra được (không dùng ảnh nhân vật hoặc cảnh)</li>
  <li>✅ Bio đề cập đến MindX và lĩnh vực làm việc</li>
  <li>✅ Nội dung đăng tải phù hợp — tránh nội dung gây tranh cãi</li>
  <li>✅ Chia sẻ success story học viên (với sự đồng ý của PH)</li>
</ul>

<div class="key-takeaway">
  <h4>🏆 Key Takeaway — Bài 3</h4>
  <p>Hình ảnh chuyên nghiệp là <strong>lớp trust đầu tiên</strong> bạn xây dựng với PH — trước khi bạn nói một câu nào. TVTS có hình ảnh tốt = PH cảm thấy an tâm = dễ tư vấn hơn. Đây không phải chuyện ngoại hình — đây là professional branding của bạn.</p>
</div>

<div class="practice-exercise">
  <h4>✏️ Bài tập thực hành</h4>
  <p>Chụp ảnh bản thân trong trang phục làm việc và nhờ trưởng nhóm hoặc đồng nghiệp cho feedback theo checklist dress code. Kiểm tra profile Zalo/Facebook — đảm bảo ảnh đại diện và bio phù hợp chuẩn MindX. Thực hiện daily checklist vào sáng đầu tuần làm việc đầu tiên.</p>
</div>`,
          quiz: {
            id: "quiz_day5_s3",
            title: "Quiz: Hình ảnh & Tác phong",
            questions: [
              {
                q: "Trong giao tiếp với phụ huynh, TVTS nên gọi con của phụ huynh là gì?",
                options: ["'Học viên'", "'Con bạn'", "'Bé [Tên]' — cá nhân hóa bằng tên con", "'Bé nhà mình'"],
                correct: 2,
                explanation: "Gọi tên con cụ thể ('bé Minh', 'bé An') tạo cảm giác cá nhân hóa và gần gũi. PH cảm thấy bạn thực sự quan tâm đến con họ — không phải chỉ đang bán hàng."
              },
              {
                q: "Thời gian phản hồi tin nhắn Zalo trong giờ làm việc là bao lâu?",
                options: ["24 giờ", "Trong ngày hôm đó", "Trong vòng 1 giờ", "Trong vòng 30 phút"],
                correct: 2,
                explanation: "Phản hồi trong 1 giờ là tiêu chuẩn chuyên nghiệp — PH cảm thấy được tôn trọng và TVTS nghiêm túc. Trễ hơn 1 giờ, PH có thể đã liên hệ trung tâm khác."
              },
              {
                q: "Daily checklist buổi sáng của TVTS nên BẮT ĐẦU bằng việc gì?",
                options: ["Đọc email công ty", "Kiểm tra CRM — lead mới, reminder và pipeline", "Chuẩn bị trang phục", "Pha cà phê và hỏi thăm đồng nghiệp"],
                correct: 1,
                explanation: "Kiểm tra CRM đầu ngày giúp TVTS biết ngay: có lead mới nào cần xử lý không, có reminder quan trọng nào hôm nay không, và pipeline đang ở đâu. Đây là 5 phút đầu tư quan trọng nhất."
              }
            ]
          }
        }

      ] // end day5 sections
    } // end day5

  ] // end days
},

  /* --------------------------------------------------------
     TRACKS
     -------------------------------------------------------- */
  tracks: {
    k12_sale: {
      id: "k12_sale",
      title: "K12 Sale",
      description: "Tư vấn tuyển sinh K12 — Đối tượng chính. Hoàn thành đầy đủ lộ trình Onboard 5 ngày.",
      icon: "🎯",
      detail: "Đây là track đào tạo chính và chi tiết nhất. TVTS K12 Sale cần nắm vững toàn bộ 5 ngày Onboard: Customer Insight, Product Mastery (Coding + Art + Robotics), Selling Skills, Simulation, và Assessment. Tham khảo lộ trình Onboard 5 ngày để bắt đầu.",
      modules: ["Onboard 5 ngày (đầy đủ)", "Product: Coding + Art + Robotics", "Kỹ năng tư vấn PH", "Xử lý từ chối", "CRM & Hệ thống"]
    },
    k12_cs: {
      id: "k12_cs",
      title: "K12 CS (Customer Success)",
      description: "Chăm sóc học viên K12 — Quản lý lớp, upsale, retention.",
      icon: "💚",
      detail: "CS K12 focus vào chăm sóc học viên sau đăng ký. Mục tiêu: retention rate cao, upsale (combo dài hơn, thêm lộ trình), và referral từ PH hài lòng.",
      modules: ["Tổng quan MindX & Sản phẩm K12 (overview)", "Quản lý lớp học & theo dõi tiến độ", "Kỹ năng chăm sóc PH/học viên", "Upsale cơ bản: combo upgrade, thêm lộ trình", "Xử lý khiếu nại & feedback PH"]
    },
    k18_sale: {
      id: "k18_sale",
      title: "K18 Sale",
      description: "Tư vấn tuyển sinh K18+ — 7 sản phẩm: Coding, Data, ITBA, UI/UX, Marketing, Data Engineer, AI.",
      icon: "🚀",
      detail: "TVTS K18 focus vào 7 sản phẩm cho người lớn (18+): XCareer Coding, AI-Data Analyst, IT Business Analyst, UI/UX Designer, Fullstack Marketing, Data Engineer, AI. Đối tượng khách hàng: sinh viên năm 3-4, người đi làm 1-3 năm muốn chuyển ngành, người 5+ năm muốn upskill. 80K+ học viên, 200+ đối tác doanh nghiệp, cam kết việc làm. Hoàn thành lộ trình Onboard K18 (5 ngày) để bắt đầu tư vấn.",
      modules: ["Onboard K18 (5 ngày đầy đủ)", "7 sản phẩm 18+: Coding, Data, ITBA, UI/UX, Marketing, DE, AI", "Insight 3 nhóm KH: SV, người chuyển ngành, người upskill", "Kỹ năng tư vấn người lớn & Xử lý từ chối 18+", "ROI selling, cam kết việc làm, Internship X"]
    },
    k18_cs: {
      id: "k18_cs",
      title: "K18 CS (Customer Success)",
      description: "Chăm sóc học viên K18+ — Quản lý learner trưởng thành, retention, career support.",
      icon: "📞",
      detail: "CS K18 quản lý học viên người lớn — đặc thù: bận rộn, hay bỏ học giữa chừng (tỷ lệ drop cao hơn K12). Cần proactive follow-up, motivation, và career support. Quản lý 7 sản phẩm: Coding, Data Analyst, ITBA, UI/UX, Marketing, Data Engineer, AI. Pipeline 18+: attendance tracking → engagement → career prep → job placement.",
      modules: ["Đặc thù học viên 18+ (bận, dễ drop, cần motivation)", "Follow-up proactive: Zalo/call 2-3 lần/tuần", "Hỗ trợ career: CV review, mock interview, portfolio feedback", "Quản lý attendance & completion rate (KPI: >80%)", "Upsale: khóa nâng cao, chuyên lộ trình, mentorship 1-1"]
    },
    manager: {
      id: "manager",
      title: "Quản lý",
      description: "Dành cho Team Lead & BU Manager — Quản lý đội nhóm, KPI, coaching.",
      icon: "👑",
      detail: "Track dành cho quản lý cấp trung: Team Lead và BU Manager. Focus vào quản lý đội ngũ TVTS, set KPI, coaching cá nhân, và báo cáo hiệu suất.",
      modules: ["Leadership & quản lý đội sale", "KPI setting & tracking", "Coaching 1-on-1: kỹ thuật & template", "Recruitment & onboard nhân sự mới", "Báo cáo hiệu suất & data-driven decision"]
    }
  },


  /* --------------------------------------------------------
     MICROLEARNING
     -------------------------------------------------------- */
  microlearning: {
    tips: [
      { id: "tip1", week: "Tuần 1", title: "Kỹ thuật Mirror & Match", content: "Khi tư vấn, hãy 'mirror' (phản chiếu) ngôn ngữ cơ thể và tốc độ nói của PH. Nếu PH nói chậm rãi → bạn cũng chậm lại. PH nói nhanh → bạn tăng tempo. Điều này tạo rapport vô thức — PH cảm thấy 'ăn ý' với bạn.", read: false },
      { id: "tip2", week: "Tuần 2", title: "Rule of 3 trong Pitch", content: "Khi giới thiệu sản phẩm, chỉ nêu 3 điểm mạnh — không hơn. Não người nhớ tốt nhất khi thông tin gói gọn trong 3. VD: '3 lý do PH nên chọn MindX: Lộ trình 5 năm, Giáo trình AI, Bảo trợ việc làm.'", read: false },
      { id: "tip3", week: "Tuần 3", title: "Giờ vàng gọi điện", content: "Thời điểm gọi điện tốt nhất: 9:30-11:00 sáng (PH đã ổn định công việc) và 14:00-16:00 chiều (PH relaxed). Tránh: 12:00-13:30 (nghỉ trưa), sau 20:00 (gia đình).", read: false },
      { id: "tip4", week: "Tuần 4", title: "Kỹ thuật 'Feel-Felt-Found'", content: "Khi PH từ chối: 'Em HIỂU anh/chị CẢM THẤY [lo ngại] (Feel). Nhiều PH khác ban đầu cũng CẢM THẤY vậy (Felt). Nhưng sau khi cho con thử, họ NHẬN THẤY [kết quả tích cực] (Found).' → Framework cực kỳ hiệu quả!", read: false },
      { id: "tip5", week: "Tuần 5", title: "Power of Silence", content: "Sau khi báo giá hoặc đặt câu hỏi close — IM LẶNG. Đừng nói thêm. Người nào nói trước = người yếu thế hơn. Để PH tự xử lý thông tin. 5-10 giây im lặng có thể tạo ra magic.", read: false },
      { id: "tip6", week: "Tuần 6", title: "Kỹ thuật 'Yes Ladder'", content: "Trước khi đặt câu hỏi close lớn, hãy đặt 3-4 câu hỏi nhỏ mà PH sẽ trả lời 'Có': 'Con thích buổi thử chứ ạ?' → 'Có'. 'Anh/chị thấy lộ trình phù hợp không?' → 'Có'. 'Anh/chị muốn con phát triển kỹ năng này chứ?' → 'Có'. Khi não đã nói 'Có' 3 lần, câu 'Có' thứ 4 (đăng ký) dễ dàng hơn rất nhiều.", read: false },
      { id: "tip7", week: "Tuần 7", title: "Storytelling — Kể chuyện bằng FAB", content: "Đừng liệt kê tính năng — hãy KỂ CHUYỆN. Feature: 'Lộ trình 5 năm'. Advantage: 'Con có career path rõ ràng từ Scratch đến AI'. Benefit: 'Con 15 tuổi đã có portfolio ấn tượng, sẵn sàng du học hoặc freelance'. PH không mua tính năng — PH mua TƯƠNG LAI cho con.", read: false },
      { id: "tip8", week: "Tuần 8", title: "Giải mã ngôn ngữ cơ thể PH", content: "Quan sát PH khi tư vấn: Khoanh tay = phòng thủ → cần phá băng thêm. Gật đầu + nghiêng người về phía bạn = đang hứng thú → thời điểm pitch. Nhìn đồng hồ/điện thoại = đang mất kiên nhẫn → cần đi thẳng vào trọng tâm. Hỏi con = đang cân nhắc nghiêm túc → cho con trải nghiệm demo.", read: false },
      { id: "tip9", week: "Tuần 9", title: "Kỹ thuật Anchoring nâng cao", content: "Không chỉ anchoring giá (24T trước, 12T sau). Áp dụng anchoring KẾT QUẢ: 'Lương Senior Developer 50-100 triệu/tháng. Với 42 buổi/năm, mỗi buổi chỉ bằng 1 bữa ăn ngoài — nhưng giá trị thì theo con CẢ ĐỜI.' So sánh chi phí nhỏ với kết quả lớn = reframe cực mạnh.", read: false },
      { id: "tip10", week: "Tuần 10", title: "Follow-up: 5 lần mới chốt", content: "Thống kê: 80% deal chốt sau follow-up lần 2-5. Nhưng 44% TVTS bỏ cuộc sau lần 1! Mỗi lần follow-up phải ADD VALUE: Lần 1: Gửi video project HV. Lần 2: Mời trial miễn phí. Lần 3: Share case study phù hợp. Lần 4: Thông báo ưu đãi sắp hết. Lần 5: Nhắc lại pain point + giải pháp. KHÔNG BAO GIỜ gọi chỉ để hỏi 'Anh/chị suy nghĩ thế nào?'", read: false }
    ],
    caseStudies: [
      {
        id: "cs1",
        title: "Case Study: Chốt combo 24 tháng nhờ demo Scratch",
        type: "success",
        content: `<strong>Bối cảnh:</strong> PH đưa con 9 tuổi đến trung tâm. Con thích chơi Minecraft. PH lo con nghiện game.

<strong>Diễn biến:</strong> TVTS Minh cho bé thử Scratch — tạo game platform giống Minecraft mini trong 15 phút. Bé cực kỳ hào hứng: "Mẹ ơi, con làm được game!" PH bất ngờ, hỏi thêm về lộ trình. TVTS kết nối: "Năm 2, con sẽ dùng Python — giống ngôn ngữ mà Minecraft được tạo ra!"

<strong>Kết quả:</strong> PH đăng ký combo 24 tháng tại chỗ. Sau 3 tháng, PH giới thiệu thêm 2 bạn.

<strong>Bài học:</strong> Demo = vũ khí mạnh nhất. Khi con THÍCH, PH sẽ đăng ký. Kết nối sở thích con (Minecraft) với sản phẩm = genius.`
      },
      {
        id: "cs2",
        title: "Case Study: Mất deal vì push sai sản phẩm",
        type: "failure",
        content: `<strong>Bối cảnh:</strong> PH có con gái 7 tuổi, thích vẽ. PH đến hỏi về Art.

<strong>Diễn biến:</strong> TVTS Hương, thay vì giới thiệu Art (con thích vẽ), lại push Coding vì KPI tháng đó cần Coding. PH thấy không match → "Để tôi suy nghĩ" → Không bao giờ quay lại.

<strong>Kết quả:</strong> Mất deal. PH đăng ký Art ở trung tâm khác.

<strong>Bài học:</strong> LUÔN tư vấn sản phẩm phù hợp nhu cầu — Customer First. Push sai sản phẩm = mất khách vĩnh viễn. Nếu giới thiệu Art đúng, PH tin tưởng → có thể upsale Coding sau.`
      },
      {
        id: "cs3",
        title: "Case Study: Follow-up 3 lần mới chốt",
        type: "success",
        content: `<strong>Bối cảnh:</strong> PH quan tâm Robotics cho con trai 8 tuổi nhưng "để suy nghĩ" sau buổi tư vấn đầu.

<strong>Diễn biến:</strong> TVTS Đức kiên nhẫn follow-up: Lần 1 (sau 3 ngày): gửi video thi đấu VEX. Lần 2 (sau 1 tuần): mời trial miễn phí. PH đến trial → con THÍCH. Lần 3 (ngay sau trial): close với ưu đãi sắp hết.

<strong>Kết quả:</strong> PH đăng ký Robotics 12 tháng.

<strong>Bài học:</strong> Kiên nhẫn + follow-up đúng timing + cung cấp value mỗi lần contact = thành công. 80% deal chốt sau lần follow-up thứ 2-5.`
      },
      {
        id: "cs4",
        title: "Case Study: Xử lý 'học phí đắt' thành combo 24 tháng",
        type: "success",
        content: `<strong>Bối cảnh:</strong> PH nói "32 triệu/năm đắt quá, con tôi học thêm Anh văn đã 15 triệu rồi."

<strong>Diễn biến:</strong> TVTS Lan không giảm giá. Thay vào đó: "33.5 triệu ÷ 42 buổi = ~800k/buổi. Mỗi buổi 90 phút = con được 1 kỹ năng để dùng cả đời. Bằng 1 bữa ăn ngoài cho gia đình thôi ạ." Sau đó giới thiệu combo 24T: "Nếu anh/chị đăng ký 24 tháng, giảm 20% → chỉ còn ~640k/buổi!"

<strong>Kết quả:</strong> PH thấy hợp lý → đăng ký 24 tháng.

<strong>Bài học:</strong> Chia nhỏ + so sánh = reframe giá trị. Không bao giờ nói "giảm giá" trước — hãy reframe giá trị trước.`
      },
      {
        id: "cs5",
        title: "Case Study: CS giữ chân HV muốn nghỉ bằng EQ",
        type: "success",
        content: `<strong>Bối cảnh:</strong> Bé An, 11 tuổi, học Game Creator được 8 buổi. PH gọi nói "con không muốn học nữa, nói khó quá."

<strong>Diễn biến:</strong> CS Linh không vội đồng ý cho nghỉ. Gọi hỏi GV: "Bé An gặp khó ở phần nào?" GV nói bé stuck ở bài thuật toán game. CS gọi PH: "Em đã trao đổi với GV. Bé An gặp khó ở phần thuật toán — đây là giai đoạn nhiều bé gặp. Em đề xuất: GV sẽ hỗ trợ riêng cho bé 15 phút đầu buổi tới. Cho bé thử thêm 2 buổi nữa nhé?"

<strong>Kết quả:</strong> Bé An vượt qua giai đoạn khó, hào hứng trở lại. PH cảm ơn CS vì "kiên nhẫn và tận tâm." Bé hoàn thành khóa và đăng ký tiếp App Producer.

<strong>Bài học:</strong> CS có EQ = lắng nghe → khai thác lý do thật → đề xuất giải pháp cụ thể → follow-up. Không vội từ bỏ HV.`
      },
      {
        id: "cs6",
        title: "Case Study: Upsale combo 24T nhờ Demo Day ấn tượng",
        type: "success",
        content: `<strong>Bối cảnh:</strong> PH đăng ký 12T Scratch Creator cho bé Khang, 10 tuổi. Sắp hết khóa, PH chưa quyết định re-enroll.

<strong>Diễn biến:</strong> CS Đức chuẩn bị Demo Day kỹ lưỡng: nhờ GV cho bé Khang demo project game AI tích hợp Teachable Machine. CS quay video riêng gửi PH trước buổi Demo. Tại Demo Day, bé Khang thuyết trình tự tin, PH rất ấn tượng khi thấy con demo game nhận diện hình ảnh. CS tiếp cận: "Bé Khang tiến bộ rất nhiều! Game Creator sẽ nâng cấp kỹ năng con lên level pro — dùng GameMaker Studio chuyên nghiệp."

<strong>Kết quả:</strong> PH đăng ký combo 24T ngay tại chỗ. Sau đó giới thiệu thêm 1 bạn.

<strong>Bài học:</strong> Demo Day = cơ hội vàng cho re-enroll. CS chuẩn bị kỹ + video riêng cho PH + close ngay khi PH ấn tượng = công thức thành công.`
      }
    ],
    quizFriday: [
      { q: "Khi gọi điện cho MKT lead, câu đầu tiên nên nói gì?", options: ["Mua hàng đi anh/chị!", "Chào + xưng tên + nhắc lý do gọi", "Hỏi ngay PH có tiền không", "Giới thiệu sản phẩm luôn"], correct: 1, explanation: "Chào + xưng tên + nhắc context = professional opening." },
      { q: "Rule of 3 trong pitch nghĩa là?", options: ["Gọi 3 lần mới chốt", "Chỉ nêu 3 điểm mạnh", "Giảm giá 3 lần", "Demo 3 sản phẩm"], correct: 1, explanation: "Não nhớ tốt nhất 3 điểm — đừng nêu quá nhiều." },
      { q: "Giờ vàng gọi điện là?", options: ["7:00-8:00", "9:30-11:00 và 14:00-16:00", "12:00-13:00", "20:00-22:00"], correct: 1, explanation: "Sáng: 9:30-11:00, Chiều: 14:00-16:00." },
      { q: "Sau khi báo giá, TVTS nên?", options: ["Nói thêm nhiều lý do", "Im lặng, để PH suy nghĩ", "Giảm giá ngay", "Chuyển sang PH khác"], correct: 1, explanation: "Power of Silence — im lặng sau báo giá." },
      { q: "80% deal chốt sau lần follow-up thứ mấy?", options: ["Lần 1", "Lần 2-5", "Lần 6-10", "Lần đầu gặp"], correct: 1, explanation: "80% deal chốt sau follow-up lần 2-5 — kiên nhẫn!" }
    ]
  },


  /* --------------------------------------------------------
     LEADERBOARD SAMPLE DATA
     -------------------------------------------------------- */
  sampleLeaderboard: [],

  /* --------------------------------------------------------
     K18 SALE ONBOARD 5-DAY PROGRAM (20 bài — upgraded)
     -------------------------------------------------------- */
  onboardK18: {
  title: "Lộ trình Onboard K18 Sale (5 ngày)",
  description: "Chương trình đào tạo Onboard NÂNG CẤP dành cho TVTS mảng 18+ (người lớn). 5 ngày, 20 sections, bao phủ đầy đủ 7 sản phẩm, kỹ năng tư vấn, xử lý từ chối và mô phỏng thực chiến.",
  days: [

    /* ==================== K18 DAY 1: WHY & MINDSET ==================== */
    {
      id: "k18_day1",
      day: 1,
      title: "WHY & MINDSET",
      subtitle: "Thị trường, sản phẩm tổng quan, và tâm lý khách hàng 18+",
      icon: "🔥",
      color: "#E53E3E",
      sections: [

        /* ---- DAY 1 SECTION 1 ---- */
        {
          id: "k18_day1_s1",
          title: "Thị trường đào tạo 18+ VN: Cơ hội và thách thức",
          icon: "⚡",
          content: `<h3>Tại sao đây là thời điểm VÀNG để bán 18+?</h3>
<p>Trước khi tư vấn bất kỳ khách hàng 18+ nào, TVTS phải hiểu rõ bức tranh thị trường. Khách hàng người lớn sẽ test bạn bằng câu hỏi khó — và bạn cần trả lời bằng <strong>số liệu thật</strong>, không phải câu slogan.</p>

<h4>1. Quy mô thị trường — Cơ hội chưa từng có</h4>
<div class="insight-card">
  <div class="insight-number">1</div>
  <div class="insight-body">
    <h4>🤖 92 triệu việc làm bị AI thay thế — 170 triệu việc MỚI xuất hiện (WEF 2025)</h4>
    <p><strong>Dữ liệu:</strong> World Economic Forum dự báo 92 triệu việc làm bị AI và tự động hóa xóa sổ đến 2030. Song song đó, 170 triệu việc làm mới xuất hiện — đòi hỏi kỹ năng công nghệ.</p>
    <p><strong>Insight cho TVTS:</strong> Net gain là +78 triệu việc làm. Nhưng chỉ ai <em>chuẩn bị</em> mới hưởng được. Câu hỏi không phải "AI có thay thế không?" — mà là "Bạn có trong nhóm được hưởng 170 triệu việc mới không?"</p>
    <p><strong>Script:</strong> <em>"Anh/chị biết không, WEF dự báo 92 triệu việc bị AI thay thế. Nhưng tin tốt là 170 triệu việc mới xuất hiện. Người ở trong 170 triệu đó là người có kỹ năng công nghệ — và đó chính xác là điều MindX chuẩn bị cho anh/chị."</em></p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">2</div>
  <div class="insight-body">
    <h4>📊 9.03% thất nghiệp thanh niên VN — cao nhất 14 năm</h4>
    <p><strong>Dữ liệu:</strong> Tỷ lệ thất nghiệp thanh niên Việt Nam đạt 9.03% — mức cao nhất trong 14 năm. Đặc biệt, sinh viên mới tốt nghiệp khó tìm việc vì thiếu kỹ năng thực tế dù có bằng đại học.</p>
    <p><strong>Insight:</strong> Bằng ĐH không còn đủ. Portfolio thực tế + kỹ năng chuyên môn là thứ nhà tuyển dụng tìm kiếm. MindX giải quyết đúng khoảng trống này.</p>
    <p><strong>Script:</strong> <em>"9.03% thanh niên VN đang thất nghiệp — cao nhất 14 năm. Lý do không phải thiếu việc mà thiếu kỹ năng phù hợp. Doanh nghiệp công nghệ VN thiếu 150-200K nhân sự mỗi năm nhưng vẫn không tuyển được vì ứng viên thiếu kỹ năng thực tế."</em></p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">3</div>
  <div class="insight-body">
    <h4>🏢 Thiếu 150.000–200.000 nhân sự IT mỗi năm tại VN</h4>
    <p><strong>Dữ liệu:</strong> Việt Nam thiếu hụt 150.000–200.000 nhân sự IT mỗi năm. Các công ty như FPT, Techcombank, VNG, Shopee sẵn sàng trả lương premium cho ứng viên có kỹ năng thực tế.</p>
    <p><strong>Insight:</strong> Đây là cơ hội vàng cho người chuyển ngành. Chỉ cần 6–8 tháng đào tạo bài bản = bắt đầu sự nghiệp IT với lương khởi điểm 15–25 triệu.</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">4</div>
  <div class="insight-body">
    <h4>💬 74.5% công việc coding có thể được AI hỗ trợ — nhưng người biết AI sẽ năng suất gấp 5× (Anthropic 2026)</h4>
    <p><strong>Dữ liệu:</strong> Nghiên cứu từ Anthropic cho thấy 74.5% công việc lập trình có thể được AI hỗ trợ hoặc thay thế một phần. Tuy nhiên, lập trình viên biết dùng AI tốt sẽ có năng suất cao hơn 3–5 lần.</p>
    <p><strong>Insight:</strong> Không phải học code để "làm thay AI" — mà học để ĐIỀU KHIỂN AI. Tất cả khóa học MindX đều tích hợp AI tools thực tế.</p>
    <p><strong>Script:</strong> <em>"Jensen Huang — CEO Nvidia — nói: 'Bạn sẽ không mất việc vào tay AI, nhưng sẽ mất việc vào tay người BIẾT SỬ DỤNG AI.' MindX đào tạo đúng nhóm người đó."</em></p>
  </div>
</div>

<h4>2. Đào tạo 18+ — Thị trường khác K12 hoàn toàn</h4>
<div class="type-grid">
  <div class="type-card type-analytical">
    <h5>📌 Thị trường K12</h5>
    <p>Phụ huynh là người trả tiền và quyết định. Emotional trigger: tương lai con, cạnh tranh đại học, nền tảng sớm. Chu kỳ mua: 1–2 tuần. Budget: 3–8 triệu/năm.</p>
  </div>
  <div class="type-card type-decisive">
    <h5>🎯 Thị trường 18+</h5>
    <p>Người học TỰ QUYẾT ĐỊNH và TỰ TRẢ TIỀN (hoặc vay/mượn). Trigger: ROI, lương, career change, sợ AI thay thế. Chu kỳ mua: 1–3 tuần. Budget: 8.5–27.2 triệu/khóa.</p>
  </div>
</div>

<div class="alert-info">
  <strong>⭐ 3 điểm khác biệt cốt lõi K18 vs K12 mà TVTS phải nhớ:</strong><br>
  1. <strong>Không có phụ huynh</strong> — khách hàng tự quyết định, tự chịu trách nhiệm<br>
  2. <strong>ROI là vua</strong> — mọi quyết định đều tính: đầu tư bao nhiêu, thu lại bao nhiêu, hoàn vốn khi nào<br>
  3. <strong>Trust phải build từ data</strong> — người lớn không tin vào slogan, họ tin vào số liệu có nguồn, case study có tên thật
</div>

<h4>3. MindX 18+ — Vị thế thị trường</h4>
<div class="stats-grid">
  <div class="stat-card"><div class="stat-number">80K+</div><div class="stat-label">Học viên tích lũy</div></div>
  <div class="stat-card"><div class="stat-number">200+</div><div class="stat-label">Đối tác doanh nghiệp</div></div>
  <div class="stat-card"><div class="stat-number">11</div><div class="stat-label">Năm kinh nghiệm</div></div>
  <div class="stat-card"><div class="stat-number">7</div><div class="stat-label">Bộ môn 18+</div></div>
  <div class="stat-card"><div class="stat-number">40+</div><div class="stat-label">Cơ sở toàn quốc</div></div>
  <div class="stat-card"><div class="stat-number">Cam kết</div><div class="stat-label">Internship X</div></div>
</div>

<h4>4. Đối thủ cạnh tranh — TVTS phải biết để trả lời</h4>
<div class="pricing-info">
  <table class="pricing-table">
    <thead><tr><th>Đối thủ</th><th>Điểm mạnh</th><th>Điểm yếu</th><th>MindX khác gì?</th></tr></thead>
    <tbody>
      <tr><td><strong>CodeGym</strong></td><td>Thương hiệu mạnh, online</td><td>Chỉ Coding, không có Data/Design/AI</td><td>MindX có 7 ngành — Career Navigator rộng hơn</td></tr>
      <tr><td><strong>FUNiX</strong></td><td>Linh hoạt, online hoàn toàn</td><td>Self-paced → drop rate cao, không có mentor trực tiếp</td><td>MindX: mentor 1-1, lớp nhỏ 10-15 người</td></tr>
      <tr><td><strong>Udemy/Coursera</strong></td><td>Rẻ/miễn phí</td><td>Không có cam kết việc làm, không có mentor VN</td><td>MindX: 200+ đối tác tuyển dụng, mentor nói tiếng Việt</td></tr>
      <tr><td><strong>Tự học YouTube</strong></td><td>Miễn phí</td><td>80% người tự học bỏ cuộc tháng thứ 2, không có lộ trình</td><td>MindX: lộ trình bài bản + accountability + peer group</td></tr>
    </tbody>
  </table>
</div>

<div class="alert-info">
  <strong>Script khi bị so sánh với đối thủ:</strong> <em>"Em hiểu anh/chị đang so sánh — hoàn toàn đúng vì đây là khoản đầu tư lớn. Điểm MindX khác là: (1) 7 ngành để chọn, không bị locked vào 1 path; (2) Cam kết Internship X thật sự — không chỉ hứa; (3) 200+ đối tác đang tuyển dụng, không phải số ảo; (4) Lớp 10-15 người — mentor biết tên và profile của từng học viên."</em>
</div>`,
          quiz: {
            id: "quiz_k18_day1_s1",
            title: "Quiz: Thị trường 18+ & Cạnh tranh",
            questions: [
              { q: "Theo WEF 2025, AI sẽ tạo ra bao nhiêu triệu việc làm MỚI?", options: ["92 triệu", "120 triệu", "170 triệu", "200 triệu"], correct: 2, explanation: "170 triệu việc làm mới xuất hiện — nhưng chỉ ai có kỹ năng công nghệ mới tiếp cận được." },
              { q: "Tỷ lệ thất nghiệp thanh niên VN hiện tại là bao nhiêu và nó đặc biệt thế nào?", options: ["7.03% — bình thường", "9.03% — cao nhất 14 năm", "11.03% — cao nhất lịch sử", "5.03% — thấp nhất 10 năm"], correct: 1, explanation: "9.03% — cao nhất trong 14 năm qua. Lý do: thiếu kỹ năng thực tế, không phải thiếu việc làm." },
              { q: "Việt Nam thiếu bao nhiêu nhân sự IT mỗi năm?", options: ["50K–100K", "100K–150K", "150K–200K", "250K–300K"], correct: 2, explanation: "150.000–200.000 nhân sự IT/năm — cơ hội vàng cho người chuyển ngành." },
              { q: "Khác biệt cốt lõi nhất khi tư vấn K18 so với K12?", options: ["Giá cao hơn nhiều", "Khách 18+ tự quyết định, không có phụ huynh", "Sản phẩm phức tạp hơn", "Cần tư vấn lâu hơn"], correct: 1, explanation: "Khách hàng 18+ tự quyết định và tự trả tiền — focus vào ROI, không phải cảm xúc phụ huynh." },
              { q: "MindX khác CodeGym ở điểm nào quan trọng nhất khi tư vấn?", options: ["MindX rẻ hơn", "MindX có 7 ngành và cam kết Internship X", "MindX dạy online hơn", "MindX nổi tiếng hơn"], correct: 1, explanation: "MindX có 7 ngành (Career Navigator rộng) + cam kết Internship X thật sự — không chỉ 1 ngành Coding." },
              { q: "Theo Anthropic 2026, người biết dùng AI tốt sẽ năng suất cao hơn bao nhiêu?", options: ["1.5–2 lần", "2–3 lần", "3–5 lần", "5–10 lần"], correct: 2, explanation: "3–5 lần — không phải học code để làm thay AI mà để điều khiển AI." },
              { q: "Khi khách nói 'Tôi tự học YouTube được', phản hồi theo thứ tự nào?", options: ["Giảm giá ngay", "Nêu 3 điều YouTube không có: lộ trình, mentor, cam kết việc làm", "Nói YouTube kém", "Bỏ qua lo ngại"], correct: 1, explanation: "3 điều YouTube không có: (1) lộ trình bài bản, (2) mentor khi bị stuck, (3) cam kết việc làm. 80% người tự học bỏ cuộc tháng thứ 2." }
            ]
          }
        },

        /* ---- DAY 1 SECTION 2 ---- */
        {
          id: "k18_day1_s2",
          title: "7 sản phẩm MindX 18+ — Tổng quan nhanh",
          icon: "📦",
          content: `<h3>7 sản phẩm — TVTS phải thuộc lòng trong ngày đầu</h3>
<p>Đây là bản đồ sản phẩm. Trong ngày 2 bạn sẽ đi sâu từng sản phẩm. Hôm nay nắm ngay: <strong>cái gì, dành cho ai, bao lâu, giá bao nhiêu, lương ra sao.</strong></p>

<div class="pricing-info">
  <table class="pricing-table">
    <thead>
      <tr><th>Sản phẩm</th><th>Thời gian</th><th>Buổi</th><th>Combo</th><th>Lương Fresher</th><th>Lương Senior</th><th>Ai nên học</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>💻 XCareer Coding</strong></td>
        <td>8 tháng</td><td>64</td><td>27.2M</td>
        <td>7–12 triệu</td><td>40–70 triệu</td>
        <td>Muốn làm Developer, fullstack</td>
      </tr>
      <tr>
        <td><strong>📊 AI-Data Analyst</strong></td>
        <td>8 tháng</td><td>64</td><td>27.2M</td>
        <td>8–12 triệu</td><td>28–45 triệu</td>
        <td>Muốn làm Data, BI, không code nặng</td>
      </tr>
      <tr>
        <td><strong>📋 IT Business Analyst</strong></td>
        <td>6 tháng</td><td>48</td><td>20.7M</td>
        <td>8–15 triệu</td><td>50–75 triệu (PO/PM)</td>
        <td>Trái ngành vào IT, không cần code</td>
      </tr>
      <tr>
        <td><strong>🎨 UI/UX Designer</strong></td>
        <td>8 tháng</td><td>64</td><td>27.2M</td>
        <td>5–10 triệu</td><td>30–50 triệu</td>
        <td>Sáng tạo, thích product design</td>
      </tr>
      <tr>
        <td><strong>📣 Fullstack Marketing</strong></td>
        <td>8 tháng</td><td>52</td><td>25.5M</td>
        <td>8–12 triệu</td><td>25–50 triệu</td>
        <td>Marketing + AI, muốn toàn diện</td>
      </tr>
      <tr style="background:var(--green-bg);">
        <td><strong>⚙️ Data Engineer</strong></td>
        <td>6 tháng</td><td>48</td><td>20.7M</td>
        <td><strong>15–18 triệu ⭐</strong></td><td>50–70 triệu</td>
        <td>Có kỹ thuật, muốn lương cao nhất Data</td>
      </tr>
      <tr>
        <td><strong>🤖 AI for Work</strong></td>
        <td>~3 tháng</td><td>19</td><td>8.5M</td>
        <td>—</td><td>+25–50% thu nhập</td>
        <td>Mọi ngành, muốn kết quả nhanh</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>Quick-match: Khách nói gì → Recommend ngay</h4>
<div class="type-grid">
  <div class="type-card type-analytical">
    <h5>💰 "Tôi muốn lương cao nhất có thể"</h5>
    <p>→ <strong>Data Engineer</strong> — Fresher 15–18 triệu, cao nhất trong 7 ngành. Senior 50–70 triệu.</p>
  </div>
  <div class="type-card type-decisive">
    <h5>🚫 "Tôi không biết code và không muốn học code"</h5>
    <p>→ <strong>ITBA</strong> — Vào IT không cần code. Domain knowledge cũ là lợi thế lớn.</p>
  </div>
  <div class="type-card type-friendly">
    <h5>🎨 "Tôi thích sáng tạo, làm sản phẩm đẹp"</h5>
    <p>→ <strong>UI/UX Designer</strong> — Figma, design system, UX research. Portfolio chuẩn industry.</p>
  </div>
  <div class="type-card type-cautious">
    <h5>⚡ "Tôi cần kết quả nhanh, không có 8 tháng"</h5>
    <p>→ <strong>AI for Work</strong> — Chỉ 19 buổi, áp dụng ngay vào công việc hiện tại.</p>
  </div>
  <div class="type-card type-analytical">
    <h5>📊 "Tôi thích số liệu, dữ liệu, kinh doanh"</h5>
    <p>→ <strong>AI-Data Analyst</strong> — Từ Excel đến Python, Power BI, Machine Learning.</p>
  </div>
  <div class="type-card type-decisive">
    <h5>📣 "Tôi đang làm marketing, muốn upgrade"</h5>
    <p>→ <strong>Fullstack Marketing</strong> — Content + Ads + SEO + AI tools. Tăng lương 25–40%/năm.</p>
  </div>
  <div class="type-card type-friendly">
    <h5>💻 "Tôi muốn toàn diện nhất, làm được cả front và back-end"</h5>
    <p>→ <strong>XCareer Coding</strong> — MERN Stack, Fullstack Developer, lộ trình 4 level.</p>
  </div>
</div>

<h4>3 Combo đặc biệt cần biết</h4>
<div class="values-grid">
  <div class="value-card">
    <div class="value-icon">🏆</div>
    <h4>Combo X (8 tháng)</h4>
    <p>Dành cho Coding, Data, UI/UX. Tiết kiệm 15% so với mua từng cấp. Bao gồm cả Career Kickstart.</p>
  </div>
  <div class="value-card">
    <div class="value-icon">🎯</div>
    <h4>Combo 3 (6 tháng)</h4>
    <p>Dành cho ITBA và Data Engineer. Tiết kiệm 10%. Ngắn hơn nhưng career path vẫn rõ ràng.</p>
  </div>
  <div class="value-card">
    <div class="value-icon">⚡</div>
    <h4>Combo AI (19 buổi)</h4>
    <p>Dành cho AI for Work. 8.5 triệu — chi phí thấp nhất, áp dụng nhanh nhất. Entry point tốt cho mọi khách.</p>
  </div>
</div>

<div class="alert-info">
  <strong>📌 Lưu ý quan trọng cho TVTS:</strong> Không phải cứ khách hỏi là recommend ngay Combo X đắt nhất. Hỏi kỹ nhu cầu trước. Đôi khi AI for Work 8.5M là đúng nhất — và khách happy sẽ giới thiệu thêm khách, hoặc upgrade sau.
</div>`,
          quiz: {
            id: "quiz_k18_day1_s2",
            title: "Quiz: 7 Sản phẩm — Quick Match",
            questions: [
              { q: "Sản phẩm nào có lương Fresher cao nhất trong 7 ngành?", options: ["XCareer Coding (7–12tr)", "AI-Data Analyst (8–12tr)", "Data Engineer (15–18tr)", "ITBA (8–15tr)"], correct: 2, explanation: "Data Engineer: Fresher 15–18 triệu — cao nhất trong 7 sản phẩm. Đây là key selling point." },
              { q: "Khách nói 'Tôi muốn vào IT nhưng không biết code và không muốn học' — recommend gì?", options: ["XCareer Coding", "AI-Data Analyst", "IT Business Analyst", "Data Engineer"], correct: 2, explanation: "ITBA — 'Vào ngành IT không cần code'. Domain knowledge cũ là lợi thế." },
              { q: "Combo X (8 tháng) áp dụng cho những sản phẩm nào?", options: ["Chỉ Coding", "Coding, Data, UI/UX", "Tất cả 7 sản phẩm", "ITBA và Data Engineer"], correct: 1, explanation: "Combo X dành cho Coding, Data Analyst, UI/UX — tiết kiệm 15%. ITBA và DE dùng Combo 3 (tiết kiệm 10%)." },
              { q: "AI for Work giá combo bao nhiêu và có bao nhiêu buổi?", options: ["5.5 triệu, 12 buổi", "7.5 triệu, 15 buổi", "8.5 triệu, 19 buổi", "10 triệu, 24 buổi"], correct: 2, explanation: "Combo AI: 8.5 triệu, 19 buổi (7 buổi AI for Work + 12 buổi AI for Spreadsheet)." },
              { q: "ITBA có career path cao nhất đến lương bao nhiêu?", options: ["30–40 triệu (Senior BA)", "50–75 triệu (PO/PM)", "40–60 triệu", "60–90 triệu"], correct: 1, explanation: "PO/PM từ career path ITBA có thể earn 50–75 triệu/tháng — career ceiling cao nhất trong các ngành không code." },
              { q: "Sản phẩm nào NÊN recommend cho người đang làm marketing muốn tăng lương 25–40%?", options: ["AI for Work", "Fullstack Marketing", "UI/UX Designer", "Data Analyst"], correct: 1, explanation: "Fullstack Marketing — Content + Digital Ads + SEO + AI tools. Tích hợp AI giúp tăng lương 25–40%/năm." },
              { q: "Fullstack Marketing có bao nhiêu buổi học và giá Combo là?", options: ["48 buổi — 20.7 triệu", "52 buổi — 25.5 triệu", "64 buổi — 27.2 triệu", "60 buổi — 30 triệu"], correct: 1, explanation: "52 buổi, Combo X: 25.5 triệu (giảm 15% từ 30 triệu)." }
            ]
          }
        },

        /* ---- DAY 1 SECTION 3 ---- */
        {
          id: "k18_day1_s3",
          title: "Tâm lý người học 18+: Khác biệt hoàn toàn với K12",
          icon: "🧠",
          content: `<h3>Khách hàng 18+ suy nghĩ như thế nào?</h3>
<p>TVTS giỏi không phải người biết nhiều thông tin nhất — mà là người hiểu khách hàng đang SỢ GÌ và MUỐN GÌ nhất. Phần này sẽ giúp bạn đọc được tâm lý 3 nhóm khách hàng chính.</p>

<h4>Framework thuyết phục: STUCK → POSSIBLE → PROOF → PATH → NOW</h4>
<div class="flow-section">
  <div class="flow-steps">
    <div class="flow-step"><strong>STUCK:</strong> Chỉ ra vấn đề hiện tại của khách — họ đang bị kẹt ở đâu? (lương thấp, sợ AI, không biết hướng)</div>
    <div class="flow-step"><strong>POSSIBLE:</strong> Mở ra khả năng — "Có cách ra khỏi đây" — không phải mơ ước, là lộ trình thực tế</div>
    <div class="flow-step"><strong>PROOF:</strong> Chứng minh bằng data + case study thật — người giống họ đã làm được</div>
    <div class="flow-step"><strong>PATH:</strong> Lộ trình cụ thể của MindX — từng bước, từng milestone, từng outcome</div>
    <div class="flow-step"><strong>NOW:</strong> Tạo urgency thật (không phải giả) — lớp sắp đầy, khai giảng sắp tới, cơ hội đang mở</div>
  </div>
</div>

<h4>3 Persona khách hàng 18+ chính</h4>

<div class="product-card">
  <div class="product-header year1"><span class="product-year">PERSONA 1</span><h4>🎓 Fresh Grad — Sinh viên năm 3–4 / mới tốt nghiệp</h4></div>
  <div class="product-body">
    <p><strong>Profile điển hình:</strong> 21–24 tuổi, đang học hoặc vừa tốt nghiệp, CV trống rỗng, lo lắng thất nghiệp.</p>
    <p><strong>Nỗi đau (STUCK):</strong></p>
    <ul>
      <li>9.03% thanh niên VN thất nghiệp — bạn bè xung quanh đang apply mà không có offer</li>
      <li>Bằng ĐH không còn đủ — nhà tuyển dụng muốn portfolio thực tế</li>
      <li>Không biết bắt đầu từ đâu — YouTube dạy nhiều quá, không biết học cái nào</li>
    </ul>
    <p><strong>Trigger quyết định:</strong> Peer pressure (bạn bè đã có offer), sợ trượt dài, deadline tốt nghiệp đang đến</p>
    <p><strong>Key message (POSSIBLE + PATH):</strong> <em>"8 tháng tại MindX = Portfolio chuyên nghiệp + CV ấn tượng + Internship X với 200+ đối tác. Bạn không cần chờ may mắn — bạn chủ động xây lộ trình từ hôm nay."</em></p>
    <p><strong>ROI close:</strong> Học phí 27.2 triệu → lương Fresher 15–20 triệu → hoàn vốn sau 2 tháng đi làm.</p>
    <p><strong>⚠️ Lưu ý:</strong> Budget hạn chế — đề cập option học từng cấp (5 triệu/cấp B) hoặc Combo tiết kiệm 15%. Đừng push combo lớn ngay nếu họ chưa sẵn sàng.</p>
  </div>
</div>

<div class="product-card">
  <div class="product-header year2"><span class="product-year">PERSONA 2</span><h4>💼 Career Changer — Người đi làm 1–5 năm muốn chuyển ngành</h4></div>
  <div class="product-body">
    <p><strong>Profile điển hình:</strong> 25–32 tuổi, đang làm trong ngành không phải IT (kế toán, ngân hàng, marketing, HR, logistics), lương 10–20 triệu, đang bí.</p>
    <p><strong>Nỗi đau (STUCK):</strong></p>
    <ul>
      <li>Lương trần của ngành hiện tại thấp — 5 năm nữa cũng chỉ 20–25 triệu</li>
      <li>Muốn chuyển sang IT nhưng sợ không học được, sợ tuổi đã muộn</li>
      <li>Đầu tư thời gian + tiền — nếu không được việc thì sao?</li>
    </ul>
    <p><strong>Trigger quyết định:</strong> Đọc salary report (ITviec), thấy đồng nghiệp IT lương gấp đôi, bị AI đe dọa công việc hiện tại</p>
    <p><strong>Key message (PROOF + PATH):</strong> <em>"Không bao giờ muộn. Thực tế, kinh nghiệm ngành cũ của anh/chị là LỢI THẾ — kế toán vào DA ngân hàng lương cao hơn fresher không có domain. 6–8 tháng MindX, anh/chị không bắt đầu từ đầu — anh/chị bắt đầu từ chỗ anh/chị đang đứng."</em></p>
    <p><strong>ROI close:</strong> Đầu tư 20.7–27.2 triệu → lương mới 15–28 triệu → hoàn vốn 2–3 tháng.</p>
    <p><strong>⚠️ Address nỗi lo "tuổi muộn":</strong> IT không phân biệt tuổi — chỉ phân biệt kỹ năng. Nhiều học viên 30–35 tuổi đã chuyển thành công. Kinh nghiệm làm việc = lợi thế về giao tiếp, business sense, time management.</p>
  </div>
</div>

<div class="product-card">
  <div class="product-header year3"><span class="product-year">PERSONA 3</span><h4>🧠 Upskiller — Người 5+ năm muốn tăng năng lực</h4></div>
  <div class="product-body">
    <p><strong>Profile điển hình:</strong> 28–40 tuổi, đang ở vị trí tốt nhưng lo bị AI thay thế hoặc muốn thăng tiến nhanh hơn, lương 20–45 triệu.</p>
    <p><strong>Nỗi đau (STUCK):</strong></p>
    <ul>
      <li>Sếp bắt đầu nhắc đến AI, đồng nghiệp dùng AI làm nhanh hơn</li>
      <li>Muốn upskill nhưng không có thời gian học khóa dài 8 tháng</li>
      <li>Đã học nhiều khóa online tự học nhưng không apply được vào thực tế</li>
    </ul>
    <p><strong>Trigger quyết định:</strong> Sếp nói "team cần AI skills", đồng nghiệp thăng tiến nhờ data skills, thấy report AI tiết kiệm 60% thời gian</p>
    <p><strong>Key message (NOW + PROOF):</strong> <em>"Khóa AI for Work chỉ 19 buổi — ứng dụng ngay vào email, báo cáo, data analysis, slides. Không cần kỹ thuật. Jensen Huang nói: 'Mất việc vào tay người biết dùng AI.' Anh/chị có muốn là người đó không?"</em></p>
    <p><strong>ROI close:</strong> 8.5 triệu → tiết kiệm 15–20 giờ/tháng → income uplift +25–50% (VietSourcing 2025).</p>
    <p><strong>⚠️ Lưu ý:</strong> Upskiller có budget cao nhất nhưng cũng hay research nhiều nhất. Chuẩn bị data cụ thể, case study ngành của họ. Đừng nói chung chung.</p>
  </div>
</div>

<h4>10 Nỗi lo TVTS phải chuẩn bị trả lời</h4>
<div class="pricing-info">
  <table class="pricing-table">
    <thead><tr><th>#</th><th>Nỗi lo</th><th>Tần suất xuất hiện</th><th>Cách handle</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>"Học xong có được việc không?"</td><td>⭐⭐⭐⭐⭐</td><td>Cam kết Internship X + 200+ đối tác + case study alumni</td></tr>
      <tr><td>2</td><td>"Tôi đã bao nhiêu tuổi — muộn không?"</td><td>⭐⭐⭐⭐⭐</td><td>IT chỉ phân biệt kỹ năng, KN cũ là lợi thế, nhiều alumni 30+ thành công</td></tr>
      <tr><td>3</td><td>"MindX khác gì các trung tâm khác?"</td><td>⭐⭐⭐⭐</td><td>7 ngành, 200+ đối tác, lớp nhỏ 10-15 người, mentor 1-1</td></tr>
      <tr><td>4</td><td>"Tôi học được không? Có quá khó không?"</td><td>⭐⭐⭐⭐</td><td>Demo trial class, lộ trình từ basics, mentor 1-1</td></tr>
      <tr><td>5</td><td>"Không có thời gian — đang đi làm"</td><td>⭐⭐⭐⭐</td><td>2 buổi/tuần, lớp tối + cuối tuần, thiết kế cho người đi làm</td></tr>
      <tr><td>6</td><td>"Học phí đắt quá"</td><td>⭐⭐⭐⭐</td><td>ROI: hoàn vốn 2–3 tháng, chia nhỏ từng cấp nếu cần</td></tr>
      <tr><td>7</td><td>"Tự học YouTube/Udemy được"</td><td>⭐⭐⭐</td><td>80% tự học bỏ cuộc tháng 2, YouTube không có cam kết việc làm</td></tr>
      <tr><td>8</td><td>"Sau 8 tháng, kỹ năng có còn relevant không?"</td><td>⭐⭐⭐</td><td>MERN/DA/DE là tech stack stable, AI tích hợp — chương trình update liên tục</td></tr>
      <tr><td>9</td><td>"Mentor có giỏi không?"</td><td>⭐⭐⭐</td><td>Mentor là professional đang làm tại doanh nghiệp thật, không phải giáo viên full-time</td></tr>
      <tr><td>10</td><td>"Nếu bỏ giữa chừng thì sao?"</td><td>⭐⭐</td><td>Policy bảo lưu linh hoạt, lớp nhỏ nên không bỏ lỡ nhiều</td></tr>
    </tbody>
  </table>
</div>`,
          quiz: {
            id: "quiz_k18_day1_s3",
            title: "Quiz: Tâm lý khách hàng 18+",
            questions: [
              { q: "Framework thuyết phục 18+ của MindX là gì?", options: ["AIDA", "STUCK → POSSIBLE → PROOF → PATH → NOW", "Features → Benefits → Price", "Hook → Story → Offer → Close"], correct: 1, explanation: "STUCK → POSSIBLE → PROOF → PATH → NOW. Luôn bắt đầu bằng pain point (STUCK), không bắt đầu bằng giới thiệu sản phẩm." },
              { q: "Khách hàng Career Changer lo lắng nhất điều gì?", options: ["Học phí quá đắt", "Tuổi muộn + không được việc sau học", "Lịch học không phù hợp", "Không thích công nghệ"], correct: 1, explanation: "Career Changer lo 2 thứ lớn nhất: (1) tuổi đã muộn, (2) học xong không tìm được việc — cả hai đều cần data cụ thể để xử lý." },
              { q: "Nỗi lo 'tuổi đã muộn' — trả lời thế nào hiệu quả nhất?", options: ["Đồng ý, đề nghị khóa ngắn hơn", "IT chỉ phân biệt kỹ năng, không phân biệt tuổi; kinh nghiệm cũ là lợi thế", "Khuyên họ không nên chuyển ngành", "Nói tuổi không quan trọng nhưng không giải thích"], correct: 1, explanation: "IT không phân biệt tuổi — chỉ phân biệt kỹ năng. Quan trọng hơn: kinh nghiệm ngành cũ là lợi thế thực sự (ví dụ: kế toán ngân hàng vào DA sẽ earn cao hơn fresher không có domain)." },
              { q: "Persona Upskiller (5+ năm kinh nghiệm) nên được recommend khóa nào TRƯỚC TIÊN?", options: ["XCareer Coding 8 tháng", "ITBA 6 tháng", "AI for Work 19 buổi", "Data Engineer 6 tháng"], correct: 2, explanation: "AI for Work 19 buổi — ngắn nhất, ứng dụng ngay, không cần kỹ thuật. Budget cao nên họ sẵn sàng đầu tư nếu thấy ROI rõ ràng." },
              { q: "Nỗi lo nào xuất hiện nhiều nhất (5 sao) khi tư vấn 18+?", options: ["Mentor có giỏi không?", "Bỏ giữa chừng thì sao?", "Học xong có được việc không?", "Chứng chỉ quốc tế không?"], correct: 2, explanation: "Nỗi lo #1: Học xong có được việc không? — Đây là câu hỏi xuất hiện ở gần như mọi cuộc tư vấn 18+." },
              { q: "Khi khách Fresh Grad lo budget không đủ cho Combo 27.2M, giải pháp nào phù hợp?", options: ["Chỉ recommend khóa AI 8.5M", "Giải thích option học từng cấp riêng lẻ (bắt đầu 5M/cấp)", "Không có giải pháp — khách này không phù hợp", "Yêu cầu vay ngân hàng ngay"], correct: 1, explanation: "Học từng cấp: bắt đầu Level B (5 triệu), có thể tiếp tục lên A, I, S. Giúp khách vào được hệ thống mà không cần cam kết toàn bộ ngay." },
              { q: "Tại sao người lớn (18+) khó bị thuyết phục bởi slogan hơn K12?", options: ["Họ thông minh hơn", "Họ đã bị bán nhiều lần — cần PROOF POINTS cụ thể: số liệu có nguồn, case study tên thật", "Họ có nhiều tiền nên cẩn thận hơn", "Họ không thích học"], correct: 1, explanation: "Adult learner đã skeptical vì market bootcamp overcrowded. Họ cần proof points thật: nguồn dữ liệu rõ ràng, alumni có tên và công ty cụ thể, không phải marketing claim chung chung." }
            ]
          }
        }
      ]
    },

    /* ==================== K18 DAY 2: PRODUCT MASTERY — 7 BÀI RIÊNG ==================== */
    {
      id: "k18_day2",
      day: 2,
      title: "PRODUCT MASTERY — 7 Ngành",
      subtitle: "Deep dive từng sản phẩm: Why, Who, Deep Dive, So sánh, Selling Points",
      icon: "🔬",
      color: "#2563EB",
      sections: [

        /* ---- DAY 2 SECTION 1: XCareer Coding ---- */
        {
          id: "k18_day2_s1",
          title: "XCareer Coding — Deep Dive",
          icon: "💻",
          content: `<h3>XCareer Coding — Lập trình Web Fullstack, apply Junior Dev sau 8 tháng</h3>

<h4>A. TẠI SAO sản phẩm này tồn tại (Market demand)</h4>
<div class="insight-card">
  <div class="insight-number">WHY</div>
  <div class="insight-body">
    <p>Việt Nam thiếu 150.000–200.000 lập trình viên mỗi năm (ITviec 2025). FPT Software, VNG, MoMo, Techcombank đang tuyển Web Developer liên tục với lương Fresher 7–12 triệu, Junior 15–25 triệu. MERN Stack (MongoDB, Express, React, Node.js) là bộ công nghệ hot nhất thị trường — xuất hiện trong 60%+ JD tại VN.</p>
    <p><strong>Lương so sánh:</strong> Fresher Dev 7–12tr vs Fresher ngành khác 6–9tr → advantage rõ ràng. Junior Dev 15–25tr vs Junior kế toán/kinh doanh 10–15tr → gap lớn sau 1–2 năm.</p>
  </div>
</div>

<h4>B. AI NÊN HỌC (Personas phù hợp)</h4>
<div class="type-grid">
  <div class="type-card type-analytical">
    <h5>✅ Sinh viên IT năm 3–4</h5>
    <p>Có nền tảng lý thuyết nhưng thiếu kỹ năng thực tế. MindX bổ sung: project thật, GitHub portfolio, Agile/Scrum workflow như công ty thật.</p>
  </div>
  <div class="type-card type-decisive">
    <h5>✅ Người chuyển ngành có tư duy logic</h5>
    <p>Kế toán, kinh doanh, kỹ sư — những người có tư duy hệ thống học code nhanh hơn nhiều so với tưởng. 6–8 tháng là đủ để apply Junior Dev.</p>
  </div>
  <div class="type-card type-friendly">
    <h5>✅ Fresher muốn cao hơn ngưỡng lương đại học</h5>
    <p>Tốt nghiệp đại học ngành khác, biết coding sẽ mở ra career path hoàn toàn mới với lương khởi điểm cao hơn nhiều.</p>
  </div>
</div>

<h4>C. AI KHÔNG NÊN HỌC</h4>
<div class="alert-info">
  <strong>Đừng recommend Coding cho những người này:</strong><br>
  ❌ Người ghét ngồi trước máy tính nhiều giờ — Coding cần 4–6 giờ/ngày debug, kiên nhẫn cao<br>
  ❌ Người muốn kết quả trong 1–2 tháng — Coding cần 8 tháng để đủ skill apply job<br>
  ❌ Người đang làm ngành quản lý, muốn leverage domain knowledge — Recommend ITBA thay thế<br>
  ❌ Người muốn sáng tạo về design — Recommend UI/UX
</div>

<h4>D. PRODUCT DEEP DIVE — 4 cấp độ</h4>
<table class="pricing-table">
  <thead><tr><th>Cấp</th><th>Tên</th><th>Nội dung</th><th>Thời gian</th><th>Output thực tế</th><th>Giá lẻ</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>B</strong></td><td>Coding Cơ bản</td>
      <td>HTML/CSS/JS, Git, xây web tương tác</td>
      <td>2 tháng, 16 buổi</td>
      <td>Website cá nhân responsive, portfolio GitHub</td>
      <td>5.000.000đ</td>
    </tr>
    <tr>
      <td><strong>A</strong></td><td>Code Intensive (ReactJS)</td>
      <td>ReactJS, Redux, REST API, Components</td>
      <td>2 tháng, 16 buổi</td>
      <td>Ứng dụng React hoàn chỉnh kết nối API thật</td>
      <td>7.000.000đ</td>
    </tr>
    <tr>
      <td><strong>I</strong></td><td>Fullstack Web (MERN)</td>
      <td>NodeJS, Express, MongoDB, REST API, Auth</td>
      <td>2 tháng, 16 buổi</td>
      <td>Fullstack web app MERN — đủ để deploy thật</td>
      <td>9.000.000đ</td>
    </tr>
    <tr>
      <td><strong>S</strong></td><td>Career Kickstart</td>
      <td>Agile/Scrum, Jira, dự án nhóm, CV + portfolio</td>
      <td>2 tháng, 16 buổi</td>
      <td>Portfolio GitHub chuẩn JD + CV + kết nối 200+ đối tác</td>
      <td>11.000.000đ</td>
    </tr>
    <tr style="background:var(--red-bg);font-weight:600;">
      <td colspan="5">Combo X (8 tháng) — Tiết kiệm 15%</td>
      <td><del>32.000.000đ</del> → <strong>27.200.000đ</strong></td>
    </tr>
  </tbody>
</table>

<h4>E. SO SÁNH vs tự học / đối thủ</h4>
<div class="pricing-info">
  <table class="pricing-table">
    <thead><tr><th>Tiêu chí</th><th>Tự học YouTube</th><th>CodeGym</th><th>Đại học CNTT</th><th>MindX XCareer</th></tr></thead>
    <tbody>
      <tr><td>Thời gian đến khi job-ready</td><td>2–3 năm tự mò</td><td>12 tháng</td><td>4 năm</td><td><strong>8 tháng</strong></td></tr>
      <tr><td>Chi phí</td><td>0đ + cơ hội cost cao</td><td>~20–30 triệu</td><td>100–200 triệu</td><td><strong>27.2 triệu</strong></td></tr>
      <tr><td>Portfolio khi ra</td><td>Không nhất quán</td><td>Có project</td><td>Bài tập lab</td><td><strong>3 dự án thật, GitHub deploy</strong></td></tr>
      <tr><td>Cam kết việc làm</td><td>Không</td><td>Có (hạn chế)</td><td>Hội chợ việc làm</td><td><strong>Internship X + 200+ đối tác</strong></td></tr>
      <tr><td>Kỹ năng Agile/Scrum thực tế</td><td>Không</td><td>Cơ bản</td><td>Lý thuyết</td><td><strong>Thực hành với Jira + Sprint planning</strong></td></tr>
    </tbody>
  </table>
</div>

<h4>F. TOP 5 SELLING POINTS — Khi đang tư vấn, nhớ 5 điều này</h4>
<div class="values-grid">
  <div class="value-card"><div class="value-icon">1</div><h4>MERN Stack — Tech stack hot nhất 2025</h4><p>MongoDB, Express, React, Node.js xuất hiện trong 60%+ JD tại VN. Học 1 stack = apply được hàng trăm công ty.</p></div>
  <div class="value-card"><div class="value-icon">2</div><h4>GitHub Portfolio deploy thật</h4><p>Không phải file zip nộp cho giáo viên — là URL thật trên internet, hiring manager có thể xem ngay.</p></div>
  <div class="value-card"><div class="value-icon">3</div><h4>Agile/Scrum thực tế</h4><p>Level S dùng Jira, Sprint planning, code review — y hệt môi trường FPT/VNG thật. Vào công ty không bỡ ngỡ.</p></div>
  <div class="value-card"><div class="value-icon">4</div><h4>ROI rõ ràng</h4><p>27.2 triệu → lương Junior 15–25 triệu → hoàn vốn sau 2 tháng đi làm. Đầu tư sinh lời nhất trong mọi khoản chi tiêu.</p></div>
  <div class="value-card"><div class="value-icon">5</div><h4>Cam kết Internship X</h4><p>200+ đối tác tuyển dụng: FPT Software, VNG, MoMo, Techcombank, Shopee. Không phải hứa — là cam kết cụ thể.</p></div>
</div>

<h4>Lương kỳ vọng theo cấp độ (nguồn: ITviec 2025, JDI Group)</h4>
<div class="stats-grid">
  <div class="stat-card"><div class="stat-number">7–12tr</div><div class="stat-label">Fresher Developer</div></div>
  <div class="stat-card"><div class="stat-number">15–25tr</div><div class="stat-label">Junior Developer (1–2 năm)</div></div>
  <div class="stat-card"><div class="stat-number">25–40tr</div><div class="stat-label">Mid-level (3–5 năm)</div></div>
  <div class="stat-card"><div class="stat-number">40–70tr</div><div class="stat-label">Senior Developer (5+ năm)</div></div>
</div>`,
          quiz: {
            id: "quiz_k18_day2_s1",
            title: "Quiz: XCareer Coding Deep Dive",
            questions: [
              { q: "XCareer Coding dùng tech stack nào và tại sao đây là lợi thế?", options: ["LAMP Stack — phổ biến trên toàn cầu", "MERN Stack — xuất hiện trong 60%+ JD tại VN 2025", "Python Django — phổ biến cho backend", "Java Spring — enterprise standard"], correct: 1, explanation: "MERN Stack (MongoDB, Express, React, Node.js) xuất hiện trong 60%+ job description tại VN — học 1 stack apply được hàng trăm công ty." },
              { q: "Level I của Coding dạy gì và output thực tế là gì?", options: ["ReactJS — ứng dụng front-end", "MERN Fullstack — web app deploy thật được", "Python — script automation", "Agile/Scrum — quản lý dự án"], correct: 1, explanation: "Level I: NodeJS, Express, MongoDB, REST API — output là Fullstack web app MERN đủ để deploy thật lên internet." },
              { q: "Combo X Coding giá bao nhiêu và tiết kiệm bao nhiêu so với mua lẻ?", options: ["25.2 triệu — tiết kiệm 10%", "27.2 triệu — tiết kiệm 15%", "28.8 triệu — tiết kiệm 10%", "30 triệu — tiết kiệm 5%"], correct: 1, explanation: "Combo X: 27.2 triệu — giảm 15% từ 32 triệu (mua lẻ 4 cấp: 5+7+9+11=32 triệu)." },
              { q: "Khách Coding không nên là ai?", options: ["Sinh viên IT năm 4", "Người chuyển ngành có tư duy logic", "Người muốn kết quả trong 1 tháng", "Kỹ sư cơ khí muốn chuyển IT"], correct: 2, explanation: "Người muốn kết quả 1–2 tháng KHÔNG phù hợp Coding — cần 8 tháng để job-ready. Recommend AI for Work thay thế." },
              { q: "ROI của XCareer Coding tính như thế nào?", options: ["27.2tr đầu tư → lương Junior 15–25tr → hoàn vốn 2 tháng", "27.2tr → lương Fresher 7–12tr → hoàn vốn 6 tháng", "Không có ROI rõ ràng", "Hoàn vốn sau 1 năm"], correct: 0, explanation: "27.2 triệu đầu tư → lương Junior Dev 15–25 triệu/tháng → tăng lương ít nhất 8 triệu → hoàn vốn trong 2–3 tháng đi làm." },
              { q: "Tại sao phải nói GitHub Portfolio 'deploy thật' thay vì 'có portfolio'?", options: ["Nghe hay hơn", "URL thật trên internet — hiring manager xem được ngay, không phải file zip nộp thầy giáo", "Để tăng giá", "Không có sự khác biệt"], correct: 1, explanation: "URL thật trên internet vs file zip nộp giáo viên — đây là differentiator quan trọng. Hiring manager nhìn GitHub trong 10 giây, không cần scheduling meeting." },
              { q: "Lương Senior Developer kỳ vọng sau 5+ năm là bao nhiêu?", options: ["25–40 triệu", "30–50 triệu", "40–70 triệu", "50–90 triệu"], correct: 2, explanation: "Senior Developer: 40–70 triệu/tháng (nguồn: ITviec 2025). Career trajectory rất dài và lương tăng đều đặn." }
            ]
          }
        },

        /* ---- DAY 2 SECTION 2: AI-Data Analyst ---- */
        {
          id: "k18_day2_s2",
          title: "AI-Data Analyst — Deep Dive",
          icon: "📊",
          content: `<h3>AI-Data Analyst — Từ Excel đến Python, apply DA trong 8 tháng</h3>

<h4>A. TẠI SAO sản phẩm này tồn tại</h4>
<div class="insight-card">
  <div class="insight-number">WHY</div>
  <div class="insight-body">
    <p>Lương trung vị Data Analyst tại VN: 31.3 triệu/tháng (ITviec 2025). Với 5.5 năm kinh nghiệm: 40.65 triệu/tháng. Mọi ngành — banking, e-commerce, logistics, healthcare — đều cần người biết đọc và phân tích dữ liệu. DA là <strong>ngành "non-coder friendly" nhất trong IT</strong> — bắt đầu từ Excel ai cũng biết, học dần lên SQL, Power BI, Python.</p>
    <p><strong>Lợi thế domain:</strong> Người đến từ ngành banking làm DA banking sẽ earn cao hơn Fresher DA không có domain. Kế toán 5 năm → DA ngân hàng lương khởi điểm 20–28 triệu, không phải 8 triệu như Fresher hoàn toàn mới.</p>
  </div>
</div>

<h4>B. AI NÊN HỌC</h4>
<div class="type-grid">
  <div class="type-card type-analytical">
    <h5>✅ Kế toán / Finance muốn upgrade</h5>
    <p>Excel đã quen → bắt đầu từ Level B dễ dàng. Domain ngân hàng/finance là lợi thế lớn khi làm DA trong ngành đó. Lương tăng gấp đôi sau 8 tháng.</p>
  </div>
  <div class="type-card type-decisive">
    <h5>✅ Business / Marketing muốn làm data-driven</h5>
    <p>Hiểu business context + học DA skills = combo cực mạnh. Biết tại sao số liệu quan trọng (insight) + biết cách lấy số liệu (query SQL, Power BI) = rất được tuyển dụng.</p>
  </div>
  <div class="type-card type-friendly">
    <h5>✅ Người thích số, logic, phân tích nhưng không muốn code nặng</h5>
    <p>DA không viết application — DA phân tích, query, visualize. Python ở Level I là cơ bản, không phải viết hệ thống như Developer.</p>
  </div>
</div>

<h4>C. AI KHÔNG NÊN HỌC</h4>
<div class="alert-info">
  <strong>Đừng recommend DA cho:</strong><br>
  ❌ Người muốn code fullstack — recommend Coding<br>
  ❌ Người muốn build data pipeline, hạ tầng dữ liệu — recommend Data Engineer<br>
  ❌ Người hoàn toàn ghét số liệu, báo cáo — DA không phù hợp<br>
  ❌ Người đã biết Python/SQL tốt muốn lên level kỹ thuật — recommend Data Engineer
</div>

<h4>D. PRODUCT DEEP DIVE</h4>
<table class="pricing-table">
  <thead><tr><th>Cấp</th><th>Nội dung</th><th>Tools</th><th>Output</th><th>Giá lẻ</th></tr></thead>
  <tbody>
    <tr><td><strong>B — Phân tích cơ bản</strong></td><td>Excel nâng cao, Pivot Table, thống kê mô tả, tư duy phân tích</td><td>Excel, Google Sheets</td><td>Báo cáo phân tích dữ liệu kinh doanh bằng Excel</td><td>5.000.000đ</td></tr>
    <tr><td><strong>A — Business Data</strong></td><td>SQL (SELECT, JOIN, GROUP BY), Power BI Dashboard, KPI tracking, Data Storytelling</td><td>SQL, Power BI, PostgreSQL</td><td>Dashboard Power BI đủ đẹp để show với hiring manager</td><td>7.000.000đ</td></tr>
    <tr><td><strong>I — Advanced Analytics</strong></td><td>Python (Pandas, NumPy), EDA chuyên sâu, Matplotlib, ML cơ bản (Regression, Classification)</td><td>Python, Pandas, Scikit-learn</td><td>Dự án phân tích Python + ML model hoàn chỉnh</td><td>9.000.000đ</td></tr>
    <tr><td><strong>S — Career Kickstart</strong></td><td>Dự án DA thực tế từ doanh nghiệp, portfolio DA, mock interview, kết nối 200+ đối tác</td><td>Portfolio, GitHub, AI Tools</td><td>Portfolio DA chuyên nghiệp + CV + Giới thiệu việc làm</td><td>11.000.000đ</td></tr>
    <tr style="background:var(--red-bg);font-weight:600;"><td colspan="4">Combo X (8 tháng) — Tiết kiệm 15%</td><td><del>32.000.000đ</del> → <strong>27.200.000đ</strong></td></tr>
  </tbody>
</table>

<h4>E. SO SÁNH vs tự học Kaggle / đại học</h4>
<div class="pricing-info">
  <table class="pricing-table">
    <thead><tr><th>Tiêu chí</th><th>Tự học Kaggle/YouTube</th><th>Đại học Thống kê/Kinh tế</th><th>MindX AI-Data Analyst</th></tr></thead>
    <tbody>
      <tr><td>Dataset dùng để học</td><td>Titanic, Iris — dataset cũ</td><td>Dataset lý thuyết</td><td><strong>Dataset từ ngành thật của bạn</strong></td></tr>
      <tr><td>Domain knowledge tính vào lương</td><td>Không</td><td>Không</td><td><strong>Có — banking DA earn cao hơn</strong></td></tr>
      <tr><td>Cam kết việc làm</td><td>Không</td><td>Hội chợ việc làm</td><td><strong>Internship X + 200+ đối tác</strong></td></tr>
      <tr><td>Power BI Portfolio</td><td>Tự làm, không review</td><td>Lý thuyết</td><td><strong>Mentor review theo chuẩn hiring manager</strong></td></tr>
      <tr><td>Chi phí</td><td>Miễn phí (mất 2+ năm)</td><td>100–150 triệu (4 năm)</td><td><strong>27.2 triệu (8 tháng)</strong></td></tr>
    </tbody>
  </table>
</div>

<h4>F. TOP 5 SELLING POINTS</h4>
<div class="values-grid">
  <div class="value-card"><div class="value-icon">1</div><h4>Bắt đầu từ Excel</h4><p>Entry point thấp nhất trong 7 ngành — ai cũng biết Excel. Không cần background kỹ thuật. Tâm lý rào cản = 0.</p></div>
  <div class="value-card"><div class="value-icon">2</div><h4>Domain Knowledge = Lương cao hơn</h4><p>Kế toán/banking/logistics 5 năm → DA trong ngành đó lương 20–28 triệu từ ngày 1, không phải 8 triệu Fresher không có domain.</p></div>
  <div class="value-card"><div class="value-icon">3</div><h4>Power BI Dashboard thật</h4><p>Portfolio không phải screenshot — là dashboard live có thể demo trong phỏng vấn. Mentor review theo tiêu chuẩn: "Nếu ứng viên show cái này, tôi có offer không?"</p></div>
  <div class="value-card"><div class="value-icon">4</div><h4>Lương trung vị 31.3 triệu (ITviec 2025)</h4><p>Số liệu từ nguồn uy tín nhất VN. DA không phải ngành bóng bẩy — là ngành thực tế, mọi doanh nghiệp cần, lương ổn định và tăng đều.</p></div>
  <div class="value-card"><div class="value-icon">5</div><h4>Python + ML — tương lai-proof</h4><p>Level I và S bổ sung Python và ML cơ bản — nền tảng để tiến lên DA senior hoặc Data Scientist sau này. Không phải cùn đường sau Fresher.</p></div>
</div>`,
          quiz: {
            id: "quiz_k18_day2_s2",
            title: "Quiz: AI-Data Analyst Deep Dive",
            questions: [
              { q: "Lương trung vị Data Analyst tại VN là bao nhiêu theo ITviec 2025?", options: ["18 triệu", "25 triệu", "31.3 triệu", "40 triệu"], correct: 2, explanation: "31.3 triệu/tháng là lương trung vị DA tại VN (ITviec 2025). Với 5.5 năm kinh nghiệm: 40.65 triệu." },
              { q: "Tại sao người có background kế toán/banking lại phù hợp DA hơn là Fresher hoàn toàn mới?", options: ["Họ đã biết code", "Domain knowledge ngành cũ là lợi thế — earning cao hơn Fresher không có domain", "Họ trẻ hơn", "Không có lý do đặc biệt"], correct: 1, explanation: "Domain knowledge từ banking/finance/logistics → khi làm DA trong ngành đó, lương khởi điểm 20–28 triệu thay vì 8 triệu của Fresher không có domain." },
              { q: "AI-Data Analyst Level B dùng tool gì và output là gì?", options: ["Python — Dự án ML", "SQL — Dashboard Power BI", "Excel nâng cao — Báo cáo phân tích Excel", "ReactJS — Web app"], correct: 2, explanation: "Level B: Excel nâng cao (Pivot Table, VLOOKUP, thống kê mô tả) → output là báo cáo phân tích dữ liệu kinh doanh bằng Excel." },
              { q: "DA khác Data Engineer ở điểm gì quan trọng nhất?", options: ["DA ít tiền hơn", "DA phân tích/query/visualize — DE build hạ tầng pipeline, ETL", "DA cần học lâu hơn", "Không có sự khác biệt"], correct: 1, explanation: "DA: phân tích, query, dashboard, insight. DE: build ETL pipeline, data warehouse, AWS infrastructure. Hai vai trò hoàn toàn khác nhau." },
              { q: "Người nào KHÔNG nên recommend AI-Data Analyst?", options: ["Kế toán muốn upgrade", "Marketing muốn data-driven", "Người muốn build data pipeline và hạ tầng dữ liệu", "Logistics manager muốn phân tích hiệu suất"], correct: 2, explanation: "Người muốn build data pipeline/ETL/data warehouse → recommend Data Engineer thay thế. DA không cover hạ tầng kỹ thuật." },
              { q: "Điều gì làm Portfolio Power BI của MindX khác với tự học?", options: ["Dùng tool đắt hơn", "Mentor review theo tiêu chuẩn 'nếu ứng viên show cái này, tôi có offer không?'", "Đẹp hơn", "Không có sự khác biệt"], correct: 1, explanation: "Mentor review theo tiêu chuẩn hiring manager thật — không phải 'đẹp' theo cảm quan giáo viên, mà là 'đủ để offer hay không?'" }
            ]
          }
        },

        /* ---- DAY 2 SECTION 3: ITBA ---- */
        {
          id: "k18_day2_s3",
          title: "IT Business Analyst — Deep Dive",
          icon: "📋",
          content: `<h3>IT Business Analyst — Vào ngành IT không cần code, domain cũ là lợi thế</h3>

<h4>A. TẠI SAO sản phẩm này tồn tại</h4>
<div class="insight-card">
  <div class="insight-number">WHY</div>
  <div class="insight-body">
    <p>Mọi dự án IT đều cần người hiểu BUSINESS và hiểu TECH — đó là BA. BA là cầu nối giữa stakeholder (không biết code) và Developer (không hiểu business). Lương BA banking tại VN: 50.95 triệu/tháng cho PO/PM senior (ITviec 2025). Hiện có 75+ vị trí BA đang tuyển liên tục tại các ngân hàng và fintech.</p>
    <p><strong>Key insight:</strong> Người có domain knowledge sâu (banking 5 năm, logistics 7 năm, HR 4 năm) khi học BA sẽ không bắt đầu như Fresher — họ bắt đầu ở mức BA with domain background, lương 20–28 triệu ngay từ ngày đầu.</p>
  </div>
</div>

<h4>B. AI NÊN HỌC — ITBA là sản phẩm rất targeted</h4>
<div class="type-grid">
  <div class="type-card type-analytical">
    <h5>✅ Banking / Finance (3–7 năm KN)</h5>
    <p>Hiểu nghiệp vụ ngân hàng + học BA → trở thành BA banking được tuyển với lương 20–28 triệu. Domain cũ là thứ Dev và PM không có.</p>
  </div>
  <div class="type-card type-decisive">
    <h5>✅ Logistics / Supply Chain (3+ năm KN)</h5>
    <p>Các hệ thống WMS, TMS, ERP liên tục cần BA hiểu cả quy trình logistics lẫn IT. Rất ít người có combo này — cơ hội lớn.</p>
  </div>
  <div class="type-card type-friendly">
    <h5>✅ HR / Operations / Quản lý (2+ năm KN)</h5>
    <p>Từ user phàn nàn hệ thống HR → BA design hệ thống tốt hơn. Kinh nghiệm làm việc với hệ thống = lợi thế hiểu được yêu cầu người dùng.</p>
  </div>
</div>

<div class="alert-info">
  <strong>⭐ Message phân biệt ITBA vs Coding:</strong><br>
  Coding: "Tôi sẽ TẠO RA sản phẩm"<br>
  ITBA: "Tôi sẽ XÁC ĐỊNH SẢN PHẨM nào cần được tạo ra, và tại sao"<br><br>
  BA là decision-maker ngôn ngữ, không phải người thực thi. Nhiều senior BA earn cao hơn senior Developer vì họ ở vị trí chiến lược hơn.
</div>

<h4>C. AI KHÔNG NÊN HỌC</h4>
<div class="alert-info">
  <strong>Đừng recommend ITBA cho:</strong><br>
  ❌ Sinh viên mới ra trường không có domain knowledge — Fresher ITBA lương chỉ 8–12 triệu, thấp hơn DE hoặc Coding nhiều. Cần domain.<br>
  ❌ Người muốn code, build sản phẩm — recommend Coding<br>
  ❌ Người muốn design UI — recommend UI/UX<br>
  ❌ Người muốn kết quả nhanh mà không có kinh nghiệm ngành — BA cần thời gian build credibility
</div>

<h4>D. PRODUCT DEEP DIVE</h4>
<table class="pricing-table">
  <thead><tr><th>Cấp</th><th>Nội dung</th><th>Tools</th><th>Output</th><th>Giá lẻ</th></tr></thead>
  <tbody>
    <tr><td><strong>B — BA for Everyone</strong></td><td>Tư duy BA, SDLC, viết BRD, wireframe cơ bản, thu thập yêu cầu</td><td>draw.io, BPMN, Figma cơ bản</td><td>BRD đầu tiên từ brief doanh nghiệp thật</td><td>5.000.000đ</td></tr>
    <tr><td><strong>A — BA Intensive</strong></td><td>SRS, Use Case, Activity Diagram, Mockup, Agile/Scrum BA</td><td>PlantUML, Figma, Jira</td><td>Bộ SRS + Use Case + Prototype hoàn chỉnh</td><td>7.000.000đ</td></tr>
    <tr><td><strong>S — Career Kickstart</strong></td><td>ERD, SQL cơ bản, API Testing, Portfolio BA, Mock Stakeholder Meeting</td><td>Postman, MySQL, Portfolio</td><td>Portfolio BA (BRD + SRS + Use Case + Prototype) + Kết nối việc làm</td><td>11.000.000đ</td></tr>
    <tr style="background:var(--red-bg);font-weight:600;"><td colspan="4">Combo 3 (6 tháng) — Tiết kiệm 10%</td><td><del>23.000.000đ</del> → <strong>20.700.000đ</strong></td></tr>
  </tbody>
</table>

<h4>Career Path — ITBA có trajectory cao nhất trong nhóm không code</h4>
<div class="stats-grid">
  <div class="stat-card"><div class="stat-number">8–15tr</div><div class="stat-label">BA Fresher (không có domain)</div></div>
  <div class="stat-card"><div class="stat-number">20–28tr</div><div class="stat-label">BA Fresher (có domain 5+ năm)</div></div>
  <div class="stat-card"><div class="stat-number">30–55tr</div><div class="stat-label">Senior BA (3–5 năm)</div></div>
  <div class="stat-card"><div class="stat-number">50–75tr</div><div class="stat-label">PO / PM (5+ năm)</div></div>
</div>

<h4>F. TOP 5 SELLING POINTS</h4>
<div class="values-grid">
  <div class="value-card"><div class="value-icon">1</div><h4>Vào IT không cần code</h4><p>ITBA là con đường vào ngành IT mà không cần học lập trình. Phù hợp với người trái ngành có domain knowledge vững.</p></div>
  <div class="value-card"><div class="value-icon">2</div><h4>Domain cũ = Lợi thế chiến lược</h4><p>5 năm banking + BA skills = lương khởi điểm 20–28 triệu, không phải 8 triệu. Kinh nghiệm ngành cũ không bị vứt bỏ — được tận dụng.</p></div>
  <div class="value-card"><div class="value-icon">3</div><h4>Career ceiling rất cao</h4><p>PO/PM từ path ITBA có thể earn 50–75 triệu/tháng — cao hơn nhiều Developer bình thường. Strategic role, not execution role.</p></div>
  <div class="value-card"><div class="value-icon">4</div><h4>Chỉ 6 tháng — Ngắn nhất cho career change IT</h4><p>ITBA và DE (cũng 6 tháng) ngắn hơn Coding/Data/UIUX 8 tháng. Phù hợp cho người muốn switch nhanh hơn.</p></div>
  <div class="value-card"><div class="value-icon">5</div><h4>Brief dự án doanh nghiệp thật</h4><p>Không học từ case study sách giáo khoa — MindX kết nối với doanh nghiệp đối tác để học viên giải quyết yêu cầu thật (banking digitalization, logistics system).</p></div>
</div>`,
          quiz: {
            id: "quiz_k18_day2_s3",
            title: "Quiz: IT Business Analyst Deep Dive",
            questions: [
              { q: "Lương PO/PM từ career path ITBA có thể đạt bao nhiêu?", options: ["30–40 triệu", "40–55 triệu", "50–75 triệu", "60–90 triệu"], correct: 2, explanation: "PO/PM từ ITBA: 50–75 triệu/tháng (ITviec 2025) — cao nhất trong nhóm không cần code." },
              { q: "Tại sao người có 5 năm banking kinh nghiệm phù hợp nhất cho ITBA?", options: ["Họ đã biết code", "Domain knowledge banking → BA banking lương 20–28 triệu ngay, không phải 8 triệu Fresher", "Họ thích IT", "Không có lý do đặc biệt"], correct: 1, explanation: "Domain knowledge sâu từ banking + BA skills = lương khởi điểm 20–28 triệu thay vì 8–12 triệu của Fresher hoàn toàn mới không có domain." },
              { q: "ITBA có mấy cấp độ và thời gian là bao lâu?", options: ["4 cấp — 8 tháng", "3 cấp — 6 tháng", "2 cấp — 4 tháng", "5 cấp — 10 tháng"], correct: 1, explanation: "ITBA: 3 cấp (B → A → S), tổng 6 tháng, 48 buổi. Ngắn hơn Coding/Data/UI-UX 2 tháng." },
              { q: "Message phân biệt ITBA vs XCareer Coding là gì?", options: ["ITBA rẻ hơn", "ITBA: XÁC ĐỊNH sản phẩm nào cần tạo ra; Coding: TẠO RA sản phẩm", "ITBA dành cho sinh viên", "Không có sự khác biệt"], correct: 1, explanation: "BA là người xác định 'cần build cái gì và tại sao'. Developer là người build nó. Hai vai trò bổ sung nhau, không thay thế nhau." },
              { q: "Ai KHÔNG nên học ITBA?", options: ["Người banking 5 năm muốn vào IT", "Sinh viên mới ra trường, không có domain knowledge", "HR manager có 4 năm kinh nghiệm", "Logistics coordinator 3 năm KN"], correct: 1, explanation: "Sinh viên mới không có domain = ITBA Fresher lương chỉ 8–12 triệu, thấp hơn DE Fresher 15–18 triệu. Cần domain để leverage ITBA." }
            ]
          }
        },

        /* ---- DAY 2 SECTION 4: UI/UX ---- */
        {
          id: "k18_day2_s4",
          title: "UI/UX Designer — Deep Dive",
          icon: "🎨",
          content: `<h3>UI/UX Designer — Thiết kế trải nghiệm người dùng, từ Figma đến Product Thinking</h3>

<h4>A. TẠI SAO sản phẩm này tồn tại</h4>
<div class="insight-card">
  <div class="insight-number">WHY</div>
  <div class="insight-body">
    <p>Lương Senior Product Designer tại HCM: 60–100 triệu/tháng (ITviec 2025). Freelance UX Designer quốc tế: $1.900–$2.800/tháng. Mọi app, web, digital product đều cần UX Designer — từ MoMo, Shopee, VNPAY đến startup 10 người. <strong>Nhu cầu tăng 15%/năm</strong> — nhưng supply còn ít vì nhiều người nhầm UI/UX với Graphic Design.</p>
    <p><strong>Khác biệt quan trọng:</strong> UI Design (làm đẹp) ≠ UX Design (làm dễ dùng). MindX dạy cả hai — từ Figma kỹ thuật đến UX Research với người dùng thật.</p>
  </div>
</div>

<h4>B. AI NÊN HỌC</h4>
<div class="type-grid">
  <div class="type-card type-analytical">
    <h5>✅ Graphic Designer muốn upgrade lên Product Design</h5>
    <p>Đã biết Figma cơ bản, thiếu UX Research và Product Thinking. MindX fill gap này. Lương tăng từ 9–12 triệu lên 15–25 triệu sau 8 tháng.</p>
  </div>
  <div class="type-card type-decisive">
    <h5>✅ Marketing / Communication muốn chuyển ngành sáng tạo</h5>
    <p>Hiểu audience, biết narrative — đây là nền tảng tốt cho UX Researcher và UX Writer. Design Thinking học thêm là đủ để chuyển ngành.</p>
  </div>
  <div class="type-card type-friendly">
    <h5>✅ PM / BA muốn hiểu Design sâu hơn</h5>
    <p>Không cần học full 8 tháng — Level B và A đủ để PM có "design eye" và nói chuyện với Designer như đồng nghiệp thay vì outsider.</p>
  </div>
</div>

<h4>C. AI KHÔNG NÊN HỌC</h4>
<div class="alert-info">
  <strong>Đừng recommend UI/UX cho:</strong><br>
  ❌ Người hoàn toàn không thích hình ảnh, màu sắc, aesthetics — sẽ không có passion để làm design<br>
  ❌ Người chỉ muốn lương cao nhất nhanh nhất — lương Fresher UI/UX (5–10 triệu) thấp hơn DE (15–18 triệu) và ITBA có domain<br>
  ❌ Người muốn build tech product hoàn toàn — recommend Coding hoặc ITBA
</div>

<h4>D. PRODUCT DEEP DIVE</h4>
<table class="pricing-table">
  <thead><tr><th>Cấp</th><th>Nội dung</th><th>Tools</th><th>Output</th><th>Giá lẻ</th></tr></thead>
  <tbody>
    <tr><td><strong>B — Nhập môn UIUX</strong></td><td>Design Thinking, nguyên tắc UX, wireframing, information architecture</td><td>Figma cơ bản, FigJam, Miro</td><td>Wireframe set cho 1 ứng dụng hoàn chỉnh</td><td>5.000.000đ</td></tr>
    <tr><td><strong>A — UIUX Cơ bản</strong></td><td>Figma chuyên sâu, Design System, Typography, Color Theory, Auto Layout</td><td>Figma, Design System, AI Design Tools</td><td>5–6 UI screens hoàn chỉnh, Design System đầy đủ</td><td>7.000.000đ</td></tr>
    <tr><td><strong>I — UIUX Chuyên sâu</strong></td><td>UX Research (phỏng vấn người dùng thật), Persona, Journey Map, Prototype interactive</td><td>Figma Prototype, User Interview, FigJam</td><td>1 case study UX Research đầy đủ (brief → research → design → iterate)</td><td>9.000.000đ</td></tr>
    <tr><td><strong>S — Career Kickstart</strong></td><td>Product Thinking, Agile/Scrum với Design team, brief từ công ty đối tác, portfolio review</td><td>Portfolio, Figma, Notion</td><td>Portfolio 3 case studies chuẩn industry + Kết nối việc làm</td><td>11.000.000đ</td></tr>
    <tr style="background:var(--red-bg);font-weight:600;"><td colspan="4">Combo X (8 tháng) — Tiết kiệm 15%</td><td><del>32.000.000đ</del> → <strong>27.200.000đ</strong></td></tr>
  </tbody>
</table>

<h4>F. TOP 5 SELLING POINTS</h4>
<div class="values-grid">
  <div class="value-card"><div class="value-icon">1</div><h4>Figma Ecosystem đầy đủ</h4><p>Components, Variables, Prototype, Handoff cho Dev, Figma AI — đủ dùng như Senior Designer tại công ty thật.</p></div>
  <div class="value-card"><div class="value-icon">2</div><h4>UX Research với người dùng thật</h4><p>Level I: tự thực hiện user interview với 3–5 người thật, phân tích kết quả, design dựa trên data. Phân biệt với Graphic Designer chỉ làm đẹp theo cảm nhận.</p></div>
  <div class="value-card"><div class="value-icon">3</div><h4>Brief từ công ty đối tác thật</h4><p>Level S: nhận brief thiết kế từ startup đối tác — người dùng thật, constraint thật, timeline thật. Portfolio case study đủ mạnh để apply.</p></div>
  <div class="value-card"><div class="value-icon">4</div><h4>AI Design Tools tích hợp</h4><p>Figma AI, Midjourney cho concept, AI wireframing — trend 2025–2026 mà Graphic Designer không biết là mất điểm cộng.</p></div>
  <div class="value-card"><div class="value-icon">5</div><h4>Career path đến Senior/Freelance quốc tế</h4><p>Senior Product Designer HCM: 60–100 triệu. Freelance UX quốc tế từ năm 2+: $1.900–$2.800/tháng. Career ceiling rất cao.</p></div>
</div>`,
          quiz: {
            id: "quiz_k18_day2_s4",
            title: "Quiz: UI/UX Designer Deep Dive",
            questions: [
              { q: "Lương Senior Product Designer tại HCM là bao nhiêu?", options: ["30–50 triệu", "40–70 triệu", "60–100 triệu", "80–120 triệu"], correct: 2, explanation: "60–100 triệu/tháng (ITviec 2025). Đây là con số cần nói khi tư vấn để show career ceiling." },
              { q: "Khác biệt giữa UI Design và UX Design — TVTS cần giải thích thế nào?", options: ["Không có sự khác biệt", "UI = làm đẹp (how it looks); UX = làm dễ dùng (how it works). MindX dạy cả hai.", "UI cho web, UX cho app", "UI học 4 tháng, UX học 4 tháng riêng"], correct: 1, explanation: "UI: visual design, màu sắc, typography. UX: user research, information architecture, flow. Senior role cần cả hai = Product Designer." },
              { q: "Level I của UI/UX dạy gì và tại sao đó là differentiator với Graphic Designer?", options: ["Figma nâng cao — ai cũng học được", "UX Research với người dùng thật (user interview, persona, journey map) — Graphic Designer chỉ làm đẹp, không research", "Portfolio — ai cũng có", "Agile/Scrum — cơ bản"], correct: 1, explanation: "UX Research thật: phỏng vấn 3–5 user thật, phân tích kết quả, design dựa trên data — không phải assumption. Đây chính xác là điểm phân biệt Junior UX với Graphic Designer." },
              { q: "Ai KHÔNG phù hợp với UI/UX Designer?", options: ["Graphic Designer muốn upgrade", "Marketing muốn sáng tạo", "Người chỉ muốn lương cao nhất nhanh nhất", "PM muốn hiểu design"], correct: 2, explanation: "Fresher UI/UX lương 5–10 triệu — thấp hơn DE (15–18tr) và ITBA có domain. Nếu khách chỉ quan tâm lương tối đa nhanh nhất, recommend DE hoặc Coding." },
              { q: "Freelance UX Designer quốc tế từ năm 2+ có thể earn bao nhiêu?", options: ["$500–$800/tháng", "$1.000–$1.500/tháng", "$1.900–$2.800/tháng", "$3.000–$5.000/tháng"], correct: 2, explanation: "$1.900–$2.800/tháng (freelance UX quốc tế) — con số quan trọng khi tư vấn khách muốn remote work." }
            ]
          }
        },

        /* ---- DAY 2 SECTION 5: Fullstack Marketing ---- */
        {
          id: "k18_day2_s5",
          title: "Fullstack Marketing — Deep Dive",
          icon: "📣",
          content: `<h3>Fullstack Marketing — Content → Ads → SEO → Strategy, tích hợp AI mạnh mẽ</h3>

<h4>A. TẠI SAO sản phẩm này tồn tại</h4>
<div class="insight-card">
  <div class="insight-number">WHY</div>
  <div class="insight-body">
    <p>88% nhân viên VN dùng AI trong công việc. 76% lãnh đạo VN không tuyển người thiếu AI skills (khảo sát 2025). Marketing với AI premium lương cao hơn 25–40% so với marketer truyền thống (VietSourcing 2025). Thị trường cần: không chỉ người biết chạy quảng cáo — mà người biết tích hợp AI vào toàn bộ marketing funnel.</p>
    <p><strong>FOMO angle:</strong> "Marketing truyền thống đã hết thời? Chưa — nhưng Marketing truyền thống + AI tools đang THAY THẾ Marketing truyền thống thuần túy."</p>
  </div>
</div>

<h4>B. AI NÊN HỌC</h4>
<div class="type-grid">
  <div class="type-card type-analytical">
    <h5>✅ Content Writer muốn trở thành AI Marketer</h5>
    <p>Viết 20+ bài/tuần, burnout, sếp tăng KPI mà không tăng lương. AI tools giúp tăng output 3× → negotiate lương lên 15 triệu. Từ Content Writer → Performance Marketer.</p>
  </div>
  <div class="type-card type-decisive">
    <h5>✅ Performance Marketer muốn thành 360° Marketer</h5>
    <p>Biết Meta Ads/Google Ads nhưng thiếu SEO + Strategy. JD Marketing Manager yêu cầu full stack. Học thêm Module A3 (SEO) và S (Strategy) là đủ để apply vị trí cao hơn.</p>
  </div>
  <div class="type-card type-friendly">
    <h5>✅ Sales / Business muốn chuyển sang Marketing</h5>
    <p>Sales experience (hiểu khách hàng, chốt deal) là lợi thế cực kỳ lớn cho Conversion Marketing. Chỉ cần bổ sung digital skills là complete.</p>
  </div>
</div>

<h4>C. AI KHÔNG NÊN HỌC</h4>
<div class="alert-info">
  <strong>Đừng recommend Marketing cho:</strong><br>
  ❌ Người ghét làm việc sáng tạo/content — Marketing cần passion với storytelling<br>
  ❌ Người chỉ muốn technical role — recommend Coding hoặc DE<br>
  ❌ Người đang làm Performance Marketer senior lương 25tr+ muốn lên nhanh — cần tư vấn module specific (A3, S) thay vì full combo
</div>

<h4>D. PRODUCT DEEP DIVE — 4 Module (khác biệt vs B/A/I/S của các ngành kỹ thuật)</h4>
<table class="pricing-table">
  <thead><tr><th>Module</th><th>Nội dung</th><th>AI Tools tích hợp</th><th>Output</th><th>Giá lẻ</th></tr></thead>
  <tbody>
    <tr><td><strong>A1 — Content for Conversion</strong></td><td>Storytelling, Content Strategy, AI content generation, Content Pillar</td><td>ChatGPT, Claude, Jasper AI</td><td>Campaign content hoàn chỉnh với AI workflow</td><td>7.000.000đ</td></tr>
    <tr><td><strong>A2 — Digital for Growth</strong></td><td>Meta Ads, Google Ads, Funnel, A/B Testing, Budget optimization</td><td>Meta Advantage+, Google Performance Max, AI bidding</td><td>Campaign thật với budget thật — CTR, CPM, ROAS thật</td><td>7.000.000đ</td></tr>
    <tr><td><strong>A3 — SEO for Scale</strong></td><td>On-page SEO, Technical SEO, Off-page, Keyword Research, Content SEO</td><td>Semrush AI, Ahrefs, Surfer SEO</td><td>SEO audit + content calendar 6 tháng cho web thật</td><td>7.000.000đ</td></tr>
    <tr><td><strong>S — Marketing Integration</strong></td><td>Marketing & Sales Integration, KPI framework, reporting, AI dashboard</td><td>GA4, HubSpot, Notion AI</td><td>Marketing plan tổng thể + presentation cho board</td><td>9.000.000đ</td></tr>
    <tr style="background:var(--red-bg);font-weight:600;"><td colspan="4">Combo X (8 tháng) — Tiết kiệm 15%</td><td><del>30.000.000đ</del> → <strong>25.500.000đ</strong></td></tr>
  </tbody>
</table>

<h4>F. TOP 5 SELLING POINTS</h4>
<div class="values-grid">
  <div class="value-card"><div class="value-icon">1</div><h4>AI tích hợp vào TỪNG module</h4><p>Không phải "module AI riêng" tách rời — mỗi module đều có AI tools: ChatGPT cho content, Meta Advantage+ cho ads, Semrush AI cho SEO. Học 1 lần, apply ngay.</p></div>
  <div class="value-card"><div class="value-icon">2</div><h4>Campaign thật với budget thật</h4><p>Module A2: chạy Facebook Ads thật với budget từ doanh nghiệp đối tác. Thấy CTR thật, CPM thật — không phải demo account test.</p></div>
  <div class="value-card"><div class="value-icon">3</div><h4>Lương tăng 25–40%/năm với AI skills</h4><p>Marketer có AI premium earn cao hơn 25–40% so với marketer truyền thống cùng số năm kinh nghiệm (VietSourcing 2025).</p></div>
  <div class="value-card"><div class="value-icon">4</div><h4>AI tiết kiệm thời gian → nhận thêm freelance</h4><p>Trước: 1 campaign mất 3 ngày. Sau với AI: 4 giờ. Thời gian tiết kiệm → nhận thêm 2 client freelance → +15–30 triệu/tháng ngoài lương.</p></div>
  <div class="value-card"><div class="value-icon">5</div><h4>76% lãnh đạo VN không tuyển thiếu AI skills</h4><p>Con số từ khảo sát 2025. Không phải "nice to have" — là "must have" để giữ và thăng tiến trong marketing.</p></div>
</div>`,
          quiz: {
            id: "quiz_k18_day2_s5",
            title: "Quiz: Fullstack Marketing Deep Dive",
            questions: [
              { q: "Ai NÊN học Fullstack Marketing nhất?", options: ["Kỹ sư muốn chuyển ngành", "Content Writer burnout muốn dùng AI tăng output 3×", "Người muốn lương cao nhất nhanh nhất", "BA muốn hiểu marketing"], correct: 1, explanation: "Content Writer burnout — dùng AI tools (ChatGPT, Claude) tăng output 3× → không tăng giờ làm, tăng lương từ 8 triệu lên 15 triệu." },
              { q: "Fullstack Marketing khác với Marketing thông thường ở điểm gì?", options: ["Học lâu hơn", "AI tích hợp vào từng module — không phải add-on riêng biệt", "Rẻ hơn", "Không có sự khác biệt"], correct: 1, explanation: "AI không phải 'module cuối' — nó tích hợp vào tất cả: ChatGPT cho content (A1), Meta Advantage+ cho ads (A2), Semrush AI cho SEO (A3)." },
              { q: "Khi tư vấn Fullstack Marketing, con số nào tạo urgency mạnh nhất?", options: ["52 buổi học", "76% lãnh đạo VN không tuyển thiếu AI skills", "Module chia 4 phần", "Giảm 15% combo"], correct: 1, explanation: "76% lãnh đạo VN không tuyển người thiếu AI skills (2025) — không còn là nice-to-have, là điều kiện bắt buộc để được tuyển và thăng tiến." },
              { q: "Combo Fullstack Marketing giá bao nhiêu?", options: ["20.700.000đ", "22.500.000đ", "25.500.000đ", "27.200.000đ"], correct: 2, explanation: "25.500.000đ — giảm 15% từ 30 triệu (mua lẻ 4 module: 7+7+7+9=30 triệu)." },
              { q: "Performance Marketer đã biết Meta Ads nên được tư vấn học module nào?", options: ["Toàn bộ Combo từ đầu", "Module A3 (SEO) và S (Strategy) để hoàn thành full stack", "Chỉ Module A1 (Content)", "Không cần học thêm"], correct: 1, explanation: "Người đã biết Ads → chỉ cần A3 (SEO) và S (Marketing Integration/Strategy) để đủ điều kiện apply Marketing Manager lương 28–35 triệu." }
            ]
          }
        },

        /* ---- DAY 2 SECTION 6: Data Engineer ---- */
        {
          id: "k18_day2_s6",
          title: "Data Engineer — Deep Dive",
          icon: "⚙️",
          content: `<h3>Data Engineer — Lương cao nhất ngành Data, xây hạ tầng dữ liệu doanh nghiệp</h3>

<h4>A. TẠI SAO sản phẩm này tồn tại</h4>
<div class="insight-card">
  <div class="insight-number">WHY</div>
  <div class="insight-body">
    <p>Lương trung vị Data Engineer tại VN: <strong>44.1 triệu/tháng</strong>. Với 3–4 năm kinh nghiệm: <strong>56.9 triệu/tháng</strong> (ITviec 2025). Chỉ có vài trăm qualified Data Engineer tại VN nhưng có 46+ vị trí đang tuyển liên tục. Supply khan hiếm → demand cao → lương premium.</p>
    <p><strong>Versus DA:</strong> DA ceiling là 25–30 triệu sau 3–4 năm. DE trung vị là 44.1 triệu — <em>"cùng số năm kinh nghiệm, khác lane, khác lương"</em>. 6 tháng học DE đổi nguyên career trajectory.</p>
    <p><strong>Fresher DE lương 15–18 triệu — cao nhất trong 7 sản phẩm!</strong> Đây là số ấn tượng nhất khi tư vấn.</p>
  </div>
</div>

<h4>B. AI NÊN HỌC — DE là sản phẩm TECHNICAL nhất</h4>
<div class="type-grid">
  <div class="type-card type-analytical">
    <h5>✅ Data Analyst muốn lên level</h5>
    <p>DA 1–2 năm, biết SQL + Python + Power BI, lương 17 triệu, muốn lên 25+. Biết mình chỉ thiếu Airflow, Spark, Cloud — không phải rebuild từ đầu.</p>
  </div>
  <div class="type-card type-decisive">
    <h5>✅ Backend Developer muốn specialise</h5>
    <p>Backend 3 năm (Java/NodeJS), biết database, muốn specialise vì Backend market đang saturate. DE skills + Backend foundation = combo rất được tuyển dụng.</p>
  </div>
  <div class="type-card type-friendly">
    <h5>✅ SV IT năm cuối muốn lương Fresher cao nhất</h5>
    <p>Biết Python từ môn học, muốn specialise DE để Fresher earn 15–18 triệu thay vì 8–12 triệu Developer thông thường. Cần học thêm Airflow, dbt, AWS.</p>
  </div>
</div>

<h4>C. AI KHÔNG NÊN HỌC</h4>
<div class="alert-info">
  <strong>Đừng recommend DE cho:</strong><br>
  ❌ Người không có background kỹ thuật nào (không biết Python, SQL) — rào cản Entry level cao hơn các ngành khác<br>
  ❌ Người trái ngành hoàn toàn muốn vào IT — recommend ITBA thay thế<br>
  ❌ Người muốn Design, Marketing, hoặc không tech-oriented<br>
  ❌ Người muốn phân tích dữ liệu nhẹ nhàng — recommend DA thay thế
</div>

<h4>D. PRODUCT DEEP DIVE</h4>
<table class="pricing-table">
  <thead><tr><th>Cấp</th><th>Nội dung</th><th>Tools</th><th>Output thực tế</th><th>Giá lẻ</th></tr></thead>
  <tbody>
    <tr><td><strong>B — Python for DE</strong></td><td>Python OOP cho pipeline, xử lý dữ liệu, Flask API, unit testing</td><td>Python, Flask, Pytest</td><td>Python script ETL đơn giản chạy được, với error handling</td><td>5.000.000đ</td></tr>
    <tr><td><strong>A — ETL & Pipeline</strong></td><td>ETL Pipeline design, SQL nâng cao, Apache Airflow, dbt, PySpark cơ bản</td><td>Airflow, dbt, PySpark, PostgreSQL</td><td>Smart ETL Pipeline tự động hóa với DAG Airflow thật</td><td>7.000.000đ</td></tr>
    <tr><td><strong>S — Cloud & Deploy</strong></td><td>AWS (S3, Redshift, Lambda), Docker, CI/CD, Data Lake architecture, portfolio</td><td>AWS, Docker, GitHub Actions</td><td>End-to-end DE project trên AWS — đủ để show trong phỏng vấn technical</td><td>11.000.000đ</td></tr>
    <tr style="background:var(--red-bg);font-weight:600;"><td colspan="4">Combo 3 (6 tháng) — Tiết kiệm 10%</td><td><del>23.000.000đ</del> → <strong>20.700.000đ</strong></td></tr>
  </tbody>
</table>

<h4>E. SO SÁNH — Tại sao DE vs DA?</h4>
<div class="pricing-info">
  <table class="pricing-table">
    <thead><tr><th>Tiêu chí</th><th>DA (Data Analyst)</th><th>DE (Data Engineer)</th></tr></thead>
    <tbody>
      <tr><td>Công việc chính</td><td>Phân tích, query, dashboard, báo cáo</td><td>Build ETL, pipeline, data warehouse, infrastructure</td></tr>
      <tr><td>Lương Fresher VN</td><td>8–12 triệu</td><td><strong>15–18 triệu ⭐</strong></td></tr>
      <tr><td>Lương trung vị (5 năm)</td><td>31.3 triệu</td><td><strong>44.1 triệu</strong></td></tr>
      <tr><td>Yêu cầu kỹ thuật</td><td>SQL, Excel, Python nhẹ, BI tools</td><td>Python, SQL, Airflow, Spark, Cloud, Docker</td></tr>
      <tr><td>Thời gian đào tạo MindX</td><td>8 tháng — 27.2 triệu</td><td><strong>6 tháng — 20.7 triệu (ngắn hơn, rẻ hơn!)</strong></td></tr>
    </tbody>
  </table>
</div>

<h4>F. TOP 5 SELLING POINTS</h4>
<div class="values-grid">
  <div class="value-card"><div class="value-icon">1</div><h4>Fresher 15–18 triệu — Cao nhất trong 7 ngành</h4><p>Con số này thường khiến khách dừng lại. "Fresher Developer 8–12 triệu vs Fresher DE 15–18 triệu — cùng thời gian học, khác lương." Số thật, nguồn ITviec 2025.</p></div>
  <div class="value-card"><div class="value-icon">2</div><h4>Ngắn hơn và rẻ hơn DA</h4><p>DE chỉ 6 tháng (20.7 triệu) vs DA 8 tháng (27.2 triệu). Ngắn hơn 2 tháng, rẻ hơn 6.5 triệu, nhưng lương cao hơn. Logic đơn giản nhưng rất thuyết phục.</p></div>
  <div class="value-card"><div class="value-icon">3</div><h4>AWS Cloud — Future-proof nhất</h4><p>Level S bao gồm AWS thật (S3, Redshift, Lambda) — đây là infrastructure standard của mọi doanh nghiệp lớn. Cloud skills = không bao giờ thiếu việc.</p></div>
  <div class="value-card"><div class="value-icon">4</div><h4>46 vị trí tuyển, ít qualified DE</h4><p>Supply khan hiếm + demand cao = lương premium + tỷ lệ có việc cao. Không phải 46 ít — mà là với chỉ vài trăm qualified DE tại VN, 46 vị trí = gần như guaranteed có việc.</p></div>
  <div class="value-card"><div class="value-icon">5</div><h4>DA → DE: Upgrade không phải reset</h4><p>DA đã có SQL + Python → chỉ cần học thêm Airflow, dbt, AWS → Level B có thể bỏ qua. Đây là message quan trọng cho khách DA muốn lên level.</p></div>
</div>`,
          quiz: {
            id: "quiz_k18_day2_s6",
            title: "Quiz: Data Engineer Deep Dive",
            questions: [
              { q: "Lương trung vị Data Engineer tại VN là bao nhiêu (ITviec 2025)?", options: ["28 triệu", "36 triệu", "44.1 triệu", "55 triệu"], correct: 2, explanation: "44.1 triệu/tháng (trung vị). Với 3–4 năm kinh nghiệm: 56.9 triệu — cao nhất trong nhóm Data." },
              { q: "Fresher Data Engineer lương bao nhiêu và tại sao đây là key selling point?", options: ["8–12 triệu — giống Developer", "12–15 triệu — nhỉnh hơn chút", "15–18 triệu — cao nhất trong 7 ngành MindX", "20–25 triệu — quá cao"], correct: 2, explanation: "15–18 triệu — cao nhất trong 7 sản phẩm. Developer Fresher chỉ 7–12 triệu, DA Fresher 8–12 triệu. Gap này rất thuyết phục." },
              { q: "Tại sao DE học ngắn hơn (6 tháng) và rẻ hơn (20.7M) DA (8 tháng, 27.2M) nhưng lương lại cao hơn?", options: ["DE không cần học nhiều", "DE focus vào infrastructure/pipeline — niche kỹ thuật cao, supply khan hiếm → lương premium", "Thị trường DA saturate", "Không giải thích được"], correct: 1, explanation: "DE là niche kỹ thuật infrastructure — cần stack khó (Airflow, Spark, AWS). Supply khan hiếm → demand cao → lương premium dù học ngắn hơn." },
              { q: "Level A của Data Engineer học gì — đây là level quan trọng nhất?", options: ["Python cơ bản và Flask", "ETL Pipeline, Airflow DAG, dbt, PySpark — core skills của DE", "AWS Cloud và Docker", "SQL cơ bản"], correct: 1, explanation: "Level A: ETL Pipeline, Apache Airflow (DAG thật), dbt (data transformation), PySpark — đây chính xác là tech stack mà 80% JD Data Engineer yêu cầu." },
              { q: "DA muốn upgrade lên DE — họ cần học gì thêm?", options: ["Học lại toàn bộ từ đầu", "Học thêm Airflow, dbt, Cloud — SQL và Python đã có, có thể bỏ qua Level B", "Học thêm Power BI", "Không thể upgrade"], correct: 1, explanation: "DA đã có SQL + Python → bỏ Level B (Python for DE), học từ Level A (ETL, Airflow) + S (AWS). Không phải reset — là upgrade." }
            ]
          }
        },

        /* ---- DAY 2 SECTION 7: AI for Work ---- */
        {
          id: "k18_day2_s7",
          title: "AI for Work — Deep Dive",
          icon: "🤖",
          content: `<h3>AI for Work — Ứng dụng AI vào công việc thực tế, mọi ngành, 19 buổi</h3>

<h4>A. TẠI SAO sản phẩm này tồn tại</h4>
<div class="insight-card">
  <div class="insight-number">WHY</div>
  <div class="insight-body">
    <p>Jensen Huang (CEO Nvidia): <em>"Bạn sẽ không mất việc vào tay AI, nhưng sẽ mất việc vào tay người BIẾT SỬ DỤNG AI."</em> 88% nhân viên VN đang dùng AI, nhưng phần lớn dùng ngẫu hứng, không có system. AI for Work dạy SYSTEM để dùng AI hiệu quả cho bất kỳ công việc nào.</p>
    <p><strong>Income uplift tiềm năng: +25–50% (VietSourcing 2025)</strong>. Không phải tăng lương trực tiếp — là tiết kiệm 15–20 giờ/tháng → dùng để học thêm, nghỉ ngơi, nhận freelance. ROI vô hạn so với 8.5 triệu đầu tư.</p>
  </div>
</div>

<h4>B. AI NÊN HỌC — AI for Work là sản phẩm INCLUSIVE nhất</h4>
<div class="type-grid">
  <div class="type-card type-analytical">
    <h5>✅ Office Worker / Nhân viên văn phòng lo bị AI thay thế</h5>
    <p>Lo lắng nhưng không biết bắt đầu từ đâu. 7 buổi, không cần kỹ thuật, ứng dụng ngay. Sau buổi 1 đã thấy mình dùng được AI.</p>
  </div>
  <div class="type-card type-decisive">
    <h5>✅ Senior Professional / Manager muốn AI-augment</h5>
    <p>Finance Analyst, Accountant, HR Manager, Marketing Manager — muốn tăng tốc analysis, báo cáo, slide. AI for Spreadsheet (12 buổi) cực kỳ relevant.</p>
  </div>
  <div class="type-card type-friendly">
    <h5>✅ Entrepreneur / SME owner muốn AI thay nhân sự</h5>
    <p>Muốn AI làm content, báo cáo, customer service để giảm headcount. 3.5 triệu → tiết kiệm ít nhất 5 triệu/tháng chi phí vận hành = ROI rõ ràng.</p>
  </div>
</div>

<h4>C. AI KHÔNG NÊN HỌC (hoặc nên học THÊM khóa khác)</h4>
<div class="alert-info">
  <strong>AI for Work không phải lựa chọn cuối cùng cho:</strong><br>
  ❌ Người muốn chuyển ngành hoàn toàn sang IT — AI for Work không phải career change tool<br>
  ❌ Người muốn thành Data Scientist / ML Engineer — cần Coding hoặc DA path<br>
  💡 AI for Work là bổ sung lý tưởng cho tất cả khóa khác — recommend kết hợp sau khi học xong khóa chính
</div>

<h4>D. PRODUCT DEEP DIVE — Đơn giản nhất trong 7 sản phẩm</h4>
<table class="pricing-table">
  <thead><tr><th>Cấp</th><th>Nội dung</th><th>AI Tools</th><th>Output thực tế</th><th>Giá</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>B — AI for Work (7 buổi)</strong></td>
      <td>Email AI, báo cáo AI, slide AI, kế hoạch AI, họp AI, prompt engineering cho công việc</td>
      <td>ChatGPT, Claude, Notion AI, SlidesAI, Canva AI</td>
      <td>3 AI workflow cá nhân hóa cho công việc của bạn ngay trong buổi học</td>
      <td>3.500.000đ</td>
    </tr>
    <tr>
      <td><strong>A — AI for Spreadsheet (12 buổi)</strong></td>
      <td>Google Sheets AI, Excel AI, phân tích dữ liệu với AI, tự động hóa báo cáo, AI dashboard</td>
      <td>Google Sheets AI, Excel Copilot, ChatGPT API</td>
      <td>Dashboard tự động hóa phân tích dữ liệu của công ty/team bạn</td>
      <td>5.000.000đ</td>
    </tr>
    <tr style="background:var(--red-bg);font-weight:600;">
      <td colspan="4">Combo AI (19 buổi)</td>
      <td><strong>8.500.000đ</strong></td>
    </tr>
  </tbody>
</table>

<h4>E. SO SÁNH vs tự học YouTube AI</h4>
<div class="pricing-info">
  <table class="pricing-table">
    <thead><tr><th>Tiêu chí</th><th>Tự học YouTube AI</th><th>MindX AI for Work</th></tr></thead>
    <tbody>
      <tr><td>Chi phí</td><td>Miễn phí</td><td>3.5 triệu (Level B)</td></tr>
      <tr><td>Lộ trình có cấu trúc</td><td>Không — random videos</td><td><strong>7 use case cụ thể, có system</strong></td></tr>
      <tr><td>Mentor review output của bạn</td><td>Không</td><td><strong>Mỗi buổi — mentor review workflow của bạn</strong></td></tr>
      <tr><td>Customized cho công việc cụ thể của bạn</td><td>Không — generic example</td><td><strong>Bạn mang problem thật vào lớp</strong></td></tr>
      <tr><td>Thời gian đến khi dùng được</td><td>2–6 tháng tự mò</td><td><strong>Buổi đầu tiên đã dùng được</strong></td></tr>
    </tbody>
  </table>
</div>

<h4>F. TOP 5 SELLING POINTS</h4>
<div class="values-grid">
  <div class="value-card"><div class="value-icon">1</div><h4>Chi phí thấp nhất — Entry point mọi khách</h4><p>3.5 triệu (Level B) hoặc 8.5 triệu (Combo). Phù hợp với mọi budget. Là "bước thử" tốt trước khi commit vào khóa lớn hơn.</p></div>
  <div class="value-card"><div class="value-icon">2</div><h4>Mang problem thật vào lớp</h4><p>Trước khi đến lớp, học viên điền form: công việc là gì, tốn thời gian nhất vào đâu. Mentor build 3 AI workflow cụ thể cho công việc ĐÓ — không phải ví dụ generic.</p></div>
  <div class="value-card"><div class="value-icon">3</div><h4>Không cần kỹ thuật</h4><p>Dành cho mọi ngành, mọi background. Không cần biết code. Không cần biết IT. Chỉ cần biết công việc của mình cần cải thiện điều gì.</p></div>
  <div class="value-card"><div class="value-icon">4</div><h4>ROI có thể tính được</h4><p>Tiết kiệm 15–20 giờ/tháng. Income uplift +25–50%. 3.5 triệu → tiết kiệm ít nhất 1 tháng công sức mỗi tháng. ROI trong tháng đầu tiên.</p></div>
  <div class="value-card"><div class="value-icon">5</div><h4>Bổ sung hoàn hảo cho mọi khóa khác</h4><p>Học xong Coding, DA, Marketing... → AI for Work là upgrade ngay. Dùng AI tools trong chuyên môn đó sẽ work năng suất gấp 3–5 lần so với người không dùng AI.</p></div>
</div>

<h4>Script CTA đặc biệt cho AI for Work</h4>
<div class="flow-section">
  <div class="flow-steps">
    <div class="flow-step"><strong>Cho người AI anxiety:</strong> <em>"Sếp đang yêu cầu team dùng AI — không cần hiểu kỹ thuật. 7 buổi, học thực hành ngay buổi đầu. Nếu sau 1 buổi không thấy AI giúp ích gì, anh/chị không mất gì ngoài 3.5 triệu và 7 buổi."</em></div>
    <div class="flow-step"><strong>Cho Senior Professional:</strong> <em>"3.5 triệu cho 7 buổi nhỏ hơn 1 ngày lương của anh/chị. Nếu AI giúp anh/chị tiết kiệm 2 ngày/tháng — ROI vô hạn so với chi phí bỏ ra."</em></div>
    <div class="flow-step"><strong>Cho SME owner:</strong> <em>"Khóa AI này dạy anh/chị cách làm 1 người = 3 người. Đây là investment nhỏ nhất với impact lớn nhất cho DNNVV."</em></div>
  </div>
</div>`,
          quiz: {
            id: "quiz_k18_day2_s7",
            title: "Quiz: AI for Work Deep Dive",
            questions: [
              { q: "AI for Work có bao nhiêu buổi tổng cộng và giá Combo là bao nhiêu?", options: ["12 buổi — 5 triệu", "15 buổi — 7 triệu", "19 buổi — 8.5 triệu", "24 buổi — 10 triệu"], correct: 2, explanation: "19 buổi (7 buổi Level B + 12 buổi Level A), Combo 8.5 triệu. Ngắn nhất và rẻ nhất trong 7 sản phẩm." },
              { q: "Income uplift tiềm năng khi học AI for Work là bao nhiêu?", options: ["10–20%", "25–50%", "50–100%", "100%+"], correct: 1, explanation: "+25–50% income uplift (VietSourcing 2025) — không phải tăng lương trực tiếp mà là tiết kiệm thời gian → dùng để nhận thêm freelance hoặc thăng tiến nhanh hơn." },
              { q: "Điểm khác biệt lớn nhất của AI for Work MindX vs tự học YouTube?", options: ["Dùng tool xịn hơn", "Mentor build AI workflow cá nhân hóa cho công việc cụ thể của học viên — không phải ví dụ generic", "Dạy nhanh hơn", "Không có sự khác biệt"], correct: 1, explanation: "Bạn mang problem thật vào lớp → mentor build 3 AI workflow cụ thể cho công việc ĐÓ. Tự học YouTube chỉ có ví dụ generic, không customized." },
              { q: "AI for Work phù hợp với ai nhất?", options: ["Chỉ IT professional", "Chỉ người muốn chuyển ngành", "Mọi ngành — văn phòng, manager, SME owner, không cần kỹ thuật", "Chỉ marketer"], correct: 2, explanation: "AI for Work là sản phẩm INCLUSIVE nhất — mọi ngành, mọi background, không cần kỹ thuật. Từ nhân viên hành chính đến CFO." },
              { q: "Khi nào nên recommend AI for Work THAY VÌ khóa kỹ thuật khác?", options: ["Khi khách muốn chuyển ngành hoàn toàn", "Khi khách không có thời gian dài và muốn apply AI ngay vào công việc hiện tại", "Khi khách muốn lương cao nhất", "Khi khách đang là sinh viên"], correct: 1, explanation: "AI for Work phù hợp cho upskiller ngắn hạn — người không có 6–8 tháng nhưng muốn tăng ngay năng suất công việc hiện tại. Không phải career change tool." }
            ]
          }
        }
      ]
    },

    /* ==================== K18 DAY 3: SELLING SKILLS ==================== */
    {
      id: "k18_day3",
      day: 3,
      title: "SELLING SKILLS — Nâng cấp",
      subtitle: "Quy trình tư vấn, Career Navigator, Objection Bank chung và theo ngành",
      icon: "🎯",
      color: "#059669",
      sections: [

        /* ---- DAY 3 SECTION 1 ---- */
        {
          id: "k18_day3_s1",
          title: "Quy trình tư vấn 18+ — 5 bước chuẩn",
          icon: "📋",
          content: `<h3>Quy trình tư vấn 18+ — Khác biệt hoàn toàn so với K12</h3>

<div class="alert-info">
  <strong>⚡ Nguyên tắc vàng K18:</strong> Người lớn không muốn bị "bán hàng" — họ muốn được TƯ VẤN bởi chuyên gia. Vai trò của bạn không phải Sales Rep — mà là Career Consultant. Sự khác biệt này thay đổi hoàn toàn cách bạn mở đầu, hỏi, và close.
</div>

<h4>5 Bước quy trình tư vấn 18+ chuẩn</h4>

<div class="flow-section">
  <h4>BƯỚC 1: Chẩn đoán (5–10 phút)</h4>
  <p><strong>Mục tiêu:</strong> Hiểu khách đang ở đâu, muốn đi đâu, và điều gì cản họ.</p>
  <div class="flow-steps">
    <div class="flow-step"><strong>Câu hỏi mở:</strong> "Anh/chị đang làm trong ngành nào ạ? Được bao lâu rồi?" → Xác định persona (Fresh Grad / Career Changer / Upskiller)</div>
    <div class="flow-step"><strong>Khai thác nỗi đau:</strong> "Điều anh/chị muốn thay đổi nhất trong sự nghiệp hiện tại là gì?" → Tìm STUCK point</div>
    <div class="flow-step"><strong>Trigger ra quyết định:</strong> "Điều gì khiến anh/chị bắt đầu tìm hiểu về học upskill/chuyển ngành gần đây?" → Tìm catalyst</div>
    <div class="flow-step"><strong>Mục tiêu cụ thể:</strong> "Nếu 6 tháng nữa, anh/chị muốn có những thay đổi gì cụ thể?" → Xác định success criteria của họ</div>
  </div>
</div>

<div class="flow-section">
  <h4>BƯỚC 2: Phân loại & Recommend (3–5 phút)</h4>
  <p><strong>Mục tiêu:</strong> Chọn đúng 1–2 sản phẩm phù hợp nhất. Không pitch tất cả 7 ngành.</p>
  <div class="flow-steps">
    <div class="flow-step"><strong>Dựa trên chẩn đoán:</strong> "Với background [ngành] và mục tiêu [thay đổi] của anh/chị, em đề xuất [sản phẩm] vì [lý do cá nhân hóa]."</div>
    <div class="flow-step"><strong>Tối đa recommend 2 sản phẩm:</strong> Quá nhiều lựa chọn = khách không quyết được. "Em đề xuất ITBA — vì domain banking của anh/chị là lợi thế lớn. Nếu anh/chị muốn thêm kỹ năng technical, DA cũng là option tốt."</div>
    <div class="flow-step"><strong>Giải thích LÝ DO cá nhân hóa:</strong> Không phải "khóa này tốt" — mà "khóa này tốt vì AICỦA ANH/CHỊ [lý do cụ thể]."</div>
  </div>
</div>

<div class="flow-section">
  <h4>BƯỚC 3: Chứng minh bằng data & case study (5–10 phút)</h4>
  <p><strong>Mục tiêu:</strong> Build trust. Người lớn cần BẰNG CHỨNG, không phải lời hứa.</p>
  <div class="flow-steps">
    <div class="flow-step"><strong>Số liệu có nguồn:</strong> "Lương trung vị DA tại VN là 31.3 triệu (ITviec 2025)" — không phải "lương cao lắm anh/chị ơi"</div>
    <div class="flow-step"><strong>Case study giống họ:</strong> "Chị A, 29 tuổi, trước làm kế toán 4 năm tại ngân hàng, sau 8 tháng MindX chuyển sang DA tại Techcombank, lương tăng từ 14 triệu lên 22 triệu."</div>
    <div class="flow-step"><strong>ROI calculator ngay trên giấy:</strong> Đầu tư X triệu → lương mới Y triệu → tăng lương Z triệu/tháng → hoàn vốn sau W tháng.</div>
  </div>
</div>

<div class="flow-section">
  <h4>BƯỚC 4: Xử lý từ chối (5–15 phút)</h4>
  <p><strong>Mục tiêu:</strong> Không push — mà giải quyết nỗi lo thật bằng data và logic.</p>
  <div class="flow-steps">
    <div class="flow-step"><strong>Nghe đầy đủ:</strong> Đừng ngắt lời khi khách đang nói lo lắng. Gật đầu, ghi chú. Cho họ cảm giác được lắng nghe.</div>
    <div class="flow-step"><strong>Xác nhận lo lắng:</strong> "Em hoàn toàn hiểu ạ — đây là lo lắng rất có lý" (không phải "không cần lo").</div>
    <div class="flow-step"><strong>Trả lời bằng data:</strong> Mỗi từ chối có script chuẩn (xem Objection Bank ngày 3).</div>
    <div class="flow-step"><strong>Confirm resolution:</strong> "Không biết anh/chị còn băn khoăn gì về điểm này không?" → Đảm bảo lo lắng đã được giải quyết trước khi tiếp tục.</div>
  </div>
</div>

<div class="flow-section">
  <h4>BƯỚC 5: Close & Next step (2–5 phút)</h4>
  <p><strong>Mục tiêu:</strong> Dẫn đến hành động cụ thể — không phải "anh/chị về nghĩ thêm nhé".</p>
  <div class="flow-steps">
    <div class="flow-step"><strong>Trial class (ưu tiên nhất):</strong> "Em đề nghị anh/chị thử 1 buổi học miễn phí — không cam kết, không điền form dài. Sau 2 giờ, anh/chị tự quyết định. Có thể xếp lịch tuần này không?"</div>
    <div class="flow-step"><strong>Giữ chỗ (khi khách gần quyết):</strong> "Lớp tháng 5 còn 3 chỗ — em có thể giữ chỗ cho anh/chị trong 48 giờ để anh/chị quyết định. Giữ chỗ không cần đặt cọc."</div>
    <div class="flow-step"><strong>Send tài liệu:</strong> "Em gửi anh/chị brochure + ROI calculator chi tiết qua Zalo. Zalo anh/chị là số nào ạ?"</div>
  </div>
</div>

<h4>Flow nhanh theo 3 Persona</h4>
<div class="type-grid">
  <div class="type-card type-analytical">
    <h5>🎓 Fresh Grad</h5>
    <p><strong>Opening:</strong> "Bạn đang học năm mấy? Đã tìm được thực tập chưa?"<br><strong>Pain:</strong> "9.03% thanh niên VN thất nghiệp — bằng ĐH không còn đủ, cần portfolio thật."<br><strong>Close:</strong> "27.2 triệu = 3.4 triệu/tháng. Lương Fresher 15–20 triệu = hoàn vốn 2 tháng."</p>
  </div>
  <div class="type-card type-decisive">
    <h5>💼 Career Changer</h5>
    <p><strong>Opening:</strong> "Anh/chị đang làm ngành nào? Có bao giờ nghĩ đến chuyển ngành không?"<br><strong>Pain:</strong> "Lương ngành [X] trần ở [Y]. IT fresher đã [Z]. Khoảng cách sẽ càng lớn."<br><strong>Close:</strong> "Domain cũ của anh/chị là lợi thế — không bắt đầu từ đầu, bắt đầu từ chỗ anh/chị đang đứng."</p>
  </div>
  <div class="type-card type-friendly">
    <h5>🧠 Upskiller</h5>
    <p><strong>Opening:</strong> "Anh/chị có cảm thấy AI đang thay đổi công việc hiện tại không?"<br><strong>Pain:</strong> "Jensen Huang: mất việc vào tay người biết dùng AI."<br><strong>Close:</strong> "19 buổi, 8.5 triệu — ứng dụng ngay. Bắt đầu tuần tới được không?"</p>
  </div>
</div>`,
          quiz: {
            id: "quiz_k18_day3_s1",
            title: "Quiz: Quy trình tư vấn 18+",
            questions: [
              { q: "Bước đầu tiên trong quy trình tư vấn 18+ là gì?", options: ["Pitch ngay sản phẩm tốt nhất", "Chẩn đoán — hỏi về ngành nghề, nỗi đau, mục tiêu của khách", "Nói về học phí", "Hỏi khách có tiền không"], correct: 1, explanation: "Bước 1: Chẩn đoán — hiểu khách đang ở đâu (persona, ngành), muốn đi đâu (mục tiêu), và điều gì cản họ (nỗi đau). Không pitch trước khi chẩn đoán." },
              { q: "Tại sao không nên pitch tất cả 7 sản phẩm cho 1 khách?", options: ["Mất thời gian", "Quá nhiều lựa chọn = khách không quyết được — recommend tối đa 2 sản phẩm", "Khách không thể hiểu", "Không có lý do"], correct: 1, explanation: "Decision paralysis: quá nhiều option → không chọn được. Recommend tối đa 2 sản phẩm phù hợp nhất và giải thích LÝ DO cá nhân hóa." },
              { q: "Khi khách nói lo lắng, bước đầu tiên là gì?", options: ["Ngay lập tức bác bỏ lo lắng", "Giảm giá", "Nghe đầy đủ, xác nhận lo lắng là có lý, rồi mới trả lời bằng data", "Chuyển topic"], correct: 2, explanation: "Nghe → Xác nhận ('Em hoàn toàn hiểu, lo lắng này rất có lý') → Trả lời bằng data. Không bao giờ bác bỏ lo lắng của người lớn — họ sẽ cảm thấy bị disrespect." },
              { q: "Next step tốt nhất sau khi tư vấn xong là gì?", options: ["'Anh/chị về nhà nghĩ thêm nhé'", "Mời trial class hoặc giữ chỗ có thời hạn cụ thể", "Gọi điện liên tục", "Gửi hợp đồng ngay"], correct: 1, explanation: "Trial class (miễn phí, không cam kết) là next step tốt nhất — thấp rủi ro cho khách, conversion rate cao nhất. Nếu gần quyết: giữ chỗ 48 giờ không cần đặt cọc." },
              { q: "Khi tư vấn Career Changer, message quan trọng nhất là gì?", options: ["Học khóa của MindX dễ", "Domain cũ là lợi thế — không bắt đầu từ đầu, bắt đầu từ chỗ đang đứng", "Giá rẻ nhất thị trường", "Học online linh hoạt"], correct: 1, explanation: "Career Changer lo nhất về 'tuổi muộn' và 'bắt đầu lại từ đầu'. Message: domain cũ là lợi thế chiến lược — banking 5 năm + ITBA/DA = lương cao hơn fresher không có domain." }
            ]
          }
        },

        /* ---- DAY 3 SECTION 2: Career Navigator ---- */
        {
          id: "k18_day3_s2",
          title: "Career Navigator — Tư vấn đúng ngành cho khách",
          icon: "🗺️",
          content: `<h3>Career Navigator — Decision Tree chọn đúng sản phẩm cho từng khách</h3>
<p>Đây là công cụ quan trọng nhất của TVTS K18. Khi tư vấn đúng sản phẩm phù hợp với khách → conversion cao hơn, khách hài lòng hơn, referral nhiều hơn.</p>

<h4>Decision Tree — Hỏi theo thứ tự này</h4>
<div class="flow-section">
  <div class="flow-steps">
    <div class="flow-step"><strong>Câu 1: Anh/chị có background kỹ thuật không?</strong><br>→ CÓ (biết code / Python / database) → xem nhóm kỹ thuật<br>→ KHÔNG (hoàn toàn non-tech) → xem nhóm non-tech</div>
    <div class="flow-step"><strong>Câu 2 (nếu CÓ tech): Anh/chị muốn làm gì?</strong><br>→ Build ứng dụng web fullstack → <strong>XCareer Coding</strong><br>→ Phân tích, dashboard, báo cáo → <strong>AI-Data Analyst</strong><br>→ Build pipeline, infrastructure dữ liệu, lương cao nhất → <strong>Data Engineer</strong><br>→ Tăng năng suất công việc hiện tại với AI → <strong>AI for Work</strong></div>
    <div class="flow-step"><strong>Câu 2 (nếu KHÔNG tech): Anh/chị có bao nhiêu năm kinh nghiệm ngành và ngành gì?</strong><br>→ Banking/Finance/Logistics/HR 3+ năm → <strong>ITBA (domain là lợi thế)</strong><br>→ Marketing/Communication/Sales → <strong>Fullstack Marketing</strong><br>→ Thích sáng tạo, design, sản phẩm → <strong>UI/UX Designer</strong><br>→ Bất kỳ ngành nào muốn upskill nhanh → <strong>AI for Work</strong></div>
    <div class="flow-step"><strong>Câu 3 (mọi trường hợp): Anh/chị có bao nhiêu thời gian?</strong><br>→ Không có 6+ tháng → <strong>AI for Work (19 buổi)</strong><br>→ Có 6 tháng → <strong>ITBA hoặc Data Engineer</strong><br>→ Có 8 tháng → <strong>Coding, DA, UI/UX, Marketing</strong></div>
  </div>
</div>

<h4>Bảng so sánh tổng hợp — Công cụ tư vấn trực quan</h4>
<div class="pricing-info">
  <table class="pricing-table">
    <thead>
      <tr><th>Tiêu chí</th><th>Coding</th><th>DA</th><th>ITBA</th><th>UI/UX</th><th>Marketing</th><th>DE</th><th>AI</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Thời gian</strong></td><td>8T</td><td>8T</td><td>6T</td><td>8T</td><td>8T</td><td>6T</td><td>~3T</td></tr>
      <tr><td><strong>Combo giá</strong></td><td>27.2M</td><td>27.2M</td><td>20.7M</td><td>27.2M</td><td>25.5M</td><td>20.7M</td><td>8.5M</td></tr>
      <tr><td><strong>Lương Fresher</strong></td><td>7–12M</td><td>8–12M</td><td>8–15M</td><td>5–10M</td><td>8–12M</td><td>15–18M⭐</td><td>—</td></tr>
      <tr><td><strong>Cần background tech?</strong></td><td>Không*</td><td>Không*</td><td>Không</td><td>Không</td><td>Không</td><td>Khuyến nghị</td><td>Không</td></tr>
      <tr><td><strong>Domain cũ có lợi?</strong></td><td>Không nhiều</td><td>Rất lớn</td><td>Cực lớn</td><td>Vừa</td><td>Vừa</td><td>Vừa</td><td>Có</td></tr>
      <tr><td><strong>Career ceiling</strong></td><td>40–70M</td><td>28–45M</td><td>50–75M(PO)</td><td>30–50M</td><td>25–50M</td><td>50–70M</td><td>Uplift%</td></tr>
      <tr><td><strong>Phù hợp người</strong></td><td>Logic, kiên nhẫn</td><td>Số, phân tích</td><td>Business, domain</td><td>Sáng tạo</td><td>Creative+data</td><td>Kỹ thuật</td><td>Mọi người</td></tr>
    </tbody>
  </table>
</div>

<h4>5 Case Study thực tế — Áp dụng Career Navigator</h4>
<div class="insight-card">
  <div class="insight-number">Case 1</div>
  <div class="insight-body">
    <h4>Minh — 26 tuổi, Kế toán ngân hàng 3 năm, lương 14 triệu, muốn tăng thu nhập</h4>
    <p><strong>Phân tích:</strong> Non-tech → có domain banking mạnh 3 năm → muốn tăng lương.</p>
    <p><strong>Recommend:</strong> <strong>ITBA</strong> (domain banking là lợi thế cực lớn → lương khởi điểm 20–28M) hoặc <strong>DA</strong> (banking DA rất hot, bắt đầu từ Excel quen thuộc).</p>
    <p><strong>Script:</strong> "3 năm kế toán ngân hàng của anh — đây không phải điểm yếu, là điểm mạnh. ITBA + banking domain = lương khởi điểm 20–28M ngay, không phải 8M Fresher mới ra trường."</p>
  </div>
</div>
<div class="insight-card">
  <div class="insight-number">Case 2</div>
  <div class="insight-body">
    <h4>Linh — 23 tuổi, sinh viên năm 4 ngành kinh tế, chưa có portfolio</h4>
    <p><strong>Phân tích:</strong> Fresh Grad → non-tech → chưa có domain → muốn có việc sau tốt nghiệp.</p>
    <p><strong>Recommend:</strong> <strong>AI-Data Analyst</strong> (bắt đầu từ Excel, không cần tech, bằng kinh tế có context business) hoặc <strong>UI/UX</strong> (nếu thích sáng tạo).</p>
    <p><strong>Script:</strong> "DA bắt đầu từ Excel bạn đã biết — không cần code. Bằng kinh tế + DA skills là combo được tuyển dụng nhiều ở ngân hàng, e-commerce."</p>
  </div>
</div>
<div class="insight-card">
  <div class="insight-number">Case 3</div>
  <div class="insight-body">
    <h4>Hùng — 28 tuổi, Backend Developer NodeJS 3 năm, lương 25 triệu, muốn lên cao hơn</h4>
    <p><strong>Phân tích:</strong> CÓ tech (NodeJS, backend) → muốn specialise → lương tăng.</p>
    <p><strong>Recommend:</strong> <strong>Data Engineer</strong> (Backend skills + DE = combo rất được tuyển, lương DE trung vị 44M vs Backend 36M — gap 8M).</p>
    <p><strong>Script:</strong> "3 năm Backend của anh không bị vứt bỏ — nó là foundation tốt nhất cho DE. Chỉ cần học thêm Airflow, Spark, AWS là anh complete. DE trung vị 44M vs Backend trung vị 36M — cùng số năm kinh nghiệm."</p>
  </div>
</div>
<div class="insight-card">
  <div class="insight-number">Case 4</div>
  <div class="insight-body">
    <h4>Thủy — 31 tuổi, Marketing Manager lương 22 triệu, muốn dùng AI hiệu quả hơn</h4>
    <p><strong>Phân tích:</strong> Upskiller → đang làm marketing → muốn AI augment → không có 8 tháng rảnh.</p>
    <p><strong>Recommend:</strong> <strong>AI for Work</strong> (19 buổi, apply ngay) + <strong>Fullstack Marketing</strong> module A3+S (nếu muốn upgrade skill set).</p>
    <p><strong>Script:</strong> "19 buổi AI for Work — áp dụng ngay vào công việc Marketing hiện tại. Tiết kiệm 15-20 giờ/tháng = nhận thêm freelance hoặc focus vào strategy. Sau đó nếu muốn, Module SEO và Marketing Strategy sẽ hoàn thiện full stack."</p>
  </div>
</div>
<div class="insight-card">
  <div class="insight-number">Case 5</div>
  <div class="insight-body">
    <h4>An — 24 tuổi, Graphic Designer freelance lương 10 triệu (không ổn định), muốn vào tech company</h4>
    <p><strong>Phân tích:</strong> Có design background → muốn chuyển ngành sáng tạo → vào tech.</p>
    <p><strong>Recommend:</strong> <strong>UI/UX Designer</strong> (đã biết Figma cơ bản → bổ sung UX Research và Product Thinking → Junior Product Designer 15–25M).</p>
    <p><strong>Script:</strong> "Bạn đã có Figma, có aesthetic eye — đây là 50% skill set. Phần bạn thiếu là UX Research, Design System, Product Thinking. MindX bổ sung đúng phần đó. Gap nhỏ hơn bạn nghĩ."</p>
  </div>
</div>`,
          quiz: {
            id: "quiz_k18_day3_s2",
            title: "Quiz: Career Navigator",
            questions: [
              { q: "Data Analyst (DA) biết SQL + Python muốn lên level cao hơn — recommend gì?", options: ["Học thêm module Marketing", "Data Engineer — 6 tháng, từ Level A (bỏ qua Level B Python)", "Học lại Coding", "Không cần học thêm"], correct: 1, explanation: "DA → DE: chỉ cần Level A (ETL, Airflow, dbt) + S (AWS). Python/SQL đã có → bỏ Level B. Lương tăng từ ~17M lên 22–28M sau 6 tháng." },
              { q: "Sinh viên mới tốt nghiệp kinh tế, không biết tech, muốn có việc nhanh — recommend gì?", options: ["XCareer Coding (cần build full stack)", "Data Engineer (cần kỹ thuật)", "AI-Data Analyst (bắt đầu từ Excel, bằng kinh tế là lợi thế)", "ITBA (nhưng cần domain)"], correct: 2, explanation: "DA bắt đầu từ Excel (không cần code), bằng kinh tế có business context → phù hợp với e-commerce/banking DA. ITBA cần domain 3+ năm nên ít phù hợp hơn cho fresh grad." },
              { q: "HR Manager 5 năm kinh nghiệm, không biết code, muốn vào IT — recommend gì và tại sao?", options: ["XCareer Coding — học từ đầu", "ITBA — domain HR là lợi thế cực lớn cho BA chuyên về HR system", "Data Engineer — kỹ thuật cao", "AI for Work — ngắn nhất"], correct: 1, explanation: "5 năm HR + ITBA = BA chuyên về HR system/platform — lương khởi điểm 20+ triệu, không phải 8 triệu Fresher. Domain leverage." },
              { q: "Khách nói 'tôi chỉ có 3 tháng rảnh, muốn học ngành IT' — recommend gì?", options: ["Không có khóa nào phù hợp", "AI for Work (19 buổi ~ 3 tháng) — áp dụng ngay, không cần career change", "XCareer Coding (8 tháng)", "ITBA (6 tháng)"], correct: 1, explanation: "AI for Work 19 buổi là lựa chọn duy nhất trong 3 tháng. Không phải career change nhưng là upskill thật sự giá trị với mọi ngành." },
              { q: "Graphic Designer biết Figma nhưng bị reject JD UX Designer vì thiếu UX Research — recommend?", options: ["Học lại từ Figma cơ bản", "UI/UX Level I và S (UX Research + Career Kickstart) — bỏ Level B và A", "Chuyển sang Coding", "Không cần học thêm"], correct: 1, explanation: "Designer đã biết Figma → có thể bỏ Level B+A (Figma cơ bản). Focus vào Level I (UX Research thật với user thật) và S (Portfolio + Career). Gap nhỏ hơn tưởng." }
            ]
          }
        },


        /* ---- DAY 3 SECTION 3: Objection Bank chung ---- */
        {
          id: "k18_day3_s3",
          title: "Objection Bank chung — 10 từ chối phổ biến nhất",
          icon: "🛡️",
          content: `<h3>Objection Bank 18+ — 10 tình huống từ chối phổ biến nhất</h3>
<p>Mỗi từ chối đều có tâm lý ẩn bên dưới. TVTS giỏi không "bác bỏ" từ chối — họ <strong>xác nhận nỗi lo là có lý</strong>, rồi <strong>giải quyết bằng data</strong>.</p>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">1</span>"Tôi tự học YouTube/Udemy được"</div>
  <div class="objection-body">
    <p><strong>Tâm lý ẩn:</strong> Muốn tiết kiệm tiền, chưa thấy value của lộ trình có hướng dẫn.</p>
    <p><strong>Script:</strong> <em>"Em hoàn toàn hiểu — YouTube là nguồn kiến thức tuyệt vời. Nhưng có 3 điều YouTube không thể làm: (1) <strong>Lộ trình có hệ thống</strong> — tự học thường rời rạc, không biết học gì trước sau; (2) <strong>Mentor khi bị stuck</strong> — 80% người tự học bỏ cuộc ở tháng thứ 2 vì không có ai giải đáp; (3) <strong>Cam kết việc làm</strong> — YouTube không giới thiệu việc cho anh/chị. MindX có cả 3: lộ trình bài bản → mentor 1-1 → 200+ đối tác tuyển dụng."</em></p>
    <p><strong>Dữ liệu:</strong> 80% người tự học bỏ cuộc tháng thứ 2 (bootcamp conversion research).</p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">2</span>"Học xong có được việc không?"</div>
  <div class="objection-body">
    <p><strong>Tâm lý ẩn:</strong> Lo lắng chính đáng — đầu tư tiền + thời gian + cơ hội cost mà không chắc kết quả.</p>
    <p><strong>Script:</strong> <em>"Câu hỏi rất quan trọng — và đây là câu hỏi mà bất kỳ người thông minh nào cũng phải hỏi. MindX cam kết Internship X — sau khi hoàn thành lộ trình, anh/chị được giới thiệu tại 200+ đối tác: FPT, Shopee, Techcombank, VNG. Cấp S có Career Kickstart: mentor review CV, mock interview 1-1, portfolio chuyên nghiệp. 80K+ học viên đã tin tưởng MindX."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">3</span>"Tôi không có thời gian — đang đi làm"</div>
  <div class="objection-body">
    <p><strong>Tâm lý ẩn:</strong> Lo không theo kịp, lo ảnh hưởng công việc hiện tại.</p>
    <p><strong>Script:</strong> <em>"Em hoàn toàn hiểu — hầu hết 70%+ học viên MindX 18+ đều đi làm full-time. Lịch học được thiết kế CHO người đi làm: 2 buổi/tuần, có lớp tối (sau 18h) và cuối tuần. Câu hỏi không phải 'có thời gian không' mà là 'anh/chị sẵn sàng dành 6 giờ/tuần trong 6–8 tháng để thay đổi career không?'"</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">4</span>"Học phí đắt quá"</div>
  <div class="objection-body">
    <p><strong>Tâm lý ẩn:</strong> Chưa thấy ROI rõ ràng. So sánh với Udemy 300K thay vì giá trị nhận được.</p>
    <p><strong>Script:</strong> <em>"27.2 triệu cho 8 tháng = 3.4 triệu/tháng — ít hơn tiền xăng xe và café của nhiều người. Quan trọng hơn: lương Fresher sau khi học là 15–25 triệu/tháng. Nếu lương tăng 10 triệu/tháng — anh/chị hoàn vốn 27.2 triệu chỉ trong 2.7 tháng. Đây không phải chi tiêu — đây là đầu tư ROI cao nhất anh/chị có thể làm cho sự nghiệp."</em></p>
    <p><strong>So sánh:</strong> Đại học CNTT 4 năm = 150–200 triệu, sau đó vẫn cần học thêm portfolio. MindX 27.2 triệu = 8 tháng, portfolio thật, cam kết việc làm.</p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">5</span>"Tôi đã 30 tuổi — có muộn không?"</div>
  <div class="objection-body">
    <p><strong>Tâm lý ẩn:</strong> Lo ageism trong hiring. Sợ bị coi là "già" trong ngành tech trẻ.</p>
    <p><strong>Script:</strong> <em>"Không bao giờ muộn — và đây là sự thật thị trường, không phải lời động viên. Nhiều học viên MindX 28–35 tuổi đã chuyển ngành thành công. Thực ra, 30 tuổi có LỢI THẾ: kinh nghiệm làm việc (biết giao tiếp, quản lý dự án, hiểu business), time management tốt hơn sinh viên, và motivation mạnh hơn vì đã hiểu giá trị của quyết định đúng. IT không phân biệt tuổi — IT chỉ phân biệt KỸ NĂNG và PORTFOLIO."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">6</span>"MindX khác gì CodeGym/FUNiX/Udemy?"</div>
  <div class="objection-body">
    <p><strong>Tâm lý ẩn:</strong> Đang research và so sánh. Skeptical vì đã bị nhiều nơi pitch.</p>
    <p><strong>Script:</strong> <em>"Câu hỏi hay — và anh/chị hoàn toàn nên so sánh. 4 điểm MindX khác: (1) <strong>7 ngành</strong> — không locked vào 1 path; (2) <strong>Lớp nhỏ 10–15 người</strong> — mentor biết tên từng HV; (3) <strong>Cam kết Internship X thật</strong> — 200+ đối tác đang tuyển; (4) <strong>Mentor là professional đang đi làm</strong> — không phải giáo viên full-time."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">7</span>"Để tôi suy nghĩ thêm"</div>
  <div class="objection-body">
    <p><strong>Tâm lý ẩn:</strong> Hoặc còn lo lắng chưa nói ra, hoặc cần thêm thông tin.</p>
    <p><strong>Script:</strong> <em>"Hoàn toàn đúng — đây là quyết định quan trọng. Em muốn hỏi: anh/chị còn băn khoăn điều gì cụ thể chưa? Nếu anh/chị đã hài lòng với thông tin nhưng cần thêm thời gian, em đề nghị: học thử 1 buổi miễn phí — sau đó quyết định với trải nghiệm thật. Không cam kết gì cả."</em></p>
    <p><strong>Lưu ý:</strong> ĐỪNG để khách ra về mà không có next action cụ thể. Trial class là exit ramp tốt nhất.</p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">8</span>"Tôi không có background kỹ thuật — học được không?"</div>
  <div class="objection-body">
    <p><strong>Tâm lý ẩn:</strong> Imposter syndrome sớm. Lo là người chậm nhất lớp.</p>
    <p><strong>Script:</strong> <em>"Đây là thực tế: 60%+ học viên MindX 18+ không có background kỹ thuật khi bắt đầu. Các khóa thiết kế bắt đầu từ absolute zero — Coding từ HTML, DA từ Excel bạn đã biết. Lớp nhỏ 10–15 người + mentor 1-1 = không ai học một mình. Không có 'người học chậm' trong lớp MindX — chỉ có người cần thêm thời gian, và đó là hoàn toàn bình thường."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">9</span>"Sau 8 tháng, kỹ năng có còn relevant không?"</div>
  <div class="objection-body">
    <p><strong>Tâm lý ẩn:</strong> Technology half-life anxiety. "Học React xong 2 năm sau AI generate code hết."</p>
    <p><strong>Script:</strong> <em>"MERN Stack, SQL, Power BI, Figma đều là tech stack STABLE — đã tồn tại 10+ năm và sẽ tiếp tục. AI không thay thế Developer biết MERN — AI giúp Developer MERN làm nhanh hơn 3–5 lần. Tất cả khóa MindX tích hợp AI tools mới nhất vào curriculum theo quý — anh/chị học framework tư duy, không phải học tool version cụ thể."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">10</span>"Cho tôi xem học viên thật đã làm được gì chưa?"</div>
  <div class="objection-body">
    <p><strong>Tâm lý ẩn:</strong> Cần social proof cụ thể, không phải claim marketing.</p>
    <p><strong>Script:</strong> <em>"Câu hỏi tốt nhất! Anh Minh Quân, 27 tuổi, kế toán → DA tại Techcombank lương 22 triệu. Chị Thanh Huyền, 25 tuổi, Marketing Exec → BA tại FPT IS lương 18 triệu. Anh/chị muốn em kết nối để nói chuyện trực tiếp với 1-2 alumni không? Alumni tự nói về trải nghiệm thật thuyết phục hơn em nói."</em></p>
    <p><strong>Lưu ý:</strong> Alumni referral là conversion tool mạnh nhất. Nếu có thể, kết nối khách với alumni cùng background.</p>
  </div>
</div>`,
          quiz: {
            id: "quiz_k18_day3_s3",
            title: "Quiz: Objection Bank Chung",
            questions: [
              { q: "Khi khách nói 'tự học YouTube được', bạn nêu bao nhiêu điều YouTube thiếu?", options: ["1 điều", "2 điều", "3 điều", "5 điều"], correct: 2, explanation: "3 điều: lộ trình bài bản, mentor khi stuck, cam kết việc làm." },
              { q: "80% người tự học bỏ cuộc ở tháng thứ mấy?", options: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 6"], correct: 1, explanation: "Tháng 2 — con số quan trọng khi xử lý objection tự học." },
              { q: "Khi reframe 'học phí đắt', cách hiệu quả nhất?", options: ["So sánh với trung tâm rẻ hơn", "Chia nhỏ: 3.4tr/tháng + ROI hoàn vốn 2-3 tháng", "Offer giảm giá ngay", "Nói 'không đắt đâu'"], correct: 1, explanation: "Frame ROI: 3.4tr/tháng → 15-25tr/tháng lương mới = đầu tư, không phải chi phí." },
              { q: "Khách 30 tuổi lo 'muộn quá', lợi thế nào cần nhấn mạnh?", options: ["Học nhanh hơn sinh viên", "Kinh nghiệm làm việc là LỢI THẾ — IT chỉ phân biệt kỹ năng", "Khóa AI ngắn phù hợp hơn", "Không nên chuyển ngành ở tuổi này"], correct: 1, explanation: "Kinh nghiệm business, time management, motivation — tất cả là lợi thế ở tuổi 30." },
              { q: "MindX khác CodeGym/FUNiX — điểm phân biệt nào KHÔNG đúng?", options: ["7 ngành vs 1 ngành", "Lớp 10-15 người vs lớp online đông", "Mentor là professional đang đi làm", "Học phí rẻ hơn 50%"], correct: 3, explanation: "Học phí không nhất thiết rẻ hơn — USP là 7 ngành, lớp nhỏ, mentor real-world, cam kết việc làm." },
              { q: "Khi khách nói 'để suy nghĩ thêm', bước tiếp theo quan trọng nhất?", options: ["Gửi brochure và đợi", "Cho số điện thoại và nói gọi lại", "Hỏi còn băn khoăn gì + đề nghị trial class miễn phí", "Offer giảm giá để close ngay"], correct: 2, explanation: "Trial class là exit ramp tốt nhất — khách có trải nghiệm thật rồi tự quyết định." }
            ]
          }
        },

        /* ---- DAY 3 SECTION 4: Objection Bank theo ngành ---- */
        {
          id: "k18_day3_s4",
          title: "Objection Bank theo ngành — 25 câu từ chối đặc thù",
          icon: "🎯",
          content: `<h3>Objection Bank theo ngành — Từ chối đặc thù cho từng sản phẩm</h3>
<p>Mỗi sản phẩm có những từ chối RIÊNG mà khách hàng của ngành đó mới hỏi. TVTS phải thuộc lòng 3–5 câu từ chối đặc thù theo ngành mình đang tư vấn.</p>

<h4>💻 XCareer Coding — 4 từ chối đặc thù</h4>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">C1</span>"Tôi không có tư duy toán/logic — học coding có được không?"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"Đây là misconception phổ biến nhất về lập trình. Web coding không phải toán học cao cấp — đó là logic xây dựng, giống sắp xếp nội thất trong phòng. Cấp B bắt đầu từ HTML/CSS: tạo trang web cá nhân không cần giải phương trình. 60%+ học viên Coding MindX không có nền toán mạnh khi bắt đầu. Nếu anh/chị biết làm PowerPoint có cấu trúc, anh/chị học được Coding."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">C2</span>"8 tháng có đủ để apply Junior Dev không?"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"Sau 8 tháng MindX, anh/chị có: (1) Portfolio GitHub với 3 project thật (Front-end React + Fullstack MERN); (2) CV được mentor review theo chuẩn JD thật; (3) Kết nối 200+ đối tác; (4) Mock interview chuẩn bị. FPT, Shopee tuyển Fresher từ portfolio GitHub — không cần bằng CNTT. Nhiều alumni MindX nhận offer trước khi kết thúc Level S nếu build portfolio nghiêm túc."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">C3</span>"AI sẽ code thay lập trình viên — học có còn giá trị không?"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"AI không thay Developer — AI thay Developer KHÔNG BIẾT DÙNG AI. GitHub Copilot, Cursor, Claude đang giúp Developer giỏi làm nhanh gấp 3–5 lần, không thay thế họ. MindX tích hợp AI coding tools vào curriculum — anh/chị học không chỉ là coder, mà là AI-augmented developer. Đây là combo khan hiếm nhất trên thị trường 2026. (Jensen Huang: 'Bạn mất việc vào tay người biết dùng AI.')"</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">C4</span>"Lương Fresher 7-12tr thấp hơn lương hiện tại của tôi"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"Cần nói thật: những tháng đầu Fresher có thể bằng hoặc thấp hơn lương cũ. NHƯNG trajectory hoàn toàn khác: Junior 15–25tr (6–12 tháng), Mid 25–40tr (2–3 năm), Senior 40–70tr+ (5 năm). So sánh: tiếp tục con đường hiện tại, lương 5 năm sau là bao nhiêu? Coding là ngành lương compound theo kỹ năng, không phải theo thâm niên. Và nhiều alumni MindX apply được Junior level trực tiếp nếu có domain knowledge."</em></p>
  </div>
</div>

<h4>📊 AI-Data Analyst — 4 từ chối đặc thù</h4>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">D1</span>"Tôi đã 30 tuổi, bắt đầu học Excel lại từ đầu có muộn không?"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"Ngược lại — 30 tuổi học DA là LỢI THẾ lớn. Anh/chị đã có domain knowledge ngành mình (banking, finance, logistics). Data Analyst tại Techcombank có 5 năm banking experience được trả cao hơn DA Fresher không có domain — vì họ biết WHAT data matters, không chỉ HOW to query. MindX Level B bắt đầu từ Excel nâng cao (Pivot, VLOOKUP) — ai đi làm đều đã biết Excel cơ bản. Gap thật sự nhỏ hơn anh/chị nghĩ."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">D2</span>"Data nhiều quá — DA khác DS, DE như thế nào?"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"Phân biệt đơn giản: <strong>DA</strong> = hỏi câu hỏi business → dùng data trả lời → quyết định kinh doanh. <strong>DS</strong> = build model AI/ML, research-heavy, cần toán sâu. <strong>DE</strong> = xây hạ tầng pipeline data cho DA và DS dùng. DA là entry point tốt nhất: không cần toán sâu như DS, không cần code hạ tầng như DE, nhưng được mọi ngành cần. Từ DA có thể pivot sang DS hoặc DE sau 2–3 năm nếu muốn."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">D3</span>"Học Python/ML có quá khó không? Tôi không học IT"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"Python cho DA không phải Python của Software Engineer. Level B và A hoàn toàn không cần Python (Excel, SQL, Power BI). Python chỉ vào Level I (tháng 5–6) và học qua Pandas để xử lý data, không phải xây hệ thống. Nhiều học viên không có background IT đã hoàn thành Level I thành công — vì học theo case, không phải lý thuyết. Trial class miễn phí là cách tốt nhất để tự đánh giá."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">D4</span>"Tôi làm kế toán — chuyển sang DA có bị coi là Fresher không?"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"Domain knowledge của anh/chị KHÔNG bị bỏ đi. Kế toán 5 năm tại ngân hàng → DA tại Techcombank = khởi điểm 18–22 triệu, không phải 8–12 triệu Fresher. Vì sao? Anh/chị biết financial KPI, cash flow analysis, báo cáo management — đó là thứ Fresher IT mất 2 năm mới hiểu. MindX định vị rõ trong portfolio: 'DA with banking domain expertise'. Đây là lợi thế KHÔNG AI copy được."</em></p>
  </div>
</div>

<h4>📋 IT Business Analyst — 4 từ chối đặc thù</h4>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">B1</span>"BA là gì? Nghe không quen — công ty có tuyển không?"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"BA (Business Analyst) là người dịch yêu cầu kinh doanh thành requirement cho team IT. Mọi dự án phần mềm đều cần BA — ngân hàng số hóa, app startup, hệ thống ERP. ITviec 2025: supply-demand gap BA còn lớn hơn DE. Techcombank, VPBank, FPT IS đang tuyển BA với lương 15–25 triệu cho Fresher có portfolio tốt."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">B2</span>"Không code được — IT có coi thường BA không?"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"Hoàn toàn ngược lại — BA là người Developer và Stakeholder đều cần lắng nghe. BA không cần code — BA cần HIỂU business, DIỄN ĐẠT requirement, PHÂN TÍCH quy trình. Trong dự án, Dev follow requirement của BA. 'Bad requirement = Bad product' — và BA là người phòng ngừa điều đó. Level S dạy đủ SQL để đọc data, đủ Figma để wireframe — để communicate với team IT như đồng nghiệp."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">B3</span>"6 tháng có quá ngắn để chuyển ngành hoàn toàn không?"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"Anh/chị không bắt đầu từ zero — domain knowledge 3–5 năm banking, HR, logistics là thứ 6 tháng học không mua được. ITBA Level S có Career Kickstart: CV, portfolio document thật (BRD/SRS/Use Case), mock interview với mentor BA đang làm tại doanh nghiệp. Nhiều alumni nhận offer trong vòng 1–2 tháng sau tốt nghiệp. 6 tháng kỹ thuật + domain = career package không Fresher nào có."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">B4</span>"Lương BA Fresher 8-15tr — thấp hơn lương tôi hiện tại"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"Người KHÔNG có domain knowledge bắt đầu 8–15 triệu Fresher. Nhưng với 5 năm banking, khởi điểm ITBA là 20–28 triệu — không phải Fresher. BA banking với domain experience được trả premium từ ngày 1. Career ceiling: Senior BA 30–55 triệu, PO/PM 50–75 triệu — con đường lên cao nhất trong 7 sản phẩm 18+."</em></p>
  </div>
</div>

<h4>🎨 UI/UX Designer — 3 từ chối đặc thù</h4>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">U1</span>"Tôi không biết vẽ — có học UX được không?"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"UX Designer không phải họa sĩ — đây là điểm số 1 cần clarify. UX là về LOGIC người dùng: user đi đâu trước, button đặt ở đâu, flow có friction không. Figma là tool kéo thả, không phải vẽ. Người làm UX tốt nhất thường từ Product, Marketing, Business — vì họ hiểu người dùng tốt hơn designer thuần túy."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">U2</span>"Tôi đã biết Figma rồi — có cần học từ Level B không?"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"Cần trao đổi để xác định entry point phù hợp. Nếu biết Figma cơ bản — Level B vẫn có giá trị vì dạy UX thinking và Design Thinking, không chỉ Figma. Nếu đã biết Components, Auto Layout, Prototyping — có thể assess level A hoặc I. MindX flexible với người có partial skills — quan trọng là portfolio cuối cùng chuẩn industry."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">U3</span>"UX lương thấp hơn Coding — tại sao không học Coding?"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"Lương Fresher UX thấp hơn Coding là thực tế. NHƯNG: Senior Product Designer tại HCM: 60–100 triệu/tháng. Freelance UX quốc tế: $1.900–$2.800/tháng. Quan trọng hơn: anh/chị có phù hợp với UX không? Người thích creative, thích Figma, thích nghĩ về người dùng — UX cho họ năng lượng. Tư vấn đúng là hỏi anh/chị muốn ĐƯỢC GÌ từ career mới, không chỉ số lương."</em></p>
  </div>
</div>

<h4>📣 Fullstack Marketing — 3 từ chối đặc thù</h4>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">M1</span>"AI tool thay đổi liên tục — học xong có lỗi thời không?"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"Curriculum được cập nhật theo quý. Quan trọng hơn: chúng ta không học 'cách dùng ChatGPT version X' — chúng ta học TƯ DUY dùng AI: prompt engineering, workflow automation, content strategy với AI. Khi tool mới ra, người có tư duy đúng adapt trong 1–2 ngày. MindX dạy framework, không dạy click."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">M2</span>"Tôi đã biết Facebook Ads — có phải học lại Module A2 không?"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"Module A2 add value ở 2 điểm: (1) AI-assisted creative testing — Meta Advantage+ và AI copywriting; (2) Funnel thinking toàn diện — nhiều Performance Marketer biết set targeting nhưng không optimize full funnel. Nếu anh/chị proficient cả 2, có thể trao đổi về fast-track hoặc entry từ Module A3 (SEO) — nơi nhiều Digital Marketer thiếu nhất."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">M3</span>"Marketing VN cạnh tranh cao — người trái ngành có cơ hội không?"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"Marketing VN cạnh tranh — nhưng AI Marketer có rất ít. 88% nhân viên VN dùng AI nhưng chỉ một phần nhỏ dùng systematic với kết quả đo lường được. Người từ trái ngành có lợi thế: Sales B2B → hiểu customer pain point → content convert cao hơn. Finance → data-driven marketing. Fullstack Marketing dạy cả strategy và AI integration, tạo profile rất khác Marketing fresh grad truyền thống."</em></p>
  </div>
</div>

<h4>🔧 Data Engineer — 3 từ chối đặc thù</h4>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">DE1</span>"DE nghe phức tạp — tôi chỉ là DA, có học được không?"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"DA → DE là upgrade path phổ biến nhất trong ngành Data. Anh/chị đã có SQL, Python, tư duy data — đó là nền tảng. DE thêm vào: pipeline automation (Airflow), cloud (AWS), xử lý data scale lớn (Spark). Gap không phải 'học lại từ đầu' — là 'thêm infrastructure thinking lên data skills đã có'. Level B DE bắt đầu từ Python for data pipeline, không phải từ đầu."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">DE2</span>"Lương cao nhưng học có khó không? AWS/Cloud nghe phức tạp"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"Khóa DE là intensive nhất trong 7 sản phẩm — cần nói thật: đây là khóa đòi hỏi nhiều nhất về kỹ thuật. NHƯNG: lớp nhỏ, mentor là DE đang làm thật, curriculum build theo production use case thực tế. Nhiều DA và Backend Dev đã hoàn thành thành công. Trial class miễn phí là cách chính xác nhất để tự đánh giá."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">DE3</span>"Tôi không có nền kỹ thuật — có thể học DE từ đầu không?"</div>
  <div class="objection-body">
    <p><strong>Tư vấn đúng:</strong> DE recommend cho người có nền tảng kỹ thuật. Nếu chưa biết Python và SQL cơ bản — lộ trình tốt hơn: học Level B Coding hoặc Level B+A DA trước, rồi sang DE. Tư vấn đúng không phải push mọi người vào DE — mà là chọn entry point phù hợp.</p>
    <p><strong>Script:</strong> <em>"Em thẳng thắn chia sẻ: DE sẽ rất thách thức nếu chưa có Python và SQL cơ bản. Lộ trình em đề xuất: học DA Level B+A (4 tháng, 12 triệu) → rồi sang DE Level A+S. Total vẫn hợp lý và success rate cao hơn nhiều."</em></p>
  </div>
</div>

<h4>🤖 AI for Work — 3 từ chối đặc thù</h4>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">A1</span>"7 buổi có quá ít không? YouTube học AI cũng được"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"YouTube dạy AI generic — MindX dạy AI cho công việc CỤ THỂ của anh/chị. Trước buổi 1, anh/chị điền form: công việc là gì, đang tốn nhiều thời gian nhất vào task gì. Mentor build AI workflow cho USE CASE của anh/chị. 7 buổi × 2 giờ = 14 giờ structured practice — so với tự mò YouTube có thể mất 2–3 tháng. ROI = thời gian."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">A2</span>"3.5tr cho 7 buổi có đáng không?"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"Framing: nếu giờ của anh/chị đáng 200K/giờ (lương 20tr/tháng) → tiết kiệm 20 giờ/tháng = 4 triệu/tháng. Hoàn vốn 3.5 triệu trong tháng đầu. Income uplift từ AI tools: +25–50% theo VietSourcing 2025. Đây là khóa ROI nhanh và rõ nhất trong 7 sản phẩm."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">A3</span>"Tôi không giỏi kỹ thuật — AI có phức tạp không?"</div>
  <div class="objection-body">
    <p><strong>Script:</strong> <em>"AI for Work là sản phẩm duy nhất trong 7 ngành hoàn toàn không cần background kỹ thuật. Không cần biết code. Không cần biết máy tính ngoài mức dùng email và Word. Buổi 1: learn cách prompt ChatGPT ra output cho công việc của anh/chị. Buổi 2–3: build AI workflow cho email, báo cáo, presentation. Mọi tool đều giao diện click và paste — không có dòng code nào."</em></p>
  </div>
</div>`,
          quiz: {
            id: "quiz_k18_day3_s4",
            title: "Quiz: Objection Bank theo ngành",
            questions: [
              { q: "Khách học Coding lo 'AI sẽ thay code người' — điểm phản hồi quan trọng nhất?", options: ["AI sẽ thay thế hoàn toàn coder sau 5 năm", "AI thay Developer KHÔNG biết dùng AI — MindX dạy AI-augmented dev", "Không ai biết tương lai AI", "Học AI riêng, không cần Coding"], correct: 1, explanation: "AI không thay Developer — AI thay Developer không biết dùng AI. MindX tích hợp AI vào curriculum." },
              { q: "Khách 5 năm kế toán muốn học DA — khởi điểm lương kỳ vọng thực tế?", options: ["Fresher 8-12tr như người khác", "20-28tr nhờ domain knowledge banking", "Không thể dự đoán", "Bằng lương hiện tại"], correct: 1, explanation: "Domain knowledge banking là lợi thế — DA banking với domain earn premium từ ngày 1: 20-28tr." },
              { q: "Khách trái ngành hỏi 'BA có bị IT coi thường không?' — trả lời?", options: ["Có thể xảy ra, tùy công ty", "BA là người Dev và Stakeholder đều cần — không code nhưng define requirement", "Cần học code thêm để được tôn trọng", "Chọn ngành khác thay vì BA"], correct: 1, explanation: "BA define requirement — Dev follow. 'Bad requirement = Bad product' — BA ngăn điều đó." },
              { q: "Khách Marketing đã biết Facebook Ads hỏi 'có phải học lại Module A2?' — tư vấn đúng?", options: ["Bắt buộc học từ đầu, không exception", "Đánh giá level thực tế, có thể fast-track hoặc entry từ A3 (SEO)", "Skip A2, học A3 miễn phí", "Giảm giá module A2"], correct: 1, explanation: "Đánh giá skills thực tế trước — có thể fast-track hoặc recommend entry từ A3. Tư vấn đúng." },
              { q: "Khách không có kỹ thuật muốn học DE — tư vấn thế nào?", options: ["Push vào DE để maximize revenue", "Tư vấn lộ trình: học Coding Level B hoặc DA Level B+A trước, rồi mới sang DE", "Nói không thể học được DE", "Recommend AI for Work thay thế"], correct: 1, explanation: "Tư vấn đúng > push sản phẩm. Lộ trình phù hợp → khách thành công → referral." },
              { q: "Graphic Designer lo 'UX lương thấp hơn Coding' — phản hồi ĐÚNG?", options: ["Đúng, UX thấp hơn Coding, nên học Coding", "Fresher UX thấp hơn — nhưng Senior 60-100tr, và quan trọng hơn là career fit", "Lương UX và Coding như nhau", "Lương không quan trọng, quan trọng là đam mê"], correct: 1, explanation: "Acknowledge thực tế lương Fresher, nhưng highlight Senior trajectory và career fit quan trọng hơn." }
            ]
          }
        }

      ] /* end day3 sections */
    }, /* end day3 */

    /* ==================== K18 DAY 4: SIMULATION ==================== */
    {
      id: "k18_day4",
      day: 4,
      title: "SIMULATION (18+)",
      subtitle: "Mô phỏng tư vấn thực chiến — 7 case, 3 persona, DISC adapted",
      icon: "🎭",
      color: "#D97706",
      sections: [

        /* ---- DAY 4 SECTION 1 ---- */
        {
          id: "k18_day4_s1",
          title: "Script tư vấn theo 3 Persona 18+",
          icon: "📞",
          content: `<h3>3 Script tư vấn chuẩn cho 3 persona 18+</h3>
<p>Mỗi persona 18+ có nỗi lo KHÁC NHAU và trigger quyết định KHÁC NHAU. Script không phải đọc nguyên văn — là <strong>framework tư duy</strong> để linh hoạt trong mọi cuộc tư vấn.</p>

<div class="flow-section">
  <h4>🎓 PERSONA 1: Fresh Graduate — Sinh viên năm 3-4 hoặc vừa tốt nghiệp</h4>
  <div class="insight-card">
    <div class="insight-number">Profile</div>
    <div class="insight-body">
      <p><strong>Nỗi lo #1:</strong> CV trống rỗng, sợ thất nghiệp sau tốt nghiệp (9.03% thất nghiệp thanh niên VN)</p>
      <p><strong>Trigger QD:</strong> Thấy bạn cùng lớp đã có offer, áp lực gia đình</p>
      <p><strong>Budget:</strong> Hạn chế, cần gia đình hỗ trợ → nhấn ROI rõ ràng</p>
    </div>
  </div>
  <div class="flow-steps">
    <div class="flow-step"><strong>Mở đầu (Hook):</strong> "Bạn đang học năm mấy? Đã bắt đầu chuẩn bị portfolio chưa? Thống kê mới nhất: 9.03% thanh niên VN thất nghiệp — bằng đại học không còn đủ nữa rồi, bạn biết điều này không?"</div>
    <div class="flow-step"><strong>Diagnose (Hỏi sâu):</strong> "Bạn muốn làm gì sau khi ra trường? Ngành nào hấp dẫn bạn nhất? Bạn đã từng thử code/design/data chưa?" → Lắng nghe để chọn sản phẩm đúng</div>
    <div class="flow-step"><strong>Prescribe (Đề xuất có lý do):</strong> "Với bạn, em đề xuất [sản phẩm X] vì [lý do cá nhân hóa]. Sau 8 tháng bạn sẽ có: portfolio thật + cam kết Internship X với 200+ đối tác bao gồm FPT, Shopee, Techcombank."</div>
    <div class="flow-step"><strong>Prove (Chứng minh):</strong> "Bạn [Tên], sinh viên năm 4 ngành Kinh tế, học Coding 8 tháng tại MindX → nhận offer Junior Frontend tại Tiki lương 15 triệu trước khi tốt nghiệp."</div>
    <div class="flow-step"><strong>ROI + Close:</strong> "Học phí 27.2tr cho 8 tháng = 3.4tr/tháng. Lương Fresher tối thiểu 12-15tr. Hoàn vốn trong 2 tháng đi làm. Học thử 1 buổi miễn phí — không mất gì cả ngoài 2 giờ."</div>
  </div>
  <div class="alert-info"><strong>⚠️ Lưu ý:</strong> Fresh grad thường cần sự đồng ý của gia đình. Hỏi: "Bố mẹ bạn có ủng hộ hướng này không?" Chuẩn bị tài liệu ROI để họ thuyết phục gia đình.</div>
</div>

<div class="flow-section">
  <h4>💼 PERSONA 2: Career Changer — Người đi làm 1-5 năm muốn chuyển ngành</h4>
  <div class="insight-card">
    <div class="insight-number">Profile</div>
    <div class="insight-body">
      <p><strong>Nỗi lo #1:</strong> Mất thời gian + tiền → không đổi được gì</p>
      <p><strong>Trigger QD:</strong> Lương stagnant, nhìn thấy IT salary gap, sự kiện bị loại khỏi hiring vì thiếu skills</p>
      <p><strong>Budget:</strong> Có thu nhập → sẵn sàng đầu tư nếu ROI rõ ràng</p>
    </div>
  </div>
  <div class="flow-steps">
    <div class="flow-step"><strong>STUCK:</strong> "Anh/chị đang làm trong ngành [X] — lương trung bình ngành đó thường khoảng [Y] triệu, ceiling khoảng [Z] triệu sau 5-7 năm. Anh/chị có cảm giác đang bị mắc kẹt trong mức đó không?"</div>
    <div class="flow-step"><strong>POSSIBLE:</strong> "Anh/chị có biết Data Analyst với domain banking earn 22-28 triệu ngay từ năm đầu chuyển ngành không? Không phải Fresher rate — vì domain knowledge của anh/chị là thứ Fresher IT mất 2 năm mới có."</div>
    <div class="flow-step"><strong>PROOF:</strong> "Anh Minh, 29 tuổi, kế toán ngân hàng 4 năm, học DA 8 tháng tại MindX → DA tại Techcombank lương 24 triệu. Tăng 10 triệu/tháng. Hoàn vốn 27.2tr trong 2.7 tháng."</div>
    <div class="flow-step"><strong>PATH:</strong> "Với anh/chị, em đề xuất: [sản phẩm cụ thể] bắt đầu [tháng X]. Lịch học: 2 buổi/tuần tối hoặc cuối tuần — vẫn đi làm được. Sau [N] tháng có portfolio + career support."</div>
    <div class="flow-step"><strong>NOW:</strong> "Lớp tháng [X] còn [N] slot. Học thử 1 buổi miễn phí tuần tới. Anh/chị available buổi tối thứ [X] không?"</div>
  </div>
</div>

<div class="flow-section">
  <h4>🧠 PERSONA 3: Upskiller — Người 5+ năm kinh nghiệm, muốn nâng cấp tại chỗ</h4>
  <div class="insight-card">
    <div class="insight-number">Profile</div>
    <div class="insight-body">
      <p><strong>Nỗi lo #1:</strong> AI thay thế, kỹ năng lỗi thời, mất vị thế hiện tại</p>
      <p><strong>Trigger QD:</strong> Sếp mention AI, đồng nghiệp dùng AI năng suất hơn, đọc báo về AI disruption</p>
      <p><strong>Budget:</strong> Cao nhất → sẵn sàng chi nếu thấy giá trị thực tế ngay</p>
    </div>
  </div>
  <div class="flow-steps">
    <div class="flow-step"><strong>Mở đầu (Peer + urgency):</strong> "Anh/chị có để ý không — trong team, người dùng AI thì làm nhanh hơn hẳn. Jensen Huang (Nvidia CEO): 'Bạn mất việc vào tay người biết dùng AI.' Anh/chị đang ở bên nào?"</div>
    <div class="flow-step"><strong>Diagnose:</strong> "Anh/chị đang dùng AI gì trong công việc hiện tại? Có workflow nào tốn thời gian nhất? Có task nào lặp đi lặp lại mà nghĩ AI làm được không?"</div>
    <div class="flow-step"><strong>Prescribe (Short path):</strong> "Với anh/chị, em đề xuất AI for Work — 19 buổi, không cần kỹ thuật. Tuần 1-2: build AI workflow cho email và báo cáo. Tuần 3-4: AI cho phân tích dữ liệu spreadsheet. Xong → áp dụng ngay."</div>
    <div class="flow-step"><strong>ROI ngắn hạn:</strong> "Nếu AI giúp tiết kiệm 20 giờ/tháng — với lương [X] triệu, 20 giờ đó đáng bao nhiêu? ROI của 3.5 triệu sẽ hiện ra ngay tháng đầu tiên."</div>
    <div class="flow-step"><strong>NOW (Low barrier):</strong> "Lớp AI for Work tháng [X] còn [N] slot. Chỉ 3.5 triệu — đổi lại 20 giờ tiết kiệm/tháng. Anh/chị đăng ký được không?"</div>
  </div>
</div>

<h3>📋 Checklist đánh giá cuộc tư vấn 18+ — 12 tiêu chí</h3>
<div class="checklist-grid">
  <div class="check-item"><span class="check-num">1</span> Xác định đúng persona (Fresh grad / Career changer / Upskiller)</div>
  <div class="check-item"><span class="check-num">2</span> Hỏi ngành nghề + kinh nghiệm trước khi pitch</div>
  <div class="check-item"><span class="check-num">3</span> Đề xuất sản phẩm phù hợp với lý do cá nhân hóa</div>
  <div class="check-item"><span class="check-num">4</span> Nêu ít nhất 1 con số ROI cụ thể (lương, hoàn vốn)</div>
  <div class="check-item"><span class="check-num">5</span> Kể 1 case study cụ thể (tên, background, outcome)</div>
  <div class="check-item"><span class="check-num">6</span> Xử lý ít nhất 1 objection nếu có</div>
  <div class="check-item"><span class="check-num">7</span> Lấy Zalo hoặc book trial class</div>
  <div class="check-item"><span class="check-num">8</span> Xưng anh/chị, tone chuyên nghiệp — không push</div>
  <div class="check-item"><span class="check-num">9</span> Không hứa hẹn quá mức</div>
  <div class="check-item"><span class="check-num">10</span> Cảm ơn + hẹn follow-up cụ thể</div>
  <div class="check-item"><span class="check-num">11</span> Ghi chú CRM trong 15 phút sau</div>
  <div class="check-item"><span class="check-num">12</span> Gửi tài liệu Zalo trong 1 giờ sau</div>
</div>`,
          quiz: {
            id: "quiz_k18_day4_s1",
            title: "Quiz: Script theo 3 Persona 18+",
            questions: [
              { q: "Persona Fresh Graduate lo nhất điều gì?", options: ["Học phí đắt", "CV trống, sợ thất nghiệp sau tốt nghiệp", "Lịch học không phù hợp", "Mentor không đủ trình độ"], correct: 1, explanation: "Fresh grad lo nhất CV trống + thất nghiệp — portfolio và cam kết việc làm là USP cốt lõi." },
              { q: "Với Persona Career Changer, ROI argument mạnh nhất?", options: ["Học phí chia nhỏ theo tháng", "Domain knowledge + new skills = khởi điểm lương premium", "Lớp học cuối tuần tiện", "Giảm giá mùa hè"], correct: 1, explanation: "Domain knowledge là lợi thế không ai khác có — Career changer với domain earn premium từ ngày 1." },
              { q: "Persona Upskiller (5+ năm) nên được giới thiệu sản phẩm nào đầu tiên?", options: ["Coding 8 tháng", "Data Engineer 6 tháng", "AI for Work 19 buổi", "ITBA 6 tháng"], correct: 2, explanation: "AI for Work 19 buổi: ngắn, ứng dụng ngay, không cần background kỹ thuật — perfect cho upskiller." },
              { q: "Trigger quyết định của Career Changer thường là gì?", options: ["Thích học thêm", "Lương stagnant + nhìn thấy IT salary gap + sự kiện cụ thể", "Gia đình khuyên", "Xem quảng cáo MindX"], correct: 1, explanation: "Career changer cần moment of pain + salary data + concrete path forward để quyết định." },
              { q: "Sau cuộc tư vấn 18+, bước tiếp theo QUAN TRỌNG NHẤT?", options: ["Gọi lại ngay hôm sau", "Ghi chú CRM trong 15 phút + gửi tài liệu Zalo trong 1 giờ", "Đợi khách liên hệ lại", "Gửi email brochure"], correct: 1, explanation: "CRM ghi chú ngay + Zalo tài liệu trong 1 giờ = professionalism + pipeline management." }
            ]
          }
        },

        /* ---- DAY 4 SECTION 2 ---- */
        {
          id: "k18_day4_s2",
          title: "Case Practice — Phân loại & Recommend đúng ngành (7 cases)",
          icon: "🎯",
          content: `<h3>7 Case Practice — Đọc profile → Chọn sản phẩm đúng → Giải thích WHY</h3>
<p>Với mỗi case: (1) Xác định Persona, (2) Chọn sản phẩm phù hợp nhất, (3) Giải thích WHY bằng data và logic. Đọc profile → tự quyết định → mở xem gợi ý.</p>

<div class="product-card">
  <div class="product-header year1"><h4>📁 CASE 1: Minh Tuấn, 23 tuổi — SV năm 4 Tài chính</h4></div>
  <div class="product-body">
    <p><strong>Profile:</strong> Sinh viên năm 4 Đại học Kinh tế, chuyên ngành Tài chính. GPA 3.2. Biết Excel cơ bản. Chưa có kinh nghiệm. Lo lắng CV trống khi ra trường. Budget: gia đình hỗ trợ tối đa 25-30 triệu.</p>
    <details>
      <summary><strong>▼ Xem gợi ý tư vấn</strong></summary>
      <div class="alert-info">
        <p><strong>Persona:</strong> Fresh Graduate</p>
        <p><strong>Recommend:</strong> <strong>AI-Data Analyst</strong> hoặc ITBA</p>
        <p><strong>Lý do:</strong> Background Tài chính → DA tại banking/finance là combo cực kỳ phù hợp. Domain Tài chính là lợi thế — DA banking Fresher 12-18tr thay vì 8-12tr. ITBA cũng phù hợp vì 6 tháng ngắn hơn.</p>
        <p><strong>Key message:</strong> "Kiến thức Tài chính của Tuấn + DA skills = lợi thế khi apply tại ngân hàng. Fresher DA Kinh tế earn cao hơn Fresher DA thuần IT vì hiểu business context."</p>
        <p><strong>Không nên recommend:</strong> Data Engineer (cần kỹ thuật), Coding (không leverage Tài chính).</p>
      </div>
    </details>
  </div>
</div>

<div class="product-card">
  <div class="product-header year2"><h4>📁 CASE 2: Hương, 27 tuổi — Kế toán SME 4 năm</h4></div>
  <div class="product-body">
    <p><strong>Profile:</strong> Kế toán 4 năm lương 14 triệu. Dùng Excel hàng ngày. Muốn chuyển sang IT nhưng sợ "không có tư duy kỹ thuật". Đã xem vài video Python trên YouTube nhưng không hiểu. Budget: tự chi tối đa 25 triệu.</p>
    <details>
      <summary><strong>▼ Xem gợi ý tư vấn</strong></summary>
      <div class="alert-info">
        <p><strong>Persona:</strong> Career Changer</p>
        <p><strong>Recommend:</strong> <strong>AI-Data Analyst</strong> (BEST FIT)</p>
        <p><strong>Lý do:</strong> Level B DA = Excel nâng cao (zero barrier). Kế toán 4 năm = domain knowledge → banking DA khởi điểm 20-25tr. Python chỉ ở Level I (tháng 5-6).</p>
        <p><strong>ROI:</strong> 14tr → 22tr = +8tr/tháng → hoàn vốn 27.2tr trong 3.4 tháng.</p>
        <p><strong>Key message:</strong> "Hương không bắt đầu từ zero — bắt đầu từ Excel đang dùng hàng ngày. Domain kế toán = lợi thế DA banking earn 20-25tr ngay năm 1."</p>
      </div>
    </details>
  </div>
</div>

<div class="product-card">
  <div class="product-header year3"><h4>📁 CASE 3: Bình, 30 tuổi — Chuyên viên tín dụng ngân hàng 5 năm</h4></div>
  <div class="product-body">
    <p><strong>Profile:</strong> Lương 18 triệu. Không biết code. Đang trong team triển khai Core Banking system — thường kết nối business và IT không chính thức. Muốn title IT, lương 25+ triệu. Budget: tự chi đến 25 triệu.</p>
    <details>
      <summary><strong>▼ Xem gợi ý tư vấn</strong></summary>
      <div class="alert-info">
        <p><strong>Persona:</strong> Career Changer (domain mạnh)</p>
        <p><strong>Recommend:</strong> <strong>IT Business Analyst</strong> (PERFECT FIT)</p>
        <p><strong>Lý do:</strong> Bình đang LÀM việc của BA rồi nhưng chưa có skills và title. Banking 5 năm → BA banking khởi điểm 20-28tr. Career path: BA → PO/PM 50-75tr.</p>
        <p><strong>Key message:</strong> "Bình đang làm BA không chính thức rồi. 6 tháng ITBA cho Bình skills chính thức và portfolio để chuyển sang title và lương xứng đáng."</p>
        <p><strong>ROI:</strong> 18tr → 25tr = +7tr/tháng → hoàn vốn 20.7tr trong 3 tháng.</p>
      </div>
    </details>
  </div>
</div>

<div class="product-card">
  <div class="product-header year4"><h4>📁 CASE 4: Châu, 24 tuổi — Graphic Designer bị reject UX</h4></div>
  <div class="product-body">
    <p><strong>Profile:</strong> Graphic Designer freelance 2 năm, lương 10-12 triệu không ổn định. Biết Figma cơ bản. Bị reject apply Junior UX tại Shopee vì "chỉ có UI, không có UX process". Budget: tối đa 30 triệu.</p>
    <details>
      <summary><strong>▼ Xem gợi ý tư vấn</strong></summary>
      <div class="alert-info">
        <p><strong>Persona:</strong> Career Changer (adjacent skills)</p>
        <p><strong>Recommend:</strong> <strong>UI/UX Designer</strong></p>
        <p><strong>Lý do:</strong> Gap rõ ràng: thiếu UX process. Level I (UX Research) là điểm quan trọng nhất. Có Figma cơ bản → discuss fast-track Level B.</p>
        <p><strong>Key message:</strong> "Gap của Châu nhỏ hơn Châu nghĩ — thiếu UX process, không phải thiếu design sense. MindX cho Châu đúng thứ Shopee cần: UX research thật với user thật."</p>
      </div>
    </details>
  </div>
</div>

<div class="product-card">
  <div class="product-header year5"><h4>📁 CASE 5: Thủy, 25 tuổi — Content Writer burnout</h4></div>
  <div class="product-body">
    <p><strong>Profile:</strong> Content Writer agency 2 năm, lương 8 triệu, viết 25+ bài/tuần, kiệt sức. Biết ChatGPT cơ bản. Đồng nghiệp dùng AI làm nhanh gấp đôi. Muốn lên 15 triệu, không muốn đổi ngành. Budget: tối đa 30 triệu.</p>
    <details>
      <summary><strong>▼ Xem gợi ý tư vấn</strong></summary>
      <div class="alert-info">
        <p><strong>Persona:</strong> Career Changer (upgrading same field)</p>
        <p><strong>Recommend:</strong> <strong>Fullstack Marketing</strong></p>
        <p><strong>Lý do:</strong> Thủy muốn upgrade trong Marketing, không chuyển ngành. Content Writer → Performance Marketer: Module A1 (Content + AI) → A2 (Ads) → A3 (SEO). Sau 8 tháng: 8tr → 15-22tr.</p>
        <p><strong>Key message:</strong> "Thủy không cần đổi ngành — cần upgrade. Content + AI + Ads = không còn bị dùng như máy viết bài."</p>
        <p><strong>Alt:</strong> AI for Work 3.5tr nếu muốn entry point nhanh nhất.</p>
      </div>
    </details>
  </div>
</div>

<div class="product-card">
  <div class="product-header robo3"><h4>📁 CASE 6: Quân, 26 tuổi — Data Analyst muốn lên DE</h4></div>
  <div class="product-body">
    <p><strong>Profile:</strong> DA 1.5 năm tại e-commerce, lương 17 triệu. Biết SQL, Python cơ bản, Power BI. Thấy ceiling DA = 25-30tr. Đọc ITviec: DE trung vị 44 triệu. Muốn lương 25+ triệu trong 8-12 tháng. Budget: tự chi đến 25 triệu.</p>
    <details>
      <summary><strong>▼ Xem gợi ý tư vấn</strong></summary>
      <div class="alert-info">
        <p><strong>Persona:</strong> Upskiller (technical upgrade)</p>
        <p><strong>Recommend:</strong> <strong>Data Engineer</strong></p>
        <p><strong>Lý do:</strong> Quân có SQL + Python → bắt đầu từ Level A DE (ETL, Airflow) thay vì Level B. Gap thật: ETL pipeline, Airflow, Cloud (AWS).</p>
        <p><strong>Timeline:</strong> 4-6 tháng → Junior DE 22-28tr → hoàn vốn 3 tháng.</p>
        <p><strong>Key message:</strong> "Quân chỉ thiếu pipeline + cloud. DA skills là foundation cực tốt. 6 tháng = career change từ ceiling 25tr sang trajectory 40-70tr."</p>
      </div>
    </details>
  </div>
</div>

<div class="product-card">
  <div class="product-header art0"><h4>📁 CASE 7: Liên, 35 tuổi — Chủ DNNVV muốn dùng AI</h4></div>
  <div class="product-body">
    <p><strong>Profile:</strong> Chủ DNNVV thời trang online, 5 nhân viên, doanh thu 500tr/tháng. Muốn dùng AI để viết content, phân tích data, giảm chi phí nhân sự. Không có thời gian học dài. Budget: linh hoạt — investment vào business.</p>
    <details>
      <summary><strong>▼ Xem gợi ý tư vấn</strong></summary>
      <div class="alert-info">
        <p><strong>Persona:</strong> Upskiller (entrepreneur use case)</p>
        <p><strong>Recommend:</strong> <strong>AI for Work Combo (19 buổi, 8.5tr)</strong></p>
        <p><strong>Lý do:</strong> Quick win, không cần career change. Level B: AI cho content, báo cáo. Level A: AI cho spreadsheet phân tích bán hàng. Mentor customize workflow cho business case của Liên.</p>
        <p><strong>ROI:</strong> 8.5tr → tiết kiệm 5-10tr/tháng chi phí nhân sự → hoàn vốn 1-2 tháng.</p>
        <p><strong>Upsell sau:</strong> Nếu muốn phân tích data bán hàng sâu → DA Level A (SQL + Power BI).</p>
      </div>
    </details>
  </div>
</div>`,
          quiz: {
            id: "quiz_k18_day4_s2",
            title: "Quiz: Case Practice — Recommend đúng ngành",
            questions: [
              { q: "Sinh viên năm 4 Tài chính muốn có việc ngay sau tốt nghiệp — recommend gì?", options: ["Coding (lương cao nhất)", "AI-Data Analyst (leverage domain Tài chính)", "Data Engineer (lương Fresher cao)", "AI for Work (học nhanh)"], correct: 1, explanation: "DA leverage domain Tài chính → khởi điểm lương cao hơn và match với banking employers." },
              { q: "Kế toán 4 năm, Excel hàng ngày, không giỏi kỹ thuật — recommend gì?", options: ["Coding từ đầu", "ITBA", "AI-Data Analyst (Excel → SQL → Python)", "Data Engineer"], correct: 2, explanation: "DA bắt đầu từ Excel. Domain kế toán là lợi thế DA banking. ITBA cũng OK nhưng DA leverage Excel skills tốt hơn." },
              { q: "Chuyên viên tín dụng ngân hàng đang kết nối business-IT không code — recommend gì?", options: ["Học Coding để có kỹ thuật", "ITBA — chuẩn hóa skills đang làm, domain banking là premium", "Data Analyst", "AI for Work"], correct: 1, explanation: "ITBA perfect: Bình đang làm BA không chính thức. Domain banking → khởi điểm 20-28tr." },
              { q: "Graphic Designer bị reject UX vì thiếu 'UX process' — recommend gì?", options: ["Học thêm Photoshop", "UI/UX Designer — bổ sung UX Research và Design Thinking", "Coding — switch hoàn toàn", "Marketing"], correct: 1, explanation: "Gap rõ: thiếu UX process. UI/UX MindX dạy UX Research thật — đúng thứ Shopee cần." },
              { q: "DA 1.5 năm có SQL+Python, muốn lên DE — bắt đầu từ level nào?", options: ["Level B DE từ đầu", "Fast-track Level B, bắt đầu từ Level A DE (ETL, Airflow)", "Học DA thêm 2 năm rồi sang DE", "Học Cloud AWS riêng trên Udemy"], correct: 1, explanation: "DA có SQL+Python → skip hoặc fast-track Level B → thẳng Level A DE." },
              { q: "Content Writer lương 8tr muốn lên 15tr, không đổi ngành — recommend gì?", options: ["Fullstack Marketing — upgrade trong cùng ngành", "Coding — lương cao hơn", "ITBA", "AI for Work"], correct: 0, explanation: "Fullstack Marketing: Content Writer → Performance Marketer + AI. Không đổi ngành, upgrade skills." },
              { q: "Chủ DNNVV muốn AI để giảm chi phí nhân sự, không học dài — recommend gì?", options: ["Data Analyst 8 tháng", "Coding 8 tháng", "AI for Work Combo 19 buổi", "ITBA 6 tháng"], correct: 2, explanation: "AI for Work: ngắn nhất, áp dụng ngay business, ROI 1-2 tháng. Entrepreneur cần quick win." }
            ]
          }
        },

        /* ---- DAY 4 SECTION 3 ---- */
        {
          id: "k18_day4_s3",
          title: "Nhận diện khách hàng 18+ theo DISC — Adapted cho Adult Learners",
          icon: "👥",
          content: `<h3>DISC cho 18+ — Tư vấn trực tiếp người học, không phải phụ huynh</h3>
<p>Trong K12, DISC được dùng để tư vấn PHỤ HUYNH. Trong K18, DISC được dùng để tư vấn TRỰC TIẾP người học — adult learner thường kết hợp nhiều DISC type và ngữ cảnh career stress làm nổi bật type rõ hơn.</p>

<div class="alert-info">
  <strong>⚡ Nguyên tắc DISC với 18+:</strong><br>
  • Người lớn thường <strong>mix 2 type</strong> (D+C, I+S) — không "pure" như textbook<br>
  • <strong>Ngữ cảnh tư vấn</strong> (career stress, financial pressure) làm nổi bật type<br>
  • Mục tiêu: nhận diện trong 3-5 phút đầu, điều chỉnh pitch theo type
</div>

<div class="type-grid">
  <div class="type-card type-decisive">
    <h5>⚡ D (Dominant) — "Người quyết đoán"</h5>
    <p><strong>Dấu hiệu:</strong> Nói thẳng vào vấn đề, hỏi kết quả trước, ít patience, hay interrupt, nói nhanh</p>
    <p><strong>Câu điển hình:</strong> "Học xong bao nhiêu lương? Mất bao lâu? Tỷ lệ có việc?"</p>
    <p><strong>Cách tư vấn:</strong></p>
    <ul>
      <li>Đi thẳng vào số liệu: "8 tháng, Fresher 15-25tr, ROI 2.7 tháng"</li>
      <li>Không dài dòng, không storytelling nhiều</li>
      <li>Cite source: "ITviec 2025"</li>
      <li>Offer next step: "Học thử tuần tới, book ngay?"</li>
      <li>Tránh: vòng vèo, hỏi nhiều, soft close</li>
    </ul>
  </div>
  <div class="type-card type-friendly">
    <h5>😊 I (Influential) — "Người hướng ngoại"</h5>
    <p><strong>Dấu hiệu:</strong> Nhiệt tình, chia sẻ câu chuyện cá nhân, quan tâm community, hay cười, lạc đề</p>
    <p><strong>Câu điển hình:</strong> "Lớp học vui không? Bạn bè học chung thế nào? Mentor có thân thiện không?"</p>
    <p><strong>Cách tư vấn:</strong></p>
    <ul>
      <li>Emphasize cộng đồng: "Lớp 10-15 người, học cùng nhóm cùng goal"</li>
      <li>Chia sẻ alumni stories có personality</li>
      <li>Mời event, trial class — để feel community</li>
      <li>Follow-up Zalo personal, không template</li>
      <li>Tránh: quá formal, chỉ số liệu khô khan</li>
    </ul>
  </div>
  <div class="type-card type-analytical">
    <h5>📊 C (Conscientious) — "Người phân tích"</h5>
    <p><strong>Dấu hiệu:</strong> Hỏi chi tiết giáo trình, so sánh đối thủ kỹ, yêu cầu bằng chứng, nói chậm, cân nhắc lâu</p>
    <p><strong>Câu điển hình:</strong> "Giáo trình cụ thể? Mentor background? Tỷ lệ drop-out? Review Google?"</p>
    <p><strong>Cách tư vấn:</strong></p>
    <ul>
      <li>Gửi tài liệu chi tiết: curriculum, case study, link review</li>
      <li>Cite sources cụ thể: "ITviec, NodeFlair, WEF 2025"</li>
      <li>Không rush — cho thời gian analyze</li>
      <li>Follow-up bằng thêm data</li>
      <li>Tránh: push hard, urgency giả, claim không nguồn</li>
    </ul>
  </div>
  <div class="type-card type-cautious">
    <h5>🤝 S (Steady) — "Người ổn định"</h5>
    <p><strong>Dấu hiệu:</strong> Nói ít, nghe nhiều, lo lắng nhưng không nói ra, cần reassurance, hay "để suy nghĩ thêm"</p>
    <p><strong>Câu điển hình:</strong> "Nếu tôi không theo kịp? Lỡ tôi học không hiểu? Có thể bảo lưu không?"</p>
    <p><strong>Cách tư vấn:</strong></p>
    <ul>
      <li>Rất nhiều reassurance: lớp nhỏ, mentor 1-1, bảo lưu policy</li>
      <li>Chia sẻ case study: "Bạn cũng lo như vậy, nhưng sau 3 tháng..."</li>
      <li>Không push — nurture từng bước</li>
      <li>Mời trial class: "Đến thử 1 buổi, không cam kết gì"</li>
      <li>Tránh: push hard, urgency, "slot sắp hết"</li>
    </ul>
  </div>
</div>

<h3>🎯 Practice: Nhận diện DISC type qua 4 tình huống thực tế</h3>

<div class="insight-card">
  <div class="insight-number">1</div>
  <div class="insight-body">
    <p><strong>Tình huống:</strong> Khách vào gặp, câu đầu tiên: "Thôi cần biết ngay: học xong bao nhiêu tháng có việc? Lương bao nhiêu? Tỷ lệ bao nhiêu %?"</p>
    <p><strong>DISC type:</strong> <em>D — Dominant.</em> Pitch ngắn, số liệu cụ thể, next step rõ ràng. Không kể chuyện dài.</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">2</div>
  <div class="insight-body">
    <p><strong>Tình huống:</strong> Khách hỏi 20 câu về giáo trình, yêu cầu link Google Review, muốn biết mentor background, hỏi "CodeGym khác gì?", nói sẽ về tìm hiểu thêm.</p>
    <p><strong>DISC type:</strong> <em>C — Conscientious.</em> Gửi tài liệu chi tiết, không rush, follow-up bằng thêm data. Đừng pressure.</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">3</div>
  <div class="insight-body">
    <p><strong>Tình huống:</strong> Khách rất thân thiện, kể về bạn bè đang học MindX, hỏi lớp học có vui không, có peer group không, muốn biết alumni events.</p>
    <p><strong>DISC type:</strong> <em>I — Influential.</em> Emphasize community, kể alumni stories, mời event. Connection là key.</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">4</div>
  <div class="insight-body">
    <p><strong>Tình huống:</strong> Khách nghe chăm chú, gật đầu nhưng ít hỏi, cuối buổi nói "Để suy nghĩ thêm... Nhỡ không theo kịp thì sao?"</p>
    <p><strong>DISC type:</strong> <em>S — Steady.</em> Reassurance, trial class không áp lực, nurture kiên nhẫn. ĐỪNG push.</p>
  </div>
</div>`,
          quiz: {
            id: "quiz_k18_day4_s3",
            title: "Quiz: DISC adapted cho 18+",
            questions: [
              { q: "Khách ngay lập tức hỏi 'Lương bao nhiêu? Học bao lâu? Tỷ lệ có việc?' — DISC type?", options: ["I (Influential)", "S (Steady)", "D (Dominant)", "C (Conscientious)"], correct: 2, explanation: "D — Dominant: quyết đoán, muốn kết quả ngay, không patience với thông tin thừa." },
              { q: "Với Type C (Conscientious), cách follow-up hiệu quả nhất?", options: ["Gọi điện liên tục để push", "Urgency: 'Slot sắp hết, đăng ký ngay'", "Gửi thêm data + case study, không rush", "Mời event vui để social"], correct: 2, explanation: "Type C cần thêm data và thời gian phân tích. Không rush — đây là lỗi hay gặp nhất." },
              { q: "Type S (Steady) nói 'Nhỡ không theo kịp thì sao?' — phản hồi tốt nhất?", options: ["'Không sao, học thêm giờ sau'", "Reassurance: lớp nhỏ 10-15 người, mentor 1-1, bảo lưu policy + trial không cam kết", "Push close: 'Lớp sắp đầy rồi'", "'Mọi người đều theo kịp'"], correct: 1, explanation: "Type S cần reassurance cụ thể: môi trường hỗ trợ, không phán xét, bảo lưu linh hoạt." },
              { q: "Type I (Influential) quan tâm nhất điều gì?", options: ["ROI tính toán cụ thể", "Giáo trình chi tiết", "Community, lớp học vui, peer group, alumni events", "Tỷ lệ việc làm chính xác"], correct: 2, explanation: "Type I cần connection và community — lớp học vui, có bạn bè, mentor thân thiện." },
              { q: "K18 khác K12 về DISC như thế nào?", options: ["K18 dùng DISC cho phụ huynh", "K18 dùng DISC trực tiếp với người học — adult learner thường mix 2 type", "DISC không áp dụng cho K18", "K18 chỉ có Type D và C"], correct: 1, explanation: "K18: DISC trực tiếp với người học. Adult learner thường D+C hoặc I+S — phức tạp hơn K12." }
            ]
          }
        }

      ] /* end day4 sections */
    }, /* end day4 */

    /* ==================== K18 DAY 5: ASSESSMENT & SYSTEM ==================== */
    {
      id: "k18_day5",
      day: 5,
      title: "ASSESSMENT & SYSTEM (18+)",
      subtitle: "Bài kiểm tra tổng hợp 30 câu, CRM, và tác phong Sale 18+",
      icon: "📝",
      color: "#7C3AED",
      sections: [

        /* ---- DAY 5 SECTION 1 ---- */
        {
          id: "k18_day5_s1",
          title: "Bài kiểm tra tổng hợp K18 Sale — 30 câu",
          icon: "📋",
          content: `<h3>Bài kiểm tra tổng hợp K18 Sale — 30 câu trắc nghiệm</h3>
<p>Bài kiểm tra bao phủ toàn bộ nội dung 5 ngày: thị trường, 7 sản phẩm, kỹ năng tư vấn, xử lý từ chối, case practice, và tác phong.</p>
<div class="alert-info">
  <strong>⏱ Thời gian:</strong> 35 phút<br>
  <strong>📊 Yêu cầu pass:</strong> ≥ 22/30 câu đúng (≥ 73%)<br>
  <strong>🏆 Xếp hạng:</strong> S (28-30) | A (25-27) | B (22-24) | C (19-21) | F (&lt;19)<br>
  <strong>📌 Lưu ý:</strong> Kết quả ảnh hưởng đến roadmap onboard — hoàn thành nghiêm túc
</div>`,
          quiz: {
            id: "quiz_k18_final",
            title: "Bài kiểm tra tổng hợp K18 Sale (30 câu)",
            timer: 2100,
            questions: [
              { q: "Theo WEF 2025, bao nhiêu triệu việc làm sẽ bị AI thay thế đến 2030?", options: ["52 triệu", "72 triệu", "92 triệu", "120 triệu"], correct: 2, explanation: "92 triệu việc làm bị AI thay thế — nhưng 170 triệu việc làm mới xuất hiện." },
              { q: "Tỷ lệ thất nghiệp thanh niên Việt Nam (cao nhất 14 năm)?", options: ["5.03%", "7.03%", "9.03%", "12.5%"], correct: 2, explanation: "9.03% — con số mạnh để open conversation với Fresh grad." },
              { q: "Việt Nam thiếu bao nhiêu nhân sự IT mỗi năm?", options: ["50K-100K", "100K-150K", "150K-200K", "200K-300K"], correct: 2, explanation: "150.000 - 200.000 nhân sự IT/năm — cơ hội vàng cho người chuyển ngành." },
              { q: "Jensen Huang (CEO Nvidia) nói gì về AI và việc làm?", options: ["AI sẽ thay thế tất cả", "Không cần lo về AI", "Bạn mất việc vào tay người BIẾT DÙNG AI", "Chỉ IT bị ảnh hưởng"], correct: 2, explanation: "Mất việc vào tay người biết dùng AI — urgency mà không bi quan." },
              { q: "Framework tư vấn 18+ chuẩn MindX?", options: ["AIDA", "STUCK → POSSIBLE → PROOF → PATH → NOW", "FAB", "SPIN Selling"], correct: 1, explanation: "STUCK→POSSIBLE→PROOF→PATH→NOW — dẫn khách từ nhận thức vấn đề đến hành động." },
              { q: "3 persona chính của khách hàng 18+ là gì?", options: ["Học sinh, phụ huynh, giáo viên", "Fresh Graduate, Career Changer, Upskiller", "Sinh viên, nhân viên, quản lý", "Junior, Mid, Senior"], correct: 1, explanation: "3 persona: Fresh Graduate, Career Changer, Upskiller." },
              { q: "XCareer Coding Combo X giá bao nhiêu?", options: ["25.200.000đ", "27.200.000đ", "30.000.000đ", "32.000.000đ"], correct: 1, explanation: "27.200.000đ — giảm 15% từ 32.000.000đ." },
              { q: "XCareer Coding cấp I học gì?", options: ["HTML/CSS/JS", "ReactJS + Redux", "MERN Stack (NodeJS, Express, MongoDB)", "Agile/Scrum + Portfolio"], correct: 2, explanation: "Cấp I: Fullstack Web với MERN Stack." },
              { q: "AI-Data Analyst Level B bắt đầu từ công cụ nào?", options: ["Python Pandas", "SQL + Power BI", "Excel nâng cao (Pivot, VLOOKUP)", "Machine Learning"], correct: 2, explanation: "Level B: Excel nâng cao — zero barrier cho người không kỹ thuật." },
              { q: "ITBA có bao nhiêu cấp độ và thời gian đào tạo?", options: ["4 cấp, 8 tháng", "3 cấp, 6 tháng", "2 cấp, 4 tháng", "5 cấp, 10 tháng"], correct: 1, explanation: "3 cấp (B→A→S), 6 tháng, 48 buổi." },
              { q: "Lương PO/PM (career path từ ITBA) tối đa bao nhiêu?", options: ["30-50 triệu", "40-55 triệu", "50-75 triệu", "60-90 triệu"], correct: 2, explanation: "PO/PM: 50-75 triệu/tháng — career ceiling cao nhất từ ITBA." },
              { q: "Fullstack Marketing có bao nhiêu module và tổng bao nhiêu buổi?", options: ["3 module, 48 buổi", "4 module, 52 buổi", "4 module, 64 buổi", "5 module, 60 buổi"], correct: 1, explanation: "4 module (A1, A2, A3, S), 52 buổi tổng." },
              { q: "Data Engineer — lương Fresher cao nhất?", options: ["8-12 triệu", "12-15 triệu", "15-18 triệu", "20-25 triệu"], correct: 2, explanation: "Fresher DE: 15-18 triệu — cao nhất trong 7 sản phẩm." },
              { q: "Khóa AI for Work Combo — bao nhiêu buổi và giá bao nhiêu?", options: ["12 buổi, 5 triệu", "15 buổi, 6.5 triệu", "19 buổi, 8.5 triệu", "24 buổi, 10 triệu"], correct: 2, explanation: "19 buổi (7 buổi Level B + 12 buổi Level A), Combo 8.5 triệu." },
              { q: "Kế toán 5 năm banking muốn học DA — lương khởi điểm kỳ vọng?", options: ["Fresher 8-12tr", "15-18tr", "20-28tr (domain premium)", "30-40tr"], correct: 2, explanation: "Domain banking + DA skills = 20-28tr khởi điểm — không phải Fresher standard." },
              { q: "Khách hàng K18 khác K12 ở điểm quyết định mua như thế nào?", options: ["K18 cần phụ huynh đồng ý", "K18 tự quyết định — focus ROI và career, không thuyết phục phụ huynh", "K18 cần sếp cho phép", "Không khác gì K12"], correct: 1, explanation: "K18: người học TỰ QUYẾT — focus ROI, lương, trajectory." },
              { q: "ROI Coding: đầu tư 27.2tr, lương mới 15-25tr, hoàn vốn sau bao lâu?", options: ["1 tháng", "2-3 tháng", "6 tháng", "12 tháng"], correct: 1, explanation: "Lương tăng 8-10tr/tháng → hoàn vốn 27.2tr trong 2.7-3.4 tháng." },
              { q: "80% người tự học bỏ cuộc ở tháng thứ mấy?", options: ["Tháng 1", "Tháng 2", "Tháng 4", "Tháng 6"], correct: 1, explanation: "Tháng 2 — dùng khi xử lý objection 'tự học YouTube được'." },
              { q: "Khi khách nói 'Học phí đắt' — reframe hiệu quả nhất?", options: ["So sánh với trung tâm rẻ hơn", "Chia nhỏ: 3.4tr/tháng + ROI hoàn vốn 2-3 tháng", "Offer giảm giá ngay", "Nói 'không đắt đâu'"], correct: 1, explanation: "Frame ROI: 3.4tr/tháng và thu về 15-25tr/tháng = đầu tư, không phải chi phí." },
              { q: "DISC Type C (Conscientious) cần gì nhất?", options: ["Urgency và scarcity", "Community và peer stories", "Data chi tiết, sources rõ, không rush", "Quick demo và trial ngay"], correct: 2, explanation: "Type C: phân tích kỹ, cần sources rõ ràng, thời gian evaluate. Không rush = respect." },
              { q: "Graphic Designer bị reject UX vì thiếu 'UX process' — recommend gì?", options: ["Học thêm Photoshop", "UI/UX Designer (bổ sung UX Research, Design Thinking)", "Chuyển sang Coding", "AI for Work"], correct: 1, explanation: "Gap: UX process — không phải visual skills. UI/UX MindX dạy UX Research thật." },
              { q: "Lương Senior Data Engineer tối đa?", options: ["30-50 triệu", "40-60 triệu", "50-70 triệu", "60-90 triệu"], correct: 2, explanation: "Senior DE: 50-70 triệu/tháng — lương cao nhất ngành Data." },
              { q: "Với Type D (Dominant), cách close hiệu quả nhất?", options: ["Kể nhiều case study", "Offer trial class", "Số liệu ngắn gọn + next step rõ ràng: 'Book học thử ngay?'", "Gửi tài liệu chi tiết về nhà đọc"], correct: 2, explanation: "Type D: ngắn gọn, quyết đoán, next action rõ ràng. Không dài dòng." },
              { q: "Pipeline CRM K18 — chu kỳ trung bình từ lead đến close?", options: ["1-3 ngày như K12", "3-7 ngày", "1-3 tuần", "1-3 tháng"], correct: 2, explanation: "K18 cycle: 1-3 tuần — adult learner research kỹ hơn, nhiều touchpoint hơn K12." },
              { q: "AI Marketer earn premium bao nhiêu % so với Marketer không AI?", options: ["5-10%", "15-20%", "25-40%", "50-60%"], correct: 2, explanation: "25-40% premium salary cho AI Marketer — theo VietSourcing 2025." },
              { q: "Chuyên viên tín dụng ngân hàng 5 năm, muốn IT không code — recommend gì?", options: ["Học Coding để có kỹ thuật", "ITBA — chuẩn hóa skills đang làm, domain banking premium", "Data Analyst", "AI for Work"], correct: 1, explanation: "ITBA perfect: Bình đang làm BA không chính thức. Domain banking → 20-28tr." },
              { q: "Content Writer 8tr muốn lên 15tr không đổi ngành — recommend gì?", options: ["Coding", "Fullstack Marketing + AI integration", "ITBA", "Data Engineer"], correct: 1, explanation: "Fullstack Marketing: upgrade trong Marketing, Content Writer → Performance Marketer với AI." },
              { q: "DA 1.5 năm có SQL+Python muốn lên DE — bắt đầu từ đâu?", options: ["Level B DE từ đầu", "Fast-track Level B, thẳng Level A DE (ETL, Airflow)", "Học DA thêm 2 năm", "AWS riêng trên Udemy"], correct: 1, explanation: "DA có SQL+Python → skip Level B → Level A DE. Gap thật là ETL + Cloud." },
              { q: "Nguyên tắc urgency HỢP LỆ trong tư vấn K18?", options: ["'Ưu đãi chỉ hôm nay' dù không phải policy thật", "'Lớp 12 người còn 3 slot — khai giảng tháng 5'", "'Giá tăng 20% tuần sau' nếu không đúng thật", "Bất kỳ urgency nào để close"], correct: 1, explanation: "Urgency thật: lớp nhỏ thật, khai giảng có deadline thật. Không tạo khan hiếm giả." },
              { q: "Nguyên tắc tư vấn 18+ quan trọng nhất?", options: ["Push hard để close nhanh", "Tôn trọng intelligence, ROI trước features, data có nguồn, urgency từ sự thật", "Tập trung vào giảm giá để cạnh tranh", "Chỉ tư vấn sản phẩm giá cao nhất"], correct: 1, explanation: "6 Tone Rules: tôn trọng trí thông minh, ROI trước features, data có nguồn, urgency thật." }
            ]
          }
        },

        /* ---- DAY 5 SECTION 2 ---- */
        {
          id: "k18_day5_s2",
          title: "CRM & Quy trình nội bộ 18+",
          icon: "💻",
          content: `<h3>CRM cho tư vấn K18 — Khác biệt so với K12</h3>

<div class="alert-info">
  <strong>⚡ K18 Pipeline khác K12:</strong><br>
  • Cycle dài hơn: 1-3 tuần vs 3-7 ngày K12<br>
  • Nhiều touchpoint hơn: Call → Zalo → Trial → Event → Close<br>
  • Nurture content quan trọng hơn: case study, salary data, market insight<br>
  • Khách research nhiều hơn → cần cung cấp data chủ động
</div>

<h4>1. Pipeline Stage K18</h4>
<div class="flow-steps">
  <div class="flow-step"><strong>🆕 NEW:</strong> Lead mới vào — chưa contact. Target: Call trong 2 giờ đầu (golden window). Lâu hơn = conversion rate giảm 40%.</div>
  <div class="flow-step"><strong>📞 CONTACTED:</strong> Đã gọi, chưa đủ thông tin. Action: Ghi chú ngành nghề, mục tiêu, budget, timeline. Gửi Zalo intro trong 1 giờ.</div>
  <div class="flow-step"><strong>💬 INTERESTED:</strong> Đã trao đổi, có interest. Đã identify persona và sản phẩm phù hợp. Action: Gửi tài liệu chi tiết + book trial class.</div>
  <div class="flow-step"><strong>🎯 TRIAL:</strong> Đã attend trial class — conversion point mạnh nhất. Follow-up ngay sau trial (trong 2 giờ).</div>
  <div class="flow-step"><strong>✅ ENROLLED:</strong> Đã đóng học phí. Action: Chuyển sang CS để onboard. Xin referral từ khách đã enroll.</div>
  <div class="flow-step"><strong>❌ DROPPED/NURTURE:</strong> Chưa quyết định. Action: Nurture content 1-2 tuần/lần (salary data mới, success story). KHÔNG ghost — có thể convert sau 1-3 tháng.</div>
</div>

<h4>2. Ghi chú CRM chuẩn cho lead K18</h4>
<div class="product-card">
  <div class="product-body">
    <p><strong>Bắt buộc ghi:</strong></p>
    <ul>
      <li>Persona: Fresh grad / Career changer / Upskiller</li>
      <li>Ngành nghề hiện tại + số năm kinh nghiệm</li>
      <li>Mức lương hiện tại (nếu biết) + lương mong muốn</li>
      <li>Sản phẩm đã tư vấn + lý do đề xuất</li>
      <li>Objection chính đã gặp + cách xử lý</li>
      <li>DISC type (nếu đã identify)</li>
      <li>Next action + deadline cụ thể</li>
    </ul>
    <p><strong>Template ghi nhanh:</strong> <em>"[Tên], [tuổi], [ngành]/[kinh nghiệm]. Persona: [X]. Recommend: [Y] vì [lý do]. Objection: [Z]. Next: [action] vào [ngày]."</em></p>
  </div>
</div>

<h4>3. Quy tắc Follow-up K18</h4>
<div class="type-grid">
  <div class="type-card type-decisive">
    <h5>📅 Timing follow-up</h5>
    <ul>
      <li>Follow-up 1: Ngay sau cuộc call (Zalo trong 1 giờ)</li>
      <li>Follow-up 2: 2-3 ngày sau (add value: case study mới)</li>
      <li>Follow-up 3: 1 tuần sau (market insight, lớp mới)</li>
      <li>Nurture (lead lạnh): 2-3 tuần/lần, value-first</li>
    </ul>
  </div>
  <div class="type-card type-analytical">
    <h5>📝 Nội dung Zalo theo lần</h5>
    <ul>
      <li>Lần 1: Tài liệu + ROI table sản phẩm đã tư vấn</li>
      <li>Lần 2: Case study alumni cùng background</li>
      <li>Lần 3: Market data mới nhất + lịch khai giảng</li>
      <li>Tránh: Template copy-paste, generic, không personalize</li>
    </ul>
  </div>
</div>

<h4>4. KPI K18 Sale</h4>
<div class="stats-grid">
  <div class="stat-card"><div class="stat-number">≥ 70%</div><div class="stat-label">Lead contacted trong 2 giờ</div></div>
  <div class="stat-card"><div class="stat-number">≥ 30%</div><div class="stat-label">Interested → Trial conversion</div></div>
  <div class="stat-card"><div class="stat-number">≥ 40%</div><div class="stat-label">Trial → Enrolled conversion</div></div>
  <div class="stat-card"><div class="stat-number">3 lần</div><div class="stat-label">Max follow-up cho lead cold</div></div>
</div>`,
          quiz: null
        },

        /* ---- DAY 5 SECTION 3 ---- */
        {
          id: "k18_day5_s3",
          title: "Tác phong Sale 18+ — Khác biệt so với K12",
          icon: "🎓",
          content: `<h3>Tác phong Sale 18+ — Tư vấn người lớn, không phải bán cho phụ huynh</h3>

<div class="alert-info">
  <strong>🔑 Mindset cốt lõi:</strong> Khách hàng 18+ là NGƯỜI LỚN có trình độ và kinh nghiệm. Họ không muốn bị "bán hàng" — họ muốn được TƯ VẤN bởi chuyên gia đáng tin. Mỗi cuộc tư vấn là cơ hội để bạn là Career Advisor, không phải Sales Rep.
</div>

<h4>5 Nguyên tắc tác phong 18+</h4>

<div class="insight-card">
  <div class="insight-number">1</div>
  <div class="insight-body">
    <h4>Tôn trọng intelligence — Không giải thích điều họ đã biết</h4>
    <p>Người 5 năm banking không cần bạn giải thích AI là gì. Người làm Marketing 3 năm không cần bạn giải thích Facebook Ads là gì.</p>
    <p><strong>SAI:</strong> "Anh/chị biết không, Data Analyst là người phân tích dữ liệu..."</p>
    <p><strong>ĐÚNG:</strong> "Với background banking của anh/chị, DA role tại ngân hàng khác DA e-commerce như thế này..."</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">2</div>
  <div class="insight-body">
    <h4>ROI trước Features — Họ mua kết quả, không mua curriculum</h4>
    <p><strong>SAI:</strong> "Level B học HTML, CSS, JavaScript, Git. Level A học ReactJS, Redux..."</p>
    <p><strong>ĐÚNG:</strong> "Sau 8 tháng: anh/chị có 3 project GitHub, lương Fresher 15-25tr, cam kết interview tại FPT, Shopee. Curriculum phục vụ outcome đó."</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">3</div>
  <div class="insight-body">
    <h4>Data có nguồn — Mọi claim cần bằng chứng</h4>
    <p>Adult learner skeptical. "Lương cao" không đủ — "Lương 22-28 triệu theo ITviec Salary Report 2025" mới đủ.</p>
    <p><strong>Sources phải nhớ:</strong> ITviec IT Salary Report 2025, NodeFlair Vietnam, WEF Future of Jobs 2025, Anthropic Research 2026</p>
    <p><strong>Khi không nhớ số chính xác:</strong> "Em sẽ gửi anh/chị link báo cáo chính xác qua Zalo" — tốt hơn nói số không chắc chắn.</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">4</div>
  <div class="insight-body">
    <h4>Urgency từ sự thật — Không tạo khan hiếm giả</h4>
    <p>Lớp học 10-15 người là THẬT khan hiếm. Khai giảng tháng tới là THẬT deadline.</p>
    <p><strong>SAI:</strong> "Ưu đãi chỉ hôm nay được giảm 20%" (nếu không phải policy thật)</p>
    <p><strong>ĐÚNG:</strong> "Lớp tháng 5 còn 3 slot — lớp nhỏ 12 người nên anh/chị nên book trước."</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">5</div>
  <div class="insight-body">
    <h4>Tư vấn đúng > Bán được — Referral là doanh thu bền vững nhất</h4>
    <p>Người được tư vấn đúng, học đúng ngành, thành công → refer 3-5 người. Người bị push sai ngành, drop giữa chừng → không refer và để lại review xấu.</p>
    <p><strong>Thực tế:</strong> Nếu khách không phù hợp sản phẩm — nói thật. Đây là hành động BUILD TRUST, không phải mất sale.</p>
  </div>
</div>

<h4>Bảng so sánh tác phong K12 vs K18</h4>
<div class="pricing-info">
  <table class="pricing-table">
    <thead><tr><th>Hành vi</th><th>K12 (tư vấn phụ huynh)</th><th>K18 (tư vấn người học trực tiếp)</th></tr></thead>
    <tbody>
      <tr><td>Xưng hô</td><td>"Quý phụ huynh", "con sẽ..."</td><td>"Anh/chị" hoặc "bạn" (bằng tuổi) — không bao giờ "con"</td></tr>
      <tr><td>Decision maker</td><td>Phụ huynh quyết định</td><td>Chính người học — không cần "về hỏi bố mẹ"</td></tr>
      <tr><td>Focus message</td><td>Con tiến bộ, tự tin, yêu thích học</td><td>ROI lương, career trajectory, timeline hoàn vốn</td></tr>
      <tr><td>Objection chính</td><td>Giá, lịch học, khoảng cách</td><td>ROI không rõ, tuổi muộn, không có thời gian, AI thay thế</td></tr>
      <tr><td>Close style</td><td>Warm, emotional (vì con)</td><td>Data-driven, logical, respect autonomy</td></tr>
      <tr><td>Follow-up</td><td>Call phụ huynh 2-3 lần</td><td>Zalo add value, tối đa 3 lần, value-first</td></tr>
      <tr><td>Timeline close</td><td>3-7 ngày</td><td>1-3 tuần (cần research và decision time)</td></tr>
    </tbody>
  </table>
</div>

<h4>📋 Checklist tác phong 18+ hàng ngày</h4>
<div class="checklist-grid">
  <div class="check-item"><span class="check-num">☐</span> Check lead K18 mới buổi sáng, call trong 2 giờ</div>
  <div class="check-item"><span class="check-num">☐</span> Chuẩn bị 1-2 case study mới theo ngành tư vấn hôm nay</div>
  <div class="check-item"><span class="check-num">☐</span> Ghi chú CRM đầy đủ sau mỗi cuộc call (trong 15 phút)</div>
  <div class="check-item"><span class="check-num">☐</span> Gửi Zalo tài liệu trong 1 giờ sau mỗi cuộc tư vấn</div>
  <div class="check-item"><span class="check-num">☐</span> Follow-up lead "Interested" mỗi 2-3 ngày với value mới</div>
  <div class="check-item"><span class="check-num">☐</span> Không dùng urgency giả — chỉ scarcity thật</div>
  <div class="check-item"><span class="check-num">☐</span> Smart casual dress code</div>
  <div class="check-item"><span class="check-num">☐</span> Cite source khi nói số liệu (ITviec, WEF, NodeFlair)</div>
  <div class="check-item"><span class="check-num">☐</span> Tư vấn đúng — dám nói khách chưa sẵn sàng nếu cần</div>
  <div class="check-item"><span class="check-num">☐</span> Xin referral từ khách đã enroll và hài lòng</div>
</div>`,
          quiz: {
            id: "quiz_k18_day5_s3",
            title: "Quiz: Tác phong Sale 18+",
            questions: [
              { q: "Khách hàng K18 khác K12 ở điểm quyết định như thế nào?", options: ["K18 cần phụ huynh đồng ý", "K18 tự quyết — focus ROI và career", "K18 cần sếp cho phép", "Không khác gì K12"], correct: 1, explanation: "K18: người học TỰ QUYẾT — focus ROI, lương, trajectory. Không có phụ huynh." },
              { q: "Nguyên tắc 'Tôn trọng intelligence' có nghĩa là gì?", options: ["Dùng ngôn ngữ academic", "Không giải thích điều họ đã biết — bắt đầu từ level của họ", "Hỏi nhiều câu để hiểu trình độ", "Dùng data phức tạp để impressive"], correct: 1, explanation: "Tôn trọng = bắt đầu từ level của họ, không giải thích điều đã biết." },
              { q: "Urgency hợp lệ trong tư vấn K18?", options: ["'Ưu đãi chỉ hôm nay' dù không phải policy thật", "'Lớp 12 người còn 3 slot — khai giảng tháng 5'", "'Giá tăng 20% tuần sau' nếu không đúng thật", "Bất kỳ urgency nào để close"], correct: 1, explanation: "Urgency thật: lớp nhỏ thật, khai giảng có deadline thật." },
              { q: "Khi khách không phù hợp sản phẩm, tư vấn đúng là gì?", options: ["Push vào sản phẩm gần nhất", "Nói thật: chưa sẵn sàng + đề xuất lộ trình chuẩn bị", "Giảm giá để khách accept", "Chuyển sang sản phẩm rẻ hơn ngay"], correct: 1, explanation: "Tư vấn đúng > bán được. Khách thành công = referral dài hạn." },
              { q: "Bao nhiêu lần follow-up tối đa cho lead K18 trước khi nurture?", options: ["1 lần", "3 lần", "5 lần", "Không giới hạn"], correct: 1, explanation: "Tối đa 3 lần, cách nhau 3-5 ngày, mỗi lần add value. Sau đó chuyển nurture mode." }
            ]
          }
        }

      ] /* end day5 sections */
    } /* end day5 */

  ] /* end days array */
},

  /* --------------------------------------------------------
     CS K12 ONBOARD 5-DAY PROGRAM (21 bài)
     -------------------------------------------------------- */
  onboardCSK12: {
  title: "Lộ trình Onboard CS K12 (5 ngày)",
  description: "Chương trình đào tạo dành cho nhân viên Customer Success mới tại MindX. 5 ngày để sẵn sàng chăm sóc học viên K12 và phụ huynh.",
  days: [

    /* ==================== CS K12 DAY 1 ==================== */
    {
      id: "csk12_day1",
      day: 1,
      title: "TỔNG QUAN & TƯ DUY DỊCH VỤ",
      subtitle: "Overview & Service Mindset",
      icon: "🎯",
      color: "#E53E3E",
      sections: [
        {
          id: "csk12_day1_s1",
          title: "Tổng quan MindX",
          icon: "🏢",
          content: `<h3>Lịch sử hình thành MindX (2015 → 2026)</h3>

<div class="timeline-block">
  <div class="timeline-item">
    <div class="timeline-year">2015</div>
    <div class="timeline-desc"><strong>Thành lập:</strong> MindX ra đời với tên gọi "Techkids" — lớp học lập trình đầu tiên cho trẻ em tại Hà Nội với chỉ 20 học viên. Người sáng lập nhìn thấy khoảng trống lớn trong giáo dục công nghệ cho trẻ em Việt Nam.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2017</div>
    <div class="timeline-desc"><strong>Đổi tên & Mở rộng:</strong> Chính thức đổi tên thành MindX Technology School. Mở rộng vào TP.HCM. Ra mắt website, phát triển giáo trình chuẩn hóa đầu tiên.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2019</div>
    <div class="timeline-desc"><strong>Đa dạng hóa sản phẩm:</strong> Ra mắt lộ trình Art & Design và Robotics. Mở rộng lên 15+ trung tâm toàn quốc. Bắt đầu có quy trình CS chuyên nghiệp.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2020</div>
    <div class="timeline-desc"><strong>Chuyển đổi số:</strong> Phát triển nền tảng LMS (Learning Management System) nội bộ. Ra mắt chương trình K18+ cho người lớn. Vượt qua thách thức COVID với lớp học online.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2022</div>
    <div class="timeline-desc"><strong>Scale-up mạnh:</strong> 30+ trung tâm, 100+ giáo viên. Ra mắt chương trình Du học & Bảo trợ việc làm. Hệ thống CS được chuẩn hóa toàn quốc.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2024–2026</div>
    <div class="timeline-desc"><strong>Hiện tại:</strong> 50+ trung tâm toàn quốc, 200+ tư vấn tuyển sinh, 500+ giáo viên, 100,000+ học viên. Hệ sinh thái giáo dục công nghệ lớn nhất Việt Nam. Đang mở rộng sang các nước Đông Nam Á.</div>
  </div>
</div>

<h3>Sứ mệnh, Tầm nhìn & Giá trị cốt lõi</h3>
<div class="values-grid">
  <div class="value-card">
    <div class="value-icon">🔭</div>
    <h4>Tầm nhìn</h4>
    <p>Trở thành hệ sinh thái giáo dục công nghệ số 1 Đông Nam Á — nơi mọi đứa trẻ đều có cơ hội học công nghệ chất lượng cao.</p>
  </div>
  <div class="value-card">
    <div class="value-icon">🎯</div>
    <h4>Sứ mệnh</h4>
    <p>Trang bị kỹ năng công nghệ cho thế hệ trẻ Việt Nam, giúp họ tự tin bước vào kỷ nguyên số và tạo ra tác động tích cực cho xã hội.</p>
  </div>
  <div class="value-card">
    <div class="value-icon">💎</div>
    <h4>4 Giá trị cốt lõi</h4>
    <ul>
      <li><strong>Student First:</strong> Học viên là trung tâm — mọi quyết định đều xuất phát từ lợi ích của HV</li>
      <li><strong>Innovation:</strong> Đổi mới liên tục — không ngừng cải tiến giáo trình và trải nghiệm</li>
      <li><strong>Quality:</strong> Chất lượng không thỏa hiệp — từ giáo viên đến cơ sở vật chất</li>
      <li><strong>Impact:</strong> Tạo tác động tích cực — không chỉ dạy kỹ năng mà thay đổi tư duy</li>
    </ul>
  </div>
</div>

<h3>MindX qua các con số</h3>
<div class="stats-grid">
  <div class="stat-card"><div class="stat-number">50+</div><div class="stat-label">Trung tâm toàn quốc</div></div>
  <div class="stat-card"><div class="stat-number">200+</div><div class="stat-label">Tư vấn tuyển sinh (TVTS)</div></div>
  <div class="stat-card"><div class="stat-number">500+</div><div class="stat-label">Giáo viên</div></div>
  <div class="stat-card"><div class="stat-number">100K+</div><div class="stat-label">Học viên đã qua</div></div>
  <div class="stat-card"><div class="stat-number">80K+</div><div class="stat-label">Phụ huynh tin tưởng</div></div>
  <div class="stat-card"><div class="stat-number">3</div><div class="stat-label">Lộ trình K12 (Coding, Art, Robotics)</div></div>
</div>

<h3>Cấu trúc tổ chức — Ai làm gì & Liên hệ ai khi cần</h3>
<div class="insight-card">
  <div class="insight-number">📋</div>
  <div class="insight-body">
    <h4>Sơ đồ tổ chức MindX</h4>
    <p><strong>HO (Head Office)</strong> → Chiến lược tổng thể, phát triển sản phẩm, marketing, đào tạo tập trung</p>
    <p><strong>FM (Field Manager)</strong> → Quản lý vùng miền (Bắc, Trung, Nam) — cầu nối giữa HO và các trung tâm</p>
    <p><strong>BU (Business Unit)</strong> → Đơn vị kinh doanh tại mỗi trung tâm, gồm:</p>
    <ul>
      <li><strong>CM (Center Manager):</strong> Quản lý trung tâm — người quyết định cao nhất tại cơ sở</li>
      <li><strong>CSL (Customer Service Leader):</strong> Trưởng nhóm CS — người quản lý trực tiếp của bạn</li>
      <li><strong>STL (Sales Team Leader):</strong> Trưởng nhóm Sale</li>
      <li><strong>CS (Customer Success Staff):</strong> Nhân viên chăm sóc khách hàng — BẠN</li>
      <li><strong>TVTS (Tư vấn tuyển sinh):</strong> Nhân viên Sale, người chuyển học viên mới sang CS</li>
      <li><strong>TC (Training Coordinator):</strong> Điều phối đào tạo — kết nối CS với giáo viên</li>
      <li><strong>GV (Giáo viên):</strong> Người dạy học — CS hỗ trợ GV về mặt hành chính và logistics</li>
    </ul>
  </div>
</div>

<h3>Directory: Ai làm gì — Liên hệ ai khi cần?</h3>
<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:0.85rem;">
  <thead>
    <tr style="background:#E53E3E;color:#fff;">
      <th style="padding:10px;border:1px solid #E2E8F0;text-align:left;">Tình huống</th>
      <th style="padding:10px;border:1px solid #E2E8F0;text-align:left;">CS xử lý được</th>
      <th style="padding:10px;border:1px solid #E2E8F0;text-align:left;">Cần liên hệ ai</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">HV vắng, cần học bù</td><td style="padding:8px;border:1px solid #E2E8F0;">✅ CS tự xử lý</td><td style="padding:8px;border:1px solid #E2E8F0;">TC (phối hợp lịch GV)</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">PH phản ánh về GV dạy không hay</td><td style="padding:8px;border:1px solid #E2E8F0;">✅ CS ghi nhận, trao đổi GV</td><td style="padding:8px;border:1px solid #E2E8F0;">CSL nếu kéo dài</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">PH muốn bảo lưu</td><td style="padding:8px;border:1px solid #E2E8F0;">✅ CS tư vấn, làm ticket</td><td style="padding:8px;border:1px solid #E2E8F0;">CSL phê duyệt</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">PH muốn hoàn phí</td><td style="padding:8px;border:1px solid #E2E8F0;">❌ CS không quyết định</td><td style="padding:8px;border:1px solid #E2E8F0;">CSL → CM → Finance</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">HV bị bắt nạt tại lớp</td><td style="padding:8px;border:1px solid #E2E8F0;">❌ Nghiêm trọng</td><td style="padding:8px;border:1px solid #E2E8F0;">CSL + CM ngay lập tức</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">Thiết bị hỏng trước giờ học</td><td style="padding:8px;border:1px solid #E2E8F0;">✅ CS xử lý sơ bộ</td><td style="padding:8px;border:1px solid #E2E8F0;">CM (nếu cần mua mới)</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">PH hỏi về chương trình mới/giá mới</td><td style="padding:8px;border:1px solid #E2E8F0;">✅ CS trả lời cơ bản</td><td style="padding:8px;border:1px solid #E2E8F0;">TVTS (tư vấn chuyên sâu)</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">GV xin nghỉ đột xuất</td><td style="padding:8px;border:1px solid #E2E8F0;">✅ CS thông báo PH</td><td style="padding:8px;border:1px solid #E2E8F0;">TC (tìm GV thay thế)</td></tr>
  </tbody>
</table>

<div class="key-takeaway">
  <h4>💡 Key Takeaway</h4>
  <p>CS là mắt xích quan trọng nhất trong trải nghiệm học tập của học viên. Bạn không cần biết hết mọi thứ — nhưng bạn cần biết <strong>ai biết gì và khi nào cần liên hệ ai</strong>. Đừng để PH/HV "lạc" trong hệ thống MindX.</p>
</div>

<div class="practice-exercise">
  <h4>🏋️ Bài tập thực hành</h4>
  <p>Lưu số điện thoại/Zalo của CSL, TC, CM, 2 GV quen, 1 TVTS vào danh bạ ngay hôm nay. Sau đó vẽ sơ đồ tổ chức BU của trung tâm bạn lên giấy với đầy đủ tên người thật.</p>
</div>

<div class="compare-table">
  <h4>⚠️ Common Mistakes — Lỗi thường gặp của CS mới</h4>
  <ul>
    <li>❌ Tự quyết định hoàn phí mà không qua CSL/CM</li>
    <li>❌ Không biết ai là TC, liên hệ GV trực tiếp mà không qua quy trình</li>
    <li>❌ Hứa với PH những điều nằm ngoài thẩm quyền</li>
    <li>✅ Nếu không chắc → nói "Em sẽ xác nhận lại và phản hồi anh/chị trong [thời gian cụ thể]"</li>
  </ul>
</div>`,
          quiz: {
            id: "quiz_csk12_day1_s1",
            title: "Quiz: Tổng quan MindX",
            questions: [
              {
                q: "MindX được thành lập vào năm nào với tên gọi ban đầu là gì?",
                options: ["2013 — MindCode", "2015 — Techkids", "2016 — CodeSchool", "2017 — MindX"],
                correct: 1,
                explanation: "MindX thành lập năm 2015 với tên Techkids, sau đó đổi tên thành MindX Technology School năm 2017."
              },
              {
                q: "Trong cấu trúc BU, CSL là viết tắt của?",
                options: ["Center Sales Leader", "Customer Service Leader", "Customer Support Lead", "Center Service Lead"],
                correct: 1,
                explanation: "CSL = Customer Service Leader — Trưởng nhóm CS, người quản lý trực tiếp của CS."
              },
              {
                q: "Khi PH muốn hoàn phí, CS nên làm gì?",
                options: ["Tự quyết định và xử lý ngay", "Từ chối thẳng", "Báo cáo lên CSL → CM → Finance để phê duyệt", "Hỏi TVTS xử lý"],
                correct: 2,
                explanation: "Hoàn phí nằm ngoài thẩm quyền CS — cần escalate lên CSL → CM → Finance theo đúng quy trình."
              },
              {
                q: "Giá trị cốt lõi nào KHÔNG thuộc về MindX?",
                options: ["Student First", "Innovation", "Profit First", "Impact"],
                correct: 2,
                explanation: "4 giá trị cốt lõi MindX: Student First, Innovation, Quality, Impact. 'Profit First' không phải giá trị cốt lõi."
              },
              {
                q: "TC (Training Coordinator) có vai trò gì trong quy trình làm việc của CS?",
                options: ["Quản lý doanh thu", "Kết nối CS với giáo viên, điều phối lịch dạy và học bù", "Tư vấn học viên mới", "Phê duyệt bảo lưu"],
                correct: 1,
                explanation: "TC là đầu mối giữa CS và giáo viên — khi cần sắp xếp học bù, đổi GV hay bổ sung lớp, CS liên hệ TC."
              }
            ]
          }
        },
        {
          id: "csk12_day1_s2",
          title: "Vai trò CS tại MindX",
          icon: "👩‍💼",
          content: `<h3>CS = Customer SUCCESS — Không chỉ là Customer Service</h3>

<div class="insight-card">
  <div class="insight-number">💡</div>
  <div class="insight-body">
    <h4>Định nghĩa CS tại MindX</h4>
    <p>CS không phải là "bộ phận hỗ trợ khi có vấn đề". CS là <strong>người đồng hành chính</strong> — người duy nhất PH/HV gặp từ ngày đầu đến ngày cuối khóa học. Nếu Sale đưa khách đến MindX, thì CS là người giữ khách ở lại và phát triển cùng MindX.</p>
    <p><em>"CS giỏi không đợi PH gọi — CS giỏi gọi trước khi PH có vấn đề."</em></p>
  </div>
</div>

<h3>So sánh CS và Sale — Hai vai trò khác nhau hoàn toàn</h3>
<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:0.85rem;">
  <thead>
    <tr style="background:#F7FAFC;">
      <th style="padding:10px;border:1px solid #E2E8F0;text-align:left;">Tiêu chí</th>
      <th style="padding:10px;border:1px solid #E2E8F0;text-align:left;">Sale (TVTS)</th>
      <th style="padding:10px;border:1px solid #E2E8F0;text-align:left;">CS</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>Mục tiêu chính</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Chốt đơn, tuyển sinh mới</td><td style="padding:8px;border:1px solid #E2E8F0;">Giữ chân, phát triển & tái đăng ký</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>KPI chính</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Doanh thu, số đơn, conversion rate</td><td style="padding:8px;border:1px solid #E2E8F0;">Retention rate, NPS, chuyên cần, complaint rate</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>Giao tiếp với PH</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Trước khi đăng ký (1–2 tuần)</td><td style="padding:8px;border:1px solid #E2E8F0;">Từ ngày đăng ký đến hết lộ trình (12–60 tháng)</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>Quan hệ</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Ngắn hạn, giao dịch</td><td style="padding:8px;border:1px solid #E2E8F0;">Dài hạn, đồng hành</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>Biết về HV</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Thông tin cơ bản (tên, tuổi, nhu cầu ban đầu)</td><td style="padding:8px;border:1px solid #E2E8F0;">Sở thích, tiến độ, thái độ, mối quan hệ với bạn bè lớp</td></tr>
  </tbody>
</table>

<h3>5 Đầu việc cốt lõi của CS K12</h3>

<div class="insight-card">
  <div class="insight-number">1</div>
  <div class="insight-body">
    <h4>❤️ Chăm sóc Phụ huynh & Học viên (PHHS)</h4>
    <ul>
      <li>Greeting Call sau đăng ký, gọi cập nhật sau buổi 1</li>
      <li>Cập nhật tiến độ học tập định kỳ qua Zalo/điện thoại</li>
      <li>Thông báo kết quả Checkpoint (CP1, CP2), mời tham dự Demo Day</li>
      <li>Xử lý phàn nàn, lo ngại của PH một cách chuyên nghiệp</li>
      <li>Gửi feedback GV cho PH qua Compass sau mỗi buổi học</li>
    </ul>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">2</div>
  <div class="insight-body">
    <h4>📋 Quản lý lớp học</h4>
    <ul>
      <li><strong>Điểm danh:</strong> Theo dõi chuyên cần, ghi nhận vắng mặt trên LMS</li>
      <li><strong>Học bù (Makeup):</strong> Liên hệ PH & TC sắp xếp lịch bù khi HV vắng</li>
      <li><strong>Level-up:</strong> Theo dõi tiến độ, hỗ trợ chuyển cấp khi hoàn thành khóa</li>
      <li><strong>Checkpoint:</strong> Phối hợp GV tổ chức CP1, CP2, nghiệm thu sản phẩm</li>
      <li><strong>Demo Day:</strong> Host buổi trình bày sản phẩm cuối khóa, xin CSAT từ PH</li>
    </ul>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">3</div>
  <div class="insight-body">
    <h4>🏫 Hỗ trợ Giáo viên & Vận hành</h4>
    <ul>
      <li>Chuẩn bị phòng học: TV, HDMI, máy tính, điều hòa 24-28°C</li>
      <li>Hỗ trợ GV về hành chính: điểm danh, nhận xét trên LMS</li>
      <li>Xử lý sự cố: GV nghỉ đột xuất, thiết bị hỏng, HV xung đột</li>
      <li>Trực lễ tân, tiếp đón PH/HV đến trung tâm</li>
    </ul>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">4</div>
  <div class="insight-body">
    <h4>📈 Retention (Giữ chân học viên)</h4>
    <ul>
      <li>Phát hiện sớm dấu hiệu HV có nguy cơ bỏ học (vắng nhiều, mất hứng)</li>
      <li>Chủ động can thiệp: đổi lịch, bảo lưu, hỗ trợ GV kèm riêng</li>
      <li>Tư vấn PH hiểu giá trị của lộ trình dài hạn</li>
      <li>KPI: Tỷ lệ gia hạn > 70%, Dropout rate < 10%</li>
    </ul>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">5</div>
  <div class="insight-body">
    <h4>💰 Upsell & Cross-sell</h4>
    <ul>
      <li><strong>Re-enroll:</strong> Tư vấn PH đăng ký khóa tiếp theo khi gần hết khóa hiện tại</li>
      <li><strong>Upsell lộ trình:</strong> Từ đơn lẻ lên Combo 12T/24T</li>
      <li><strong>Cross-sell:</strong> Giới thiệu thêm môn học (VD: đang học Coding → thêm Art)</li>
      <li>CS không "bán" — CS <em>tư vấn lộ trình phát triển</em> cho con dựa trên hiểu biết thật sự</li>
    </ul>
  </div>
</div>

<h3>KPIs của CS K12 — Thước đo hiệu suất</h3>
<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:0.85rem;">
  <thead>
    <tr style="background:#E53E3E;color:#fff;">
      <th style="padding:10px;border:1px solid #E2E8F0;">KPI</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">Mô tả</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">Mục tiêu</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>Tỷ lệ gia hạn (Renewal Rate)</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">% HV đăng ký tiếp sau khi hết khóa</td><td style="padding:8px;border:1px solid #E2E8F0;">&gt; 70%</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>NPS (Net Promoter Score)</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Mức độ hài lòng và giới thiệu của PH</td><td style="padding:8px;border:1px solid #E2E8F0;">&gt; 50</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>Tỷ lệ chuyên cần (Attendance)</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">% HV có mặt mỗi buổi học</td><td style="padding:8px;border:1px solid #E2E8F0;">&gt; 85%</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>Complaint Rate</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Số khiếu nại nghiêm trọng/tháng</td><td style="padding:8px;border:1px solid #E2E8F0;">= 0 khiếu nại leo thang</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>CSAT (Customer Satisfaction)</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Điểm hài lòng thu tại Demo Day</td><td style="padding:8px;border:1px solid #E2E8F0;">&gt; 4.5/5</td></tr>
  </tbody>
</table>

<h3>Một ngày của CS xuất sắc — Timeline 8h–18h</h3>
<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:0.85rem;">
  <thead>
    <tr style="background:#2D3748;color:#fff;">
      <th style="padding:10px;border:1px solid #4A5568;text-align:left;">Giờ</th>
      <th style="padding:10px;border:1px solid #4A5568;text-align:left;">Hoạt động</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">8:00 – 8:30</td><td style="padding:8px;border:1px solid #E2E8F0;">Check LMS: lớp học ngày hôm nay, HV vắng hôm qua, Checkpoint cần review</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">8:30 – 9:30</td><td style="padding:8px;border:1px solid #E2E8F0;">Gọi điện/nhắn Zalo: PH có con vắng hôm qua (sắp xếp học bù), cập nhật HV chờ lớp</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">9:30 – 11:30</td><td style="padding:8px;border:1px solid #E2E8F0;">Xử lý admin: cập nhật CRM, tạo ticket bảo lưu/chuyển lớp, phê duyệt nhận xét GV trên LMS</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">11:30 – 13:00</td><td style="padding:8px;border:1px solid #E2E8F0;">Nghỉ trưa</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">13:00 – 15:00</td><td style="padding:8px;border:1px solid #E2E8F0;">Chuẩn bị phòng học buổi chiều. Kiểm tra thiết bị, điểm danh danh sách, phối hợp GV</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">15:00 – 17:30</td><td style="padding:8px;border:1px solid #E2E8F0;">Giờ cao điểm lớp học: Điểm danh, hỗ trợ GV, tiếp PH đến đón con, ghi nhận feedback trực tiếp</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">17:30 – 18:00</td><td style="padding:8px;border:1px solid #E2E8F0;">Tổng kết ngày: Cập nhật LMS, ghi chú CRM, lên kế hoạch gọi điện cho ngày hôm sau</td></tr>
  </tbody>
</table>

<div class="key-takeaway">
  <h4>💡 Key Takeaway</h4>
  <p>CS là người duy nhất PH thực sự "nhìn thấy" trong suốt hành trình học tập. Một CS xuất sắc không phải người giải quyết nhiều vấn đề nhất — mà là người <strong>ngăn chặn được vấn đề trước khi nó xảy ra</strong>.</p>
</div>

<div class="practice-exercise">
  <h4>🏋️ Bài tập thực hành</h4>
  <p>Xem lại danh sách lớp của cơ sở bạn. Chọn 3 lớp đang chạy và liệt kê: (1) Đang ở buổi thứ mấy? (2) Ai là PH cần gọi theo dõi? (3) Checkpoint tiếp theo là bao giờ?</p>
</div>`,
          quiz: {
            id: "quiz_csk12_day1_s2",
            title: "Quiz: Vai trò CS tại MindX",
            questions: [
              {
                q: "KPI chính của CS K12 là gì?",
                options: ["Doanh thu tư vấn mới", "Retention rate, NPS, chuyên cần, complaint rate", "Số lead chuyển từ Sale", "Số cuộc gọi tư vấn mỗi ngày"],
                correct: 1,
                explanation: "CS tập trung vào giữ chân học viên (retention), mức độ hài lòng (NPS), chuyên cần và tỷ lệ khiếu nại — không phải doanh thu mới."
              },
              {
                q: "Điểm khác biệt lớn nhất giữa CS và Sale là gì?",
                options: ["CS lương cao hơn Sale", "Sale chốt đơn trước đăng ký, CS đồng hành suốt khóa học sau đăng ký", "CS gặp phụ huynh, Sale gặp học viên", "Sale làm ca tối, CS làm hành chính"],
                correct: 1,
                explanation: "Sale tiếp cận trước đăng ký (ngắn hạn 1-2 tuần). CS bắt đầu từ ngày đăng ký và đồng hành suốt 12-60 tháng học tập."
              },
              {
                q: "Tỷ lệ gia hạn (Renewal Rate) mục tiêu của CS K12 là bao nhiêu?",
                options: ["Trên 50%", "Trên 60%", "Trên 70%", "Trên 80%"],
                correct: 2,
                explanation: "Mục tiêu Renewal Rate của CS K12 là trên 70% — nghĩa là 7/10 học viên phải đăng ký tiếp sau khi hết khóa."
              },
              {
                q: "Khi gần hết khóa, CS cần làm gì để tăng retention?",
                options: ["Chờ PH hỏi về khóa tiếp theo", "Chủ động tư vấn lộ trình tiếp theo + giới thiệu ưu đãi nếu có", "Chuyển cho Sale xử lý", "Gửi email quảng cáo"],
                correct: 1,
                explanation: "CS chủ động tư vấn re-enroll — không chờ PH hỏi. Thời điểm vàng là buổi 10-12 trước khi kết thúc khóa."
              },
              {
                q: "Trong một ngày làm việc, CS nên làm việc gì vào buổi sáng sớm (8h-9h30)?",
                options: ["Họp team", "Check LMS + Gọi PH có con vắng hôm qua + cập nhật HV chờ lớp", "Dạy thêm cho HV yếu", "Gặp đối tác"],
                correct: 1,
                explanation: "Buổi sáng sớm: Check LMS xem tình hình lớp, gọi PH xử lý vắng, cập nhật HV chờ — làm trước khi bận ca chiều."
              }
            ]
          }
        },
        {
          id: "csk12_day1_s3",
          title: "6 Tư duy dịch vụ CS MindX",
          icon: "🧠",
          content: `<h3>6 Tư duy dịch vụ cốt lõi của CS MindX</h3>
<p>6 tư duy này không phải "quy tắc bắt buộc" — đây là <strong>kim chỉ nam nội tâm</strong> của một CS xuất sắc. CS mới đọc xong phải biết áp dụng ngay ngày đầu đi làm.</p>

<div class="mindset-section">

  <div class="mindset-card growth">
    <div class="mindset-icon">🎯</div>
    <h4>Tư duy 1: PROACTIVE — Chủ động trước khi được hỏi</h4>
    <p><strong>Định nghĩa:</strong> CS luôn hành động trước khi PH/HV có nhu cầu hoặc vấn đề. Dự đoán điều PH sẽ muốn biết và chủ động cung cấp thông tin đó.</p>
    <div class="quote-block">
      <strong>✅ Ví dụ thực tế tại MindX:</strong><br>
      Thứ 3, CS nhận thấy lớp ngày mai có GV xin nghỉ đột xuất. CS không đợi đến mai — CS gọi từng PH ngay chiều nay: <em>"Dạ anh/chị, ngày mai bé có lịch học nhưng GV [tên] bận đột xuất. Em đã sắp xếp GV [tên thay thế] dạy thay và sắp xếp học bù nếu anh/chị muốn. Anh/chị cho em biết phương án nào phù hợp hơn ạ?"</em><br><br>
      <strong>❌ Anti-pattern:</strong> Đợi đến giờ học ngày mai, PH và HV đến mới thông báo GV nghỉ.
    </div>
    <div class="practice-exercise" style="margin-top:10px;">
      <strong>Self-assessment:</strong> Tuần qua, tôi đã chủ động thông báo PH trước bao nhiêu lần mà không cần PH hỏi trước? (Mục tiêu: ít nhất 3 lần/tuần)
    </div>
  </div>

  <div class="mindset-card customer">
    <div class="mindset-icon">❤️</div>
    <h4>Tư duy 2: EMPATHY — Đặt mình vào vị trí PH/HV</h4>
    <p><strong>Định nghĩa:</strong> Hiểu và cảm nhận được cảm xúc, lo lắng của PH/HV. Không phán xét — luôn nghĩ "nếu đây là con tôi, tôi sẽ muốn được đối xử thế nào?"</p>
    <div class="quote-block">
      <strong>✅ Ví dụ thực tế:</strong><br>
      PH gọi với giọng lo lắng: "Con nhà tôi học mãi không lên được, tôi lo quá." CS không nói "mỗi bé tiếp thu khác nhau" (câu máy móc).<br>
      CS nói: <em>"Dạ em hiểu anh/chị lo lắng. Con anh/chị đang gặp khó ở phần [cụ thể]. Em đã trao đổi với GV rồi, GV sẽ hỗ trợ riêng bé phần đó. Em sẽ cập nhật anh/chị sau buổi học thứ 3 tới nhé ạ."</em><br><br>
      <strong>❌ Anti-pattern:</strong> "Bình thường thôi ạ, bé cần thêm thời gian."
    </div>
    <div class="practice-exercise" style="margin-top:10px;">
      <strong>Self-assessment:</strong> Lần cuối PH nói lo lắng với tôi, tôi đã ghi nhận cảm xúc của họ bằng lời chưa? Hay tôi đã đi thẳng vào giải pháp?
    </div>
  </div>

  <div class="mindset-card dna">
    <div class="mindset-icon">🏆</div>
    <h4>Tư duy 3: OWNERSHIP — Nhận trách nhiệm đến cùng</h4>
    <p><strong>Định nghĩa:</strong> CS sở hữu vấn đề — không đẩy qua bộ phận khác. Kể cả khi lỗi không phải từ CS, CS vẫn là người theo sát đến khi vấn đề được giải quyết hoàn toàn.</p>
    <div class="quote-block">
      <strong>✅ Ví dụ thực tế:</strong><br>
      PH nói điểm Checkpoint bé bị ghi sai trên Compass. CS không nói "lỗi này do GV nhập sai". CS nói: <em>"Dạ em xin lỗi vì sự nhầm lẫn này. Em sẽ liên hệ GV và team kỹ thuật ngay để điều chỉnh. Em sẽ phản hồi anh/chị trước 4h chiều nay ạ."</em> Sau đó CS thực sự gọi lại đúng 4h.<br><br>
      <strong>❌ Anti-pattern:</strong> "Cái đó do GV nhập, anh/chị liên hệ GV trực tiếp nhé."
    </div>
    <div class="practice-exercise" style="margin-top:10px;">
      <strong>Self-assessment:</strong> Khi tôi chuyển vấn đề sang bộ phận khác, tôi có follow-up để đảm bảo PH nhận được câu trả lời chưa? Hay tôi "chuyển và quên"?
    </div>
  </div>

  <div class="mindset-card growth">
    <div class="mindset-icon">🔍</div>
    <h4>Tư duy 4: DETAIL-ORIENTED — Chú ý từng chi tiết nhỏ</h4>
    <p><strong>Định nghĩa:</strong> CS biết tên từng học viên, biết học viên nào có vấn đề, biết PH nào cần được chăm sóc đặc biệt. Những chi tiết nhỏ tạo ra sự khác biệt lớn.</p>
    <div class="quote-block">
      <strong>✅ Ví dụ thực tế:</strong><br>
      CS gọi PH sau Checkpoint: <em>"Dạ anh/chị, bé [Tên] lần này làm rất tốt phần animation — GV khen bé sáng tạo hơn hẳn CP1. Tuy nhiên phần code xử lý va chạm cần cải thiện. Em đã nhờ GV hướng dẫn thêm bé ở nhà bằng bài tập..."</em><br>
      → PH thấy CS biết con mình học gì, ở đâu — không phải đọc báo cáo chung chung.<br><br>
      <strong>❌ Anti-pattern:</strong> "Bé học ổn ạ, không có vấn đề gì." (Thông tin rỗng)
    </div>
    <div class="practice-exercise" style="margin-top:10px;">
      <strong>Self-assessment:</strong> Với mỗi lớp tôi quản lý, tôi có thể kể tên 2-3 điểm mạnh/yếu cụ thể của từng HV trong lớp không?
    </div>
  </div>

  <div class="mindset-card customer">
    <div class="mindset-icon">💡</div>
    <h4>Tư duy 5: SOLUTION-FOCUSED — Hướng về giải pháp, không về vấn đề</h4>
    <p><strong>Định nghĩa:</strong> Khi gặp khó khăn, CS dành 20% thời gian phân tích vấn đề và 80% thời gian tìm giải pháp. Luôn đề xuất ít nhất 2 phương án cho PH lựa chọn.</p>
    <div class="quote-block">
      <strong>✅ Ví dụ thực tế:</strong><br>
      PH nói lịch học mới bị trùng với lịch học thêm của con. CS không nói "lớp đó chỉ có lịch đó thôi ạ". CS nói: <em>"Dạ em hiểu. Em kiểm tra ngay: có 2 phương án. Phương án 1: chuyển bé sang lớp [Thứ 6, 15h-17h]. Phương án 2: đổi sang lớp học online cùng level, lịch linh hoạt hơn. Anh/chị thấy phương án nào phù hợp hơn ạ?"</em><br><br>
      <strong>❌ Anti-pattern:</strong> "Lịch học đã cố định rồi ạ, không đổi được."
    </div>
    <div class="practice-exercise" style="margin-top:10px;">
      <strong>Self-assessment:</strong> Tuần qua khi PH nêu vấn đề, tôi đã đề xuất bao nhiêu phương án giải quyết? Có lần nào tôi nói "không làm được" mà chưa thử tìm cách không?
    </div>
  </div>

  <div class="mindset-card dna">
    <div class="mindset-icon">📊</div>
    <h4>Tư duy 6: DATA-DRIVEN — Dùng dữ liệu để chăm sóc tốt hơn</h4>
    <p><strong>Định nghĩa:</strong> CS sử dụng dữ liệu từ LMS, CRM để đưa ra quyết định. Không phán đoán cảm tính — nhìn vào số liệu: tỷ lệ chuyên cần, kết quả Checkpoint, tần suất tương tác PH.</p>
    <div class="quote-block">
      <strong>✅ Ví dụ thực tế:</strong><br>
      CS nhìn LMS thấy bé [Tên] vắng 3/7 buổi gần đây, điểm CP2 giảm so với CP1. CS không đợi PH gọi — CS gọi trước: <em>"Dạ anh/chị, em thấy bé [Tên] gần đây có 3 buổi vắng và điểm CP2 có giảm một chút. Em muốn trao đổi thêm để hỗ trợ bé tốt hơn ạ. Anh/chị có thể cho em biết dạo này bé có gặp vấn đề gì không ạ?"</em><br><br>
      <strong>❌ Anti-pattern:</strong> Đợi đến buổi 12-13 mới nhận ra bé đang có vấn đề, không còn thời gian can thiệp.
    </div>
    <div class="practice-exercise" style="margin-top:10px;">
      <strong>Self-assessment:</strong> Tôi xem LMS bao nhiêu lần mỗi tuần? Tôi có biết HV nào trong lớp mình đang có xu hướng giảm sút không?
    </div>
  </div>

</div>

<div class="key-takeaway">
  <h4>💡 Key Takeaway — Nhớ quy tắc 6P</h4>
  <p><strong>P</strong>roactive · <strong>E</strong>mpathy · <strong>O</strong>wnership · <strong>D</strong>etail · <strong>S</strong>olution · <strong>D</strong>ata</p>
  <p>→ Viết tắt: <strong>PEODSD</strong> — hoặc nhớ đơn giản hơn: <em>"CS giỏi là người THẤY trước, HIỂU sâu, và GIẢI QUYẾT đến cùng."</em></p>
</div>

<div class="compare-table">
  <h4>⚠️ Common Mistakes</h4>
  <table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:0.88em;">
    <tr style="background:#FFF5F5;"><th style="padding:8px;border:1px solid #eee;">CS thiếu kinh nghiệm</th><th style="padding:8px;border:1px solid #eee;">CS xuất sắc</th></tr>
    <tr><td style="padding:8px;border:1px solid #eee;">Chờ PH gọi mới xử lý</td><td style="padding:8px;border:1px solid #eee;">Gọi trước khi PH có vấn đề</td></tr>
    <tr><td style="padding:8px;border:1px solid #eee;">Trả lời chung chung "bé học ổn"</td><td style="padding:8px;border:1px solid #eee;">Nêu chi tiết cụ thể từng HV</td></tr>
    <tr><td style="padding:8px;border:1px solid #eee;">Chuyển vấn đề sang người khác rồi bỏ qua</td><td style="padding:8px;border:1px solid #eee;">Chủ sở hữu vấn đề đến khi giải quyết xong</td></tr>
    <tr><td style="padding:8px;border:1px solid #eee;">Nói "không làm được" ngay</td><td style="padding:8px;border:1px solid #eee;">Đề xuất ít nhất 2 phương án</td></tr>
  </table>
</div>`,
          quiz: {
            id: "quiz_csk12_day1_s3",
            title: "Quiz: 6 Tư duy dịch vụ CS MindX",
            questions: [
              {
                q: "Tư duy 'Proactive' có nghĩa là gì trong thực tế làm việc của CS?",
                options: ["Làm đúng việc được giao", "Hành động trước khi PH có nhu cầu hoặc vấn đề", "Đợi PH gọi rồi xử lý nhanh", "Báo cáo đầy đủ mọi việc"],
                correct: 1,
                explanation: "Proactive = chủ động. CS gọi PH trước khi PH gọi CS, thông báo trước khi PH lo lắng."
              },
              {
                q: "Khi PH nói 'Con học mãi không lên được, lo quá', CS nên phản hồi thế nào?",
                options: ["'Mỗi bé tiếp thu khác nhau ạ' (câu máy móc)", "'Em hiểu lo lắng của anh/chị. Em sẽ trao đổi GV và cập nhật sau buổi học tới'", "'Không cần lo ạ, bé ổn thôi'", "'Anh/chị nên hỏi GV trực tiếp'"],
                correct: 1,
                explanation: "Empathy = ghi nhận cảm xúc cụ thể + cam kết hành động rõ ràng, không trả lời máy móc hoặc phủ nhận lo lắng."
              },
              {
                q: "PH báo điểm Checkpoint bị nhập sai trên Compass, CS nên nói gì?",
                options: ["'Lỗi đó do GV, anh/chị liên hệ GV nhé'", "'Em xin lỗi, em sẽ liên hệ GV và kỹ thuật, phản hồi anh/chị trước 4h chiều nay'", "'Hệ thống hay lỗi ạ, anh/chị đợi tự sửa'", "'Em kiểm tra nhưng không sửa được'"],
                correct: 1,
                explanation: "Ownership = sở hữu vấn đề đến cùng. CS không đẩy trách nhiệm sang bộ phận khác dù lỗi không phải từ CS."
              },
              {
                q: "Tư duy 'Data-driven' giúp CS làm gì tốt hơn?",
                options: ["Làm báo cáo đẹp hơn", "Phát hiện sớm HV có nguy cơ bỏ học dựa trên số liệu chuyên cần và kết quả Checkpoint", "Tính lương chính xác hơn", "Xây dựng giáo trình tốt hơn"],
                correct: 1,
                explanation: "Nhìn vào dữ liệu LMS: HV vắng nhiều + điểm giảm = tín hiệu sớm cần can thiệp, không đợi đến khi HV nói muốn nghỉ."
              },
              {
                q: "Khi PH nói lịch học bị trùng, CS nên xử lý thế nào thể hiện tư duy 'Solution-focused'?",
                options: ["'Lịch cố định rồi ạ'", "'Anh/chị đổi lịch học thêm đi'", "Đề xuất ít nhất 2 phương án: chuyển lớp khác hoặc học online cùng level", "'Để em hỏi lại quản lý'"],
                correct: 2,
                explanation: "Solution-focused = luôn đề xuất ít nhất 2 phương án cho PH chọn, không nói 'không được' khi chưa thử tìm cách."
              }
            ]
          }
        },
        {
          id: "csk12_day1_s4",
          title: "Thái độ dịch vụ — Framework S.M.I.L.E",
          icon: "💎",
          content: `<h3>Framework S.M.I.L.E — 5 thái độ của CS xuất sắc MindX</h3>
<p>Nếu 6 Tư duy là kim chỉ nam bên trong, thì S.M.I.L.E là <strong>biểu hiện bên ngoài</strong> mà PH/HV nhìn thấy mỗi ngày.</p>

<div style="display:flex;flex-direction:column;gap:15px;margin:15px 0;">

  <div style="background:linear-gradient(135deg,#E53E3E,#9B2C2C);color:#fff;padding:18px;border-radius:10px;">
    <h4 style="margin:0;font-size:1.1rem;">S — SINCERE (Chân thành)</h4>
    <p style="margin:8px 0 0;">Mọi lời nói và hành động đều xuất phát từ sự chân thành thật sự, không phải từ kịch bản có sẵn. PH cảm nhận được sự chân thành — và cũng cảm nhận được khi CS đang "diễn".</p>
    <table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:0.85em;background:rgba(255,255,255,0.1);">
      <tr><td style="padding:6px;color:#FFD700;font-weight:600;">✅ Đúng:</td><td style="padding:6px;"><em>"Em thực sự xin lỗi vì sự bất tiện này. Em sẽ tự tay theo dõi vấn đề này đến khi giải quyết xong ạ."</em></td></tr>
      <tr><td style="padding:6px;color:#FF8A80;font-weight:600;">❌ Sai:</td><td style="padding:6px;">"Dạ vâng, em ghi nhận ạ." (Nói xong không làm gì)</td></tr>
    </table>
  </div>

  <div style="background:linear-gradient(135deg,#2563EB,#1E40AF);color:#fff;padding:18px;border-radius:10px;">
    <h4 style="margin:0;font-size:1.1rem;">M — MINDFUL (Chú tâm, hiện diện)</h4>
    <p style="margin:8px 0 0;">Khi đang nói chuyện với PH — dù qua điện thoại hay trực tiếp — CS tập trung 100% vào cuộc hội thoại đó. Không vừa nói vừa làm việc khác. Mindful = đặt PH làm ưu tiên trong khoảnh khắc đó.</p>
    <table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:0.85em;background:rgba(255,255,255,0.1);">
      <tr><td style="padding:6px;color:#FFD700;font-weight:600;">✅ Đúng:</td><td style="padding:6px;">Khi PH vào trung tâm, đứng dậy ngay, gác điện thoại, nhìn thẳng vào mắt PH và lắng nghe.</td></tr>
      <tr><td style="padding:6px;color:#FF8A80;font-weight:600;">❌ Sai:</td><td style="padding:6px;">Vừa nhìn màn hình máy tính vừa nói "dạ vâng anh/chị ạ, em đang nghe..."</td></tr>
    </table>
  </div>

  <div style="background:linear-gradient(135deg,#059669,#065F46);color:#fff;padding:18px;border-radius:10px;">
    <h4 style="margin:0;font-size:1.1rem;">I — INSPIRING (Truyền cảm hứng tích cực)</h4>
    <p style="margin:8px 0 0;">CS mang năng lượng tích cực vào mọi tương tác. Dùng ngôn ngữ hướng về phía trước, về giải pháp và khả năng — không phải về vấn đề và giới hạn.</p>
    <table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:0.85em;background:rgba(255,255,255,0.1);">
      <tr><td style="padding:6px;color:#FFD700;font-weight:600;">Thay vì nói</td><td style="padding:6px;color:#FFD700;font-weight:600;">Hãy nói</td></tr>
      <tr><td style="padding:6px;">"Em không biết"</td><td style="padding:6px;">"Em sẽ tìm hiểu và phản hồi anh/chị trước [giờ cụ thể] ạ"</td></tr>
      <tr><td style="padding:6px;">"Không làm được"</td><td style="padding:6px;">"Em xin phép tìm phương án khác phù hợp hơn cho anh/chị"</td></tr>
      <tr><td style="padding:6px;">"Anh/chị phải làm..."</td><td style="padding:6px;">"Em gợi ý anh/chị có thể..."</td></tr>
    </table>
  </div>

  <div style="background:linear-gradient(135deg,#D97706,#92400E);color:#fff;padding:18px;border-radius:10px;">
    <h4 style="margin:0;font-size:1.1rem;">L — LISTENING (Lắng nghe chủ động)</h4>
    <p style="margin:8px 0 0;">Lắng nghe không phải chỉ "nghe". Lắng nghe chủ động = nghe + ghi nhận + phản chiếu + đặt câu hỏi. CS hiểu được điều PH chưa nói ra bằng lời — cảm xúc, lo lắng ẩn chứa sau câu hỏi.</p>
    <div style="background:rgba(255,255,255,0.1);padding:12px;border-radius:6px;margin:10px 0;">
      <strong>5 Kỹ năng lắng nghe chủ động:</strong>
      <ol style="margin:5px 0;padding-left:20px;">
        <li>Không ngắt lời — để PH nói hết ý</li>
        <li>Phản chiếu: "Dạ, em hiểu anh/chị đang nói là..."</li>
        <li>Đặt câu hỏi mở: "Anh/chị có thể kể thêm về tình huống đó không ạ?"</li>
        <li>Ghi chú (dù chỉ là ghi chú tinh thần)</li>
        <li>Xác nhận lại: "Vậy vấn đề anh/chị cần giải quyết là X, đúng không ạ?"</li>
      </ol>
    </div>
  </div>

  <div style="background:linear-gradient(135deg,#7C3AED,#5B21B6);color:#fff;padding:18px;border-radius:10px;">
    <h4 style="margin:0;font-size:1.1rem;">E — EXCEEDING (Vượt kỳ vọng)</h4>
    <p style="margin:8px 0 0;">Làm thêm điều gì đó mà PH không ngờ tới — một lời khen cụ thể về con, một video clip buổi học, một lời nhắc sinh nhật học viên. Những khoảnh khắc "wow" nhỏ tạo ra lòng trung thành lớn.</p>
    <table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:0.85em;background:rgba(255,255,255,0.1);">
      <tr><td style="padding:6px;color:#FFD700;font-weight:600;">Ví dụ Exceeding moments:</td></tr>
      <tr><td style="padding:6px;">📱 Gửi riêng video clip bé trình bày sản phẩm Demo kèm lời nhận xét cá nhân của CS</td></tr>
      <tr><td style="padding:6px;">🎂 Nhắn chúc mừng sinh nhật học viên đúng ngày với ảnh cả lớp</td></tr>
      <tr><td style="padding:6px;">📸 Gửi ảnh bé đang tập trung làm bài trên lớp cho PH vào đúng lúc PH nhắn hỏi "hôm nay con học thế nào?"</td></tr>
      <tr><td style="padding:6px;">🏆 Gọi điện thông báo khi bé đạt thành tích đặc biệt trong lớp (được GV khen, làm bài xuất sắc)</td></tr>
    </table>
  </div>

</div>

<h3>5 Tình huống thực tế — Đúng vs Sai</h3>

<div class="script-box">
  <h4>Tình huống 1: PH phàn nàn GV dạy không hay</h4>
  <table style="width:100%;border-collapse:collapse;font-size:0.9em;">
    <tr style="background:#FFF5F5;"><th style="padding:8px;border:1px solid #eee;color:#E53E3E;">❌ CS thiếu kinh nghiệm</th><th style="padding:8px;border:1px solid #eee;color:#059669;">✅ CS xuất sắc</th></tr>
    <tr><td style="padding:8px;border:1px solid #eee;">"Em nghĩ GV dạy ổn mà ạ, có thể anh/chị chưa quan sát kỹ."</td><td style="padding:8px;border:1px solid #eee;"><em>"Dạ em rất cảm ơn anh/chị đã chia sẻ. Em sẽ trao đổi trực tiếp với GV và CSL để điều chỉnh phương pháp dạy phù hợp hơn với bé. Em sẽ cập nhật anh/chị sau buổi học thứ 2 tới ạ."</em></td></tr>
  </table>
</div>

<div class="script-box">
  <h4>Tình huống 2: PH hỏi "Sao con tôi học lâu chưa thấy tiến bộ?"</h4>
  <table style="width:100%;border-collapse:collapse;font-size:0.9em;">
    <tr style="background:#FFF5F5;"><th style="padding:8px;border:1px solid #eee;color:#E53E3E;">❌ CS thiếu kinh nghiệm</th><th style="padding:8px;border:1px solid #eee;color:#059669;">✅ CS xuất sắc</th></tr>
    <tr><td style="padding:8px;border:1px solid #eee;">"Tiến bộ cần thời gian ạ, anh/chị kiên nhẫn thêm nhé."</td><td style="padding:8px;border:1px solid #eee;"><em>"Dạ em hiểu anh/chị mong đợi và lo lắng. Em xem lại kết quả CP và nhận xét GV của bé — bé đang mạnh về [X] nhưng cần hỗ trợ thêm ở [Y]. Em sẽ nhờ GV thiết kế bài tập riêng cho bé và cập nhật anh/chị sau mỗi 2 buổi học ạ."</em></td></tr>
  </table>
</div>

<div class="script-box">
  <h4>Tình huống 3: PH gọi giờ cao điểm, CS đang bận</h4>
  <table style="width:100%;border-collapse:collapse;font-size:0.9em;">
    <tr style="background:#FFF5F5;"><th style="padding:8px;border:1px solid #eee;color:#E53E3E;">❌ CS thiếu kinh nghiệm</th><th style="padding:8px;border:1px solid #eee;color:#059669;">✅ CS xuất sắc</th></tr>
    <tr><td style="padding:8px;border:1px solid #eee;">Bắt máy vừa nói chuyện vừa làm việc khác, nói nhanh cho xong.</td><td style="padding:8px;border:1px solid #eee;"><em>"Dạ anh/chị, em đang hỗ trợ lớp học. Em xin phép gọi lại anh/chị sau 20 phút được không ạ? Em sẽ gọi trước 5h chiều nhé."</em> → Và thực sự gọi lại đúng giờ.</td></tr>
  </table>
</div>

<div class="script-box">
  <h4>Tình huống 4: PH hỏi câu CS không biết trả lời</h4>
  <table style="width:100%;border-collapse:collapse;font-size:0.9em;">
    <tr style="background:#FFF5F5;"><th style="padding:8px;border:1px solid #eee;color:#E53E3E;">❌ CS thiếu kinh nghiệm</th><th style="padding:8px;border:1px solid #eee;color:#059669;">✅ CS xuất sắc</th></tr>
    <tr><td style="padding:8px;border:1px solid #eee;">"Cái đó em không biết" hoặc "Anh/chị hỏi quản lý đi ạ."</td><td style="padding:8px;border:1px solid #eee;"><em>"Dạ câu hỏi của anh/chị rất hay. Em cần xác nhận thêm thông tin để đảm bảo trả lời chính xác. Em sẽ phản hồi anh/chị trước [giờ cụ thể] ạ."</em></td></tr>
  </table>
</div>

<div class="script-box">
  <h4>Tình huống 5: PH nổi giận vì lớp bị dời lịch đột xuất</h4>
  <table style="width:100%;border-collapse:collapse;font-size:0.9em;">
    <tr style="background:#FFF5F5;"><th style="padding:8px;border:1px solid #eee;color:#E53E3E;">❌ CS thiếu kinh nghiệm</th><th style="padding:8px;border:1px solid #eee;color:#059669;">✅ CS xuất sắc</th></tr>
    <tr><td style="padding:8px;border:1px solid #eee;">"Dạ GV bận đột xuất ạ, tình huống bất khả kháng ạ." (Biện hộ)</td><td style="padding:8px;border:1px solid #eee;"><em>"Dạ em rất xin lỗi anh/chị vì sự bất tiện này. Em hiểu anh/chị đã sắp xếp lịch đưa đón bé. Em đã tìm GV thay thế rồi và có 2 phương án học bù cho bé. Anh/chị thấy phương án nào phù hợp hơn ạ?"</em></td></tr>
  </table>
</div>

<h3>Weekly S.M.I.L.E Self-Scoring Checklist</h3>
<div style="background:#F7FAFC;padding:16px;border-radius:8px;margin:16px 0;">
  <p style="margin:0 0 10px;font-weight:600;">Tự đánh giá mỗi cuối tuần (1-5 điểm cho mỗi mục):</p>
  <table style="width:100%;border-collapse:collapse;font-size:0.9em;">
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">☐ S - Sincere</td><td style="padding:8px;border:1px solid #E2E8F0;">Tôi có giữ lời hứa với PH trong tuần này không?</td><td style="padding:8px;border:1px solid #E2E8F0;">__/5</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">☐ M - Mindful</td><td style="padding:8px;border:1px solid #E2E8F0;">Tôi có thực sự tập trung khi giao tiếp với PH không?</td><td style="padding:8px;border:1px solid #E2E8F0;">__/5</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">☐ I - Inspiring</td><td style="padding:8px;border:1px solid #E2E8F0;">Tôi có dùng ngôn ngữ tích cực, hướng giải pháp không?</td><td style="padding:8px;border:1px solid #E2E8F0;">__/5</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">☐ L - Listening</td><td style="padding:8px;border:1px solid #E2E8F0;">Tôi có ngắt lời PH trong tuần này không?</td><td style="padding:8px;border:1px solid #E2E8F0;">__/5</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">☐ E - Exceeding</td><td style="padding:8px;border:1px solid #E2E8F0;">Tôi đã tạo ra ít nhất 1 "wow moment" với PH chưa?</td><td style="padding:8px;border:1px solid #E2E8F0;">__/5</td></tr>
  </table>
  <p style="margin:10px 0 0;font-size:0.85em;color:#666;">Tổng: __/25 | 20-25: Xuất sắc | 15-19: Tốt | dưới 15: Cần cải thiện</p>
</div>

<div class="key-takeaway">
  <h4>💡 Key Takeaway</h4>
  <p>S.M.I.L.E không phải về việc "tươi cười suốt ngày" — mà là về <strong>chất lượng của từng tương tác</strong>. Một cuộc gọi 5 phút với đầy đủ S.M.I.L.E đáng giá hơn 10 cuộc gọi qua loa.</p>
</div>`,
          quiz: {
            id: "quiz_csk12_day1_s4",
            title: "Quiz: Framework S.M.I.L.E",
            questions: [
              {
                q: "Trong S.M.I.L.E, 'M — Mindful' thể hiện qua hành động nào?",
                options: ["Nhớ tên từng học viên", "Tập trung 100% vào PH khi đang giao tiếp, gác bỏ mọi việc khác", "Ghi chú đầy đủ mọi thông tin", "Mặc đồng phục đúng quy định"],
                correct: 1,
                explanation: "Mindful = hiện diện hoàn toàn khi giao tiếp. Khi PH nói chuyện, không vừa làm việc khác, không nhìn màn hình."
              },
              {
                q: "Khi CS không biết câu trả lời, câu nào thể hiện 'Inspiring' đúng cách?",
                options: ["'Em không biết ạ'", "'Anh/chị hỏi quản lý đi'", "'Em sẽ xác nhận và phản hồi anh/chị trước [giờ cụ thể] ạ'", "'Chắc là không được đâu ạ'"],
                correct: 2,
                explanation: "Inspiring = ngôn ngữ tích cực, hướng về giải pháp. Cam kết thời gian cụ thể thể hiện sự chuyên nghiệp."
              },
              {
                q: "Lắng nghe chủ động (Active Listening) khác với nghe thông thường ở điểm nào?",
                options: ["Nghe không nói gì", "Nghe + ghi nhận + phản chiếu + đặt câu hỏi xác nhận hiểu đúng", "Nghe rồi ghi chép lại", "Nghe và im lặng"],
                correct: 1,
                explanation: "Active Listening = nghe + phản chiếu lại ý PH + đặt câu hỏi mở + xác nhận lại để đảm bảo hiểu đúng vấn đề."
              },
              {
                q: "Ví dụ nào thể hiện 'Exceeding expectations' tốt nhất?",
                options: ["Trả lời tin nhắn trong 30 phút", "Làm đúng quy trình mỗi ngày", "Gửi riêng video bé tại Demo kèm lời nhận xét cá nhân cho từng PH", "Gọi PH sau mỗi buổi học"],
                correct: 2,
                explanation: "Exceeding = làm điều PH không ngờ tới. Video riêng kèm nhận xét cá nhân là 'wow moment' tạo ấn tượng sâu sắc."
              },
              {
                q: "Khi PH nổi giận vì lớp bị dời lịch, CS nên làm gì đầu tiên theo S.M.I.L.E?",
                options: ["Giải thích ngay lý do GV nghỉ", "Xin lỗi + Đồng cảm + Đề xuất phương án giải quyết", "Chuyển cho CSL xử lý", "Hẹn gọi lại sau"],
                correct: 1,
                explanation: "Thứ tự đúng: S (Sincere - xin lỗi chân thành) → L (Listening - lắng nghe sự tức giận) → I (Inspiring - đề xuất 2 phương án tích cực)."
              }
            ]
          }
        }
      ]
    },

    /* ==================== CS K12 DAY 2 ==================== */
    {
      id: "csk12_day2",
      day: 2,
      title: "KIẾN THỨC SẢN PHẨM K12",
      subtitle: "Product Knowledge",
      icon: "📦",
      color: "#2563EB",
      sections: [
        {
          id: "csk12_day2_s1",
          title: "Lộ trình Coding (5 năm) — Góc nhìn CS",
          icon: "💻",
          content: `<h3>Lộ trình Coding — 5 năm kiến tạo tương lai số</h3>
<p>CS không cần biết code — nhưng CS cần <strong>hiểu đủ để trả lời PH và theo dõi tiến độ của học viên</strong>. Đây là bảng tra cứu nhanh cho CS.</p>

<h4>Bảng tổng quan 5 năm Coding</h4>
<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:0.85rem;">
  <thead>
    <tr style="background:#2563EB;color:#fff;">
      <th style="padding:10px;border:1px solid #E2E8F0;">Năm</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">Khóa học</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">Độ tuổi</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">Công cụ</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">Output nổi bật</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">CS cần nhớ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Năm 1</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Scratch Creator</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">8–11 tuổi</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Scratch 3.0 (MIT)</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Game platformer, Animation, Câu chuyện tương tác</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Kéo thả block — trẻ KHÔNG cần biết code. PH lo "con nhỏ quá" → trấn an ngay</td>
    </tr>
    <tr style="background:#F0F7FF;">
      <td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Năm 2</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Game Creator</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">11–13 tuổi</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">GameMaker Studio 2.0 + Python cơ bản</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Game 2D hoàn chỉnh có thể upload lên itch.io</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Bước chuyển từ kéo thả → code Python đầu tiên. PH hay lo "khó quá" → khuyến khích thử thêm 2-3 buổi</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Năm 3</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">App Producer</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">11–14 tuổi</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Python + MIT App Inventor</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">App cài được trên điện thoại Android thật</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Điểm WOW nhất: PH thấy con cài app lên điện thoại thật → rất ấn tượng. Dùng để upsell</td>
    </tr>
    <tr style="background:#F0F7FF;">
      <td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Năm 4</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Web Developer</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">14–16 tuổi</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">HTML/CSS/JS + Python/Node.js + SQL</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Website thật, chạy được trên internet, có portfolio</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">HV 14-15 tuổi có thể freelance kiếm tiền thật. Nhấn mạnh với PH: "portfolio công khai"</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Năm 5</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Computer Scientist</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">15–17 tuổi</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Python nâng cao, AI/ML, Data Science</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">AI project, Data analysis, có thể thi USACO/IOI</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Liên kết với Bảo trợ Du học MindX. Nhấn mạnh: "cánh cửa học bổng quốc tế"</td>
    </tr>
  </tbody>
</table>

<h3>Cột mốc CS cần theo dõi và cập nhật PH</h3>
<div class="insight-card">
  <div class="insight-number">📍</div>
  <div class="insight-body">
    <h4>Milestone CS cần proactive thông báo PH</h4>
    <ul>
      <li><strong>Buổi 1:</strong> Cập nhật bé hoàn thành buổi học đầu tiên, bé có hứng thú không</li>
      <li><strong>Checkpoint 1 (buổi 4-5):</strong> Kết quả bài kiểm tra giữa kỳ + điểm mạnh/yếu cụ thể</li>
      <li><strong>Checkpoint 2 (buổi 8-9):</strong> Tiến độ so với CP1, bé có đang theo kịp lộ trình không</li>
      <li><strong>Buổi 12:</strong> Nhắc Demo Day sắp đến, mời PH tham dự, bắt đầu tư vấn renewal</li>
      <li><strong>Buổi 14 (Demo Day):</strong> Tổng kết khóa học, giới thiệu lộ trình tiếp theo</li>
    </ul>
  </div>
</div>

<h3>Dấu hiệu học viên đang gặp khó khăn — CS cần can thiệp sớm</h3>
<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:0.85rem;">
  <thead>
    <tr style="background:#E53E3E;color:#fff;">
      <th style="padding:10px;border:1px solid #E2E8F0;">Dấu hiệu</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">CS nhận biết qua đâu</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">Hành động</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">Vắng 2+ buổi liên tiếp</td><td style="padding:8px;border:1px solid #E2E8F0;">LMS — Điểm danh</td><td style="padding:8px;border:1px solid #E2E8F0;">Gọi PH ngay, tìm hiểu lý do</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">Điểm CP2 giảm hơn CP1</td><td style="padding:8px;border:1px solid #E2E8F0;">LMS — Kết quả Checkpoint</td><td style="padding:8px;border:1px solid #E2E8F0;">Trao đổi GV, nhờ hỗ trợ thêm bé</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">GV nhận xét "chưa hoàn thành bài"</td><td style="padding:8px;border:1px solid #E2E8F0;">LMS — Nhận xét GV</td><td style="padding:8px;border:1px solid #E2E8F0;">Nhắc PH về BTVN, theo dõi thêm</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">PH nói "con không muốn đi học"</td><td style="padding:8px;border:1px solid #E2E8F0;">PH liên hệ trực tiếp</td><td style="padding:8px;border:1px solid #E2E8F0;">Tìm hiểu nguyên nhân → tư vấn giải pháp phù hợp</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">HV ngồi im, không tương tác trong lớp</td><td style="padding:8px;border:1px solid #E2E8F0;">GV phản ánh hoặc CS quan sát</td><td style="padding:8px;border:1px solid #E2E8F0;">Hỏi thăm bé trực tiếp, gọi PH</td></tr>
  </tbody>
</table>

<h3>10 câu PH hay hỏi về tiến độ Coding & Cách trả lời chuẩn</h3>

<div class="mindset-section">
  <div class="mindset-card growth">
    <h4>Nhóm 1: Câu hỏi về độ tuổi & thời điểm bắt đầu</h4>

    <p><strong>Q1: "Con tôi mới 8 tuổi, học Coding có sớm quá không?"</strong></p>
    <p style="color:#059669;padding-left:15px;"><em>"Không sớm chút nào ạ! Khóa Scratch Creator thiết kế riêng cho trẻ 8+. Con học kéo thả block hình ảnh — không cần gõ code. Trên thế giới, MIT (đại học số 1 thế giới) tạo ra Scratch chính là để dạy trẻ 8 tuổi tư duy lập trình. Anh/chị yên tâm, GV của chúng em có nhiều kinh nghiệm với trẻ độ tuổi này ạ."</em></p>

    <p><strong>Q2: "Sao phải học theo lộ trình, con không học nhảy cóc được không?"</strong></p>
    <p style="color:#059669;padding-left:15px;"><em>"Dạ mỗi năm học xây nền tảng cho năm sau ạ. Nếu bé nhảy thẳng lên Python mà chưa qua Scratch, bé sẽ thiếu tư duy thuật toán cơ bản — giống như học toán lớp 5 mà chưa biết cộng trừ. MindX thiết kế từng bước để con tiến bộ chắc chắn, không bị 'sốc kiến thức' ạ."</em></p>
  </div>

  <div class="mindset-card customer">
    <h4>Nhóm 2: Câu hỏi về tiến độ trong khóa</h4>

    <p><strong>Q3: "Con học mấy tháng rồi mà chưa thấy làm được gì?"</strong></p>
    <p style="color:#059669;padding-left:15px;"><em>"Dạ em hiểu anh/chị mong đợi. Mỗi khóa 14 buổi, output chính là sản phẩm Demo cuối khóa — bé đang trong quá trình xây dựng ạ. Em sẽ gửi anh/chị xem bài Checkpoint của bé để thấy tiến độ rõ hơn. Hoặc anh/chị có thể tham dự một buổi học để xem bé làm việc trực tiếp ạ."</em></p>

    <p><strong>Q4: "Điểm Checkpoint của con tôi được mấy điểm? Nghĩa là sao?"</strong></p>
    <p style="color:#059669;padding-left:15px;"><em>"Dạ Checkpoint đánh giá theo 3 tiêu chí: Kỹ thuật (code đúng không), Sáng tạo (ý tưởng có mới không), và Hoàn thành (đúng yêu cầu không). Bé [Tên] đạt [X] — GV nhận xét bé mạnh về [A] và cần cải thiện [B]. Em sẽ nhờ GV chú ý riêng phần [B] cho bé ạ."</em></p>

    <p><strong>Q5: "Con tôi chậm hơn các bạn trong lớp, tôi lo quá"</strong></p>
    <p style="color:#059669;padding-left:15px;"><em>"Dạ em hiểu lo lắng của anh/chị. Tốc độ tiếp thu của mỗi bé khác nhau — không phải bé nào chậm cũng kém. Em đã trao đổi với GV, GV sẽ hỗ trợ bé thêm trong giờ học và giao bài tập phù hợp hơn. Em cũng nhắc bé hoàn thành BTVN đều đặn — đây là yếu tố quan trọng nhất để bé bắt kịp ạ."</em></p>
  </div>

  <div class="mindset-card dna">
    <h4>Nhóm 3: Câu hỏi về tương lai & định hướng</h4>

    <p><strong>Q6: "Học Coding xong con làm được gì thực tế?"</strong></p>
    <p style="color:#059669;padding-left:15px;"><em>"Dạ từng năm con có output rõ ràng ạ: Năm 1 có game Scratch chia sẻ được với bạn bè. Năm 2 có game 2D upload lên internet. Năm 3 có app cài trên điện thoại thật. Năm 4 có website portfolio công khai. Năm 5 có AI project và có thể tham gia thi đấu quốc tế. Ngoài ra, tư duy lập trình giúp con học tốt toán, tin học trên trường ạ."</em></p>

    <p><strong>Q7: "Có nhất thiết học đến năm 5 không?"</strong></p>
    <p style="color:#059669;padding-left:15px;"><em>"Dạ không bắt buộc ạ. Mỗi năm là một giai đoạn hoàn chỉnh với kỹ năng cụ thể. Nhưng theo anh/chị quan sát bé, nếu bé thích lập trình và có định hướng IT trong tương lai, học đủ 5 năm sẽ tạo nền tảng vững nhất — đặc biệt có cơ hội thi đấu quốc tế và hỗ trợ du học từ MindX ạ."</em></p>

    <p><strong>Q8: "Con học Coding có cần mua laptop không?"</strong></p>
    <p style="color:#059669;padding-left:15px;"><em>"Dạ trong lớp MindX có đủ máy tính rồi ạ. Tuy nhiên nếu anh/chị muốn bé thực hành thêm ở nhà thì có thể dùng laptop Windows từ Core i3 trở lên là đủ. Em có thể tư vấn cấu hình phù hợp nếu anh/chị cần ạ."</em></p>

    <p><strong>Q9: "Con nhà tôi nghiện game, học Coding có giúp không?"</strong></p>
    <p style="color:#059669;padding-left:15px;"><em>"Dạ đây là lý do rất tốt để cho con học Coding ạ! Khi con hiểu cách game được tạo ra — code, logic, thiết kế — con sẽ nhìn game khác đi: từ người chơi thụ động trở thành người tạo ra. Nhiều bạn sau khi học Coding không còn nghiện chơi game nữa mà hứng thú hơn với việc làm game ạ."</em></p>

    <p><strong>Q10: "Mấy tuổi thì đi làm được sau khi học MindX?"</strong></p>
    <p style="color:#059669;padding-left:15px;"><em>"Dạ học viên năm 4 (Web Developer, 14-15 tuổi) đã có thể nhận dự án freelance nhỏ. Năm 5 (Computer Scientist) đủ điều kiện thực tập tại công ty IT. MindX có chương trình kết nối thực tập và bảo trợ việc làm sau khi hoàn thành lộ trình ạ."</em></p>
  </div>
</div>

<div class="key-takeaway">
  <h4>💡 Key Takeaway cho CS</h4>
  <p>Bạn không cần biết code. Nhưng bạn cần biết: <strong>(1) Từng năm học cái gì và làm ra sản phẩm gì; (2) Tuổi phù hợp cho từng cấp; (3) Tại sao không học nhảy cóc; (4) 10 câu PH hay hỏi nhất.</strong> Nếu PH hỏi câu chuyên sâu hơn, luôn nói "Em sẽ mời chuyên gia tư vấn thêm cho anh/chị ạ."</p>
</div>`,
          quiz: {
            id: "quiz_csk12_day2_s1",
            title: "Quiz: Lộ trình Coding — Góc nhìn CS",
            questions: [
              {
                q: "Lộ trình Coding năm 1 (Scratch Creator) dành cho trẻ bao nhiêu tuổi?",
                options: ["6+", "8+", "10+", "12+"],
                correct: 1,
                explanation: "Scratch Creator dành cho trẻ 8+ — sử dụng Scratch 3.0 (MIT), kéo thả block, không cần biết code."
              },
              {
                q: "Output ấn tượng nhất của khóa App Producer (Năm 3) để CS dùng khi upsell là?",
                options: ["Game online nhiều người chơi", "App cài được trên điện thoại Android thật", "Website portfolio", "AI chatbot"],
                correct: 1,
                explanation: "PH rất ấn tượng khi thấy con cài app của chính mình lên điện thoại thật. Đây là điểm highlight khi tư vấn renewal."
              },
              {
                q: "PH hỏi 'Sao phải học theo lộ trình, con không nhảy cóc được không?' — CS trả lời thế nào?",
                options: ["'Được, anh/chị cứ cho con thử'", "'Không được ạ vì quy định vậy'", "'Mỗi năm xây nền cho năm sau — như học toán, không thể bỏ phép cộng để làm vi tích phân'", "'Anh/chị để CS tư vấn thêm sau'"],
                correct: 2,
                explanation: "Giải thích logic: mỗi cấp xây nền tảng cho cấp tiếp theo. Nhảy cóc = thiếu nền tảng = học khó hơn và dễ bỏ giữa chừng."
              },
              {
                q: "HV có dấu hiệu nào sau đây cần CS can thiệp sớm nhất?",
                options: ["Điểm CP1 là 7/10", "Vắng 2 buổi liên tiếp không báo lý do", "Làm bài chậm hơn các bạn", "Hỏi GV nhiều câu hỏi"],
                correct: 1,
                explanation: "Vắng 2+ buổi liên tiếp không báo là tín hiệu cảnh báo đỏ — CS cần gọi PH ngay để tìm hiểu lý do."
              },
              {
                q: "Khi nào CS nên bắt đầu tư vấn PH về renewal (đăng ký khóa tiếp)?",
                options: ["Sau buổi Demo Day", "Ngay từ buổi 1", "Từ buổi 10-12 (gần cuối khóa)", "Khi PH hỏi trước"],
                correct: 2,
                explanation: "Thời điểm vàng để tư vấn renewal là buổi 10-12 — còn đủ thời gian thảo luận, PH đã thấy con tiến bộ, nhưng chưa quá sát ngày kết thúc."
              }
            ]
          }
        },
        {
          id: "csk12_day2_s2",
          title: "Lộ trình Art & Design (7 năm) — Góc nhìn CS",
          icon: "🎨",
          content: `<h3>Lộ trình Art & Design — 7 năm từ nhí họa sĩ đến designer chuyên nghiệp</h3>
<p>Art là lộ trình dài nhất của MindX — bắt đầu sớm nhất (4+) và kết thúc với kỹ năng chuyên nghiệp thực thụ. CS cần biết từng cấp để tư vấn đúng và theo dõi tiến độ phù hợp.</p>

<h4>Bảng tổng quan 7 năm Art & Design</h4>
<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:0.85rem;">
  <thead>
    <tr style="background:#7C3AED;color:#fff;">
      <th style="padding:10px;border:1px solid #E2E8F0;">Năm</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">Khóa học</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">Độ tuổi</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">Công cụ chính</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">Output nổi bật</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Năm 0</td><td style="padding:8px;border:1px solid #E2E8F0;">Little Artist</td><td style="padding:8px;border:1px solid #E2E8F0;">4–6 tuổi</td><td style="padding:8px;border:1px solid #E2E8F0;">Màu vẽ, giấy, iPad đơn giản</td><td style="padding:8px;border:1px solid #E2E8F0;">Tranh kể chuyện cá nhân, digital art đầu tiên</td></tr>
    <tr style="background:#F5F3FF;"><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Năm 1</td><td style="padding:8px;border:1px solid #E2E8F0;">Digital Art Foundations</td><td style="padding:8px;border:1px solid #E2E8F0;">7–8 tuổi</td><td style="padding:8px;border:1px solid #E2E8F0;">iPad + Apple Pencil + Procreate</td><td style="padding:8px;border:1px solid #E2E8F0;">Character design, Illustrated scene</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Năm 2</td><td style="padding:8px;border:1px solid #E2E8F0;">Visual Thinking</td><td style="padding:8px;border:1px solid #E2E8F0;">9–10 tuổi</td><td style="padding:8px;border:1px solid #E2E8F0;">Procreate nâng cao + Canva</td><td style="padding:8px;border:1px solid #E2E8F0;">Editorial illustration, Infographic hoàn chỉnh</td></tr>
    <tr style="background:#F5F3FF;"><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Năm 3</td><td style="padding:8px;border:1px solid #E2E8F0;">Game Art</td><td style="padding:8px;border:1px solid #E2E8F0;">11+ tuổi</td><td style="padding:8px;border:1px solid #E2E8F0;">Procreate + Aseprite (pixel art)</td><td style="padding:8px;border:1px solid #E2E8F0;">Bộ nhân vật game với animation, UI kit</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Năm 4</td><td style="padding:8px;border:1px solid #E2E8F0;">Character & Mascot</td><td style="padding:8px;border:1px solid #E2E8F0;">12+ tuổi</td><td style="padding:8px;border:1px solid #E2E8F0;">Procreate + Adobe Illustrator cơ bản</td><td style="padding:8px;border:1px solid #E2E8F0;">Mascot thương hiệu hoàn chỉnh + brand guide</td></tr>
    <tr style="background:#F5F3FF;"><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Năm 5</td><td style="padding:8px;border:1px solid #E2E8F0;">Visual Communication</td><td style="padding:8px;border:1px solid #E2E8F0;">13+ tuổi</td><td style="padding:8px;border:1px solid #E2E8F0;">Adobe Illustrator + Photoshop + InDesign</td><td style="padding:8px;border:1px solid #E2E8F0;">Brand identity hoàn chỉnh, Campaign visual</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Năm 6</td><td style="padding:8px;border:1px solid #E2E8F0;">Motion & Video</td><td style="padding:8px;border:1px solid #E2E8F0;">14+ tuổi</td><td style="padding:8px;border:1px solid #E2E8F0;">Adobe Premiere + After Effects</td><td style="padding:8px;border:1px solid #E2E8F0;">Motion graphic explainer 60-90s, Short film 3-5 phút</td></tr>
  </tbody>
</table>

<h3>Cách CS đánh giá tác phẩm học viên Art</h3>
<div class="insight-card">
  <div class="insight-number">🎨</div>
  <div class="insight-body">
    <h4>CS không cần biết vẽ — nhưng cần biết đặt câu hỏi đúng với GV</h4>
    <p>Khi xem tác phẩm của HV Art, CS hỏi GV 3 câu này:</p>
    <ol>
      <li><strong>"Bé [Tên] tiến bộ gì so với sản phẩm trước?"</strong> — để nêu cụ thể với PH</li>
      <li><strong>"Điểm nào trong tác phẩm này bé làm tốt nhất?"</strong> — để khen đúng chỗ</li>
      <li><strong>"Bé cần cải thiện điều gì cho sản phẩm tiếp theo?"</strong> — để theo dõi</li>
    </ol>
  </div>
</div>

<h3>Cách CS showcase tiến độ Art cho PH</h3>
<div class="mindset-section">
  <div class="mindset-card growth">
    <h4>Phương pháp 1: So sánh Before-After</h4>
    <p>Gửi PH ảnh tác phẩm từ buổi 1 so với tác phẩm hiện tại. Sự tiến bộ trực quan hơn bất kỳ lời giải thích nào.</p>
    <div class="quote-block"><em>"Dạ anh/chị, em gửi anh/chị xem 2 bức tranh của bé — bức đầu là buổi 1 và bức này là tuần này. Anh/chị thấy sự khác biệt không ạ? Bé đã tự tin hơn rất nhiều với màu sắc và bố cục ạ."</em></div>
  </div>
  <div class="mindset-card customer">
    <h4>Phương pháp 2: Video timelapse buổi học</h4>
    <p>Một số GV Art quay video timelapse bé tô màu/vẽ. CS xin GV chia sẻ và gửi cho PH — PH rất thích thấy "quá trình" con làm việc.</p>
  </div>
  <div class="mindset-card dna">
    <h4>Phương pháp 3: Giải thích ý nghĩa tác phẩm</h4>
    <p>Hỏi GV: "Bé vẽ chủ đề gì, ý nghĩa đặc biệt không?" Sau đó kể cho PH: "Bé vẽ [chủ đề] vì [lý do bé chia sẻ với GV] — thể hiện bé đang phát triển tư duy [X] ạ."</p>
  </div>
</div>

<h3>Art vs Coding — Tư vấn PH chọn đúng cho con</h3>
<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:0.85rem;">
  <thead>
    <tr style="background:#F7FAFC;">
      <th style="padding:10px;border:1px solid #E2E8F0;text-align:left;">Tiêu chí</th>
      <th style="padding:10px;border:1px solid #E2E8F0;text-align:left;">Coding phù hợp khi...</th>
      <th style="padding:10px;border:1px solid #E2E8F0;text-align:left;">Art phù hợp khi...</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">Tính cách bé</td><td style="padding:8px;border:1px solid #E2E8F0;">Thích logic, giải đố, xây dựng hệ thống</td><td style="padding:8px;border:1px solid #E2E8F0;">Thích vẽ, màu sắc, kể chuyện, thể hiện cảm xúc</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">Độ tuổi sớm nhất</td><td style="padding:8px;border:1px solid #E2E8F0;">8+ (Scratch)</td><td style="padding:8px;border:1px solid #E2E8F0;">4+ (Little Artist)</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">Career path</td><td style="padding:8px;border:1px solid #E2E8F0;">Developer, AI Engineer, Data Scientist</td><td style="padding:8px;border:1px solid #E2E8F0;">Designer, Illustrator, Motion Designer</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">Học 2 môn cùng lúc?</td><td style="padding:8px;border:1px solid #E2E8F0;" colspan="2">Được — nhiều HV học cả Coding + Art (đặc biệt để làm game hoàn chỉnh)</td></tr>
  </tbody>
</table>

<div class="key-takeaway">
  <h4>💡 Key Takeaway</h4>
  <p>Art là lộ trình có <strong>sản phẩm trực quan nhất</strong> — PH dễ thấy tiến bộ của con qua ảnh/tranh. Hãy tận dụng điều này: <strong>gửi ảnh tác phẩm định kỳ cho PH</strong> qua Zalo, đặc biệt với Type I (thích ảnh/video) và Type S (cần thấy con "ổn").</p>
</div>

<div class="compare-table">
  <h4>⚠️ Common Mistakes</h4>
  <ul>
    <li>❌ Nói với PH "bé vẽ đẹp rồi ạ" — thiếu thông tin cụ thể</li>
    <li>❌ Không gửi ảnh tác phẩm sau Demo — bỏ lỡ cơ hội tạo wow moment</li>
    <li>❌ Không biết bé đang học năm mấy, khóa gì — PH hỏi mà không trả lời được</li>
    <li>✅ Luôn có ảnh tác phẩm mới nhất của bé để gửi PH khi gọi điện</li>
  </ul>
</div>`,
          quiz: {
            id: "quiz_csk12_day2_s2",
            title: "Quiz: Lộ trình Art & Design",
            questions: [
              {
                q: "Lộ trình Art & Design bắt đầu sớm nhất từ bao nhiêu tuổi?",
                options: ["5+", "4+", "6+", "7+"],
                correct: 1,
                explanation: "Little Artist (Năm 0) dành cho trẻ từ 4 tuổi — sớm nhất trong tất cả các lộ trình của MindX."
              },
              {
                q: "Công cụ chính được dùng từ Năm 1 (Digital Art Foundations) là gì?",
                options: ["Bút màu và giấy", "iPad + Apple Pencil + Procreate", "Adobe Photoshop", "Paint Tool SAI"],
                correct: 1,
                explanation: "Từ Năm 1, HV dùng iPad + Apple Pencil + Procreate — bộ công cụ mà 80% illustrator chuyên nghiệp đang dùng."
              },
              {
                q: "Khi PH hỏi về tiến độ Art của con, CS nên hỏi GV 3 câu nào?",
                options: ["Bé điểm bao nhiêu? Bé học có nhanh không? Bé có ngoan không?", "Bé tiến bộ gì so với trước? Điểm mạnh nhất trong tác phẩm? Cần cải thiện điều gì?", "Bé vẽ đẹp chưa? Xong bài không? Bé hay vẽ gì?", "Tuần này bé vắng không? Bài tập nộp chưa? Bé chú ý không?"],
                correct: 1,
                explanation: "3 câu: (1) Tiến bộ gì so với trước; (2) Điểm mạnh nhất; (3) Cần cải thiện gì — cho CS đủ thông tin cụ thể để nói chuyện với PH."
              },
              {
                q: "Cách showcase tiến độ Art hiệu quả nhất với PH là?",
                options: ["Kể lại nội dung bài học", "Gửi ảnh so sánh Before-After từ buổi 1 đến hiện tại", "Mời PH lên hỏi GV trực tiếp", "Gửi điểm số qua Compass"],
                correct: 1,
                explanation: "Ảnh Before-After trực quan nhất — PH thấy ngay sự tiến bộ mà không cần giải thích. 'Một hình ảnh đáng ngàn lời nói.'"
              },
              {
                q: "Lộ trình Art & Design kéo dài bao nhiêu năm?",
                options: ["5 năm", "6 năm", "7 năm", "8 năm"],
                correct: 2,
                explanation: "7 năm: Little Artist (4+) → Digital Art Foundations → Visual Thinking → Game Art → Character & Mascot → Visual Communication → Motion & Video (14+)."
              }
            ]
          }
        },
        {
          id: "csk12_day2_s3",
          title: "Lộ trình Robotics (4 năm) — Góc nhìn CS",
          icon: "🤖",
          content: `<h3>Lộ trình Robotics — 4 năm từ Robot nhí đến Sáng tạo Robot thi đấu quốc tế</h3>
<p>Robotics là lộ trình STEM đặc biệt: kết hợp lắp ráp vật lý + lập trình + thi đấu. CS cần biết thiết bị từng cấp và quy trình chuẩn bị trước mỗi buổi học.</p>

<h4>Bảng tổng quan 4 năm Robotics</h4>
<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:0.85rem;">
  <thead>
    <tr style="background:#059669;color:#fff;">
      <th style="padding:10px;border:1px solid #E2E8F0;">Năm</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">Tên khóa</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">Tuổi</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">Kit thiết bị</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">Output</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">CS đặc biệt lưu ý</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Năm 0</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Kỹ sư Robot nhí</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">4–6 tuổi</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">LEGO Spike Essential</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Robot động vật, trực thăng cứu hộ</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">PH lo "bé sẽ nuốt miếng LEGO" → an toàn, miếng lớn. PH lo "bẩn không" → không bẩn, sạch</td>
    </tr>
    <tr style="background:#ECFDF5;">
      <td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Năm 1</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Nhập môn Robotics</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">6–8 tuổi</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">VEX GO</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Robot giao hàng, cánh cửa thông minh</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Kit VEX GO dùng tại 80+ quốc gia. Nhấn mạnh "cùng kit với trường quốc tế"</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Năm 2</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Truy tìm bí ẩn Robot</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">8–10 tuổi</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">VEX GO nâng cao</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Robot cứu hộ né vật cản, xe gom rác tự động</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Bắt đầu thi đấu cấp trường/thành phố. Giới thiệu VEX IQ Challenge cho PH có con tiến bộ nhanh</td>
    </tr>
    <tr style="background:#ECFDF5;">
      <td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Năm 3</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Sáng tạo Robot</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">10+ tuổi</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">VEX IQ</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Xe tự lái PID, cánh tay robot</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Cơ hội thi VEX IQ Challenge quốc tế — giải thưởng hỗ trợ du học. Điểm bán mạnh nhất!</td>
    </tr>
  </tbody>
</table>

<h3>Equipment Checklist mỗi cấp — CS chuẩn bị trước buổi học</h3>
<div class="mindset-section">
  <div class="mindset-card growth">
    <h4>✅ Checklist chung (tất cả cấp Robotics)</h4>
    <ul>
      <li>☐ Bàn đủ rộng để lắp ráp (tối thiểu 60x60cm/HV)</li>
      <li>☐ Hộp kit đủ linh kiện (đếm kiểm tra trước mỗi buổi)</li>
      <li>☐ Pin sạc đầy (LEGO/VEX đều dùng pin sạc)</li>
      <li>☐ Máy tính hoặc iPad để lập trình kết nối Bluetooth</li>
      <li>☐ Phòng đủ không gian chạy robot (tối thiểu 2x2m khu vực thử nghiệm)</li>
    </ul>
  </div>
  <div class="mindset-card customer">
    <h4>✅ Checklist riêng cho VEX IQ (Năm 3)</h4>
    <ul>
      <li>☐ Kiểm tra kết nối Bluetooth VEX IQ Brain với máy tính</li>
      <li>☐ Cài đặt phần mềm VEXcode IQ trước buổi học</li>
      <li>☐ Field mat (thảm thi đấu) được trải phẳng</li>
      <li>☐ Objects (vật thể thi đấu) đủ số lượng theo bài học</li>
      <li>☐ Dây USB/sạc dự phòng</li>
    </ul>
  </div>
</div>

<h3>CS chuẩn bị gì trước buổi học Robotics</h3>
<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:0.85rem;">
  <thead>
    <tr style="background:#2D3748;color:#fff;">
      <th style="padding:10px;border:1px solid #4A5568;">Thời điểm</th>
      <th style="padding:10px;border:1px solid #4A5568;">CS làm gì</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Trước 30 phút</td><td style="padding:8px;border:1px solid #E2E8F0;">Lấy hộp kit, kiểm tra linh kiện, sạc pin, chuẩn bị bàn</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Trước 15 phút</td><td style="padding:8px;border:1px solid #E2E8F0;">Phân chia kit cho từng HV, kiểm tra máy tính/iPad kết nối được Bluetooth</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Trong buổi học</td><td style="padding:8px;border:1px solid #E2E8F0;">Quan sát HV lắp ráp, hỗ trợ khi linh kiện bị hỏng hoặc mất</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Sau buổi học</td><td style="padding:8px;border:1px solid #E2E8F0;">Thu kit, đếm linh kiện, sạc pin cho buổi sau, ghi nhận linh kiện hỏng cần thay</td></tr>
  </tbody>
</table>

<h3>Câu PH hay hỏi về Robotics — Trả lời chuẩn</h3>
<div class="mindset-card dna">
  <p><strong>Q1: "Có cần mua thiết bị riêng không?"</strong></p>
  <p style="color:#059669;padding-left:15px;"><em>"Dạ không ạ. MindX cung cấp toàn bộ kit LEGO/VEX tại lớp. Anh/chị và bé không cần chuẩn bị gì cả ạ."</em></p>

  <p><strong>Q2: "Thiết bị LEGO có an toàn không? Bé nhỏ mà?"</strong></p>
  <p style="color:#059669;padding-left:15px;"><em>"Dạ hoàn toàn an toàn ạ. LEGO Education thiết kế riêng cho trẻ nhỏ — miếng lớn, nhựa an toàn, không cạnh sắc. Đây là kit được dùng tại trường học ở 140+ quốc gia ạ."</em></p>

  <p><strong>Q3: "Con học Robotics có thi đấu quốc tế được không?"</strong></p>
  <p style="color:#059669;padding-left:15px;"><em>"Dạ được ạ. Từ Năm 2, bé đã có thể tham gia các cuộc thi cấp thành phố. Năm 3 với kit VEX IQ, bé có cơ hội tham gia VEX IQ Challenge — giải quốc tế với 30,000+ đội từ 80 quốc gia. Giải thưởng hỗ trợ rất tốt cho hồ sơ du học ạ."</em></p>

  <p><strong>Q4: "Robotics khác gì so với Coding?"</strong></p>
  <p style="color:#059669;padding-left:15px;"><em>"Dạ Robotics kết hợp 3 thứ: Lập trình + Cơ khí + Thiết kế kỹ thuật. Bé không chỉ code trên màn hình — bé lắp ráp bằng tay và thấy robot của mình thực sự di chuyển ngoài đời thật. Với bé thích tay chân và thích thấy kết quả ngay, Robotics thường hấp dẫn hơn Coding thuần ạ."</em></p>
</div>

<div class="key-takeaway">
  <h4>💡 Key Takeaway</h4>
  <p>Robotics có 2 điểm bán mạnh nhất: <strong>(1) Output hữu hình</strong> — PH và HV thấy robot thật di chuyển ngay trong lớp; <strong>(2) Thi đấu quốc tế</strong> — cơ hội duy nhất để K12 có hồ sơ STEM quốc tế từ sớm. Hãy nhấn mạnh cả 2 điều này khi tư vấn renewal.</p>
</div>`,
          quiz: {
            id: "quiz_csk12_day2_s3",
            title: "Quiz: Lộ trình Robotics",
            questions: [
              {
                q: "Kit VEX IQ được sử dụng cho cấp Robotics nào?",
                options: ["Năm 0 (Kỹ sư Robot nhí)", "Năm 1 (Nhập môn)", "Năm 2 (Truy tìm bí ẩn)", "Năm 3 (Sáng tạo Robot)"],
                correct: 3,
                explanation: "VEX IQ dùng cho Năm 3 (Sáng tạo Robot, 10+) — kit thi đấu chính thức của VEX IQ Challenge quốc tế."
              },
              {
                q: "PH hỏi 'Có cần mua thiết bị riêng không?' — CS trả lời thế nào?",
                options: ["'Có, cần mua LEGO Spike về nhà'", "'Không, MindX cung cấp toàn bộ kit tại lớp'", "'Chỉ cần mua pin AA'", "'Tùy cấp học'"],
                correct: 1,
                explanation: "MindX cung cấp đầy đủ kit LEGO/VEX tại lớp — PH không cần mua gì thêm."
              },
              {
                q: "CS cần làm gì trước giờ học Robotics 30 phút?",
                options: ["Gọi điện nhắc HV", "Lấy hộp kit, kiểm tra linh kiện, sạc pin, chuẩn bị bàn", "Chờ GV đến rồi chuẩn bị cùng", "Ghi danh sách HV"],
                correct: 1,
                explanation: "30 phút trước: CS chủ động lấy kit, kiểm tra linh kiện đủ không, sạc pin, sắp xếp bàn — để GV có thể bắt đầu giảng ngay khi đến."
              },
              {
                q: "Lộ trình Robotics kéo dài bao nhiêu năm?",
                options: ["3 năm", "4 năm", "5 năm", "6 năm"],
                correct: 1,
                explanation: "Robotics gồm 4 năm: Năm 0 (4+) → Năm 1 (6+) → Năm 2 (8+) → Năm 3 (10+)."
              },
              {
                q: "Điểm bán mạnh nhất của Robotics Năm 3 (VEX IQ) là gì?",
                options: ["Học code Python", "Cơ hội thi đấu quốc tế VEX IQ Challenge hỗ trợ hồ sơ du học", "Làm game 2D", "Học AI"],
                correct: 1,
                explanation: "VEX IQ Challenge là giải quốc tế với 30,000+ đội từ 80 quốc gia — giải thưởng hỗ trợ rất tốt cho hồ sơ du học STEM."
              }
            ]
          }
        },
        {
          id: "csk12_day2_s4",
          title: "Bảng giá & Chính sách",
          icon: "💰",
          content: `<h3>Bảng giá & Chính sách — Kiến thức CS cần nắm để tư vấn renewal/upsell</h3>
<p class="warning-note" style="background:#FFF5F5;padding:12px;border-radius:8px;border-left:3px solid #E53E3E;"><strong>⚠️ Lưu ý:</strong> Giá cụ thể cập nhật theo từng thời điểm — CS cần kiểm tra bảng giá hiện hành với CSL. Nội dung dưới đây là <strong>cấu trúc gói và chính sách</strong> — không phải số tiền cụ thể.</p>

<h3>Các hình thức đăng ký tại MindX K12</h3>
<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:0.85rem;">
  <thead>
    <tr style="background:#2563EB;color:#fff;">
      <th style="padding:10px;border:1px solid #E2E8F0;">Gói</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">Mô tả</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">Ưu điểm</th>
      <th style="padding:10px;border:1px solid #E2E8F0;">Phù hợp với</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Standard Track<br>(theo khóa/module)</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Đăng ký từng module 14 buổi</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Linh hoạt, thử nghiệm trước</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">PH muốn thử, chưa chắc cam kết lâu dài</td>
    </tr>
    <tr style="background:#F0F7FF;">
      <td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Combo 12 tháng</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Cam kết 12 tháng học liên tục</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Giá ưu đãi hơn Standard, ưu tiên xếp lớp</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">PH đã tin tưởng, muốn tiết kiệm và cam kết</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Combo 24 tháng</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Cam kết 24 tháng — 2 cấp học</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Giá tốt nhất + Tặng áo MindX + Ưu tiên lớp cao nhất</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">PH quyết tâm cho con học lộ trình, muốn giá tốt nhất</td>
    </tr>
    <tr style="background:#F0F7FF;">
      <td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">1-on-1</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Học riêng 1 thầy 1 trò</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Lịch cực linh hoạt, tiến độ nhanh nhất, GV tập trung 100%</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">HV lịch bận (học nhiều môn), cần tiến độ nhanh, gia đình điều kiện tốt</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;">Bảo trợ 3 năm / 5 năm</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Cam kết lộ trình dài hạn 3-5 năm</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">Giá tốt nhất + Hỗ trợ du học + Bảo trợ việc làm</td>
      <td style="padding:8px;border:1px solid #E2E8F0;">PH định hướng nghề nghiệp IT/Design cho con từ sớm</td>
    </tr>
  </tbody>
</table>

<h3>Chính sách quan trọng CS cần nắm</h3>

<div class="mindset-section">
  <div class="mindset-card growth">
    <h4>📋 Chính sách Gia hạn (Renewal)</h4>
    <ul>
      <li>CS bắt đầu tư vấn renewal từ <strong>buổi 10-12</strong> (không đợi buổi 14)</li>
      <li>Ưu đãi renewal (nếu có) cần xác nhận với CSL trước khi thông báo PH</li>
      <li>Nếu PH quyết định đăng ký tiếp ngay sau Demo Day → TVTS xử lý thanh toán</li>
    </ul>
  </div>

  <div class="mindset-card customer">
    <h4>📋 Chính sách Upgrade level</h4>
    <ul>
      <li>HV phải hoàn thành 100% buổi học (hoặc học bù đủ) mới được lên level</li>
      <li>GV đánh giá HV đủ điều kiện lên level trước khi CS tư vấn PH</li>
      <li>CS không tự quyết định cho HV lên level — phải qua GV xác nhận</li>
    </ul>
  </div>

  <div class="mindset-card dna">
    <h4>📋 Chính sách Chuyển lớp</h4>
    <ul>
      <li>Trong cùng cơ sở: CS kiểm tra lịch có lớp phù hợp → báo PH → cập nhật LMS</li>
      <li>Khác cơ sở: CS liên hệ cơ sở đích trước → xác nhận chỗ → cập nhật CRM</li>
      <li>Chuyển trong vòng 7 ngày làm việc kể từ khi PH yêu cầu</li>
    </ul>
  </div>

  <div class="mindset-card growth">
    <h4>📋 Chính sách Bảo lưu</h4>
    <table style="width:100%;border-collapse:collapse;font-size:0.88em;">
      <tr style="background:#E53E3E;color:#fff;"><th style="padding:6px;border:1px solid #eee;">Lộ trình</th><th style="padding:6px;border:1px solid #eee;">Số lần</th><th style="padding:6px;border:1px solid #eee;">Thời gian tối đa</th></tr>
      <tr><td style="padding:6px;border:1px solid #eee;">12 tháng</td><td style="padding:6px;border:1px solid #eee;">1 lần</td><td style="padding:6px;border:1px solid #eee;">90 ngày</td></tr>
      <tr><td style="padding:6px;border:1px solid #eee;">24 tháng</td><td style="padding:6px;border:1px solid #eee;">2 lần</td><td style="padding:6px;border:1px solid #eee;">180 ngày</td></tr>
      <tr><td style="padding:6px;border:1px solid #eee;">Bảo trợ 3 năm</td><td style="padding:6px;border:1px solid #eee;">3 lần</td><td style="padding:6px;border:1px solid #eee;">270 ngày</td></tr>
      <tr><td style="padding:6px;border:1px solid #eee;">Bảo trợ 5 năm</td><td style="padding:6px;border:1px solid #eee;">3 lần</td><td style="padding:6px;border:1px solid #eee;">450 ngày (max 365/lần)</td></tr>
    </table>
    <p style="font-size:0.85em;color:#666;margin-top:8px;">Bảo lưu vượt hạn: Chỉ từ 12T+, cần giấy tờ (bệnh/du học/cuối cấp), tối đa 365 ngày, chỉ 1 lần.</p>
  </div>
</div>

<h3>Flowchart: PHHS muốn gia hạn/đổi lớp → CS làm gì</h3>
<div style="background:#F7FAFC;padding:16px;border-radius:8px;margin:16px 0;font-size:0.9em;">
  <p style="font-weight:600;text-align:center;margin-bottom:15px;">📊 Quy trình xử lý yêu cầu của PHHS</p>

  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="background:#2563EB;color:#fff;padding:10px;border-radius:6px;text-align:center;font-weight:600;">PHHS gọi điện/nhắn Zalo có yêu cầu</div>
    <div style="text-align:center;font-size:1.2em;">↓</div>

    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;">
      <div style="background:#059669;color:#fff;padding:10px;border-radius:6px;text-align:center;font-size:0.85em;"><strong>Muốn gia hạn</strong><br>CS tư vấn gói phù hợp → Giới thiệu TVTS xử lý thanh toán</div>
      <div style="background:#D97706;color:#fff;padding:10px;border-radius:6px;text-align:center;font-size:0.85em;"><strong>Muốn đổi lớp</strong><br>Kiểm tra lịch lớp phù hợp → Xác nhận PH → Cập nhật LMS</div>
      <div style="background:#7C3AED;color:#fff;padding:10px;border-radius:6px;text-align:center;font-size:0.85em;"><strong>Muốn bảo lưu</strong><br>Hỏi lý do → Tư vấn giải pháp khác → Nếu vẫn muốn: tạo ticket CSL phê duyệt</div>
    </div>

    <div style="text-align:center;font-size:1.2em;">↓ (tất cả các trường hợp)</div>
    <div style="background:#E53E3E;color:#fff;padding:10px;border-radius:6px;text-align:center;font-weight:600;">Cập nhật CRM + LMS + Thông báo PH kết quả</div>
    <div style="text-align:center;font-size:1.2em;">↓</div>
    <div style="background:#2D3748;color:#fff;padding:10px;border-radius:6px;text-align:center;">Follow-up sau 3 ngày để đảm bảo PH hài lòng với giải pháp</div>
  </div>
</div>

<div class="key-takeaway">
  <h4>💡 Key Takeaway</h4>
  <p>CS không phải là Sale — nhưng CS chính là người đặt nền tảng cho renewal. <strong>Thời điểm vàng tư vấn gia hạn là buổi 10-12</strong> — không đợi đến buổi 14. Khi Demo Day kết thúc đẹp, PH cảm xúc tốt → xác suất đăng ký lại cao nhất. CS tận dụng khoảnh khắc đó!</p>
</div>`,
          quiz: {
            id: "quiz_csk12_day2_s4",
            title: "Quiz: Bảng giá & Chính sách",
            questions: [
              {
                q: "Combo 24 tháng có ưu đãi đặc biệt gì so với Standard?",
                options: ["Chỉ giảm giá đơn thuần", "Giá tốt nhất + Tặng áo MindX + Ưu tiên lớp cao nhất", "Free 1 tháng học", "Được học 2 môn cùng lúc miễn phí"],
                correct: 1,
                explanation: "Combo 24T: giá tốt nhất + tặng áo MindX + ưu tiên xếp lớp — 3 lợi ích kết hợp."
              },
              {
                q: "CS nên bắt đầu tư vấn renewal (gia hạn) từ buổi thứ mấy?",
                options: ["Buổi 14 (Demo Day)", "Buổi 12-13", "Buổi 10-12", "Buổi 7-8"],
                correct: 2,
                explanation: "Bắt đầu từ buổi 10-12 — đủ thời gian thảo luận, PH đã thấy tiến bộ của con, nhưng chưa sát ngày kết thúc."
              },
              {
                q: "HV lộ trình 24 tháng được bảo lưu tối đa bao nhiêu lần và bao nhiêu ngày?",
                options: ["1 lần, 90 ngày", "2 lần, 90 ngày mỗi lần", "2 lần, 180 ngày tổng cộng", "3 lần, 270 ngày"],
                correct: 2,
                explanation: "Lộ trình 24T: 2 lần bảo lưu, tổng cộng 180 ngày."
              },
              {
                q: "Khi PH muốn bảo lưu, CS phải làm gì trước tiên?",
                options: ["Tạo ticket bảo lưu ngay", "Hỏi lý do và tư vấn giải pháp khác trước", "Chuyển cho CSL xử lý", "Giải thích chính sách bảo lưu"],
                correct: 1,
                explanation: "CS hỏi lý do trước — nếu lý do có thể giải quyết (đổi lịch, đổi GV...) thì tư vấn giải pháp thay cho bảo lưu. Bảo lưu là phương án cuối cùng."
              },
              {
                q: "Gói 1-on-1 phù hợp với học viên nào nhất?",
                options: ["HV muốn tiết kiệm chi phí", "HV lịch bận, cần tiến độ nhanh và linh hoạt", "HV muốn học nhóm với bạn bè", "HV mới bắt đầu học lần đầu"],
                correct: 1,
                explanation: "1-on-1 phù hợp nhất với HV lịch bận (học nhiều môn), cần tiến độ nhanh hoặc cần sự quan tâm đặc biệt từ GV."
              }
            ]
          }
        },
        {
          id: "csk12_day2_s5",
          title: "FAQ Sản phẩm & Độ tuổi",
          icon: "❓",
          content: `<h3>20 Câu hỏi thường gặp nhất từ Phụ huynh — Trả lời chuẩn theo 4 nhóm</h3>
<p>CS cần thuộc 20 câu này như lòng bàn tay. Đây là những câu PH hỏi hàng ngày — trả lời đúng, nhanh, tự tin sẽ tạo uy tín với PH.</p>

<div class="mindset-section">

  <div class="mindset-card growth">
    <h4>📌 Nhóm 1: FAQ về Chương trình (5 câu)</h4>

    <p><strong>Q1: "MindX khác các trung tâm khác như thế nào?"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ 3 điểm khác biệt chính: (1) Lộ trình 4-7 năm có hệ thống — không phải từng khóa rời rạc; (2) Sản phẩm thật sau mỗi khóa — game, app, robot, tranh; (3) Cơ hội thi đấu quốc tế và hỗ trợ du học cho HV hoàn thành lộ trình ạ."</em><br><em style="color:#E53E3E;">Khi nào escalate: Nếu PH so sánh giá chi tiết → nhờ TVTS hỗ trợ</em></p>

    <p><strong>Q2: "Mỗi tuần bé học mấy buổi, mỗi buổi bao lâu?"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ tiêu chuẩn là 1-2 buổi/tuần, mỗi buổi 1.5-2 giờ. Mỗi khóa gồm 14 buổi. Lịch cụ thể theo lớp đang mở tại cơ sở ạ — em kiểm tra và gửi anh/chị lịch hiện có nhé."</em></p>

    <p><strong>Q3: "Lớp bao nhiêu học viên?"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ lớp tiêu chuẩn 6-10 học viên — đủ để GV chú ý cá nhân từng bé. Với gói 1-on-1, bé học riêng hoàn toàn với GV ạ."</em></p>

    <p><strong>Q4: "Bé nghỉ học có được học bù không?"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ có ạ. Khi bé vắng, em sẽ chủ động liên hệ anh/chị để sắp xếp lịch học bù vào một buổi khác cùng cấp. MindX đảm bảo bé không bị mất kiến thức ạ."</em></p>

    <p><strong>Q5: "Học xong có bằng cấp gì không?"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ mỗi khóa hoàn thành bé được cấp Chứng nhận hoàn thành từ MindX Technology School. Quan trọng hơn, bé có portfolio sản phẩm thật — game, app, website, tranh — có giá trị thực tế hơn bằng cấp ạ."</em></p>
  </div>

  <div class="mindset-card customer">
    <h4>📌 Nhóm 2: FAQ về Giáo viên (5 câu)</h4>

    <p><strong>Q6: "Giáo viên MindX như thế nào, có trình độ không?"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ GV MindX đều tốt nghiệp đại học ngành liên quan (CNTT, Mỹ thuật, Kỹ thuật). Trước khi dạy, GV trải qua chương trình đào tạo 3-6 tháng của MindX — từ giáo trình đến kỹ năng dạy trẻ em. GV của lớp bé là [tên], em giới thiệu sơ qua nhé ạ."</em></p>

    <p><strong>Q7: "GV của con tôi là ai? Có thay GV không?"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ GV phụ trách lớp bé là [Tên GV]. Về nguyên tắc, GV cố định trong suốt khóa để hiểu bé tốt nhất. Nếu GV có lý do đặc biệt phải nghỉ, MindX sẽ sắp xếp GV thay thế cùng cấp và thông báo anh/chị trước ạ."</em></p>

    <p><strong>Q8: "Tôi có thể gặp GV để hỏi về tình hình con không?"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ được ạ. Anh/chị có thể trao đổi với GV trực tiếp tại trung tâm sau buổi học. Hoặc anh/chị cho em biết câu hỏi cụ thể — em chuyển cho GV và phản hồi lại anh/chị nhé ạ."</em></p>

    <p><strong>Q9: "Con không hợp với GV, có đổi được không?"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ em ghi nhận ạ. Cho em hỏi thêm về lý do anh/chị thấy chưa phù hợp — để em trao đổi với GV điều chỉnh trước. Nếu sau điều chỉnh vẫn chưa phù hợp, em sẽ đề xuất với CSL về phương án đổi GV ạ."</em><br><em style="color:#E53E3E;">Escalate khi: PH đã phản hồi nhưng vẫn không hài lòng → CSL quyết định</em></p>

    <p><strong>Q10: "GV hay nghỉ không? Chất lượng có ổn định không?"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ MindX có cam kết chất lượng GV — nếu GV nghỉ đột xuất, trung tâm sắp xếp GV thay thế và bé được học bù đầy đủ. Tỷ lệ GV nghỉ không báo trước rất thấp vì MindX có quy trình quản lý GV chặt chẽ ạ."</em></p>
  </div>

  <div class="mindset-card dna">
    <h4>📌 Nhóm 3: FAQ về Tiến độ con (5 câu)</h4>

    <p><strong>Q11: "Làm sao tôi biết con đang tiến bộ?"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ có 3 cách theo dõi: (1) Kết quả Checkpoint trên Compass — anh/chị nhận thông báo tự động; (2) Em gọi cập nhật cho anh/chị sau mỗi CP; (3) Demo Day cuối khóa — bé trình bày sản phẩm trực tiếp. Ngoài ra anh/chị có thể nhắn em bất kỳ lúc nào muốn biết thêm ạ."</em></p>

    <p><strong>Q12: "Con tôi chậm hơn bạn trong lớp, có vấn đề gì không?"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ em hiểu anh/chị lo. Mỗi bé có tốc độ tiếp thu khác nhau — điều quan trọng là bé đang tiến bộ so với chính bé trước đây. Em sẽ trao đổi với GV để thiết kế bài tập phù hợp hơn với tốc độ bé và cập nhật anh/chị sau buổi học thứ [X] ạ."</em></p>

    <p><strong>Q13: "Con không chịu làm bài tập về nhà, tôi phải làm gì?"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ BTVN trên Denise rất quan trọng để bé củng cố kiến thức. Em sẽ nhắc bé trực tiếp trong buổi học sau. Anh/chị có thể hỗ trợ bé bằng cách dành 15-20 phút ngồi cạnh khi bé làm — không cần hiểu nội dung, chỉ cần có mặt là bé sẽ tập trung hơn ạ."</em></p>

    <p><strong>Q14: "Con học xong 1 khóa rồi thì lên khóa tiếp theo như thế nào?"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ sau khi bé hoàn thành khóa hiện tại, GV sẽ đánh giá bé đủ điều kiện lên level tiếp không. Nếu đủ, em sẽ liên hệ anh/chị về lịch lớp mới. Thông thường Demo Day của khóa cũ và khai giảng khóa mới cách nhau 1-2 tuần ạ."</em></p>

    <p><strong>Q15: "Sau bao lâu con tôi sẽ làm được sản phẩm thật?"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ mỗi khóa 14 buổi là 1 sản phẩm hoàn chỉnh ạ. Khóa Scratch: game Scratch. Khóa Game Creator: game 2D. App Producer: app điện thoại. Web Dev: website. Bé làm sản phẩm theo từng module — tiến bộ rõ ràng và có thể thấy được ạ."</em></p>
  </div>

  <div class="mindset-card growth">
    <h4>📌 Nhóm 4: FAQ về Chính sách (5 câu)</h4>

    <p><strong>Q16: "Tôi muốn cho con nghỉ 1 tháng vì đi du lịch, làm sao?"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ anh/chị có thể bảo lưu hoặc học bù ạ. Nếu nghỉ trong thời gian ngắn (dưới 2 tuần), em sắp xếp học bù. Nếu dài hơn, em làm thủ tục bảo lưu cho anh/chị — bé quay lại sẽ vào lớp phù hợp nhất lúc đó ạ."</em></p>

    <p><strong>Q17: "Con không muốn học Coding nữa, muốn chuyển sang Art, có được không?"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ được ạ. Có thể chuyển sang Art ở cấp phù hợp với độ tuổi bé. Em sẽ tư vấn cụ thể hơn — anh/chị muốn chuyển ngay từ module hiện tại hay đợi hoàn thành khóa đang học? Mỗi phương án có ưu nhược điểm khác nhau ạ."</em><br><em style="color:#E53E3E;">Escalate khi: Cần tính phí chênh lệch → CSL phê duyệt</em></p>

    <p><strong>Q18: "Con tôi muốn học tại cơ sở khác vì ở gần nhà hơn"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ được ạ. Em liên hệ cơ sở [Tên] để kiểm tra có lớp cùng cấp phù hợp không. Nếu có, em sắp xếp chuyển cho bé và đảm bảo bé tiếp tục học từ đúng buổi đang dở ạ."</em></p>

    <p><strong>Q19: "Nếu tôi đăng ký mà không vừa ý, có được hoàn tiền không?"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ MindX có chính sách hoàn phí cho phần học phí chưa sử dụng. Cụ thể là 80% học phí các khóa chưa bắt đầu (MindX giữ 20% phí xử lý). Em có thể tư vấn chi tiết hơn nếu anh/chị muốn — nhưng em cũng muốn trước tiên hỏi thêm về lý do để xem có giải pháp nào phù hợp hơn không ạ."</em></p>

    <p><strong>Q20: "Tôi có thể cho em/anh của con học cùng không?"</strong></p>
    <p style="padding-left:15px;color:#059669;"><em>"Dạ được ạ và rất vui vì anh/chị tin tưởng! Anh/chị em ruột học cùng MindX thường có chính sách ưu đãi — em xác nhận với CSL cụ thể và báo lại anh/chị nhé ạ."</em></p>
  </div>

</div>

<div class="key-takeaway">
  <h4>💡 Key Takeaway</h4>
  <p>Khi trả lời FAQ, luôn nhớ công thức: <strong>Xác nhận câu hỏi → Trả lời cụ thể → Hỏi lại một câu để hiểu sâu hơn</strong>. Ví dụ: "Dạ bé muốn chuyển Art ạ. Em tư vấn ngay: [nội dung]. Anh/chị muốn chuyển ngay hay đợi xong khóa hiện tại ạ?" — câu hỏi lại giúp CS hiểu nhu cầu thật và đề xuất giải pháp phù hợp hơn.</p>
</div>`,
          quiz: {
            id: "quiz_csk12_day2_s5",
            title: "Quiz: FAQ Sản phẩm & Độ tuổi",
            questions: [
              {
                q: "PH hỏi 'Học xong có bằng cấp gì không?', CS trả lời thế nào?",
                options: ["'Không có ạ'", "'Có bằng đại học ạ'", "'Có chứng nhận hoàn thành từ MindX + portfolio sản phẩm thật — quan trọng hơn bằng cấp'", "'Anh/chị hỏi TVTS ạ'"],
                correct: 2,
                explanation: "Trả lời đúng: Chứng nhận hoàn thành + nhấn mạnh portfolio sản phẩm thật có giá trị thực tế — đây là điểm khác biệt của MindX."
              },
              {
                q: "PH nói 'Con không muốn làm BTVN', CS nên hướng dẫn PH thế nào?",
                options: ["'Anh/chị cứ để bé tự quyết'", "'Để em nhắc bé + anh/chị ngồi cạnh 15-20 phút khi bé làm — không cần hiểu nội dung'", "'BTVN không quan trọng lắm ạ'", "'Bé không làm thì sẽ bị điểm kém'"],
                correct: 1,
                explanation: "CS nhận trách nhiệm nhắc bé + gợi ý PH hỗ trợ thực tế (ngồi cạnh) — không đổ lỗi cho bé hay PH."
              },
              {
                q: "PH muốn con chuyển từ Coding sang Art, CS cần làm gì ngay?",
                options: ["Chuyển ngay theo yêu cầu", "Hỏi thêm: muốn chuyển ngay hay sau khi xong khóa hiện tại, rồi tư vấn phù hợp + báo CSL về phí chênh lệch", "Từ chối vì khác lộ trình", "Chuyển cho TVTS xử lý"],
                correct: 1,
                explanation: "CS cần hỏi thêm để hiểu nhu cầu thật → tư vấn phương án phù hợp → các yếu tố phí cần CSL duyệt."
              },
              {
                q: "Khi PH hỏi về chính sách hoàn phí, CS nên làm gì đầu tiên?",
                options: ["Giải thích ngay 80%/20%", "Làm thủ tục hoàn phí ngay", "Hỏi lý do trước để xem có giải pháp nào phù hợp hơn", "Chuyển cho CM"],
                correct: 2,
                explanation: "Hỏi lý do trước — có thể PH có vấn đề có thể giải quyết khác (đổi lớp, bảo lưu). Hoàn phí là phương án cuối cùng."
              },
              {
                q: "Có bao nhiêu nhóm FAQ được phân loại trong bài học này?",
                options: ["3 nhóm", "4 nhóm", "5 nhóm", "6 nhóm"],
                correct: 1,
                explanation: "4 nhóm: (1) FAQ về Chương trình; (2) FAQ về Giáo viên; (3) FAQ về Tiến độ con; (4) FAQ về Chính sách."
              }
            ]
          }
        }
      ]
    },

    /* ==================== CS K12 DAY 3 ==================== */
    {
      id: "csk12_day3",
      day: 3,
      title: "VẬN HÀNH LỚP HỌC",
      subtitle: "Class Operations",
      icon: "📋",
      color: "#059669",
      sections: [
        {
  id: "csk12_day3_s1",
  title: "Quy trình quản lý lớp học 14 buổi",
  icon: "📅",
  content: `<h3>Timeline 14 buổi — CS làm gì mỗi mốc quan trọng</h3>
<p>Đây là bài học quan trọng nhất của CS K12. Mỗi khóa học có <strong>6 mốc chính</strong> trong 14 buổi — CS cần biết chính xác phải làm gì tại từng mốc, không được bỏ sót.</p>

<div style="background:#F0FDF4;padding:15px;border-radius:8px;margin:10px 0;text-align:center;border:2px solid #059669;">
  <strong style="color:#059669;">Sơ đồ tiến trình 14 buổi:</strong><br>
  <span style="font-size:0.9em;">Khai giảng → <strong>Buổi 1</strong> (Greeting) → <strong>Buổi 3</strong> (Check-in) → <strong>Buổi 7</strong> (Mid-course) → <strong>Buổi 10</strong> (Re-enroll 1) → <strong>Buổi 12</strong> (Re-enroll push) → <strong>Buổi 14</strong> (Demo + Close)</span>
</div>

<h4>Mốc 1 — TRƯỚC KHAI GIẢNG</h4>
<div class="insight-card">
  <div class="insight-number">0</div>
  <div class="insight-body">
    <h4>Chuẩn bị trước buổi 1</h4>
    <ul>
      <li><strong>Tạo lớp trên LMS:</strong> Mã lớp, sĩ số, môn học, level, GV phụ trách</li>
      <li><strong>Tạo Zalo group:</strong> Tên chuẩn MINDX-[Mã lớp]-[Tên CS]. Thêm PH vào group</li>
      <li><strong>Greeting Call:</strong> Gọi từng PH xác nhận thông tin, lịch học, thiết bị cần chuẩn bị</li>
      <li><strong>Chuẩn bị phòng học:</strong> Kiểm tra máy tính, phần mềm, điều hòa 24-28°C, bàn ghế</li>
      <li><strong>Nhắc lịch:</strong> Zalo message trước 3 ngày + trước 1 ngày</li>
    </ul>
    <div class="script-box"><strong>Zalo message nhắc lịch khai giảng:</strong><br><em>"Dạ anh/chị [Tên PH] ơi! 🎉 Ngày mai (Thứ [X], [Ngày]) là buổi học đầu tiên của bé [Tên] tại MindX [Cơ sở] rồi ạ.<br>📍 Địa chỉ: [Địa chỉ]<br>⏰ Giờ học: [Giờ]<br>🖥️ Bé nhớ mang theo [laptop/thiết bị] ạ!<br>Anh/chị và bé nhớ đến sớm 10 phút nhé. Em rất mong gặp bé! 😊"</em></div>
  </div>
</div>

<h4>Mốc 2 — BUỔI 1: Welcome & First Impression</h4>
<div class="insight-card">
  <div class="insight-number">1</div>
  <div class="insight-body">
    <h4>Mục tiêu: Tạo ấn tượng đầu tiên xuất sắc</h4>
    <p><strong>Trong buổi học:</strong> CS đón HV tại cửa, giới thiệu phòng học, hỗ trợ setup máy, chụp ảnh HV trong lớp.</p>
    <p><strong>Sau buổi học (trong 2 giờ — "Golden Hour"):</strong></p>
    <div class="script-box"><strong>Checklist "Golden Hour" sau buổi 1:</strong><br>
    ☐ Gửi ảnh/video HV trong lớp vào Zalo group<br>
    ☐ Gọi cho từng PH (nếu ≤ 5 HV) hoặc gọi ngẫu nhiên 2-3 PH báo tình hình<br>
    ☐ Note đánh giá từng HV: hứng thú / trầm / chậm / đặc biệt<br>
    ☐ Cập nhật LMS: điểm danh buổi 1<br>
    ☐ Hỏi GV: HV nào cần chú ý đặc biệt?</div>
    <div class="script-box"><strong>Script gọi PH sau buổi 1:</strong><br><em>"Dạ em chào anh/chị [Tên]. Em là [Tên CS] từ MindX ạ. Bé [Tên] hôm nay đã tham gia buổi học đầu tiên rồi ạ! 🎉<br>Em muốn cập nhật nhanh: bé học rất [hào hứng / tập trung / chăm chỉ], GV [Tên GV] đánh giá bé [nhận xét tích cực]. Anh/chị thấy bé về nhà có chia sẻ gì không ạ?<br>[Lắng nghe]<br>Em sẽ tiếp tục theo dõi bé trong các buổi tiếp theo và cập nhật thường xuyên cho anh/chị ạ!"</em></div>
  </div>
</div>

<h4>Mốc 3 — BUỔI 3: Check-in đầu tiên</h4>
<div class="insight-card">
  <div class="insight-number">3</div>
  <div class="insight-body">
    <h4>Mục tiêu: Phát hiện sớm vấn đề, củng cố mối quan hệ</h4>
    <p>Sau 3 buổi, HV đã bắt đầu cảm nhận rõ hơn về lớp học. Đây là thời điểm để CS kiểm tra xem HV có đang thích nghi tốt không.</p>
    <div class="script-box"><strong>Zalo message check-in buổi 3:</strong><br><em>"Dạ anh/chị [Tên], bé [Tên] đã học được 3 buổi rồi ạ! ⭐<br>Em muốn hỏi thăm: Anh/chị thấy bé thế nào sau các buổi học? Bé có hay kể về lớp học không ạ? Có điều gì anh/chị muốn chia sẻ với em không?<br>Em luôn sẵn sàng hỗ trợ ạ! 😊"</em></div>
    <p><strong>Các dấu hiệu cần chú ý ở buổi 3:</strong></p>
    <ul>
      <li>🔴 HV đã vắng ≥ 2 buổi → gọi PH ngay</li>
      <li>🟡 HV ít tương tác, không hoàn thành bài → trao đổi với GV</li>
      <li>🟢 HV hào hứng, hay hỏi → note để khen PH</li>
    </ul>
  </div>
</div>

<h4>Mốc 4 — BUỔI 7: Mid-course Report</h4>
<div class="insight-card">
  <div class="insight-number">7</div>
  <div class="insight-body">
    <h4>Mục tiêu: Báo cáo tiến độ giữa khóa, xây dựng tin tưởng</h4>
    <p>Buổi 7 là điểm giữa khóa. CS gọi PH với báo cáo chi tiết — đây là cơ hội lớn để củng cố niềm tin và đặt nền móng cho việc gia hạn.</p>
    <table style="width:100%;border-collapse:collapse;font-size:0.85em;margin:10px 0;">
      <tr style="background:#059669;color:#fff;"><th style="padding:8px;">Nội dung báo cáo buổi 7</th><th style="padding:8px;">Chi tiết</th></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Điểm mạnh của HV</td><td style="padding:8px;border:1px solid #ddd;">Ít nhất 2 điểm mạnh cụ thể từ GV</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Tiến độ học tập</td><td style="padding:8px;border:1px solid #ddd;">Đã hoàn thành CP1 chưa? Điểm? Nhận xét?</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Chuyên cần</td><td style="padding:8px;border:1px solid #ddd;">Số buổi đã học / vắng / đã bù</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Cần cải thiện</td><td style="padding:8px;border:1px solid #ddd;">1 điểm cần cải thiện + kế hoạch hỗ trợ</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Preview 7 buổi còn lại</td><td style="padding:8px;border:1px solid #ddd;">Sản phẩm cuối khóa, Demo Day</td></tr>
    </table>
    <div class="script-box"><strong>Script gọi PH buổi 7:</strong><br><em>"Dạ anh/chị ơi, bé [Tên] đã học được đúng một nửa khóa học rồi ạ — 7 buổi! Em muốn báo cáo tình hình học tập của bé ạ.<br><strong>Điểm mạnh:</strong> GV [Tên] nhận xét bé [điểm mạnh 1] và [điểm mạnh 2]. Bé tiến bộ rất nhiều so với buổi đầu ạ.<br><strong>Tiến độ:</strong> Bé đã hoàn thành CP1 đạt [điểm], GV đánh giá [nhận xét].<br><strong>7 buổi còn lại:</strong> Bé sẽ tiếp tục xây dựng [sản phẩm cuối khóa] và trình bày tại Demo Day vào cuối khóa ạ.<br>Anh/chị có câu hỏi gì về tiến độ của bé không ạ?"</em></div>
  </div>
</div>

<h4>Mốc 5 — BUỔI 10: First Re-enroll Reminder</h4>
<div class="insight-card">
  <div class="insight-number">10</div>
  <div class="insight-body">
    <h4>Mục tiêu: Gieo hạt ý tưởng về khóa tiếp theo</h4>
    <p>Không cần "push" mạnh — chỉ cần đề cập nhẹ nhàng để PH bắt đầu nghĩ đến việc tiếp tục.</p>
    <div class="script-box"><strong>Zalo message buổi 10:</strong><br><em>"Anh/chị ơi, bé [Tên] đang tiến vào những buổi cuối khóa rồi ạ! Bé đang làm [tên sản phẩm] — em rất mong anh/chị thấy thành quả của bé tại Demo Day 🎉<br>Nhân tiện em muốn hỏi: anh/chị có muốn em tư vấn về lộ trình tiếp theo sau khi bé hoàn thành khóa này không ạ? Bé [Tên] học xong [khóa hiện tại] có thể tiếp tục với [khóa tiếp theo] ạ!"</em></div>
  </div>
</div>

<h4>Mốc 6 — BUỔI 12: Re-enroll Push</h4>
<div class="insight-card">
  <div class="insight-number">12</div>
  <div class="insight-body">
    <h4>Mục tiêu: Chốt ý định gia hạn, giới thiệu cụ thể khóa tiếp</h4>
    <p>Gọi điện (không nhắn tin) — cuộc gọi thật sự quan trọng hơn để có phản hồi ngay.</p>
    <div class="script-box"><strong>Script gọi buổi 12:</strong><br><em>"Dạ anh/chị, bé [Tên] còn 2 buổi nữa là hoàn thành khóa [tên khóa] rồi ạ! Em gọi để hỏi thăm và cũng muốn tư vấn về bước tiếp theo cho bé ạ.<br>Khóa tiếp theo phù hợp với bé là [Tên khóa tiếp], dành cho [độ tuổi/level]. Bé sẽ học [mô tả ngắn]. Em có thể giữ chỗ cho bé trong lớp [thứ/giờ] bắt đầu từ [ngày] ạ.<br>Nếu anh/chị đăng ký trước Demo Day, bé còn được [ưu đãi nếu có] ạ. Anh/chị muốn em giữ chỗ không ạ?"</em></div>
  </div>
</div>

<h4>Mốc 7 — BUỔI 14: Demo Day + Close Renewal</h4>
<div class="insight-card">
  <div class="insight-number">14</div>
  <div class="insight-body">
    <h4>Mục tiêu: Wrap-up hoàn hảo, chốt gia hạn, thu CSAT</h4>
    <p><strong>Nhiệm vụ CS trong Demo Day:</strong></p>
    <ul>
      <li>Host buổi demo: giới thiệu HV, điều phối thứ tự trình bày</li>
      <li>Chụp ảnh/quay video từng HV trình bày sản phẩm</li>
      <li>Gửi riêng video từng bé cho PH sau buổi + lời nhận xét cá nhân</li>
      <li>Xin CSAT (Customer Satisfaction) từ PH tại chỗ hoặc qua Zalo</li>
      <li>Tư vấn re-enroll: giữ chỗ lớp tiếp theo</li>
      <li>Phát chứng nhận hoàn thành cho HV</li>
    </ul>
    <div class="script-box"><strong>Zalo gửi video sau Demo Day:</strong><br><em>"Anh/chị ơi! 🎉 Đây là video bé [Tên] trình bày sản phẩm [tên SP] hôm nay ạ!<br>Em thấy bé tiến bộ rất nhiều — đặc biệt [nhận xét cụ thể, VD: phần thiết kế rất sáng tạo / logic code rất chắc chắn]. Anh/chị xem nhé!<br>Em rất vui vì đã được đồng hành cùng bé [Tên] suốt khóa học này ❤️"</em></div>

    <div class="key-takeaway">
      <strong>Lịch in (Printable Calendar Template):</strong> CS nên in lịch 14 buổi dán tại bàn làm việc với các mốc đã đánh dấu màu: Buổi 1 (đỏ), Buổi 3 (cam), Buổi 7 (vàng), Buổi 10 (xanh lá), Buổi 12 (xanh dương), Buổi 14 (tím). Mỗi mốc ghi rõ "Phải làm gì".
    </div>
  </div>
</div>

<div class="key-takeaway">
  <strong>Takeaway quan trọng:</strong> 14 buổi = 6 mốc = 6 cơ hội xây dựng mối quan hệ với PH. CS xuất sắc không chờ PH hỏi — CS chủ động ở đúng mốc đúng thời điểm.
</div>

<div class="practice-exercise">
  <strong>Bài tập thực hành:</strong> Lấy 1 lớp bạn đang quản lý. Điền vào bảng: Lớp đang ở buổi thứ mấy? Mốc tiếp theo là gì? Bạn sẽ làm gì trong 48h tới?
</div>

<div class="compare-table">
  <strong>CS xuất sắc vs CS thông thường:</strong>
  <table style="width:100%;border-collapse:collapse;font-size:0.85em;margin:8px 0;">
    <tr style="background:#E53E3E;color:#fff;"><th style="padding:8px;">Mốc</th><th style="padding:8px;">CS thông thường</th><th style="padding:8px;">CS xuất sắc</th></tr>
    <tr><td style="padding:8px;border:1px solid #ddd;">Buổi 1</td><td style="padding:8px;border:1px solid #ddd;">Điểm danh xong là xong</td><td style="padding:8px;border:1px solid #ddd;">Gọi PH trong 2h, gửi ảnh, ghi note HV</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd;">Buổi 7</td><td style="padding:8px;border:1px solid #ddd;">Chờ PH hỏi</td><td style="padding:8px;border:1px solid #ddd;">Chủ động gọi báo cáo giữa khóa</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd;">Buổi 10</td><td style="padding:8px;border:1px solid #ddd;">Không đề cập re-enroll</td><td style="padding:8px;border:1px solid #ddd;">Gieo hạt nhẹ nhàng về khóa tiếp</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd;">Buổi 14</td><td style="padding:8px;border:1px solid #ddd;">Chỉ tổ chức Demo</td><td style="padding:8px;border:1px solid #ddd;">Video riêng từng bé + lời nhận xét cá nhân + chốt re-enroll</td></tr>
  </table>
</div>`,
  quiz: {
    id: "quiz_csk12_day3_s1",
    title: "Quiz: Quy trình 14 buổi",
    questions: [
      { q: "Có bao nhiêu mốc chính trong 14 buổi CS cần chủ động hành động?", options: ["3 mốc", "4 mốc", "6 mốc", "14 mốc"], correct: 2, explanation: "6 mốc: Buổi 1, Buổi 3, Buổi 7, Buổi 10, Buổi 12, Buổi 14 — mỗi mốc có mục tiêu riêng." },
      { q: "'Golden Hour' sau buổi 1 gồm bao nhiêu việc CS phải làm?", options: ["2 việc", "3 việc", "5 việc", "Chỉ cần gọi PH"], correct: 2, explanation: "5 việc trong Golden Hour: gửi ảnh group, gọi PH, note HV, cập nhật LMS, hỏi GV." },
      { q: "Mục tiêu chính của cuộc gọi buổi 7 là?", options: ["Chốt re-enroll ngay", "Báo cáo tiến độ giữa khóa và củng cố tin tưởng", "Thông báo Demo Day", "Hỏi PH có phàn nàn không"], correct: 1, explanation: "Buổi 7 = báo cáo giữa khóa — CS xây niềm tin, chưa cần push re-enroll mạnh." },
      { q: "Tại buổi 12, CS nên liên hệ PH bằng cách nào?", options: ["Chỉ nhắn Zalo", "Gọi điện — quan trọng hơn nhắn tin", "Gửi email", "Chờ PH liên hệ"], correct: 1, explanation: "Buổi 12 cần gọi điện để có phản hồi trực tiếp — nhắn tin dễ bị bỏ qua khi đây là cuộc nói chuyện quan trọng về re-enroll." },
      { q: "Sau Demo Day, CS gửi video riêng cho từng PH với mục đích gì?", options: ["Chỉ để thân thiện", "Tạo 'wow moment' — vượt mong đợi, tăng cảm xúc gắn kết", "Làm bằng chứng lưu hồ sơ", "Báo cáo cho CSL"], correct: 1, explanation: "Video riêng kèm nhận xét cá nhân tạo wow moment — PH cảm thấy bé được quan tâm đặc biệt, tăng tỷ lệ gia hạn." }
    ]
  }
},
        {
  id: "csk12_day3_s2",
  title: "Quy trình hành chính — Phần 1",
  icon: "📄",
  content: `<h3>Hành chính lớp học — Những việc CS phải làm đúng quy trình</h3>
<p>Hành chính không phải "việc phụ" — sai quy trình hành chính có thể gây tranh chấp, mất dữ liệu, ảnh hưởng quyền lợi HV và uy tín MindX.</p>

<h4>1. Mở lớp mới — Checklist chuẩn bị</h4>
<div class="insight-card">
  <div class="insight-number">🏫</div>
  <div class="insight-body">
    <table style="width:100%;border-collapse:collapse;font-size:0.85em;">
      <tr style="background:#059669;color:#fff;"><th style="padding:8px;">Hạng mục</th><th style="padding:8px;">Chi tiết</th><th style="padding:8px;">Deadline</th></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Tạo lớp trên LMS</strong></td><td style="padding:8px;border:1px solid #ddd;">Mã lớp, sĩ số, môn học, level, GV phụ trách, lịch học</td><td style="padding:8px;border:1px solid #ddd;">Trước khai giảng 3 ngày</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Thêm HV vào lớp</strong></td><td style="padding:8px;border:1px solid #ddd;">Cập nhật Student Profile đầy đủ: ngày sinh, giới tính, ảnh, email PH</td><td style="padding:8px;border:1px solid #ddd;">48h sau khi PH thanh toán</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Tạo Zalo group</strong></td><td style="padding:8px;border:1px solid #ddd;">Tên: MINDX-[Mã lớp]-[Tên CS]. Thêm PH, GV, CSL</td><td style="padding:8px;border:1px solid #ddd;">Trước khai giảng 2 ngày</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Kiểm tra phòng học</strong></td><td style="padding:8px;border:1px solid #ddd;">Máy tính, phần mềm, điều hòa 24-28°C, HDMI, bảng, ghế</td><td style="padding:8px;border:1px solid #ddd;">Trước buổi 1 30 phút</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Thiết bị Robotics</strong></td><td style="padding:8px;border:1px solid #ddd;">Kiểm tra LEGO/VEX đủ bộ, pin đủ điện, đã cài VEXcode</td><td style="padding:8px;border:1px solid #ddd;">Trước buổi 1 1 tiếng</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Greeting Call</strong></td><td style="padding:8px;border:1px solid #ddd;">Gọi từng PH xác nhận thông tin, hướng dẫn chuẩn bị</td><td style="padding:8px;border:1px solid #ddd;">Trước khai giảng 1-2 ngày</td></tr>
    </table>
  </div>
</div>

<h4>2. Điểm danh & Quản lý vắng học</h4>
<div class="insight-card">
  <div class="insight-number">📋</div>
  <div class="insight-body">
    <p><strong>Quy trình điểm danh:</strong> GV điểm danh trên LMS đầu mỗi buổi → CS kiểm tra cuối ngày → Liên hệ PH của HV vắng (nếu chưa báo trước)</p>
    <table style="width:100%;border-collapse:collapse;font-size:0.85em;margin:10px 0;">
      <tr style="background:#E53E3E;color:#fff;"><th style="padding:8px;">Tình huống</th><th style="padding:8px;">CS xử lý trong bao lâu</th><th style="padding:8px;">Hành động</th></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Vắng có báo trước</td><td style="padding:8px;border:1px solid #ddd;">Ngay khi nhận thông báo</td><td style="padding:8px;border:1px solid #ddd;">Sắp xếp lịch học bù, thông báo lại cho PH</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Vắng không báo — vắng 1 buổi</td><td style="padding:8px;border:1px solid #ddd;">Trong ngày</td><td style="padding:8px;border:1px solid #ddd;">Zalo/Gọi PH hỏi thăm, sắp xếp học bù</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Vắng 2 buổi liên tiếp</td><td style="padding:8px;border:1px solid #ddd;">Ngay sau buổi thứ 2</td><td style="padding:8px;border:1px solid #ddd;">Gọi PH tìm hiểu lý do sâu hơn, đề xuất giải pháp</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Vắng 3+ buổi</td><td style="padding:8px;border:1px solid #ddd;">Ngay hôm đó</td><td style="padding:8px;border:1px solid #ddd;">Escalate CSL + gọi PH + tư vấn bảo lưu/chuyển lớp</td></tr>
    </table>
    <div class="script-box"><strong>Script gọi PH khi HV vắng không báo:</strong><br><em>"Dạ em chào anh/chị [Tên]. Em là [CS] từ MindX ạ. Em gọi vì hôm nay bé [Tên] chưa đến lớp — anh/chị và bé có ổn không ạ?<br>[Lắng nghe]<br>Dạ anh/chị không lo ạ, em sẽ sắp xếp lịch học bù cho bé ạ. Anh/chị xem thứ [X] lúc [giờ] có phù hợp không ạ?"</em></div>
  </div>
</div>

<h4>3. Xử lý sự cố trong giờ học</h4>
<div class="insight-card">
  <div class="insight-number">⚠️</div>
  <div class="insight-body">
    <table style="width:100%;border-collapse:collapse;font-size:0.85em;">
      <tr style="background:#D97706;color:#fff;"><th style="padding:8px;">Sự cố</th><th style="padding:8px;">CS làm ngay</th><th style="padding:8px;">Báo cáo ai</th></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;"><strong>GV đột xuất vắng</strong></td><td style="padding:8px;border:1px solid #ddd;">Gọi TC (Teaching Coordinator) xin GV thay thế. Nếu không có: thông báo PH hoãn + hẹn lịch bù ngay</td><td style="padding:8px;border:1px solid #ddd;">CSL + CM</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Máy tính/thiết bị hỏng</strong></td><td style="padding:8px;border:1px solid #ddd;">Hỗ trợ HV dùng máy dự phòng nếu có. Báo IT sửa chữa. Ghi nhận vào báo cáo sự cố</td><td style="padding:8px;border:1px solid #ddd;">IT + CSL</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;"><strong>HV gây mất trật tự</strong></td><td style="padding:8px;border:1px solid #ddd;">Hỗ trợ GV xử lý nhẹ nhàng. Nếu nghiêm trọng: gọi PH ngay</td><td style="padding:8px;border:1px solid #ddd;">CSL nếu cần</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;"><strong>HV bị thương/ốm trong lớp</strong></td><td style="padding:8px;border:1px solid #ddd;">Sơ cứu cơ bản → gọi PH → đưa HV ra ngoài nghỉ → báo cáo CM</td><td style="padding:8px;border:1px solid #ddd;">CM + PH ngay lập tức</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Điều hòa hỏng/mất điện</strong></td><td style="padding:8px;border:1px solid #ddd;">Chuyển phòng dự phòng nếu có. Nếu không: tạm dừng buổi học, hẹn bù</td><td style="padding:8px;border:1px solid #ddd;">CSL + kỹ thuật</td></tr>
    </table>
    <div class="key-takeaway"><strong>Nguyên tắc xử lý sự cố:</strong> An toàn HV > Giữ buổi học > Thông báo PH > Báo cáo quản lý. Không bao giờ im lặng với sự cố — luôn cập nhật PH trong 30 phút.</div>
  </div>
</div>

<div class="practice-exercise">
  <strong>Bài tập:</strong> Đọc 3 tình huống sau và viết ra quy trình xử lý đúng:<br>
  1. Buổi 6, GV báo bệnh lúc 8h sáng, lớp bắt đầu 9h<br>
  2. Máy tính của HV bị treo giữa buổi Checkpoint<br>
  3. PH gọi vào giờ học hỏi vì sao con về nhà cứ khóc
</div>`,
  quiz: {
    id: "quiz_csk12_day3_s2",
    title: "Quiz: Hành chính Phần 1",
    questions: [
      { q: "Student Profile cần được cập nhật đầy đủ trong bao lâu sau khi PH thanh toán?", options: ["24 giờ", "48 giờ", "72 giờ", "1 tuần"], correct: 1, explanation: "Thông tin HV + PH phải cập nhật trong 48 giờ kể từ khi PH hoàn tất học phí." },
      { q: "HV vắng không báo 1 buổi, CS cần liên hệ PH trong thời gian nào?", options: ["Ngay lập tức", "Trong ngày hôm đó", "Sau 24h", "Chờ 3 ngày"], correct: 1, explanation: "Vắng không báo → CS liên hệ PH trong ngày — không để qua ngày hôm sau." },
      { q: "GV đột xuất vắng, CS cần báo cáo cho ai?", options: ["Chỉ báo PH", "CSL và CM", "Chỉ TC", "Không cần báo"], correct: 1, explanation: "GV vắng đột xuất → báo TC xin GV thay + thông báo PH + báo CSL và CM." },
      { q: "Checklist phòng học trước buổi học cần kiểm tra những gì cho lớp Robotics?", options: ["Chỉ cần kiểm tra điều hòa", "LEGO/VEX đủ bộ, pin đủ điện, đã cài VEXcode", "Chỉ cần máy tính", "Kiểm tra sách giáo khoa"], correct: 1, explanation: "Lớp Robotics cần kiểm tra đặc biệt: thiết bị LEGO/VEX đủ bộ, pin sạc đủ, phần mềm VEXcode đã cài đúng version." },
      { q: "Khi HV bị thương trong lớp, hành động đúng thứ tự là?", options: ["Gọi PH → Sơ cứu → Báo CM", "Sơ cứu → Gọi PH → Đưa ra ngoài → Báo CM", "Báo CM → Gọi PH → Sơ cứu", "Chờ GV xử lý"], correct: 1, explanation: "Thứ tự đúng: Sơ cứu cơ bản → Gọi PH ngay → Đưa HV ra ngoài nghỉ → Báo cáo CM." }
    ]
  }
},
        {
  id: "csk12_day3_s3",
  title: "Quy trình hành chính — Phần 2",
  icon: "📑",
  content: `<h3>Các quy trình đặc biệt — Bảo lưu, Chuyển lớp, Hoàn phí</h3>
<p>Đây là những tình huống CS gặp thường xuyên và cần xử lý <strong>đúng quy trình</strong> để bảo vệ quyền lợi HV và tránh rủi ro cho MindX.</p>

<h4>Quyết định flowchart: PHHS yêu cầu X → CS làm gì?</h4>
<div style="background:#EFF6FF;padding:15px;border-radius:8px;margin:10px 0;font-size:0.88em;">
  <p>🔵 <strong>PH muốn bảo lưu</strong> → Hỏi lý do → Đề xuất giải pháp thay (đổi lịch/chuyển lớp) → Nếu bất khả kháng: Tạo ticket bảo lưu trên LMS → CSL duyệt → Update CRM</p>
  <p>🟠 <strong>PH muốn chuyển lớp</strong> → Kiểm tra lớp phù hợp → Xác nhận PH → Update LMS/CRM → Thông báo GV mới</p>
  <p>🔴 <strong>PH muốn hoàn phí</strong> → Tìm hiểu lý do → Đề xuất bảo lưu/chuyển lớp trước → Nếu vẫn muốn hoàn: Tính HP theo công thức → Tạo ticket dropout → CSL + CM duyệt → Tài chính xử lý trong 5 ngày</p>
  <p>🟢 <strong>PH muốn chuyển cơ sở</strong> → Kiểm tra lớp tại cơ sở đích → Xác nhận ngày bắt đầu → Update hệ thống → Bàn giao cho CS cơ sở kia</p>
  <p>🟡 <strong>PH muốn chuyển khối (đổi môn)</strong> → Tư vấn lộ trình mới → Tính phí chênh lệch → Update CRM/LMS → Thêm HV vào lớp mới</p>
</div>

<h4>1. Quy trình Bảo lưu — Chi tiết từng bước</h4>
<div class="insight-card">
  <div class="insight-number">⏸️</div>
  <div class="insight-body">
    <table style="width:100%;border-collapse:collapse;font-size:0.85em;">
      <tr style="background:#2563EB;color:#fff;"><th style="padding:8px;">Lộ trình</th><th style="padding:8px;">Số lần bảo lưu</th><th style="padding:8px;">Thời gian tối đa</th></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">12 tháng</td><td style="padding:8px;border:1px solid #ddd;">1 lần</td><td style="padding:8px;border:1px solid #ddd;">90 ngày</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">24 tháng</td><td style="padding:8px;border:1px solid #ddd;">2 lần</td><td style="padding:8px;border:1px solid #ddd;">180 ngày</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Bảo trợ 3 năm</td><td style="padding:8px;border:1px solid #ddd;">3 lần</td><td style="padding:8px;border:1px solid #ddd;">270 ngày</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Bảo trợ 5 năm</td><td style="padding:8px;border:1px solid #ddd;">3 lần</td><td style="padding:8px;border:1px solid #ddd;">450 ngày (max 365/lần)</td></tr>
    </table>
    <p style="margin-top:10px;"><strong>Bảo lưu vượt hạn:</strong> Chỉ từ 12T trở lên, cần giấy tờ chứng minh (bệnh/du học/chuyển trường), tối đa 365 ngày, chỉ 1 lần.</p>
    <p><strong>Quy trình:</strong> PH yêu cầu → CS hỏi lý do, đề xuất giải pháp → Nếu bảo lưu: Tạo ticket LMS → CSL duyệt → Cập nhật ngày bảo lưu trên CRM → Thông báo PH qua Zalo</p>
    <div class="script-box"><strong>Script tư vấn khi PH muốn bảo lưu:</strong><br><em>"Dạ em hiểu anh/chị. Trước khi xử lý bảo lưu, em xin phép hỏi thêm — lý do cụ thể là gì để em có thể hỗ trợ tốt nhất ạ?<br>[Nếu lý do có thể giải quyết] 'Dạ như vậy, anh/chị có muốn em thử chuyển bé sang lớp [thứ/giờ] khác phù hợp hơn không ạ? Em có thể sắp xếp ngay ạ.'<br>[Nếu bất khả kháng] 'Dạ em hiểu hoàn toàn. Em sẽ xử lý bảo lưu cho bé. Quyền lợi bảo lưu của bé là [X] ngày. Khi anh/chị sẵn sàng cho bé học lại, em sẽ sắp xếp lớp phù hợp nhất ạ.'"</em></div>
  </div>
</div>

<h4>2. Quy trình Hoàn phí — Công thức và timeline</h4>
<div class="insight-card">
  <div class="insight-number">💰</div>
  <div class="insight-body">
    <div style="background:#FFF5F5;padding:12px;border-radius:6px;margin:8px 0;">
      <strong>Công thức tính hoàn phí (hình thức trả thẳng):</strong><br>
      <p>HP được hoàn = (Tổng HP đã nộp - HP đã dùng) × <strong>80%</strong></p>
      <p>MindX thu phí xử lý = <strong>20%</strong> của phần chưa sử dụng</p>
      <p style="color:#666;font-size:0.9em;">Lưu ý: Không hoàn HP học phần đang dang dở. Chỉ tính HP học phần CÒN LẠI chưa bắt đầu.</p>
    </div>
    <p><strong>Ví dụ tính:</strong> PH đóng 10 triệu, HV đã học 4/10 học phần (giá 1 triệu/HP). HP đã dùng = 4 triệu. HP còn lại = 6 triệu. HP được hoàn = 6 triệu × 80% = <strong>4.8 triệu</strong>.</p>
    <p><strong>Timeline xử lý dropout:</strong></p>
    <table style="width:100%;border-collapse:collapse;font-size:0.85em;">
      <tr style="background:#059669;color:#fff;"><th style="padding:8px;">Ngày</th><th style="padding:8px;">Hành động</th><th style="padding:8px;">Người thực hiện</th></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">T+0</td><td style="padding:8px;border:1px solid #ddd;">PH yêu cầu hoàn phí, CS tạo ticket trên LMS</td><td style="padding:8px;border:1px solid #ddd;">CS</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">T+1</td><td style="padding:8px;border:1px solid #ddd;">CSL xem xét, kiểm tra tính hợp lệ</td><td style="padding:8px;border:1px solid #ddd;">CSL</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">T+2</td><td style="padding:8px;border:1px solid #ddd;">CM phê duyệt</td><td style="padding:8px;border:1px solid #ddd;">CM</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">T+3</td><td style="padding:8px;border:1px solid #ddd;">Tài chính xác nhận số tiền hoàn</td><td style="padding:8px;border:1px solid #ddd;">Finance</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">T+5</td><td style="padding:8px;border:1px solid #ddd;">Chuyển tiền về tài khoản PH</td><td style="padding:8px;border:1px solid #ddd;">Finance</td></tr>
    </table>
  </div>
</div>

<h4>3. Hoàn thành khóa học — Checklist kết thúc</h4>
<div class="insight-card">
  <div class="insight-number">🎓</div>
  <div class="insight-body">
    <table style="width:100%;border-collapse:collapse;font-size:0.85em;">
      <tr style="background:#7C3AED;color:#fff;"><th style="padding:8px;">Hạng mục</th><th style="padding:8px;">Deadline</th></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Upload video/ảnh Demo Day lên LMS</td><td style="padding:8px;border:1px solid #ddd;">Trong 96h sau buổi 14</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Cập nhật nhận xét GV đầy đủ cho TẤT CẢ HV</td><td style="padding:8px;border:1px solid #ddd;">Trong 96h sau buổi 14</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Phát chứng nhận hoàn thành khóa học</td><td style="padding:8px;border:1px solid #ddd;">Tại Demo Day hoặc ngay sau đó</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Thu CSAT từ PH</td><td style="padding:8px;border:1px solid #ddd;">Trong 48h sau Demo Day</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Cập nhật trạng thái HV trên CRM (đã hoàn thành)</td><td style="padding:8px;border:1px solid #ddd;">Trong 24h sau Demo Day</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Gọi PH tư vấn lộ trình tiếp theo</td><td style="padding:8px;border:1px solid #ddd;">Trong 48h sau Demo Day</td></tr>
    </table>
    <div class="key-takeaway"><strong>Feedback survey:</strong> CS gửi link khảo sát hài lòng qua Zalo sau Demo Day. Mục tiêu: ≥ 4.5/5 điểm. Phản hồi tiêu cực → báo CSL ngay để xử lý trước khi PH rời đi.</div>
  </div>
</div>

<div class="compare-table">
  <strong>Sai lầm phổ biến trong hành chính:</strong>
  <table style="width:100%;border-collapse:collapse;font-size:0.85em;margin:8px 0;">
    <tr style="background:#E53E3E;color:#fff;"><th style="padding:8px;">Sai lầm</th><th style="padding:8px;">Hậu quả</th><th style="padding:8px;">Cách tránh</th></tr>
    <tr><td style="padding:8px;border:1px solid #ddd;">Quên cập nhật Student Profile</td><td style="padding:8px;border:1px solid #ddd;">PH không nhận kết quả trên Compass</td><td style="padding:8px;border:1px solid #ddd;">Tạo reminder 48h sau thanh toán</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd;">Tính sai hoàn phí</td><td style="padding:8px;border:1px solid #ddd;">Tranh chấp tài chính, mất uy tín</td><td style="padding:8px;border:1px solid #ddd;">Dùng công thức cố định, để CSL kiểm tra lại</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd;">Không upload sản phẩm Demo</td><td style="padding:8px;border:1px solid #ddd;">PH không có hồ sơ con học</td><td style="padding:8px;border:1px solid #ddd;">Checklist kết thúc khóa bắt buộc</td></tr>
  </table>
</div>`,
  quiz: {
    id: "quiz_csk12_day3_s3",
    title: "Quiz: Hành chính Phần 2",
    questions: [
      { q: "HV lộ trình 24 tháng được bảo lưu tối đa bao nhiêu lần và bao nhiêu ngày?", options: ["1 lần, 90 ngày", "2 lần, 180 ngày", "3 lần, 270 ngày", "Không giới hạn"], correct: 1, explanation: "Lộ trình 24 tháng: 2 lần bảo lưu, tổng tối đa 180 ngày." },
      { q: "PH đóng 10 triệu, HV đã học 4/10 HP (1 triệu/HP). Số tiền được hoàn là bao nhiêu?", options: ["6 triệu", "5 triệu", "4.8 triệu", "3.2 triệu"], correct: 2, explanation: "HP còn lại = 6 triệu. Hoàn 80% = 4.8 triệu. MindX giữ 20% phí xử lý = 1.2 triệu." },
      { q: "Upload video Demo Day lên LMS cần hoàn thành trong bao lâu?", options: ["24h", "48h", "96h (4 ngày)", "1 tuần"], correct: 2, explanation: "Tất cả nội dung sau Demo Day (video, ảnh, nhận xét) phải upload trong 96h." },
      { q: "Khi PH muốn hoàn phí, CS nên làm gì ĐẦU TIÊN?", options: ["Tạo ticket dropout ngay", "Hỏi lý do và đề xuất giải pháp thay (bảo lưu/chuyển lớp)", "Gọi CSL ngay", "Tính số tiền hoàn"], correct: 1, explanation: "Luôn tìm hiểu lý do trước — nếu có giải pháp khác phù hợp hơn hoàn phí, hãy đề xuất. Nhiều PH đổi ý khi được tư vấn tốt." },
      { q: "CSAT sau khóa học cần thu trong bao lâu sau Demo Day?", options: ["Ngay tại Demo Day", "Trong 24h", "Trong 48h", "Trong 1 tuần"], correct: 2, explanation: "CSAT cần thu trong 48h sau Demo Day — khi cảm xúc PH còn tích cực nhất sau Demo." }
    ]
  }
}

      ]
    },

    /* ==================== CS K12 DAY 4 ==================== */
    {
      id: "csk12_day4",
      day: 4,
      title: "CHĂM SÓC KHÁCH HÀNG",
      subtitle: "Customer Care Skills",
      icon: "❤️",
      color: "#D97706",
      sections: [
        {
  id: "csk12_day4_s1",
  title: "Greeting Call & Chăm sóc sau buổi 1",
  icon: "📞",
  content: `<h3>Greeting Call — Cuộc gọi vàng đầu tiên</h3>
<div style="background:#FFF5F5;padding:12px;border-radius:8px;margin:10px 0;border-left:4px solid #E53E3E;">
  <strong>Tại sao Greeting Call quan trọng:</strong> 70% quyết định gia hạn của PH được hình thành trong <strong>30 ngày đầu</strong>. Ấn tượng đầu tiên = nền tảng của mọi cuộc trò chuyện sau này.
</div>

<h4>Script Greeting Call đầy đủ</h4>
<div class="script-box">
<p><em>"Dạ em chào anh/chị [Tên PH]. Em là [Tên CS] — nhân viên chăm sóc học viên tại MindX [Tên cơ sở] ạ.</em></p>
<p><em>Em gọi để chào mừng bé [Tên HV] đã chính thức trở thành học viên MindX và sẽ bắt đầu khóa [Tên khóa] rồi ạ! 🎉</em></p>
<p><em>Em xin phép xác nhận lại một số thông tin với anh/chị:</em></p>
<ul>
  <li><em>Bé [Tên HV] học khóa [Tên khóa], lịch: [Thứ/Giờ]</em></li>
  <li><em>Buổi khai giảng: ngày [Ngày]</em></li>
  <li><em>Giáo viên phụ trách: thầy/cô [Tên GV]</em></li>
</ul>
<p><em>Anh/chị cần chuẩn bị cho bé: [laptop/thiết bị]. Em đã gửi hướng dẫn cài phần mềm vào Zalo ạ.</em></p>
<p><em>Trong suốt quá trình học, bất kỳ thắc mắc gì anh/chị cứ liên hệ trực tiếp em qua số này hoặc Zalo ạ. Em sẽ là người đồng hành cùng bé [Tên] trong toàn bộ khóa học.</em></p>
<p><em>Anh/chị có câu hỏi gì không ạ? [...] Cảm ơn anh/chị đã tin tưởng MindX. Em rất mong gặp bé vào ngày [Ngày] ạ!"</em></p>
</div>

<h3 style="margin-top:20px;">Chăm sóc sau buổi 1 — "Golden Hour" Checklist</h3>
<p>Trong <strong>2 giờ đầu sau buổi 1</strong>, CS cần hoàn thành 5 việc sau:</p>

<div class="insight-card">
  <div class="insight-number">⭐</div>
  <div class="insight-body">
    <h4>Golden Hour — 5 việc trong 2 giờ đầu</h4>
    <table style="width:100%;border-collapse:collapse;font-size:0.85em;">
      <tr style="background:#D97706;color:#fff;"><th style="padding:8px;">#</th><th style="padding:8px;">Việc cần làm</th><th style="padding:8px;">Ghi chú</th></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;font-weight:700;">1</td><td style="padding:8px;border:1px solid #ddd;"><strong>Gửi ảnh/video lớp học vào Zalo group</strong></td><td style="padding:8px;border:1px solid #ddd;">Chụp HV đang học, không chụp mặt nếu chưa xin phép</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;font-weight:700;">2</td><td style="padding:8px;border:1px solid #ddd;"><strong>Gọi/nhắn PH báo tình hình buổi 1</strong></td><td style="padding:8px;border:1px solid #ddd;">Ưu tiên gọi điện. Nêu 1-2 điều tích cực về HV</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;font-weight:700;">3</td><td style="padding:8px;border:1px solid #ddd;"><strong>Note đánh giá từng HV</strong></td><td style="padding:8px;border:1px solid #ddd;">Hứng thú / Trầm / Chậm / Cần GV chú ý</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;font-weight:700;">4</td><td style="padding:8px;border:1px solid #ddd;"><strong>Cập nhật điểm danh buổi 1 trên LMS</strong></td><td style="padding:8px;border:1px solid #ddd;">Không để qua ngày hôm sau</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;font-weight:700;">5</td><td style="padding:8px;border:1px solid #ddd;"><strong>Trao đổi nhanh với GV</strong></td><td style="padding:8px;border:1px solid #ddd;">HV nào cần chú ý? Có vấn đề đặc biệt nào không?</td></tr>
    </table>
  </div>
</div>

<h4>Script gọi PH sau buổi 1</h4>
<div class="script-box">
<p><em>"Dạ em chào anh/chị [Tên]. Em là [Tên CS] từ MindX ạ.</em></p>
<p><em>Hôm nay bé [Tên] đã tham gia buổi học đầu tiên rồi ạ! Em muốn cập nhật nhanh cho anh/chị:</em></p>
<p><em>Buổi hôm nay GV [Tên] đã hướng dẫn bé về [nội dung]. Bé [nhận xét tích cực: rất hào hứng / tập trung / hoàn thành bài sớm / hỏi nhiều câu hỏi hay].</em></p>
<p><em>Anh/chị có muốn biết thêm gì về buổi học không ạ? Bé về nhà có kể gì không ạ?</em></p>
<p><em>[Lắng nghe — ghi nhận — xử lý nếu cần]</em></p>
<p><em>Em cảm ơn anh/chị. Em sẽ tiếp tục theo sát bé trong các buổi tiếp theo và cập nhật thường xuyên ạ!"</em></p>
</div>

<div class="key-takeaway">
  <strong>Key Takeaway:</strong> Greeting Call + Golden Hour = 2 giờ đầu tiên quyết định 70% trải nghiệm PH. CS xuất sắc không bỏ qua bước này dù bận.
</div>

<div class="practice-exercise">
  <strong>Bài tập:</strong> Đóng vai CS, thực hành Greeting Call với đồng nghiệp. Sau đó tự đánh giá: Bạn đã xác nhận đủ 5 thông tin chưa? Giọng nói có thân thiện không? Cam kết đồng hành có rõ ràng không?
</div>`,
  quiz: {
    id: "quiz_csk12_day4_s1",
    title: "Quiz: Greeting Call & Buổi 1",
    questions: [
      { q: "Greeting Call nên thực hiện khi nào?", options: ["Sau buổi 1", "Ngay sau khi HV đăng ký, trước khai giảng", "Sau Checkpoint 1", "Khi PH gọi hỏi"], correct: 1, explanation: "Greeting Call thực hiện ngay sau đăng ký, TRƯỚC buổi khai giảng — tạo ấn tượng đầu tiên và đặt móng cho mối quan hệ." },
      { q: "'Golden Hour' sau buổi 1 kéo dài bao lâu?", options: ["30 phút", "1 tiếng", "2 tiếng", "24 tiếng"], correct: 2, explanation: "Golden Hour = 2 giờ đầu sau buổi 1. Trong thời gian này CS cần hoàn thành 5 việc quan trọng." },
      { q: "Trong 5 việc của Golden Hour, việc nào đặt LÊN ĐẦU TIÊN?", options: ["Gọi PH", "Gửi ảnh vào Zalo group", "Update LMS", "Hỏi GV"], correct: 1, explanation: "Gửi ảnh/video vào Zalo group trước — nhanh, dễ làm, tạo ấn tượng tức thì với TẤT CẢ PH cùng lúc." }
    ]
  }
},
        {
  id: "csk12_day4_s2",
  title: "Checkpoint, Demo & Buổi 14",
  icon: "🎯",
  content: `<h3>Chăm sóc tại các mốc quan trọng giữa & cuối khóa</h3>

<h4>Báo cáo tiến độ học viên — Template chuẩn</h4>
<div class="insight-card">
  <div class="insight-number">📊</div>
  <div class="insight-body">
    <h4>Template "Báo cáo tiến độ học viên" gửi PH sau Checkpoint</h4>
    <div style="background:#F7FAFC;padding:12px;border-radius:6px;font-size:0.88em;border:1px solid #E2E8F0;">
      <p><strong>HỌC VIÊN:</strong> [Tên bé]<br>
      <strong>KHÓA HỌC:</strong> [Tên khóa] — Buổi [X]/14<br>
      <strong>GIÁO VIÊN:</strong> [Tên GV]<br>
      <strong>ĐIỂM CHECKPOINT [1/2]:</strong> [X] điểm / 10</p>
      <p><strong>⭐ ĐIỂM MẠNH:</strong><br>
      • [Điểm mạnh 1 — cụ thể, không chung chung]<br>
      • [Điểm mạnh 2]</p>
      <p><strong>📈 TIẾN BỘ SO VỚI BUỔI ĐẦU:</strong><br>
      [Mô tả sự tiến bộ cụ thể — VD: Bé đã tự viết được hàm function, trước đây cần GV hỗ trợ]</p>
      <p><strong>🎯 CẦN CẢI THIỆN:</strong><br>
      • [1 điểm cần cải thiện + kế hoạch hỗ trợ cụ thể]</p>
      <p><strong>📋 CHUYÊN CẦN:</strong> [X]/[Y] buổi đã học</p>
      <p><strong>💬 NHẬN XÉT CỦA GV:</strong> "[Lời nhận xét cá nhân của GV]"</p>
      <p><em>— CS [Tên], MindX [Cơ sở]</em></p>
    </div>
  </div>
</div>

<h4>Tổ chức Demo Day — Vai trò của CS</h4>
<div class="insight-card">
  <div class="insight-number">🎬</div>
  <div class="insight-body">
    <p><strong>Trước Demo Day (3-5 ngày):</strong></p>
    <ul>
      <li>Nhắc lịch Demo Day cho PH 3 ngày + 1 ngày trước</li>
      <li>Chuẩn bị phòng: màn chiếu, microphone (nếu có), bàn ghế PH</li>
      <li>Chuẩn bị chứng nhận hoàn thành cho từng HV</li>
      <li>Nhắc GV chuẩn bị nhận xét cá nhân từng HV</li>
    </ul>
    <p><strong>Trong Demo Day:</strong></p>
    <ul>
      <li>CS đứng khai mạc, giới thiệu lớp, giới thiệu từng HV</li>
      <li>Chụp ảnh/quay video từng HV trình bày — đây là nội dung vàng để gửi PH</li>
      <li>Điều phối thứ tự trình bày, giữ thời gian</li>
      <li>Phát chứng nhận cuối buổi</li>
    </ul>
    <p><strong>Sau Demo Day (trong 2 giờ):</strong></p>
    <div class="script-box"><strong>Zalo riêng cho từng PH sau Demo Day:</strong><br><em>"Anh/chị ơi! 🎉 Đây là video bé [Tên] trình bày sản phẩm [Tên SP] hôm nay ạ!<br>Em thấy bé tiến bộ rất nhiều — đặc biệt [nhận xét cá nhân, VD: phần thiết kế giao diện rất sáng tạo và bé trình bày rất tự tin].<br>Anh/chị xem nhé! Em rất vui vì được đồng hành cùng bé [Tên] suốt khóa học này ❤️<br>Em đã gửi kèm link bảo cáo tiến độ đầy đủ trên Compass cho anh/chị ạ."</em></div>
  </div>
</div>

<h4>Script gọi PH sau buổi 14 — Close Renewal</h4>
<div class="script-box">
<p><em>"Dạ em chào anh/chị. Bé [Tên] đã hoàn thành xuất sắc khóa [Tên khóa] rồi ạ! 🎉</em></p>
<p><em>Tổng kết cả khóa: Bé [nhận xét tổng quan — điểm mạnh, tiến bộ nổi bật]. Sản phẩm cuối khóa của bé là [mô tả SP] — em thấy bé rất tự hào khi trình bày ạ.</em></p>
<p><em>Để tiếp tục hành trình, bước tiếp theo phù hợp với bé là khóa [Tên khóa tiếp]. Bé sẽ học [mô tả ngắn — điểm khác biệt của khóa tiếp].</em></p>
<p><em>Em có thể giữ chỗ cho bé trong lớp [Thứ/Giờ] bắt đầu ngày [Ngày] ạ. Anh/chị muốn em giữ chỗ không ạ?"</em></p>
</div>

<div class="key-takeaway">
  <strong>Key Takeaway:</strong> Demo Day là khoảnh khắc cảm xúc cao nhất của PH. CS xuất sắc tận dụng khoảnh khắc này để tạo kỷ niệm đẹp (video riêng, nhận xét cá nhân) và chuyển cảm xúc đó thành quyết định gia hạn.
</div>`,
  quiz: {
    id: "quiz_csk12_day4_s2",
    title: "Quiz: Checkpoint & Demo Day",
    questions: [
      { q: "Template báo cáo tiến độ cần có những mục nào bắt buộc?", options: ["Chỉ điểm số", "Điểm CP + Điểm mạnh + Tiến bộ + Cần cải thiện + Nhận xét GV", "Chỉ nhận xét GV", "Điểm số và chuyên cần"], correct: 1, explanation: "Báo cáo đầy đủ gồm: điểm CP, điểm mạnh cụ thể, sự tiến bộ, điểm cần cải thiện, chuyên cần, và nhận xét cá nhân từ GV." },
      { q: "Sau Demo Day, video riêng của từng bé nên gửi cho PH trong bao lâu?", options: ["Ngay tại Demo Day", "Trong 2 giờ sau Demo Day", "Trong 24h", "Trong 3 ngày"], correct: 1, explanation: "Gửi trong 2 giờ sau Demo — khi cảm xúc PH còn ở đỉnh cao. Để lâu hơn sẽ giảm hiệu quả." },
      { q: "Vai trò chính của CS trong Demo Day là?", options: ["Chỉ quay phim", "Host — khai mạc, điều phối, chụp ảnh, phát chứng nhận", "Chỉ ngồi quan sát", "Để GV tự tổ chức"], correct: 1, explanation: "CS là host của Demo Day: khai mạc, giới thiệu từng HV, quay phim, phân phối chứng nhận." }
    ]
  }
},
        {
  id: "csk12_day4_s3",
  title: "Chăm sóc HV chờ lớp & Chuyên cần",
  icon: "🔔",
  content: `<h3>3 nhóm học viên đặc biệt cần chăm sóc riêng</h3>

<h4>Nhóm 1: HV chờ xếp lớp</h4>
<div class="insight-card">
  <div class="insight-number">⏳</div>
  <div class="insight-body">
    <p>HV đã đóng tiền nhưng chưa có lớp phù hợp. Đây là giai đoạn rủi ro cao — PH dễ đòi hoàn phí nếu chờ quá lâu mà không được cập nhật.</p>
    <p><strong>Quy trình chăm sóc HV chờ lớp:</strong></p>
    <ul>
      <li>Gọi cập nhật tình hình <strong>mỗi 7 ngày</strong></li>
      <li>Đề xuất ngay 2 phương án: chờ lớp mới / chuyển sang khung giờ đang có</li>
      <li>Nếu chờ quá 30 ngày: escalate CSL để tìm giải pháp đặc biệt</li>
    </ul>
    <div class="script-box"><strong>Script gọi HV chờ lớp (tuần 1):</strong><br><em>"Dạ anh/chị [Tên], em là [CS] từ MindX ạ. Em gọi cập nhật tình hình lớp cho bé [Tên] ạ.<br>Hiện lớp [Tên khóa] [Thứ/Giờ] đang chờ thêm [X] bạn nữa để đủ sĩ số. Em dự kiến trong khoảng [X] tuần sẽ khai giảng ạ.<br>Nếu anh/chị muốn bé bắt đầu sớm hơn, em hiện có lớp [Thứ/Giờ khác] đang sắp khai giảng. Anh/chị muốn em giữ chỗ không ạ?"</em></div>
  </div>
</div>

<h4>Nhóm 2: HV đang bảo lưu</h4>
<div class="insight-card">
  <div class="insight-number">💤</div>
  <div class="insight-body">
    <p>HV đang tạm dừng học. Nhiệm vụ CS: giữ kết nối, nhắc nhở quay lại đúng hạn.</p>
    <ul>
      <li>Gọi thăm hỏi <strong>mỗi tháng 1 lần</strong></li>
      <li>Nhắc thời hạn bảo lưu <strong>trước khi hết 2 tuần</strong></li>
      <li>Khi gần hết hạn: tư vấn lớp phù hợp, đặt lịch khai giảng</li>
    </ul>
    <div class="script-box"><strong>Script nhắc hết hạn bảo lưu:</strong><br><em>"Dạ anh/chị [Tên] ơi, em là [CS] từ MindX ạ. Em gọi để nhắc nhở anh/chị: thời hạn bảo lưu của bé [Tên] còn 2 tuần nữa là hết (ngày [X]) ạ.<br>Em muốn hỏi: anh/chị đã sẵn sàng cho bé quay lại học chưa? Em có thể sắp xếp lớp [Thứ/Giờ] cho bé bắt đầu từ [Ngày] ạ."</em></div>
  </div>
</div>

<h4>Nhóm 3: HV vắng nhiều — Early Warning System</h4>
<div class="insight-card">
  <div class="insight-number">⚠️</div>
  <div class="insight-body">
    <h4>5 dấu hiệu HV sắp bỏ học — Nhận biết sớm để can thiệp kịp thời</h4>
    <table style="width:100%;border-collapse:collapse;font-size:0.85em;">
      <tr style="background:#E53E3E;color:#fff;"><th style="padding:8px;">#</th><th style="padding:8px;">Dấu hiệu</th><th style="padding:8px;">Hành động can thiệp</th></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">1</td><td style="padding:8px;border:1px solid #ddd;"><strong>Vắng 2 buổi liên tiếp không báo</strong></td><td style="padding:8px;border:1px solid #ddd;">Gọi PH tìm hiểu lý do sâu — không chỉ sắp xếp học bù</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">2</td><td style="padding:8px;border:1px solid #ddd;"><strong>PH đột ngột không phản hồi Zalo</strong></td><td style="padding:8px;border:1px solid #ddd;">Thử gọi điện — không phản hồi 24h → escalate CSL</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">3</td><td style="padding:8px;border:1px solid #ddd;"><strong>GV báo HV không làm bài, không tập trung liên tục</strong></td><td style="padding:8px;border:1px solid #ddd;">Gọi PH chia sẻ, nhờ GV hỗ trợ riêng thêm</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">4</td><td style="padding:8px;border:1px solid #ddd;"><strong>PH hỏi về chính sách hoàn phí "hỏi thêm"</strong></td><td style="padding:8px;border:1px solid #ddd;">Tìm hiểu lý do thật sự, đề xuất giải pháp giữ chân</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">5</td><td style="padding:8px;border:1px solid #ddd;"><strong>HV nói "Con không muốn học nữa"</strong></td><td style="padding:8px;border:1px solid #ddd;">Gọi PH ngay, trao đổi với GV, đề xuất hỗ trợ cá nhân</td></tr>
    </table>
    <div class="script-box"><strong>Script khi HV nói "Con không muốn học nữa":</strong><br><em>"Dạ em chào anh/chị. GV vừa chia sẻ với em là bé [Tên] đang gặp khó khăn ở phần [nội dung]. Em muốn trao đổi ngay để mình cùng hỗ trợ bé ạ.<br>Em hiểu giai đoạn đầu thường khó nhất — hầu hết các bé sau 1-2 buổi hỗ trợ riêng đều bắt nhịp được. Em sẽ nhờ GV chú ý đặc biệt cho bé trong 2 buổi tới ạ.<br>Anh/chị có thể cho bé thử thêm 2 buổi xem sao không ạ? Em cam kết theo dõi sát sao ạ."</em></div>
  </div>
</div>

<div class="key-takeaway">
  <strong>Key Takeaway:</strong> CS giỏi không đợi HV "dropout" mới xử lý. CS giỏi nhận ra dấu hiệu sớm và can thiệp khi còn có thể cứu vãn.
</div>`,
  quiz: {
    id: "quiz_csk12_day4_s3",
    title: "Quiz: HV chờ lớp & Chuyên cần",
    questions: [
      { q: "HV chờ xếp lớp, CS cập nhật bao lâu 1 lần?", options: ["Mỗi ngày", "Mỗi 7 ngày", "Mỗi tháng", "Chỉ khi có lớp mới"], correct: 1, explanation: "Cập nhật mỗi 7 ngày — đủ để PH cảm thấy được quan tâm mà không bị làm phiền." },
      { q: "Dấu hiệu nào KHÔNG phải Early Warning của HV sắp bỏ học?", options: ["Vắng 2 buổi liên tiếp không báo", "PH hỏi về chính sách hoàn phí", "HV đạt điểm CP1 tốt", "PH đột ngột không phản hồi Zalo"], correct: 2, explanation: "Điểm CP1 tốt là dấu hiệu TÍCH CỰC, không phải cảnh báo bỏ học." },
      { q: "Nhắc hạn bảo lưu cần thực hiện trước bao nhiêu ngày?", options: ["7 ngày", "14 ngày (2 tuần)", "30 ngày", "Ngay khi hết hạn"], correct: 1, explanation: "Nhắc trước 2 tuần — đủ thời gian PH sắp xếp cho bé quay lại hoặc gia hạn bảo lưu." }
    ]
  }
},
        {
  id: "csk12_day4_s4",
  title: "Nhận diện PHHS theo DISC",
  icon: "🎭",
  content: `<h3>Mô hình D.I.S.C — Nhận diện 4 kiểu phụ huynh để giao tiếp hiệu quả</h3>
<p>Không có cách giao tiếp "một cỡ vừa tất cả". PH type D ghét nghe bạn nói dài. PH type C ghét câu trả lời mơ hồ. Nhận diện đúng → tư vấn đúng cách → PH hài lòng hơn.</p>

<h4>D — Dominance (Quyết đoán, kết quả)</h4>
<div class="insight-card">
  <div class="insight-number" style="background:#E53E3E;color:#fff;">D</div>
  <div class="insight-body">
    <p><strong>Nhận biết qua chat/call:</strong> "Nói ngắn gọn thôi", "Kết quả sao rồi?", "Khi nào bắt đầu được?", "Mấy tháng xong?" — Nói nhanh, ít giải thích, muốn chốt ngay.</p>
    <p><strong>Cách tiếp cận:</strong> Đi thẳng vào điểm chính. Nêu kết quả trước, lý do sau. Tiết kiệm thời gian của họ.</p>
    <div class="script-box"><strong>✅ Script cho type D:</strong><br><em>"Dạ anh/chị, bé [Tên] đã hoàn thành CP1 đạt 8/10. Điểm mạnh: logic tốt. Cần cải thiện: phần giao diện. Em đã sắp xếp GV hỗ trợ riêng 2 buổi tới. Anh/chị cần thêm thông tin gì không ạ?"</em></div>
    <div style="background:#FFF5F5;padding:8px;border-radius:4px;margin-top:8px;font-size:0.85em;"><strong>❌ KHÔNG nên:</strong> Kể dài dòng về quá trình học, giải thích nhiều lý do, nói vòng vo trước khi vào điểm chính.</div>
  </div>
</div>

<h4>I — Influence (Nhiệt tình, cảm xúc)</h4>
<div class="insight-card">
  <div class="insight-number" style="background:#D97706;color:#fff;">I</div>
  <div class="insight-body">
    <p><strong>Nhận biết:</strong> "Ôi hay quá!", "Con nhà bạn em học ở đây nè", hỏi về trải nghiệm, thích ảnh/video, hay tag bạn bè.</p>
    <p><strong>Cách tiếp cận:</strong> Khen ngợi bé cụ thể, chia sẻ câu chuyện thành công, gửi ảnh/video lớp học thường xuyên, tạo cảm xúc tích cực.</p>
    <div class="script-box"><strong>✅ Script cho type I:</strong><br><em>"Anh/chị ơi! Hôm nay bé [Tên] trình bày sản phẩm mà cả lớp vỗ tay đấy ạ! Em gửi video cho anh/chị xem nè 🎉 GV khen bé [Tên] rất sáng tạo và tự tin — anh/chị xem video xong chắc tự hào lắm!"</em></div>
    <div style="background:#FFFBEB;padding:8px;border-radius:4px;margin-top:8px;font-size:0.85em;"><strong>❌ KHÔNG nên:</strong> Chỉ nói số liệu khô khan, không có cảm xúc, quá formal, không hỏi thăm bé.</div>
  </div>
</div>

<h4>S — Steadiness (Ổn định, trung thành)</h4>
<div class="insight-card">
  <div class="insight-number" style="background:#059669;color:#fff;">S</div>
  <div class="insight-body">
    <p><strong>Nhận biết:</strong> "Để tôi suy nghĩ thêm", "Con tôi nhút nhát, liệu có ổn?", cần reassure, lo lắng về thay đổi, hỏi nhiều về môi trường lớp học.</p>
    <p><strong>Cách tiếp cận:</strong> Kiên nhẫn, cho thời gian suy nghĩ, nhấn mạnh sự ổn định và an toàn của môi trường MindX, thông báo trước khi có thay đổi.</p>
    <div class="script-box"><strong>✅ Script cho type S:</strong><br><em>"Anh/chị hoàn toàn có thể yên tâm ạ. GV [Tên] rất kiên nhẫn và quan tâm từng bé — đặc biệt những bé nhút nhát thường tiến bộ rất nhanh ở MindX vì môi trường lớp học rất thân thiện ạ. Anh/chị cứ từ từ suy nghĩ, em sẵn sàng giải đáp thêm bất kỳ thắc mắc nào ạ."</em></div>
    <div style="background:#ECFDF5;padding:8px;border-radius:4px;margin-top:8px;font-size:0.85em;"><strong>❌ KHÔNG nên:</strong> Push mạnh, tạo áp lực "đăng ký ngay", ép quyết định nhanh, thay đổi thông tin liên tục mà không báo trước.</div>
  </div>
</div>

<h4>C — Conscientiousness (Cẩn thận, logic)</h4>
<div class="insight-card">
  <div class="insight-number" style="background:#2563EB;color:#fff;">C</div>
  <div class="insight-body">
    <p><strong>Nhận biết:</strong> "Giáo trình cụ thể thế nào?", "So với trung tâm X khác gì?", hỏi rất chi tiết về quy trình, cần bằng chứng, thường gửi email/chat dài.</p>
    <p><strong>Cách tiếp cận:</strong> Chuẩn bị số liệu, so sánh cụ thể, trả lời chính xác và đầy đủ, có tài liệu đính kèm. Không hứa những gì không chứng minh được.</p>
    <div class="script-box"><strong>✅ Script cho type C:</strong><br><em>"Dạ em hiểu anh/chị muốn thông tin chi tiết ạ. Em xin phép gửi anh/chị: [1] Giáo trình cụ thể từng module, [2] Bảng so sánh với các trung tâm tương tự, [3] Báo cáo kết quả của 50 HV gần nhất. Anh/chị xem qua và cho em biết cần thêm thông tin gì không ạ?"</em></div>
    <div style="background:#EFF6FF;padding:8px;border-radius:4px;margin-top:8px;font-size:0.85em;"><strong>❌ KHÔNG nên:</strong> Trả lời mơ hồ, không có dữ liệu, nói "chắc là tốt ạ", hứa mà không có bằng chứng.</div>
  </div>
</div>

<div class="key-takeaway">
  <strong>Key Takeaway:</strong> Không có type nào "khó tính hơn" — chỉ có CS chưa biết cách nói chuyện đúng với từng type. Nhận diện type trong 30 giây đầu → điều chỉnh cách giao tiếp → PH cảm thấy được hiểu.
</div>`,
  quiz: {
    id: "quiz_csk12_day4_s4",
    title: "Quiz: DISC",
    questions: [
      { q: "PH nói 'Nói ngắn gọn thôi, kết quả ra sao?' — thuộc type nào?", options: ["I — Influence", "D — Dominance", "S — Steadiness", "C — Conscientiousness"], correct: 1, explanation: "Type D: quyết đoán, muốn kết quả nhanh, thẳng thắn, ít kiên nhẫn với chi tiết." },
      { q: "PH hỏi 'Giáo trình cụ thể thế nào? So với trung tâm X khác gì?' — type nào?", options: ["D", "I", "S", "C — Conscientiousness"], correct: 3, explanation: "Type C cần chi tiết, bằng chứng, logic và so sánh cụ thể trước khi quyết định." },
      { q: "Với type S, điều CS KHÔNG nên làm là?", options: ["Kiên nhẫn giải thích", "Push mạnh ép quyết định nhanh", "Nhấn mạnh sự ổn định", "Cho thời gian suy nghĩ"], correct: 1, explanation: "Type S ghét bị áp lực. Push mạnh sẽ khiến họ rút lui và mất tin tưởng." },
      { q: "Gửi ảnh/video lớp học thường xuyên phù hợp nhất với type nào?", options: ["D", "I", "C", "Tất cả"], correct: 1, explanation: "Type I thích cảm xúc, trải nghiệm — ảnh/video lớp học tạo kết nối và hứng khởi cho họ." }
    ]
  }
},
        {
  id: "csk12_day4_s5",
  title: "Framework S.E.R.V.E",
  icon: "⭐",
  content: `<h3>S.E.R.V.E — 5 bước chăm sóc khách hàng xuất sắc</h3>
<p>S.E.R.V.E là framework áp dụng cho MỌI tương tác với PH/HV — từ cuộc gọi thường ngày đến xử lý khiếu nại phức tạp.</p>

<div style="display:flex;flex-direction:column;gap:12px;margin:15px 0;">
  <div style="background:linear-gradient(135deg,#E31F26,#7D0005);color:#fff;padding:15px;border-radius:8px;">
    <h4 style="margin:0;">S — See (Nhìn nhận & Dự đoán)</h4>
    <p style="margin:8px 0 0;">Quan sát và nhận diện nhu cầu TRƯỚC KHI PH nói ra. Kết hợp với DISC để đọc type, kết hợp lịch sử tương tác để dự đoán.</p>
    <p style="font-style:italic;opacity:0.9;margin:5px 0 0;">VD: PH gọi giọng gấp gáp → nhận ra họ đang lo lắng → điều chỉnh giọng nói bình tĩnh, trấn an trước khi hỏi vấn đề.<br>VD: PH im lặng trên Zalo 1 tuần sau khi hỏi về hoàn phí → chủ động gọi thăm hỏi.</p>
  </div>
  <div style="background:linear-gradient(135deg,#2563EB,#1D4ED8);color:#fff;padding:15px;border-radius:8px;">
    <h4 style="margin:0;">E — Empathize (Đồng cảm thật lòng)</h4>
    <p style="margin:8px 0 0;">Đặt mình vào vị trí PH, ghi nhận cảm xúc của họ TRƯỚC KHI đưa ra giải pháp. PH cần được NGHE, không chỉ được giải quyết.</p>
    <p style="font-style:italic;opacity:0.9;margin:5px 0 0;">VD: "Em hiểu anh/chị lo lắng khi bé chưa bắt nhịp được. Điều này hoàn toàn bình thường — hầu hết các bé đều vượt qua giai đoạn này trong 2-3 buổi tiếp theo."<br><strong>Sai:</strong> "Chuyện này nhỏ thôi anh/chị" / "Chị lo hơi quá"</p>
  </div>
  <div style="background:linear-gradient(135deg,#059669,#047857);color:#fff;padding:15px;border-radius:8px;">
    <h4 style="margin:0;">R — Respond (Phản hồi có hành động)</h4>
    <p style="margin:8px 0 0;">Đưa ra giải pháp CỤ THỂ với timeline rõ ràng. Không nói chung chung. Commit thời gian và THỰC SỰ giữ cam kết.</p>
    <p style="font-style:italic;opacity:0.9;margin:5px 0 0;">VD: "Em sẽ trao đổi với GV ngay hôm nay và phản hồi lại anh/chị trước 5h chiều mai ạ."<br><strong>Sai:</strong> "Em sẽ kiểm tra và báo lại" (không có thời gian cụ thể)</p>
  </div>
  <div style="background:linear-gradient(135deg,#D97706,#B45309);color:#fff;padding:15px;border-radius:8px;">
    <h4 style="margin:0;">V — Value (Trân trọng)</h4>
    <p style="margin:8px 0 0;">Cảm ơn PH vì đã tin tưởng, vì đã chia sẻ, vì đã kiên nhẫn — CỤ THỂ, không máy móc.</p>
    <p style="font-style:italic;opacity:0.9;margin:5px 0 0;">VD: "Em rất trân trọng việc anh/chị luôn theo sát quá trình học của bé. Điều này giúp em và GV hỗ trợ bé tốt hơn rất nhiều."<br><strong>Sai:</strong> "Cảm ơn anh/chị đã liên hệ ạ" (máy móc)</p>
  </div>
  <div style="background:linear-gradient(135deg,#7C3AED,#6D28D9);color:#fff;padding:15px;border-radius:8px;">
    <h4 style="margin:0;">E — Exceed (Vượt mong đợi)</h4>
    <p style="margin:8px 0 0;">Làm hơn những gì PH kỳ vọng — tạo "wow moment" nhỏ nhưng đáng nhớ.</p>
    <p style="font-style:italic;opacity:0.9;margin:5px 0 0;">VD: Sau khi giải quyết xong phàn nàn, gửi riêng video bé làm bài trên lớp + lời nhận xét cá nhân từ GV.<br>VD: Nhắc PH ngày sinh nhật của bé và gửi lời chúc từ team MindX.</p>
  </div>
</div>

<h4>S.E.R.V.E Self-Assessment — Đánh giá hàng tuần</h4>
<div style="background:#F7FAFC;padding:12px;border-radius:8px;border:1px solid #E2E8F0;">
  <p><strong>Mỗi thứ 6, tự hỏi bản thân:</strong></p>
  <table style="width:100%;border-collapse:collapse;font-size:0.85em;">
    <tr><td style="padding:6px;border:1px solid #ddd;">S — See</td><td style="padding:6px;border:1px solid #ddd;">Tuần này tôi có <em>chủ động</em> nhận diện nhu cầu PH trước khi họ nói không? (0-10)</td></tr>
    <tr><td style="padding:6px;border:1px solid #ddd;">E — Empathize</td><td style="padding:6px;border:1px solid #ddd;">Tôi có ghi nhận cảm xúc PH <em>trước</em> khi đưa ra giải pháp không? (0-10)</td></tr>
    <tr><td style="padding:6px;border:1px solid #ddd;">R — Respond</td><td style="padding:6px;border:1px solid #ddd;">Tôi có phản hồi đúng <em>deadline đã hứa</em> với PH không? (0-10)</td></tr>
    <tr><td style="padding:6px;border:1px solid #ddd;">V — Value</td><td style="padding:6px;border:1px solid #ddd;">Tôi có cảm ơn PH <em>cụ thể</em> (không máy móc) trong tuần này không? (0-10)</td></tr>
    <tr><td style="padding:6px;border:1px solid #ddd;">E — Exceed</td><td style="padding:6px;border:1px solid #ddd;">Tôi có tạo ít nhất 1 <em>wow moment</em> cho PH/HV tuần này không? (0-10)</td></tr>
  </table>
  <p style="font-size:0.85em;margin-top:8px;">Mục tiêu: Tổng ≥ 40/50. Điểm nào thấp nhất → tập trung cải thiện tuần sau.</p>
</div>`,
  quiz: {
    id: "quiz_csk12_day4_s5",
    title: "Quiz: S.E.R.V.E",
    questions: [
      { q: "Chữ 'S' trong S.E.R.V.E nghĩa là gì?", options: ["Service", "See — Nhìn nhận & Dự đoán nhu cầu", "Solve", "Support"], correct: 1, explanation: "S = See — Quan sát và nhận diện nhu cầu KH TRƯỚC KHI họ nói ra." },
      { q: "Bước 'Respond' yêu cầu CS làm gì?", options: ["Trả lời nhanh nhất có thể", "Đưa giải pháp CỤ THỂ với timeline rõ ràng và giữ cam kết", "Chuyển cho quản lý", "Nói 'em sẽ kiểm tra'"], correct: 1, explanation: "Respond = phản hồi với GIẢI PHÁP CỤ THỂ + THỜI GIAN CỤ THỂ + GIỮ CAM KẾT — không chung chung." },
      { q: "'Exceed' tức là làm điều gì?", options: ["Vượt quy định", "Làm hơn kỳ vọng — tạo wow moment nhỏ nhưng đáng nhớ", "Exceed budget", "Làm nhanh hơn deadline"], correct: 1, explanation: "Exceed = Vượt mong đợi — những hành động nhỏ nhưng không ngờ tới, tạo ấn tượng sâu sắc." },
      { q: "Khi PH nói 'Chị lo hơi quá không?', điều này vi phạm bước nào của SERVE?", options: ["S — See", "E — Empathize", "R — Respond", "V — Value"], correct: 1, explanation: "Nói 'Chị lo hơi quá' = phủ nhận cảm xúc PH — vi phạm E (Empathize). CS phải ghi nhận cảm xúc, không phán xét." },
      { q: "SERVE Self-Assessment được thực hiện khi nào?", options: ["Sau mỗi cuộc gọi", "Mỗi sáng thứ 2", "Mỗi thứ 6", "Cuối tháng"], correct: 2, explanation: "Tự đánh giá SERVE mỗi thứ 6 cuối tuần — nhìn lại tuần vừa rồi và xác định điểm cần cải thiện tuần sau." }
    ]
  }
},
        {
  id: "csk12_day4_s6",
  title: "Xử lý tình huống & Phàn nàn — 10 case",
  icon: "🛡️",
  content: `<h3>10 tình huống phổ biến — Framework L.A.S.T</h3>
<p><strong>Framework L.A.S.T:</strong> <strong>L</strong>isten (Lắng nghe) → <strong>A</strong>pologize (Xin lỗi) → <strong>S</strong>olve (Giải quyết) → <strong>T</strong>hank (Cảm ơn)</p>

<div style="background:#F0FDF4;padding:12px;border-radius:8px;margin:10px 0;border:1px solid #059669;">
  <strong>Phân loại mức độ xử lý:</strong><br>
  🟢 <strong>Xanh:</strong> CS tự xử lý được<br>
  🟡 <strong>Vàng:</strong> Cần hỗ trợ từ CSL hoặc bộ phận khác<br>
  🔴 <strong>Đỏ:</strong> Escalate ngay lên CSL/CM
</div>

<h4>🟢 CASE 1: "GV dạy không hay, con không hiểu"</h4>
<div class="insight-card">
  <div class="insight-number">1</div>
  <div class="insight-body">
    <p><strong>Mức độ:</strong> 🟢 CS tự xử lý | <strong>Timeline:</strong> Phản hồi trong 24h</p>
    <div class="script-box"><em>"Dạ em rất cảm ơn anh/chị đã chia sẻ thẳng thắn ạ. Em xin lỗi vì bé chưa tiếp thu được tốt.<br>Em sẽ trao đổi ngay với GV [Tên] để điều chỉnh cách giảng phù hợp hơn với bé ạ. Đồng thời GV sẽ dành thêm thời gian giải thích riêng cho bé trong buổi tới.<br>Em sẽ theo dõi và cập nhật lại anh/chị sau buổi [X] ạ. Cảm ơn anh/chị đã quan tâm đến việc học của bé!"</em></div>
    <p><strong>Không làm:</strong> Bảo vệ GV ngay lập tức, nói "GV dạy tốt mà", không cam kết hành động cụ thể.</p>
  </div>
</div>

<h4>🟢 CASE 2: "Lớp quá đông, con không được chú ý"</h4>
<div class="insight-card">
  <div class="insight-number">2</div>
  <div class="insight-body">
    <p><strong>Mức độ:</strong> 🟢 CS tự xử lý | <strong>Timeline:</strong> Phản hồi ngay + giải pháp trong 48h</p>
    <div class="script-box"><em>"Dạ em hiểu lo lắng của anh/chị ạ. Sĩ số lớp hiện tại là [X] học viên — em sẽ kiểm tra lại ngay với GV về mức độ chú ý đến từng bé ạ.<br>Đồng thời, nếu anh/chị muốn bé được hỗ trợ sát hơn, em có thể tư vấn hình thức học [1-on-1] hoặc lớp nhỏ hơn ạ.<br>Cảm ơn anh/chị đã phản ánh để MindX cải thiện!"</em></div>
  </div>
</div>

<h4>🟡 CASE 3: "Con không thích học, muốn bỏ"</h4>
<div class="insight-card">
  <div class="insight-number">3</div>
  <div class="insight-body">
    <p><strong>Mức độ:</strong> 🟡 Cần phối hợp với GV + CSL | <strong>Timeline:</strong> Liên hệ trong 24h, giải pháp trong 72h</p>
    <div class="script-box"><em>"Dạ em hiểu anh/chị và bé đang khó khăn ạ. Giai đoạn đầu thường là thử thách nhất với hầu hết các bé.<br>Em sẽ: [1] Trao đổi với GV để tìm cách tiếp cận phù hợp hơn với bé, [2] Đề xuất GV hỗ trợ riêng cho bé trong 1-2 buổi, [3] Tìm hiểu bé không thích điều gì cụ thể.<br>Anh/chị có thể cho bé thử thêm 2 buổi xem sao không ạ? Em cam kết theo dõi sát và báo lại anh/chị ạ."</em></div>
  </div>
</div>

<h4>🟡 CASE 4: "Con học không theo kịp các bạn"</h4>
<div class="insight-card">
  <div class="insight-number">4</div>
  <div class="insight-body">
    <p><strong>Mức độ:</strong> 🟡 Cần GV hỗ trợ riêng | <strong>Timeline:</strong> 24h</p>
    <div class="script-box"><em>"Dạ em hiểu anh/chị lo lắng ạ. Mỗi bé có tốc độ tiếp thu khác nhau và đó là hoàn toàn bình thường.<br>Em đã trao đổi với GV — GV sẽ dành thêm 10-15 phút cuối buổi để hỗ trợ riêng cho bé ở phần bé cần cải thiện ạ. Nếu cần, em cũng có thể sắp xếp cho bé tham gia lớp tăng cường ạ.<br>Em sẽ theo dõi và cập nhật anh/chị sau 3 buổi tới ạ!"</em></div>
  </div>
</div>

<h4>🟡 CASE 5: "Muốn đổi giáo viên"</h4>
<div class="insight-card">
  <div class="insight-number">5</div>
  <div class="insight-body">
    <p><strong>Mức độ:</strong> 🟡 Cần CSL + TC phối hợp | <strong>Timeline:</strong> 48h để xác nhận khả năng</p>
    <div class="script-box"><em>"Dạ em hiểu yêu cầu của anh/chị ạ. Em sẽ xem xét khả năng sắp xếp GV khác phù hợp với bé.<br>[Hỏi thêm] 'Anh/chị có thể chia sẻ cụ thể bé phản hồi thế nào về thầy/cô hiện tại không ạ? Để em có thể tư vấn GV phù hợp nhất ạ.'<br>[Sau khi kiểm tra] 'Dạ em đã trao đổi với bộ phận giảng dạy. GV [Tên mới] có thể tiếp tục từ buổi [X]. Anh/chị xem được không ạ?'"</em></div>
    <p><strong>Không làm:</strong> Hứa đổi GV ngay mà chưa kiểm tra khả năng, hoặc từ chối thẳng mà không giải thích.</p>
  </div>
</div>

<h4>🔴 CASE 6: "Muốn hoàn toàn bộ học phí"</h4>
<div class="insight-card">
  <div class="insight-number">6</div>
  <div class="insight-body">
    <p><strong>Mức độ:</strong> 🔴 Escalate CSL + CM ngay | <strong>Timeline:</strong> Phản hồi trong 2h, xử lý trong 5 ngày</p>
    <div class="script-box"><em>"Dạ em hiểu và ghi nhận yêu cầu của anh/chị ạ. Em xin lỗi vì trải nghiệm chưa như kỳ vọng.<br>Trước khi xử lý, em muốn hỏi anh/chị: lý do cụ thể là gì để em xem có phương án nào phù hợp hơn cho bé không ạ? Ví dụ như bảo lưu, chuyển lớp, hoặc đổi môn ạ.<br>[Nếu PH vẫn kiên quyết] 'Dạ em hiểu ạ. Em sẽ chuyển yêu cầu này lên quản lý và liên hệ lại anh/chị trong vòng 24h với thông tin cụ thể về số tiền hoàn và quy trình ạ.'"</em></div>
    <p><strong>Nhớ:</strong> Không tự cam kết số tiền hoàn mà chưa tính toán đúng công thức và được CSL/CM phê duyệt.</p>
  </div>
</div>

<h4>🔴 CASE 7: "Con bị bạn trong lớp bắt nạt"</h4>
<div class="insight-card">
  <div class="insight-number">7</div>
  <div class="insight-body">
    <p><strong>Mức độ:</strong> 🔴 Escalate CM ngay | <strong>Timeline:</strong> Xử lý trong ngày</p>
    <div class="script-box"><em>"Dạ em rất xin lỗi về sự việc này ạ. Điều này không được chấp nhận tại MindX.<br>Em sẽ ngay lập tức báo cáo lên quản lý trung tâm và GV phụ trách. Chúng em sẽ: [1] Làm rõ sự việc, [2] Có biện pháp xử lý phù hợp, [3] Đảm bảo bé được học trong môi trường an toàn.<br>Anh/chị có thể cho em biết sự việc xảy ra như thế nào không ạ? Em cần thông tin đầy đủ để xử lý đúng ạ."</em></div>
  </div>
</div>

<h4>🟡 CASE 8: "Thiết bị hỏng trong giờ học"</h4>
<div class="insight-card">
  <div class="insight-number">8</div>
  <div class="insight-body">
    <p><strong>Mức độ:</strong> 🟡 CS xử lý ngay + báo IT | <strong>Timeline:</strong> Trong buổi học</p>
    <div class="script-box"><em>"Dạ em xin lỗi về sự bất tiện này ạ. Em sẽ sắp xếp ngay máy dự phòng cho bé ạ. [Hoặc] Em đã liên hệ IT — thiết bị sẽ được sửa chữa trong [thời gian]. Trong thời gian đó bé có thể [giải pháp tạm thời].<br>Buổi học hôm nay sẽ không bị ảnh hưởng ạ!"</em></div>
  </div>
</div>

<h4>🟡 CASE 9: "Lịch học không phù hợp"</h4>
<div class="insight-card">
  <div class="insight-number">9</div>
  <div class="insight-body">
    <p><strong>Mức độ:</strong> 🟢 CS tự xử lý | <strong>Timeline:</strong> 24-48h để tìm lớp</p>
    <div class="script-box"><em>"Dạ em hiểu ạ. Em sẽ kiểm tra ngay lịch các lớp [Tên khóa] hiện tại ạ. Em thấy có lớp [Thứ/Giờ] hoặc [Thứ/Giờ] — anh/chị thấy lịch nào phù hợp hơn không ạ? Em có thể chuyển lớp cho bé ngay ạ."</em></div>
  </div>
</div>

<h4>🟡 CASE 10: "PHHS so sánh với trung tâm khác"</h4>
<div class="insight-card">
  <div class="insight-number">10</div>
  <div class="insight-body">
    <p><strong>Mức độ:</strong> 🟡 Cần kiến thức sản phẩm tốt | <strong>Timeline:</strong> Phản hồi ngay</p>
    <div class="script-box"><em>"Dạ em hiểu anh/chị đang cân nhắc kỹ ạ. MindX có một số điểm khác biệt đáng chú ý:<br>• Lộ trình dài hạn 4-7 năm thay vì từng khóa lẻ<br>• Giáo viên chuyên môn và được đào tạo theo chuẩn MindX<br>• Hệ thống LMS + Compass theo dõi tiến độ minh bạch cho PH<br>• Cộng đồng 100,000+ HV, sự kiện Demo Day và thi đấu quốc tế<br>Em không so sánh trực tiếp với trung tâm khác, nhưng em có thể chia sẻ thêm về điểm nào anh/chị đang quan tâm nhất ạ?"</em></div>
    <p><strong>Không làm:</strong> Nói xấu trung tâm đối thủ, so sánh giá trực tiếp, hoặc bảo vệ quá mức.</p>
  </div>
</div>

<h4>Escalation Map — Ai xử lý gì?</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.85em;margin:10px 0;">
  <tr style="background:#7C3AED;color:#fff;"><th style="padding:8px;">Vấn đề</th><th style="padding:8px;">Người xử lý</th><th style="padding:8px;">SLA</th></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;">GV dạy không hay, HV chậm tiến</td><td style="padding:8px;border:1px solid #ddd;">CS + trao đổi với GV</td><td style="padding:8px;border:1px solid #ddd;">24h</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;">Yêu cầu đổi GV</td><td style="padding:8px;border:1px solid #ddd;">CS + CSL + TC</td><td style="padding:8px;border:1px solid #ddd;">48h</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;">Yêu cầu hoàn phí</td><td style="padding:8px;border:1px solid #ddd;">CS báo → CSL duyệt → CM duyệt → Finance xử lý</td><td style="padding:8px;border:1px solid #ddd;">5 ngày</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;">Bắt nạt / Sự cố nghiêm trọng</td><td style="padding:8px;border:1px solid #ddd;">CS báo ngay → CM xử lý</td><td style="padding:8px;border:1px solid #ddd;">Trong ngày</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;">Khiếu nại lên mạng xã hội</td><td style="padding:8px;border:1px solid #ddd;">CM + Marketing HO</td><td style="padding:8px;border:1px solid #ddd;">4h</td></tr>
</table>`,
  quiz: {
    id: "quiz_csk12_day4_s6",
    title: "Quiz: Xử lý 10 case",
    questions: [
      { q: "PH muốn hoàn toàn bộ học phí — mức độ xử lý là?", options: ["🟢 CS tự xử lý", "🟡 Cần CSL hỗ trợ", "🔴 Escalate CSL + CM ngay", "Không xử lý"], correct: 2, explanation: "Hoàn phí = 🔴 đỏ — phải escalate CSL + CM ngay, không tự cam kết số tiền." },
      { q: "L.A.S.T framework: chữ A nghĩa là?", options: ["Ask (hỏi thêm)", "Apologize (xin lỗi)", "Analyze (phân tích)", "Act (hành động)"], correct: 1, explanation: "A = Apologize — xin lỗi về trải nghiệm của PH, không tranh luận đúng/sai." },
      { q: "Khi HV bị bạn bắt nạt, CS cần làm gì ĐẦU TIÊN?", options: ["Gọi PH hỏi thêm rồi xử lý từ từ", "Báo ngay lên CM và xử lý trong ngày", "Tự điều tra trước", "Chờ GV xử lý"], correct: 1, explanation: "Bắt nạt = 🔴 đỏ nghiêm trọng — báo CM ngay, xử lý trong ngày, không để qua hôm sau." },
      { q: "Khi PHHS so sánh với trung tâm khác, CS KHÔNG nên làm gì?", options: ["Nêu điểm khác biệt của MindX", "Hỏi PH quan tâm điều gì nhất", "Nói xấu trực tiếp trung tâm đối thủ", "Lắng nghe mối quan tâm của PH"], correct: 2, explanation: "Không bao giờ nói xấu đối thủ — thiếu chuyên nghiệp và có thể tạo ấn tượng xấu cho MindX." },
      { q: "SLA (thời gian xử lý) cho yêu cầu hoàn phí là bao lâu?", options: ["24h", "48h", "5 ngày làm việc", "10 ngày"], correct: 2, explanation: "Hoàn phí có 5 bước duyệt (CS → CSL → CM → Finance → Chuyển tiền) — timeline chuẩn là 5 ngày làm việc." }
    ]
  }
}

      ]
    },

    /* ==================== CS K12 DAY 5 ==================== */
    {
      id: "csk12_day5",
      day: 5,
      title: "ĐÁNH GIÁ & HỆ THỐNG",
      subtitle: "Assessment & Systems",
      icon: "🏆",
      color: "#7C3AED",
      sections: [
        {
  id: "csk12_day5_s1",
  title: "Bài kiểm tra tổng hợp CS K12",
  icon: "📝",
  content: `<h3>Bài kiểm tra tổng hợp CS K12 — 30 câu + 5 câu tình huống</h3>
<div class="insight-card">
  <div class="insight-number">🎯</div>
  <div class="insight-body">
    <h4>Thông tin bài kiểm tra</h4>
    <table style="width:100%;border-collapse:collapse;font-size:0.85em;">
      <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Tổng câu hỏi</strong></td><td style="padding:8px;border:1px solid #ddd;">35 câu (30 trắc nghiệm + 5 tình huống)</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Thời gian</strong></td><td style="padding:8px;border:1px solid #ddd;">45 phút</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Điểm pass</strong></td><td style="padding:8px;border:1px solid #ddd;">≥ 75% (≥ 26/35 câu đúng)</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Cơ cấu nội dung</strong></td><td style="padding:8px;border:1px solid #ddd;">Kiến thức sản phẩm 25% | Vận hành lớp 25% | CSKH 30% | Xử lý phàn nàn 20%</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;"><strong>Không pass</strong></td><td style="padding:8px;border:1px solid #ddd;">Ôn lại nội dung yếu và thi lại sau 24h</td></tr>
    </table>
  </div>
</div>
<p style="margin-top:16px;font-weight:600;">👇 Bấm nút bên dưới để bắt đầu bài kiểm tra tổng hợp!</p>`,
  quiz: {
    id: "quiz_csk12_day5_final",
    title: "Kiểm tra tổng hợp CS K12 (35 câu — 45 phút)",
    timer: 2700,
    questions: [
      { q: "MindX được thành lập năm nào với tên gọi ban đầu là gì?", options: ["2013 — MindCode", "2015 — Techkids", "2016 — CodeSchool", "2017 — MindX"], correct: 1, explanation: "MindX thành lập 2015 với tên Techkids, đổi tên thành MindX Technology School năm 2017." },
      { q: "Sứ mệnh của MindX là gì?", options: ["Đào tạo nghề IT cho người lớn", "Trang bị kỹ năng công nghệ cho thế hệ trẻ Việt Nam", "Phát triển phần mềm giáo dục", "Kết nối giáo viên và học viên"], correct: 1, explanation: "Sứ mệnh: Trang bị kỹ năng công nghệ cho thế hệ trẻ Việt Nam, giúp họ tự tin bước vào kỷ nguyên số." },
      { q: "CS khác Sale ở KPI nào?", options: ["Doanh thu", "Retention, satisfaction, re-enroll", "Số lead tuyển sinh", "Số cuộc gọi tư vấn"], correct: 1, explanation: "CS tập trung retention (giữ chân), satisfaction (hài lòng), re-enroll (tái đăng ký) — không phải doanh thu." },
      { q: "6 tư duy dịch vụ CS MindX bao gồm tư duy nào?", options: ["Proactive, Empathy, Ownership, Detail, Solution, Data-driven", "Lấy HV làm trung tâm, Đồng hành, Chủ động, Cải tiến, Hơn mong đợi, Gắn kết sứ mệnh", "Listen, Analyze, Solve, Follow-up, Report, Improve", "Fast, Friendly, Flexible, Fair, Focused, Fun"], correct: 1, explanation: "6 tư duy: Lấy HV làm trung tâm | Đồng hành | Chủ động & Giải pháp | Cải tiến | Hơn cả mong đợi | Gắn kết sứ mệnh." },
      { q: "Lộ trình Coding K12 bắt đầu từ bao nhiêu tuổi và khóa gì?", options: ["8+ với Scratch", "10+ với Scratch Creator", "9+ với Python Basics", "12+ với Game Creator"], correct: 1, explanation: "Coding bắt đầu từ 10+ với Scratch Creator — lập trình kéo thả, không cần biết code." },
      { q: "Lộ trình Robotics gồm bao nhiêu năm và bắt đầu từ mấy tuổi?", options: ["3 năm từ 6+", "4 năm từ 4+", "5 năm từ 4+", "4 năm từ 6+"], correct: 1, explanation: "Robotics: 4 năm (Năm 0: 4+, Năm 1: 6+, Năm 2: 8+, Năm 3: 10+)." },
      { q: "Lộ trình Art & Design gồm bao nhiêu năm?", options: ["5 năm", "6 năm", "7 năm", "4 năm"], correct: 2, explanation: "Art & Design: 7 năm từ Little Artist (4+) đến Motion & Video (14+)." },
      { q: "Combo 24T có ưu đãi gì so với đăng ký từng khóa?", options: ["Chỉ giảm giá", "Giá tốt nhất + tặng áo MindX + ưu tiên lớp", "Free 3 tháng", "Tặng thiết bị học"], correct: 1, explanation: "Combo 24T: giá tốt nhất, tặng áo MindX, ưu tiên xếp lớp." },
      { q: "MindX thu phí hoàn là bao nhiêu % học phí còn lại?", options: ["10%", "15%", "20%", "25%"], correct: 2, explanation: "MindX giữ 20% phí xử lý, hoàn lại 80% học phí chưa sử dụng." },
      { q: "Student Profile cần cập nhật trong bao lâu sau khi PH thanh toán?", options: ["24h", "48h", "72h", "1 tuần"], correct: 1, explanation: "Thông tin HV + PH phải cập nhật trong 48h kể từ khi hoàn tất thanh toán." },
      { q: "Có bao nhiêu mốc chính CS cần chủ động hành động trong 14 buổi?", options: ["3", "4", "6", "14"], correct: 2, explanation: "6 mốc: Buổi 1, 3, 7, 10, 12, 14 — mỗi mốc có mục tiêu và script riêng." },
      { q: "'Golden Hour' sau buổi 1 gồm bao nhiêu việc CS phải làm?", options: ["3", "4", "5", "Chỉ cần gọi PH"], correct: 2, explanation: "5 việc trong 2 giờ đầu: gửi ảnh group, gọi PH, note HV, update LMS, hỏi GV." },
      { q: "Greeting Call nên thực hiện khi nào?", options: ["Sau buổi 1", "Ngay sau khi đăng ký, trước khai giảng", "Sau Checkpoint 1", "Khi PH yêu cầu"], correct: 1, explanation: "Greeting Call: ngay sau khi đăng ký thành công, trước buổi khai giảng — tạo ấn tượng đầu tiên." },
      { q: "Mục tiêu chính của cuộc gọi giữa khóa (buổi 7) là?", options: ["Chốt re-enroll ngay", "Báo cáo tiến độ và củng cố niềm tin", "Thông báo Demo Day", "Hỏi có phàn nàn không"], correct: 1, explanation: "Buổi 7 = báo cáo giữa khóa — xây dựng niềm tin. Chưa cần push re-enroll mạnh." },
      { q: "HV vắng 3 buổi liên tiếp, CS cần làm gì?", options: ["Chỉ ghi nhận LMS", "Escalate CSL + gọi PH + tư vấn giải pháp", "Chờ PH liên hệ", "Xóa tên khỏi lớp"], correct: 1, explanation: "3+ buổi = nghiêm trọng. CS gọi PH + escalate CSL để có phương án (bảo lưu/chuyển lớp)." },
      { q: "Type D trong DISC có đặc điểm giao tiếp nào?", options: ["Thích ảnh/video, cảm xúc", "Nói nhanh, muốn kết quả ngay, ít kiên nhẫn", "Cần thời gian suy nghĩ, thích ổn định", "Hỏi chi tiết, cần bằng chứng"], correct: 1, explanation: "Type D: Dominance — quyết đoán, muốn kết quả nhanh, nói thẳng, ít kiên nhẫn với chi tiết." },
      { q: "PH hỏi 'Giáo trình thế nào? So với trung tâm X khác gì?' — type nào?", options: ["D", "I", "S", "C"], correct: 3, explanation: "Type C: Conscientiousness — cần chi tiết, logic, bằng chứng và so sánh cụ thể." },
      { q: "Chữ 'S' trong S.E.R.V.E là?", options: ["Service", "See — Nhìn nhận nhu cầu trước", "Solve", "Support"], correct: 1, explanation: "S = See — Quan sát và nhận diện nhu cầu KH TRƯỚC KHI họ nói ra." },
      { q: "Khi xử lý phàn nàn, CS có nên tranh luận đúng/sai với PH không?", options: ["Có, nếu MindX đúng", "Không — xin lỗi trải nghiệm, tập trung giải pháp", "Tùy trường hợp", "Có, để PH hiểu rõ"], correct: 1, explanation: "Không bao giờ tranh luận — xin lỗi về TRẢI NGHIỆM và tập trung vào GIẢI PHÁP." },
      { q: "L.A.S.T framework: 4 bước theo thứ tự đúng là?", options: ["Lắng nghe → Hành động → Xin lỗi → Cảm ơn", "Lắng nghe → Xin lỗi → Giải quyết → Cảm ơn", "Xin lỗi → Lắng nghe → Giải quyết → Cảm ơn", "Hành động → Xin lỗi → Lắng nghe → Cảm ơn"], correct: 1, explanation: "L.A.S.T: Listen → Apologize → Solve → Thank — thứ tự này có lý do: PH cần được nghe trước." },
      { q: "HV lộ trình 12 tháng được bảo lưu tối đa bao lâu?", options: ["30 ngày", "90 ngày", "180 ngày", "Không giới hạn"], correct: 1, explanation: "Lộ trình 12T: 1 lần bảo lưu, tối đa 90 ngày." },
      { q: "Format tên Zalo group lớp học chuẩn MindX là?", options: ["Tên GV + Lớp", "MINDX-[Mã lớp]-[Tên CS]", "MindX Class [Thứ] [Giờ]", "Tùy CS đặt"], correct: 1, explanation: "Chuẩn: MINDX-[Mã lớp]-[Tên CS phụ trách]. Ví dụ: MINDX-SCRA001-NgocCS." },
      { q: "Compass là hệ thống dùng để làm gì?", options: ["Điểm danh", "Giao bài tập về nhà", "Gửi kết quả học tập và nhận xét cho PH", "Tạo lịch học"], correct: 2, explanation: "Compass: gửi kết quả, nhận xét GV, feedback định kỳ cho PH — PH nhận qua app Compass." },
      { q: "Nhiệt độ điều hòa chuẩn tại trung tâm MindX là?", options: ["20-22°C", "22-24°C", "24-28°C", "28-30°C"], correct: 2, explanation: "Tiêu chuẩn cứng: điều hòa 24-28°C để HV thoải mái học tập." },
      { q: "Khi PH muốn bảo lưu, CS nên làm gì TRƯỚC TIÊN?", options: ["Tạo ticket bảo lưu ngay", "Hỏi lý do và đề xuất giải pháp thay thế", "Gọi CSL ngay", "Đồng ý và xử lý"], correct: 1, explanation: "Luôn hỏi lý do trước — nhiều trường hợp có giải pháp tốt hơn bảo lưu (đổi lịch, chuyển lớp)." },
      { q: "Sau Demo Day, CS cần gửi video riêng cho PH trong bao lâu?", options: ["Ngay tại Demo Day", "Trong 2 giờ sau Demo", "Trong 24h", "Trong 3 ngày"], correct: 1, explanation: "Gửi trong 2 giờ — khi cảm xúc PH đang ở đỉnh cao nhất sau buổi Demo." },
      { q: "Tỷ lệ nghỉ ngang (vắng 3+ buổi) cần escalate cho ai?", options: ["GV", "CSL", "CM", "IT"], correct: 1, explanation: "3+ buổi vắng → escalate CSL để có phương án xử lý phù hợp (bảo lưu, chuyển lớp, gọi gia đình)." },
      { q: "CSAT là viết tắt của gì và cần thu khi nào?", options: ["Customer Service Award — hàng năm", "Customer Satisfaction — sau Demo Day", "Class Student Assessment — sau CP", "Center Service Analysis — hàng tháng"], correct: 1, explanation: "CSAT = Customer Satisfaction — thu sau Demo Day, mục tiêu ≥ 4.5/5 điểm." },
      { q: "HV chờ xếp lớp, CS cần cập nhật bao lâu 1 lần?", options: ["Mỗi ngày", "Mỗi 7 ngày", "Mỗi 2 tuần", "Chỉ khi có lớp"], correct: 1, explanation: "Cập nhật mỗi 7 ngày — đủ để PH yên tâm mà không bị làm phiền." },
      { q: "CS rời quầy lễ tân tối đa bao nhiêu phút?", options: ["2 phút", "5 phút", "10 phút", "Không có quy định"], correct: 1, explanation: "Tối đa 5 phút rời quầy. Không ăn uống, không sinh hoạt cá nhân tại quầy lễ tân." },
      // Situational questions (5 câu tình huống)
      { q: "[TÌNH HUỐNG] PH nhắn Zalo 10h tối: 'Con tôi bị bạn trên lớp trêu chọc, mai không cho đi học nữa.' CS nên làm gì?", options: ["Reply 'Dạ em ghi nhận, sáng mai xử lý ạ'", "Gọi điện ngay cho PH dù đã 10h tối, lắng nghe và xác nhận sẽ báo CM ngay sáng mai", "Nhắn 'Sáng mai anh chị đến trung tâm gặp trực tiếp'", "Chờ sáng mai đọc tin nhắn rồi xử lý"], correct: 1, explanation: "Bắt nạt = tình huống 🔴 đỏ. Gọi điện ngay dù muộn, xác nhận vấn đề, hứa xử lý ngay sáng hôm sau với CM." },
      { q: "[TÌNH HUỐNG] PH type D gọi hỏi: 'Kết quả CP1 con tôi thế nào?' — CS nên trả lời thế nào?", options: ["Kể dài dòng về quá trình học của bé từ buổi 1", "'Dạ bé đạt 8/10 ạ! Điểm mạnh: logic tốt. Cần cải thiện: phần giao diện. GV đã sắp xếp hỗ trợ riêng.'", "'Dạ bé học khá ổn ạ, anh/chị không lo.'", "'Để em kiểm tra lại rồi gọi lại cho anh/chị.'"], correct: 1, explanation: "Type D cần kết quả nhanh, ngắn gọn, có hành động cụ thể. Đáp án 2 đủ thông tin trong 2-3 câu." },
      { q: "[TÌNH HUỐNG] Đang buổi 10, bé chưa làm bài về nhà 4 buổi liên tiếp, GV báo cáo. CS cần làm gì?", options: ["Nhắn Zalo nhắc PH về BTVN", "Gọi PH tìm hiểu lý do sâu hơn, trao đổi với GV về giải pháp hỗ trợ bé, đặt lịch follow-up sau 2 buổi", "Ghi nhận vào báo cáo và chờ thêm", "Báo thẳng cho CM"], correct: 1, explanation: "4 buổi không làm bài là dấu hiệu early warning. CS cần gọi PH (không chỉ nhắn), tìm hiểu và hành động cụ thể." },
      { q: "[TÌNH HUỐNG] PH nói 'Trung tâm X gần nhà hơn và rẻ hơn, sao tôi nên tiếp tục ở MindX?' CS trả lời thế nào?", options: ["'MindX tốt hơn trung tâm X nhiều ạ'", "'Em không so sánh ạ, nhưng em có thể chia sẻ lý do nhiều PH chọn gắn bó với MindX dài hạn không ạ? [Nêu điểm mạnh cụ thể: lộ trình, cộng đồng, kết quả thực tế]'", "'Thì anh/chị cân nhắc thêm đi ạ'", "'Mỗi trung tâm đều tốt như nhau ạ'"], correct: 1, explanation: "Không nói xấu đối thủ. Tập trung vào giá trị MindX mang lại cụ thể, để PH tự so sánh dựa trên sự thật." },
      { q: "[TÌNH HUỐNG] PH muốn đăng ký khóa mới cho bé nhưng tài chính khó khăn, hỏi có cách nào học mà trả góp không? CS làm gì?", options: ["'Dạ MindX không có trả góp ạ'", "'Dạ MindX có hỗ trợ trả góp qua Rootopia ạ. Em có thể tư vấn chi tiết cho anh/chị không ạ?'", "Chuyển cho Sale xử lý", "'Anh/chị vay tiền của ngân hàng đi ạ'"], correct: 1, explanation: "MindX có chương trình trả góp qua Rootopia. CS cần biết để tư vấn — đây là giải pháp giữ chân PH hiệu quả." }
    ]
  }
},

        {
  id: "csk12_day5_s2",
  title: "Hướng dẫn hệ thống",
  icon: "💻",
  content: `<h3>Các hệ thống CS cần sử dụng hàng ngày</h3>
<p>CS K12 làm việc trên 4 hệ thống chính: <strong>LMS, Compass, Denise, và Zalo group</strong>. Biết dùng đúng = tiết kiệm thời gian và tránh sai sót.</p>

<div class="insight-card">
  <div class="insight-number">1</div>
  <div class="insight-body">
    <h4>📊 LMS (Learning Management System) — Hệ thống quản lý lớp học</h4>
    <p><strong>Dùng để làm gì:</strong></p>
    <ul>
      <li><strong>Tạo lớp:</strong> Nhập mã lớp (đúng chuẩn đặt tên), sĩ số, môn học, level, GV phụ trách, lịch học</li>
      <li><strong>Quản lý HV:</strong> Thêm HV vào lớp, theo dõi status (đang học / bảo lưu / nghỉ ngang), chuyển lớp</li>
      <li><strong>Điểm danh:</strong> GV điểm danh đầu mỗi buổi → CS kiểm tra cuối ngày</li>
      <li><strong>Checkpoint:</strong> GV chấm điểm → CS review → Duyệt để gửi qua Compass</li>
      <li><strong>Nghiệm thu sản phẩm:</strong> Upload sản phẩm + video demo cuối khóa</li>
      <li><strong>Tạo ticket:</strong> Bảo lưu, dropout, hoàn phí — tất cả qua LMS ticket system</li>
    </ul>
    <div style="background:#FFF5F5;padding:10px;border-radius:6px;margin-top:8px;font-size:0.85em;">
      <strong>Lỗi thường gặp:</strong><br>
      ❌ Quên update Student Profile trong 48h<br>
      ❌ GV không điểm danh, CS không nhắc<br>
      ❌ Upload sản phẩm demo muộn (sau 96h)
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">2</div>
  <div class="insight-body">
    <h4>📱 Compass — App phụ huynh</h4>
    <p><strong>Chức năng chính:</strong> Gửi kết quả học tập, nhận xét GV, và thông báo cho PH</p>
    <ul>
      <li>Sau mỗi CP, GV comment điểm + nhận xét trên LMS → tự đồng bộ lên Compass</li>
      <li>CS kiểm tra GV đã comment đầy đủ chưa trước khi duyệt</li>
      <li>PH nhận notification qua app và xem kết quả trực tiếp</li>
      <li>CS không gửi kết quả thủ công — hệ thống tự đồng bộ khi CS phê duyệt trên LMS</li>
    </ul>
    <div style="background:#FFF5F5;padding:10px;border-radius:6px;margin-top:8px;font-size:0.85em;">
      <strong>Lỗi thường gặp:</strong><br>
      ❌ PH phàn nàn không nhận kết quả CP → kiểm tra GV đã điền đủ chưa, CS đã phê duyệt chưa<br>
      ❌ Nhận xét GV bị lỗi encoding (font chữ) → nhắc GV không copy-paste từ Word
    </div>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">3</div>
  <div class="insight-body">
    <h4>📚 Denise — Hệ thống bài tập về nhà</h4>
    <ul>
      <li>GV giao BTVN sau mỗi buổi qua Denise</li>
      <li>CS theo dõi tỷ lệ hoàn thành: nếu HV không làm → nhắc PH qua Zalo</li>
      <li>Upload sản phẩm cuối khóa của HV lên Denise để lưu hồ sơ</li>
      <li>CS không giao bài trực tiếp — chỉ theo dõi và nhắc nhở</li>
    </ul>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">4</div>
  <div class="insight-body">
    <h4>💬 Zalo Group Lớp học</h4>
    <p><strong>Thiết lập:</strong></p>
    <ul>
      <li>Tên: MINDX-[Mã lớp]-[Tên CS]</li>
      <li>Thành viên: PH các HV + GV + CS + CSL (optional)</li>
      <li>Ảnh group: Logo MindX hoặc ảnh lớp học</li>
    </ul>
    <p><strong>Nội dung gửi định kỳ:</strong></p>
    <table style="width:100%;border-collapse:collapse;font-size:0.85em;">
      <tr style="background:#059669;color:#fff;"><th style="padding:6px;">Loại tin</th><th style="padding:6px;">Tần suất</th><th style="padding:6px;">Nội dung</th></tr>
      <tr><td style="padding:6px;border:1px solid #ddd;">Ảnh/video lớp</td><td style="padding:6px;border:1px solid #ddd;">Mỗi buổi học</td><td style="padding:6px;border:1px solid #ddd;">2-3 ảnh HV đang học, không chụp mặt nếu chưa xin phép</td></tr>
      <tr><td style="padding:6px;border:1px solid #ddd;">Nhắc lịch</td><td style="padding:6px;border:1px solid #ddd;">Trước buổi học 1 ngày</td><td style="padding:6px;border:1px solid #ddd;">Thứ, giờ, địa điểm, chuẩn bị gì</td></tr>
      <tr><td style="padding:6px;border:1px solid #ddd;">Thông báo đặc biệt</td><td style="padding:6px;border:1px solid #ddd;">Khi cần</td><td style="padding:6px;border:1px solid #ddd;">Dời lịch, Demo Day, sự kiện</td></tr>
    </table>
    <p style="margin-top:8px;"><strong>Rules Zalo group:</strong> Không spam, không quảng cáo ngoài MindX, giữ thông tin lịch sự, phản hồi PH trong 2h (giờ hành chính).</p>
  </div>
</div>

<h4>Dashboard & KPI hàng tuần</h4>
<div class="insight-card">
  <div class="insight-number">📈</div>
  <div class="insight-body">
    <p>Mỗi tuần, CS cần kiểm tra dashboard để đảm bảo KPI đang đúng hướng:</p>
    <table style="width:100%;border-collapse:collapse;font-size:0.85em;">
      <tr style="background:#2563EB;color:#fff;"><th style="padding:8px;">KPI</th><th style="padding:8px;">Mục tiêu</th><th style="padding:8px;">Cách đọc</th></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Tỷ lệ chuyên cần</td><td style="padding:8px;border:1px solid #ddd;">≥ 85%</td><td style="padding:8px;border:1px solid #ddd;">Số buổi học thực tế / Tổng buổi trong kỳ</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Tỷ lệ gia hạn (Retention)</td><td style="padding:8px;border:1px solid #ddd;">≥ 70%</td><td style="padding:8px;border:1px solid #ddd;">Số HV đăng ký khóa tiếp / Số HV kết thúc khóa</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">CSAT</td><td style="padding:8px;border:1px solid #ddd;">≥ 4.5/5</td><td style="padding:8px;border:1px solid #ddd;">Điểm hài lòng trung bình từ khảo sát PH</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;">Complaint rate</td><td style="padding:8px;border:1px solid #ddd;">≤ 5%</td><td style="padding:8px;border:1px solid #ddd;">Số khiếu nại / Tổng số PH đang quản lý</td></tr>
    </table>
  </div>
</div>`,
  quiz: {
    id: "quiz_csk12_day5_s2",
    title: "Quiz: Hướng dẫn hệ thống",
    questions: [
      { q: "LMS dùng để làm gì trong công việc CS K12?", options: ["Gửi email marketing", "Tạo lớp, quản lý HV, điểm danh, checkpoint, tạo ticket", "Chat với PH", "Đặt phòng họp"], correct: 1, explanation: "LMS là hệ thống trung tâm: tạo lớp, quản lý HV, điểm danh, chấm điểm CP, upload sản phẩm, tạo ticket bảo lưu/dropout." },
      { q: "Khi PH phàn nàn không nhận kết quả CP trên Compass, CS kiểm tra điều gì?", options: ["Gửi lại email thủ công", "GV đã comment đủ chưa + CS đã phê duyệt trên LMS chưa", "Liên hệ IT", "Hỏi PH cài đúng app chưa"], correct: 1, explanation: "Compass tự đồng bộ từ LMS. Nếu PH không nhận → kiểm tra GV đã điền nhận xét đủ chưa và CS đã duyệt chưa." },
      { q: "Tỷ lệ gia hạn (Retention) mục tiêu của CS K12 là?", options: ["≥ 50%", "≥ 60%", "≥ 70%", "≥ 90%"], correct: 2, explanation: "Mục tiêu retention rate ≥ 70% — tức ít nhất 7/10 HV kết thúc khóa sẽ đăng ký khóa tiếp." },
      { q: "Format tên Zalo group lớp học chuẩn là?", options: ["Tên GV + Lớp", "MINDX-[Mã lớp]-[Tên CS]", "MindX [Môn] [Thứ/Giờ]", "Tùy CS đặt"], correct: 1, explanation: "Chuẩn: MINDX-[Mã lớp]-[Tên CS phụ trách]. Đồng nhất giúp dễ quản lý và tra cứu." },
      { q: "Denise được dùng để làm gì?", options: ["Điểm danh", "Giao bài tập về nhà và upload sản phẩm", "Tạo lớp", "Gửi kết quả cho PH"], correct: 1, explanation: "Denise: GV giao BTVN, HV nộp bài, CS upload sản phẩm cuối khóa. Không phải hệ thống điểm danh hay tạo lớp." }
    ]
  }
},

        {
          id: "csk12_day5_s3",
          title: "Hình ảnh & Tác phong CS",
          icon: "👔",
          content: `<h3>Hình ảnh & Tác phong CS MindX chuyên nghiệp</h3>
<p>Ấn tượng đầu tiên được tạo ra trong 7 giây — trước khi bạn nói một câu nào. Tác phong và hình ảnh của CS không chỉ thể hiện cá nhân mà thể hiện toàn bộ thương hiệu MindX.</p>

<h4>Quy định trang phục</h4>
<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:0.85rem;">
  <thead><tr style="background:#7C3AED;color:#fff;"><th style="padding:10px;border:1px solid #A78BFA;">Ngày</th><th style="padding:10px;border:1px solid #A78BFA;">Quy định</th><th style="padding:10px;border:1px solid #A78BFA;">Chi tiết</th></tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>Thứ 2 – Thứ 4</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Trang phục lịch sự</td><td style="padding:8px;border:1px solid #E2E8F0;">Áo thun/sơ mi trơn màu, quần dài, giày kín mũi</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>Thứ 5 – Chủ nhật</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Đồng phục MindX</td><td style="padding:8px;border:1px solid #E2E8F0;">Bắt buộc — áo đồng phục MindX + quần lịch sự</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>Ngày sự kiện</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Đồng phục MindX</td><td style="padding:8px;border:1px solid #E2E8F0;">Tất cả nhân sự — Demo Day, họp PH, sự kiện đặc biệt</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>Trực lễ tân</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Đồng phục MindX</td><td style="padding:8px;border:1px solid #E2E8F0;">Bất kể ngày nào khi ngồi tại quầy tiếp khách</td></tr>
  </tbody>
</table>

<h4>Chuẩn tác phong — Chi tiết</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.85em;margin:10px 0;">
  <tr style="background:#7C3AED;color:#fff;"><th style="padding:8px;">Yếu tố</th><th style="padding:8px;">Chuẩn MindX</th><th style="padding:8px;">Không được phép</th></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">Tóc</td><td style="padding:8px;border:1px solid #ddd;">Gọn gàng, sạch sẽ, màu tự nhiên hoặc tối đa 1 màu nhuộm nhẹ</td><td style="padding:8px;border:1px solid #ddd;">Tóc rối, nhiều màu loè loẹt, tóc che mặt</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">Móng tay</td><td style="padding:8px;border:1px solid #ddd;">Cắt gọn, sạch, tối đa 1cm, sơn màu nhẹ nếu có</td><td style="padding:8px;border:1px solid #ddd;">Móng quá dài, vẽ cầu kỳ nhiều màu</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">Nước hoa</td><td style="padding:8px;border:1px solid #ddd;">Không mùi hoặc nhẹ nhàng, không gây khó chịu</td><td style="padding:8px;border:1px solid #ddd;">Mùi nồng, có mùi cơ thể</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">Trang sức</td><td style="padding:8px;border:1px solid #ddd;">Đơn giản, tối đa 1 vòng tay, 1 dây chuyền nhỏ</td><td style="padding:8px;border:1px solid #ddd;">Nhiều trang sức cồng kềnh, tạo tiếng động</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">Bảng tên</td><td style="padding:8px;border:1px solid #ddd;">Đeo bên trái ngực, luôn hiển thị rõ ràng</td><td style="padding:8px;border:1px solid #ddd;">Quên đeo, đeo sai vị trí, bảng tên bẩn/cong</td></tr>
</table>

<h4>Chuẩn giao tiếp</h4>
<div class="insight-card">
  <div class="insight-number">📱</div>
  <div class="insight-body">
    <h4>4 kênh giao tiếp — Chuẩn phản hồi</h4>
    <table style="width:100%;border-collapse:collapse;font-size:0.85em;">
      <tr style="background:#EDE9FE;"><th style="padding:8px;border:1px solid #ddd;">Kênh</th><th style="padding:8px;border:1px solid #ddd;">Thời gian phản hồi</th><th style="padding:8px;border:1px solid #ddd;">Lưu ý</th></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">Điện thoại</td><td style="padding:8px;border:1px solid #ddd;">Bắt máy ngay (trong 3 hồi chuông)</td><td style="padding:8px;border:1px solid #ddd;">Nếu đang bận: gọi lại trong 30 phút</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">Zalo cá nhân</td><td style="padding:8px;border:1px solid #ddd;">Trong 30 phút (giờ hành chính)</td><td style="padding:8px;border:1px solid #ddd;">Ngoài 18h: phản hồi buổi sáng hôm sau</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">Zalo group lớp</td><td style="padding:8px;border:1px solid #ddd;">Trong 1 giờ (giờ hành chính)</td><td style="padding:8px;border:1px solid #ddd;">Không gửi tin ngoài 21h</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">Gặp trực tiếp</td><td style="padding:8px;border:1px solid #ddd;">Phục vụ ngay</td><td style="padding:8px;border:1px solid #ddd;">Đứng dậy chào, mời ngồi, mời nước</td></tr>
    </table>
  </div>
</div>

<h4>Checklist hành động đầu ca làm việc (10 mục)</h4>
<div class="insight-card">
  <div class="insight-number">✅</div>
  <div class="insight-body">
    <table style="width:100%;border-collapse:collapse;font-size:0.85em;margin:10px 0;">
      <tr style="background:#EDE9FE;color:#5B21B6;"><th style="padding:8px;border:1px solid #ddd;">#</th><th style="padding:8px;border:1px solid #ddd;">Hành động</th><th style="padding:8px;border:1px solid #ddd;">Thời điểm</th></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">1</td><td style="padding:8px;border:1px solid #ddd;">Kiểm tra đồng phục/trang phục, bảng tên</td><td style="padding:8px;border:1px solid #ddd;">Trước 8h</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">2</td><td style="padding:8px;border:1px solid #ddd;">Kiểm tra lịch lớp học trong ngày trên LMS</td><td style="padding:8px;border:1px solid #ddd;">8h00</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">3</td><td style="padding:8px;border:1px solid #ddd;">Reply tin nhắn PH chưa trả lời từ hôm trước</td><td style="padding:8px;border:1px solid #ddd;">8h–8h30</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">4</td><td style="padding:8px;border:1px solid #ddd;">Kiểm tra phòng học: điều hòa (24–28°C), màn hình, bàn ghế</td><td style="padding:8px;border:1px solid #ddd;">Trước giờ học 30 phút</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">5</td><td style="padding:8px;border:1px solid #ddd;">Điểm danh khi lớp bắt đầu, cập nhật LMS</td><td style="padding:8px;border:1px solid #ddd;">Đầu buổi học</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">6</td><td style="padding:8px;border:1px solid #ddd;">Hỏi GV sau buổi: HV nào có vấn đề đặc biệt?</td><td style="padding:8px;border:1px solid #ddd;">Sau mỗi buổi học</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">7</td><td style="padding:8px;border:1px solid #ddd;">Reply tất cả tin nhắn PH chưa trả lời</td><td style="padding:8px;border:1px solid #ddd;">Cuối ngày</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">8</td><td style="padding:8px;border:1px solid #ddd;">Cập nhật note chăm sóc trên CRM</td><td style="padding:8px;border:1px solid #ddd;">Cuối ngày</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">9</td><td style="padding:8px;border:1px solid #ddd;">Kiểm tra phòng học sẵn sàng cho ngày mai</td><td style="padding:8px;border:1px solid #ddd;">Cuối ngày</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">10</td><td style="padding:8px;border:1px solid #ddd;">Xem lịch mốc (buổi 1/3/7/10/12/14) của tuần tới</td><td style="padding:8px;border:1px solid #ddd;">Cuối ngày</td></tr>
    </table>
  </div>
</div>

<h4>CS chuyên nghiệp vs CS nghiệp dư — 10 so sánh</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.85em;margin:10px 0;">
  <tr style="background:#7C3AED;color:#fff;"><th style="padding:8px;">#</th><th style="padding:8px;">CS nghiệp dư làm…</th><th style="padding:8px;">CS chuyên nghiệp làm…</th></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">1</td><td style="padding:8px;border:1px solid #ddd;">Chờ PH hỏi rồi mới trả lời</td><td style="padding:8px;border:1px solid #ddd;">Chủ động cập nhật đúng mốc, không cần PH hỏi</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">2</td><td style="padding:8px;border:1px solid #ddd;">Khi PH phàn nàn: bào chữa ngay</td><td style="padding:8px;border:1px solid #ddd;">Lắng nghe → Xin lỗi → Đưa giải pháp → Follow-up</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">3</td><td style="padding:8px;border:1px solid #ddd;">Nói với MỌI PH theo 1 cách duy nhất</td><td style="padding:8px;border:1px solid #ddd;">Nhận diện DISC type → điều chỉnh cách giao tiếp</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">4</td><td style="padding:8px;border:1px solid #ddd;">Hứa nhưng quên follow-up</td><td style="padding:8px;border:1px solid #ddd;">Hứa → Set reminder → Follow-up đúng hẹn</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">5</td><td style="padding:8px;border:1px solid #ddd;">Chờ HV dropout rồi mới xử lý</td><td style="padding:8px;border:1px solid #ddd;">Nhận early warning sớm → can thiệp kịp thời</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">6</td><td style="padding:8px;border:1px solid #ddd;">Gửi báo cáo giống nhau cho tất cả PH</td><td style="padding:8px;border:1px solid #ddd;">Báo cáo cá nhân hóa, nêu điểm mạnh/yếu cụ thể</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">7</td><td style="padding:8px;border:1px solid #ddd;">Demo Day: tổ chức xong là xong</td><td style="padding:8px;border:1px solid #ddd;">Gửi video riêng từng bé + lời nhận xét trong 2h</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">8</td><td style="padding:8px;border:1px solid #ddd;">Trả lời PH: "Em không biết ạ"</td><td style="padding:8px;border:1px solid #ddd;">"Em sẽ kiểm tra và báo lại anh/chị trước [giờ]"</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">9</td><td style="padding:8px;border:1px solid #ddd;">Mặc đồng phục không chỉnh tề</td><td style="padding:8px;border:1px solid #ddd;">Đồng phục gọn gàng, bảng tên đúng vị trí, luôn nụ cười</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;text-align:center;">10</td><td style="padding:8px;border:1px solid #ddd;">Xem công việc CS như "trực lớp"</td><td style="padding:8px;border:1px solid #ddd;">Xem công việc CS là "đồng hành với hàng chục gia đình"</td></tr>
</table>

<h4>"30 ngày đầu tiên của CS mới" — Roadmap từng tuần</h4>
<div class="insight-card">
  <div class="insight-number">🗓️</div>
  <div class="insight-body">
    <table style="width:100%;border-collapse:collapse;font-size:0.85em;">
      <tr style="background:#7C3AED;color:#fff;"><th style="padding:8px;">Tuần</th><th style="padding:8px;">Trọng tâm</th><th style="padding:8px;">Mục tiêu cụ thể</th></tr>
      <tr style="background:#EDE9FE;">
        <td style="padding:8px;border:1px solid #ddd;font-weight:700;text-align:center;">Tuần 1<br>(Ngày 1–5)</td>
        <td style="padding:8px;border:1px solid #ddd;"><strong>Quan sát & học hỏi</strong></td>
        <td style="padding:8px;border:1px solid #ddd;"><ul style="margin:0;padding-left:16px;"><li>Học 5 ngày onboard đầy đủ</li><li>Shadow CSL và đồng nghiệp</li><li>Nắm vững LMS, Compass, Denise</li><li>Nhớ tên 20+ HV trong lớp</li></ul></td>
      </tr>
      <tr>
        <td style="padding:8px;border:1px solid #ddd;font-weight:700;text-align:center;">Tuần 2<br>(Ngày 6–12)</td>
        <td style="padding:8px;border:1px solid #ddd;"><strong>Thực hành có hướng dẫn</strong></td>
        <td style="padding:8px;border:1px solid #ddd;"><ul style="margin:0;padding-left:16px;"><li>Tự thực hiện Greeting Call (có CSL nghe kèm)</li><li>Điểm danh và quản lý lớp độc lập</li><li>Thực hành script sau buổi 1</li><li>Xử lý 1–2 tình huống đơn giản</li></ul></td>
      </tr>
      <tr style="background:#EDE9FE;">
        <td style="padding:8px;border:1px solid #ddd;font-weight:700;text-align:center;">Tuần 3<br>(Ngày 13–20)</td>
        <td style="padding:8px;border:1px solid #ddd;"><strong>Độc lập có kiểm tra</strong></td>
        <td style="padding:8px;border:1px solid #ddd;"><ul style="margin:0;padding-left:16px;"><li>Tự xử lý 100% tình huống thường ngày</li><li>Escalate đúng khi gặp phức tạp</li><li>Check-in buổi 7 đầu tiên</li><li>Theo dõi KPI cá nhân</li></ul></td>
      </tr>
      <tr>
        <td style="padding:8px;border:1px solid #ddd;font-weight:700;text-align:center;">Tuần 4<br>(Ngày 21–30)</td>
        <td style="padding:8px;border:1px solid #ddd;"><strong>Tự chủ & phản chiếu</strong></td>
        <td style="padding:8px;border:1px solid #ddd;"><ul style="margin:0;padding-left:16px;"><li>Hoàn thiện quy trình 14 buổi</li><li>Tư vấn re-enroll đầu tiên</li><li>Review gap kiến thức onboard</li><li>Đặt mục tiêu KPI tháng 1 với CSL</li></ul></td>
      </tr>
    </table>
  </div>
</div>

<div class="key-takeaway">
  <h4>🏁 Key Takeaway — CS chuyên nghiệp MindX</h4>
  <p>Sau 30 ngày đầu tiên, bạn không chỉ biết "làm gì" mà còn biết "làm thế nào" và "làm lúc nào". Mỗi hành động của CS đều có mục đích rõ ràng: giữ chân học viên, phát triển phụ huynh, và đóng góp vào sứ mệnh MindX.</p>
  <p><strong>Công thức thành công:</strong> Đúng việc × Đúng lúc × Đúng cách = CS xuất sắc MindX</p>
</div>`,
          quiz: {
            id: "quiz_csk12_day5_s3",
            title: "Quiz: Hình ảnh & Tác phong CS",
            questions: [
              {
                q: "Ngày nào trong tuần CS MindX mặc đồng phục bắt buộc?",
                options: ["Thứ 2 – Thứ 4", "Thứ 5 – Chủ nhật", "Cả tuần", "Chỉ ngày sự kiện"],
                correct: 1,
                explanation: "Thứ 5 đến Chủ nhật là ngày mặc đồng phục MindX bắt buộc. Thứ 2–4 mặc trang phục lịch sự."
              },
              {
                q: "CS được rời khỏi quầy lễ tân tối đa bao nhiêu phút?",
                options: ["2 phút", "5 phút", "10 phút", "15 phút"],
                correct: 1,
                explanation: "Tối đa 5 phút — không hoạt động cá nhân tại quầy, không ăn uống khi đang trực."
              },
              {
                q: "Thời gian phản hồi tối đa với PH qua Zalo trong giờ hành chính?",
                options: ["15 phút", "30 phút", "1 giờ", "2 giờ"],
                correct: 1,
                explanation: "Chuẩn MindX: phản hồi trong vòng 30 phút trong giờ hành chính (8h–18h)."
              },
              {
                q: "CS mới trong tuần đầu tiên nên ưu tiên điều gì?",
                options: ["Tự học sản phẩm", "Quan sát & shadow CSL/đồng nghiệp", "Tiếp nhận lớp học ngay", "Gọi điện cho PH"],
                correct: 1,
                explanation: "Tuần 1: quan sát và shadow — học từ CSL và đồng nghiệp thực chiến, không tự tiếp nhận lớp ngay."
              },
              {
                q: "Điểm khác biệt cốt lõi giữa CS chuyên nghiệp và CS nghiệp dư là gì?",
                options: ["Kinh nghiệm làm việc lâu năm", "Chủ động hành động đúng mốc, không chờ PH hỏi", "Ngoại hình và giọng nói", "Bằng cấp chuyên ngành"],
                correct: 1,
                explanation: "CS chuyên nghiệp chủ động cập nhật ở đúng mốc (buổi 1, 3, 7, 10, 12, 14) — không cần PH hỏi mới phản hồi."
              }
            ]
          }
        }

      ]
    }
  ]
}

}; /* end TRAINING_DATA */
