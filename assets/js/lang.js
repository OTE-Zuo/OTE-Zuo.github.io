(function () {
  const translations = {
    "Zuo Research Group": "复旦大学左光正课题组",
    "Organic Thermoelectrics & Optoelectronics": "光热电材料与器件课题组",
    "Home": "首页",
    "Research": "研究方向",
    "Publications": "论文发表",
    "People": "团队成员",
    "News": "组内动态",
    "Join Us": "加入我们",
    "X-MOL Group Page": "X-MOL课题组主页",
    "X-MOL Group Page(中文版)": "X-MOL课题组主页",
    "X-MOL Group Page (中文版)": "X-MOL课题组主页",
    "Organic materials for energy, light and charge transport": "面向能量、光与电荷传输的有机材料",
    "Organic electronic materials and devices for energy conversion, sensing and flexible systems.": "面向能量转换、传感与柔性系统的有机电子材料与器件。",
    "We study organic thermoelectric materials, organic optoelectronic devices, photocatalytic hydrogen evolution, and multiscale modeling of charge, exciton and heat transport.": "我们研究有机热电材料、有机光电子器件、光催化产氢，以及电荷、激子和热传输的多尺度建模。",
    "Explore Research": "了解研究方向",
    "Join the Group": "加入课题组",
    "Research Focus": "研究重点",
    "From molecular design to device physics": "从分子设计到器件物理",
    "Organic Thermoelectrics": "有机热电材料",
    "High-performance organic thermoelectric materials, doping strategies, carrier transport and flexible thermoelectric devices.": "高性能有机热电材料、掺杂策略、载流子输运与柔性热电器件。",
    "Optoelectronic Devices": "光电子器件",
    "Organic thin-film devices, light absorption, exciton generation, charge separation and interfacial transport.": "有机薄膜器件、光吸收、激子产生、电荷分离与界面传输。",
    "Solar Fuel Conversion": "太阳能燃料转换",
    "Organic and hybrid photocatalysts for visible-light-driven hydrogen evolution and solar energy conversion.": "用于可见光驱动产氢和太阳能转换的有机及杂化光催化材料。",
    "Modeling & Simulation": "建模与模拟",
    "DFT, physical modeling and Monte Carlo simulation to understand transport mechanisms and guide material design.": "结合DFT、物理模型与蒙特卡洛模拟理解传输机制并指导材料设计。",
    "For Students": "学生培养",
    "Training at the interface of chemistry, materials, physics and devices": "在化学、材料、物理与器件交叉方向培养科研能力",
    "Students in the group are encouraged to connect experimental materials research with device fabrication, advanced characterization and theoretical analysis. We welcome motivated students from chemistry, materials science, physics, electronics, energy science and related backgrounds.": "课题组鼓励学生将实验材料研究与器件制备、先进表征和理论分析相结合。欢迎来自化学、材料科学、物理、电子、能源科学及相关背景的有志学生加入。",
    "Light, heat and charge transport in organic functional materials.": "有机功能材料中的光、热与电荷传输。",
    "Our research links molecular design, microstructure control, device fabrication and physical modeling to understand and optimize organic materials for energy conversion and optoelectronic applications.": "我们的研究将分子设计、微结构调控、器件制备与物理建模相结合，以理解并优化用于能量转换和光电子应用的有机材料。",
    "Direction 01": "方向 01",
    "Direction 02": "方向 02",
    "Direction 03": "方向 03",
    "Direction 04": "方向 04",
    "Organic thermoelectric materials and flexible devices": "有机热电材料与柔性器件",
    "We develop organic thermoelectric materials and devices by tuning molecular packing, doping, carrier concentration and thermal transport. The goal is to build efficient, flexible systems for low-grade heat harvesting and wearable electronics.": "我们通过调控分子堆积、掺杂、载流子浓度和热传输来发展有机热电材料与器件，目标是构建用于低品位热能收集和可穿戴电子的高效柔性系统。",
    "Doping control": "掺杂调控",
    "Charge transport": "电荷输运",
    "Flexible devices": "柔性器件",
    "Energy conversion": "能量转换",
    "Organic optoelectronic materials and devices": "有机光电子材料与器件",
    "We investigate light absorption, exciton generation, charge separation and interfacial transport in organic thin-film devices, connecting materials chemistry with device-level performance.": "我们研究有机薄膜器件中的光吸收、激子产生、电荷分离和界面传输，将材料化学与器件性能联系起来。",
    "Exciton physics": "激子物理",
    "Thin-film devices": "薄膜器件",
    "Interface engineering": "界面工程",
    "Photoresponse": "光响应",
    "Photocatalytic hydrogen evolution": "光催化产氢",
    "We design organic and hybrid photocatalytic materials to improve visible-light harvesting, charge separation and surface reaction kinetics for solar hydrogen production.": "我们设计有机及杂化光催化材料，以提升可见光吸收、电荷分离和表面反应动力学，用于太阳能制氢。",
    "Solar fuels": "太阳能燃料",
    "Hydrogen evolution": "析氢反应",
    "Photocatalysts": "光催化剂",
    "Structure-activity relationship": "构效关系",
    "DFT, physical models and Monte Carlo simulation": "DFT、物理模型与蒙特卡洛模拟",
    "We combine density functional theory, transport models and Monte Carlo simulation to understand energetic disorder, hopping transport, doping mechanisms and device physics.": "我们结合密度泛函理论、传输模型和蒙特卡洛模拟，理解能量无序、跳跃输运、掺杂机制和器件物理。",
    "Kinetic Monte Carlo": "动力学蒙特卡洛",
    "Transport models": "传输模型",
    "Device prediction": "器件预测",
    "Publications": "论文发表",
    "Selected publications": "代表性论文",
    "Before 2022": "2022年以前",
    "Group members": "团队成员",
    "We are building a collaborative research group across materials chemistry, device physics and computational modeling.": "我们正在建设一个横跨材料化学、器件物理与计算建模的合作型研究团队。",
    "Principal Investigator": "课题组负责人",
    "Prof. Guangzheng Zuo": "左光正 青年研究员 博士生导师",
    "Profile on X-MOL": "X-MOL个人主页",
    "Graduate Students": "研究生",
    "PhD and MSc students working on materials, devices, characterization and modeling.": "博士生和硕士生围绕材料、器件、表征与建模开展研究。",
    "Undergraduate Researchers": "本科生科研",
    "Motivated students interested in research training are welcome to contact the group.": "欢迎对科研训练感兴趣且积极主动的本科生联系课题组。",
    "Alumni": "毕业成员",
    "Alumni information will be updated as the group grows.": "毕业成员信息将随课题组发展持续更新。",
    "Group news": "组内动态",
    "Updates on publications, student awards, openings and group activities.": "发布论文、学生获奖、招生招聘和课题组活动等信息。",
    "May 11, 2026": "2026年5月11日",
    "Group website launched": "课题组网站上线",
    "The Zuo Research Group website is now online on GitHub Pages.": "左光正课题组网站已通过 GitHub Pages 上线。",
    "Openings for motivated students": "欢迎有志学生加入",
    "Students interested in organic electronics, energy conversion, flexible devices and computational modeling are encouraged to get in touch.": "欢迎对有机电子学、能量转换、柔性器件和计算建模感兴趣的学生联系课题组。",
    "We welcome curious students who want to build materials, understand mechanisms and make devices work.": "欢迎有好奇心、愿意制备材料、理解机制并推动器件实现的学生加入。",
    "Prospective graduate students and undergraduate researchers with backgrounds in chemistry, materials science, physics, electronics, energy science, computation or related fields are encouraged to contact the group.": "欢迎具有化学、材料科学、物理、电子、能源科学、计算或相关背景的研究生申请者和本科生科研同学联系课题组。",
    "Research training": "科研训练",
    "Students can work on organic material design, thin-film processing, device fabrication, thermoelectric and optoelectronic measurements, spectroscopy, photocatalysis and computational modeling.": "学生可参与有机材料设计、薄膜加工、器件制备、热电与光电子测试、光谱表征、光催化和计算建模等方向。",
    "Who we are looking for": "我们期待的成员",
    "We value careful experimental practice, clear physical thinking, independence, teamwork and the willingness to learn across disciplinary boundaries.": "我们重视严谨的实验习惯、清晰的物理思维、独立性、团队合作，以及跨学科学习的意愿。",
    "How to contact": "联系方式",
    "Please send a brief introduction, CV, research interests and transcript if available to gzzuo@fudan.edu.cn.": "请将个人简介、简历、研究兴趣以及成绩单（如有）发送至 gzzuo@fudan.edu.cn。",
    "Go to Publications": "前往论文发表页面"
  };

  const htmlTranslations = {
    "Young Principal Investigator, Doctoral Supervisor College of Intelligent Robotics and Advanced Manufacturing, Fudan University": "青年研究员，博士生导师<br>复旦大学智能机器人与先进制造学院",
    "Please send a brief introduction, CV, research interests and transcript if available to gzzuo@fudan.edu.cn.": "请将个人简介、简历、研究兴趣以及成绩单（如有）发送至 <strong><a href=\"mailto:gzzuo@fudan.edu.cn\">gzzuo@fudan.edu.cn</a></strong>。",
    "Dr. Guangzheng Zuo is a Young Principal Investigator and doctoral supervisor at the College of Intelligent Robotics and Advanced Manufacturing, Fudan University. He is a Shanghai Overseas High-Level Talent and an Alexander von Humboldt Fellow. He received his Ph.D. in Applied Physics from Linköping University, Sweden, and subsequently carried out postdoctoral research at the University of Potsdam, Germany, supported by the Alexander von Humboldt Foundation.": "左光正博士现任复旦大学智能机器人与先进制造学院青年研究员、博士生导师，入选上海市海外高层次人才计划，曾获德国洪堡学者资助。他于瑞典林雪平大学获得应用物理博士学位，随后在德国波茨坦大学开展博士后研究。",
    "His research focuses on thermoelectric materials and devices, optoelectronic materials and devices, charge transport modeling, and Monte Carlo simulations. His first-author and corresponding-author papers have appeared in leading journals including Nature Materials, Joule, Advanced Functional Materials, and Physical Review B. His work has also been covered by science media such as ScienceDaily and Phys.org.": "他的研究方向包括热电材料与器件、光电子材料与器件、电荷传输建模以及蒙特卡洛模拟。以第一作者或通讯作者身份在 <em>Nature Materials</em>、<em>Joule</em>、<em>Advanced Functional Materials</em>、<em>Physical Review B</em> 等期刊发表论文，相关工作曾被 <em>ScienceDaily</em>、<em>Phys.org</em> 等科学媒体报道。"
  };

  const titleTranslations = {
    "Zuo Research Group": "复旦大学左光正课题组",
    "Research | Zuo Research Group": "研究方向 | 复旦大学左光正课题组",
    "Publications | Zuo Research Group": "论文发表 | 复旦大学左光正课题组",
    "People | Zuo Research Group": "团队成员 | 复旦大学左光正课题组",
    "News | Zuo Research Group": "组内动态 | 复旦大学左光正课题组",
    "Join Us | Zuo Research Group": "加入我们 | 复旦大学左光正课题组",
    "Redirecting | Zuo Research Group": "正在跳转 | 复旦大学左光正课题组"
  };

  const normalize = (value) => value.replace(/\s+/g, " ").trim();
  const languageButton = document.querySelector("[data-language-toggle]");

  function applyLanguage(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.body.classList.toggle("is-zh", lang === "zh");

    document.querySelectorAll("p, div").forEach((element) => {
      if (element.closest("[data-zh-only]")) return;
      if (!element.dataset.langHtmlEn) element.dataset.langHtmlEn = element.innerHTML;
      if (!element.dataset.langTextEn) element.dataset.langTextEn = normalize(element.textContent);
      const key = element.dataset.langTextEn;
      if (htmlTranslations[key]) {
        element.innerHTML = lang === "zh" ? htmlTranslations[key] : element.dataset.langHtmlEn;
      }
    });

    document.querySelectorAll("h1, h2, h3, p, a, small, strong, li, span, time, button").forEach((element) => {
      if (element === languageButton) return;
      if (element.closest("[data-zh-only]")) return;
      if (element.children.length > 0) return;
      if (!element.dataset.langEn) element.dataset.langEn = element.textContent;
      const key = normalize(element.dataset.langEn);
      element.textContent = lang === "zh" && translations[key] ? translations[key] : element.dataset.langEn;
    });

    if (!document.documentElement.dataset.titleEn) document.documentElement.dataset.titleEn = document.title;
    const titleKey = document.documentElement.dataset.titleEn;
    document.title = lang === "zh" && titleTranslations[titleKey] ? titleTranslations[titleKey] : titleKey;

    if (languageButton) {
      languageButton.textContent = lang === "zh" ? "EN" : "中文";
      languageButton.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换到中文");
    }
    localStorage.setItem("siteLanguage", lang);
  }

  const initialLanguage = localStorage.getItem("siteLanguage") || (navigator.language && navigator.language.startsWith("zh") ? "zh" : "en");
  applyLanguage(initialLanguage);

  if (languageButton) {
    languageButton.addEventListener("click", () => {
      const nextLanguage = document.documentElement.lang === "zh-CN" ? "en" : "zh";
      applyLanguage(nextLanguage);
    });
  }
})();
