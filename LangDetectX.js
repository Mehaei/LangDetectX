// LangDetectX - Pure JS Language Detector
// Author: Mehaei
// License: MIT

(function (global) {
  const LangDetectX = {
    detect(text) {
      text = text.trim();

      // Natural language detection
      const patterns = {
        Chinese: /[\u4e00-\u9fa5]/,
        Japanese: /[\u3040-\u30ff\u31f0-\u31ff]/,
        Korean: /[\uac00-\ud7af]/,
        Russian: /[А-Яа-яЁё]/,
        French: /\b(le|la|de|une|bonjour|merci)\b/i,
        Spanish: /\b(el|la|de|una|hola|gracias)\b/i,
        German: /\b(der|die|das|und|danke)\b/i,
        English: /\b(the|and|this|function|class)\b/i
      };

      for (let [lang, regex] of Object.entries(patterns)) {
        if (regex.test(text)) return lang;
      }

      // Programming language detection
      const langPatterns = [
        { name: "Python", regex: /\b(def|import|print|self|None|lambda)\b/ },
        { name: "JavaScript", regex: /\b(function|const|let|=>|console\.log)\b/ },
        { name: "TypeScript", regex: /\b(interface|implements|enum|type)\b/ },
        { name: "C++", regex: /\b#include|std::|cout|cin|->|\*\b/ },
        { name: "C", regex: /\b#include|printf|scanf|malloc\b/ },
        { name: "Java", regex: /\b(public|static|void|class|System\.out)\b/ },
        { name: "Go", regex: /\b(func|package|import|fmt|go\s)/ },
        { name: "Rust", regex: /\b(fn|let mut|pub struct|impl|crate)\b/ },
        { name: "PHP", regex: /<\?php|\becho\b|\$\w+/ },
        { name: "SQL", regex: /\b(SELECT|INSERT|UPDATE|DELETE|FROM|WHERE)\b/i },
        { name: "Shell", regex: /\b(ls|grep|echo|chmod|scp|tar|zip|docker|cat|awk|sed)\b/ },
        { name: "HTML", regex: /<html|<body|<\/div>|<!DOCTYPE html>/i },
        { name: "CSS", regex: /\b(color|background|font-size|display|flex)\b/ },
        { name: "Ruby", regex: /\b(def|end|puts|class|module)\b/ },
        { name: "R", regex: /\b<-|library\(|data\.frame\(|ggplot\(/ },
        { name: "Perl", regex: /\b(use|my|print|sub)\b/ }
      ];

      for (let lang of langPatterns) {
        if (lang.regex.test(text)) return lang.name;
      }

      return "Unknown";
    }
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = LangDetectX;
  } else {
    global.LangDetectX = LangDetectX;
  }
})(this);
