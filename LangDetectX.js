/**
 * LangDetectX - Multi-language code snippet detector
 * Author: your_name
 * License: MIT
 */

const LANG_PATTERNS = {
  python: {
    keywords: /\b(def|import|from|as|print|self|class|async|await|lambda|with|yield)\b/,
    structure: /:\n\s+|if __name__ == ['"]__main__['"]/,
  },
  javascript: {
    keywords: /\b(function|const|let|var|import|export|async|await|console\.log|document\.|window\.|=>)\b/,
    structure: /\{[\s\S]*?\}/,
  },
  java: {
    keywords: /\b(public|private|protected|class|extends|implements|new|static|void|import|package)\b/,
    structure: /\bSystem\.out\.println|@Override\b/,
  },
  cpp: {
    keywords: /\b#include|namespace|std::|cout|cin|->|::|template\s*<|\bint\s+\*|\bchar\s+\*|#define\b/,
  },
  go: {
    keywords: /\bpackage|import|func|go\s|defer|fmt\.Println|:=\b/,
  },
  php: {
    keywords: /<\?php|echo|array\(|->|\bnamespace\b|\buse\b/,
  },
  shell: {
    keywords: /\b(echo|grep|awk|sed|cat|tar|scp|zip|unzip|docker|chmod|chown|curl|wget|bash|sh)\b/,
    structure: /\|\s*|\s&&\s|#!\/bin\/bash/,
  },
  sql: {
    keywords: /\b(SELECT|INSERT|UPDATE|DELETE|FROM|WHERE|JOIN|GROUP BY|ORDER BY|CREATE TABLE|ALTER|DROP)\b/i,
    structure: /;$/,
  },
  html: {
    keywords: /<(!DOCTYPE|html|head|body|div|span|script|style|meta|link)[^>]*>/i,
  },
  json: {
    structure: /^\s*\{[\s\S]*\}\s*$/,
  },
  rust: {
    keywords: /\bfn|let|mut|impl|pub|crate|use|mod|println!|::\b/,
  },
  ruby: {
    keywords: /\b(def|end|class|module|puts|require|begin|rescue|do)\b/,
  },
  swift: {
    keywords: /\bfunc|let|var|if|else|print|import|class|struct|protocol|extension\b/,
  },
  kotlin: {
    keywords: /\bfun|val|var|when|object|companion|data class|println\b/,
  },
  markdown: {
    keywords: /^#|##|###|\*{1,2}[\w\s]+?\*{1,2}|\[.*\]\(.*\)/,
  },
  dockerfile: {
    keywords: /\b(FROM|RUN|COPY|ADD|CMD|ENTRYPOINT|WORKDIR|ENV|EXPOSE)\b/,
  },
};

export function detectLanguage(codeText) {
  let scores = {};
  for (const [lang, { keywords, structure }] of Object.entries(LANG_PATTERNS)) {
    let score = 0;
    if (keywords && keywords.test(codeText)) score += 2;
    if (structure && structure.test(codeText)) score += 1;
    scores[lang] = score;
  }
  const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
  return best && best[1] > 0 ? best[0] : "unknown";
}

// Example usage
if (import.meta.main) {
  const sample = `
  def greet(name):
      print("Hello", name)
  `;
  console.log("Detected:", detectLanguage(sample)); // python
}

