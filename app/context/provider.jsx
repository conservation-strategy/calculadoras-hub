'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';
import data from './language.json';

export const ENGLISH = 'en';
export const PORTUGUESE = 'pt';
export const SPANISH = 'es';
export const languages = [ENGLISH, SPANISH, PORTUGUESE];

const findContent = (language) => {
    const content = data.filter((item) => item.id === language);
    return content[0];
}

const AppContext = createContext();

export function AppProvider({ children }) {
  const [language, setLanguage] = useState(SPANISH); 
  const [content, setContent] = useState(findContent(ENGLISH))

  useEffect(() => {
    setContent(findContent(language));
  }, [language])

  const value = {
    language,
    setLanguage,
    content
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useLanguage() {
  const context = useContext(AppContext);
  const { language, setLanguage, content } = context;
  return { language, setLanguage, content }
}