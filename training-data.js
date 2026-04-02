/* ============================================================
   MindX Training Module — All Training Content Data
   Version: 1.0 | March 2026
   ============================================================ */

const TRAINING_DATA = {

  /* --------------------------------------------------------
     ONBOARD 5-DAY PROGRAM
     -------------------------------------------------------- */
  onboard: {
    title: "Lộ trình Onboard 5 ngày",
    description: "Chương trình đào tạo Onboard dành cho TVTS mới. Hoàn thành trong 5 ngày để bắt đầu tư vấn chuyên nghiệp.",
    days: [

      /* ==================== DAY 1 ==================== */
      {
        id: "day1",
        day: 1,
        title: "WHY & MINDSET",
        subtitle: "Tại sao & Tư duy",
        icon: "💡",
        color: "#E53E3E",
        sections: [
          {
            id: "day1_s1",
            title: "Tại sao PHHS đầu tư cho con học STEM/Coding/Art?",
            icon: "🎯",
            content: `<h3>5 Insight về nỗi đau của Phụ huynh Việt Nam</h3>
<p>Hiểu rõ tâm lý phụ huynh là chìa khóa để tư vấn hiệu quả. Dưới đây là 5 nỗi đau phổ biến nhất mà TVTS cần nắm vững:</p>

<div class="insight-card">
  <div class="insight-number">1</div>
  <div class="insight-body">
    <h4>😰 Lo con nghiện game → Chuyển hướng sang sáng tạo</h4>
    <p><strong>Thực trạng:</strong> 67% phụ huynh Việt Nam lo lắng về thời gian con dùng thiết bị điện tử (khảo sát 2025). Trẻ dành trung bình 3-4 giờ/ngày cho game và mạng xã hội.</p>
    <p><strong>Giải pháp MindX:</strong> Thay vì cấm, hãy chuyển hướng! Khi học lập trình, trẻ chuyển từ <em>người chơi game</em> thành <em>người tạo game</em>. Coding giúp trẻ hiểu cách game hoạt động, từ đó giảm sự phụ thuộc và phát triển tư duy sáng tạo.</p>
    <p><strong>Script mẫu:</strong> <em>"Anh/chị ơi, thay vì lo lắng con nghiện game, mình có thể biến niềm đam mê đó thành lợi thế. Khi con học làm game, con sẽ hiểu game chỉ là sản phẩm của code — và con hoàn toàn có thể tạo ra game của riêng mình!"</em></p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">2</div>
  <div class="insight-body">
    <h4>📊 Lo con thua bạn bè → STEM là kỹ năng thế kỷ 21</h4>
    <p><strong>Thực trạng:</strong> Phụ huynh luôn so sánh con với bạn bè, đặc biệt trong thời đại AI bùng nổ. 78% PH cho rằng con cần kỹ năng công nghệ để không bị tụt hậu.</p>
    <p><strong>Giải pháp MindX:</strong> STEM/Coding không chỉ là môn học — đó là "ngôn ngữ thứ hai" của thế kỷ 21. Theo World Economic Forum, 65% trẻ em ngày nay sẽ làm những nghề chưa tồn tại. Cho con học sớm = cho con lợi thế cạnh tranh.</p>
    <p><strong>Script mẫu:</strong> <em>"85% phụ huynh tại MindX chia sẻ rằng sau 6 tháng, con họ tự tin hơn hẳn trong tư duy giải quyết vấn đề — không chỉ trong lập trình mà cả trong học tập ở trường."</em></p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">3</div>
  <div class="insight-body">
    <h4>💼 Lo tương lai nghề nghiệp → CNTT là ngành lương cao nhất</h4>
    <p><strong>Thực trạng:</strong> Lương trung bình ngành CNTT tại Việt Nam cao hơn 2-3 lần mức trung bình. Senior Developer có thể kiếm 50-100 triệu/tháng. Nhu cầu nhân sự CNTT tăng 30% mỗi năm.</p>
    <p><strong>Giải pháp MindX:</strong> MindX không chỉ dạy code — MindX xây dựng nền tảng tư duy giúp con thành công trong BẤT KỲ ngành nghề nào liên quan đến công nghệ. Lộ trình 5 năm từ cơ bản đến chuyên sâu.</p>
    <p><strong>Script mẫu:</strong> <em>"Anh/chị biết không, theo thống kê mới nhất, một lập trình viên giỏi tại VN có thể kiếm từ 30-100 triệu/tháng. Nhưng quan trọng hơn, tư duy lập trình giúp con giỏi hơn ở MỌI lĩnh vực — từ toán học, khoa học đến kinh doanh."</em></p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">4</div>
  <div class="insight-body">
    <h4>🧠 Lo con thiếu tư duy logic → Lập trình rèn tư duy</h4>
    <p><strong>Thực trạng:</strong> Nhiều trẻ gặp khó khăn với toán và các môn cần tư duy logic. PH muốn con phát triển khả năng phân tích và giải quyết vấn đề nhưng không biết bắt đầu từ đâu.</p>
    <p><strong>Giải pháp MindX:</strong> Coding = Gym cho não. Mỗi bài lập trình là một bài toán cần tư duy logic, phân tích, chia nhỏ vấn đề, và tìm giải pháp. Nghiên cứu từ MIT cho thấy trẻ học lập trình cải thiện điểm Toán trung bình 15-20%.</p>
    <p><strong>Script mẫu:</strong> <em>"Lập trình giống như gym cho não vậy đó anh/chị. Mỗi bài code là một bài toán nhỏ — con phải phân tích, chia nhỏ vấn đề, thử nghiệm, và tìm ra cách giải. Sau 3 tháng, phụ huynh thường phản hồi con tư duy nhanh hơn hẳn!"</em></p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">5</div>
  <div class="insight-body">
    <h4>🏫 Lo môi trường học tập → MindX là môi trường chuẩn quốc tế</h4>
    <p><strong>Thực trạng:</strong> PH ngày càng kỹ tính trong việc chọn trung tâm. Họ quan tâm đến: giáo viên có giỏi không, giáo trình có chuẩn không, môi trường có an toàn không, có theo dõi tiến độ không.</p>
    <p><strong>Giải pháp MindX:</strong> MindX có 50+ trung tâm trên toàn quốc, đội ngũ 500+ giáo viên được đào tạo bài bản, giáo trình tự phát triển theo chuẩn quốc tế, hệ thống LMS theo dõi tiến độ real-time, và chương trình bảo trợ việc làm/du học.</p>
    <p><strong>Script mẫu:</strong> <em>"MindX là trường công nghệ lớn nhất Việt Nam với hơn 100,000 học viên. Giáo trình của mình được thiết kế riêng, cập nhật liên tục theo xu hướng công nghệ mới nhất. Anh/chị có thể theo dõi tiến độ học của con qua app bất cứ lúc nào."</em></p>
  </div>
</div>`,
            quiz: {
              id: "quiz_day1_s1",
              title: "Quiz: Customer Insight",
              questions: [
                {
                  q: "Theo khảo sát, bao nhiêu % phụ huynh Việt Nam lo lắng về thời gian con dùng thiết bị điện tử?",
                  options: ["45%", "57%", "67%", "75%"],
                  correct: 2,
                  explanation: "67% phụ huynh Việt Nam lo lắng về thời gian con dùng thiết bị điện tử — đây là nỗi đau phổ biến nhất."
                },
                {
                  q: "Khi PH lo con nghiện game, giải pháp tư vấn nào phù hợp nhất?",
                  options: ["Khuyên PH cấm con chơi game", "Chuyển hướng từ người chơi thành người tạo game", "Nói game không có hại", "Giới thiệu ngay sản phẩm Coding"],
                  correct: 1,
                  explanation: "Chuyển hướng tích cực — biến đam mê game thành lợi thế sáng tạo — là cách tiếp cận hiệu quả nhất."
                },
                {
                  q: "Theo World Economic Forum, bao nhiêu % trẻ em ngày nay sẽ làm những nghề chưa tồn tại?",
                  options: ["35%", "50%", "65%", "80%"],
                  correct: 2,
                  explanation: "65% trẻ em ngày nay sẽ làm những nghề chưa tồn tại — đây là lý do STEM quan trọng."
                },
                {
                  q: "Lương trung bình ngành CNTT tại Việt Nam cao hơn mức trung bình bao nhiêu lần?",
                  options: ["1.5 lần", "2-3 lần", "4-5 lần", "6 lần"],
                  correct: 1,
                  explanation: "Lương ngành CNTT cao hơn 2-3 lần mức trung bình — đây là điểm bán hàng quan trọng."
                },
                {
                  q: "Nghiên cứu từ MIT cho thấy trẻ học lập trình cải thiện điểm Toán trung bình bao nhiêu %?",
                  options: ["5-10%", "10-15%", "15-20%", "25-30%"],
                  correct: 2,
                  explanation: "Trẻ học lập trình cải thiện điểm Toán trung bình 15-20% — coding rèn tư duy logic."
                }
              ]
            }
          },
          {
            id: "day1_s2",
            title: "Tổng quan MindX",
            icon: "🏢",
            content: `<h3>Lịch sử hình thành MindX (2015 → 2026)</h3>

<div class="timeline-block">
  <div class="timeline-item">
    <div class="timeline-year">2015</div>
    <div class="timeline-desc"><strong>Thành lập:</strong> MindX ra đời với tên gọi "Techkids" — lớp học lập trình đầu tiên cho trẻ em tại Hà Nội với chỉ 20 học viên.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2016</div>
    <div class="timeline-desc"><strong>Mở rộng:</strong> Phát triển giáo trình Scratch cho trẻ 10+, mở thêm 3 trung tâm tại Hà Nội.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2017</div>
    <div class="timeline-desc"><strong>Đổi tên:</strong> Chính thức đổi tên thành MindX Technology School. Mở rộng vào TP.HCM.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2018</div>
    <div class="timeline-desc"><strong>Tăng trưởng:</strong> Ra mắt lộ trình Coding 5 năm hoàn chỉnh. Đạt 5,000+ học viên.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2019</div>
    <div class="timeline-desc"><strong>Đa dạng hóa:</strong> Ra mắt lộ trình Art & Design và Robotics. Mở 15+ trung tâm toàn quốc.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2020</div>
    <div class="timeline-desc"><strong>Chuyển đổi số:</strong> Phát triển nền tảng LMS online trong đại dịch. Ra mắt chương trình K18+ cho người lớn.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2021</div>
    <div class="timeline-desc"><strong>Gọi vốn:</strong> Nhận đầu tư Series A. Mở rộng mạnh mẽ ra các tỉnh thành. Đạt 30,000+ học viên.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2022</div>
    <div class="timeline-desc"><strong>Scale-up:</strong> 30+ trung tâm, 100+ giáo viên. Ra mắt chương trình Du học & Bảo trợ việc làm.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2023</div>
    <div class="timeline-desc"><strong>Consolidation:</strong> Tối ưu hệ thống vận hành, nâng cấp giáo trình theo AI trends. 50,000+ học viên.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2024</div>
    <div class="timeline-desc"><strong>AI Integration:</strong> Tích hợp AI vào giáo trình Coding. Ra mắt X-Coding và X-Art premium.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2025-2026</div>
    <div class="timeline-desc"><strong>Hiện tại:</strong> 50+ trung tâm, 200+ TVTS, 500+ giáo viên, 100,000+ học viên. Hệ sinh thái giáo dục công nghệ lớn nhất Việt Nam.</div>
  </div>
</div>

<h3>Tầm nhìn – Sứ mệnh – Giá trị cốt lõi</h3>
<div class="values-grid">
  <div class="value-card">
    <div class="value-icon">🔭</div>
    <h4>Tầm nhìn</h4>
    <p>Trở thành hệ sinh thái giáo dục công nghệ số 1 Đông Nam Á, nơi mọi người đều có cơ hội tiếp cận giáo dục công nghệ chất lượng cao.</p>
  </div>
  <div class="value-card">
    <div class="value-icon">🎯</div>
    <h4>Sứ mệnh</h4>
    <p>Trang bị kỹ năng công nghệ cho thế hệ trẻ Việt Nam, giúp họ tự tin bước vào kỷ nguyên số và tạo ra giá trị cho xã hội.</p>
  </div>
  <div class="value-card">
    <div class="value-icon">💎</div>
    <h4>Giá trị cốt lõi</h4>
    <ul>
      <li><strong>Student First:</strong> Học viên là trung tâm</li>
      <li><strong>Innovation:</strong> Đổi mới liên tục</li>
      <li><strong>Quality:</strong> Chất lượng không thỏa hiệp</li>
      <li><strong>Impact:</strong> Tạo tác động tích cực</li>
    </ul>
  </div>
</div>

<h3>MindX qua các con số</h3>
<div class="stats-grid">
  <div class="stat-card"><div class="stat-number">50+</div><div class="stat-label">Trung tâm toàn quốc</div></div>
  <div class="stat-card"><div class="stat-number">200+</div><div class="stat-label">Tư vấn tuyển sinh</div></div>
  <div class="stat-card"><div class="stat-number">500+</div><div class="stat-label">Giáo viên</div></div>
  <div class="stat-card"><div class="stat-number">100K+</div><div class="stat-label">Học viên</div></div>
  <div class="stat-card"><div class="stat-number">3</div><div class="stat-label">Lộ trình chính (Coding, Art, Robotics)</div></div>
  <div class="stat-card"><div class="stat-number">11</div><div class="stat-label">Năm hoạt động</div></div>
</div>`,
            quiz: {
              id: "quiz_day1_s2",
              title: "Quiz: Tổng quan MindX",
              questions: [
                {
                  q: "MindX được thành lập vào năm nào?",
                  options: ["2013", "2014", "2015", "2016"],
                  correct: 2,
                  explanation: "MindX (lúc đó tên Techkids) được thành lập năm 2015 tại Hà Nội."
                },
                {
                  q: "Tên ban đầu của MindX là gì?",
                  options: ["MindCode", "Techkids", "CodeSchool", "VietCode"],
                  correct: 1,
                  explanation: "MindX ban đầu mang tên Techkids, sau đó đổi thành MindX Technology School năm 2017."
                },
                {
                  q: "Hiện tại MindX có bao nhiêu trung tâm trên toàn quốc?",
                  options: ["20+", "30+", "50+", "100+"],
                  correct: 2,
                  explanation: "MindX hiện có hơn 50 trung tâm trên toàn quốc."
                },
                {
                  q: "MindX có bao nhiêu lộ trình đào tạo chính cho K12?",
                  options: ["2 (Coding, Art)", "3 (Coding, Art, Robotics)", "4 (Coding, Art, Robotics, AI)", "5 lộ trình"],
                  correct: 1,
                  explanation: "MindX có 3 lộ trình K12 chính: Coding, Art & Design, và Robotics."
                },
                {
                  q: "Giá trị cốt lõi nào KHÔNG phải của MindX?",
                  options: ["Student First", "Innovation", "Profit First", "Quality"],
                  correct: 2,
                  explanation: "Profit First không phải giá trị cốt lõi của MindX. 4 giá trị cốt lõi là: Student First, Innovation, Quality, Impact."
                }
              ]
            }
          },
          {
            id: "day1_s3",
            title: "Mindset TVTS chuyên nghiệp",
            icon: "🧠",
            content: `<h3>3 Trụ cột Mindset của TVTS MindX</h3>

<div class="mindset-section">
  <div class="mindset-card growth">
    <div class="mindset-icon">🌱</div>
    <h4>1. Growth Mindset — Học hỏi liên tục</h4>
    <p>Tư vấn tuyển sinh là nghề đòi hỏi học hỏi không ngừng. Sản phẩm thay đổi, thị trường thay đổi, khách hàng thay đổi — và TVTS phải thay đổi theo.</p>
    <ul>
      <li><strong>Không sợ thất bại:</strong> Mỗi cuộc tư vấn chưa thành công là một bài học. TVTS giỏi nhất cũng có tỷ lệ chốt chỉ 30-40%.</li>
      <li><strong>Cầu tiến:</strong> Chủ động hỏi đồng nghiệp, xem lại cuộc gọi, tham gia coaching session.</li>
      <li><strong>Đón nhận feedback:</strong> Feedback từ quản lý và khách hàng là "vàng" — đừng defense, hãy absorb.</li>
      <li><strong>Tự học mỗi ngày:</strong> Dành 15 phút/ngày đọc về xu hướng edtech, tâm lý phụ huynh, kỹ thuật sale mới.</li>
    </ul>
    <div class="quote-block">"Người thành công không phải là người không bao giờ thất bại, mà là người không bao giờ ngừng học hỏi."</div>
  </div>

  <div class="mindset-card customer">
    <div class="mindset-icon">❤️</div>
    <h4>2. Customer-First — Đặt lợi ích PHHS lên đầu</h4>
    <p>TVTS không phải "người bán hàng" — TVTS là <strong>"chuyên gia tư vấn giáo dục"</strong> giúp phụ huynh đưa ra quyết định tốt nhất cho con.</p>
    <ul>
      <li><strong>Lắng nghe trước, nói sau:</strong> 70% thời gian tư vấn nên là LẮNG NGHE nhu cầu của PH.</li>
      <li><strong>Tư vấn đúng sản phẩm:</strong> Không push sản phẩm không phù hợp chỉ để đạt KPI. Con 5 tuổi thì giới thiệu Little Artist, không phải Python.</li>
      <li><strong>Trung thực:</strong> Nếu MindX chưa có sản phẩm phù hợp, hãy thành thật. PH sẽ nhớ và quay lại khi có nhu cầu.</li>
      <li><strong>Follow-up tận tâm:</strong> Sau đăng ký, hỏi thăm tiến độ học của con. PH cảm nhận được sự quan tâm → giới thiệu thêm người.</li>
    </ul>
    <div class="quote-block">"Bán hàng giỏi nhất là khi khách hàng cảm thấy họ đang được giúp đỡ, không phải đang bị bán."</div>
  </div>

  <div class="mindset-card dna">
    <div class="mindset-icon">🔥</div>
    <h4>3. MindX DNA — Sống với giá trị cốt lõi</h4>
    <p>Mỗi TVTS là đại sứ thương hiệu MindX. Mọi hành động, lời nói đều phản ánh giá trị của tổ chức.</p>
    <ul>
      <li><strong>Tự hào về sản phẩm:</strong> Tin tưởng vào giá trị MindX mang lại. Nếu bạn không tin, PH cũng sẽ không tin.</li>
      <li><strong>Teamwork:</strong> Chia sẻ kinh nghiệm, hỗ trợ đồng nghiệp. Thành công của team = thành công của cá nhân.</li>
      <li><strong>Chuyên nghiệp:</strong> Đúng giờ, chuẩn bị kỹ, ăn mặc gọn gàng, giao tiếp lịch sự.</li>
      <li><strong>Đam mê giáo dục:</strong> Hiểu rằng mỗi học viên đăng ký = một cuộc đời được thay đổi tích cực.</li>
    </ul>
    <div class="quote-block">"Mỗi hợp đồng bạn chốt không chỉ là doanh số — đó là một đứa trẻ được tiếp cận giáo dục công nghệ tốt nhất."</div>
  </div>
</div>`,
            quiz: {
              id: "quiz_day1_s3",
              title: "Quiz: Mindset TVTS",
              questions: [
                {
                  q: "Theo Growth Mindset, tỷ lệ chốt của TVTS giỏi nhất thường là bao nhiêu?",
                  options: ["60-70%", "50-60%", "30-40%", "80-90%"],
                  correct: 2,
                  explanation: "Ngay cả TVTS giỏi nhất cũng có tỷ lệ chốt chỉ 30-40%. Đừng nản khi bị từ chối!"
                },
                {
                  q: "Trong Customer-First, bao nhiêu % thời gian tư vấn nên dành cho LẮNG NGHE?",
                  options: ["30%", "50%", "70%", "90%"],
                  correct: 2,
                  explanation: "70% thời gian tư vấn nên là lắng nghe nhu cầu của phụ huynh."
                },
                {
                  q: "TVTS tại MindX nên tự xem mình là gì?",
                  options: ["Nhân viên bán hàng", "Chuyên gia tư vấn giáo dục", "Nhân viên marketing", "Giáo viên"],
                  correct: 1,
                  explanation: "TVTS là 'chuyên gia tư vấn giáo dục' — giúp PH đưa ra quyết định tốt nhất cho con."
                },
                {
                  q: "Khi MindX chưa có sản phẩm phù hợp với nhu cầu PH, TVTS nên làm gì?",
                  options: ["Push sản phẩm gần giống nhất", "Thành thật thông báo và giữ liên lạc", "Bỏ qua khách hàng đó", "Nói xấu đối thủ để giữ khách"],
                  correct: 1,
                  explanation: "Trung thực là giá trị cốt lõi. PH sẽ nhớ và quay lại khi có nhu cầu phù hợp."
                },
                {
                  q: "MindX DNA bao gồm các yếu tố nào?",
                  options: ["Doanh số, KPI, Bonus", "Tự hào sản phẩm, Teamwork, Chuyên nghiệp, Đam mê giáo dục", "Cạnh tranh, Nhanh nhẹn, Sáng tạo", "Kỷ luật, Tuân thủ, Báo cáo"],
                  correct: 1,
                  explanation: "MindX DNA = Tự hào sản phẩm + Teamwork + Chuyên nghiệp + Đam mê giáo dục."
                }
              ]
            }
          }
        ]
      },

      /* ==================== DAY 2 ==================== */
      {
        id: "day2",
        day: 2,
        title: "PRODUCT MASTERY",
        subtitle: "Kiến thức sản phẩm",
        icon: "📦",
        color: "#2563EB",
        sections: [
          {
            id: "day2_s1",
            title: "Lộ trình Coding (5 năm)",
            icon: "💻",
            content: `<h3>Lộ trình Coding — 5 năm kiến tạo tương lai</h3>
<p>Lộ trình Coding của MindX được thiết kế cho trẻ từ 10 tuổi, đi từ tư duy logic cơ bản đến Computer Scientist chuyên sâu trong 5 năm.</p>

<div class="product-card">
  <div class="product-header year1">
    <span class="product-year">NĂM 1</span>
    <h4>Scratch — App Creator (10+)</h4>
  </div>
  <div class="product-body">
    <p><strong>Mô tả:</strong> Tư duy logic cơ bản qua lập trình kéo thả block. Trẻ tạo trò chơi, animation, và câu chuyện tương tác.</p>
    <p><strong>Thời lượng:</strong> 3 HP × 14 buổi (42 buổi)</p>
    <p><strong>Output:</strong> 10+ project game/animation hoàn chỉnh</p>
    <p><strong>Key Selling Points:</strong></p>
    <ul>
      <li>Không cần biết đọc code — kéo thả trực quan, phù hợp trẻ 10+</li>
      <li>Phát triển tư duy logic, sáng tạo, giải quyết vấn đề</li>
      <li>Trẻ hào hứng vì được TẠO GAME thay vì CHƠI GAME</li>
      <li>Nền tảng vững chắc cho các năm tiếp theo</li>
    </ul>
  </div>
</div>

<div class="product-card">
  <div class="product-header year2">
    <span class="product-year">NĂM 2</span>
    <h4>Game Creator (11+)</h4>
  </div>
  <div class="product-body">
    <p><strong>Mô tả:</strong> Chuyển từ người chơi game sang người làm game chuyên nghiệp. Sử dụng GameMaker Studio 2.0 — công cụ tạo game chuyên nghiệp.</p>
    <p><strong>Thời lượng:</strong> 3 HP × 14 buổi (42 buổi)</p>
    <p><strong>Output:</strong> Game 2D hoàn chỉnh (Mario Run, Maze), cốt truyện + tính năng độc đáo</p>
    <p><strong>Key Selling Points:</strong></p>
    <ul>
      <li>GameMaker Studio 2.0 — công cụ tạo game chuyên nghiệp</li>
      <li>Trẻ chuyển từ CHƠI GAME sang LÀM GAME — cực kỳ hào hứng</li>
      <li>Tích hợp AI tạo hình ảnh/cốt truyện — xu hướng game hiện đại</li>
      <li>Làm chủ thuật toán phức tạp qua game thực tế</li>
    </ul>
  </div>
</div>

<div class="product-card">
  <div class="product-header year3">
    <span class="product-year">NĂM 3</span>
    <h4>App Producer (12+)</h4>
  </div>
  <div class="product-body">
    <p><strong>Mô tả:</strong> Phát triển ứng dụng hoàn chỉnh. Trẻ học toàn bộ quy trình từ ý tưởng → thiết kế → lập trình → publish.</p>
    <p><strong>Thời lượng:</strong> 3 HP × 14 buổi (42 buổi)</p>
    <p><strong>Output:</strong> Ứng dụng hoàn chỉnh, sản phẩm thực tế + portfolio</p>
    <p><strong>Key Selling Points:</strong></p>
    <ul>
      <li>Trẻ tạo app thật, cài được trên điện thoại — PH rất ấn tượng</li>
      <li>Học quy trình phát triển phần mềm chuyên nghiệp</li>
      <li>Kỹ năng teamwork, quản lý project</li>
      <li>Portfolio ấn tượng cho tương lai</li>
    </ul>
  </div>
</div>

<div class="product-card">
  <div class="product-header year4">
    <span class="product-year">NĂM 4</span>
    <h4>Web Developer (14+)</h4>
  </div>
  <div class="product-body">
    <p><strong>Mô tả:</strong> Tự tay xây dựng website tương tác từ trang bán hàng đến mạng xã hội. HTML, CSS, JavaScript, Bootstrap, Firebase, Figma.</p>
    <p><strong>Thời lượng:</strong> 3 HP × 14 buổi (42 buổi)</p>
    <p><strong>Output:</strong> Website hoàn chỉnh go-live, portfolio online</p>
    <p><strong>Key Selling Points:</strong></p>
    <ul>
      <li>Web development — kỹ năng có nhu cầu cao nhất thị trường</li>
      <li>JavaScript — ngôn ngữ phổ biến nhất cho web</li>
      <li>UI/UX — kỹ năng thiết kế trải nghiệm người dùng</li>
      <li>Có thể làm freelance kiếm tiền từ năm 14-15 tuổi</li>
    </ul>
  </div>
</div>

<div class="product-card">
  <div class="product-header year5">
    <span class="product-year">NĂM 5</span>
    <h4>Computer Scientist (15+) — AI & Data Science</h4>
  </div>
  <div class="product-body">
    <p><strong>Mô tả:</strong> Đi sâu vào "xương sống" ngành CNTT. Python chuyên sâu, mô hình AI, Machine Learning, trực quan hóa dữ liệu.</p>
    <p><strong>Thời lượng:</strong> 3 HP × 14 buổi (42 buổi)</p>
    <p><strong>Output:</strong> Mô hình ML, Chatbot thông minh, dự án phân tích dữ liệu</p>
    <p><strong>Key Selling Points:</strong></p>
    <ul>
      <li>AI/ML — lĩnh vực hot nhất hiện tại, lương khởi điểm $2000+/tháng</li>
      <li>Chuẩn bị portfolio cạnh tranh cho du học và việc làm</li>
      <li>Tham gia hackathon, cuộc thi quốc tế</li>
      <li>Bảo trợ du học & việc làm từ MindX</li>
    </ul>
  </div>
</div>`,
            quiz: {
              id: "quiz_day2_coding",
              title: "Quiz: Lộ trình Coding",
              questions: [
                { q: "Năm 1 của lộ trình Coding sử dụng ngôn ngữ gì?", options: ["Python", "JavaScript", "Scratch — kéo thả block", "C++"], correct: 2, explanation: "Năm 1 dùng Scratch — lập trình kéo thả trực quan, phù hợp trẻ 10+." },
                { q: "Game Creator (Năm 2) sử dụng công cụ gì?", options: ["Python", "JavaScript", "GameMaker Studio 2.0", "Scratch"], correct: 2, explanation: "Năm 2 dùng GameMaker Studio 2.0 — công cụ tạo game chuyên nghiệp + AI tools." },
                { q: "Khóa App Producer phù hợp cho trẻ từ bao nhiêu tuổi?", options: ["8+", "9+", "12+", "14+"], correct: 2, explanation: "App Producer dành cho trẻ 12+ — phát triển ứng dụng hoàn chỉnh." },
                { q: "Output của khóa Web Developer là gì?", options: ["Game Python", "Ứng dụng mobile", "Website hoàn chỉnh + portfolio online", "AI project"], correct: 2, explanation: "Web Developer tạo ra 5+ website hoàn chỉnh và portfolio online." },
                { q: "AI4Learn gồm bao nhiêu level và bao nhiêu giờ?", options: ["1 level, 12h", "2 levels, 24h", "3 levels, 36h", "4 levels, 48h"], correct: 1, explanation: "AI4Learn gồm 2 levels × 6 buổi × 2h = 24h. Đầu vào: sau Scratch. Không bán lẻ." },
                { q: "Lộ trình Coding có tổng cộng bao nhiêu năm?", options: ["3 năm", "4 năm", "5 năm", "6 năm"], correct: 2, explanation: "Lộ trình Coding gồm 5 năm: Scratch → Game Creator → App Producer → Web Developer → Computer Scientist." },
                { q: "Mỗi năm học cơ bản có bao nhiêu buổi?", options: ["28 buổi", "36 buổi", "42 buổi", "48 buổi"], correct: 2, explanation: "Mỗi năm cơ bản gồm 3 HP × 14 = 42 buổi." },
                { q: "Khóa nào nhấn mạnh UI/UX Design?", options: ["Game Creator", "App Producer", "Web Developer", "Computer Scientist"], correct: 2, explanation: "Web Developer (Năm 4) kết hợp JavaScript và UI/UX Design." },
                { q: "Trẻ có thể bắt đầu lộ trình Coding từ bao nhiêu tuổi?", options: ["5 tuổi", "6 tuổi", "8 tuổi", "10 tuổi"], correct: 3, explanation: "Lộ trình Coding bắt đầu từ 10 tuổi với Scratch Creator." },
                { q: "Computer Scientist (Năm 5) tập trung vào lĩnh vực nào?", options: ["Web development", "Mobile app", "AI & Data Science", "Game development"], correct: 2, explanation: "Computer Scientist (Năm 5) chuyên sâu về AI, Machine Learning, và Data Science." }
              ]
            }
          },
          {
            id: "day2_s2",
            title: "Lộ trình Art & Design (7 năm)",
            icon: "🎨",
            content: `<h3>Lộ trình Art & Design — 7 năm từ nhí họa sĩ đến designer chuyên nghiệp</h3>
<p>Lộ trình Art & Design đưa trẻ từ 4 tuổi đi qua hành trình từ nét vẽ đầu tiên đến thiết kế đa phương tiện chuyên nghiệp.</p>

<div class="product-card">
  <div class="product-header art0"><span class="product-year">NĂM 0</span><h4>Little Artist (4+)</h4></div>
  <div class="product-body">
    <p><strong>Mô tả:</strong> Khơi dậy sáng tạo thông qua vẽ, tô màu, và hoạt động nghệ thuật vui nhộn.</p>
    <p><strong>Đối tượng:</strong> Trẻ 4-5 tuổi</p>
    <p><strong>Key Points:</strong> Phát triển khả năng quan sát, nhận biết màu sắc, hình khối. Xây nền tảng sáng tạo từ sớm.</p>
  </div>
</div>
<div class="product-card">
  <div class="product-header art1"><span class="product-year">NĂM 1</span><h4>Digital Art Foundations (7+)</h4></div>
  <div class="product-body">
    <p><strong>Mô tả:</strong> Nền tảng mỹ thuật: phối màu, bố cục, vẽ nhân vật đơn giản.</p>
    <p><strong>Key Points:</strong> Trẻ bắt đầu có "tác phẩm" đầu tiên, tự tin thể hiện bản thân qua nghệ thuật.</p>
  </div>
</div>
<div class="product-card">
  <div class="product-header art2"><span class="product-year">NĂM 2</span><h4>Visual Thinking (9+)</h4></div>
  <div class="product-body">
    <p><strong>Mô tả:</strong> Nghệ thuật thị giác: vẽ digital, illustration cơ bản, sử dụng tablet.</p>
    <p><strong>Key Points:</strong> Chuyển từ vẽ tay sang digital art. Làm quen với công cụ thiết kế chuyên nghiệp.</p>
  </div>
</div>
<div class="product-card">
  <div class="product-header art3"><span class="product-year">NĂM 3</span><h4>Game Art (11+)</h4></div>
  <div class="product-body">
    <p><strong>Mô tả:</strong> Thiết kế nhân vật game, background, UI cho game.</p>
    <p><strong>Key Points:</strong> Kết hợp nghệ thuật + công nghệ. Trẻ thấy tác phẩm mình "sống" trong game.</p>
  </div>
</div>
<div class="product-card">
  <div class="product-header art4"><span class="product-year">NĂM 4</span><h4>Character & Mascot Design (12+)</h4></div>
  <div class="product-body">
    <p><strong>Mô tả:</strong> Chuyên sâu thiết kế nhân vật: concept art, character sheet, storytelling qua hình ảnh.</p>
    <p><strong>Key Points:</strong> Kỹ năng chuyên nghiệp, có thể tham gia cuộc thi thiết kế.</p>
  </div>
</div>
<div class="product-card">
  <div class="product-header art5"><span class="product-year">NĂM 5</span><h4>Visual Communication (13+)</h4></div>
  <div class="product-body">
    <p><strong>Mô tả:</strong> Thiết kế đồ họa chuyên nghiệp: logo, poster, branding, social media design.</p>
    <p><strong>Key Points:</strong> Portfolio chuyên nghiệp. Có thể nhận freelance thiết kế.</p>
  </div>
</div>
<div class="product-card">
  <div class="product-header art6"><span class="product-year">NĂM 6</span><h4>Motion & Video (14+)</h4></div>
  <div class="product-body">
    <p><strong>Mô tả:</strong> Thiết kế đa phương tiện: motion graphics, video editing, 3D modeling.</p>
    <p><strong>Key Points:</strong> Sẵn sàng cho đại học ngành Design hoặc làm việc thực tế.</p>
  </div>
</div>`,
            quiz: {
              id: "quiz_day2_art",
              title: "Quiz: Lộ trình Art & Design",
              questions: [
                { q: "Trẻ có thể bắt đầu lộ trình Art & Design từ bao nhiêu tuổi?", options: ["3 tuổi", "4 tuổi", "6 tuổi", "8 tuổi"], correct: 1, explanation: "Little Artist (Năm 0) dành cho trẻ từ 4 tuổi." },
                { q: "Lộ trình Art & Design có tổng cộng bao nhiêu năm?", options: ["4 năm", "5 năm", "6 năm", "7 năm"], correct: 3, explanation: "Lộ trình Art có 7 năm: Năm 0 đến Năm 6." },
                { q: "Khóa nào bắt đầu sử dụng digital art?", options: ["Little Artist", "Digital Art Foundations", "Visual Thinking", "Game Art"], correct: 2, explanation: "Visual Thinking (Năm 2, 9+) bắt đầu chuyển sang digital art." },
                { q: "Game Art phù hợp cho trẻ từ mấy tuổi?", options: ["6+", "9+", "11+", "12+"], correct: 2, explanation: "Game Art dành cho trẻ 11+ — thiết kế nhân vật và UI game." },
                { q: "Khóa nào tập trung vào Visual Communication chuyên nghiệp?", options: ["Năm 3", "Năm 4", "Năm 5", "Năm 6"], correct: 2, explanation: "Năm 5 (13+) là Visual Communication: logo, poster, branding." },
                { q: "Character & Mascot Design nằm ở năm thứ mấy?", options: ["Năm 2", "Năm 3", "Năm 4", "Năm 5"], correct: 2, explanation: "Character & Mascot Design ở Năm 4 (12+)." },
                { q: "Motion & Video bao gồm kỹ năng nào?", options: ["Vẽ tay", "Motion graphics, video editing, 3D", "Chỉ thiết kế logo", "Vẽ truyện tranh"], correct: 1, explanation: "Motion & Video: motion graphics, video editing, 3D modeling." },
                { q: "Trẻ có thể nhận freelance thiết kế từ khóa nào?", options: ["Visual Thinking", "Game Art", "Character & Mascot Design", "Visual Communication"], correct: 3, explanation: "Từ Visual Communication (Năm 5), trẻ có portfolio đủ để nhận freelance." },
                { q: "Digital Art Foundations phù hợp cho lứa tuổi nào?", options: ["4+", "7+", "8+", "10+"], correct: 1, explanation: "Digital Art Foundations (Năm 1) dành cho trẻ 7+." },
                { q: "Điểm khác biệt chính của lộ trình Art so với học vẽ truyền thống?", options: ["Rẻ hơn", "Kết hợp nghệ thuật + công nghệ digital", "Chỉ vẽ tay", "Không cần giáo viên"], correct: 1, explanation: "MindX Art kết hợp nghệ thuật truyền thống + công nghệ digital — khác biệt hoàn toàn." }
              ]
            }
          },
          {
            id: "day2_s3",
            title: "Lộ trình Robotics (4 năm)",
            icon: "🤖",
            content: `<h3>Lộ trình Robotics — 4 năm chinh phục thế giới robot</h3>
<p>Lộ trình Robotics kết hợp STEM và lập trình, giúp trẻ từ 4 tuổi học cách xây dựng và điều khiển robot thực tế.</p>

<div class="product-card">
  <div class="product-header robo0"><span class="product-year">NĂM 0</span><h4>Kỹ sư Robot nhí (4+) — LEGO Spike Essential</h4></div>
  <div class="product-body">
    <p><strong>Mô tả:</strong> Lắp ráp robot LEGO cơ bản, lập trình đơn giản qua icon. Phát triển tư duy STEM đầu đời.</p>
    <p><strong>Công cụ:</strong> LEGO Spike Essential Kit</p>
    <p><strong>Key Points:</strong> Trẻ 4+ hào hứng vì được chơi LEGO "thông minh", robot di chuyển được. An toàn tuyệt đối.</p>
  </div>
</div>
<div class="product-card">
  <div class="product-header robo1"><span class="product-year">NĂM 1</span><h4>Nhập môn Robotics (6+) — VEX GO Kit</h4></div>
  <div class="product-body">
    <p><strong>Mô tả:</strong> Chuyển từ lắp ghép khối sang lắp ghép cơ khí thực thụ. Ốc, chốt, thanh dầm + lập trình Block.</p>
    <p><strong>Công cụ:</strong> VEX GO Kit + Block programming</p>
    <p><strong>Key Points:</strong> VEX GO giúp trẻ chuyển từ LEGO sang kỹ thuật cơ khí thực tế. Robot xe, băng chuyền, cửa tự động.</p>
  </div>
</div>
<div class="product-card">
  <div class="product-header robo2"><span class="product-year">NĂM 2</span><h4>Truy tìm bí ẩn Robot (8+) — VEX GO + VEXcode</h4></div>
  <div class="product-body">
    <p><strong>Mô tả:</strong> Chuyên sâu cơ khí phức tạp + Cánh tay Robot (Arm). If-else, vòng lặp, VEXcode.</p>
    <p><strong>Công cụ:</strong> VEX GO (cơ khí phức tạp + nam châm điện) + VEXcode</p>
    <p><strong>Key Points:</strong> Robot Arm gắp-thả, dây chuyền phân loại, robot né vật cản, tự nhận diện màu sắc.</p>
  </div>
</div>
<div class="product-card">
  <div class="product-header robo3"><span class="product-year">NĂM 3</span><h4>Sáng tạo Robot (10+) — VEX IQ + VEXcode IQ</h4></div>
  <div class="product-body">
    <p><strong>Mô tả:</strong> Làm chủ thuật toán & sẵn sàng thi đấu. VEX IQ Kit chuẩn quốc tế + VEXcode IQ (Block nâng cao → tư duy văn bản).</p>
    <p><strong>Công cụ:</strong> VEX IQ Kit + VEXcode IQ</p>
    <p><strong>Key Points:</strong> PID controller, dò line, thuật toán tìm đường. Chuẩn bị thi VEX World Championship. Portfolio ấn tượng cho du học.</p>
  </div>
</div>`,
            quiz: {
              id: "quiz_day2_robo",
              title: "Quiz: Lộ trình Robotics",
              questions: [
                { q: "Robotics Năm 0 sử dụng bộ kit nào?", options: ["VEX IQ", "Arduino", "LEGO Spike Essential", "Raspberry Pi"], correct: 2, explanation: "Năm 0 dùng LEGO Spike Essential — phù hợp trẻ 4+." },
                { q: "VEX GO Kit được giới thiệu vào năm thứ mấy?", options: ["Năm 0", "Năm 1", "Năm 2", "Năm 3"], correct: 1, explanation: "VEX GO Kit bắt đầu từ Năm 1 (6+). VEX IQ bắt đầu từ Năm 3 (10+) — chuẩn thi đấu quốc tế." },
                { q: "Năm 2 Robotics tập trung vào khái niệm lập trình nào?", options: ["Biến số", "If-else và vòng lặp", "OOP", "Machine Learning"], correct: 1, explanation: "Năm 2 dạy if-else, vòng lặp, hàm qua robot thực tế." },
                { q: "PID controller được dạy vào năm nào?", options: ["Năm 1", "Năm 2", "Năm 3", "Không có"], correct: 2, explanation: "PID controller được dạy ở Năm 3 (10+) — Sáng tạo Robot." },
                { q: "Lộ trình Robotics có tổng cộng bao nhiêu năm?", options: ["3 năm", "4 năm", "5 năm", "6 năm"], correct: 1, explanation: "Lộ trình Robotics gồm 4 năm: Năm 0 đến Năm 3." },
                { q: "Trẻ nhỏ nhất có thể bắt đầu học Robotics từ mấy tuổi?", options: ["3 tuổi", "4 tuổi", "6 tuổi", "8 tuổi"], correct: 1, explanation: "Robot nhí (Năm 0) dành cho trẻ từ 4 tuổi." },
                { q: "Cuộc thi Robotics quốc tế mà MindX hướng tới là gì?", options: ["FIRST Robotics", "VEX World Championship", "RoboCup", "WRO"], correct: 1, explanation: "MindX hướng tới VEX World Championship — cuộc thi robotics lớn nhất thế giới." },
                { q: "Selling point mạnh nhất của Robotics so với Coding?", options: ["Rẻ hơn", "Robot thực tế — trẻ thấy kết quả ngay", "Online learning", "Không cần laptop"], correct: 1, explanation: "Robot thực tế giúp trẻ thấy ngay kết quả code — hào hứng hơn coding trên màn hình." },
                { q: "Robotics Năm 2 có tên gọi là gì?", options: ["Robot nhí", "Nhập môn Robotics", "Truy tìm bí ẩn Robot", "Sáng tạo Robot"], correct: 2, explanation: "Năm 2: 'Truy tìm bí ẩn Robot' — lập trình có điều kiện." },
                { q: "Lợi ích lớn nhất khi học Robotics cho hồ sơ du học?", options: ["Giấy chứng nhận MindX", "Thành tích thi đấu VEX quốc tế", "Điểm GPA cao", "Chứng chỉ IELTS"], correct: 1, explanation: "Thành tích thi đấu VEX quốc tế là điểm cộng lớn trong hồ sơ du học." }
              ]
            }
          },
          {
            id: "day2_s4",
            title: "Bảng giá & Chương trình khuyến mãi",
            icon: "💰",
            content: `<h3>Bảng giá & Ưu đãi</h3>
<p>Giá khác nhau theo <strong>bộ môn</strong> và <strong>khu vực</strong>. Dưới đây là giá HN/HCM.</p>

<div class="pricing-info">
  <h4>📍 Robotics — Lộ trình thông thường</h4>
  <table style="width:100%;border-collapse:collapse;font-size:0.85em;margin:8px 0;">
    <tr style="background:#E31F26;color:#fff;"><th style="padding:8px;">Lộ trình</th><th style="padding:8px;">HP Gốc</th><th style="padding:8px;">CTKM</th><th style="padding:8px;">Học phí</th></tr>
    <tr><td style="padding:8px;border:1px solid #eee;">12 tháng (3 HP)</td><td style="padding:8px;border:1px solid #eee;text-align:center;">18M</td><td style="padding:8px;border:1px solid #eee;text-align:center;">10%</td><td style="padding:8px;border:1px solid #eee;text-align:center;font-weight:700;color:#E31F26;">16.2M</td></tr>
    <tr><td style="padding:8px;border:1px solid #eee;">24 tháng (6 HP)</td><td style="padding:8px;border:1px solid #eee;text-align:center;">36M</td><td style="padding:8px;border:1px solid #eee;text-align:center;">30%</td><td style="padding:8px;border:1px solid #eee;text-align:center;font-weight:700;color:#E31F26;">25.2M</td></tr>
  </table>
  <p style="font-size:0.8em;color:#666;">Tỉnh: 12T giảm 15%, 24T giảm 35%.</p>

  <h4 style="margin-top:15px;">📍 Coding — Lộ trình thông thường</h4>
  <table style="width:100%;border-collapse:collapse;font-size:0.85em;margin:8px 0;">
    <tr style="background:#E31F26;color:#fff;"><th style="padding:8px;">Lộ trình</th><th style="padding:8px;">HP Gốc</th><th style="padding:8px;">CTKM</th><th style="padding:8px;">Học phí</th></tr>
    <tr><td style="padding:8px;border:1px solid #eee;">12 tháng</td><td style="padding:8px;border:1px solid #eee;text-align:center;">18M</td><td style="padding:8px;border:1px solid #eee;text-align:center;">10%</td><td style="padding:8px;border:1px solid #eee;text-align:center;font-weight:700;color:#E31F26;">16.2M</td></tr>
    <tr><td style="padding:8px;border:1px solid #eee;">24 tháng</td><td style="padding:8px;border:1px solid #eee;text-align:center;">51.5M</td><td style="padding:8px;border:1px solid #eee;text-align:center;">35%</td><td style="padding:8px;border:1px solid #eee;text-align:center;font-weight:700;color:#E31F26;">33.5M</td></tr>
  </table>
  <p style="font-size:0.8em;color:#666;">Tỉnh: 12T giảm 15%, 24T giảm 40%. Online: 12T giảm 20%, 24T giảm 45%. Coding 12T/24T thêm 1 AI4Learn.</p>

  <h4 style="margin-top:15px;">📍 Art — Lộ trình thông thường (+ Phí bản quyền)</h4>
  <table style="width:100%;border-collapse:collapse;font-size:0.85em;margin:8px 0;">
    <tr style="background:#E31F26;color:#fff;"><th style="padding:8px;">Lộ trình</th><th style="padding:8px;">HP Gốc</th><th style="padding:8px;">CTKM</th><th style="padding:8px;">Học phí</th><th style="padding:8px;">Phí BQ</th></tr>
    <tr><td style="padding:8px;border:1px solid #eee;">12 tháng</td><td style="padding:8px;border:1px solid #eee;text-align:center;">18M</td><td style="padding:8px;border:1px solid #eee;text-align:center;">10%</td><td style="padding:8px;border:1px solid #eee;text-align:center;font-weight:700;color:#E31F26;">16.2M</td><td style="padding:8px;border:1px solid #eee;text-align:center;">1M</td></tr>
    <tr><td style="padding:8px;border:1px solid #eee;">24 tháng</td><td style="padding:8px;border:1px solid #eee;text-align:center;">51.5M</td><td style="padding:8px;border:1px solid #eee;text-align:center;">35%</td><td style="padding:8px;border:1px solid #eee;text-align:center;font-weight:700;color:#E31F26;">33.5M</td><td style="padding:8px;border:1px solid #eee;text-align:center;">2M</td></tr>
  </table>
  <p style="font-size:0.8em;color:#666;">Tỉnh: 12T giảm 15%, 24T giảm 40%. Online: 12T giảm 20%, 24T giảm 45%.</p>

  <h4 style="margin-top:15px;">📍 Coding — Cam kết bảo trợ</h4>
  <table style="width:100%;border-collapse:collapse;font-size:0.85em;margin:8px 0;">
    <tr style="background:#7D0005;color:#fff;"><th style="padding:8px;">Lộ trình</th><th style="padding:8px;">HP Gốc</th><th style="padding:8px;">CTKM</th><th style="padding:8px;">Học phí</th></tr>
    <tr style="background:#FFF5F5;"><td style="padding:8px;border:1px solid #eee;font-weight:600;">BT đa ngành HS THPT</td><td style="padding:8px;border:1px solid #eee;text-align:center;">100M</td><td style="padding:8px;border:1px solid #eee;text-align:center;">15%</td><td style="padding:8px;border:1px solid #eee;text-align:center;font-weight:700;color:#E31F26;">85M</td></tr>
    <tr style="background:#FFF5F5;"><td style="padding:8px;border:1px solid #eee;font-weight:600;">BT đa ngành HS THCS</td><td style="padding:8px;border:1px solid #eee;text-align:center;">155M</td><td style="padding:8px;border:1px solid #eee;text-align:center;">~19%</td><td style="padding:8px;border:1px solid #eee;text-align:center;font-weight:700;color:#E31F26;">125M</td></tr>
    <tr style="background:#FFF5F5;"><td style="padding:8px;border:1px solid #eee;font-weight:600;">BT đa ngành HS TH</td><td style="padding:8px;border:1px solid #eee;text-align:center;">180M</td><td style="padding:8px;border:1px solid #eee;text-align:center;">~19%</td><td style="padding:8px;border:1px solid #eee;text-align:center;font-weight:700;color:#E31F26;">145M</td></tr>
    <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">BT du học HS THPT</td><td style="padding:8px;border:1px solid #eee;text-align:center;">80M</td><td style="padding:8px;border:1px solid #eee;text-align:center;">~13%</td><td style="padding:8px;border:1px solid #eee;text-align:center;font-weight:700;color:#E31F26;">70M</td></tr>
    <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">BT du học HS THCS</td><td style="padding:8px;border:1px solid #eee;text-align:center;">135M</td><td style="padding:8px;border:1px solid #eee;text-align:center;">~19%</td><td style="padding:8px;border:1px solid #eee;text-align:center;font-weight:700;color:#E31F26;">110M</td></tr>
    <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">BT du học HS TH</td><td style="padding:8px;border:1px solid #eee;text-align:center;">160M</td><td style="padding:8px;border:1px solid #eee;text-align:center;">~19%</td><td style="padding:8px;border:1px solid #eee;text-align:center;font-weight:700;color:#E31F26;">130M</td></tr>
  </table>
  <p style="font-size:0.8em;color:#666;">BT đa ngành: +AI4Learn, Business Foundation, bảo trợ đa ngành. BT du học: X-Global Tech Seed.</p>

  <h4 style="margin-top:15px;">📍 Art — Có thêm Phí bản quyền</h4>
  <table style="width:100%;border-collapse:collapse;font-size:0.85em;margin:8px 0;">
    <tr style="background:#E31F26;color:#fff;"><th style="padding:8px;">Lộ trình</th><th style="padding:8px;">HP Gốc</th><th style="padding:8px;">CTKM</th><th style="padding:8px;">Học phí</th><th style="padding:8px;">Phí BQ</th></tr>
    <tr><td style="padding:8px;border:1px solid #eee;">12 tháng</td><td style="padding:8px;border:1px solid #eee;text-align:center;">18M</td><td style="padding:8px;border:1px solid #eee;text-align:center;">10%</td><td style="padding:8px;border:1px solid #eee;text-align:center;font-weight:700;color:#E31F26;">16.2M</td><td style="padding:8px;border:1px solid #eee;text-align:center;">1M</td></tr>
    <tr><td style="padding:8px;border:1px solid #eee;">24 tháng</td><td style="padding:8px;border:1px solid #eee;text-align:center;">51.5M</td><td style="padding:8px;border:1px solid #eee;text-align:center;">35%</td><td style="padding:8px;border:1px solid #eee;text-align:center;font-weight:700;color:#E31F26;">33.5M</td><td style="padding:8px;border:1px solid #eee;text-align:center;">2M</td></tr>
  </table>

  <h4 style="margin-top:15px;">📝 Lưu ý quan trọng cho Sale</h4>
  <ul>
    <li><strong>Anchoring:</strong> Luôn báo giá 24T trước → 12T sau → PH thấy 12T hợp lý hơn</li>
    <li><strong>Chia nhỏ:</strong> "Chỉ 16.2M/12 tháng = 386K/buổi — rất hợp lý cho 1 năm học"</li>
    <li><strong>Coding 12T/24T được thêm AI4Learn</strong> — nhấn mạnh giá trị gia tăng</li>
    <li><strong>Art có phí bản quyền phần mềm</strong> riêng — cần báo rõ cho PH</li>
    <li><strong>Tỉnh/TP khác</strong> có CTKM cao hơn HN/HCM</li>
  </ul>
</div>`,
            quiz: {
              id: "quiz_day2_pricing",
              title: "Quiz: Bảng giá",
              questions: [
                { q: "Giá lộ trình 12 tháng (3 HP) tại HN/HCM sau CTKM là bao nhiêu?", options: ["14M", "15M", "16.2M", "18M"], correct: 2, explanation: "12T: 18M gốc, giảm 10% = 16.2M tại HN/HCM." },
                { q: "Lộ trình 24 tháng Robotics tại HN/HCM được giảm bao nhiêu %?", options: ["10%", "20%", "30%", "35%"], correct: 2, explanation: "RBT 24T tại HN/HCM: giảm 30%. Coding/Art 24T: giảm 35%." },
                { q: "Art khác Coding/Robotics ở điểm nào về giá?", options: ["Đắt hơn", "Rẻ hơn", "Có thêm phí bản quyền phần mềm", "Giống hoàn toàn"], correct: 2, explanation: "Art có thêm phí bản quyền phần mềm (500K-2M tùy lộ trình)." },
                { q: "Gói BT đa ngành HS THCS giá bao nhiêu tại HN/HCM?", options: ["85M", "110M", "125M", "145M"], correct: 2, explanation: "BT đa ngành HS THCS: 155M gốc, giảm ~19% = 125M. Bao gồm AI4Learn + Business Foundation." },
                { q: "Khi báo giá, nên dùng kỹ thuật gì?", options: ["Báo giá thấp nhất trước", "Anchoring: báo 24T trước → 12T sau", "Chỉ báo giá 4T", "Không báo giá, chờ PH hỏi"], correct: 1, explanation: "Anchoring: báo 24T trước (giá cao) → 12T sau → PH thấy 12T hợp lý hơn." }
              ]
            }
          }
        ]
      },

      /* ==================== DAY 3 ==================== */
      {
        id: "day3",
        day: 3,
        title: "SELLING SKILLS",
        subtitle: "Kỹ năng bán hàng",
        icon: "🎯",
        color: "#059669",
        sections: [
          {
            id: "day3_s1",
            title: "Quy trình Sale 7 bước",
            icon: "📋",
            content: `<h3>Quy trình Sale 7 bước — Framework chuẩn TVTS MindX</h3>

<div class="step-card">
  <div class="step-number">B1</div>
  <div class="step-body">
    <h4>Chuẩn bị trước buổi gặp</h4>
    <ul>
      <li>Xem thông tin lead trên CRM: tên PH, tên con, tuổi con, nguồn lead (MKT/referral/walk-in)</li>
      <li>Chuẩn bị tài liệu: brochure sản phẩm phù hợp tuổi con</li>
      <li>Kiểm tra lịch demo, phòng tư vấn sẵn sàng</li>
      <li>Tâm thế: tự tin, năng lượng tích cực, sẵn sàng giúp đỡ PH</li>
    </ul>
  </div>
</div>

<div class="step-card">
  <div class="step-number">B2</div>
  <div class="step-body">
    <h4>Đón tiếp & Phá băng</h4>
    <ul>
      <li>Chào hỏi thân thiện: "Anh/chị [tên] ơi, chào anh/chị! Em là [tên], TVTS tại MindX [trung tâm]."</li>
      <li>Mời nước, dẫn ngồi, hỏi thăm con</li>
      <li>Small talk 2-3 phút: "Con bé năm nay học lớp mấy rồi ạ? Con thích môn gì nhất ạ?"</li>
      <li>Mục tiêu: tạo cảm giác thoải mái, PH tin tưởng chia sẻ</li>
    </ul>
  </div>
</div>

<div class="step-card">
  <div class="step-number">B3</div>
  <div class="step-body">
    <h4>Khai thác nhu cầu</h4>
    <ul>
      <li><strong>Câu hỏi mở:</strong> "Anh/chị quan tâm đến việc cho con học thêm kỹ năng gì ạ?"</li>
      <li><strong>Câu hỏi đào sâu:</strong> "Hiện tại con có đang học thêm gì ngoài giờ không ạ?"</li>
      <li><strong>Câu hỏi pain point:</strong> "Anh/chị có lo lắng gì về việc con dùng thiết bị điện tử nhiều không?"</li>
      <li><strong>Ghi chú:</strong> Note lại keyword quan trọng PH nói để sử dụng khi pitch</li>
      <li>Dành 60-70% thời gian cho bước này!</li>
    </ul>
  </div>
</div>

<div class="step-card">
  <div class="step-number">B4</div>
  <div class="step-body">
    <h4>Giới thiệu sản phẩm phù hợp</h4>
    <ul>
      <li>Dựa trên nhu cầu PH đã khai thác → Đề xuất sản phẩm phù hợp nhất</li>
      <li>Sử dụng FAB: Feature → Advantage → Benefit (cho con PH cụ thể)</li>
      <li>Demo sản phẩm: Cho PH/con xem project mẫu, video học viên</li>
      <li>Kể story: "Có một bé cũng tầm tuổi con, ban đầu cũng [giống con], sau 6 tháng..."</li>
    </ul>
  </div>
</div>

<div class="step-card">
  <div class="step-number">B5</div>
  <div class="step-body">
    <h4>Xử lý từ chối</h4>
    <ul>
      <li>Lắng nghe hết lý do từ chối (đừng ngắt lời)</li>
      <li>Đồng cảm: "Em hoàn toàn hiểu ạ..."</li>
      <li>Reframe: Chuyển từ chối thành cơ hội</li>
      <li>Cung cấp bằng chứng: Số liệu, testimonial, video</li>
      <li>(Chi tiết 10 tình huống sẽ học ở phần tiếp theo)</li>
    </ul>
  </div>
</div>

<div class="step-card">
  <div class="step-number">B6</div>
  <div class="step-body">
    <h4>Báo giá & Chốt sale</h4>
    <ul>
      <li>Báo giá combo (24 tháng trước, 12 tháng sau) — anchoring effect</li>
      <li>Nhấn mạnh giá trị, không chỉ giá tiền: "Chỉ tương đương [x] đồng/buổi"</li>
      <li>Tạo urgency: "Chương trình ưu đãi hết ngày [x]", "Lớp chỉ còn [x] chỗ"</li>
      <li>Trial close: "Nếu anh/chị ok, mình đăng ký ngay để con bắt đầu từ tuần tới nhé?"</li>
    </ul>
  </div>
</div>

<div class="step-card">
  <div class="step-number">B7</div>
  <div class="step-body">
    <h4>Bàn giao & Follow-up</h4>
    <ul>
      <li>Hoàn tất hồ sơ đăng ký, hướng dẫn thanh toán</li>
      <li>Bàn giao cho CS: thông tin PH, nhu cầu đặc biệt, lịch học</li>
      <li>Follow-up sau 1 tuần: "Con học buổi đầu thế nào ạ?"</li>
      <li>Follow-up sau 1 tháng: "Con có vui khi đi học không ạ?"</li>
      <li>Xin referral: "Anh/chị có bạn bè nào quan tâm không, mình có chương trình ưu đãi giới thiệu ạ"</li>
    </ul>
  </div>
</div>`,
            quiz: {
              id: "quiz_day3_s1",
              title: "Quiz: Quy trình Sale 7 bước",
              questions: [
                { q: "Bước đầu tiên trong quy trình sale là gì?", options: ["Đón tiếp PH", "Chuẩn bị trước buổi gặp", "Giới thiệu sản phẩm", "Báo giá"], correct: 1, explanation: "B1: Chuẩn bị trước buổi gặp — xem CRM, chuẩn bị tài liệu." },
                { q: "Bước nào chiếm nhiều thời gian nhất trong quy trình?", options: ["Phá băng", "Khai thác nhu cầu", "Giới thiệu sản phẩm", "Chốt sale"], correct: 1, explanation: "Khai thác nhu cầu (B3) chiếm 60-70% thời gian tư vấn." },
                { q: "Kỹ thuật FAB là viết tắt của?", options: ["Fast And Best", "Feature, Advantage, Benefit", "Find, Analyze, Build", "Focus, Act, Buy"], correct: 1, explanation: "FAB = Feature → Advantage → Benefit." },
                { q: "Khi báo giá, nên báo combo nào trước?", options: ["1 tháng", "6 tháng", "12 tháng", "24 tháng"], correct: 3, explanation: "Báo 24 tháng trước (anchoring) → 12 tháng sau — PH thấy 12 tháng hợp lý hơn." },
                { q: "Follow-up sau đăng ký nên thực hiện khi nào?", options: ["Sau 1 ngày", "Sau 1 tuần và 1 tháng", "Sau 3 tháng", "Không cần follow-up"], correct: 1, explanation: "Follow-up sau 1 tuần (hỏi buổi đầu) và sau 1 tháng (hỏi tiến bộ)." },
                { q: "Mục tiêu chính của bước Phá băng là gì?", options: ["Giới thiệu sản phẩm", "Tạo cảm giác thoải mái, tin tưởng", "Báo giá nhanh", "Thu thập thông tin con"], correct: 1, explanation: "Phá băng tạo cảm giác thoải mái để PH tin tưởng chia sẻ nhu cầu." },
                { q: "Sau chốt sale, bước tiếp theo là gì?", options: ["Kết thúc", "Bàn giao & Follow-up", "Gọi cho PH khác", "Báo cáo quản lý"], correct: 1, explanation: "B7: Bàn giao cho CS + Follow-up = chìa khóa cho referral." }
              ]
            }
          },
          {
            id: "day3_s2",
            title: "Kịch bản tư vấn theo Flow",
            icon: "📝",
            content: `<h3>Kịch bản tư vấn theo 3 Flow chính</h3>

<div class="flow-section">
  <h4>🖥️ Flow CNTT (Coding)</h4>
  <p><strong>Focus:</strong> Tư duy logic, nghề nghiệp tương lai, chuyển hướng từ game</p>
  <div class="flow-steps">
    <div class="flow-step">
      <strong>Opening:</strong> "Anh/chị có thấy bạn bè con hay nói về lập trình, AI không ạ? Thời đại số, coding đang trở thành kỹ năng bắt buộc rồi đó ạ."
    </div>
    <div class="flow-step">
      <strong>Khai thác:</strong> "Con bé có hay dùng máy tính/iPad không ạ? Thường dùng để làm gì ạ?" → Nắm pain point (nghiện game? hay sáng tạo?) → Đào sâu.
    </div>
    <div class="flow-step">
      <strong>Pitch:</strong> "Thay vì con chỉ chơi game, con có thể TẠO game! Năm đầu, con học Scratch — kéo thả rất dễ, mà output là game + animation con tự làm. PH rất bất ngờ khi thấy con demo project đầu tiên!"
    </div>
    <div class="flow-step">
      <strong>Close:</strong> "Mình có chỗ trong lớp [ngày], lịch này phù hợp với con không ạ? Nếu đăng ký 24 tháng, anh/chị được giảm 20% — tương đương chỉ [x] đồng/buổi thôi ạ."
    </div>
  </div>
</div>

<div class="flow-section">
  <h4>🎨 Flow Art</h4>
  <p><strong>Focus:</strong> Sáng tạo, kỹ năng thế kỷ 21, thể hiện bản thân</p>
  <div class="flow-steps">
    <div class="flow-step">
      <strong>Opening:</strong> "Con bé có thích vẽ không ạ? Bây giờ design là nghề hot lắm — từ thiết kế game đến thương hiệu, đâu cũng cần designer."
    </div>
    <div class="flow-step">
      <strong>Khai thác:</strong> "Con hay vẽ gì ạ? Vẽ trên giấy hay iPad?" → Đánh giá level → Đề xuất khóa phù hợp.
    </div>
    <div class="flow-step">
      <strong>Pitch:</strong> "MindX Art khác hoàn toàn lớp vẽ truyền thống. Con không chỉ vẽ tay — con sẽ dùng tablet, phần mềm chuyên nghiệp. Đến Năm 5, con có thể nhận freelance thiết kế logo, poster — kiếm tiền từ đam mê luôn ạ!"
    </div>
    <div class="flow-step">
      <strong>Close:</strong> "Mình có buổi trial miễn phí [ngày]. Cho con thử 1 buổi, con thích thì mình đăng ký ạ?"
    </div>
  </div>
</div>

<div class="flow-section">
  <h4>🤖 Flow Robotics</h4>
  <p><strong>Focus:</strong> STEM, thi đấu quốc tế, phát triển toàn diện</p>
  <div class="flow-steps">
    <div class="flow-step">
      <strong>Opening:</strong> "Con bé có thích lắp ráp LEGO không ạ? MindX có chương trình Robotics dùng LEGO + VEX — giống như LEGO nhưng robot biết chạy, biết cảm nhận!"
    </div>
    <div class="flow-step">
      <strong>Khai thác:</strong> "Con có tham gia CLB khoa học ở trường không? Thích tìm hiểu máy móc không?" → Đánh giá sở thích STEM.
    </div>
    <div class="flow-step">
      <strong>Pitch:</strong> "Robotics MindX không chỉ chơi — con thi đấu quốc tế luôn! VEX World Championship, X-Challenge... Thành tích thi đấu là điểm cộng CỰC LỚN cho hồ sơ du học. Năm ngoái, đội MindX đã đạt giải tại VEX!"
    </div>
    <div class="flow-step">
      <strong>Close:</strong> "Lớp Robotics rất ít chỗ vì cần kit robot cho mỗi bé. Hiện còn [x] chỗ — anh/chị giữ chỗ cho con nhé?"
    </div>
  </div>
</div>`,
            quiz: {
              id: "quiz_day3_s2",
              title: "Quiz: Kịch bản tư vấn",
              questions: [
                { q: "Flow Coding nên focus vào điều gì?", options: ["Giá rẻ", "Tư duy logic, nghề nghiệp tương lai", "Sáng tạo nghệ thuật", "Thi đấu quốc tế"], correct: 1, explanation: "Flow Coding focus: tư duy logic + nghề nghiệp tương lai + chuyển hướng từ game." },
                { q: "Khi tư vấn Art, điểm khác biệt chính so với lớp vẽ truyền thống?", options: ["Rẻ hơn", "Kết hợp digital art + công nghệ", "Chỉ vẽ tay", "Giáo viên nước ngoài"], correct: 1, explanation: "MindX Art: digital art + tablet + phần mềm chuyên nghiệp — khác hoàn toàn vẽ truyền thống." },
                { q: "Flow Robotics nên nhấn mạnh yếu tố nào để hấp dẫn PH?", options: ["Online learning", "Thi đấu quốc tế & hồ sơ du học", "Giá ưu đãi", "Học ở nhà"], correct: 1, explanation: "Robotics: thi đấu VEX quốc tế = điểm cộng du học — rất hấp dẫn PH." },
                { q: "Câu close nào tạo urgency tốt nhất?", options: ["Anh/chị suy nghĩ thêm nhé", "Lớp chỉ còn X chỗ vì cần kit cho mỗi bé", "Khi nào rảnh thì đăng ký", "Em gửi tài liệu để PH đọc"], correct: 1, explanation: "Scarcity (khan hiếm chỗ) tạo urgency hiệu quả nhất." },
                { q: "Trong flow tư vấn, bước nào quan trọng nhất?", options: ["Opening", "Khai thác nhu cầu", "Pitch sản phẩm", "Close"], correct: 1, explanation: "Khai thác nhu cầu quyết định pitch có phù hợp không — là bước quan trọng nhất." },
                { q: "Trial miễn phí thường được dùng trong flow nào?", options: ["Coding", "Art", "Robotics", "Tất cả"], correct: 1, explanation: "Trial miễn phí đặc biệt hiệu quả cho Art — PH thấy con thích mới đăng ký." }
              ]
            }
          },
          {
            id: "day3_s3",
            title: "Xử lý từ chối — 10 tình huống phổ biến",
            icon: "🛡️",
            content: `<h3>10 tình huống từ chối phổ biến & Cách xử lý</h3>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">1</span>"Để tôi suy nghĩ thêm"</div>
  <div class="objection-body">
    <p><strong>Tâm lý:</strong> PH chưa đủ tin tưởng hoặc chưa thấy urgency.</p>
    <p><strong>Cách xử lý:</strong> Đồng ý → Khai thác lý do thật → Giải quyết → Tạo urgency.</p>
    <p><strong>Script:</strong> <em>"Dạ em hiểu ạ, đây là quyết định quan trọng. Anh/chị có điểm nào băn khoăn để em giải đáp thêm không ạ? [...] Ngoài ra, chương trình ưu đãi 20% chỉ áp dụng đến [ngày], nếu anh/chị đăng ký hôm nay sẽ được giữ giá ạ."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">2</span>"Con tôi đã học ở trung tâm khác"</div>
  <div class="objection-body">
    <p><strong>Tâm lý:</strong> PH đã có lựa chọn, cần lý do thuyết phục để chuyển.</p>
    <p><strong>Script:</strong> <em>"Tuyệt vời ạ! Con đã có nền tảng rồi thì càng tốt. Anh/chị có hài lòng với kết quả hiện tại không ạ? MindX khác biệt ở lộ trình 5 năm liên tục + bảo trợ việc làm/du học — con không chỉ học mà còn có career path rõ ràng ạ."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">3</span>"Học phí đắt quá"</div>
  <div class="objection-body">
    <p><strong>Tâm lý:</strong> PH so sánh giá hoặc chưa thấy giá trị.</p>
    <p><strong>Script:</strong> <em>"Em hiểu ạ. Nhưng nếu tính ra, combo 24 tháng chỉ khoảng [x] đồng/buổi — bằng 1 ly trà sữa. Mà giá trị con nhận được là tư duy logic, kỹ năng CNTT, portfolio, cơ hội du học... Đầu tư cho giáo dục là đầu tư sinh lời cao nhất ạ."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">4</span>"Con tôi không thích / không hứng thú"</div>
  <div class="objection-body">
    <p><strong>Tâm lý:</strong> PH chưa biết con sẽ thích sau khi thử.</p>
    <p><strong>Script:</strong> <em>"Rất nhiều bé ban đầu cũng nói vậy ạ! Nhưng khi thấy mình TẠO được game đầu tiên, các bé đều hào hứng. Mình có buổi trial miễn phí — cho con thử 1 buổi, nếu con không thích thì hoàn toàn không sao ạ."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">5</span>"Con tôi còn nhỏ, chưa cần"</div>
  <div class="objection-body">
    <p><strong>Tâm lý:</strong> PH nghĩ coding chỉ cho trẻ lớn.</p>
    <p><strong>Script:</strong> <em>"Thực ra, nghiên cứu cho thấy giai đoạn 5-8 tuổi là 'golden age' cho phát triển tư duy logic. Scratch dùng hình ảnh kéo thả — con 8 tuổi làm được ngay, không cần biết đọc code. Bắt đầu sớm = lợi thế lớn hơn bạn bè ạ."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">6</span>"Tôi sợ con học thêm quá tải"</div>
  <div class="objection-body">
    <p><strong>Tâm lý:</strong> PH lo lịch con đã kín.</p>
    <p><strong>Script:</strong> <em>"Em hoàn toàn hiểu ạ. MindX chỉ 1 buổi/tuần (90 phút), và lớp rất vui — con thấy như đi chơi chứ không phải đi học. Nhiều bé nói 'Mẹ ơi, bao giờ đi học MindX?' vì hào hứng quá ạ!"</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">7</span>"Chồng/vợ tôi không đồng ý"</div>
  <div class="objection-body">
    <p><strong>Tâm lý:</strong> Cần consensus từ gia đình.</p>
    <p><strong>Script:</strong> <em>"Em hiểu ạ, quyết định giáo dục cần cả gia đình thống nhất. Anh/chị có muốn em gửi tài liệu chi tiết để anh/chị share với [chồng/vợ] không? Hoặc mời cả gia đình đến trung tâm tham quan, em sẽ tư vấn trực tiếp ạ."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">8</span>"MindX khác gì các trung tâm khác?"</div>
  <div class="objection-body">
    <p><strong>Tâm lý:</strong> PH đang so sánh, cần điểm khác biệt rõ ràng.</p>
    <p><strong>Script:</strong> <em>"Câu hỏi rất hay ạ! MindX khác biệt ở 4 điểm: (1) Lộ trình 5 năm liên tục, không phải khóa lẻ; (2) Giáo trình tự phát triển, cập nhật AI mới nhất; (3) 50+ trung tâm — chuyển lớp linh hoạt; (4) Bảo trợ việc làm/du học — không ai khác có. Anh/chị thử so sánh xem ạ."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">9</span>"Con tôi học online được không?"</div>
  <div class="objection-body">
    <p><strong>Tâm lý:</strong> PH muốn tiện lợi hoặc ở xa trung tâm.</p>
    <p><strong>Script:</strong> <em>"MindX có lớp online ạ! Tuy nhiên, em khuyên lớp offline vì: con được tương tác trực tiếp, thầy cô hỗ trợ ngay, và đặc biệt với Robotics thì cần kit thực tế. Nếu anh/chị ở xa, online cũng là lựa chọn tốt — chất lượng giáo trình như nhau ạ."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">10</span>"Tôi muốn xem kết quả trước"</div>
  <div class="objection-body">
    <p><strong>Tâm lý:</strong> PH cần proof/social proof.</p>
    <p><strong>Script:</strong> <em>"Hoàn toàn hợp lý ạ! Em có thể show: (1) Video project học viên đã làm — rất ấn tượng; (2) Review từ PH khác trên Facebook/Google; (3) Thành tích thi đấu quốc tế. Ngoài ra, con có thể học thử 1 buổi miễn phí để trải nghiệm trước ạ."</em></p>
  </div>
</div>`,
            quiz: {
              id: "quiz_day3_s3",
              title: "Quiz: Xử lý từ chối",
              questions: [
                { q: "Khi PH nói 'Để tôi suy nghĩ thêm', bước đầu tiên TVTS nên làm gì?", options: ["Đồng ý và để PH về", "Đồng ý rồi khai thác lý do thật", "Push chốt ngay", "Giảm giá thêm"], correct: 1, explanation: "Đồng ý → Khai thác lý do thật → Giải quyết → Tạo urgency." },
                { q: "Khi PH nói 'Học phí đắt quá', kỹ thuật nào hiệu quả nhất?", options: ["Giảm giá ngay", "So sánh giá trị/buổi với chi phí nhỏ hàng ngày", "Nói xấu đối thủ rẻ hơn", "Bỏ qua comment đó"], correct: 1, explanation: "Chia nhỏ giá/buổi → so sánh với chi phí quen thuộc (1 ly trà sữa) = reframe hiệu quả." },
                { q: "PH nói 'Con tôi không hứng thú', phản hồi tốt nhất là?", options: ["OK, tạm biệt", "Mời trial miễn phí", "Nói PH sai", "Chuyển sang sản phẩm khác"], correct: 1, explanation: "Trial miễn phí = low risk cho PH, high reward cho TVTS (trẻ thường thích sau khi thử)." },
                { q: "4 điểm khác biệt chính của MindX so với đối thủ là gì?", options: ["Giá rẻ, gần nhà, online, nhiều chi nhánh", "Lộ trình 5 năm, giáo trình tự phát triển, 50+ trung tâm, bảo trợ việc làm/du học", "Giáo viên ngoại, phòng đẹp, nhiều game, có LEGO", "Học nhóm, thi quốc tế, online, có app"], correct: 1, explanation: "4 USP: Lộ trình liên tục + Giáo trình tự phát triển + Network lớn + Bảo trợ career." },
                { q: "Khi chồng/vợ PH không đồng ý, TVTS nên làm gì?", options: ["Bỏ cuộc", "Gửi tài liệu hoặc mời cả gia đình đến trung tâm", "Gọi điện cho chồng/vợ PH", "Giảm giá đặc biệt"], correct: 1, explanation: "Gửi tài liệu + mời cả gia đình = cách tiếp cận tôn trọng và hiệu quả." },
                { q: "Golden age cho phát triển tư duy logic là giai đoạn nào?", options: ["3-5 tuổi", "5-8 tuổi", "10-12 tuổi", "14-16 tuổi"], correct: 1, explanation: "5-8 tuổi là golden age cho tư duy logic — lý do nên bắt đầu học Coding/Robotics sớm." },
                { q: "Khi PH muốn 'xem kết quả trước', TVTS nên cung cấp gì?", options: ["Chỉ brochure", "Video project + Review PH + Buổi trial miễn phí", "Chỉ nói miệng", "Cam kết bằng văn bản"], correct: 1, explanation: "Video + Review + Trial = bộ 3 social proof mạnh nhất." },
                { q: "Nguyên tắc vàng khi xử lý từ chối?", options: ["Push mạnh hơn", "Lắng nghe → Đồng cảm → Reframe → Bằng chứng", "Giảm giá ngay", "Bỏ qua và chuyển khách mới"], correct: 1, explanation: "Lắng nghe → Đồng cảm → Reframe → Cung cấp bằng chứng = framework chuẩn." },
                { q: "MindX có bao nhiêu buổi/tuần?", options: ["2 buổi", "3 buổi", "1 buổi (90 phút)", "Tùy PH chọn"], correct: 2, explanation: "Chỉ 1 buổi/tuần (90 phút) — đủ để phản bác lo ngại 'quá tải'." },
                { q: "Câu nào KHÔNG nên nói khi xử lý từ chối?", options: ["Em hoàn toàn hiểu ạ", "Trung tâm khác dạy dở lắm", "Câu hỏi rất hay ạ", "Em gửi thêm thông tin nhé"], correct: 1, explanation: "KHÔNG bao giờ nói xấu đối thủ — thiếu chuyên nghiệp và phản tác dụng." }
              ]
            }
          }
        ]
      },

      /* ==================== DAY 4 ==================== */
      {
        id: "day4",
        day: 4,
        title: "SIMULATION",
        subtitle: "Mô phỏng thực tế",
        icon: "🎭",
        color: "#D97706",
        sections: [
          {
            id: "day4_s1",
            title: "Kịch bản gọi điện tư vấn",
            icon: "📞",
            content: `<h3>Kịch bản gọi điện tư vấn</h3>

<div class="script-section">
  <h4>📱 Script gọi điện MKT Lead</h4>
  <p class="script-context"><em>Lead từ quảng cáo Facebook/Google — PH đã để lại thông tin qua form.</em></p>
  <div class="script-block">
    <p><strong>TVTS:</strong> "Alo, em chào anh/chị [tên]! Em là [tên] từ MindX Technology School ạ. Hôm trước anh/chị có đăng ký tìm hiểu về chương trình [Coding/Art/Robotics] cho bé [tên con] phải không ạ?"</p>
    <p><strong>PH:</strong> "Ừ, đúng rồi."</p>
    <p><strong>TVTS:</strong> "Dạ, cảm ơn anh/chị đã quan tâm! Em gọi để chia sẻ chi tiết hơn về chương trình ạ. Bé [tên] năm nay bao nhiêu tuổi rồi ạ?"</p>
    <p><em>→ Khai thác: tuổi con, đang học gì, sở thích, mối quan tâm của PH</em></p>
    <p><strong>TVTS:</strong> "Dạ, với bé [tuổi] thì khóa [tên khóa] rất phù hợp. Để em chia sẻ chi tiết hơn, anh/chị có tiện đến trung tâm MindX [địa chỉ] vào [ngày] được không ạ? Mình có buổi demo miễn phí cho con trải nghiệm luôn ạ!"</p>
    <p><em>→ Mục tiêu: Book lịch tư vấn trực tiếp tại trung tâm</em></p>
  </div>
</div>

<div class="script-section">
  <h4>📋 Script gọi điện Database (PH cũ chưa đăng ký)</h4>
  <p class="script-context"><em>PH đã tư vấn nhưng chưa đăng ký — cần re-engage.</em></p>
  <div class="script-block">
    <p><strong>TVTS:</strong> "Alo, em chào anh/chị [tên]! Em là [tên] từ MindX ạ. Trước đó anh/chị có tìm hiểu về chương trình [Coding] cho bé [tên con], em gọi thăm xem anh/chị còn quan tâm không ạ?"</p>
    <p><em>→ Nếu PH vẫn quan tâm: "Hiện tại MindX đang có chương trình [khuyến mãi mới], em muốn share để anh/chị cân nhắc ạ."</em></p>
    <p><em>→ Nếu PH đã quên: Nhắc lại value, mời trial mới.</em></p>
  </div>
</div>

<h4>📋 Checklist đánh giá cuộc gọi (10 tiêu chí)</h4>
<div class="checklist-grid">
  <div class="check-item"><span class="check-num">1</span> Chào hỏi rõ ràng, xưng tên + tên trung tâm</div>
  <div class="check-item"><span class="check-num">2</span> Nhắc lý do gọi (PH đã đăng ký/tìm hiểu trước)</div>
  <div class="check-item"><span class="check-num">3</span> Hỏi tên + tuổi con</div>
  <div class="check-item"><span class="check-num">4</span> Khai thác nhu cầu (≥2 câu hỏi mở)</div>
  <div class="check-item"><span class="check-num">5</span> Giới thiệu sản phẩm phù hợp tuổi</div>
  <div class="check-item"><span class="check-num">6</span> Nêu được ≥1 benefit cụ thể</div>
  <div class="check-item"><span class="check-num">7</span> Book lịch tư vấn trực tiếp / trial</div>
  <div class="check-item"><span class="check-num">8</span> Xác nhận lịch hẹn rõ ràng (ngày, giờ, địa chỉ)</div>
  <div class="check-item"><span class="check-num">9</span> Giọng nói thân thiện, năng lượng tích cực</div>
  <div class="check-item"><span class="check-num">10</span> Cảm ơn và chào tạm biệt lịch sự</div>
</div>`,
            quiz: null
          },
          {
            id: "day4_s2",
            title: "Kịch bản tư vấn trực tiếp",
            icon: "🏢",
            content: `<h3>Kịch bản tư vấn trực tiếp tại trung tâm</h3>

<div class="script-section">
  <h4>🚪 Flow đón tiếp tại trung tâm</h4>
  <div class="flow-timeline">
    <div class="ft-step"><strong>0-2 phút:</strong> Chào đón tại sảnh, mời PH + con ngồi, mời nước</div>
    <div class="ft-step"><strong>2-5 phút:</strong> Small talk, hỏi thăm, tạo rapport với cả PH và con</div>
    <div class="ft-step"><strong>5-15 phút:</strong> Khai thác nhu cầu (câu hỏi mở + đào sâu)</div>
    <div class="ft-step"><strong>15-25 phút:</strong> Demo sản phẩm — cho con thử trải nghiệm</div>
    <div class="ft-step"><strong>25-35 phút:</strong> Pitch sản phẩm phù hợp, xử lý từ chối</div>
    <div class="ft-step"><strong>35-40 phút:</strong> Báo giá, close</div>
    <div class="ft-step"><strong>40-45 phút:</strong> Hoàn tất đăng ký hoặc follow-up plan</div>
  </div>
</div>

<div class="script-section">
  <h4>💻 Demo sản phẩm cho PHHS</h4>
  <ul>
    <li><strong>Scratch:</strong> Cho con thử kéo thả 1 bài đơn giản → con làm được game cơ bản trong 10 phút → PH WOW</li>
    <li><strong>Robotics:</strong> Cho con điều khiển robot VEX → robot di chuyển → con hào hứng → PH thấy con thích</li>
    <li><strong>Art:</strong> Cho con vẽ 1 nhân vật trên tablet → show hiệu ứng digital → khác hẳn vẽ giấy</li>
  </ul>
  <p><strong>Tip:</strong> Luôn quay sang hỏi con: "Con thấy vui không? Con muốn làm thêm không?" — để PH thấy con thích.</p>
</div>

<h4>📋 Checklist đánh giá tư vấn trực tiếp (15 tiêu chí)</h4>
<div class="checklist-grid">
  <div class="check-item"><span class="check-num">1</span> Trang phục chuyên nghiệp, sạch sẽ</div>
  <div class="check-item"><span class="check-num">2</span> Đón tiếp kịp thời (PH không phải chờ quá 5 phút)</div>
  <div class="check-item"><span class="check-num">3</span> Mời nước, tạo không gian thoải mái</div>
  <div class="check-item"><span class="check-num">4</span> Small talk tự nhiên, không gượng</div>
  <div class="check-item"><span class="check-num">5</span> Khai thác nhu cầu ≥ 3 câu hỏi mở</div>
  <div class="check-item"><span class="check-num">6</span> Ghi chú keyword quan trọng</div>
  <div class="check-item"><span class="check-num">7</span> Demo sản phẩm cho con trải nghiệm</div>
  <div class="check-item"><span class="check-num">8</span> Tương tác với cả PH và con</div>
  <div class="check-item"><span class="check-num">9</span> Pitch đúng sản phẩm theo tuổi/nhu cầu</div>
  <div class="check-item"><span class="check-num">10</span> Sử dụng FAB (Feature-Advantage-Benefit)</div>
  <div class="check-item"><span class="check-num">11</span> Xử lý từ chối chuyên nghiệp</div>
  <div class="check-item"><span class="check-num">12</span> Báo giá combo trước</div>
  <div class="check-item"><span class="check-num">13</span> Tạo urgency hợp lý</div>
  <div class="check-item"><span class="check-num">14</span> Trial close ≥ 1 lần</div>
  <div class="check-item"><span class="check-num">15</span> Chào tạm biệt ấn tượng, hẹn follow-up</div>
</div>`,
            quiz: null
          },
          {
            id: "day4_s3",
            title: "Nhận diện Type khách hàng",
            icon: "👥",
            content: `<h3>Nhận diện Type khách hàng</h3>

<h4>4 Type phụ huynh</h4>
<div class="type-grid">
  <div class="type-card type-analytical">
    <h5>📊 Type Phân tích</h5>
    <p><strong>Đặc điểm:</strong> Hỏi nhiều câu chi tiết, so sánh số liệu, nghiên cứu kỹ trước khi quyết định.</p>
    <p><strong>Nhận diện:</strong> "Giáo trình cụ thể thế nào?", "Tỉ lệ học viên đạt kết quả?", "So với trung tâm X thì sao?"</p>
    <p><strong>Cách tiếp cận:</strong> Cung cấp DATA — số liệu, bảng so sánh, nghiên cứu, testimonial có con số. Đừng vội chốt — cho họ thời gian phân tích.</p>
  </div>
  <div class="type-card type-decisive">
    <h5>⚡ Type Quyết đoán</h5>
    <p><strong>Đặc điểm:</strong> Nói thẳng, muốn biết bottom line, không thích dài dòng.</p>
    <p><strong>Nhận diện:</strong> "Tóm lại bao nhiêu tiền?", "Nói ngắn gọn đi", "Khi nào bắt đầu được?"</p>
    <p><strong>Cách tiếp cận:</strong> Đi thẳng vào trọng tâm — giá, lịch, kết quả. Nói ngắn, rõ, action-oriented. Tôn trọng thời gian họ.</p>
  </div>
  <div class="type-card type-friendly">
    <h5>😊 Type Thân thiện</h5>
    <p><strong>Đặc điểm:</strong> Dễ nói chuyện, quan tâm đến cảm xúc, hay hỏi ý kiến người thân.</p>
    <p><strong>Nhận diện:</strong> "Để tôi hỏi chồng/vợ", "Bạn bè tôi có ai cho con học không?", "Con có vui không?"</p>
    <p><strong>Cách tiếp cận:</strong> Xây dựng relationship — kể story, share trải nghiệm PH khác, tạo community feeling. Đề xuất mời cả gia đình.</p>
  </div>
  <div class="type-card type-cautious">
    <h5>🔍 Type Thận trọng</h5>
    <p><strong>Đặc điểm:</strong> Lo lắng nhiều, cần nhiều đảm bảo, sợ rủi ro.</p>
    <p><strong>Nhận diện:</strong> "Nếu con không thích thì sao?", "Có hoàn tiền không?", "Cam kết gì?"</p>
    <p><strong>Cách tiếp cận:</strong> Cung cấp bảo đảm — chính sách hoàn tiền, trial miễn phí, cam kết chất lượng. Giảm rủi ro tối đa.</p>
  </div>
</div>

<h4>3 Type học viên</h4>
<div class="type-grid-small">
  <div class="type-card-small">
    <h5>🌟 Type Hứng thú</h5>
    <p>Con chủ động hỏi, muốn thử ngay. → Cho con demo nhiều, khen ngợi, PH thấy con thích → dễ chốt.</p>
  </div>
  <div class="type-card-small">
    <h5>😐 Type Thờ ơ</h5>
    <p>Con không nói nhiều, không tỏ thái độ rõ. → Hỏi con thích gì (game/vẽ/LEGO), kết nối sản phẩm với sở thích.</p>
  </div>
  <div class="type-card-small">
    <h5>😤 Type Phản đối</h5>
    <p>Con không muốn học thêm, bày tỏ rõ. → Đừng ép, hãy kết bạn với con. Cho con chơi/thử thoải mái. Thường con sẽ thay đổi khi thấy vui.</p>
  </div>
</div>`,
            quiz: {
              id: "quiz_day4_s3",
              title: "Quiz: Nhận diện Type",
              questions: [
                { q: "PH hỏi 'Tỉ lệ học viên đạt kết quả là bao nhiêu %?' thuộc type nào?", options: ["Quyết đoán", "Phân tích", "Thân thiện", "Thận trọng"], correct: 1, explanation: "Hỏi số liệu chi tiết = Type Phân tích." },
                { q: "PH nói 'Tóm lại bao nhiêu tiền?' thuộc type nào?", options: ["Phân tích", "Quyết đoán", "Thân thiện", "Thận trọng"], correct: 1, explanation: "Đi thẳng bottom line = Type Quyết đoán." },
                { q: "PH hỏi 'Nếu con không thích thì sao?' thuộc type nào?", options: ["Phân tích", "Quyết đoán", "Thân thiện", "Thận trọng"], correct: 3, explanation: "Lo lắng về rủi ro = Type Thận trọng." },
                { q: "Với Type Thân thiện, cách tiếp cận nào tốt nhất?", options: ["Đưa số liệu", "Kể story, share trải nghiệm PH khác", "Nói ngắn gọn", "Cam kết hoàn tiền"], correct: 1, explanation: "Type Thân thiện thích story, relationship, community feeling." },
                { q: "Con thuộc Type Phản đối, TVTS nên làm gì?", options: ["Ép con ngồi nghe", "Bỏ qua con, chỉ nói với PH", "Kết bạn với con, cho con chơi/thử thoải mái", "Nói con là con hư"], correct: 2, explanation: "Đừng ép — kết bạn, cho con thử thoải mái. Con thường thay đổi khi thấy vui." },
                { q: "Type Quyết đoán KHÔNG thích điều gì?", options: ["Giá tốt", "Nói dài dòng, vòng vo", "Lịch linh hoạt", "Bắt đầu nhanh"], correct: 1, explanation: "Type Quyết đoán ghét dài dòng — đi thẳng trọng tâm." },
                { q: "Cách tốt nhất để xử lý Type Thận trọng?", options: ["Push mạnh", "Trial miễn phí + chính sách hoàn tiền", "Nói xấu đối thủ", "Giảm giá 50%"], correct: 1, explanation: "Giảm rủi ro = chìa khóa cho Type Thận trọng." },
                { q: "PH nói 'Để tôi hỏi bạn bè xem có ai cho con học không' thuộc type?", options: ["Phân tích", "Quyết đoán", "Thân thiện", "Thận trọng"], correct: 2, explanation: "Hỏi ý kiến bạn bè = Type Thân thiện, cần community validation." }
              ]
            }
          }
        ]
      },

      /* ==================== DAY 5 ==================== */
      {
        id: "day5",
        day: 5,
        title: "ASSESSMENT & SYSTEM",
        subtitle: "Đánh giá & Hệ thống",
        icon: "📝",
        color: "#7C3AED",
        sections: [
          {
            id: "day5_s1",
            title: "Bài kiểm tra tổng hợp",
            icon: "📋",
            content: `<h3>Bài kiểm tra tổng hợp — 30 câu</h3>
<p>Bài kiểm tra tổng hợp bao gồm 30 câu trắc nghiệm covering tất cả nội dung từ Ngày 1 đến Ngày 4.</p>
<div class="alert-info">
  <strong>⏱ Thời gian:</strong> 30 phút<br>
  <strong>📊 Yêu cầu:</strong> Đạt ≥ 7/10 để PASS<br>
  <strong>🏆 Xếp hạng:</strong> S (9-10) | A (8-9) | B (7-8) | C (6-7) | F (<6)
</div>
<p>Nhấn nút bên dưới để bắt đầu bài kiểm tra:</p>`,
            quiz: {
              id: "quiz_final",
              title: "Bài kiểm tra tổng hợp (30 câu)",
              timer: 1800,
              questions: [
                { q: "MindX được thành lập năm nào?", options: ["2013", "2015", "2017", "2019"], correct: 1, explanation: "MindX thành lập năm 2015." },
                { q: "Bao nhiêu % PH lo con nghiện game?", options: ["45%", "57%", "67%", "78%"], correct: 2, explanation: "67% PH lo con nghiện game." },
                { q: "Lộ trình Coding có bao nhiêu năm?", options: ["3", "4", "5", "6"], correct: 2, explanation: "5 năm: Scratch → Game Creator → App Producer → Web Developer → Computer Scientist." },
                { q: "Scratch Creator dành cho trẻ từ mấy tuổi?", options: ["6+", "7+", "8+", "10+"], correct: 3, explanation: "Scratch Creator dành cho trẻ 10+." },
                { q: "Python được dạy ở năm thứ mấy của Coding?", options: ["1", "2", "3", "4"], correct: 1, explanation: "Năm 2: Game Creator — Python." },
                { q: "Little Artist (Art) dành cho trẻ từ mấy tuổi?", options: ["3+", "4+", "6+", "8+"], correct: 1, explanation: "Little Artist: 4+." },
                { q: "Robot nhí dùng kit nào?", options: ["VEX IQ", "Arduino", "LEGO Spike Essential", "mBot"], correct: 2, explanation: "LEGO Spike Essential." },
                { q: "Combo 24 tháng được giảm bao nhiêu %?", options: ["10%", "15%", "20%", "25%"], correct: 2, explanation: "Combo 24 tháng giảm 20%." },
                { q: "Quy trình sale có bao nhiêu bước?", options: ["5", "6", "7", "8"], correct: 2, explanation: "7 bước: Chuẩn bị → Phá băng → Khai thác → Giới thiệu → Xử lý TC → Chốt → Follow-up." },
                { q: "Bước khai thác nhu cầu nên chiếm bao nhiêu % thời gian?", options: ["30%", "50%", "60-70%", "80%"], correct: 2, explanation: "60-70% thời gian cho khai thác nhu cầu." },
                { q: "FAB là viết tắt của?", options: ["Fast And Best", "Feature, Advantage, Benefit", "Find, Act, Build", "Fun And Bright"], correct: 1, explanation: "FAB = Feature, Advantage, Benefit." },
                { q: "MindX hiện có bao nhiêu trung tâm?", options: ["20+", "30+", "50+", "100+"], correct: 2, explanation: "50+ trung tâm toàn quốc." },
                { q: "Tỷ lệ chốt của TVTS giỏi nhất?", options: ["50-60%", "40-50%", "30-40%", "60-70%"], correct: 2, explanation: "30-40% — đừng nản khi bị từ chối." },
                { q: "Golden age cho tư duy logic?", options: ["3-5 tuổi", "5-8 tuổi", "8-12 tuổi", "12-15 tuổi"], correct: 1, explanation: "5-8 tuổi là golden age." },
                { q: "PH hỏi nhiều số liệu thuộc type nào?", options: ["Quyết đoán", "Phân tích", "Thân thiện", "Thận trọng"], correct: 1, explanation: "Type Phân tích — cần data." },
                { q: "4 giá trị cốt lõi MindX?", options: ["Speed, Cost, Quality, Service", "Student First, Innovation, Quality, Impact", "Growth, Profit, Scale, Brand", "Learn, Create, Share, Lead"], correct: 1, explanation: "Student First, Innovation, Quality, Impact." },
                { q: "Lộ trình Art có bao nhiêu năm?", options: ["5", "6", "7", "8"], correct: 2, explanation: "7 năm: Năm 0 → Năm 6." },
                { q: "VEX IQ Kit được dùng từ năm nào trong Robotics?", options: ["Năm 0", "Năm 1", "Năm 2", "Năm 3"], correct: 1, explanation: "Năm 1 (6+) — VEX IQ Kit." },
                { q: "Khi PH nói 'đắt quá', TVTS nên?", options: ["Giảm giá ngay", "Chia nhỏ giá/buổi để reframe", "Im lặng", "Đồng ý và để PH về"], correct: 1, explanation: "Reframe: chia nhỏ giá/buổi — chỉ bằng 1 ly trà sữa." },
                { q: "Customer-First nghĩa là?", options: ["Khách hàng luôn đúng", "Đặt lợi ích PH lên đầu", "Chỉ nghe khách hàng", "Giảm giá cho khách"], correct: 1, explanation: "Đặt lợi ích PHHS lên đầu — tư vấn đúng, không push sai sản phẩm." },
                { q: "Mỗi năm Coding cơ bản có bao nhiêu buổi?", options: ["28", "36", "42", "48"], correct: 2, explanation: "42 buổi/năm (3 HP × 14 buổi)." },
                { q: "Bước cuối quy trình sale?", options: ["Chốt sale", "Xử lý từ chối", "Bàn giao & Follow-up", "Báo giá"], correct: 2, explanation: "B7: Bàn giao & Follow-up." },
                { q: "Con type 'Phản đối', TVTS nên?", options: ["Ép con", "Kết bạn, cho con thử thoải mái", "Bỏ qua con", "Mắng con"], correct: 1, explanation: "Kết bạn + cho con chơi thoải mái." },
                { q: "MindX có bao nhiêu học viên?", options: ["10,000+", "50,000+", "100,000+", "200,000+"], correct: 2, explanation: "100,000+ học viên." },
                { q: "Anchoring effect trong báo giá là?", options: ["Báo giá thấp trước", "Báo combo 24 tháng trước, 12 tháng sau", "Chỉ báo giá 1 tháng", "Không báo giá"], correct: 1, explanation: "Báo 24T trước → 12T sau — PH thấy 12T hợp lý hơn." },
                { q: "Computer Scientist (Coding Năm 5) focus vào?", options: ["Scratch", "Web development", "AI & Data Science", "Mobile app"], correct: 2, explanation: "AI, Machine Learning, Data Science." },
                { q: "Lương ngành CNTT VN cao hơn TB bao nhiêu lần?", options: ["1.5x", "2-3x", "4-5x", "6x"], correct: 1, explanation: "2-3 lần mức trung bình." },
                { q: "Demo Scratch cho PH, con có thể làm gì trong 10 phút?", options: ["Không làm gì", "Game cơ bản", "Website", "App mobile"], correct: 1, explanation: "Con tạo game cơ bản trong 10 phút — PH WOW." },
                { q: "Checklist gọi điện có bao nhiêu tiêu chí?", options: ["5", "8", "10", "15"], correct: 2, explanation: "10 tiêu chí đánh giá cuộc gọi." },
                { q: "MindX du học hướng tới quốc gia nào?", options: ["Mỹ, Anh", "Singapore, Nhật, Hàn", "Úc, Canada", "Đức, Pháp"], correct: 1, explanation: "Singapore, Nhật Bản, Hàn Quốc." }
              ]
            }
          },
          {
            id: "day5_s2",
            title: "Hướng dẫn CRM cơ bản",
            icon: "💻",
            content: `<h3>Hướng dẫn sử dụng CRM cơ bản</h3>

<div class="crm-section">
  <h4>1. Xem Lead & Ghi chú</h4>
  <ul>
    <li>Đăng nhập CRM bằng tài khoản được cấp</li>
    <li>Dashboard hiển thị lead mới, lead cần follow-up</li>
    <li>Click vào lead → Xem thông tin: tên PH, SĐT, tên con, tuổi con, nguồn lead</li>
    <li>Ghi chú sau mỗi lần contact: nội dung trao đổi, nhu cầu PH, hẹn lịch</li>
    <li><strong>Tip:</strong> Ghi chú càng chi tiết → follow-up càng hiệu quả</li>
  </ul>

  <h4>2. Tạo hợp đồng</h4>
  <ul>
    <li>Sau khi PH đồng ý đăng ký → Tạo hợp đồng trên CRM</li>
    <li>Điền đầy đủ: thông tin PH, thông tin con, sản phẩm, combo, giá</li>
    <li>Kiểm tra lại thông tin trước khi submit</li>
    <li>In hợp đồng để PH ký (nếu tư vấn trực tiếp)</li>
  </ul>

  <h4>3. Add Payment</h4>
  <ul>
    <li>PH thanh toán → Add payment trên CRM</li>
    <li>Chọn hình thức: Chuyển khoản / Tiền mặt / Quẹt thẻ</li>
    <li>Upload biên lai thanh toán (nếu chuyển khoản)</li>
    <li>Confirm payment → Hợp đồng active</li>
  </ul>
</div>

<h4>📋 Checklist thao tác CRM hàng ngày</h4>
<div class="checklist-grid">
  <div class="check-item"><span class="check-num">☐</span> Kiểm tra lead mới mỗi sáng</div>
  <div class="check-item"><span class="check-num">☐</span> Ghi chú sau mỗi cuộc gọi/meeting</div>
  <div class="check-item"><span class="check-num">☐</span> Update status lead (Hot/Warm/Cold)</div>
  <div class="check-item"><span class="check-num">☐</span> Follow-up lead theo lịch đã hẹn</div>
  <div class="check-item"><span class="check-num">☐</span> Tạo hợp đồng ngay sau khi chốt</div>
  <div class="check-item"><span class="check-num">☐</span> Add payment khi PH thanh toán</div>
</div>`,
            quiz: null
          },
          {
            id: "day5_s3",
            title: "Hình ảnh & Tác phong",
            icon: "👔",
            content: `<h3>Hình ảnh & Tác phong chuyên nghiệp</h3>

<div class="appearance-section">
  <h4>👔 Trang phục chuyên nghiệp</h4>
  <div class="do-dont-grid">
    <div class="do-card">
      <h5>✅ NÊN</h5>
      <ul>
        <li>Áo polo/sơ mi MindX (nếu có)</li>
        <li>Quần tây/quần vải sẫm màu</li>
        <li>Giày sạch sẽ, gọn gàng</li>
        <li>Tóc gọn, sạch sẽ</li>
        <li>Đeo thẻ nhân viên</li>
      </ul>
    </div>
    <div class="dont-card">
      <h5>❌ KHÔNG NÊN</h5>
      <ul>
        <li>Quần jeans rách, áo phông cũ</li>
        <li>Dép lê, sandals</li>
        <li>Trang sức quá nhiều</li>
        <li>Nước hoa nồng</li>
        <li>Trang phục quá hở</li>
      </ul>
    </div>
  </div>

  <h4>🤝 Thái độ dịch vụ</h4>
  <ul>
    <li><strong>Luôn mỉm cười:</strong> Nụ cười là "vũ khí" mạnh nhất của TVTS</li>
    <li><strong>Giao tiếp mắt:</strong> Nhìn PH khi nói chuyện, tạo kết nối</li>
    <li><strong>Lắng nghe chủ động:</strong> Gật đầu, "dạ", "vâng ạ" khi PH nói</li>
    <li><strong>Đúng giờ:</strong> Luôn đến trước PH 5-10 phút</li>
    <li><strong>Năng lượng tích cực:</strong> Giọng nói rõ ràng, hào hứng (nhưng không quá mức)</li>
    <li><strong>Tôn trọng:</strong> Không ngắt lời, không tranh cãi, luôn gọi "anh/chị"</li>
  </ul>
</div>

<h4>📋 Checklist tác phong hàng ngày</h4>
<div class="checklist-grid">
  <div class="check-item"><span class="check-num">☐</span> Trang phục chuyên nghiệp, sạch sẽ</div>
  <div class="check-item"><span class="check-num">☐</span> Đeo thẻ nhân viên</div>
  <div class="check-item"><span class="check-num">☐</span> Đến trước giờ làm 10 phút</div>
  <div class="check-item"><span class="check-num">☐</span> Kiểm tra phòng tư vấn sẵn sàng</div>
  <div class="check-item"><span class="check-num">☐</span> Chuẩn bị brochure & tài liệu</div>
  <div class="check-item"><span class="check-num">☐</span> Năng lượng tích cực, sẵn sàng</div>
</div>`,
            quiz: null
          }
        ]
      }
    ]
  },

  /* --------------------------------------------------------
     TRAINING TRACKS
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
      { id: "tip5", week: "Tuần 5", title: "Power of Silence", content: "Sau khi báo giá hoặc đặt câu hỏi close — IM LẶNG. Đừng nói thêm. Người nào nói trước = người yếu thế hơn. Để PH tự xử lý thông tin. 5-10 giây im lặng có thể tạo ra magic.", read: false }
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
  sampleLeaderboard: [
    { name: "Nguyễn Minh Anh", score: 9.6, completion: 100, rank: "S", date: "2026-03-15" },
    { name: "Trần Đức Huy", score: 9.2, completion: 100, rank: "S", date: "2026-03-14" },
    { name: "Lê Thị Hương", score: 8.8, completion: 100, rank: "A", date: "2026-03-16" },
    { name: "Phạm Văn Nam", score: 8.5, completion: 95, rank: "A", date: "2026-03-13" },
    { name: "Đỗ Thị Mai", score: 8.1, completion: 92, rank: "A", date: "2026-03-17" },
    { name: "Hoàng Văn Đức", score: 7.8, completion: 88, rank: "B", date: "2026-03-12" },
    { name: "Vũ Thị Linh", score: 7.5, completion: 85, rank: "B", date: "2026-03-18" },
    { name: "Bùi Quang Khải", score: 7.0, completion: 80, rank: "B", date: "2026-03-11" },
    { name: "Ngô Thị Trang", score: 6.5, completion: 70, rank: "C", date: "2026-03-19" },
    { name: "Đinh Văn Phong", score: 6.2, completion: 65, rank: "C", date: "2026-03-10" }
  ],

  /* --------------------------------------------------------
     K18 ONBOARD 5-DAY PROGRAM
     -------------------------------------------------------- */
  onboardK18: {
    title: "Lộ trình Onboard K18 Sale (5 ngày)",
    description: "Chương trình đào tạo Onboard dành cho TVTS mảng 18+ (người lớn). Hoàn thành trong 5 ngày để tư vấn chuyên nghiệp sản phẩm 18+.",
    days: [

      /* ==================== K18 DAY 1 ==================== */
      {
        id: "k18_day1",
        day: 1,
        title: "WHY & MINDSET (18+)",
        subtitle: "Tại sao người đi làm cần upskill/chuyển ngành?",
        icon: "🔥",
        color: "#E53E3E",
        sections: [
          {
            id: "k18_day1_s1",
            title: "Tại sao người đi làm cần upskill/chuyển ngành?",
            icon: "⚡",
            content: `<h3>Thực trạng thị trường lao động 2025-2026</h3>
<p>Thị trường lao động đang thay đổi chóng mặt. TVTS cần hiểu rõ bối cảnh để tư vấn thuyết phục cho khách hàng 18+.</p>

<div class="insight-card">
  <div class="insight-number">1</div>
  <div class="insight-body">
    <h4>🤖 92 triệu việc làm bị AI thay thế (WEF 2025)</h4>
    <p><strong>Thực trạng:</strong> World Economic Forum dự báo 92 triệu việc làm sẽ bị AI và tự động hóa thay thế đến năm 2030. Đồng thời, 170 triệu việc làm MỚI sẽ được tạo ra — nhưng đòi hỏi kỹ năng công nghệ.</p>
    <p><strong>Insight cho TVTS:</strong> Đây là con số gây shock để mở đầu cuộc tư vấn. Khách hàng cần hiểu: không phải họ SẼ mất việc, mà họ cần CHUẨN BỊ ngay từ bây giờ.</p>
    <p><strong>Script mẫu:</strong> <em>"Anh/chị biết không, theo World Economic Forum, 92 triệu việc làm sẽ bị AI thay thế. Nhưng tin tốt là 170 triệu việc mới sẽ xuất hiện — nếu anh/chị có kỹ năng phù hợp."</em></p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">2</div>
  <div class="insight-body">
    <h4>💻 74.5% công việc coding có thể bị AI làm (Anthropic 2026)</h4>
    <p><strong>Thực trạng:</strong> Nghiên cứu từ Anthropic cho thấy 74.5% công việc lập trình có thể được AI hỗ trợ hoặc thay thế. Tuy nhiên, người BIẾT SỬ DỤNG AI sẽ năng suất gấp 3-5 lần.</p>
    <p><strong>Insight:</strong> Không phải học code để "làm thay AI" — mà học code để ĐIỀU KHIỂN AI. Người hiểu công nghệ + biết dùng AI = vô đối.</p>
    <p><strong>Script mẫu:</strong> <em>"AI không thay thế lập trình viên — AI thay thế lập trình viên KHÔNG BIẾT DÙNG AI. Các khóa học của MindX đều tích hợp AI, giúp anh/chị trở thành người ĐIỀU KHIỂN AI."</em></p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">3</div>
  <div class="insight-body">
    <h4>📊 9.03% thất nghiệp thanh niên VN — cao nhất 14 năm</h4>
    <p><strong>Thực trạng:</strong> Tỷ lệ thất nghiệp thanh niên Việt Nam đạt 9.03% — mức cao nhất trong 14 năm qua. Sinh viên tốt nghiệp khó tìm việc vì thiếu kỹ năng thực tế.</p>
    <p><strong>Insight:</strong> Bằng đại học không còn đủ. Sinh viên cần portfolio thực tế + kỹ năng chuyên môn để cạnh tranh.</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">4</div>
  <div class="insight-body">
    <h4>🏢 Thiếu 150K-200K lập trình viên/năm tại VN</h4>
    <p><strong>Thực trạng:</strong> Việt Nam thiếu hụt 150.000 - 200.000 nhân sự IT mỗi năm. Các công ty sẵn sàng trả lương cao cho ứng viên có kỹ năng thực tế.</p>
    <p><strong>Insight:</strong> Đây là cơ hội VÀNG cho người chuyển ngành. Chỉ cần 6-8 tháng đào tạo bài bản = có thể bắt đầu sự nghiệp IT.</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">5</div>
  <div class="insight-body">
    <h4>💬 Jensen Huang (CEO Nvidia):</h4>
    <p><strong>Quote:</strong> <em>"Bạn sẽ không mất việc vào tay AI, nhưng sẽ mất việc vào tay người BIẾT SỬ DỤNG AI."</em></p>
    <p><strong>Ứng dụng:</strong> Câu quote này rất powerful khi tư vấn. Nó tạo urgency nhưng cũng cho hy vọng — chỉ cần học kỹ năng mới.</p>
  </div>
</div>`,
            quiz: {
              id: "quiz_k18_day1_s1",
              title: "Quiz: Thị trường lao động & AI",
              questions: [
                { q: "Theo WEF 2025, bao nhiêu triệu việc làm sẽ bị AI thay thế?", options: ["52 triệu", "72 triệu", "92 triệu", "120 triệu"], correct: 2, explanation: "92 triệu việc làm bị AI thay thế — nhưng 170 triệu việc mới sẽ xuất hiện." },
                { q: "Theo Anthropic 2026, bao nhiêu % công việc coding có thể bị AI làm?", options: ["50.5%", "64.5%", "74.5%", "84.5%"], correct: 2, explanation: "74.5% công việc lập trình có thể được AI hỗ trợ hoặc thay thế." },
                { q: "Tỷ lệ thất nghiệp thanh niên VN hiện tại là bao nhiêu?", options: ["5.03%", "7.03%", "9.03%", "11.03%"], correct: 2, explanation: "9.03% — cao nhất trong 14 năm qua." },
                { q: "Việt Nam thiếu bao nhiêu nhân sự IT mỗi năm?", options: ["50K-100K", "100K-150K", "150K-200K", "200K-300K"], correct: 2, explanation: "Thiếu 150.000 - 200.000 lập trình viên mỗi năm — cơ hội vàng cho người chuyển ngành." },
                { q: "Jensen Huang (CEO Nvidia) nói gì về AI và việc làm?", options: ["AI sẽ thay thế tất cả", "Không cần lo về AI", "Mất việc vào tay người BIẾT SỬ DỤNG AI", "AI chỉ ảnh hưởng ngành IT"], correct: 2, explanation: "Mất việc vào tay người BIẾT SỬ DỤNG AI — không phải mất việc vào tay AI." }
              ]
            }
          },
          {
            id: "k18_day1_s2",
            title: "3 nhóm khách hàng 18+ & Tổng quan MindX 18+",
            icon: "👥",
            content: `<h3>3 Nhóm khách hàng 18+ cần nắm vững</h3>

<div class="type-grid">
  <div class="type-card type-analytical">
    <h5>🎓 Nhóm 1: Sinh viên năm 3-4</h5>
    <p><strong>Nỗi đau:</strong> Sắp tốt nghiệp nhưng chưa biết làm gì, CV trống rỗng, sợ thất nghiệp.</p>
    <p><strong>Mong muốn:</strong> Có portfolio thực tế, kỹ năng để apply internship/việc làm ngay.</p>
    <p><strong>Key message:</strong> "MindX giúp bạn có portfolio chuyên nghiệp + cam kết Internship X sau khi hoàn thành."</p>
    <p><strong>Budget:</strong> Hạn chế → nhấn mạnh ROI: đầu tư 27tr → lương 15-25tr/tháng.</p>
  </div>
  <div class="type-card type-decisive">
    <h5>💼 Nhóm 2: Người đi làm 1-3 năm</h5>
    <p><strong>Nỗi đau:</strong> Lương thấp, công việc nhàm chán, muốn chuyển ngành hot nhưng không biết bắt đầu từ đâu.</p>
    <p><strong>Mong muốn:</strong> Lộ trình rõ ràng, chuyển ngành trong 6-8 tháng, lương mới cao hơn.</p>
    <p><strong>Key message:</strong> "Chỉ 6-8 tháng học bài bản, bạn hoàn toàn có thể chuyển sang ngành IT với lương khởi điểm 15-25 triệu."</p>
    <p><strong>Budget:</strong> Có thu nhập → sẵn sàng đầu tư nếu thấy ROI rõ ràng.</p>
  </div>
  <div class="type-card type-friendly">
    <h5>🧠 Nhóm 3: Người 5+ năm kinh nghiệm</h5>
    <p><strong>Nỗi đau:</strong> Lo bị AI thay thế, kỹ năng lỗi thời, muốn upskill để giữ vị thế.</p>
    <p><strong>Mong muốn:</strong> Khóa ngắn hạn, ứng dụng ngay vào công việc, không cần chuyển ngành hoàn toàn.</p>
    <p><strong>Key message:</strong> "Khóa AI chỉ 19 buổi — ứng dụng ngay vào công việc hiện tại, tăng năng suất gấp 3-5 lần."</p>
    <p><strong>Budget:</strong> Cao nhất → sẵn sàng chi nếu thấy giá trị thiết thực.</p>
  </div>
</div>

<h3>Tổng quan MindX 18+ qua các con số</h3>
<div class="stats-grid">
  <div class="stat-card"><div class="stat-number">80K+</div><div class="stat-label">Học viên tích lũy</div></div>
  <div class="stat-card"><div class="stat-number">200+</div><div class="stat-label">Đối tác doanh nghiệp</div></div>
  <div class="stat-card"><div class="stat-number">40+</div><div class="stat-label">Cơ sở toàn quốc</div></div>
  <div class="stat-card"><div class="stat-number">11</div><div class="stat-label">Năm kinh nghiệm đào tạo</div></div>
  <div class="stat-card"><div class="stat-number">7</div><div class="stat-label">Bộ môn đào tạo 18+</div></div>
  <div class="stat-card"><div class="stat-number">Cam kết</div><div class="stat-label">Việc làm sau tốt nghiệp</div></div>
</div>

<h3>Đối tác doanh nghiệp nổi bật</h3>
<div class="values-grid">
  <div class="value-card">
    <div class="value-icon">🏦</div>
    <h4>Fintech/Banking</h4>
    <p>Techcombank, VPBank, MoMo, VNPAY</p>
  </div>
  <div class="value-card">
    <div class="value-icon">💻</div>
    <h4>Tech Giants</h4>
    <p>FPT Software, FPT IS, VNG, Zalo, KMS Technology</p>
  </div>
  <div class="value-card">
    <div class="value-icon">🛒</div>
    <h4>E-commerce</h4>
    <p>Shopee, Tiki, Lazada, TikTok Shop</p>
  </div>
  <div class="value-card">
    <div class="value-icon">🏭</div>
    <h4>Khác</h4>
    <p>Bosch Vietnam, Agency lớn, Startup</p>
  </div>
</div>`,
            quiz: {
              id: "quiz_k18_day1_s2",
              title: "Quiz: Khách hàng 18+ & MindX Overview",
              questions: [
                { q: "Nhóm khách hàng nào lo lắng nhất về thất nghiệp sau tốt nghiệp?", options: ["Người đi làm 1-3 năm", "Sinh viên năm 3-4", "Người 5+ năm", "Tất cả như nhau"], correct: 1, explanation: "Sinh viên năm 3-4 lo nhất về thất nghiệp — CV trống, chưa có kinh nghiệm." },
                { q: "Key message cho nhóm người đi làm muốn chuyển ngành là gì?", options: ["Học AI 19 buổi", "Lộ trình 6-8 tháng, lương mới cao hơn", "Portfolio cho du học", "Khóa miễn phí"], correct: 1, explanation: "Người đi làm 1-3 năm muốn lộ trình rõ ràng + lương mới — ROI là key." },
                { q: "MindX 18+ có bao nhiêu đối tác doanh nghiệp?", options: ["50+", "100+", "200+", "500+"], correct: 2, explanation: "200+ đối tác doanh nghiệp — con số ấn tượng cho cam kết việc làm." },
                { q: "MindX 18+ có bao nhiêu bộ môn đào tạo?", options: ["3", "5", "7", "10"], correct: 2, explanation: "7 bộ môn: Coding, Data Analyst, ITBA, UI/UX, Marketing, Data Engineer, AI." },
                { q: "Nhóm khách hàng 5+ năm kinh nghiệm nên được tư vấn khóa nào?", options: ["Coding 8 tháng", "ITBA 6 tháng", "AI 19 buổi — ứng dụng ngay", "Data Engineer"], correct: 2, explanation: "Người 5+ năm muốn khóa ngắn, ứng dụng ngay — AI 19 buổi là lựa chọn tối ưu." }
              ]
            }
          }
        ]
      },

      /* ==================== K18 DAY 2 ==================== */
      {
        id: "k18_day2",
        day: 2,
        title: "PRODUCT MASTERY (18+)",
        subtitle: "Chi tiết 7 sản phẩm 18+",
        icon: "📦",
        color: "#2563EB",
        sections: [
          {
            id: "k18_day2_s1",
            title: "XCareer Coding & AI-Data Analyst",
            icon: "💻",
            content: `<h3>1. XCareer Coding — Lập trình Web từ A-Z</h3>
<div class="product-card">
  <div class="product-header year1"><span class="product-year">8 THÁNG</span><h4>XCareer Coding (64 buổi, 4 cấp độ)</h4></div>
  <div class="product-body">
    <p><strong>Tagline:</strong> Lập trình Web từ A-Z, apply Junior Dev sau 8 tháng</p>
    <p><strong>Đối tượng:</strong> Sinh viên IT, người chuyển ngành, người muốn upskill</p>
    <table class="pricing-table"><thead><tr><th>Cấp</th><th>Nội dung</th><th>Thời gian</th><th>Học phí</th></tr></thead><tbody>
      <tr><td>B (Basic)</td><td>HTML/CSS/JS — Xây dựng trang web tương tác</td><td>2 tháng, 16 buổi</td><td>5.000.000đ</td></tr>
      <tr><td>A (Advanced)</td><td>ReactJS — Front-end nâng cao, Components, API, Redux</td><td>2 tháng, 16 buổi</td><td>7.000.000đ</td></tr>
      <tr><td>I (Intensive)</td><td>MERN Stack — Back-end NodeJS, Express, MongoDB</td><td>2 tháng, 16 buổi</td><td>9.000.000đ</td></tr>
      <tr><td>S (Career)</td><td>Agile/Scrum, dự án thực tế, CV & Portfolio</td><td>2 tháng, 16 buổi</td><td>11.000.000đ</td></tr>
      <tr style="background:var(--red-bg);font-weight:600;"><td colspan="3">Combo X (8 tháng) — Giảm 15%</td><td><del>32.000.000đ</del> → <strong>27.200.000đ</strong></td></tr>
    </tbody></table>
    <p><strong>Lương kỳ vọng:</strong> Fresher 7-12tr → Junior 15-25tr → Mid 25-40tr → Senior 40-70tr</p>
    <p><strong>Top employers:</strong> FPT Software, VNG, MoMo, Techcombank, Shopee Vietnam</p>
    <p><strong>Key selling points:</strong></p>
    <ul>
      <li>MERN Stack — bộ công nghệ hot nhất thị trường hiện nay</li>
      <li>Từ zero đến có portfolio + CV chuyên nghiệp</li>
      <li>Cam kết việc làm (Internship X) sau hoàn thành</li>
      <li>Học phí hoàn vốn sau 2 tháng đi làm (lương Fresher 7-12tr)</li>
    </ul>
  </div>
</div>

<h3>2. AI-Data Analyst — Phân tích dữ liệu từ Excel đến Python</h3>
<div class="product-card">
  <div class="product-header year2"><span class="product-year">8 THÁNG</span><h4>AI-Data Analyst (64 buổi, 4 cấp độ)</h4></div>
  <div class="product-body">
    <p><strong>Tagline:</strong> Phân tích dữ liệu từ Excel đến Python, đi làm DA sau 8 tháng</p>
    <p><strong>Đối tượng:</strong> Người muốn chuyển sang Data, upskill phân tích</p>
    <table class="pricing-table"><thead><tr><th>Cấp</th><th>Nội dung</th><th>Thời gian</th><th>Học phí</th></tr></thead><tbody>
      <tr><td>B (Basic)</td><td>Excel nâng cao, tư duy phân tích, thống kê mô tả</td><td>2 tháng, 16 buổi</td><td>5.000.000đ</td></tr>
      <tr><td>A (Advanced)</td><td>SQL, Power BI — Truy vấn & trực quan hóa dữ liệu</td><td>2 tháng, 16 buổi</td><td>7.000.000đ</td></tr>
      <tr><td>I (Intensive)</td><td>Python cho Data, Machine Learning cơ bản, EDA</td><td>2 tháng, 16 buổi</td><td>9.000.000đ</td></tr>
      <tr><td>S (Career)</td><td>Dự án thực tế, portfolio DA, mock interview</td><td>2 tháng, 16 buổi</td><td>11.000.000đ</td></tr>
      <tr style="background:var(--red-bg);font-weight:600;"><td colspan="3">Combo X (8 tháng) — Giảm 15%</td><td><del>32.000.000đ</del> → <strong>27.200.000đ</strong></td></tr>
    </tbody></table>
    <p><strong>Lương kỳ vọng:</strong> Fresher 8-12tr → Junior 11-18tr → Mid 20-30tr → Senior 28-45tr</p>
    <p><strong>Top employers:</strong> FPT, Techcombank, Shopee, Tiki, VPBank</p>
    <p><strong>Key selling points:</strong></p>
    <ul>
      <li>Data Analyst — nghề hot nhất 2025-2026, mọi ngành đều cần</li>
      <li>Bắt đầu từ Excel quen thuộc → nâng dần lên Python/ML</li>
      <li>Lương tăng trung bình 15-25%/năm</li>
      <li>Portfolio gồm Dashboard Power BI + Dự án Python</li>
    </ul>
  </div>
</div>`,
            quiz: {
              id: "quiz_k18_day2_s1",
              title: "Quiz: Coding & Data Analyst",
              questions: [
                { q: "XCareer Coding có tổng bao nhiêu buổi học?", options: ["48 buổi", "52 buổi", "64 buổi", "72 buổi"], correct: 2, explanation: "64 buổi (4 cấp × 16 buổi mỗi cấp)." },
                { q: "Combo X của XCareer Coding giá bao nhiêu?", options: ["25.200.000đ", "27.200.000đ", "30.000.000đ", "32.000.000đ"], correct: 1, explanation: "27.200.000đ — giảm 15% từ 32.000.000đ." },
                { q: "Cấp I của XCareer Coding học công nghệ nào?", options: ["HTML/CSS/JS", "ReactJS", "MERN Stack (NodeJS, Express, MongoDB)", "Agile/Scrum"], correct: 2, explanation: "Cấp I: Fullstack Web với MERN Stack — Back-end NodeJS, Express, MongoDB." },
                { q: "Lương Fresher Data Analyst kỳ vọng bao nhiêu?", options: ["5-8 triệu", "8-12 triệu", "15-20 triệu", "20-30 triệu"], correct: 1, explanation: "Fresher DA: 8-12 triệu/tháng." },
                { q: "AI-Data Analyst bắt đầu từ công cụ nào?", options: ["Python", "SQL", "Excel nâng cao", "Power BI"], correct: 2, explanation: "Bắt đầu từ Excel nâng cao (quen thuộc) → nâng dần lên SQL, Power BI, Python." }
              ]
            }
          },
          {
            id: "k18_day2_s2",
            title: "ITBA, UI/UX & Fullstack Marketing",
            icon: "🎨",
            content: `<h3>3. IT Business Analyst — Vào ngành IT không cần code</h3>
<div class="product-card">
  <div class="product-header year3"><span class="product-year">6 THÁNG</span><h4>IT Business Analyst (48 buổi, 3 cấp độ)</h4></div>
  <div class="product-body">
    <p><strong>Tagline:</strong> Vào ngành IT không cần code — BA là cầu nối doanh nghiệp & dev</p>
    <p><strong>Đối tượng:</strong> Người trái ngành, muốn vào IT mà không cần lập trình</p>
    <table class="pricing-table"><thead><tr><th>Cấp</th><th>Nội dung</th><th>Thời gian</th><th>Học phí</th></tr></thead><tbody>
      <tr><td>B (Basic)</td><td>Tư duy BA, quy trình SDLC, viết BRD, wireframe</td><td>2 tháng, 16 buổi</td><td>5.000.000đ</td></tr>
      <tr><td>A (Advanced)</td><td>SRS, Mockup, Use Case, Activity Diagram, Agile</td><td>2 tháng, 16 buổi</td><td>7.000.000đ</td></tr>
      <tr><td>S (Career)</td><td>ERD, SQL, API Testing, Portfolio & Mock Interview</td><td>2 tháng, 16 buổi</td><td>11.000.000đ</td></tr>
      <tr style="background:var(--red-bg);font-weight:600;"><td colspan="3">Combo 3 (6 tháng) — Giảm 10%</td><td><del>23.000.000đ</del> → <strong>20.700.000đ</strong></td></tr>
    </tbody></table>
    <p><strong>Lương kỳ vọng:</strong> Fresher 8-15tr → Junior 15-25tr → Senior BA 30-55tr → PO/PM 50-75tr</p>
    <p><strong>Top employers:</strong> Techcombank, VPBank, FPT IS, KMS Technology, MoMo</p>
    <p><strong>Key selling points:</strong></p>
    <ul>
      <li>Vào ngành IT KHÔNG CẦN BIẾT CODE — perfect cho người trái ngành</li>
      <li>PO/PM lương lên đến 50-75 triệu/tháng — career path rất cao</li>
      <li>Tỷ lệ tăng lương trung bình 20-30%/năm — cao nhất trong 7 sản phẩm</li>
      <li>Chỉ 6 tháng — ngắn nhất cho career change</li>
    </ul>
  </div>
</div>

<h3>4. UI/UX Designer — Thiết kế trải nghiệm người dùng</h3>
<div class="product-card">
  <div class="product-header year4"><span class="product-year">8 THÁNG</span><h4>UI/UX Designer (64 buổi, 4 cấp độ)</h4></div>
  <div class="product-body">
    <p><strong>Tagline:</strong> Thiết kế trải nghiệm người dùng, từ zero đến có portfolio</p>
    <p><strong>Đối tượng:</strong> Người muốn chuyển ngành sang UI/UX, Product Design</p>
    <table class="pricing-table"><thead><tr><th>Cấp</th><th>Nội dung</th><th>Thời gian</th><th>Học phí</th></tr></thead><tbody>
      <tr><td>B (Basic)</td><td>Design Thinking, nguyên tắc UX, wireframing</td><td>2 tháng, 16 buổi</td><td>5.000.000đ</td></tr>
      <tr><td>A (Advanced)</td><td>Figma chuyên sâu, Design System, Typography, Color</td><td>2 tháng, 16 buổi</td><td>7.000.000đ</td></tr>
      <tr><td>I (Intensive)</td><td>Prototype, UX Research, Persona, Journey Map</td><td>2 tháng, 16 buổi</td><td>9.000.000đ</td></tr>
      <tr><td>S (Career)</td><td>Product Thinking, Agile/Scrum, Portfolio & Job</td><td>2 tháng, 16 buổi</td><td>11.000.000đ</td></tr>
      <tr style="background:var(--red-bg);font-weight:600;"><td colspan="3">Combo X (8 tháng) — Giảm 15%</td><td><del>32.000.000đ</del> → <strong>27.200.000đ</strong></td></tr>
    </tbody></table>
    <p><strong>Lương kỳ vọng:</strong> Fresher 5-10tr → Junior 10-20tr → Mid 20-30tr → Senior 30-50tr</p>
    <p><strong>Top employers:</strong> VNPAY, MoMo, Shopee, Tiki, VNG</p>
  </div>
</div>

<h3>5. Fullstack Marketing — Content → Ads → SEO → Strategy</h3>
<div class="product-card">
  <div class="product-header year5"><span class="product-year">8 THÁNG</span><h4>Fullstack Marketing (52 buổi, 4 module)</h4></div>
  <div class="product-body">
    <p><strong>Tagline:</strong> Content → Digital Ads → SEO → Marketing Strategy → dùng AI mạnh mẽ</p>
    <p><strong>Đối tượng:</strong> Marketer muốn nâng cấp toàn diện, người chuyển ngành</p>
    <table class="pricing-table"><thead><tr><th>Module</th><th>Nội dung</th><th>Thời gian</th><th>Học phí</th></tr></thead><tbody>
      <tr><td>A1</td><td>Content for Conversion — storytelling, AI content tools</td><td>2 tháng, 12 buổi</td><td>7.000.000đ</td></tr>
      <tr><td>A2</td><td>Digital for Growth — Facebook/Google Ads, Funnel</td><td>2 tháng, 12 buổi</td><td>7.000.000đ</td></tr>
      <tr><td>A3</td><td>SEO for Scale — On-page/Off-page, Technical SEO</td><td>2 tháng, 12 buổi</td><td>7.000.000đ</td></tr>
      <tr><td>S</td><td>Marketing & Sales Integration — kế hoạch tổng thể</td><td>2 tháng, 16 buổi</td><td>9.000.000đ</td></tr>
      <tr style="background:var(--red-bg);font-weight:600;"><td colspan="3">Combo X (8 tháng) — Giảm 15%</td><td><del>30.000.000đ</del> → <strong>25.500.000đ</strong></td></tr>
    </tbody></table>
    <p><strong>Lương kỳ vọng:</strong> Fresher 8-12tr → Junior 12-18tr → Mid 18-30tr → Senior 25-50tr</p>
    <p><strong>Top employers:</strong> Shopee, TikTok Shop, Lazada, Agency lớn, Startup</p>
    <p><strong>Key selling points:</strong></p>
    <ul>
      <li>Tích hợp AI mạnh mẽ — Content AI, SEO AI, Automation</li>
      <li>Tỷ lệ tăng lương 25-40%/năm — cao nhất khi có AI skills</li>
      <li>Phù hợp cho cả người đã làm marketing và chuyển ngành</li>
    </ul>
  </div>
</div>`,
            quiz: {
              id: "quiz_k18_day2_s2",
              title: "Quiz: ITBA, UI/UX, Marketing",
              questions: [
                { q: "ITBA có bao nhiêu cấp độ?", options: ["2 cấp", "3 cấp", "4 cấp", "5 cấp"], correct: 1, explanation: "ITBA có 3 cấp độ: B → A → S, tổng 6 tháng." },
                { q: "Combo ITBA giá bao nhiêu?", options: ["18.700.000đ", "20.700.000đ", "23.000.000đ", "27.200.000đ"], correct: 1, explanation: "20.700.000đ — giảm 10% từ 23.000.000đ." },
                { q: "Lương PO/PM (career path từ ITBA) có thể đạt bao nhiêu?", options: ["30-40 triệu", "40-55 triệu", "50-75 triệu", "70-100 triệu"], correct: 2, explanation: "PO/PM: 50-75 triệu/tháng — career path cao nhất từ ITBA." },
                { q: "UI/UX Designer cấp A học công cụ nào?", options: ["Photoshop", "Figma chuyên sâu", "Illustrator", "Canva"], correct: 1, explanation: "Cấp A: Figma chuyên sâu, Design System, Typography, Color." },
                { q: "Fullstack Marketing có bao nhiêu buổi tổng cộng?", options: ["48 buổi", "52 buổi", "60 buổi", "64 buổi"], correct: 1, explanation: "52 buổi (3 module × 12 buổi + 1 module 16 buổi)." },
                { q: "Tỷ lệ tăng lương trung bình của Marketing khi có AI skills?", options: ["10-15%/năm", "15-25%/năm", "25-40%/năm", "40-60%/năm"], correct: 2, explanation: "25-40%/năm — cao nhất khi kết hợp Marketing + AI." },
                { q: "Sản phẩm nào phù hợp nhất cho người TRÁI NGÀNH muốn vào IT?", options: ["XCareer Coding", "AI-Data Analyst", "IT Business Analyst", "Data Engineer"], correct: 2, explanation: "ITBA — vào ngành IT không cần code, perfect cho người trái ngành." }
              ]
            }
          },
          {
            id: "k18_day2_s3",
            title: "Data Engineer & AI + Bảng so sánh",
            icon: "🔧",
            content: `<h3>6. Data Engineer — Lương cao nhất ngành Data</h3>
<div class="product-card">
  <div class="product-header robo3"><span class="product-year">6 THÁNG</span><h4>Data Engineer (48 buổi, 3 cấp độ)</h4></div>
  <div class="product-body">
    <p><strong>Tagline:</strong> Xây dựng hạ tầng dữ liệu — lương cao nhất ngành Data</p>
    <p><strong>Đối tượng:</strong> Người có nền tảng kỹ thuật, muốn chuyên sâu Data Engineering</p>
    <table class="pricing-table"><thead><tr><th>Cấp</th><th>Nội dung</th><th>Thời gian</th><th>Học phí</th></tr></thead><tbody>
      <tr><td>B (Basic)</td><td>Python for DE, Flask, xử lý dữ liệu cơ bản</td><td>2 tháng, 16 buổi</td><td>5.000.000đ</td></tr>
      <tr><td>A (Advanced)</td><td>ETL Pipeline, SQL nâng cao, Airflow, dbt, PySpark</td><td>2 tháng, 16 buổi</td><td>7.000.000đ</td></tr>
      <tr><td>S (Career)</td><td>AWS Cloud, Docker, CI/CD, Data Lake, portfolio</td><td>2 tháng, 16 buổi</td><td>11.000.000đ</td></tr>
      <tr style="background:var(--red-bg);font-weight:600;"><td colspan="3">Combo 3 (6 tháng) — Giảm 10%</td><td><del>23.000.000đ</del> → <strong>20.700.000đ</strong></td></tr>
    </tbody></table>
    <p><strong>Lương kỳ vọng:</strong> Fresher <strong>15-18tr</strong> → Junior 17-22tr → Mid 28-40tr → Senior <strong>50-70tr</strong></p>
    <p><strong>⭐ Lương Fresher cao nhất trong 7 sản phẩm!</strong></p>
    <p><strong>Top employers:</strong> Zalo, FPT Software, VNG, Techcombank, Bosch Vietnam</p>
  </div>
</div>

<h3>7. AI (MỚI) — Ứng dụng AI không cần kỹ thuật</h3>
<div class="product-card">
  <div class="product-header art0"><span class="product-year">19 BUỔI</span><h4>AI — Ứng dụng AI cho MỌI NGÀNH</h4></div>
  <div class="product-body">
    <p><strong>Tagline:</strong> Ứng dụng AI để tăng tốc công việc — không cần kỹ thuật</p>
    <p><strong>Đối tượng:</strong> Bất kỳ ai muốn dùng AI hiệu quả trong công việc</p>
    <table class="pricing-table"><thead><tr><th>Cấp</th><th>Nội dung</th><th>Số buổi</th><th>Học phí</th></tr></thead><tbody>
      <tr><td>B (Basic)</td><td>AI for Work — email, báo cáo, slide, kế hoạch</td><td>7 buổi</td><td>3.500.000đ</td></tr>
      <tr><td>A (Advanced)</td><td>AI for Spreadsheet — phân tích dữ liệu, tự động hóa bảng tính</td><td>12 buổi</td><td>5.000.000đ</td></tr>
      <tr style="background:var(--red-bg);font-weight:600;"><td colspan="3">Combo AI (19 buổi)</td><td><strong>8.500.000đ</strong></td></tr>
    </tbody></table>
    <p><strong>Đặc biệt:</strong> KHÔNG CẦN KỸ THUẬT — dành cho MỌI NGÀNH nghề</p>
    <p><strong>Khóa ngắn nhất & chi phí thấp nhất</strong> — phù hợp cho người muốn kết quả nhanh.</p>
  </div>
</div>

<h3>📊 Bảng so sánh tổng hợp 7 sản phẩm 18+</h3>
<div class="pricing-info">
  <table class="pricing-table">
    <thead><tr><th>Sản phẩm</th><th>Thời gian</th><th>Số buổi</th><th>Combo giá</th><th>Lương Fresher</th><th>Phù hợp khi</th></tr></thead>
    <tbody>
      <tr><td>XCareer Coding</td><td>8 tháng</td><td>64</td><td>27.200.000đ</td><td>7-12tr</td><td>Muốn toàn diện, career IT</td></tr>
      <tr><td>AI-Data Analyst</td><td>8 tháng</td><td>64</td><td>27.200.000đ</td><td>8-12tr</td><td>Muốn làm Data, BI</td></tr>
      <tr><td>IT Business Analyst</td><td>6 tháng</td><td>48</td><td>20.700.000đ</td><td>8-15tr</td><td>Trái ngành vào IT, không code</td></tr>
      <tr><td>UI/UX Designer</td><td>8 tháng</td><td>64</td><td>27.200.000đ</td><td>5-10tr</td><td>Sáng tạo, thích design</td></tr>
      <tr><td>Fullstack Marketing</td><td>8 tháng</td><td>52</td><td>25.500.000đ</td><td>8-12tr</td><td>Marketing + AI</td></tr>
      <tr style="background:var(--green-bg);"><td><strong>Data Engineer</strong></td><td>6 tháng</td><td>48</td><td>20.700.000đ</td><td><strong>15-18tr ⭐</strong></td><td>Có kỹ thuật, muốn lương cao</td></tr>
      <tr><td>AI (MỚI)</td><td>~3 tháng</td><td>19</td><td>8.500.000đ</td><td>—</td><td>Muốn nhanh, mọi ngành</td></tr>
    </tbody>
  </table>
</div>

<h3>🎯 Cách match sản phẩm với nhu cầu khách hàng</h3>
<div class="type-grid">
  <div class="type-card type-analytical"><h5>💰 Muốn lương cao nhất</h5><p>→ <strong>Data Engineer</strong> (Fresher 15-18tr — cao nhất!)</p></div>
  <div class="type-card type-decisive"><h5>🚫 Không biết code</h5><p>→ <strong>ITBA</strong> (Vào IT không cần code)</p></div>
  <div class="type-card type-friendly"><h5>🎨 Sáng tạo</h5><p>→ <strong>UI/UX</strong> hoặc <strong>Marketing</strong></p></div>
  <div class="type-card type-cautious"><h5>⚡ Muốn nhanh</h5><p>→ <strong>AI</strong> (chỉ 19 buổi)</p></div>
</div>`,
            quiz: {
              id: "quiz_k18_day2_s3",
              title: "Quiz: Data Engineer, AI & So sánh",
              questions: [
                { q: "Sản phẩm nào có lương Fresher cao nhất?", options: ["XCareer Coding", "AI-Data Analyst", "Data Engineer", "ITBA"], correct: 2, explanation: "Data Engineer: Fresher 15-18 triệu — cao nhất trong 7 sản phẩm." },
                { q: "Khóa AI có tổng bao nhiêu buổi?", options: ["12 buổi", "15 buổi", "19 buổi", "24 buổi"], correct: 2, explanation: "AI: 19 buổi (7 buổi AI for Work + 12 buổi AI for Spreadsheet)." },
                { q: "Combo AI giá bao nhiêu?", options: ["5.500.000đ", "7.500.000đ", "8.500.000đ", "10.000.000đ"], correct: 2, explanation: "Combo AI: 8.500.000đ — chi phí thấp nhất trong các sản phẩm." },
                { q: "Data Engineer cấp A học công cụ nào?", options: ["Excel, Power BI", "ETL, Airflow, dbt, PySpark", "Figma, Design System", "Facebook Ads, Google Ads"], correct: 1, explanation: "Cấp A: ETL Pipeline, SQL nâng cao, Airflow, dbt, PySpark." },
                { q: "Khách hàng muốn vào IT mà không biết code, nên tư vấn sản phẩm nào?", options: ["XCareer Coding", "Data Engineer", "IT Business Analyst", "AI"], correct: 2, explanation: "ITBA — vào ngành IT không cần code." },
                { q: "Khóa AI phù hợp với đối tượng nào?", options: ["Chỉ dân IT", "Chỉ marketer", "Bất kỳ ai — mọi ngành nghề", "Chỉ sinh viên"], correct: 2, explanation: "AI dành cho MỌI NGÀNH — không cần kỹ thuật." },
                { q: "Sản phẩm nào có thời gian đào tạo ngắn nhất (cho career change)?", options: ["Coding (8 tháng)", "ITBA (6 tháng)", "Marketing (8 tháng)", "AI (19 buổi)"], correct: 3, explanation: "AI chỉ 19 buổi — ngắn nhất. Nhưng cho career change thực sự, ITBA 6 tháng là ngắn nhất." },
                { q: "Lương Senior Data Engineer có thể đạt bao nhiêu?", options: ["30-50 triệu", "40-60 triệu", "50-70 triệu", "60-90 triệu"], correct: 2, explanation: "Senior Data Engineer: 50-70 triệu/tháng — lương cao nhất ngành Data." }
              ]
            }
          }
        ]
      },

      /* ==================== K18 DAY 3 ==================== */
      {
        id: "k18_day3",
        day: 3,
        title: "SELLING SKILLS (18+)",
        subtitle: "Kỹ năng tư vấn người lớn",
        icon: "🎯",
        color: "#059669",
        sections: [
          {
            id: "k18_day3_s1",
            title: "Quy trình tư vấn 18+ & Kịch bản theo nhóm KH",
            icon: "📋",
            content: `<h3>Quy trình tư vấn 18+ — Khác biệt so với K12</h3>

<div class="alert-info">
  <strong>⚡ Khác biệt cốt lõi K18 vs K12:</strong><br>
  • Không có phụ huynh — khách hàng TỰ QUYẾT ĐỊNH<br>
  • Focus: ROI (lương sau khi học vs chi phí), thời gian, cam kết việc làm<br>
  • Kênh: Hotline, Zalo, Facebook, Event, Walk-in<br>
  • Khách hàng research nhiều trước khi liên hệ — cần data cụ thể
</div>

<h4>Kịch bản tư vấn theo 3 nhóm khách hàng 18+</h4>

<div class="flow-section">
  <h4>🎓 Flow Sinh viên năm 3-4</h4>
  <p><strong>Focus:</strong> Portfolio + thực tập + việc làm sau tốt nghiệp</p>
  <div class="flow-steps">
    <div class="flow-step">
      <strong>Opening:</strong> "Chào bạn! Bạn đang học năm mấy rồi? Đã tìm được thực tập chưa? Nhiều bạn cùng khóa đã bắt đầu chuẩn bị rồi đó."
    </div>
    <div class="flow-step">
      <strong>Pain point:</strong> "9.03% thanh niên VN thất nghiệp — cao nhất 14 năm. Bằng ĐH không còn đủ, bạn cần portfolio THỰC TẾ."
    </div>
    <div class="flow-step">
      <strong>Pitch:</strong> "Sau 8 tháng tại MindX, bạn sẽ có: Portfolio chuyên nghiệp + CV ấn tượng + cam kết Internship X với 200+ đối tác. Nhiều bạn đã có offer từ FPT, Shopee ngay khi hoàn thành khóa."
    </div>
    <div class="flow-step">
      <strong>Close:</strong> "Học phí 27.2 triệu cho 8 tháng = chỉ 3.4 triệu/tháng. Lương fresher sau khi ra trường 10-15 triệu — hoàn vốn trong 2-3 tháng đi làm."
    </div>
  </div>
</div>

<div class="flow-section">
  <h4>💼 Flow Người đi làm chuyển ngành (1-3 năm)</h4>
  <p><strong>Focus:</strong> Lộ trình 6-8 tháng + lương mới cao hơn</p>
  <div class="flow-steps">
    <div class="flow-step">
      <strong>Opening:</strong> "Anh/chị đang làm trong ngành nào ạ? Có bao giờ nghĩ đến việc chuyển sang ngành IT chưa?"
    </div>
    <div class="flow-step">
      <strong>Pain point:</strong> "Lương ngành [ngành hiện tại] trung bình 8-12 triệu, trong khi IT fresher đã 15-25 triệu. Chênh lệch sẽ càng lớn theo thời gian."
    </div>
    <div class="flow-step">
      <strong>Pitch:</strong> "Chỉ 6-8 tháng, anh/chị có thể chuyển hoàn toàn. Lộ trình bài bản từ A-Z, học 2 buổi/tuần nên vẫn đi làm được. Cam kết việc làm sau tốt nghiệp."
    </div>
    <div class="flow-step">
      <strong>Close:</strong> "ROI: đầu tư 27 triệu → lương mới 15-25 triệu/tháng = hoàn vốn trong 2 tháng đi làm."
    </div>
  </div>
</div>

<div class="flow-section">
  <h4>🧠 Flow Người muốn upskill (5+ năm)</h4>
  <p><strong>Focus:</strong> Khóa ngắn, ứng dụng ngay, tăng lương/giữ vị thế</p>
  <div class="flow-steps">
    <div class="flow-step">
      <strong>Opening:</strong> "Anh/chị có cảm thấy công việc đang thay đổi nhiều với AI không? Nhiều anh/chị ở vị trí tương tự đang tìm cách upskill."
    </div>
    <div class="flow-step">
      <strong>Pitch:</strong> "Khóa AI chỉ 19 buổi — ứng dụng NGAY vào email, báo cáo, data analysis. Không cần background kỹ thuật. Jensen Huang nói: 'Mất việc vào tay người biết dùng AI'."
    </div>
    <div class="flow-step">
      <strong>Close:</strong> "Chỉ 8.5 triệu cho 19 buổi — tăng năng suất gấp 3-5 lần. Anh/chị bắt đầu ngay tuần tới được luôn."
    </div>
  </div>
</div>`,
            quiz: {
              id: "quiz_k18_day3_s1",
              title: "Quiz: Quy trình tư vấn 18+",
              questions: [
                { q: "Khác biệt lớn nhất khi tư vấn K18 so với K12?", options: ["Giá cao hơn", "Không có phụ huynh, khách tự quyết định", "Sản phẩm ít hơn", "Không cần CRM"], correct: 1, explanation: "K18: khách hàng TỰ QUYẾT ĐỊNH — không cần thuyết phục phụ huynh." },
                { q: "Khi tư vấn sinh viên, nên focus vào điều gì?", options: ["Giá rẻ", "Portfolio + thực tập + việc làm", "Học online", "Chứng chỉ quốc tế"], correct: 1, explanation: "Sinh viên cần portfolio thực tế + cam kết việc làm — đây là USP của MindX." },
                { q: "ROI tư vấn cho người chuyển ngành: 27 triệu đầu tư, hoàn vốn sau bao lâu?", options: ["1 tháng", "2 tháng", "6 tháng", "12 tháng"], correct: 1, explanation: "Lương fresher 15-25 triệu/tháng → hoàn vốn 27 triệu trong 2 tháng." },
                { q: "Khóa nào phù hợp nhất cho người 5+ năm kinh nghiệm muốn upskill nhanh?", options: ["Coding 8 tháng", "Data 8 tháng", "AI 19 buổi", "ITBA 6 tháng"], correct: 2, explanation: "AI 19 buổi — ngắn nhất, ứng dụng ngay, không cần kỹ thuật." },
                { q: "Khi tư vấn K18, yếu tố nào quan trọng nhất để close?", options: ["Ưu đãi giảm giá", "ROI (lương sau vs chi phí)", "Địa điểm học gần", "Lớp VIP"], correct: 1, explanation: "ROI là key — người lớn quyết định dựa trên giá trị nhận được vs chi phí bỏ ra." }
              ]
            }
          },
          {
            id: "k18_day3_s2",
            title: "Xử lý từ chối 18+ — 5 tình huống phổ biến",
            icon: "🛡️",
            content: `<h3>Xử lý từ chối 18+ — 5 tình huống phổ biến nhất</h3>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">1</span>"Tôi tự học trên YouTube được"</div>
  <div class="objection-body">
    <p><strong>Tâm lý:</strong> Nghĩ rằng kiến thức miễn phí trên mạng đủ dùng.</p>
    <p><strong>Script:</strong> <em>"Em hoàn toàn hiểu ạ! YouTube là nguồn tuyệt vời. Nhưng có 3 điều YouTube không cho được: (1) LỘ TRÌNH BÀI BẢN — tự học thường rời rạc, không biết học gì trước/sau; (2) NGƯỜI HƯỚNG DẪN khi bị stuck — 80% người tự học bỏ cuộc ở tháng thứ 2; (3) CAM KẾT VIỆC LÀM — YouTube không giới thiệu việc cho bạn. MindX có cả 3: lộ trình → mentor → 200+ đối tác tuyển dụng."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">2</span>"Học xong có được việc không?"</div>
  <div class="objection-body">
    <p><strong>Tâm lý:</strong> Lo lắng chính đáng — đầu tư tiền + thời gian mà không chắc kết quả.</p>
    <p><strong>Script:</strong> <em>"Câu hỏi rất hay ạ! MindX cam kết Internship X — sau khi hoàn thành lộ trình, bạn được giới thiệu thực tập/việc làm tại 200+ đối tác: FPT, Shopee, Techcombank, VNG... Ngoài ra, cấp S có Career Kickstart: hỗ trợ CV, mock interview, portfolio chuyên nghiệp. 80K+ học viên đã tin tưởng MindX."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">3</span>"Tôi không có thời gian"</div>
  <div class="objection-body">
    <p><strong>Tâm lý:</strong> Đi làm bận, lo không theo nổi.</p>
    <p><strong>Script:</strong> <em>"Em hiểu ạ, hầu hết học viên MindX 18+ đều đi làm full-time. Lịch học chỉ 2 buổi/tuần, có lớp tối (sau 18h) và cuối tuần. Nhiều anh/chị cũng bận như vậy nhưng vẫn hoàn thành — vì lộ trình được thiết kế cho người đi làm. 6-8 tháng sẽ thay đổi cuộc đời — anh/chị có sẵn sàng dành 6 giờ/tuần không?"</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">4</span>"Học phí đắt"</div>
  <div class="objection-body">
    <p><strong>Tâm lý:</strong> Chưa thấy ROI rõ ràng.</p>
    <p><strong>Script:</strong> <em>"27 triệu cho 8 tháng = 3.4 triệu/tháng. Lương fresher sau khi hoàn thành: 15-25 triệu/tháng. Nghĩa là chỉ cần 2 tháng đi làm = hoàn vốn. Trong khi nếu không học, anh/chị tiếp tục nhận lương hiện tại thêm 5-10 năm. Đầu tư 27 triệu hôm nay → thu về 200-500 triệu/năm trong tương lai. Đây là khoản đầu tư sinh lời cao nhất."</em></p>
  </div>
</div>

<div class="objection-card">
  <div class="objection-header"><span class="obj-num">5</span>"Tôi đã 30 tuổi, có muộn không?"</div>
  <div class="objection-body">
    <p><strong>Tâm lý:</strong> Lo tuổi lớn, không kịp chuyển ngành.</p>
    <p><strong>Script:</strong> <em>"Không bao giờ muộn ạ! Thực tế, nhiều học viên MindX 28-35 tuổi đã chuyển ngành thành công. Kinh nghiệm làm việc trước đó là LỢI THẾ — anh/chị hiểu business, biết giao tiếp, quản lý thời gian. Chỉ thiếu kỹ năng kỹ thuật — và đó là điều MindX bổ sung. IT không phân biệt tuổi — chỉ phân biệt KỸ NĂNG."</em></p>
  </div>
</div>`,
            quiz: {
              id: "quiz_k18_day3_s2",
              title: "Quiz: Xử lý từ chối 18+",
              questions: [
                { q: "Khi khách nói 'Tự học YouTube được', nêu bao nhiêu điều YouTube không có?", options: ["1 điều", "2 điều", "3 điều", "5 điều"], correct: 2, explanation: "3 điều: Lộ trình bài bản, Người hướng dẫn, Cam kết việc làm." },
                { q: "Bao nhiêu % người tự học bỏ cuộc ở tháng thứ 2?", options: ["50%", "60%", "70%", "80%"], correct: 3, explanation: "80% người tự học bỏ cuộc ở tháng thứ 2 — đây là số liệu mạnh." },
                { q: "Cách reframe 'học phí đắt' hiệu quả nhất?", options: ["Giảm giá ngay", "Chia nhỏ: 3.4tr/tháng, hoàn vốn 2 tháng", "So sánh với trung tâm khác", "Nói 'không đắt'"], correct: 1, explanation: "Chia nhỏ + ROI: 27tr → lương 15-25tr/tháng = hoàn vốn 2 tháng." },
                { q: "Khách 30 tuổi lo muộn, nên phản hồi thế nào?", options: ["Đúng, hơi muộn rồi", "Kinh nghiệm làm việc là LỢI THẾ", "Chỉ giới thiệu khóa AI ngắn", "Bỏ qua lo ngại"], correct: 1, explanation: "Kinh nghiệm trước đó là lợi thế — IT không phân biệt tuổi, chỉ phân biệt kỹ năng." },
                { q: "Khi khách nói 'không có thời gian', thông tin nào quan trọng nhất?", options: ["Học online", "Chỉ 2 buổi/tuần, có lớp tối và cuối tuần", "Rút ngắn khóa học", "Cho nghỉ khi bận"], correct: 1, explanation: "2 buổi/tuần + lớp tối/cuối tuần — thiết kế cho người đi làm." }
              ]
            }
          }
        ]
      },

      /* ==================== K18 DAY 4 ==================== */
      {
        id: "k18_day4",
        day: 4,
        title: "SIMULATION (18+)",
        subtitle: "Mô phỏng tư vấn 18+",
        icon: "🎭",
        color: "#D97706",
        sections: [
          {
            id: "k18_day4_s1",
            title: "Script gọi điện & tư vấn Zalo 18+",
            icon: "📞",
            content: `<h3>Script gọi điện tư vấn 18+</h3>

<div class="script-section">
  <h4>📱 Script gọi điện — Lead từ Facebook/Website</h4>
  <p class="script-context"><em>Lead 18+ đã để lại thông tin quan tâm khóa học.</em></p>
  <div class="script-block">
    <p><strong>TVTS:</strong> "Alo, em chào anh/chị [tên]! Em là [tên] từ MindX Technology School ạ. Hôm trước anh/chị có đăng ký tìm hiểu về chương trình [Coding/Data/ITBA/...] phải không ạ?"</p>
    <p><strong>KH:</strong> "Ừ, đúng rồi."</p>
    <p><strong>TVTS:</strong> "Dạ, cảm ơn anh/chị! Em gọi để chia sẻ chi tiết hơn. Anh/chị hiện tại đang làm trong ngành nào ạ?"</p>
    <p><em>→ Khai thác: ngành nghề hiện tại, kinh nghiệm, mục tiêu (chuyển ngành/upskill), budget, timeline</em></p>
    <p><strong>TVTS:</strong> "Với nhu cầu của anh/chị, em đề xuất khóa [tên khóa] — [tagline ngắn]. Để em share chi tiết qua Zalo nhé, anh/chị cho em xin Zalo được không ạ?"</p>
    <p><em>→ Mục tiêu: Lấy Zalo → gửi tài liệu → book lịch tư vấn chi tiết</em></p>
  </div>
</div>

<div class="script-section">
  <h4>💬 Script tư vấn qua Zalo</h4>
  <div class="script-block">
    <p><strong>Message 1 (Sau call):</strong> "Chào anh/chị [tên]! Em là [tên] từ MindX. Gửi anh/chị thông tin khóa [tên] như đã trao đổi. [Đính kèm brochure/link]"</p>
    <p><strong>Message 2 (Sau 1 ngày):</strong> "Anh/chị đã xem qua thông tin chưa ạ? Có điểm nào anh/chị muốn em giải thích thêm không?"</p>
    <p><strong>Message 3 (Tạo urgency):</strong> "Anh/chị ơi, lớp [ngày] sắp khai giảng và còn [X] chỗ thôi ạ. Nếu anh/chị quan tâm, mình giữ chỗ trước nhé?"</p>
  </div>
</div>

<h3>📋 Checklist đánh giá cuộc gọi 18+ (10 tiêu chí)</h3>
<div class="checklist-grid">
  <div class="check-item"><span class="check-num">1</span> Chào hỏi chuyên nghiệp, xưng tên + MindX</div>
  <div class="check-item"><span class="check-num">2</span> Nhắc context (KH đã đăng ký tìm hiểu)</div>
  <div class="check-item"><span class="check-num">3</span> Hỏi ngành nghề + kinh nghiệm hiện tại</div>
  <div class="check-item"><span class="check-num">4</span> Khai thác mục tiêu (chuyển ngành/upskill)</div>
  <div class="check-item"><span class="check-num">5</span> Đề xuất sản phẩm phù hợp + tagline</div>
  <div class="check-item"><span class="check-num">6</span> Nêu ≥1 ROI cụ thể (lương, thời gian hoàn vốn)</div>
  <div class="check-item"><span class="check-num">7</span> Lấy Zalo hoặc book lịch tư vấn chi tiết</div>
  <div class="check-item"><span class="check-num">8</span> Giọng nói chuyên nghiệp, tôn trọng (xưng anh/chị)</div>
  <div class="check-item"><span class="check-num">9</span> Không push quá mức, tạo cảm giác thoải mái</div>
  <div class="check-item"><span class="check-num">10</span> Cảm ơn và hẹn follow-up rõ ràng</div>
</div>`,
            quiz: null
          },
          {
            id: "k18_day4_s2",
            title: "Nhận diện 3 Type khách hàng 18+",
            icon: "👥",
            content: `<h3>3 Type khách hàng 18+ — Nhận diện & Xử lý</h3>

<div class="type-grid">
  <div class="type-card type-analytical">
    <h5>📊 Type "Nghiên cứu"</h5>
    <p><strong>Đặc điểm:</strong> Đã tìm hiểu nhiều, so sánh MindX với đối thủ, hỏi câu hỏi chi tiết về giáo trình, mentor, tỷ lệ có việc.</p>
    <p><strong>Nhận diện:</strong> "Giáo trình cụ thể thế nào?", "Mentor background gì?", "Tỷ lệ có việc sau khóa?", "So với CodeGym/Funix thì sao?"</p>
    <p><strong>Cách tiếp cận:</strong></p>
    <ul>
      <li>Cung cấp DATA chi tiết: số liệu, bảng so sánh, testimonial có tên/công ty</li>
      <li>Gửi tài liệu chi tiết qua Zalo/email</li>
      <li>Đừng vội close — cho họ thời gian phân tích</li>
      <li>Follow-up bằng thêm data: "Em gửi thêm case study của bạn X — giống hoàn cảnh anh/chị."</li>
    </ul>
  </div>
  <div class="type-card type-decisive">
    <h5>⚡ Type "Nóng vội"</h5>
    <p><strong>Đặc điểm:</strong> Muốn kết quả NHANH, hỏi ngay bao lâu có việc, muốn bắt đầu ngay.</p>
    <p><strong>Nhận diện:</strong> "Bao lâu thì có việc?", "Lớp gần nhất khai giảng khi nào?", "Tôi muốn bắt đầu ngay!"</p>
    <p><strong>Cách tiếp cận:</strong></p>
    <ul>
      <li>Focus khóa AI ngắn (19 buổi) hoặc nêu rõ timeline (6-8 tháng)</li>
      <li>Nhấn mạnh cam kết đầu ra + Internship X</li>
      <li>Close NGAY khi họ ready — đừng dài dòng</li>
      <li>Cho lịch khai giảng gần nhất</li>
    </ul>
  </div>
  <div class="type-card type-cautious">
    <h5>🤔 Type "Do dự"</h5>
    <p><strong>Đặc điểm:</strong> Chưa chắc chắn, lo lắng nhiều, cần nhiều validation.</p>
    <p><strong>Nhận diện:</strong> "Để em suy nghĩ thêm", "Em chưa chắc có hợp không", "Nếu học không hiểu thì sao?"</p>
    <p><strong>Cách tiếp cận:</strong></p>
    <ul>
      <li>Mời trial class / buổi học thử miễn phí</li>
      <li>Tư vấn 1-1 chi tiết, giải đáp MỌI lo lắng</li>
      <li>Chia sẻ case study: "Bạn A cũng lo như vậy, nhưng sau 3 tháng đã..."</li>
      <li>Follow-up kiên nhẫn — ĐỪNG PUSH, hãy nurture</li>
    </ul>
  </div>
</div>`,
            quiz: {
              id: "quiz_k18_day4_s2",
              title: "Quiz: Type khách hàng 18+",
              questions: [
                { q: "Khách hỏi 'So với CodeGym thì MindX khác gì?' thuộc type nào?", options: ["Nóng vội", "Nghiên cứu", "Do dự", "Không thuộc type nào"], correct: 1, explanation: "So sánh đối thủ = Type Nghiên cứu — đã tìm hiểu kỹ, cần data." },
                { q: "Khách nói 'Lớp gần nhất khi nào? Tôi muốn bắt đầu ngay!' thuộc type?", options: ["Nghiên cứu", "Nóng vội", "Do dự", "Phân tích"], correct: 1, explanation: "Muốn kết quả nhanh, bắt đầu ngay = Type Nóng vội." },
                { q: "Với Type Do dự, cách tiếp cận tốt nhất?", options: ["Push close ngay", "Mời trial class + case study + follow-up kiên nhẫn", "Gửi data chi tiết", "Cho lịch khai giảng"], correct: 1, explanation: "Trial + case study + nurture — ĐỪNG PUSH." },
                { q: "Type Nghiên cứu cần được follow-up bằng gì?", options: ["Ưu đãi giảm giá", "Thêm data + case study cụ thể", "Gọi liên tục", "Mời event"], correct: 1, explanation: "Type Nghiên cứu cần thêm data, case study — không cần urgency." },
                { q: "Type Nóng vội nên được tư vấn khóa nào?", options: ["Coding 8 tháng (chi tiết)", "AI 19 buổi hoặc nêu rõ timeline", "ITBA (giải thích kỹ)", "Marketing (nhiều module)"], correct: 1, explanation: "Nóng vội → AI ngắn hoặc timeline rõ ràng, close ngay." },
                { q: "Khách nói 'Em chưa chắc có hợp không' thuộc type?", options: ["Nghiên cứu", "Nóng vội", "Do dự", "Quyết đoán"], correct: 2, explanation: "Chưa chắc chắn, cần validation = Type Do dự." },
                { q: "Nguyên tắc CHUNG khi tư vấn 18+?", options: ["Push mạnh", "Tôn trọng + data + không push quá mức", "Giảm giá liên tục", "Chỉ gửi brochure"], correct: 1, explanation: "18+ là người lớn — tôn trọng, cung cấp data, để họ tự quyết định." },
                { q: "Câu nào KHÔNG nên nói khi tư vấn 18+?", options: ["Lương fresher sau khi học là 15-25 triệu", "Anh/chị phải đăng ký ngay hôm nay", "Cam kết Internship X với 200+ đối tác", "Lộ trình thiết kế cho người đi làm"], correct: 1, explanation: "'Phải đăng ký ngay' = quá push — người lớn không thích bị ép." }
              ]
            }
          }
        ]
      },

      /* ==================== K18 DAY 5 ==================== */
      {
        id: "k18_day5",
        day: 5,
        title: "ASSESSMENT (18+)",
        subtitle: "Đánh giá tổng hợp 18+",
        icon: "📝",
        color: "#7C3AED",
        sections: [
          {
            id: "k18_day5_s1",
            title: "Bài kiểm tra tổng hợp 18+",
            icon: "📋",
            content: `<h3>Bài kiểm tra tổng hợp 18+ — 25 câu</h3>
<p>Bài kiểm tra tổng hợp bao gồm 25 câu trắc nghiệm covering tất cả nội dung K18 từ Ngày 1 đến Ngày 4.</p>
<div class="alert-info">
  <strong>⏱ Thời gian:</strong> 25 phút<br>
  <strong>📊 Yêu cầu:</strong> Đạt ≥ 7/10 để PASS<br>
  <strong>🏆 Xếp hạng:</strong> S (9-10) | A (8-9) | B (7-8) | C (6-7) | F (<6)
</div>
<p>Nhấn nút bên dưới để bắt đầu bài kiểm tra:</p>`,
            quiz: {
              id: "quiz_k18_final",
              title: "Bài kiểm tra tổng hợp K18 (25 câu)",
              timer: 1500,
              questions: [
                { q: "Theo WEF 2025, bao nhiêu triệu việc làm bị AI thay thế?", options: ["52 triệu", "72 triệu", "92 triệu", "120 triệu"], correct: 2, explanation: "92 triệu việc làm bị AI thay thế." },
                { q: "Tỷ lệ thất nghiệp thanh niên VN?", options: ["5.03%", "7.03%", "9.03%", "12%"], correct: 2, explanation: "9.03% — cao nhất 14 năm." },
                { q: "MindX 18+ có bao nhiêu bộ môn?", options: ["4", "5", "7", "10"], correct: 2, explanation: "7 bộ môn đào tạo 18+." },
                { q: "XCareer Coding combo giá bao nhiêu?", options: ["25.200.000đ", "27.200.000đ", "30.000.000đ", "32.000.000đ"], correct: 1, explanation: "27.200.000đ (giảm 15%)." },
                { q: "Sản phẩm có lương Fresher cao nhất?", options: ["Coding", "Data Analyst", "Data Engineer", "Marketing"], correct: 2, explanation: "Data Engineer: Fresher 15-18 triệu." },
                { q: "ITBA thời gian đào tạo bao lâu?", options: ["4 tháng", "6 tháng", "8 tháng", "12 tháng"], correct: 1, explanation: "6 tháng (48 buổi, 3 cấp)." },
                { q: "Khóa AI có bao nhiêu buổi?", options: ["12", "15", "19", "24"], correct: 2, explanation: "19 buổi (7 + 12)." },
                { q: "Combo AI giá bao nhiêu?", options: ["5.500.000đ", "7.500.000đ", "8.500.000đ", "10.000.000đ"], correct: 2, explanation: "8.500.000đ." },
                { q: "MindX có bao nhiêu đối tác doanh nghiệp?", options: ["50+", "100+", "200+", "500+"], correct: 2, explanation: "200+ đối tác." },
                { q: "Người trái ngành muốn vào IT nên học gì?", options: ["Coding", "ITBA", "Data Engineer", "AI"], correct: 1, explanation: "ITBA — vào IT không cần code." },
                { q: "Khác biệt lớn nhất K18 vs K12?", options: ["Giá cao hơn", "Khách tự quyết định, không có PH", "Online", "Ít sản phẩm"], correct: 1, explanation: "Khách 18+ tự quyết định — focus ROI." },
                { q: "ROI tư vấn K18: 27tr đầu tư, hoàn vốn sau?", options: ["1 tháng", "2 tháng", "6 tháng", "12 tháng"], correct: 1, explanation: "Lương fresher 15-25tr → hoàn vốn 2 tháng." },
                { q: "Khi khách nói 'tự học YouTube', nêu mấy điểm YouTube thiếu?", options: ["1", "2", "3", "5"], correct: 2, explanation: "3 điều: lộ trình, mentor, cam kết việc làm." },
                { q: "80% người tự học bỏ cuộc ở tháng thứ mấy?", options: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 6"], correct: 1, explanation: "Tháng 2 — dùng để convince khách không nên tự học." },
                { q: "Lương Senior Data Engineer?", options: ["30-50tr", "40-60tr", "50-70tr", "60-90tr"], correct: 2, explanation: "50-70 triệu/tháng." },
                { q: "PO/PM (career path ITBA) lương bao nhiêu?", options: ["30-50tr", "40-60tr", "50-75tr", "60-90tr"], correct: 2, explanation: "50-75 triệu/tháng." },
                { q: "Type 'Nghiên cứu' cần gì?", options: ["Urgency", "Data + case study", "Trial class", "Giảm giá"], correct: 1, explanation: "Data chi tiết + case study cụ thể." },
                { q: "Type 'Do dự' xử lý bằng cách nào?", options: ["Push close", "Trial + case study + nurture", "Gửi data", "Close ngay"], correct: 1, explanation: "Trial + case study + follow-up kiên nhẫn." },
                { q: "Khóa nào ngắn nhất cho upskill nhanh?", options: ["Coding", "ITBA", "Marketing", "AI (19 buổi)"], correct: 3, explanation: "AI: 19 buổi — ngắn nhất." },
                { q: "Fullstack Marketing combo giá?", options: ["20.700.000đ", "25.500.000đ", "27.200.000đ", "30.000.000đ"], correct: 1, explanation: "25.500.000đ (giảm 15%)." },
                { q: "Jensen Huang nói gì về AI?", options: ["AI sẽ thay thế tất cả", "Mất việc vào tay người biết dùng AI", "Không cần lo", "AI chỉ cho IT"], correct: 1, explanation: "Mất việc vào tay người BIẾT SỬ DỤNG AI." },
                { q: "Data Analyst bắt đầu từ công cụ nào?", options: ["Python", "SQL", "Excel", "Power BI"], correct: 2, explanation: "Excel nâng cao → nâng dần." },
                { q: "XCareer Coding cấp I học gì?", options: ["HTML/CSS", "ReactJS", "MERN Stack", "Agile/Scrum"], correct: 2, explanation: "MERN Stack: NodeJS, Express, MongoDB." },
                { q: "Khách 30 tuổi lo muộn, trả lời thế nào?", options: ["Đúng, hơi muộn", "Kinh nghiệm là LỢI THẾ", "Chỉ học AI thôi", "Khuyên không nên"], correct: 1, explanation: "Kinh nghiệm = lợi thế, IT chỉ phân biệt kỹ năng." },
                { q: "Việt Nam thiếu bao nhiêu nhân sự IT/năm?", options: ["50K-100K", "100K-150K", "150K-200K", "250K-300K"], correct: 2, explanation: "150.000 - 200.000 nhân sự IT/năm." }
              ]
            }
          },
          {
            id: "k18_day5_s2",
            title: "Hướng dẫn CRM & Tác phong 18+",
            icon: "💻",
            content: `<h3>Hướng dẫn CRM cho tư vấn 18+</h3>

<div class="crm-section">
  <h4>1. Quản lý Lead 18+</h4>
  <ul>
    <li>Lead 18+ phân loại: Sinh viên / Người đi làm chuyển ngành / Người upskill</li>
    <li>Ghi chú: ngành nghề hiện tại, mức lương, mục tiêu, sản phẩm quan tâm</li>
    <li>Tag sản phẩm: Coding / Data / ITBA / UI-UX / Marketing / DE / AI</li>
    <li>Status: New → Contacted → Interested → Trial → Enrolled → Dropped</li>
  </ul>

  <h4>2. Pipeline 18+ khác K12</h4>
  <ul>
    <li>K18 cycle dài hơn: trung bình 1-3 tuần từ lead đến close (K12: 3-7 ngày)</li>
    <li>Nhiều touchpoint hơn: Call → Zalo → Email → Event → Close</li>
    <li>Cần nurture content: case study, blog, video testimony</li>
  </ul>

  <h4>3. Tác phong tư vấn 18+</h4>
  <ul>
    <li><strong>Xưng hô:</strong> "Anh/chị" (không gọi "em", "bạn" với người lớn tuổi hơn)</li>
    <li><strong>Tone:</strong> Chuyên nghiệp, tư vấn (không sales-y), cung cấp giá trị</li>
    <li><strong>Channel:</strong> Zalo > Call > Email (người lớn thích nhắn tin hơn gọi)</li>
    <li><strong>Follow-up:</strong> Tối đa 3 lần, cách nhau 3-5 ngày, mỗi lần add thêm value</li>
    <li><strong>Dress code:</strong> Smart casual (không quá formal, không quá casual)</li>
  </ul>
</div>

<h4>📋 Checklist tác phong 18+ hàng ngày</h4>
<div class="checklist-grid">
  <div class="check-item"><span class="check-num">☐</span> Kiểm tra lead 18+ mới mỗi sáng</div>
  <div class="check-item"><span class="check-num">☐</span> Follow-up lead theo pipeline (Zalo ưu tiên)</div>
  <div class="check-item"><span class="check-num">☐</span> Ghi chú chi tiết sau mỗi contact</div>
  <div class="check-item"><span class="check-num">☐</span> Chuẩn bị case study/data cho tư vấn</div>
  <div class="check-item"><span class="check-num">☐</span> Smart casual dress code</div>
  <div class="check-item"><span class="check-num">☐</span> Tone chuyên nghiệp, data-driven</div>
</div>`,
            quiz: null
          }
        ]
      }
    ]
  },

  /* --------------------------------------------------------
     CS K12 ONBOARD 5-DAY PROGRAM
     -------------------------------------------------------- */
  onboardCSK12: {
    title: "Lộ trình Onboard CS K12 (5 ngày)",
    description: "Chương trình đào tạo dành cho nhân viên CS mới tại MindX K12. Hoàn thành trong 5 ngày để bắt đầu chăm sóc lớp học chuyên nghiệp.",
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
            id: "csk12_d1_s1",
            title: "Tổng quan MindX",
            icon: "🏢",
            content: `<h3>Lịch sử hình thành MindX (2015 → 2026)</h3>

<div class="timeline-block">
  <div class="timeline-item">
    <div class="timeline-year">2015</div>
    <div class="timeline-desc"><strong>Thành lập:</strong> MindX ra đời với tên gọi "Techkids" — lớp học lập trình đầu tiên cho trẻ em tại Hà Nội với chỉ 20 học viên.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2017</div>
    <div class="timeline-desc"><strong>Đổi tên:</strong> Chính thức đổi tên thành MindX Technology School. Mở rộng vào TP.HCM.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2019</div>
    <div class="timeline-desc"><strong>Đa dạng hóa:</strong> Ra mắt lộ trình Art & Design và Robotics. Mở 15+ trung tâm toàn quốc.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2020</div>
    <div class="timeline-desc"><strong>Chuyển đổi số:</strong> Phát triển nền tảng LMS online. Ra mắt chương trình K18+ cho người lớn.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2022</div>
    <div class="timeline-desc"><strong>Scale-up:</strong> 30+ trung tâm, 100+ giáo viên. Ra mắt chương trình Du học & Bảo trợ việc làm.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2025-2026</div>
    <div class="timeline-desc"><strong>Hiện tại:</strong> 50+ trung tâm, 200+ TVTS, 500+ giáo viên, 100,000+ học viên. Hệ sinh thái giáo dục công nghệ lớn nhất Việt Nam.</div>
  </div>
</div>

<h3>Sứ mệnh & Giá trị cốt lõi</h3>
<div class="values-grid">
  <div class="value-card">
    <div class="value-icon">🔭</div>
    <h4>Tầm nhìn</h4>
    <p>Trở thành hệ sinh thái giáo dục công nghệ số 1 Đông Nam Á.</p>
  </div>
  <div class="value-card">
    <div class="value-icon">🎯</div>
    <h4>Sứ mệnh</h4>
    <p>Trang bị kỹ năng công nghệ cho thế hệ trẻ Việt Nam, giúp họ tự tin bước vào kỷ nguyên số.</p>
  </div>
  <div class="value-card">
    <div class="value-icon">💎</div>
    <h4>Giá trị cốt lõi</h4>
    <ul>
      <li><strong>Student First:</strong> Học viên là trung tâm</li>
      <li><strong>Innovation:</strong> Đổi mới liên tục</li>
      <li><strong>Quality:</strong> Chất lượng không thỏa hiệp</li>
      <li><strong>Impact:</strong> Tạo tác động tích cực</li>
    </ul>
  </div>
</div>

<h3>MindX qua các con số</h3>
<div class="stats-grid">
  <div class="stat-card"><div class="stat-number">50+</div><div class="stat-label">Trung tâm toàn quốc</div></div>
  <div class="stat-card"><div class="stat-number">200+</div><div class="stat-label">Tư vấn tuyển sinh</div></div>
  <div class="stat-card"><div class="stat-number">500+</div><div class="stat-label">Giáo viên</div></div>
  <div class="stat-card"><div class="stat-number">100K+</div><div class="stat-label">Học viên</div></div>
  <div class="stat-card"><div class="stat-number">80K+</div><div class="stat-label">Phụ huynh tin tưởng</div></div>
  <div class="stat-card"><div class="stat-number">3</div><div class="stat-label">Lộ trình (Coding, Art, Robotics)</div></div>
</div>

<h3>Cấu trúc tổ chức</h3>
<div class="insight-card">
  <div class="insight-number">📋</div>
  <div class="insight-body">
    <h4>Hệ thống quản lý MindX</h4>
    <p><strong>HO (Head Office)</strong> → Chiến lược, sản phẩm, marketing, đào tạo tập trung</p>
    <p><strong>FM (Field Manager)</strong> → Quản lý vùng miền (Bắc, Trung, Nam)</p>
    <p><strong>BU (Business Unit)</strong> → Đơn vị kinh doanh tại mỗi trung tâm:</p>
    <ul>
      <li><strong>CM (Center Manager):</strong> Quản lý trung tâm</li>
      <li><strong>CSL (Customer Service Leader):</strong> Trưởng nhóm CS</li>
      <li><strong>STL (Sales Team Leader):</strong> Trưởng nhóm Sale</li>
      <li><strong>CS:</strong> Nhân viên chăm sóc khách hàng</li>
      <li><strong>Sale (TVTS):</strong> Tư vấn tuyển sinh</li>
    </ul>
  </div>
</div>`,
            quiz: {
              id: "quiz_csk12_d1_s1",
              title: "Quiz: Tổng quan MindX",
              questions: [
                {
                  q: "MindX được thành lập vào năm nào với tên gọi ban đầu là gì?",
                  options: ["2013 — MindCode", "2015 — Techkids", "2016 — CodeSchool", "2017 — MindX"],
                  correct: 1,
                  explanation: "MindX được thành lập năm 2015 với tên gọi Techkids, sau đó đổi tên thành MindX Technology School năm 2017."
                },
                {
                  q: "Hiện tại MindX có bao nhiêu trung tâm trên toàn quốc?",
                  options: ["20+", "30+", "50+", "100+"],
                  correct: 2,
                  explanation: "MindX hiện có hơn 50 trung tâm trên toàn quốc, phục vụ hơn 100,000 học viên."
                },
                {
                  q: "Giá trị cốt lõi nào KHÔNG phải của MindX?",
                  options: ["Student First", "Innovation", "Profit First", "Impact"],
                  correct: 2,
                  explanation: "4 giá trị cốt lõi của MindX: Student First, Innovation, Quality, Impact. Profit First không nằm trong giá trị cốt lõi."
                },
                {
                  q: "Trong cấu trúc tổ chức BU, CSL là viết tắt của?",
                  options: ["Center Sales Leader", "Customer Service Leader", "Customer Support Lead", "Center Service Leader"],
                  correct: 1,
                  explanation: "CSL = Customer Service Leader — Trưởng nhóm CS tại trung tâm."
                },
                {
                  q: "MindX có bao nhiêu lộ trình đào tạo chính cho K12?",
                  options: ["2 (Coding, Art)", "3 (Coding, Art, Robotics)", "4 (Coding, Art, Robotics, AI)", "5 lộ trình"],
                  correct: 1,
                  explanation: "MindX có 3 lộ trình K12 chính: Coding, Art & Design, và Robotics."
                }
              ]
            }
          },
          {
            id: "csk12_d1_s2",
            title: "Vai trò CS tại MindX",
            icon: "👩‍💼",
            content: `<h3>CS là gì? — Người đồng hành với học viên trên hành trình học tập</h3>

<div class="insight-card">
  <div class="insight-number">💡</div>
  <div class="insight-body">
    <h4>Định nghĩa CS tại MindX</h4>
    <p>CS (Customer Service) tại MindX không chỉ là nhân viên hỗ trợ — CS là <strong>người đồng hành chính</strong> của học viên và phụ huynh trên toàn bộ hành trình học tập. CS quản lý lớp học, chăm sóc từng học viên, và đảm bảo trải nghiệm học tập tốt nhất.</p>
    <p><em>"Nếu Sale đưa khách đến MindX, thì CS là người giữ khách ở lại và phát triển."</em></p>
  </div>
</div>

<h3>Phân biệt CS vs Sale</h3>
<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:0.85rem;">
  <thead>
    <tr style="background:#F7FAFC;">
      <th style="padding:10px;border:1px solid #E2E8F0;text-align:left;">Tiêu chí</th>
      <th style="padding:10px;border:1px solid #E2E8F0;text-align:left;">Sale (TVTS)</th>
      <th style="padding:10px;border:1px solid #E2E8F0;text-align:left;">CS</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>Mục tiêu chính</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Chốt đơn, tuyển sinh</td><td style="padding:8px;border:1px solid #E2E8F0;">Giữ chân & phát triển học viên</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>KPI</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Doanh thu, số đơn</td><td style="padding:8px;border:1px solid #E2E8F0;">Retention, satisfaction, re-enroll</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>Giao tiếp</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Trước đăng ký</td><td style="padding:8px;border:1px solid #E2E8F0;">Sau đăng ký, suốt khóa học</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>Thời gian</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Ngắn hạn (1-2 tuần)</td><td style="padding:8px;border:1px solid #E2E8F0;">Dài hạn (12-60 tháng)</td></tr>
  </tbody>
</table>

<h3>Các đầu việc chính của CS K12</h3>

<div class="insight-card">
  <div class="insight-number">1</div>
  <div class="insight-body">
    <h4>📋 Quản lý lớp học</h4>
    <ul>
      <li><strong>Attendance:</strong> Điểm danh mỗi buổi, theo dõi nghỉ học, sắp xếp học bù (makeup)</li>
      <li><strong>Makeup:</strong> Liên hệ PH sắp xếp lịch học bù khi HV nghỉ</li>
      <li><strong>Level-up:</strong> Theo dõi tiến độ, hỗ trợ chuyển level khi hoàn thành khóa</li>
      <li><strong>Checkpoint:</strong> Theo dõi kết quả CP1, CP2, nghiệm thu sản phẩm</li>
    </ul>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">2</div>
  <div class="insight-body">
    <h4>❤️ Chăm sóc học viên & phụ huynh</h4>
    <ul>
      <li>Gọi điện/nhắn tin cập nhật tình hình học tập định kỳ</li>
      <li>Gửi feedback của GV cho PH qua Compass</li>
      <li>Xử lý khiếu nại, phản hồi từ PH</li>
      <li>Chăm sóc HV chờ lớp, HV bảo lưu</li>
    </ul>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">3</div>
  <div class="insight-body">
    <h4>🏢 Vận hành trung tâm</h4>
    <ul>
      <li><strong>Tiêu chuẩn cứng:</strong> Đồng phục, bảng tên, lễ tân, phòng học, toilet</li>
      <li><strong>Tiêu chuẩn mềm:</strong> Đứng dậy chào, hướng dẫn, mời nước</li>
      <li>Kiểm tra cơ sở vật chất: TV, HDMI, bàn ghế, điều hòa 24-28°C</li>
      <li>Trực lễ tân, hỗ trợ khách đến trung tâm</li>
    </ul>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">4</div>
  <div class="insight-body">
    <h4>📈 Hỗ trợ Retention</h4>
    <ul>
      <li><strong>Re-enroll:</strong> Tư vấn PH đăng ký khóa tiếp theo khi kết thúc khóa</li>
      <li><strong>Upsale lộ trình:</strong> Giới thiệu combo 12T/24T, lộ trình dài hạn</li>
      <li>Giảm tỷ lệ nghỉ ngang (dropout), tăng retention rate</li>
      <li>Xây dựng mối quan hệ lâu dài với PH → giới thiệu người mới</li>
    </ul>
  </div>
</div>`,
            quiz: {
              id: "quiz_csk12_d1_s2",
              title: "Quiz: Vai trò CS",
              questions: [
                {
                  q: "KPI chính của CS K12 là gì?",
                  options: ["Doanh thu bán hàng", "Retention, satisfaction, re-enroll", "Số lượng lead mới", "Số cuộc gọi tư vấn"],
                  correct: 1,
                  explanation: "CS tập trung vào giữ chân học viên (retention), sự hài lòng (satisfaction) và tái đăng ký (re-enroll)."
                },
                {
                  q: "CS khác Sale ở điểm nào quan trọng nhất?",
                  options: ["CS làm giờ hành chính, Sale làm ca", "Sale chốt đơn, CS giữ chân & phát triển học viên", "CS lương cao hơn Sale", "Sale gặp PH, CS chỉ gặp HV"],
                  correct: 1,
                  explanation: "Sale tập trung tuyển sinh (trước đăng ký), CS tập trung chăm sóc và giữ chân (sau đăng ký, suốt khóa học)."
                },
                {
                  q: "Khi học viên nghỉ học, CS cần làm gì đầu tiên?",
                  options: ["Báo cáo cho CM", "Liên hệ PH để sắp xếp học bù (makeup)", "Xóa tên khỏi danh sách", "Gửi email cảnh báo"],
                  correct: 1,
                  explanation: "CS cần chủ động liên hệ phụ huynh để sắp xếp lịch học bù, đảm bảo HV không bị mất bài."
                },
                {
                  q: "Tiêu chuẩn nhiệt độ điều hòa tại trung tâm MindX là bao nhiêu?",
                  options: ["20-22°C", "22-24°C", "24-28°C", "28-30°C"],
                  correct: 2,
                  explanation: "Theo tiêu chuẩn vận hành, điều hòa tại trung tâm phải đặt ở mức 24-28°C."
                },
                {
                  q: "Checkpoint nào CS cần theo dõi trong khóa học 14 buổi?",
                  options: ["Chỉ CP1", "CP1 và CP2", "CP1, CP2 và nghiệm thu sản phẩm", "Không có checkpoint"],
                  correct: 2,
                  explanation: "CS cần theo dõi CP1 (sau buổi 4-5), CP2 (sau buổi 8) và nghiệm thu sản phẩm cuối khóa."
                }
              ]
            }
          },
          {
            id: "csk12_d1_s3",
            title: "6 Tư duy dịch vụ của CS MindX",
            icon: "🧠",
            content: `<h3>6 Tư duy dịch vụ cốt lõi của CS MindX</h3>
<p>Mỗi CS tại MindX cần thấm nhuần 6 tư duy dịch vụ sau đây — đây không chỉ là "nguyên tắc" mà là <strong>kim chỉ nam</strong> trong mọi hành động hàng ngày.</p>

<div class="mindset-section">
  <div class="mindset-card growth">
    <div class="mindset-icon">❤️</div>
    <h4>1. Lấy học viên & phụ huynh làm trung tâm</h4>
    <p>Luôn ưu tiên lợi ích, cảm xúc và nhu cầu của học viên/phụ huynh trong mọi quyết định và hành động. Hiểu rằng mỗi lời nói, hành động đều ảnh hưởng đến trải nghiệm học tập của HV.</p>
    <div class="quote-block"><strong>Ví dụ thực tế:</strong> Khi lớp bị dời lịch, CS không chỉ thông báo mà còn chủ động gọi từng PH giải thích lý do, đề xuất lịch thay thế phù hợp, và xin lỗi về sự bất tiện. MindX tổ chức họp PH hàng tháng để lắng nghe feedback, tổ chức Xskill events hàng tháng cho HV.</div>
  </div>

  <div class="mindset-card customer">
    <div class="mindset-icon">🤝</div>
    <h4>2. Tư duy đồng hành</h4>
    <p>Không chỉ "hỗ trợ" mà là <strong>"đồng hành"</strong> cùng học viên trên hành trình học tập. CS là người bạn đáng tin cậy, luôn ở bên khi HV gặp khó khăn.</p>
    <div class="quote-block"><strong>Ví dụ thực tế:</strong> Khi HV nói "Khó quá, con không muốn học nữa", CS gọi PH: "Em hiểu bé đang gặp khó khăn. Em sẽ nhờ GV hỗ trợ riêng cho bé, và khuyến khích bé thử thêm 1-2 buổi nữa. Thông thường sau giai đoạn đầu, các bé sẽ bắt nhịp nhanh hơn..."</div>
  </div>

  <div class="mindset-card dna">
    <div class="mindset-icon">🔍</div>
    <h4>3. Tư duy chủ động & giải pháp</h4>
    <p>Không đổ lỗi, luôn tìm cách giải quyết trong phạm vi được phép. Dự đoán vấn đề trước khi xảy ra, không chờ đợi sự cố phát sinh.</p>
    <div class="quote-block"><strong>Ví dụ thực tế:</strong> CS phát hiện lớp sắp lên level nhưng không đủ sĩ số, chủ động gọi tất cả PH đề xuất giải pháp: chờ thêm HV HOẶC chuyển sang khung giờ/lớp khác phù hợp. Không đợi đến khi PH hỏi mới xử lý.</div>
  </div>

  <div class="mindset-card growth">
    <div class="mindset-icon">📈</div>
    <h4>4. Tư duy cải tiến</h4>
    <p>Mỗi feedback là cơ hội để nâng cấp chất lượng dịch vụ. Luôn sẵn sàng học hỏi và điều chỉnh để đáp ứng tốt hơn nhu cầu khách hàng.</p>
    <div class="quote-block"><strong>Ví dụ thực tế:</strong> PH phản ánh "không biết con học đến đâu rồi". CS nhận feedback, đề xuất với CSL tạo template báo cáo tuần gửi PH qua Zalo, kèm ảnh/video trên lớp — biến điểm yếu thành điểm mạnh.</div>
  </div>

  <div class="mindset-card customer">
    <div class="mindset-icon">✨</div>
    <h4>5. Tư duy "Hơn cả mong đợi"</h4>
    <p>Luôn tạo trải nghiệm vượt kỳ vọng của PH/HV. Đôi khi chỉ một lời chào đúng lúc, một tin nhắn khen bé đúng thời điểm cũng tạo ấn tượng sâu sắc.</p>
    <div class="quote-block"><strong>Ví dụ thực tế:</strong> Sau Demo Day, CS gửi riêng cho từng PH video sản phẩm của con kèm lời nhận xét cá nhân: "Bé Minh tiến bộ rất nhiều, đặc biệt phần thiết kế nhân vật rất sáng tạo. Anh/chị xem video nhé!" — PH cảm thấy con được quan tâm đặc biệt.</div>
  </div>

  <div class="mindset-card dna">
    <div class="mindset-icon">🎓</div>
    <h4>6. Gắn kết với sứ mệnh giáo dục</h4>
    <p>Hiểu rằng sản phẩm của MindX không chỉ là dịch vụ — mà là môi trường giáo dục nuôi dưỡng tương lai. Xây dựng môi trường giáo dục minh bạch, lành mạnh, làm gương cho học viên.</p>
    <div class="quote-block"><strong>Ví dụ thực tế:</strong> CS luôn nhắc nhở bản thân: "Mỗi lớp học mình quản lý tốt = 15-20 em nhỏ được học tập trong môi trường tốt nhất. Mình không chỉ làm dịch vụ, mình đang góp phần thay đổi tương lai các em."</div>
  </div>
</div>`,
            quiz: {
              id: "quiz_csk12_d1_s3",
              title: "Quiz: 6 Tư duy dịch vụ",
              questions: [
                {
                  q: "Tư duy 'Đồng hành' khác với 'Hỗ trợ' ở điểm nào?",
                  options: ["Đồng hành chỉ làm khi được yêu cầu", "Đồng hành là ở bên suốt hành trình, không chỉ xử lý sự cố", "Đồng hành nghĩa là làm thay cho HV", "Không có sự khác biệt"],
                  correct: 1,
                  explanation: "Tư duy đồng hành nghĩa là CS luôn ở bên HV trên toàn bộ hành trình học tập, không chỉ xuất hiện khi có vấn đề."
                },
                {
                  q: "Khi HV nói 'khó quá, không muốn học nữa', CS nên làm gì?",
                  options: ["Đồng ý cho HV nghỉ", "Gọi PH, nhờ GV hỗ trợ riêng, khuyến khích thử thêm 1-2 buổi", "Phê bình HV không cố gắng", "Chuyển HV sang lớp dễ hơn ngay lập tức"],
                  correct: 1,
                  explanation: "CS cần đồng hành: gọi PH chia sẻ, nhờ GV hỗ trợ riêng, khuyến khích HV kiên nhẫn thử thêm."
                },
                {
                  q: "Tư duy 'Chủ động & Giải pháp' yêu cầu CS phải?",
                  options: ["Chờ PH phàn nàn rồi mới xử lý", "Dự đoán vấn đề trước khi xảy ra và tìm giải pháp", "Đổ lỗi cho bộ phận khác", "Chỉ xử lý trong giờ làm việc"],
                  correct: 1,
                  explanation: "CS cần chủ động dự đoán vấn đề, không đổ lỗi, luôn tìm giải pháp trong phạm vi được phép."
                },
                {
                  q: "Khi PH phản ánh 'không biết con học đến đâu', CS nên áp dụng tư duy nào?",
                  options: ["Tư duy chủ động", "Tư duy cải tiến — biến feedback thành cơ hội nâng cấp", "Tư duy gắn kết sứ mệnh", "Tư duy đồng hành"],
                  correct: 1,
                  explanation: "Đây là cơ hội cải tiến: CS đề xuất tạo template báo cáo định kỳ, biến điểm yếu thành điểm mạnh."
                },
                {
                  q: "Tư duy 'Hơn cả mong đợi' được thể hiện qua?",
                  options: ["Chỉ làm đúng quy trình", "Tạo trải nghiệm vượt kỳ vọng, như gửi video sản phẩm kèm nhận xét cá nhân", "Giảm giá cho PH", "Tăng số buổi học miễn phí"],
                  correct: 1,
                  explanation: "Vượt kỳ vọng qua những hành động nhỏ nhưng có tâm: gửi video riêng, nhận xét cá nhân, lời khen đúng thời điểm."
                },
                {
                  q: "MindX tổ chức hoạt động nào để thể hiện tư duy 'Lấy HV làm trung tâm'?",
                  options: ["Họp nội bộ hàng tháng", "Họp PH hàng tháng + Xskill events cho HV", "Giảm giá khuyến mãi", "Tuyển thêm nhân sự"],
                  correct: 1,
                  explanation: "MindX tổ chức họp PH hàng tháng để lắng nghe feedback và Xskill events hàng tháng cho HV, thể hiện HV là trung tâm."
                }
              ]
            }
          }
,
{
            id: "csk12_d1_s4",
            title: "Thái độ dịch vụ khách hàng",
            icon: "💎",
            content: `<h3>4 Thái độ dịch vụ cốt lõi của CS MindX</h3>
<p>Bên cạnh <strong>6 tư duy</strong>, CS MindX cần thể hiện <strong>4 thái độ dịch vụ</strong> trong mọi tương tác với PH/HV.</p>

<div class="mindset-section">
  <div class="mindset-card growth">
    <div class="mindset-icon">🙏</div>
    <h4>1. Tôn trọng — Lễ phép — Kiên nhẫn — Không phán xét</h4>
    <p>Dù khách hàng khó tính hay sai, vẫn giữ thái độ nhã nhặn. Luôn thân thiện, lễ phép trong mọi tương tác.</p>
    <table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:0.9em;">
      <tr style="background:#FFF5F5;"><th style="padding:8px;text-align:left;border:1px solid #eee;">Biểu hiện</th><th style="padding:8px;text-align:left;border:1px solid #eee;">Mô tả cụ thể</th></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Xưng hô lễ phép</td><td style="padding:8px;border:1px solid #eee;">Dùng "anh/chị", "quý phụ huynh" — tránh "bác", "nhà mình", "bên mình"</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Lắng nghe không ngắt lời</td><td style="padding:8px;border:1px solid #eee;">Khi PH đang nói, không chen ngang, không tranh luận</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Cảm ơn và xin lỗi đúng lúc</td><td style="padding:8px;border:1px solid #eee;">"Em xin lỗi vì sự bất tiện" — dù lỗi không hẳn từ mình</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Không gạt đi cảm xúc KH</td><td style="padding:8px;border:1px solid #eee;">Không nói "chuyện này nhỏ thôi", "chị lo hơi quá" — ghi nhận nghiêm túc</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Giữ giọng nhẹ nhàng, ổn định</td><td style="padding:8px;border:1px solid #eee;">Không tỏ thái độ khó chịu, không nói gắt dù KH căng thẳng</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Không quy chụp/trách móc</td><td style="padding:8px;border:1px solid #eee;">Không nói: "Do anh chị quên báo nghỉ nên…", "Anh/chị không cập nhật app à?"</td></tr>
    </table>
    <div class="quote-block"><strong>Tình huống:</strong> PH phản ánh GV chưa sát sao.<br>❌ Sai: "Em nghĩ cô giáo vẫn theo sát rồi mà ạ…"<br>✅ Đúng: "Dạ em rất cảm ơn anh/chị đã góp ý. Em xin phép ghi nhận và sẽ trao đổi ngay với giáo viên để có điều chỉnh phù hợp, đảm bảo bé được hỗ trợ tốt nhất ạ."</div>
  </div>

  <div class="mindset-card customer">
    <div class="mindset-icon">❤️</div>
    <h4>2. Chân thành — Lắng nghe — Nhiệt tình — Tận tâm</h4>
    <p>Ghi nhận cảm xúc thật sự của PH, không phản ứng máy móc. Sẵn sàng hỗ trợ nhanh, theo sát đến khi PH hài lòng.</p>
    <table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:0.9em;">
      <tr style="background:#FFF5F5;"><th style="padding:8px;text-align:left;border:1px solid #eee;">Thái độ</th><th style="padding:8px;text-align:left;border:1px solid #eee;">Biểu hiện</th></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Chân thành</td><td style="padding:8px;border:1px solid #eee;">"Em thật sự cảm ơn anh/chị đã chia sẻ để MindX cải thiện tốt hơn ạ." — Thừa nhận sai sót, không đổ lỗi</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Lắng nghe</td><td style="padding:8px;border:1px solid #eee;">Phản hồi bằng ngôn ngữ đồng cảm: "Dạ em hiểu…", "Em ghi nhận ạ…" — không phản bác ngay</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Nhiệt tình</td><td style="padding:8px;border:1px solid #eee;">Chủ động đề xuất giải pháp, không chờ KH hỏi thêm</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Tận tâm</td><td style="padding:8px;border:1px solid #eee;">Theo sát vấn đề đến cùng — "Em sẽ cập nhật lại cho anh/chị trước 5h chiều nay ạ" → và THỰC SỰ làm</td></tr>
    </table>
    <div class="quote-block"><strong>Tình huống:</strong> PH phàn nàn con học chậm hơn các bạn.<br>❌ Sai: "Dạ mỗi bé tiếp thu khác nhau ạ" (máy móc)<br>✅ Đúng: "Dạ em hiểu anh/chị lo lắng. Em sẽ trao đổi riêng với GV về tình hình bé, xin feedback chi tiết và báo lại anh/chị trong ngày mai. Nếu cần, em sẽ đề xuất GV hỗ trợ riêng cho bé thêm ạ."</div>
  </div>

  <div class="mindset-card dna">
    <div class="mindset-icon">⚡</div>
    <h4>3. Chủ động — Linh hoạt — Theo sát vấn đề</h4>
    <p>Không chờ khách hàng nhắc — chủ động cập nhật, linh hoạt đề xuất giải pháp phù hợp.</p>
    <table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:0.9em;">
      <tr style="background:#FFF5F5;"><th style="padding:8px;text-align:left;border:1px solid #eee;">Thái độ</th><th style="padding:8px;text-align:left;border:1px solid #eee;">Biểu hiện</th></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Chủ động</td><td style="padding:8px;border:1px solid #eee;">Gọi thông báo trước khi PH hỏi, nhắc lịch học bù, cập nhật tình hình lớp</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Linh hoạt</td><td style="padding:8px;border:1px solid #eee;">Đưa ra nhiều phương án cho PH chọn, không cứng nhắc "chỉ có 1 cách"</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Theo sát</td><td style="padding:8px;border:1px solid #eee;">Hẹn thời gian cụ thể → phản hồi đúng hẹn → follow-up cho đến khi giải quyết xong</td></tr>
    </table>
    <div class="quote-block"><strong>Tình huống:</strong> Lớp bị dời lịch gấp.<br>❌ Sai: Chờ PH hỏi rồi mới thông báo<br>✅ Đúng: CS chủ động gọi/nhắn TỪNG PH trước 24h: "Dạ anh/chị, do GV có việc đột xuất, lớp tuần này sẽ chuyển sang [lịch mới]. Em rất xin lỗi về sự bất tiện. Nếu lịch này không phù hợp, em sẽ sắp xếp học bù cho bé ạ."</div>
  </div>

  <div class="mindset-card growth">
    <div class="mindset-icon">🌟</div>
    <h4>4. Truyền cảm hứng tích cực</h4>
    <p>Dùng ngôn ngữ tích cực, hướng giải pháp. Mỗi tương tác đều để lại ấn tượng tốt.</p>
    <table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:0.9em;">
      <tr style="background:#FFF5F5;"><th style="padding:8px;text-align:left;border:1px solid #eee;">Thay vì nói…</th><th style="padding:8px;text-align:left;border:1px solid #eee;">Hãy nói…</th></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">"Em không biết"</td><td style="padding:8px;border:1px solid #eee;">"Em sẽ kiểm tra và phản hồi anh/chị trong [thời gian] ạ"</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">"Bên em không làm được"</td><td style="padding:8px;border:1px solid #eee;">"Em xin phép tìm phương án khác phù hợp hơn cho anh/chị ạ"</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">"Anh/chị phải…"</td><td style="padding:8px;border:1px solid #eee;">"Em gợi ý anh/chị có thể…"</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">"Đó không phải lỗi của em"</td><td style="padding:8px;border:1px solid #eee;">"Em hiểu anh/chị gặp bất tiện, em sẽ hỗ trợ xử lý ngay ạ"</td></tr>
    </table>
    <div class="quote-block"><strong>Nguyên tắc:</strong> Luôn kết thúc cuộc gọi/tin nhắn bằng câu tích cực: "Cảm ơn anh/chị đã tin tưởng MindX. Em luôn sẵn sàng hỗ trợ ạ!"</div>
  </div>
</div>`,
            quiz: {
              id: "quiz_csk12_d1_s4",
              title: "Quiz: Thái độ dịch vụ",
              questions: [
                {
                  q: "Khi PH phản ánh GV chưa sát sao, cách phản hồi đúng là gì?",
                  options: ["'Em nghĩ cô giáo vẫn theo sát rồi mà ạ'", "'Dạ em ghi nhận và sẽ trao đổi ngay với GV để điều chỉnh ạ'", "'Để em chuyển cho quản lý xử lý ạ'", "'Cô giáo rất tốt, chắc anh/chị hiểu nhầm'"],
                  correct: 1,
                  explanation: "CS cần ghi nhận phản hồi, cảm ơn PH, và cam kết hành động cụ thể — không phản bác hay đổ lỗi."
                },
                {
                  q: "Cách xưng hô nào phù hợp với PH tại MindX?",
                  options: ["'Bác ơi', 'nhà mình'", "'Anh/chị', 'quý phụ huynh'", "'Bạn ơi', 'bên mình'", "Tùy sở thích CS"],
                  correct: 1,
                  explanation: "Luôn dùng 'anh/chị', 'quý phụ huynh' — tránh suồng sã như 'bác', 'nhà mình', 'bên mình'."
                },
                {
                  q: "Khi không biết câu trả lời, CS nên nói gì?",
                  options: ["'Em không biết ạ'", "'Anh/chị hỏi quản lý giúp em'", "'Em sẽ kiểm tra và phản hồi anh/chị trong [thời gian cụ thể] ạ'", "'Chắc là không được đâu ạ'"],
                  correct: 2,
                  explanation: "Luôn dùng ngôn ngữ tích cực, hướng giải pháp — cam kết thời gian phản hồi cụ thể."
                },
                {
                  q: "Thái độ 'Tận tâm' thể hiện qua hành động nào?",
                  options: ["Trả lời tin nhắn nhanh", "Theo sát vấn đề đến cùng, phản hồi đúng hẹn", "Chuyển PH sang bộ phận khác xử lý", "Ghi nhận và chờ chỉ đạo từ quản lý"],
                  correct: 1,
                  explanation: "Tận tâm = theo sát đến cùng. Hẹn thời gian cụ thể và THỰC SỰ phản hồi đúng hẹn."
                },
                {
                  q: "Khi PH nói 'con học chậm hơn các bạn', CS nên phản hồi thế nào?",
                  options: ["'Mỗi bé tiếp thu khác nhau ạ' (máy móc)", "'Em hiểu lo lắng của anh/chị. Em sẽ trao đổi với GV và báo lại chi tiết'", "'Bé cần cố gắng hơn ạ'", "'Đó là bình thường, anh/chị đừng lo'"],
                  correct: 1,
                  explanation: "CS cần đồng cảm, cam kết hành động cụ thể (trao đổi GV, báo lại), không trả lời máy móc."
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
            id: "csk12_d2_s1",
            title: "Lộ trình Coding (5 năm)",
            icon: "💻",
            content: `<h3>Lộ trình Coding — 5 năm kiến tạo tương lai</h3>
<p>CS cần nắm vững lộ trình Coding để trả lời PH khi hỏi về tiến độ, mục tiêu, và output từng năm.</p>

<div class="product-card">
  <div class="product-header year1"><span class="product-year">NĂM 1</span><h4>Scratch — App Creator (10+)</h4></div>
  <div class="product-body">
    <p><strong>Mục tiêu:</strong> Tư duy logic cơ bản qua lập trình kéo thả block</p>
    <p><strong>Thời lượng:</strong> 12 tháng (48 buổi) | <strong>Output:</strong> 10+ project game/animation</p>
    <p><strong>Tools:</strong> Scratch 3.0</p>
    <p><strong>CS cần biết:</strong> Đây là bước khởi đầu, trẻ 10+ không cần biết code. PH thường lo con nhỏ không theo được — hãy trấn an rằng Scratch là kéo thả, rất trực quan.</p>
  </div>
</div>

<div class="product-card">
  <div class="product-header year2"><span class="product-year">NĂM 2</span><h4>Game Creator (11+)</h4></div>
  <div class="product-body">
    <p><strong>Mục tiêu:</strong> Chuyển từ người chơi game sang người làm game chuyên nghiệp</p>
    <p><strong>Thời lượng:</strong> 3 HP × 14 buổi | <strong>Output:</strong> Game 2D hoàn chỉnh</p>
    <p><strong>Tools:</strong> GameMaker Studio 2.0</p>
    <p><strong>CS cần biết:</strong> AI4Learn là khóa đệm chiến lược giữa các giai đoạn. Không bán lẻ — luôn nằm trong gói 24 tháng trở lên. Nhấn mạnh giá trị: con học AI để học tốt hơn trên trường.</p>
  </div>
</div>

<div class="product-card">
  <div class="product-header year3"><span class="product-year">NĂM 3</span><h4>App Producer (12+)</h4></div>
  <div class="product-body">
    <p><strong>Mục tiêu:</strong> Phát triển ứng dụng hoàn chỉnh từ ý tưởng → thiết kế → publish</p>
    <p><strong>Thời lượng:</strong> 12 tháng (48 buổi) | <strong>Output:</strong> 3-5 app cài được trên điện thoại</p>
    <p><strong>CS cần biết:</strong> PH rất ấn tượng khi con tạo app thật trên điện thoại. Đây là điểm highlight khi tư vấn re-enroll.</p>
  </div>
</div>

<div class="product-card">
  <div class="product-header year4"><span class="product-year">NĂM 4</span><h4>Web Developer (14+)</h4></div>
  <div class="product-body">
    <p><strong>Mục tiêu:</strong> Xây dựng website chuyên nghiệp với JavaScript</p>
    <p><strong>Thời lượng:</strong> 12 tháng (48 buổi) | <strong>Output:</strong> 5+ website, portfolio online</p>
    <p><strong>CS cần biết:</strong> Web dev là kỹ năng có nhu cầu cao nhất. HV 14-15 tuổi có thể freelance kiếm tiền.</p>
  </div>
</div>

<div class="product-card">
  <div class="product-header year5"><span class="product-year">NĂM 5</span><h4>Computer Scientist (15+) — AI & Data Science</h4></div>
  <div class="product-body">
    <p><strong>Mục tiêu:</strong> Chuyên sâu AI, Machine Learning, Data Science</p>
    <p><strong>Thời lượng:</strong> 12 tháng (48 buổi) | <strong>Output:</strong> AI project, Data analysis, Research paper</p>
    <p><strong>CS cần biết:</strong> Chuẩn bị portfolio cho du học/việc làm. Liên kết với chương trình Bảo trợ du học MindX.</p>
  </div>
</div>

<h4>Điểm mấu chốt khi PH hỏi về Coding:</h4>
<div class="insight-card">
  <div class="insight-number">💬</div>
  <div class="insight-body">
    <ul>
      <li><strong>"Con mới 10 tuổi, có sớm quá không?"</strong> → Scratch rất phù hợp, kéo thả trực quan, không cần biết đọc code</li>
      <li><strong>"Học lâu vậy có cần thiết không?"</strong> → 5 năm = nền tảng vững chắc, mỗi năm một cấp độ mới, không lặp lại</li>
      <li><strong>"Học xong con làm được gì?"</strong> → Từ game, app, website đến AI project — có portfolio ấn tượng</li>
    </ul>
  </div>
</div>`,
            quiz: {
              id: "quiz_csk12_d2_s1",
              title: "Quiz: Lộ trình Coding",
              questions: [
                { q: "Năm 1 của lộ trình Coding dành cho trẻ từ bao nhiêu tuổi?", options: ["5+", "6+", "8+", "10+"], correct: 3, explanation: "Scratch Creator dành cho trẻ từ 10 tuổi — bắt đầu với lập trình kéo thả." },
                { q: "Ngôn ngữ Python được giới thiệu ở năm thứ mấy?", options: ["Năm 1", "Năm 2", "Năm 3", "Năm 4"], correct: 2, explanation: "Python được dạy từ Năm 3 — App Producer. Năm 2 (Game Creator) dùng GameMaker Studio 2.0." },
                { q: "Output nổi bật nhất của khóa App Producer là gì?", options: ["Game trên máy tính", "Ứng dụng cài được trên điện thoại", "Website portfolio", "AI project"], correct: 1, explanation: "App Producer tạo 3-5 app cài được trên điện thoại thật — rất ấn tượng với PH." },
                { q: "AI4Learn gồm bao nhiêu level?", options: ["1 level", "2 levels", "3 levels", "4 levels"], correct: 1, explanation: "AI4Learn gồm 2 levels × 6 buổi = 24h. Level 1: Sáng tạo AI. Level 2: Chatbot học tập." },
                { q: "Khi PH hỏi 'Con 8 tuổi có sớm không?', CS nên trả lời?", options: ["Đúng, nên chờ 10 tuổi", "Scratch rất phù hợp, kéo thả trực quan, không cần biết code", "Nên học Art trước", "Để con tự quyết định"], correct: 1, explanation: "Scratch Creator thiết kế riêng cho trẻ 10+, kéo thả block trực quan, không cần biết đọc code." }
              ]
            }
          },
          {
            id: "csk12_d2_s2",
            title: "Lộ trình Art & Design (7 năm)",
            icon: "🎨",
            content: `<h3>Lộ trình Art & Design — 7 năm từ nhí họa sĩ đến designer chuyên nghiệp</h3>
<p>CS cần hiểu rõ sự khác biệt giữa Art và Coding để tư vấn đúng khi PH hỏi "nên cho con học gì".</p>

<div class="product-card">
  <div class="product-header art0"><span class="product-year">NĂM 0</span><h4>Little Artist (4+)</h4></div>
  <div class="product-body">
    <p><strong>Mục tiêu:</strong> Khơi dậy sáng tạo qua vẽ, tô màu, hoạt động nghệ thuật vui nhộn</p>
    <p><strong>Đối tượng:</strong> Trẻ 4-5 tuổi</p>
    <p><strong>CS cần biết:</strong> Đây là lộ trình sớm nhất (4+). PH có con nhỏ có thể bắt đầu từ đây.</p>
  </div>
</div>

<div class="product-card">
  <div class="product-header art1"><span class="product-year">NĂM 1</span><h4>Digital Art Foundations (7+)</h4></div>
  <div class="product-body">
    <p><strong>Mục tiêu:</strong> Nền tảng mỹ thuật: phối màu, bố cục, vẽ nhân vật</p>
    <p><strong>CS cần biết:</strong> Trẻ bắt đầu có tác phẩm đầu tiên, tự tin thể hiện bản thân.</p>
  </div>
</div>

<div class="product-card">
  <div class="product-header art2"><span class="product-year">NĂM 2</span><h4>Visual Thinking (9+)</h4></div>
  <div class="product-body">
    <p><strong>Mục tiêu:</strong> Vẽ digital, illustration cơ bản, sử dụng tablet</p>
    <p><strong>CS cần biết:</strong> Bước chuyển từ vẽ tay sang digital art. Làm quen công cụ thiết kế chuyên nghiệp.</p>
  </div>
</div>

<div class="product-card">
  <div class="product-header art3"><span class="product-year">NĂM 3</span><h4>Game Art (11+)</h4></div>
  <div class="product-body">
    <p><strong>Mục tiêu:</strong> Thiết kế nhân vật game, background, UI cho game</p>
    <p><strong>CS cần biết:</strong> Kết hợp nghệ thuật + công nghệ. HV thấy tác phẩm "sống" trong game.</p>
  </div>
</div>

<div class="product-card">
  <div class="product-header art4"><span class="product-year">NĂM 4</span><h4>Character & Mascot Design (12+)</h4></div>
  <div class="product-body"><p><strong>Mục tiêu:</strong> Concept art, character sheet, storytelling qua hình ảnh</p></div>
</div>

<div class="product-card">
  <div class="product-header art5"><span class="product-year">NĂM 5</span><h4>Visual Communication (13+)</h4></div>
  <div class="product-body"><p><strong>Mục tiêu:</strong> Thiết kế đồ họa chuyên nghiệp: logo, poster, social media</p></div>
</div>

<div class="product-card">
  <div class="product-header art6"><span class="product-year">NĂM 6</span><h4>Motion & Video (14+)</h4></div>
  <div class="product-body"><p><strong>Mục tiêu:</strong> Thiết kế đa phương tiện: video, motion graphics, portfolio chuyên nghiệp</p></div>
</div>

<h4>Art vs Coding — Tư vấn thế nào?</h4>
<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:0.85rem;">
  <thead><tr style="background:#F7FAFC;"><th style="padding:10px;border:1px solid #E2E8F0;">Tiêu chí</th><th style="padding:10px;border:1px solid #E2E8F0;">Coding</th><th style="padding:10px;border:1px solid #E2E8F0;">Art & Design</th></tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">Tuổi bắt đầu</td><td style="padding:8px;border:1px solid #E2E8F0;">10+</td><td style="padding:8px;border:1px solid #E2E8F0;">4+</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">Tính cách phù hợp</td><td style="padding:8px;border:1px solid #E2E8F0;">Logic, giải quyết vấn đề</td><td style="padding:8px;border:1px solid #E2E8F0;">Sáng tạo, thẩm mỹ</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">Career path</td><td style="padding:8px;border:1px solid #E2E8F0;">Developer, AI Engineer, Data Scientist</td><td style="padding:8px;border:1px solid #E2E8F0;">Designer, Illustrator, Art Director</td></tr>
  </tbody>
</table>`,
            quiz: {
              id: "quiz_csk12_d2_s2",
              title: "Quiz: Lộ trình Art & Design",
              questions: [
                { q: "Lộ trình Art bắt đầu từ bao nhiêu tuổi?", options: ["6+", "5+", "4+", "8+"], correct: 2, explanation: "Little Artist dành cho trẻ từ 4 tuổi — sớm nhất trong các lộ trình MindX." },
                { q: "Lộ trình Art & Design kéo dài bao nhiêu năm?", options: ["4 năm", "5 năm", "6 năm", "7 năm"], correct: 3, explanation: "Lộ trình Art & Design gồm 7 năm: từ Little Artist (4+) đến Motion & Video (14+)." },
                { q: "Khóa nào bắt đầu chuyển từ vẽ tay sang digital art?", options: ["Digital Art Foundations", "Visual Thinking", "Game Art", "Character & Mascot Design"], correct: 1, explanation: "Visual Thinking (Năm 2, 9+) là bước chuyển từ vẽ tay sang vẽ digital, sử dụng tablet." },
                { q: "Art phù hợp với tính cách nào hơn so với Coding?", options: ["Logic, giải quyết vấn đề", "Sáng tạo, thẩm mỹ", "Kỷ luật, chính xác", "Giao tiếp, ngoại giao"], correct: 1, explanation: "Art phù hợp với trẻ thiên về sáng tạo, thẩm mỹ; Coding phù hợp với tư duy logic." },
                { q: "Khóa Game Art (Năm 3) có gì đặc biệt?", options: ["Học vẽ truyền thống", "Kết hợp nghệ thuật + công nghệ, tạo nhân vật game", "Học chụp ảnh", "Học làm phim"], correct: 1, explanation: "Game Art kết hợp nghệ thuật và công nghệ — HV thiết kế nhân vật, background, UI cho game." }
              ]
            }
          },
          {
            id: "csk12_d2_s3",
            title: "Lộ trình Robotics (4 năm)",
            icon: "🤖",
            content: `<h3>Lộ trình Robotics — 4 năm từ Robot nhí đến Sáng tạo Robot</h3>

<div class="product-card">
  <div class="product-header year1"><span class="product-year">NĂM 0</span><h4>Kỹ sư Robot nhí (4+)</h4></div>
  <div class="product-body">
    <p><strong>Mục tiêu:</strong> Làm quen với LEGO, xây dựng cơ bản, tư duy không gian</p>
    <p><strong>Thiết bị:</strong> LEGO Education</p>
    <p><strong>CS cần biết:</strong> Phù hợp trẻ hiếu động, thích lắp ráp. PH thường hỏi "có bẩn không" — thiết bị LEGO rất an toàn.</p>
  </div>
</div>

<div class="product-card">
  <div class="product-header year2"><span class="product-year">NĂM 1</span><h4>Nhập môn Robotics (6+)</h4></div>
  <div class="product-body">
    <p><strong>Mục tiêu:</strong> Lắp ráp robot cơ bản, lập trình đơn giản cho robot</p>
    <p><strong>Thiết bị:</strong> LEGO Spike Essential</p>
  </div>
</div>

<div class="product-card">
  <div class="product-header year3"><span class="product-year">NĂM 2</span><h4>Truy tìm bí ẩn Robot (8+)</h4></div>
  <div class="product-body">
    <p><strong>Mục tiêu:</strong> Robot nâng cao, lập trình sensor, cơ cấu truyền động</p>
    <p><strong>Thiết bị:</strong> LEGO Spike Prime / VEX IQ</p>
    <p><strong>CS cần biết:</strong> Có thể tham gia thi đấu cấp trường/thành phố.</p>
  </div>
</div>

<div class="product-card">
  <div class="product-header year4"><span class="product-year">NĂM 3</span><h4>Sáng tạo Robot (10+)</h4></div>
  <div class="product-body">
    <p><strong>Mục tiêu:</strong> Thiết kế và lập trình robot phức tạp, thi đấu quốc tế</p>
    <p><strong>Thiết bị:</strong> VEX EXP / VEX V5</p>
    <p><strong>CS cần biết:</strong> HV có cơ hội thi đấu quốc tế (VEX Robotics Competition, FIRST LEGO League). Đây là điểm bán rất mạnh khi PH muốn con có hồ sơ du học.</p>
  </div>
</div>

<h4>Điểm mấu chốt về Robotics:</h4>
<div class="insight-card">
  <div class="insight-number">🔧</div>
  <div class="insight-body">
    <ul>
      <li><strong>Thiết bị:</strong> LEGO Education (4-8 tuổi), LEGO Spike (6-10), VEX IQ/EXP (8-14)</li>
      <li><strong>Thi đấu quốc tế:</strong> VEX Robotics Competition, FIRST LEGO League — giải thưởng hỗ trợ du học</li>
      <li><strong>Khác biệt:</strong> Robotics kết hợp cả lập trình + kỹ thuật cơ khí + tư duy thiết kế</li>
      <li><strong>PH hay hỏi:</strong> "Có cần mua thiết bị riêng không?" → Không, MindX cung cấp đầy đủ thiết bị tại lớp</li>
    </ul>
  </div>
</div>`,
            quiz: {
              id: "quiz_csk12_d2_s3",
              title: "Quiz: Lộ trình Robotics",
              questions: [
                { q: "Lộ trình Robotics bắt đầu từ bao nhiêu tuổi?", options: ["6+", "5+", "4+", "8+"], correct: 2, explanation: "Kỹ sư Robot nhí dành cho trẻ từ 4 tuổi với LEGO Education." },
                { q: "Thiết bị nào được sử dụng cho Pre-Robotics (6+)?", options: ["VEX IQ", "LEGO Spike Essential", "Arduino", "Raspberry Pi"], correct: 1, explanation: "Pre-Robotics sử dụng LEGO Spike Essential — phù hợp trẻ 6+." },
                { q: "HV Robotics có thể tham gia cuộc thi quốc tế nào?", options: ["Google Code Jam", "VEX Robotics Competition, FIRST LEGO League", "Hackathon online", "Math Olympiad"], correct: 1, explanation: "VEX Robotics Competition và FIRST LEGO League là các cuộc thi quốc tế dành cho HV Robotics." },
                { q: "Khi PH hỏi 'có cần mua thiết bị riêng không?', CS trả lời?", options: ["Có, PH cần mua LEGO", "Không, MindX cung cấp đầy đủ thiết bị tại lớp", "Chỉ mua khi lên level cao", "Tùy khóa học"], correct: 1, explanation: "MindX cung cấp đầy đủ thiết bị LEGO/VEX tại lớp, PH không cần mua riêng." },
                { q: "Lộ trình Robotics kéo dài bao nhiêu năm?", options: ["3 năm", "4 năm", "5 năm", "6 năm"], correct: 1, explanation: "Lộ trình Robotics gồm 4 năm: Robot nhí (4+) → Nhập môn (6+) → Truy tìm bí ẩn (8+) → Sáng tạo (10+)." }
              ]
            }
          },
          {
            id: "csk12_d2_s4",
            title: "Bảng giá & Chương trình đặc biệt",
            icon: "💰",
            content: `<h3>Bảng giá & Các chương trình của MindX K12</h3>
<p>CS cần nắm cơ bản về các gói học để tư vấn re-enroll và trả lời PH khi hỏi về chi phí.</p>

<h4>Các hình thức đăng ký</h4>
<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:0.85rem;">
  <thead><tr style="background:#F7FAFC;"><th style="padding:10px;border:1px solid #E2E8F0;">Hình thức</th><th style="padding:10px;border:1px solid #E2E8F0;">Mô tả</th><th style="padding:10px;border:1px solid #E2E8F0;">Đặc điểm</th></tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>Standard Track</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Đăng ký theo từng khóa/module</td><td style="padding:8px;border:1px solid #E2E8F0;">Linh hoạt, phù hợp trải nghiệm ban đầu</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>1-on-1</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Học riêng 1 thầy - 1 trò</td><td style="padding:8px;border:1px solid #E2E8F0;">Giá cao hơn, tiến độ nhanh, lịch linh hoạt</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>Combo 12T</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Đăng ký lộ trình 12 tháng</td><td style="padding:8px;border:1px solid #E2E8F0;">Ưu đãi giá, cam kết lộ trình dài</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;"><strong>Combo 24T</strong></td><td style="padding:8px;border:1px solid #E2E8F0;">Đăng ký lộ trình 24 tháng</td><td style="padding:8px;border:1px solid #E2E8F0;">Giá tốt nhất, được tặng áo MindX, ưu tiên lớp</td></tr>
  </tbody>
</table>

<h4>Chương trình đặc biệt</h4>
<div class="insight-card">
  <div class="insight-number">🌟</div>
  <div class="insight-body">
    <h4>Bảo trợ & Du học</h4>
    <p>MindX có chương trình bảo trợ du học cho HV hoàn thành lộ trình 3-5 năm. Hỗ trợ hồ sơ, portfolio, và kết nối với các trường quốc tế.</p>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">🚀</div>
  <div class="insight-body">
    <h4>Signature Programs</h4>
    <ul>
      <li><strong>NextGen:</strong> Chương trình đào tạo tinh hoa cho HV xuất sắc</li>
      <li><strong>AI4Learn:</strong> 2 levels (24h) — khóa đệm chiến lược giúp con học AI để học tốt hơn trên trường. Không bán lẻ.</li>
      <li><strong>X-Coding / X-Art:</strong> Phiên bản premium với giáo trình nâng cao</li>
    </ul>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">🎁</div>
  <div class="insight-body">
    <h4>Chương trình tích điểm đổi quà</h4>
    <p>HV tích điểm qua hoạt động học tập, Demo Day, thi đấu để đổi quà MindX: Huy hiệu, vòng tay, bút, sổ, túi bút, gấu bông MindX...</p>
    <p><strong>Lưu ý:</strong> Tối đa 3 HV/lớp được tích điểm từ demo ranking. CS cần theo dõi để tránh gian lận.</p>
  </div>
</div>`,
            quiz: {
              id: "quiz_csk12_d2_s4",
              title: "Quiz: Bảng giá & Chương trình",
              questions: [
                { q: "Combo 24T có ưu đãi gì đặc biệt?", options: ["Chỉ giảm giá", "Giá tốt nhất + tặng áo MindX + ưu tiên lớp", "Free 3 tháng", "Không có ưu đãi"], correct: 1, explanation: "Combo 24T có giá tốt nhất, được tặng áo MindX và ưu tiên xếp lớp." },
                { q: "Hình thức 1-on-1 phù hợp với ai?", options: ["HV muốn tiết kiệm chi phí", "HV cần tiến độ nhanh và lịch linh hoạt", "HV muốn học nhóm", "Chỉ dành cho HV yếu"], correct: 1, explanation: "1-on-1 phù hợp HV cần tiến độ riêng, lịch linh hoạt — giá cao hơn nhưng hiệu quả nhanh." },
                { q: "Tối đa bao nhiêu HV/lớp được tích điểm từ demo ranking?", options: ["1 HV", "2 HV", "3 HV", "5 HV"], correct: 2, explanation: "Theo quy định, tối đa 3 HV/lớp được tích điểm từ demo ranking." },
                { q: "Chương trình NextGen dành cho đối tượng nào?", options: ["Tất cả HV", "HV xuất sắc — chương trình đào tạo tinh hoa", "HV mới bắt đầu", "Chỉ HV Robotics"], correct: 1, explanation: "NextGen là chương trình đào tạo tinh hoa dành cho HV xuất sắc." },
                { q: "MindX hỗ trợ du học cho HV hoàn thành lộ trình bao nhiêu năm?", options: ["1-2 năm", "2-3 năm", "3-5 năm", "Chỉ 5 năm"], correct: 2, explanation: "Chương trình bảo trợ du học dành cho HV hoàn thành lộ trình 3-5 năm." }
              ]
            }
          }
,
{
            id: "csk12_d2_s5",
            title: "FAQ Sản phẩm & Độ tuổi phù hợp",
            icon: "❓",
            content: `<h3>Câu hỏi thường gặp từ Phụ huynh</h3>
<p>CS cần nắm vững các câu hỏi PH hay hỏi để tư vấn và giải đáp chuyên nghiệp.</p>

<div class="mindset-section">
  <div class="mindset-card growth">
    <h4>📌 Về kết quả học tập</h4>
    <div style="margin:8px 0;">
      <p><strong>Q: Con đạt được gì sau khi học xong?</strong></p>
      <p style="padding-left:15px;">A: Tùy bộ môn — Coding: tư duy giải quyết vấn đề, sản phẩm thực tế (game, web, app); Art: tư duy thẩm mỹ, portfolio chuyên nghiệp; Robotics: tư duy logic, kỹ năng STEM, cơ hội thi đấu quốc tế.</p>
    </div>
    <div style="margin:8px 0;">
      <p><strong>Q: Không có năng khiếu vẽ, học Art có phù hợp không?</strong></p>
      <p style="padding-left:15px;">A: Hoàn toàn phù hợp. Chương trình Art của MindX không yêu cầu năng khiếu sẵn — bắt đầu từ cơ bản nhất, rèn luyện tư duy thẩm mỹ qua từng bước.</p>
    </div>
    <div style="margin:8px 0;">
      <p><strong>Q: Bé chỉ thích chơi game, học Coding có giúp bé bớt nghiện game không?</strong></p>
      <p style="padding-left:15px;">A: Coding chuyển bé từ "người chơi game" sang "người làm game" — bé hiểu cách game hoạt động, từ đó chủ động hơn thay vì bị cuốn vào game.</p>
    </div>
  </div>

  <div class="mindset-card customer">
    <h4>📌 Về điều kiện & khó khăn</h4>
    <div style="margin:8px 0;">
      <p><strong>Q: Điều kiện để học Coding là gì?</strong></p>
      <p style="padding-left:15px;">A: Scratch (10+): biết đọc hiểu tiếng Việt cơ bản. Game Creator (11+): đã qua Scratch hoặc tương đương. Python (12+): đã qua Game Creator.</p>
    </div>
    <div style="margin:8px 0;">
      <p><strong>Q: Chưa biết chữ có học Robotics được không?</strong></p>
      <p style="padding-left:15px;">A: Được. Robotics 4+ dùng Block Icon (hình ảnh) — bé chưa cần biết chữ vẫn lập trình được.</p>
    </div>
  </div>

  <div class="mindset-card dna">
    <h4>📌 Tại sao không được nhảy cóc?</h4>
    <p style="color:#7D0005;font-weight:600;">Đây là câu hỏi PH hỏi rất nhiều — CS cần trả lời rõ ràng:</p>
    <table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:0.9em;">
      <tr style="background:#FFF5F5;"><th style="padding:8px;border:1px solid #eee;">Câu hỏi</th><th style="padding:8px;border:1px solid #eee;">Giải đáp</th></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Sao Scratch phải lên Game, không lên thẳng Python?</td><td style="padding:8px;border:1px solid #eee;">Game Creator là bước đệm chuyển từ kéo-thả sang tư duy thuật toán phức tạp. Nhảy thẳng Python sẽ quá khó.</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">6+ và 8+ đều dùng VEX GO, sao phải chia lớp?</td><td style="padding:8px;border:1px solid #eee;">8+ tập trung vào cơ khí phức tạp + cánh tay Robot Arm. Mức độ tư duy và lập trình cao hơn hẳn 6+.</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">12 tuổi rồi, sao không học luôn Multimedia?</td><td style="padding:8px;border:1px solid #eee;">Art Illustration dạy nền tảng thiết kế 2D (Adobe AI) — không có nền này, HV không thể tạo asset cho video/motion.</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Con vẽ đẹp sẵn, muốn nhảy cóc được không?</td><td style="padding:8px;border:1px solid #eee;">Vẽ truyền thống ≠ thiết kế số. Mỗi môn dạy công cụ + tư duy khác nhau, không thể bỏ qua.</td></tr>
    </table>
  </div>

  <div class="mindset-card growth">
    <h4>📌 Bảng độ tuổi phù hợp</h4>
    <table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:0.9em;">
      <tr style="background:#E31F26;color:#fff;"><th style="padding:8px;">Bộ môn</th><th style="padding:8px;">Khóa</th><th style="padding:8px;">Độ tuổi</th></tr>
      <tr><td style="padding:8px;border:1px solid #eee;" rowspan="5">Coding</td><td style="padding:8px;border:1px solid #eee;">Scratch</td><td style="padding:8px;border:1px solid #eee;">10–11 tuổi</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Game Creator</td><td style="padding:8px;border:1px solid #eee;">11–13 tuổi</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Python</td><td style="padding:8px;border:1px solid #eee;">12–13 tuổi</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Web Developer</td><td style="padding:8px;border:1px solid #eee;">14–16 tuổi</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Computer Scientist</td><td style="padding:8px;border:1px solid #eee;">15–17 tuổi</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;" rowspan="4">Robotics</td><td style="padding:8px;border:1px solid #eee;">Robot nhí (LEGO)</td><td style="padding:8px;border:1px solid #eee;">4–5 tuổi</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Nhập môn (VEX GO)</td><td style="padding:8px;border:1px solid #eee;">6–7 tuổi</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Truy tìm bí ẩn (VEX GO)</td><td style="padding:8px;border:1px solid #eee;">8–9 tuổi</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Sáng tạo Robot (VEX IQ)</td><td style="padding:8px;border:1px solid #eee;">10+ tuổi</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;" rowspan="6">Art</td><td style="padding:8px;border:1px solid #eee;">Little Artist</td><td style="padding:8px;border:1px solid #eee;">4–6 tuổi</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Digital Art Foundations</td><td style="padding:8px;border:1px solid #eee;">7–8 tuổi</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Visual Thinking</td><td style="padding:8px;border:1px solid #eee;">9–10 tuổi</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Game Art</td><td style="padding:8px;border:1px solid #eee;">11 tuổi</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Character & Mascot Design</td><td style="padding:8px;border:1px solid #eee;">12 tuổi</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;">Visual Communication → Motion & Video</td><td style="padding:8px;border:1px solid #eee;">13–14+ tuổi</td></tr>
    </table>
  </div>
</div>`,
            quiz: {
              id: "quiz_csk12_d2_s5",
              title: "Quiz: FAQ Sản phẩm",
              questions: [
                {
                  q: "Tại sao học xong Scratch phải lên Game Creator, không lên thẳng Python?",
                  options: ["Vì Game Creator rẻ hơn", "Game Creator là bước đệm chuyển từ kéo-thả sang tư duy thuật toán phức tạp", "Không có lý do, PH có thể chọn", "Vì Python quá dễ"],
                  correct: 1,
                  explanation: "Game Creator giúp HV chuyển từ lập trình kéo-thả sang tư duy thuật toán — nhảy thẳng Python sẽ quá khó và dễ bỏ cuộc."
                },
                {
                  q: "Bé 4 tuổi chưa biết chữ có thể học Robotics được không?",
                  options: ["Không, phải biết đọc", "Được — Robotics 4+ dùng Block Icon (hình ảnh)", "Phải chờ đến 6 tuổi", "Chỉ học được nếu bé thông minh"],
                  correct: 1,
                  explanation: "Robotics 4+ dùng LEGO Spike Essential + Block Icon (kéo thả hình ảnh) — bé chưa cần biết chữ."
                },
                {
                  q: "Robotics 6+ và 8+ đều dùng VEX GO, tại sao phải chia lớp?",
                  options: ["Chỉ khác nhau về giá", "8+ tập trung cơ khí phức tạp + Robot Arm, mức tư duy cao hơn", "Không có sự khác biệt", "8+ dùng VEX IQ"],
                  correct: 1,
                  explanation: "8+ (Truy tìm bí ẩn) tập trung chuyên sâu vào cánh tay Robot Arm và hệ thống tự động hóa — phức tạp hơn nhiều so với 6+."
                },
                {
                  q: "PH nói 'Con vẽ đẹp lắm, cho nhảy qua Visual Communication luôn được không?'",
                  options: ["Được, nếu bé vẽ đẹp", "Không — vẽ truyền thống khác thiết kế số, mỗi môn dạy công cụ + tư duy khác nhau", "Tùy GV đánh giá", "Chỉ cần test đầu vào"],
                  correct: 1,
                  explanation: "Vẽ truyền thống ≠ thiết kế số. Mỗi môn (Game Art → Visual Communication) dạy công cụ và tư duy riêng, không thể bỏ qua."
                },
                {
                  q: "Bé nghiện game, học Coding có giúp gì không?",
                  options: ["Không liên quan", "Coding chuyển bé từ 'người chơi' sang 'người làm game'", "Coding làm bé nghiện hơn", "Chỉ có Robotics mới giúp"],
                  correct: 1,
                  explanation: "Coding giúp bé hiểu cách game hoạt động — chuyển từ 'người chơi' thụ động sang 'người tạo game' chủ động."
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
            id: "csk12_d3_s1",
            title: "Quy trình quản lý lớp học 14 buổi",
            icon: "📋",
            content: `<h3>Vận hành 14 buổi học — Sơ đồ tiến trình</h3>
<div style="background:#FFF5F5;padding:15px;border-radius:8px;margin:10px 0;text-align:center;">
  <strong>Khai giảng → Buổi 1 → Buổi 4/5 (CP1) → Buổi 8/9 (CP2) → Buổi 13 (Nghiệm thu) → Buổi 14 (Demo)</strong>
</div>

<h4>Bảng chi tiết vận hành</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.88em;">
  <tr style="background:#E31F26;color:#fff;"><th style="padding:8px;">Mốc</th><th style="padding:8px;">CS cần làm</th></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Trước khai giảng</td><td style="padding:8px;border:1px solid #eee;">Tạo lớp, request mở lớp trên LMS. TC điều phối giáo viên.</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Sau buổi 1</td><td style="padding:8px;border:1px solid #eee;">Note đánh giá, nhận xét từng HV. Ghi mức độ hứng thú.</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Sau buổi thường</td><td style="padding:8px;border:1px solid #eee;">GV điểm danh + nhận xét trên LMS. CS hỏi GV: có vấn đề đặc biệt không? Theo dõi HV hứng thú/trầm/chậm.</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Sau Checkpoint 1, 2</td><td style="padding:8px;border:1px solid #eee;">GV chấm bài, comment trên LMS. CS xem lại toàn bộ điểm + nhận xét từ đầu khóa. Check với GV các HV đặc biệt.</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Buổi làm SPCK</td><td style="padding:8px;border:1px solid #eee;">CS xem nhận xét GV trên LMS. Hỏi thông tin HV yếu/sản phẩm có vấn đề. Cập nhật tiến độ liên tục.</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Buổi 13</td><td style="padding:8px;border:1px solid #eee;">CS + GV nghiệm thu sản phẩm HV.</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Buổi Demo</td><td style="padding:8px;border:1px solid #eee;">CS host buổi demo. Xin CSAT từ PH.</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Sau buổi 14</td><td style="padding:8px;border:1px solid #eee;">Kiểm tra nhận xét + sản phẩm HV trên LMS. Upload video/hình ảnh.</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">Chuyên cần</td><td style="padding:8px;border:1px solid #eee;">Ghi nhận HV vắng, sắp xếp học bù.</td></tr>
</table>

<h4 style="margin-top:20px;">7 Quy định vận hành lớp học</h4>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
  <div style="background:#f8f8f8;padding:10px;border-radius:6px;border-left:3px solid #E31F26;"><strong>1. Sĩ số tối thiểu</strong><br>Lớp cần đủ sĩ số tối thiểu theo quy định để mở</div>
  <div style="background:#f8f8f8;padding:10px;border-radius:6px;border-left:3px solid #E31F26;"><strong>2. Đặt mã lớp</strong><br>Theo chuẩn đặt mã trên hệ thống LMS</div>
  <div style="background:#f8f8f8;padding:10px;border-radius:6px;border-left:3px solid #E31F26;"><strong>3. Dự thính</strong><br>Quy định HV dự thính trước khi chính thức đăng ký</div>
  <div style="background:#f8f8f8;padding:10px;border-radius:6px;border-left:3px solid #E31F26;"><strong>4. HV vào lớp từ buổi 3</strong><br>HV đăng ký muộn vào lớp từ buổi 3 trở đi cần sắp xếp đặc biệt</div>
  <div style="background:#f8f8f8;padding:10px;border-radius:6px;border-left:3px solid #E31F26;"><strong>5. Điểm danh</strong><br>GV điểm danh đầy đủ trên LMS mỗi buổi học</div>
  <div style="background:#f8f8f8;padding:10px;border-radius:6px;border-left:3px solid #E31F26;"><strong>6. Tách lớp</strong><br>Khi lớp quá đông, cần tách theo quy định sĩ số</div>
  <div style="background:#f8f8f8;padding:10px;border-radius:6px;border-left:3px solid #E31F26;"><strong>7. Dời lịch học/demo</strong><br>Quy trình thông báo và xử lý khi cần dời lịch</div>
</div>`,
            quiz: {
              id: "quiz_csk12_d3_s1",
              title: "Quiz: Quy trình lớp học 14 buổi",
              questions: [
                {
                  q: "Sau buổi Checkpoint, CS cần làm gì?",
                  options: ["Chỉ chờ GV chấm bài", "Xem lại toàn bộ điểm + nhận xét từ đầu khóa, check với GV về HV đặc biệt", "Gọi PH báo điểm", "Không cần làm gì"],
                  correct: 1,
                  explanation: "CS cần xem lại TOÀN BỘ lịch sử điểm + nhận xét từ đầu khóa để chuẩn bị CSKH, đồng thời check với GV các trường hợp HV đặc biệt."
                },
                {
                  q: "Tại buổi Demo, CS đảm nhận vai trò gì?",
                  options: ["Chỉ tham dự", "Host buổi Demo và xin CSAT", "Để GV tự tổ chức", "Ghi điểm cho HV"],
                  correct: 1,
                  explanation: "CS là người host buổi Demo — điều phối, giới thiệu, và quan trọng là xin CSAT (Customer Satisfaction) từ PH."
                },
                {
                  q: "Sau buổi 1, CS cần ghi nhận thông tin gì?",
                  options: ["Chỉ cần điểm danh", "Đánh giá, nhận xét từng HV, mức độ hứng thú", "Chỉ cần hỏi GV có ổn không", "Chờ đến Checkpoint mới đánh giá"],
                  correct: 1,
                  explanation: "Ngay từ buổi 1, CS phải note đánh giá từng HV — mức độ hứng thú, thái độ — để theo dõi suốt khóa học."
                },
                {
                  q: "Khi HV vắng học, CS cần xử lý thế nào?",
                  options: ["Bỏ qua, HV tự liên hệ", "Ghi nhận vắng và sắp xếp học bù", "Báo cho PH và phạt HV", "Chỉ cần ghi trên LMS"],
                  correct: 1,
                  explanation: "CS ghi nhận vắng → sắp xếp học bù cho HV. Đảm bảo HV không bị mất kiến thức."
                },
                {
                  q: "Sau buổi 14, CS cần đảm bảo điều gì trên LMS?",
                  options: ["Chỉ cần đóng lớp", "Nhận xét + sản phẩm HV đầy đủ, upload video/hình ảnh", "Xóa dữ liệu lớp cũ", "Gửi bảng điểm cho PH"],
                  correct: 1,
                  explanation: "CS kiểm tra: nhận xét đầy đủ, sản phẩm cuối khóa có trên LMS, upload video/hình ảnh demo."
                }
              ]
            }
          },
{
            id: "csk12_d3_s2",
            title: "Quy trình hành chính — Phần 1",
            icon: "📄",
            content: `<h3>6 Quy trình hành chính CS cần nắm vững</h3>

<div class="mindset-section">
  <div class="mindset-card growth">
    <h4>1. Student Profile</h4>
    <p>Cập nhật thông tin trên CRM và LMS trong <strong>48 giờ</strong> kể từ khi PH hoàn tất học phí.</p>
    <table style="width:100%;border-collapse:collapse;font-size:0.88em;">
      <tr style="background:#FFF5F5;"><th style="padding:6px;border:1px solid #eee;">Thông tin</th><th style="padding:6px;border:1px solid #eee;">Deadline</th></tr>
      <tr><td style="padding:6px;border:1px solid #eee;">Thông tin HV (ngày sinh, giới tính, ảnh)</td><td style="padding:6px;border:1px solid #eee;">48h sau khi thanh toán</td></tr>
      <tr><td style="padding:6px;border:1px solid #eee;">Thông tin PH (giới tính, email, địa chỉ)</td><td style="padding:6px;border:1px solid #eee;">48h sau khi thanh toán</td></tr>
      <tr><td style="padding:6px;border:1px solid #eee;">Nhận xét học tập (CP1, CP2, Demo)</td><td style="padding:6px;border:1px solid #eee;">96h (4 ngày) sau buổi học</td></tr>
      <tr><td style="padding:6px;border:1px solid #eee;">Sản phẩm cuối khóa</td><td style="padding:6px;border:1px solid #eee;">96h sau buổi Demo</td></tr>
    </table>
    <p style="font-size:0.85em;color:#666;">GV nhận xét + fill điểm trước buổi học 48h → CS phê duyệt lên Compass.</p>
  </div>

  <div class="mindset-card customer">
    <h4>2. Bảo lưu</h4>
    <p>HV gặp vấn đề không thể tiếp tục nhưng không muốn dừng hẳn → MindX hỗ trợ bảo lưu.</p>
    <table style="width:100%;border-collapse:collapse;font-size:0.88em;">
      <tr style="background:#E31F26;color:#fff;"><th style="padding:6px;">Lộ trình</th><th style="padding:6px;">Số lần BL</th><th style="padding:6px;">Thời gian BL</th></tr>
      <tr><td style="padding:6px;border:1px solid #eee;">12 tháng</td><td style="padding:6px;border:1px solid #eee;">1 lần</td><td style="padding:6px;border:1px solid #eee;">90 ngày</td></tr>
      <tr><td style="padding:6px;border:1px solid #eee;">24 tháng</td><td style="padding:6px;border:1px solid #eee;">2 lần</td><td style="padding:6px;border:1px solid #eee;">180 ngày</td></tr>
      <tr><td style="padding:6px;border:1px solid #eee;">Bảo trợ 3 năm</td><td style="padding:6px;border:1px solid #eee;">3 lần</td><td style="padding:6px;border:1px solid #eee;">270 ngày</td></tr>
      <tr><td style="padding:6px;border:1px solid #eee;">Bảo trợ 5 năm</td><td style="padding:6px;border:1px solid #eee;">3 lần</td><td style="padding:6px;border:1px solid #eee;">450 ngày (max 365/lần)</td></tr>
      <tr><td style="padding:6px;border:1px solid #eee;">Bảo trợ 6 năm</td><td style="padding:6px;border:1px solid #eee;">3 lần</td><td style="padding:6px;border:1px solid #eee;">540 ngày (max 365/lần)</td></tr>
    </table>
    <div class="quote-block"><strong>Bảo lưu vượt hạn:</strong> Chỉ áp dụng từ lộ trình 12T+. Cần giấy tờ chứng minh (giấy bệnh/du học/cuối cấp). Tối đa 1 lần, không quá 365 ngày.</div>
  </div>

  <div class="mindset-card dna">
    <h4>3. Chuyển nhượng</h4>
    <p><strong>Điều kiện:</strong> PH tự tìm người nhận chuyển nhượng.</p>
    <p><strong>Quy định:</strong></p>
    <ul>
      <li>Chuyển nhượng cho khóa học chưa bắt đầu hoặc đang học</li>
      <li>Phí chuyển nhượng theo quy định hiện hành</li>
      <li>Quy trình: PH yêu cầu → BU tư vấn → Ký biên bản → Thu phí chênh lệch → Cập nhật CRM</li>
    </ul>
  </div>

  <div class="mindset-card growth">
    <h4>4. Chuyển khối</h4>
    <p>HV muốn chuyển từ bộ môn này sang bộ môn khác (VD: Coding → Art).</p>
    <ul>
      <li>Tư vấn rõ chính sách chuyển khối cho PH</li>
      <li>Tính phí chênh lệch (nếu có)</li>
      <li>Cập nhật trên CRM + LMS</li>
    </ul>
  </div>

  <div class="mindset-card customer">
    <h4>5. Học bù</h4>
    <p>Khi HV vắng, CS sắp xếp học bù để đảm bảo không bị mất kiến thức.</p>
    <ul>
      <li>Ưu tiên bù vào lớp cùng môn, cùng level</li>
      <li>Thời gian bù theo lịch có lớp phù hợp</li>
      <li>CS thông báo PH lịch bù trước ít nhất 24h</li>
    </ul>
  </div>

  <div class="mindset-card dna">
    <h4>6. Chuyển lớp / Chuyển cơ sở</h4>
    <p>HV cần đổi lịch học hoặc đổi cơ sở.</p>
    <ul>
      <li>CS kiểm tra lớp phù hợp tại cơ sở đích</li>
      <li>Xác nhận với PH lịch mới</li>
      <li>Cập nhật trên hệ thống CRM + LMS</li>
    </ul>
  </div>
</div>`,
            quiz: {
              id: "quiz_csk12_d3_s2",
              title: "Quiz: Quy trình hành chính P1",
              questions: [
                {
                  q: "Student Profile cần cập nhật trên CRM/LMS trong bao lâu sau khi PH thanh toán?",
                  options: ["24 giờ", "48 giờ", "72 giờ", "1 tuần"],
                  correct: 1,
                  explanation: "Thông tin HV + PH phải cập nhật trong 48 giờ kể từ khi PH hoàn tất học phí."
                },
                {
                  q: "HV lộ trình 12 tháng được bảo lưu tối đa bao nhiêu ngày?",
                  options: ["30 ngày", "90 ngày", "180 ngày", "270 ngày"],
                  correct: 1,
                  explanation: "Lộ trình 12 tháng: 1 lần bảo lưu, tối đa 90 ngày."
                },
                {
                  q: "Bảo lưu vượt hạn áp dụng cho lộ trình nào?",
                  options: ["Tất cả lộ trình", "Từ 12 tháng trở lên", "Chỉ bảo trợ 3+ năm", "Không có bảo lưu vượt hạn"],
                  correct: 1,
                  explanation: "Bảo lưu vượt hạn chỉ áp dụng từ lộ trình 12T trở lên, cần giấy tờ chứng minh."
                },
                {
                  q: "Ai chịu trách nhiệm tìm người nhận chuyển nhượng?",
                  options: ["MindX tìm giúp", "Phụ huynh tự tìm", "GV giới thiệu", "Hệ thống tự matching"],
                  correct: 1,
                  explanation: "PH tự tìm người nhận chuyển nhượng — MindX hỗ trợ thủ tục và chuyển đổi hệ thống."
                },
                {
                  q: "Nhận xét học tập (CP1, CP2, Demo) cần cập nhật trên LMS trong bao lâu?",
                  options: ["24 giờ", "48 giờ", "96 giờ (4 ngày)", "1 tuần"],
                  correct: 2,
                  explanation: "Nhận xét CP1/CP2: trong vòng 48h sau buổi học. Demo: 72h. CS phê duyệt trong 96h."
                }
              ]
            }
          },
{
            id: "csk12_d3_s3",
            title: "Quy trình hành chính — Phần 2",
            icon: "📑",
            content: `<h3>Các quy trình đặc biệt</h3>

<div class="mindset-section">
  <div class="mindset-card growth">
    <h4>7. Hoàn phí</h4>
    <p><strong>Công thức tính (hình thức trả thẳng):</strong></p>
    <div style="background:#f8f8f8;padding:12px;border-radius:6px;font-size:0.9em;margin:8px 0;">
      <p><strong>HP học phần còn lại</strong> = Tổng HP đã nộp − (Số HP đã hoàn thành + đang học) × Giá mỗi HP</p>
      <p><strong>HP được hoàn</strong> = HP học phần còn lại × <span style="color:#E31F26;font-weight:700;">80%</span></p>
      <p style="color:#666;font-size:0.85em;">MindX thu phí hoàn = 20%. Không hoàn HP học phần đang dở dang.</p>
    </div>
    <p><strong>Hình thức trả góp (Rootopia):</strong> Hoàn lại tiền khách còn nợ cho Rootopia = đúng số tiền còn nợ + lãi trả chậm (nếu có).</p>
  </div>

  <div class="mindset-card customer">
    <h4>8. Xử lý học viên nghỉ ngang</h4>
    <p>Khi HV muốn nghỉ giữa chừng:</p>
    <ul>
      <li>CS tìm hiểu lý do → tư vấn giải pháp (chuyển lớp, bảo lưu, đổi lịch)</li>
      <li>Nếu HV vẫn muốn nghỉ → thực hiện quy trình hoàn phí</li>
      <li>Ghi nhận lý do vào CRM để cải thiện dịch vụ</li>
    </ul>
  </div>

  <div class="mindset-card dna">
    <h4>9. Tích điểm đổi quà</h4>
    <p>Chương trình loyalty — HV tích điểm qua hoạt động học tập để đổi quà tặng từ MindX.</p>
  </div>

  <div class="mindset-card growth">
    <h4>10. Cấp áo cho HV lộ trình 24T+</h4>
    <p>HV đăng ký lộ trình từ 24 tháng trở lên được cấp áo MindX.</p>
  </div>

  <div class="mindset-card customer">
    <h4>11. Lớp tăng cường</h4>
    <p>Lớp bổ trợ cho HV cần hỗ trợ thêm hoặc muốn nâng cao.</p>
  </div>

  <div class="mindset-card dna">
    <h4>12. Hoàn thành khóa học</h4>
    <p>Quy trình xử lý khi HV hoàn thành toàn bộ khóa học:</p>
    <ul>
      <li>Cấp chứng nhận hoàn thành</li>
      <li>Tư vấn lộ trình tiếp theo (up-level)</li>
      <li>Cập nhật trạng thái trên CRM/LMS</li>
    </ul>
  </div>
</div>`,
            quiz: {
              id: "quiz_csk12_d3_s3",
              title: "Quiz: Quy trình đặc biệt",
              questions: [
                {
                  q: "MindX thu phí hoàn bằng bao nhiêu % của học phí còn lại?",
                  options: ["10%", "15%", "20%", "30%"],
                  correct: 2,
                  explanation: "MindX thu phí hoàn = 20% học phí học phần còn lại. PH nhận lại 80%."
                },
                {
                  q: "HV lộ trình bao nhiêu tháng trở lên được cấp áo MindX?",
                  options: ["12 tháng", "18 tháng", "24 tháng", "36 tháng"],
                  correct: 2,
                  explanation: "HV đăng ký lộ trình từ 24 tháng trở lên được cấp áo MindX."
                },
                {
                  q: "Khi HV muốn nghỉ ngang, CS nên làm gì đầu tiên?",
                  options: ["Làm hoàn phí ngay", "Tìm hiểu lý do và tư vấn giải pháp (chuyển lớp, bảo lưu...)", "Chuyển cho quản lý", "Đồng ý và kết thúc"],
                  correct: 1,
                  explanation: "CS cần tìm hiểu lý do trước → tư vấn giải pháp phù hợp (chuyển lớp, bảo lưu, đổi lịch) trước khi tiến hành hoàn phí."
                },
                {
                  q: "Học phí của học phần đang dang dở có được hoàn không?",
                  options: ["Hoàn 100%", "Hoàn 80%", "Hoàn 50%", "Không hoàn"],
                  correct: 3,
                  explanation: "MindX KHÔNG hoàn học phí cho những buổi chưa sử dụng trong học phần đang dang dở."
                },
                {
                  q: "Khi HV hoàn thành khóa học, CS cần làm gì?",
                  options: ["Chỉ cập nhật LMS", "Cấp chứng nhận + tư vấn lộ trình tiếp + cập nhật CRM/LMS", "Gọi PH cảm ơn", "Không cần làm gì thêm"],
                  correct: 1,
                  explanation: "CS cần: cấp chứng nhận hoàn thành, tư vấn lộ trình tiếp theo (up-level), cập nhật trạng thái trên CRM/LMS."
                }
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
            id: "csk12_d4_s1",
            title: "Greeting Call & Chăm sóc sau buổi 1",
            icon: "📞",
            content: `<h3>Greeting Call — Cuộc gọi chào đón</h3>
<div style="background:#FFF5F5;padding:12px;border-radius:8px;margin:10px 0;">
  <strong>Mục đích:</strong> Tạo ấn tượng đầu tiên, xác nhận thông tin, chuẩn bị cho HV trước buổi 1.
  <br><strong>Thời điểm:</strong> Ngay sau khi HV đăng ký thành công, trước buổi khai giảng.
</div>

<h4>Script Greeting Call</h4>
<div class="quote-block" style="border-left:3px solid #E31F26;">
  <p>"Dạ em chào anh/chị [Tên PH]. Em là [Tên CS] – nhân viên chăm sóc học viên tại MindX [Tên cơ sở].</p>
  <p>Em gọi để chào mừng bé [Tên HV] đã chính thức trở thành học viên MindX ạ!</p>
  <p>Em xin phép xác nhận một số thông tin:</p>
  <ul>
    <li>Bé [Tên HV] đăng ký khóa [Tên khóa], lịch học [Thứ/giờ]</li>
    <li>Buổi khai giảng dự kiến ngày [Ngày]</li>
  </ul>
  <p>Anh/chị cần chuẩn bị cho bé:</p>
  <ul>
    <li>[Laptop/thiết bị] — đã cài phần mềm [Tên PM]</li>
    <li>Đến trước giờ học 10–15 phút</li>
  </ul>
  <p>Trong quá trình học, anh/chị có bất cứ thắc mắc nào, cứ liên hệ trực tiếp em qua Zalo/điện thoại này ạ. Em sẽ là người đồng hành cùng bé suốt khóa học.</p>
  <p>Cảm ơn anh/chị đã tin tưởng MindX ạ!"</p>
</div>

<h3 style="margin-top:20px;">Chăm sóc sau buổi 1</h3>
<div style="background:#FFF5F5;padding:12px;border-radius:8px;margin:10px 0;">
  <strong>Mục đích:</strong> Nắm bắt ấn tượng đầu tiên, giải quyết lo ngại sớm.
  <br><strong>Thời điểm:</strong> Trong vòng 24h sau buổi 1.
</div>

<h4>Script gọi PH sau buổi 1</h4>
<div class="quote-block" style="border-left:3px solid #059669;">
  <p>"Dạ em chào anh/chị. Hôm nay bé [Tên] đã tham gia buổi học đầu tiên tại MindX rồi ạ.</p>
  <p>Em xin phép cập nhật: Buổi hôm nay GV [Tên GV] đã hướng dẫn bé về [Nội dung]. Bé [nhận xét tích cực — VD: rất hào hứng / tập trung tốt / hoàn thành bài nhanh].</p>
  <p>Anh/chị có muốn biết thêm chi tiết gì về buổi học không ạ? Hoặc bé có chia sẻ gì về buổi học đầu tiên không ạ?</p>
  <p>[Lắng nghe phản hồi → ghi nhận → xử lý nếu cần]</p>
  <p>Em cảm ơn anh/chị. Em sẽ tiếp tục theo sát bé trong các buổi tiếp theo ạ!"</p>
</div>`,
            quiz: {
              id: "quiz_csk12_d4_s1",
              title: "Quiz: Greeting Call & Sau buổi 1",
              questions: [
                {
                  q: "Greeting Call nên thực hiện khi nào?",
                  options: ["Sau buổi 1", "Ngay sau khi HV đăng ký, trước buổi khai giảng", "Sau Checkpoint 1", "Khi PH gọi hỏi"],
                  correct: 1,
                  explanation: "Greeting Call thực hiện ngay sau khi đăng ký thành công, TRƯỚC buổi khai giảng — tạo ấn tượng đầu tiên."
                },
                {
                  q: "Trong Greeting Call, CS cần xác nhận những gì?",
                  options: ["Chỉ lịch học", "Tên khóa, lịch học, ngày khai giảng, thiết bị cần chuẩn bị", "Chỉ tên HV", "Chỉ học phí"],
                  correct: 1,
                  explanation: "CS cần xác nhận đầy đủ: khóa học, lịch, ngày khai giảng, thiết bị cần chuẩn bị cho HV."
                },
                {
                  q: "Gọi PH sau buổi 1 nên trong thời gian nào?",
                  options: ["Ngay lập tức", "Trong vòng 24h", "Trong vòng 48h", "Cuối tuần"],
                  correct: 1,
                  explanation: "Chăm sóc sau buổi 1 cần thực hiện trong vòng 24h — khi ấn tượng đầu tiên còn mới."
                },
                {
                  q: "Khi gọi PH sau buổi 1, CS nên bắt đầu bằng gì?",
                  options: ["Hỏi về học phí", "Cập nhật nội dung buổi học + nhận xét tích cực về HV", "Hỏi PH có muốn đăng ký thêm", "Báo lịch Checkpoint"],
                  correct: 1,
                  explanation: "Mở đầu bằng cập nhật nội dung buổi học + nhận xét tích cực — PH muốn biết con mình học thế nào."
                },
                {
                  q: "Trong Greeting Call, CS nên giới thiệu bản thân thế nào?",
                  options: ["Chỉ nói tên", "'Em là [Tên] – CS tại MindX [cơ sở], sẽ đồng hành cùng bé suốt khóa học'", "Không cần giới thiệu", "Nói ngắn gọn rồi chuyển sang nội dung"],
                  correct: 1,
                  explanation: "CS cần giới thiệu rõ: tên, vai trò, cơ sở, và cam kết đồng hành — tạo sự tin tưởng từ đầu."
                }
              ]
            }
          },
{
            id: "csk12_d4_s2",
            title: "Chăm sóc Checkpoint, Demo & Buổi 14",
            icon: "🎯",
            content: `<h3>Chăm sóc sau Checkpoint 1, 2</h3>
<div style="background:#FFF5F5;padding:12px;border-radius:8px;margin:10px 0;">
  <strong>Mục đích:</strong> Cập nhật kết quả Checkpoint, upsell combo nếu phù hợp.
  <br><strong>Thời điểm:</strong> Trong vòng 48h sau buổi Checkpoint.
</div>
<div class="quote-block" style="border-left:3px solid #2563EB;">
  <p>"Dạ em chào anh/chị. Bé [Tên] vừa hoàn thành Checkpoint [1/2] ạ.</p>
  <p><strong>Kết quả:</strong> Bé đạt [X điểm] — [nhận xét: tốt/cần cải thiện phần nào].</p>
  <p><strong>Điểm mạnh:</strong> [Cụ thể — VD: tư duy logic tốt, hoàn thành bài nhanh]</p>
  <p><strong>Cần cải thiện:</strong> [Cụ thể — VD: cần chú ý hơn phần giao diện]</p>
  <p>GV nhận xét bé [nhận xét cá nhân]. Em sẽ tiếp tục theo sát bé trong nửa khóa còn lại ạ."</p>
</div>

<h3 style="margin-top:20px;">Mời tham gia Demo Day</h3>
<div class="quote-block" style="border-left:3px solid #D97706;">
  <p>"Dạ em chào anh/chị. Bé [Tên] sắp hoàn thành khóa [Tên khóa] và sẽ có buổi Demo Day vào ngày [Ngày], lúc [Giờ] tại [Cơ sở] ạ.</p>
  <p>Tại buổi Demo, bé sẽ trình bày sản phẩm cuối khóa trước PH và bạn bè. Đây là cơ hội tuyệt vời để anh/chị thấy thành quả của bé!</p>
  <p>Anh/chị sắp xếp tham dự được không ạ? Em rất mong anh/chị có mặt để động viên bé."</p>
</div>

<h3 style="margin-top:20px;">Chăm sóc sau buổi 14 (Kết thúc khóa)</h3>
<div class="quote-block" style="border-left:3px solid #059669;">
  <p>"Dạ em chào anh/chị. Bé [Tên] đã hoàn thành xuất sắc khóa [Tên khóa] ạ! 🎉</p>
  <p><strong>Tổng kết:</strong> [Nhận xét tổng quan — điểm mạnh, tiến bộ nổi bật]</p>
  <p><strong>Sản phẩm cuối khóa:</strong> [Mô tả SP — VD: Game/Website/Robot]</p>
  <p>Để bé tiếp tục phát triển, lộ trình tiếp theo là khóa [Tên khóa tiếp]. Anh/chị muốn em tư vấn chi tiết không ạ?</p>
  <p>Nếu đăng ký tiếp, bé sẽ được [ưu đãi/giảm giá nếu có]. Em có thể giữ chỗ cho bé ngay ạ!"</p>
</div>`,
            quiz: {
              id: "quiz_csk12_d4_s2",
              title: "Quiz: Checkpoint, Demo & Buổi 14",
              questions: [
                {
                  q: "Chăm sóc sau Checkpoint cần thực hiện trong bao lâu?",
                  options: ["24h", "48h", "72h", "1 tuần"],
                  correct: 1,
                  explanation: "Trong vòng 48h sau buổi Checkpoint — khi kết quả còn mới và PH quan tâm nhất."
                },
                {
                  q: "Khi gọi PH sau buổi 14, CS nên đề cập gì ngoài kết quả?",
                  options: ["Chỉ cảm ơn", "Tư vấn lộ trình tiếp theo + ưu đãi đăng ký tiếp", "Hỏi PH có khiếu nại gì", "Không cần gọi"],
                  correct: 1,
                  explanation: "Sau buổi 14 là thời điểm vàng để tư vấn up-level — giới thiệu lộ trình tiếp + ưu đãi nếu có."
                },
                {
                  q: "Khi mời PH dự Demo, CS cần nhấn mạnh điều gì?",
                  options: ["Bắt buộc phải dự", "Đây là cơ hội thấy thành quả của bé — mong PH có mặt động viên", "Chỉ thông báo lịch", "Nói PH không cần dự cũng được"],
                  correct: 1,
                  explanation: "CS nhấn mạnh giá trị: PH được thấy thành quả + động viên bé — tạo động lực cho cả PH và HV."
                },
                {
                  q: "Khi báo kết quả Checkpoint, CS cần nêu những gì?",
                  options: ["Chỉ nêu điểm", "Điểm + điểm mạnh + cần cải thiện + nhận xét GV", "Chỉ nói 'bé học tốt'", "Gửi link LMS để PH tự xem"],
                  correct: 1,
                  explanation: "CS cần nêu đầy đủ: điểm số, điểm mạnh cụ thể, phần cần cải thiện, và nhận xét cá nhân từ GV."
                },
                {
                  q: "Sau Demo Day, CS nên xin gì từ PH?",
                  options: ["Học phí tiếp", "CSAT (Customer Satisfaction)", "Referral ngay lập tức", "Không cần xin gì"],
                  correct: 1,
                  explanation: "Sau Demo Day, CS xin CSAT — đánh giá mức độ hài lòng của PH về trải nghiệm tại MindX."
                }
              ]
            }
          },
{
            id: "csk12_d4_s3",
            title: "Chăm sóc HV chờ lớp & Chuyên cần",
            icon: "🔔",
            content: `<h3>Chăm sóc 3 nhóm học viên đặc biệt</h3>

<div class="mindset-section">
  <div class="mindset-card growth">
    <h4>1. HV mới (vừa đăng ký, chờ khai giảng)</h4>
    <ul>
      <li>Greeting Call ngay sau đăng ký (đã học ở bài trước)</li>
      <li>Nhắc lịch khai giảng trước 3 ngày + 1 ngày</li>
      <li>Hướng dẫn chuẩn bị thiết bị, phần mềm</li>
      <li>Gửi thông tin GV, lớp học qua Zalo/email</li>
    </ul>
  </div>

  <div class="mindset-card customer">
    <h4>2. HV chờ xếp lớp</h4>
    <p>HV đã đăng ký nhưng chưa đủ sĩ số mở lớp.</p>
    <ul>
      <li>Gọi cập nhật tình hình mỗi <strong>7 ngày</strong></li>
      <li>Đề xuất phương án: chờ thêm / chuyển khung giờ / chuyển cơ sở</li>
      <li>Luôn thể hiện sự quan tâm: "Em rất hiểu anh/chị mong muốn bé được học sớm…"</li>
    </ul>
    <div class="quote-block">"Dạ anh/chị, hiện lớp [Tên] đang chờ thêm [X] bạn nữa để đủ sĩ số mở. Em dự kiến trong khoảng [thời gian]. Nếu anh/chị muốn, em có thể chuyển bé sang lớp [giờ khác] đã đủ sĩ số ạ."</div>
  </div>

  <div class="mindset-card dna">
    <h4>3. HV đang bảo lưu</h4>
    <ul>
      <li>Gọi thăm hỏi <strong>mỗi tháng 1 lần</strong> trong thời gian bảo lưu</li>
      <li>Nhắc thời hạn bảo lưu trước khi hết hạn 2 tuần</li>
      <li>Tư vấn quay lại: đề xuất lớp phù hợp, khung giờ mới</li>
    </ul>
  </div>
</div>

<h3 style="margin-top:20px;">Chuyên cần — Theo dõi vắng học</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.88em;">
  <tr style="background:#E31F26;color:#fff;"><th style="padding:8px;">Tình huống</th><th style="padding:8px;">CS xử lý</th></tr>
  <tr><td style="padding:8px;border:1px solid #eee;">HV vắng 1 buổi (có báo trước)</td><td style="padding:8px;border:1px solid #eee;">Ghi nhận, sắp xếp học bù</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;">HV vắng 1 buổi (không báo)</td><td style="padding:8px;border:1px solid #eee;">Gọi PH hỏi thăm, nhắc lịch bù</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;">HV vắng 2 buổi liên tiếp</td><td style="padding:8px;border:1px solid #eee;">Gọi PH tìm hiểu lý do, đề xuất giải pháp</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;">HV vắng 3+ buổi</td><td style="padding:8px;border:1px solid #eee;">Escalate lên CSL, tư vấn bảo lưu/chuyển lớp nếu cần</td></tr>
</table>`,
            quiz: {
              id: "quiz_csk12_d4_s3",
              title: "Quiz: HV chờ lớp & Chuyên cần",
              questions: [
                {
                  q: "HV chờ xếp lớp, CS nên gọi cập nhật bao lâu 1 lần?",
                  options: ["Mỗi ngày", "Mỗi 7 ngày", "Mỗi tháng", "Chỉ khi có lớp mới"],
                  correct: 1,
                  explanation: "CS gọi cập nhật tình hình mỗi 7 ngày — để PH biết mình được quan tâm."
                },
                {
                  q: "HV bảo lưu, CS nên thăm hỏi bao lâu 1 lần?",
                  options: ["Mỗi tuần", "Mỗi tháng", "Chỉ khi sắp hết hạn", "Không cần gọi"],
                  correct: 1,
                  explanation: "Gọi thăm hỏi mỗi tháng 1 lần + nhắc hạn bảo lưu trước 2 tuần."
                },
                {
                  q: "HV vắng 2 buổi liên tiếp, CS nên làm gì?",
                  options: ["Chỉ ghi nhận", "Gọi PH tìm hiểu lý do và đề xuất giải pháp", "Báo GV", "Chờ HV tự liên hệ"],
                  correct: 1,
                  explanation: "2 buổi liên tiếp = tín hiệu cảnh báo. CS phải chủ động gọi PH tìm hiểu lý do."
                },
                {
                  q: "HV vắng 3+ buổi, CS cần escalate cho ai?",
                  options: ["GV", "CSL (CS Leader)", "CM", "Không cần escalate"],
                  correct: 1,
                  explanation: "3+ buổi vắng cần escalate lên CSL để có phương án xử lý phù hợp (bảo lưu, chuyển lớp)."
                },
                {
                  q: "Trước khi khai giảng, CS nhắc PH mấy lần?",
                  options: ["1 lần", "2 lần (trước 3 ngày + trước 1 ngày)", "3 lần", "Không cần nhắc"],
                  correct: 1,
                  explanation: "Nhắc lịch khai giảng trước 3 ngày và trước 1 ngày — đảm bảo PH không quên."
                }
              ]
            }
          },
{
            id: "csk12_d4_s4",
            title: "Nhận diện khách hàng D.I.S.C",
            icon: "🎭",
            content: `<h3>Mô hình D.I.S.C — 4 nhóm tính cách khách hàng</h3>
<p>Mỗi PH có phong cách giao tiếp khác nhau. Nhận diện đúng → tư vấn đúng cách → PH hài lòng hơn.</p>

<table style="width:100%;border-collapse:collapse;font-size:0.88em;">
  <tr style="background:#E31F26;color:#fff;">
    <th style="padding:8px;">Type</th><th style="padding:8px;">Đặc điểm</th><th style="padding:8px;">CS nên</th><th style="padding:8px;">CS tránh</th>
  </tr>
  <tr style="background:#FFF5F5;">
    <td style="padding:8px;border:1px solid #eee;font-weight:700;color:#E31F26;">D — Dominance<br>(Quyết đoán)</td>
    <td style="padding:8px;border:1px solid #eee;">Nói nhanh, thẳng thắn, muốn kết quả ngay. Ít kiên nhẫn với chi tiết.</td>
    <td style="padding:8px;border:1px solid #eee;">Đi thẳng vào vấn đề, nêu kết quả trước, tiết kiệm thời gian</td>
    <td style="padding:8px;border:1px solid #eee;">Nói dài dòng, vòng vo, giải thích quá chi tiết</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #eee;font-weight:700;color:#D97706;">I — Influence<br>(Nhiệt tình)</td>
    <td style="padding:8px;border:1px solid #eee;">Thân thiện, nói nhiều, thích được khen, quan tâm trải nghiệm.</td>
    <td style="padding:8px;border:1px solid #eee;">Khen ngợi bé, chia sẻ câu chuyện thành công, tạo cảm xúc tích cực</td>
    <td style="padding:8px;border:1px solid #eee;">Quá khô khan, chỉ nói số liệu, không có cảm xúc</td>
  </tr>
  <tr style="background:#FFF5F5;">
    <td style="padding:8px;border:1px solid #eee;font-weight:700;color:#059669;">S — Steadiness<br>(Ổn định)</td>
    <td style="padding:8px;border:1px solid #eee;">Bình tĩnh, cần thời gian suy nghĩ, muốn sự an toàn, ít thay đổi.</td>
    <td style="padding:8px;border:1px solid #eee;">Kiên nhẫn, cho thời gian suy nghĩ, nhấn mạnh sự ổn định + an toàn</td>
    <td style="padding:8px;border:1px solid #eee;">Push, tạo áp lực, ép quyết định nhanh</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #eee;font-weight:700;color:#2563EB;">C — Conscientiousness<br>(Cẩn thận)</td>
    <td style="padding:8px;border:1px solid #eee;">Hỏi nhiều chi tiết, cần bằng chứng, logic, so sánh trước khi quyết định.</td>
    <td style="padding:8px;border:1px solid #eee;">Chuẩn bị số liệu, so sánh cụ thể, trả lời chính xác, có tài liệu</td>
    <td style="padding:8px;border:1px solid #eee;">Trả lời mơ hồ, không có dữ liệu, hứa mà không chứng minh được</td>
  </tr>
</table>

<h4 style="margin-top:15px;">Cách nhận diện nhanh</h4>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
  <div style="background:#FFF5F5;padding:10px;border-radius:6px;"><strong>🔴 D:</strong> "Nói ngắn gọn thôi", "Kết quả ra sao?", "Khi nào bắt đầu?"</div>
  <div style="background:#FFFBEB;padding:10px;border-radius:6px;"><strong>🟡 I:</strong> "Ôi hay quá!", "Con nhà bạn em học ở đây nè", hỏi về trải nghiệm</div>
  <div style="background:#ECFDF5;padding:10px;border-radius:6px;"><strong>🟢 S:</strong> "Để tôi suy nghĩ thêm", "Con tôi nhút nhát, liệu có ổn?", cần reassure</div>
  <div style="background:#EFF6FF;padding:10px;border-radius:6px;"><strong>🔵 C:</strong> "Giáo trình cụ thể thế nào?", "So với trung tâm X khác gì?", hỏi rất chi tiết</div>
</div>`,
            quiz: {
              id: "quiz_csk12_d4_s4",
              title: "Quiz: D.I.S.C",
              questions: [
                {
                  q: "PH nói 'Nói ngắn gọn thôi, khi nào bắt đầu?' — thuộc type nào?",
                  options: ["I — Influence", "D — Dominance", "S — Steadiness", "C — Conscientiousness"],
                  correct: 1,
                  explanation: "Type D muốn kết quả nhanh, thẳng thắn, ít kiên nhẫn với chi tiết."
                },
                {
                  q: "PH type S cần CS thể hiện điều gì?",
                  options: ["Push nhanh để chốt", "Kiên nhẫn, cho thời gian suy nghĩ, nhấn mạnh sự an toàn", "Khen nhiều", "Nêu số liệu chi tiết"],
                  correct: 1,
                  explanation: "Type S cần sự ổn định, an toàn — CS phải kiên nhẫn, không push, cho thời gian."
                },
                {
                  q: "PH hỏi 'Giáo trình cụ thể thế nào? So với trung tâm X khác gì?' — type nào?",
                  options: ["D", "I", "S", "C — Conscientiousness"],
                  correct: 3,
                  explanation: "Type C cần chi tiết, bằng chứng, so sánh cụ thể trước khi quyết định."
                },
                {
                  q: "Với PH type I, CS nên tư vấn thế nào?",
                  options: ["Nói ngắn gọn, đi thẳng vào kết quả", "Khen bé, chia sẻ câu chuyện thành công, tạo cảm xúc tích cực", "Chuẩn bị bảng so sánh chi tiết", "Cho thời gian suy nghĩ"],
                  correct: 1,
                  explanation: "Type I thích cảm xúc, trải nghiệm — CS nên khen bé, chia sẻ story, tạo hứng khởi."
                },
                {
                  q: "Sai lầm lớn nhất khi tư vấn PH type D là gì?",
                  options: ["Nói quá nhanh", "Nói dài dòng, vòng vo, giải thích quá chi tiết", "Khen quá nhiều", "Đưa quá nhiều lựa chọn"],
                  correct: 1,
                  explanation: "Type D ghét sự dài dòng — CS phải đi thẳng vào vấn đề, nêu kết quả trước."
                }
              ]
            }
          },
{
            id: "csk12_d4_s5",
            title: "Framework S.E.R.V.E",
            icon: "⭐",
            content: `<h3>S.E.R.V.E — 5 bước chăm sóc khách hàng xuất sắc</h3>
<p>Framework áp dụng cho MỌI tương tác với PH/HV.</p>

<div style="display:flex;flex-direction:column;gap:12px;margin:15px 0;">
  <div style="background:linear-gradient(135deg,#E31F26,#7D0005);color:#fff;padding:15px;border-radius:8px;">
    <h4 style="margin:0;">S — See (Nhìn nhận)</h4>
    <p style="margin:5px 0 0;">Quan sát và nhận diện nhu cầu KH TRƯỚC KHI họ nói ra. Dựa vào ngữ cảnh, lịch sử tương tác, D.I.S.C type.</p>
    <p style="font-style:italic;opacity:0.9;">VD: PH gọi giọng gấp gáp → nhận ra họ đang lo lắng → điều chỉnh giọng nói bình tĩnh, trấn an trước.</p>
  </div>
  <div style="background:linear-gradient(135deg,#2563EB,#1D4ED8);color:#fff;padding:15px;border-radius:8px;">
    <h4 style="margin:0;">E — Empathize (Đồng cảm)</h4>
    <p style="margin:5px 0 0;">Đặt mình vào vị trí KH, ghi nhận cảm xúc của họ bằng lời.</p>
    <p style="font-style:italic;opacity:0.9;">VD: "Em hiểu anh/chị lo lắng khi bé chưa bắt nhịp được. Đây là điều hoàn toàn bình thường ở giai đoạn đầu ạ."</p>
  </div>
  <div style="background:linear-gradient(135deg,#059669,#047857);color:#fff;padding:15px;border-radius:8px;">
    <h4 style="margin:0;">R — Respond (Phản hồi)</h4>
    <p style="margin:5px 0 0;">Đưa ra giải pháp CỤ THỂ, có timeline rõ ràng.</p>
    <p style="font-style:italic;opacity:0.9;">VD: "Em sẽ trao đổi với GV ngay hôm nay và phản hồi lại anh/chị trước 5h chiều mai ạ."</p>
  </div>
  <div style="background:linear-gradient(135deg,#D97706,#B45309);color:#fff;padding:15px;border-radius:8px;">
    <h4 style="margin:0;">V — Value (Trân trọng)</h4>
    <p style="margin:5px 0 0;">Cảm ơn KH vì đã tin tưởng, vì đã chia sẻ, vì đã kiên nhẫn.</p>
    <p style="font-style:italic;opacity:0.9;">VD: "Em rất trân trọng việc anh/chị luôn theo sát quá trình học của bé. Điều này giúp em và GV hỗ trợ bé tốt hơn rất nhiều."</p>
  </div>
  <div style="background:linear-gradient(135deg,#7C3AED,#6D28D9);color:#fff;padding:15px;border-radius:8px;">
    <h4 style="margin:0;">E — Exceed (Vượt mong đợi)</h4>
    <p style="margin:5px 0 0;">Làm hơn những gì KH kỳ vọng — tạo "wow moment".</p>
    <p style="font-style:italic;opacity:0.9;">VD: Sau khi giải quyết xong, gửi riêng video bé làm bài trên lớp + lời nhận xét cá nhân.</p>
  </div>
</div>`,
            quiz: {
              id: "quiz_csk12_d4_s5",
              title: "Quiz: S.E.R.V.E",
              questions: [
                {
                  q: "Chữ 'S' trong S.E.R.V.E nghĩa là gì?",
                  options: ["Service", "See (Nhìn nhận)", "Solve", "Support"],
                  correct: 1,
                  explanation: "S = See — Quan sát và nhận diện nhu cầu KH TRƯỚC KHI họ nói ra."
                },
                {
                  q: "Bước 'Respond' yêu cầu CS làm gì?",
                  options: ["Trả lời nhanh nhất có thể", "Đưa giải pháp CỤ THỂ, có timeline rõ ràng", "Chuyển cho quản lý", "Nói 'em sẽ kiểm tra'"],
                  correct: 1,
                  explanation: "Respond = phản hồi bằng giải pháp CỤ THỂ + timeline rõ ràng — không chung chung."
                },
                {
                  q: "'Exceed' có nghĩa gì trong context CSKH?",
                  options: ["Vượt quá quy định", "Làm hơn những gì KH kỳ vọng — tạo wow moment", "Exceed budget", "Vượt KPI"],
                  correct: 1,
                  explanation: "Exceed = Vượt mong đợi — làm thêm điều nhỏ nhưng ấn tượng mà KH không ngờ tới."
                },
                {
                  q: "PH gọi giọng gấp gáp, theo S.E.R.V.E bước đầu tiên CS nên làm gì?",
                  options: ["Hỏi ngay vấn đề gì", "See — nhận ra PH đang lo lắng → điều chỉnh giọng bình tĩnh, trấn an trước", "Chuyển cho CSL", "Nói PH bình tĩnh"],
                  correct: 1,
                  explanation: "S (See) — Nhận diện trạng thái KH trước khi bắt đầu xử lý. PH gấp gáp → trấn an trước."
                },
                {
                  q: "Ví dụ nào thể hiện bước 'Value' đúng cách?",
                  options: ["'Cảm ơn anh/chị đã liên hệ' (máy móc)", "'Em rất trân trọng việc anh/chị luôn theo sát quá trình học của bé'", "'Vâng ạ'", "'Em ghi nhận'"],
                  correct: 1,
                  explanation: "Value = cảm ơn CỤ THỂ vì điều KH đã làm — không phải câu cảm ơn máy móc."
                }
              ]
            }
          },
{
            id: "csk12_d4_s6",
            title: "Xử lý tình huống & Phàn nàn",
            icon: "🛡️",
            content: `<h3>Xử lý 5 tình huống phổ biến</h3>

<div class="mindset-section">
  <div class="mindset-card growth">
    <h4>1. HV vắng nhiều</h4>
    <div class="quote-block">"Dạ em chào anh/chị. Em thấy bé [Tên] đã vắng [X] buổi gần đây. Em muốn hỏi thăm — bé có gặp khó khăn gì trong việc đi học không ạ?"<br><br>[Lắng nghe → Đề xuất: đổi lịch / học bù / hỗ trợ riêng từ GV]<br><br>"Em sẽ sắp xếp [giải pháp] để bé không bị mất kiến thức ạ."</div>
  </div>

  <div class="mindset-card customer">
    <h4>2. PH muốn bảo lưu</h4>
    <div class="quote-block">"Dạ em hiểu anh/chị. Trước khi xử lý bảo lưu, em xin phép hỏi thêm — lý do cụ thể là gì ạ?"<br><br>[Nếu lý do có thể giải quyết: đề xuất chuyển lớp/đổi lịch/hỗ trợ GV]<br>[Nếu lý do bất khả kháng: hỗ trợ bảo lưu, giải thích quyền lợi]<br><br>"Quyền lợi bảo lưu của anh/chị: [X] ngày. Khi quay lại, em sẽ sắp xếp lớp phù hợp nhất cho bé ạ."</div>
  </div>

  <div class="mindset-card dna">
    <h4>3. PH muốn chuyển khối/chuyển lớp</h4>
    <div class="quote-block">"Dạ em hiểu ạ. Em kiểm tra ngay lớp [Tên khóa mới] phù hợp cho bé. [Check hệ thống]<br><br>Hiện có lớp [Thứ/Giờ] tại [Cơ sở], bắt đầu ngày [X]. Anh/chị thấy lịch này phù hợp không ạ?"</div>
  </div>
</div>

<h3 style="margin-top:20px;">Xử lý phàn nàn — Nguyên tắc 5 bước</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.88em;">
  <tr style="background:#E31F26;color:#fff;"><th style="padding:8px;">Bước</th><th style="padding:8px;">Hành động</th><th style="padding:8px;">Script mẫu</th></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">1. Lắng nghe</td><td style="padding:8px;border:1px solid #eee;">Không ngắt lời, ghi chú nhanh</td><td style="padding:8px;border:1px solid #eee;">"Dạ, em lắng nghe ạ…"</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">2. Đồng cảm</td><td style="padding:8px;border:1px solid #eee;">Ghi nhận cảm xúc PH</td><td style="padding:8px;border:1px solid #eee;">"Em hiểu anh/chị rất không hài lòng về việc này…"</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">3. Xin lỗi</td><td style="padding:8px;border:1px solid #eee;">Xin lỗi về trải nghiệm, không tranh luận đúng/sai</td><td style="padding:8px;border:1px solid #eee;">"Em xin lỗi vì sự bất tiện này ạ."</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">4. Giải pháp</td><td style="padding:8px;border:1px solid #eee;">Đề xuất cụ thể, có timeline</td><td style="padding:8px;border:1px solid #eee;">"Em sẽ [hành động cụ thể] và phản hồi lại trước [thời gian]."</td></tr>
  <tr><td style="padding:8px;border:1px solid #eee;font-weight:600;">5. Follow-up</td><td style="padding:8px;border:1px solid #eee;">Gọi lại xác nhận đã giải quyết</td><td style="padding:8px;border:1px solid #eee;">"Anh/chị ơi, vấn đề hôm trước đã được xử lý chưa ạ?"</td></tr>
</table>`,
            quiz: {
              id: "quiz_csk12_d4_s6",
              title: "Quiz: Xử lý tình huống",
              questions: [
                {
                  q: "Khi PH muốn bảo lưu, CS nên làm gì ĐẦU TIÊN?",
                  options: ["Làm bảo lưu ngay", "Hỏi lý do cụ thể để xem có giải pháp khác", "Chuyển cho CSL", "Nói PH suy nghĩ thêm"],
                  correct: 1,
                  explanation: "Hỏi lý do trước — nếu lý do có thể giải quyết (đổi lịch, đổi GV...) thì đề xuất giải pháp thay vì bảo lưu."
                },
                {
                  q: "Trong 5 bước xử lý phàn nàn, bước nào nên làm SAU CÙNG?",
                  options: ["Lắng nghe", "Xin lỗi", "Đề xuất giải pháp", "Follow-up xác nhận đã giải quyết"],
                  correct: 3,
                  explanation: "Bước 5: Follow-up — gọi lại xác nhận vấn đề đã được giải quyết. Nhiều CS bỏ qua bước này."
                },
                {
                  q: "Khi xử lý phàn nàn, CS có nên tranh luận đúng/sai với PH không?",
                  options: ["Có, nếu MindX đúng", "Không — xin lỗi về trải nghiệm, không tranh luận", "Tùy trường hợp", "Có, để PH hiểu rõ"],
                  correct: 1,
                  explanation: "Không tranh luận đúng/sai. CS xin lỗi về TRẢI NGHIỆM của PH, tập trung vào GIẢI PHÁP."
                },
                {
                  q: "HV vắng 3 buổi liên tiếp, CS nên?",
                  options: ["Chỉ ghi nhận trên LMS", "Gọi PH + escalate lên CSL", "Chờ PH tự liên hệ", "Nhắn Zalo"],
                  correct: 1,
                  explanation: "3+ buổi vắng = cần escalate lên CSL, đồng thời gọi PH tìm hiểu và đề xuất bảo lưu/chuyển lớp."
                },
                {
                  q: "Bước 'Đồng cảm' trong xử lý phàn nàn nên thể hiện thế nào?",
                  options: ["Nói 'Em hiểu' rồi chuyển sang giải pháp", "'Em hiểu anh/chị rất không hài lòng về việc này' — ghi nhận cảm xúc cụ thể", "Im lặng", "'Chuyện này nhỏ thôi ạ'"],
                  correct: 1,
                  explanation: "Đồng cảm = ghi nhận cảm xúc CỤ THỂ của PH, không phải nói 'em hiểu' chung chung."
                }
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
            id: "csk12_d5_s1",
            title: "Bài kiểm tra tổng hợp CS K12",
            icon: "📝",
            content: `<h3>Bài kiểm tra tổng hợp CS K12</h3>
<div class="insight-card">
  <div class="insight-number">🎯</div>
  <div class="insight-body">
    <h4>Thông tin bài kiểm tra</h4>
    <ul>
      <li><strong>Số câu:</strong> 30 câu trắc nghiệm</li>
      <li><strong>Thời gian:</strong> 30 phút</li>
      <li><strong>Nội dung:</strong> Tổng quan MindX, tư duy dịch vụ, sản phẩm K12, vận hành lớp học, chăm sóc KH, D.I.S.C</li>
      <li><strong>Điểm pass:</strong> ≥ 7/10 (tương đương ≥ 21/30 câu đúng)</li>
      <li><strong>Không pass:</strong> Ôn lại nội dung và thi lại</li>
    </ul>
  </div>
</div>
<p style="margin-top:16px;font-size:0.9rem;font-weight:600;">👇 Bấm nút bên dưới để bắt đầu bài kiểm tra tổng hợp 30 câu!</p>`,
            quiz: {
              id: "quiz_csk12_final",
              title: "Kiểm tra tổng hợp CS K12 (30 câu — 30 phút)",
              timer: 1800,
              questions: [
                { q: "MindX được thành lập vào năm nào?", options: ["2013", "2014", "2015", "2016"], correct: 2, explanation: "MindX (Techkids) thành lập năm 2015." },
                { q: "Sứ mệnh của MindX là gì?", options: ["Đào tạo nghề IT", "Trang bị kỹ năng công nghệ cho thế hệ trẻ Việt Nam", "Bán khóa học online", "Phát triển phần mềm"], correct: 1, explanation: "Sứ mệnh MindX: Trang bị kỹ năng công nghệ cho thế hệ trẻ Việt Nam." },
                { q: "CSL trong cấu trúc BU là viết tắt của?", options: ["Center Sales Leader", "Customer Service Leader", "Customer Support Lead", "Center Service Lead"], correct: 1, explanation: "CSL = Customer Service Leader." },
                { q: "CS khác Sale ở KPI nào?", options: ["Doanh thu", "Retention, satisfaction, re-enroll", "Số lead", "Số cuộc gọi"], correct: 1, explanation: "CS tập trung retention, satisfaction, re-enroll." },
                { q: "Tư duy 'Đồng hành' nghĩa là?", options: ["Hỗ trợ khi được yêu cầu", "Ở bên HV suốt hành trình học tập", "Làm thay cho HV", "Chỉ xử lý sự cố"], correct: 1, explanation: "Đồng hành = ở bên suốt hành trình, không chỉ xuất hiện khi có vấn đề." },
                { q: "Có bao nhiêu tư duy dịch vụ cốt lõi của CS MindX?", options: ["4", "5", "6", "8"], correct: 2, explanation: "6 tư duy: Lấy HV làm trung tâm, Đồng hành, Chủ động & Giải pháp, Cải tiến, Hơn cả mong đợi, Gắn kết sứ mệnh." },
                { q: "Lộ trình Coding bắt đầu từ bao nhiêu tuổi?", options: ["4+", "6+", "8+", "10+"], correct: 3, explanation: "Coding bắt đầu từ 10+ với Scratch Creator." },
                { q: "Lộ trình nào bắt đầu sớm nhất (4+)?", options: ["Coding", "Art & Design", "Robotics", "Cả Art và Robotics"], correct: 3, explanation: "Cả Art (Little Artist 4+) và Robotics (Kỹ sư Robot nhí 4+) đều bắt đầu từ 4 tuổi." },
                { q: "Python được dạy ở năm thứ mấy của lộ trình Coding?", options: ["Năm 1", "Năm 2", "Năm 3", "Năm 4"], correct: 1, explanation: "Python: Game Creator — Năm 2." },
                { q: "Thiết bị nào dùng cho Robotics cấp cao?", options: ["LEGO Education", "LEGO Spike", "VEX IQ/EXP/V5", "Arduino"], correct: 2, explanation: "VEX IQ/EXP/V5 dùng cho ARM Robotics và Sáng tạo Robot." },
                { q: "Combo 24T có ưu đãi đặc biệt gì?", options: ["Free 3 tháng", "Giá tốt nhất + tặng áo MindX", "Giảm 50%", "Học thêm 1 lộ trình"], correct: 1, explanation: "Combo 24T: giá tốt nhất, tặng áo MindX, ưu tiên lớp." },
                { q: "Format tên Zalo group lớp học?", options: ["Tên GV + lớp", "MINDX-[Mã lớp]-[Tên CS]", "MindX Class", "Tùy CS"], correct: 1, explanation: "Chuẩn: MINDX-[Mã lớp]-[Tên CS phụ trách]." },
                { q: "CP1 diễn ra sau buổi thứ mấy?", options: ["Buổi 2-3", "Buổi 4-5", "Buổi 8", "Buổi 10"], correct: 1, explanation: "CP1 sau buổi 4-5." },
                { q: "Demo Day diễn ra vào buổi thứ mấy?", options: ["Buổi 8", "Buổi 10", "Buổi 13", "Buổi 14"], correct: 3, explanation: "Demo Day ở buổi 14 — trình bày sản phẩm cuối khóa." },
                { q: "Sĩ số tối thiểu offline tại mỗi cơ sở?", options: ["2 HV", "3 HV", "4 HV", "5 HV"], correct: 2, explanation: "Tối thiểu 4 HV offline tại mỗi cơ sở." },
                { q: "Nhiệt độ điều hòa chuẩn?", options: ["20-22°C", "22-24°C", "24-28°C", "28-30°C"], correct: 2, explanation: "24-28°C theo tiêu chuẩn cứng." },
                { q: "Ngày nào mặc đồng phục MindX?", options: ["T2-T4", "T5-CN", "Cả tuần", "Chỉ CN"], correct: 1, explanation: "T5-CN: đồng phục. T2-T4: trang phục lịch sự." },
                { q: "CS rời quầy lễ tân tối đa bao lâu?", options: ["2 phút", "5 phút", "10 phút", "15 phút"], correct: 1, explanation: "Tối đa 5 phút, không hoạt động cá nhân khi trực." },
                { q: "Phí chuyển nhượng khóa học?", options: ["5%", "10%", "15%", "20%"], correct: 1, explanation: "10% học phí còn lại. Miễn phí cho anh chị em ruột." },
                { q: "Hoàn phí: MindX giữ bao nhiêu %?", options: ["10%", "15%", "20%", "25%"], correct: 2, explanation: "MindX giữ 20% phí xử lý. Hoàn 80%." },
                { q: "Timeline dropout mất bao lâu?", options: ["3 ngày", "5 ngày", "7 ngày", "10 ngày"], correct: 1, explanation: "5 ngày làm việc: T+1 nộp, T+3 duyệt, T+5 hoàn tất." },
                { q: "CP0 — CS gọi PH sau buổi 1 bao lâu?", options: ["Ngay lập tức", "Sau 3 ngày", "Sau 1 tuần", "Sau 2 tuần"], correct: 1, explanation: "Gọi PH sau 3 ngày kể từ buổi 1." },
                { q: "Khi PH bất mãn với giọng căng thẳng, CS nên?", options: ["Thu thập thông tin", "Xử lý ngay", "Chờ email", "Báo CM"], correct: 1, explanation: "PH bất mãn → Xử lý ngay: liên hệ trực tiếp." },
                { q: "5 nguyên tắc xử lý khiếu nại bắt đầu bằng?", options: ["Giải thích lý do", "Tư duy tích cực", "Xin lỗi", "Gọi manager"], correct: 1, explanation: "Bắt đầu bằng 'Tư duy tích cực': mỗi khiếu nại là cơ hội cải thiện." },
                { q: "Type D trong D.I.S.C có đặc điểm gì?", options: ["Thích vui vẻ", "Nhanh gọn, data-driven", "Thích ổn định", "Cần data chi tiết"], correct: 1, explanation: "Type D: quyết đoán, nhanh gọn, 80% data." },
                { q: "PH hỏi 'Lớp có vui không? Gửi ảnh cho mình xem!' là type?", options: ["D", "I", "S", "C"], correct: 1, explanation: "Type I: thích vui, ảnh/video, hoạt động nhóm." },
                { q: "Type S cần được chăm sóc thế nào?", options: ["Nhanh gọn, data", "Gửi ảnh/video vui", "Ổn định, thông báo khi thay đổi", "Data chi tiết qua email"], correct: 2, explanation: "Type S: thích ổn định, cần thông báo trước khi có thay đổi." },
                { q: "HV chờ lớp chưa có lịch, CS cập nhật vào ngày?", options: ["T2, T4", "T3, T5", "T6, CN", "Hàng ngày"], correct: 1, explanation: "T3 và T5 hàng tuần cập nhật." },
                { q: "LMS dùng để làm gì?", options: ["Gửi email marketing", "Tạo lớp, điểm danh, checkpoint, nghiệm thu sản phẩm", "Chat với PH", "Đặt phòng họp"], correct: 1, explanation: "LMS: quản lý lớp học — tạo lớp, điểm danh, checkpoint, nghiệm thu." },
                { q: "Compass dùng để làm gì?", options: ["Điểm danh", "Gửi kết quả học tập cho PH", "Giao BTVN", "Tạo Zalo group"], correct: 1, explanation: "Compass: gửi kết quả, nhận xét, feedback từ GV cho PH." }
              ]
            }
          },
          {
            id: "csk12_d5_s2",
            title: "Hướng dẫn hệ thống",
            icon: "💻",
            content: `<h3>Hướng dẫn các hệ thống CS cần sử dụng</h3>

<div class="insight-card">
  <div class="insight-number">1</div>
  <div class="insight-body">
    <h4>📊 LMS (Learning Management System)</h4>
    <ul>
      <li><strong>Tạo lớp:</strong> Nhập mã lớp, sĩ số, môn học, level, GV phụ trách</li>
      <li><strong>Điểm danh:</strong> Ghi nhận có mặt/vắng mặt mỗi buổi</li>
      <li><strong>Checkpoint:</strong> GV chấm điểm → CS review → Gửi kết quả PH</li>
      <li><strong>Nghiệm thu sản phẩm:</strong> Upload sản phẩm + video demo cuối khóa</li>
      <li><strong>Quản lý HV:</strong> Theo dõi status, chuyển lớp, rút lớp, bảo lưu, nghỉ ngang</li>
      <li><strong>Tạo ticket:</strong> Bảo lưu, dropout, hoàn phí — tất cả qua LMS</li>
    </ul>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">2</div>
  <div class="insight-body">
    <h4>📱 Compass</h4>
    <ul>
      <li><strong>Chức năng chính:</strong> Gửi kết quả học tập cho PH</li>
      <li>Sau mỗi CP, CS kiểm tra GV đã comment trên LMS → kết quả tự đồng bộ lên Compass</li>
      <li>PH nhận notification và xem kết quả trên app Compass</li>
    </ul>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">3</div>
  <div class="insight-body">
    <h4>📚 Denise</h4>
    <ul>
      <li><strong>Chức năng chính:</strong> Giao BTVN cho HV</li>
      <li>GV giao bài qua Denise sau mỗi buổi</li>
      <li>CS theo dõi tỷ lệ hoàn thành BTVN, nhắc nhở HV/PH nếu chưa làm</li>
      <li>Upload sản phẩm cuối khóa lên Denise</li>
    </ul>
  </div>
</div>

<div class="insight-card">
  <div class="insight-number">4</div>
  <div class="insight-body">
    <h4>💬 Zalo Group</h4>
    <ul>
      <li><strong>Format tên:</strong> MINDX-[Mã lớp]-[Tên CS]</li>
      <li><strong>Nội dung gửi:</strong> Lịch học, địa điểm, GV, dụng cụ, quy định nghỉ/bù, hướng dẫn Denise/Compass</li>
      <li><strong>Rules:</strong> Không spam, không quảng cáo ngoài MindX, giữ thông tin lịch sự, trả lời PH trong 2 giờ (giờ hành chính)</li>
      <li>Gửi ảnh/video lớp học định kỳ (đặc biệt cho Type I)</li>
    </ul>
  </div>
</div>`,
            quiz: null
          },
          {
            id: "csk12_d5_s3",
            title: "Hình ảnh & Tác phong CS",
            icon: "👔",
            content: `<h3>Hình ảnh & Tác phong CS chuyên nghiệp</h3>

<h4>Trang phục</h4>
<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:0.82rem;">
  <thead><tr style="background:#F7FAFC;"><th style="padding:8px;border:1px solid #E2E8F0;">Ngày</th><th style="padding:8px;border:1px solid #E2E8F0;">Quy định</th><th style="padding:8px;border:1px solid #E2E8F0;">Ghi chú</th></tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">T2 - T4</td><td style="padding:8px;border:1px solid #E2E8F0;">Trang phục lịch sự</td><td style="padding:8px;border:1px solid #E2E8F0;">Áo thun/sơ mi trơn, quần dài, giày</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">T5 - CN</td><td style="padding:8px;border:1px solid #E2E8F0;">Đồng phục MindX</td><td style="padding:8px;border:1px solid #E2E8F0;">Bắt buộc</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">Sự kiện</td><td style="padding:8px;border:1px solid #E2E8F0;">Đồng phục MindX</td><td style="padding:8px;border:1px solid #E2E8F0;">Tất cả nhân sự</td></tr>
    <tr><td style="padding:8px;border:1px solid #E2E8F0;">Ngồi quầy lễ tân</td><td style="padding:8px;border:1px solid #E2E8F0;">Đồng phục MindX</td><td style="padding:8px;border:1px solid #E2E8F0;">Bất kỳ ngày nào</td></tr>
  </tbody>
</table>

<h4>Tác phong lễ tân</h4>
<div class="insight-card">
  <div class="insight-number">🙋</div>
  <div class="insight-body">
    <ul>
      <li><strong>Khi KH đến:</strong> Đứng dậy → Chào hỏi kèm nụ cười → Hỏi nhu cầu → Hướng dẫn</li>
      <li><strong>Mời nước:</strong> Luôn mời nước khi KH ngồi chờ</li>
      <li><strong>Khi KH ra về:</strong> Đứng dậy tiễn, cảm ơn đã ghé thăm</li>
      <li><strong>Lưu ý:</strong> Không ăn uống, không hoạt động cá nhân tại quầy. Rời quầy tối đa 5 phút.</li>
    </ul>
  </div>
</div>

<h4>Phong thái chuyên nghiệp</h4>
<div class="insight-card">
  <div class="insight-number">✨</div>
  <div class="insight-body">
    <ul>
      <li><strong>Giọng nói:</strong> Rõ ràng, âm lượng vừa phải, không nói quá nhanh</li>
      <li><strong>Thái độ:</strong> Tôn trọng, kiên nhẫn, không cáu gắt dù KH khó tính</li>
      <li><strong>Năng lượng:</strong> Tích cực, chủ động, truyền cảm hứng</li>
      <li><strong>Tóc:</strong> Gọn gàng, sạch sẽ, không quá 1 màu tóc</li>
      <li><strong>Móng tay:</strong> Cắt gọn, sạch, tối đa 1cm, không vẽ cầu kỳ</li>
      <li><strong>Nước hoa:</strong> Nhẹ nhàng hoặc không dùng, đảm bảo không có mùi cơ thể</li>
    </ul>
  </div>
</div>

<h4>Checklist tác phong hàng ngày</h4>
<div class="checklist-grid">
  <div class="check-item"><span class="check-num">☐</span> Đồng phục/trang phục đúng quy định</div>
  <div class="check-item"><span class="check-num">☐</span> Bảng tên đeo đầy đủ</div>
  <div class="check-item"><span class="check-num">☐</span> Tóc gọn gàng, sạch sẽ</div>
  <div class="check-item"><span class="check-num">☐</span> Giọng nói rõ ràng, thái độ tích cực</div>
  <div class="check-item"><span class="check-num">☐</span> Đứng dậy chào KH khi đến/đi</div>
  <div class="check-item"><span class="check-num">☐</span> Quầy lễ tân gọn gàng</div>
  <div class="check-item"><span class="check-num">☐</span> Phòng học kiểm tra trước giờ</div>
  <div class="check-item"><span class="check-num">☐</span> Năng lượng tích cực suốt cả ngày</div>
</div>`,
            quiz: null
          }
        ]
      }
    ]
  }

};