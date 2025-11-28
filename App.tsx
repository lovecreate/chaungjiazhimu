import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { Bot, Cpu, Cloud, ChevronDown, Sparkles, User, Layers, Leaf } from 'lucide-react';

// ============================================================================
// 🔧 CONFIGURATION: Replace these image URLs with your own assets
// Tips: You can use local paths like "/assets/robot.jpg" or remote URLs.
// ============================================================================

// Main Hero Background (High-end, Abstract, Dark Tech)
const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop";

// Project Images
// 提示：如果您想使用本地图片（例如您上传的星星眼照片），请将其放入 public 文件夹
// 并将下方的链接改为 "/xiaole.png" (假设您的文件名为 xiaole.png)
const XIAOLE_IMAGE_URL = "/xiaole.png"; 
const ANOTHER_ME_IMAGE_URL = "/anotherme.png";
const DESKTOP_BOT_IMAGE_URL = "/桌宠机器人.png";
const MUXIN_IMAGE_URL = "/muxin.png";

// ============================================================================

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-brand-200 selection:text-brand-900 bg-slate-50 relative">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">
        {/* Sophisticated Abstract Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE_URL}
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 transform scale-105"
          />
          
          {/* Gradient Overlays for Text Readability and Mood */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-slate-950/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.08),transparent_60%)]"></div>
          
          {/* Animated ambient light effects */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-500/10 rounded-full mix-blend-screen blur-[100px] animate-pulse duration-[4000ms]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full mix-blend-screen blur-[120px] animate-pulse delay-700 duration-[5000ms]"></div>
          
          {/* Tech Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center h-full pt-16">
          
          {/* Enhanced Logo Visual */}
          <div className="mb-12 relative group cursor-default">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-500 via-white/20 to-tech-500 blur-[40px] opacity-30 group-hover:opacity-50 transition-opacity duration-1000"></div>
            <div className="relative w-32 h-32 md:w-36 md:h-36 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-black/50 transform group-hover:scale-105 transition-transform duration-700 ring-1 ring-white/20">
               {/* Custom Logo Concept */}
               <div className="relative grid place-items-center">
                  <Leaf size={72} className="text-brand-400 absolute transform -translate-x-2 -translate-y-2 drop-shadow-[0_0_15px_rgba(74,222,128,0.6)]" strokeWidth={1.5} />
                  <Cpu size={72} className="text-tech-400 absolute transform translate-x-2 translate-y-2 opacity-90 drop-shadow-[0_0_15px_rgba(96,165,250,0.6)]" strokeWidth={1.5} />
               </div>
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400 filter drop-shadow-lg">
              创嘉智木
            </span>
          </h1>
          
          <div className="flex items-center gap-6 mb-12 opacity-80">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-brand-400"></div>
            <p className="text-brand-300 uppercase tracking-[0.3em] text-sm font-bold">Chuangjia Zhimu</p>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-brand-400"></div>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-light tracking-wide mb-8 leading-tight">
            构筑具身智能生态，<span className="text-brand-400 font-normal">探索人机共情边界</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-300 font-light tracking-wide mb-16 max-w-4xl leading-relaxed mix-blend-screen">
            创嘉智木将前沿 AI 技术注入物理实体，让机器拥有温度。
            <br className="hidden md:block" />
            以 <strong className="text-slate-100 font-normal">沐心大模型</strong> 为情感中枢，驱动 <strong className="text-brand-300 font-normal">小乐机器人</strong> 与 <strong className="text-brand-300 font-normal">桌面灵宠</strong> 的具身交互，<br/>
            通过 <strong className="text-brand-300 font-normal">Another Me</strong> 实现跨越时空的数字延续。我们不只制造硬件，更创造懂你的灵魂伴侣。
          </p>

          {/* Fixed Navigation Button */}
          <button 
            onClick={() => scrollToSection('xiaole')}
            className="group relative px-10 py-4 bg-white text-slate-950 rounded-full font-bold text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-5px_rgba(255,255,250,0.3)] flex items-center gap-3 overflow-hidden cursor-pointer"
          >
            <span>开启智慧纪元</span>
            <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-pulse duration-[3000ms]">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-slate-500 to-transparent"></div>
        </div>
      </header>

      {/* Projects Container with subtle texture */}
      <main className="relative z-20 bg-slate-50">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        
        {/* 1. Xiao Le Robot */}
        <Section
          id="xiaole"
          title="小乐机器人"
          subtitle="K12 具身智能教育平台"
          description="创嘉智木开山之作。它是链接物理世界与数字思维的桥梁。采用工业级全向轮底盘与高精度六轴机械臂，将抽象的算法逻辑转化为可见的物理运动。作为下一代 STEM 教育载体，小乐让孩子在互动中掌握 AI 时代的通识语言。"
          features={[
            "全向移动技术：麦克纳姆轮阵列，实现零半径转向与全方位平移",
            "精密操控：六自由度机械臂，支持毫米级抓取与高精度绘图",
            "可视化编程：将复杂代码积木化，直观培养计算思维与逻辑能力",
            "多模态交互：集成语音与视觉识别，懂指令，更懂陪伴"
          ]}
          imageSrc={XIAOLE_IMAGE_URL}
          bgColor="bg-white"
          accentColor="text-brand-600"
          icon={<Bot className="text-brand-600" />}
          imageStyle="clean" 
        />

        {/* 2. Another Me */}
        <Section
          id="anotherme"
          title="Another Me"
          subtitle="超写实数字人与精神复刻"
          description="以数字形式，延续爱的永恒。Another Me 基于生成式对抗网络 (GANs) 与大语言模型工作流，仅需少量影像资料即可重建高保真 3D 数字形象。植入个性化记忆芯片，完美复刻亲人的性格特质与语言习惯，实现‘数字永生’。"
          features={[
            "光场重建：基于 NerF 技术，毫米级还原面部微表情与皮肤纹理",
            "性格克隆：深度学习个人语料库，复刻独特的说话神态与思维方式",
            "端侧隐私计算：核心数据本地化处理，独立的 AI 芯片保障绝对安全",
            "全息临场：支持 VR/AR/MR 多终端接入，打破生与死的物理隔阂"
          ]}
          imageSrc={ANOTHER_ME_IMAGE_URL}
          reverse={true}
          bgColor="bg-slate-50"
          accentColor="text-brand-600"
          icon={<User className="text-brand-600" />}
        />

        {/* 3. Desktop Pet Robot */}
        <Section
          id="desktopbot"
          title="桌宠机器人"
          subtitle="桌面级情感交互终端"
          description="由嵌入式 AI 芯片驱动的‘桌面精灵’。它突破了传统屏幕交互的限制，通过多组高精度金属舵机与视觉传感器，拥有了观察世界与表达情绪的能力。它不仅是一个硬件，更是你桌面上一只会思考、会互动的机械生命。"
          features={[
            "情感计算引擎：实时识别人脸表情，基于心理学模型给予温暖回应",
            "主动视觉交互：具备物体追踪与人脸跟随能力，目光所至，皆是关注",
            "仿生运动控制：多自由度协同，模拟生物般的呼吸感与灵动姿态",
            "OTA 云端进化：接入智木云脑，技能包持续更新，越用越聪明"
          ]}
          imageSrc={DESKTOP_BOT_IMAGE_URL}
          bgColor="bg-white"
          accentColor="text-brand-600"
          icon={<Cpu className="text-brand-600" />}
        />

        {/* 4. Muxin Large Model */}
        <Section
          id="muxin"
          title="沐心大模型"
          subtitle="多模态情感认知大模型"
          description="赋予机器‘心’的能力。沐心大模型是创嘉智木的核心技术底座，基于自研百万级心理咨询与情感对话数据集进行全参数微调。它超越了冷冰冰的逻辑推理，具备深度的共情能力与情绪感知力，让每一次人机对话都充满温度。"
          features={[
            "垂直领域精调：专注于心理支持与情感陪伴，更懂人类细腻的情绪",
            "多模态融合：综合分析语音语调、文本语义与面部微表情",
            "拟人化人格：具备长期记忆与个性化性格，拒绝机械式的问答",
            "伦理安全护栏：内置严格的价值观对齐机制，守护每一份信任"
          ]}
          imageSrc={MUXIN_IMAGE_URL}
          reverse={true}
          bgColor="bg-slate-50"
          accentColor="text-brand-600"
          icon={<Cloud className="text-brand-600" />}
        />
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900 relative overflow-hidden">
        {/* Footer Ambient Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
           <div className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] bg-brand-900/20 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-[0px] right-[0px] w-[500px] h-[500px] bg-tech-900/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h3 className="text-white text-2xl font-bold flex items-center gap-2">
              {/* Consistent Logo in Footer */}
               <div className="relative w-8 h-8 mr-1">
                  <Leaf size={20} className="text-brand-500 absolute top-0 left-0" />
                  <Cpu size={20} className="text-tech-500 absolute bottom-0 right-0 opacity-80" />
               </div>
               创嘉智木
            </h3>
            <p className="text-slate-500 leading-relaxed max-w-md text-lg">
              以具身智能重塑生命形态，以情感计算传递科技温情。<br/>
              我们致力于构建人机共生的未来，让 AI 成为人类温暖的伙伴。
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg tracking-wide">创新项目</h4>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection('xiaole')} className="hover:text-brand-400 transition-colors">小乐机器人</button></li>
              <li><button onClick={() => scrollToSection('anotherme')} className="hover:text-brand-400 transition-colors">Another Me</button></li>
              <li><button onClick={() => scrollToSection('desktopbot')} className="hover:text-brand-400 transition-colors">桌宠机器人</button></li>
              <li><button onClick={() => scrollToSection('muxin')} className="hover:text-brand-400 transition-colors">沐心大模型</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg tracking-wide">联系我们</h4>
            <div className="space-y-4 text-base">
              <p className="hover:text-white transition-colors">info@chuangjiazhimu.com</p>
              <p className="hover:text-white transition-colors">+86 10 8888 8888</p>
              <p className="text-slate-600 text-sm pt-4">上海市浦东新区临港</p>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-slate-900 text-center text-sm text-slate-600 flex flex-col md:flex-row justify-between items-center px-8 relative z-10">
          <span>© {new Date().getFullYear()} 创嘉智木科技有限公司. All rights reserved.</span>
          <span className="mt-2 md:mt-0 opacity-50">Embodied Intelligence & Emotional Computing</span>
        </div>
      </footer>
    </div>
  );
};

export default App;