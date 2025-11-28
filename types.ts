import React from 'react';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imagePrompt: string; // For placeholder generation if needed
  themeColor: string;
  icon: React.ReactNode;
}

export interface GeneratedImage {
  url: string;
  prompt: string;
}