/* =========================================================
   陆文雨 · 个人展示平台  —  内容编辑区
   说明：你只需要修改下面的「能力数据」和「项目数据」即可，
        页面会自动渲染，无需懂前端。
   ========================================================= */

/* ---------- ① 个人能力（按类别分组） ---------- */
const SKILLS = [
  {
    group: "编程语言",
    icon: "🧠",
    items: ["Dart", "C / C++", "Python", "Java", "HTML / CSS", "JavaScript"],
  },
  {
    group: "移动 / 跨平台开发",
    icon: "📱",
    items: ["Flutter", "鸿蒙 OpenHarmony 适配", "BLoC 状态管理", "Provider", "屏幕适配", "本地存储"],
  },
  {
    group: "其他能力",
    icon: "🛠️",
    items: ["数据结构与算法", "Git 版本控制", "UI / 交互设计", "文档撰写", "团队协作"],
  },
];

/* ---------- ② 项目作品（这里放你做过的所有项目） ----------
   字段说明：
   - title:  项目名
   - year:   年份 / 时间段（留空 "" 则不显示年份标签）
   - desc:   一句话简介
   - tags:   技术标签（数组）
   - demo:   在线预览链接（没有可填 ""）
   - code:   源码 / 仓库链接（没有可填 ""）
   以下为从你本地 5 个真实 Flutter 项目提取的信息，年份待你确认后填写。
*/
const PROJECTS = [
  {
    title: "个人记账 App（Budget App）",
    year: "",
    desc: "个人记账与预算管理应用，支持收支记录、分类统计与饼图可视化，数据本地持久化。",
    tags: ["Flutter", "Dart", "Provider", "fl_chart", "鸿蒙适配"],
    demo: "",
    code: "",
  },
  {
    title: "跨端待办事项（Harmony Todo）",
    year: "",
    desc: "基于 BLoC 架构的待办事项应用，已适配 OpenHarmony 鸿蒙系统，支持多端屏幕适配。",
    tags: ["Flutter", "BLoC", "flutter_screenutil", "鸿蒙适配"],
    demo: "",
    code: "",
  },
  {
    title: "倒数日 / 纪念日倒计时（Countdown）",
    year: "",
    desc: "支持日历视图与多事件管理的倒计时应用，可记录重要日期并本地保存。",
    tags: ["Flutter", "table_calendar", "Provider", "intl", "鸿蒙适配"],
    demo: "",
    code: "",
  },
  {
    title: "矩阵计算器（Matrix Calculator）",
    year: "",
    desc: "线性代数工具应用，支持矩阵加减乘、转置、求逆与行列式计算，已做鸿蒙化。",
    tags: ["Flutter", "Dart", "Provider", "鸿蒙化依赖"],
    demo: "",
    code: "",
  },
  {
    title: "习惯养成 / 打卡（Habit Tracker）",
    year: "",
    desc: "习惯养成应用，支持习惯记录、连续打卡与统计，基于 Flutter 并已适配鸿蒙。",
    tags: ["Flutter", "Dart", "Provider", "鸿蒙适配"],
    demo: "",
    code: "",
  },
];

/* =========================================================
   以下为渲染逻辑，一般无需修改
   ========================================================= */

// 渲染能力
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILLS.map(
    (s) => `
    <div class="skill-group reveal">
      <h3>${s.icon} ${s.group}</h3>
      <ul>${s.items.map((i) => `<li>${i}</li>`).join("")}</ul>
    </div>`
  ).join("");
}

// 渲染项目
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = PROJECTS.map(
    (p) => `
    <article class="project reveal">
      <div class="project__top">
        <h3 class="project__title">${p.title}</h3>
        ${p.year ? `<span class="project__year">${p.year}</span>` : ""}
      </div>
      <p class="project__desc">${p.desc}</p>
      <div class="project__tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      <div class="project__links">
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">▶ 预览</a>` : ""}
        ${p.code ? `<a href="${p.code}" target="_blank" rel="noopener">⌨ 源码</a>` : ""}
        ${!p.demo && !p.code ? `<span style="color:#a0a7b8;font-size:14px;">（待补充链接）</span>` : ""}
      </div>
    </article>`
  ).join("");
}

// 滚动入场动画
function setupReveal() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
}

// 移动端菜单
function setupNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.querySelector(".nav__links");
  toggle.addEventListener("click", () => links.classList.toggle("is-open"));
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("is-open"))
  );
}

// 启动
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  setupReveal();
  setupNav();
  document.getElementById("year").textContent = new Date().getFullYear();
});
