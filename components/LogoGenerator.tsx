import React, { useState } from 'react';
import { generateCompanyLogo } from '../services/geminiService';
import { X, Wand2, Download, Loader2 } from 'lucide-react';

interface LogoGeneratorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoGenerator: React.FC<LogoGeneratorProps> = ({ isOpen, onClose }) => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    setError(null);
    try {
      const imageUrl = await generateCompanyLogo(prompt);
      setGeneratedImage(imageUrl);
    } catch (err) {
      setError("生成失败，请检查 API Key 配置或稍后重试。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Wand2 className="text-brand-600" /> 创嘉智木 Logo 生成器
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 flex-1 overflow-y-auto">
          <p className="text-slate-600 mb-4 text-sm">
            描述您希望的 Logo 风格（例如：结合木头材质与未来科技感，蓝色调，抽象几何形状）。
          </p>
          
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="输入设计灵感..."
            className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none resize-none h-24 mb-4 text-slate-700"
          />

          <button
            onClick={handleGenerate}
            disabled={isLoading || !prompt.trim()}
            className="w-full py-3 bg-gradient-to-r from-brand-600 to-tech-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
          >
            {isLoading ? <><Loader2 className="animate-spin" /> 正在设计...</> : '开始生成'}
          </button>

          {error && (
            <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          {generatedImage && (
            <div className="mt-6 space-y-4 animate-fade-in">
              <div className="bg-slate-100 rounded-xl p-4 flex items-center justify-center border border-slate-200">
                <img src={generatedImage} alt="Generated Logo" className="max-w-full h-auto max-h-64 rounded-lg shadow-sm" />
              </div>
              <a
                href={generatedImage}
                download="chuangjia-zhimu-logo.jpg"
                className="flex items-center justify-center gap-2 w-full py-2 border-2 border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors"
              >
                <Download size={18} /> 下载 Logo
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};