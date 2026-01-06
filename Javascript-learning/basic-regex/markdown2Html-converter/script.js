const mdInput = document.getElementById("markdown-input");
const output = document.getElementById("html-output");
const preview = document.getElementById("preview");

const MD = [
  /^(?:\s*#\s)(.+)$/m,
  /^(?:\s*##\s)(.+)$/m,
  /^(?:\s*###\s)(.+)$/m,
  /^(?:\s*\*\*|__)(.+)(?:\s*\*\*|__)$/,
  /^(?:\s*\*|_)(.+)(?:\s*\*|_)$/,
  /^(?:\s*\!\[)([^\]]+)(?:\]\()(.+?)(?:\).*)$/,
  /^(?:\s*\[)([^\]]+)(?:\]\()([^\)]+)(?:\).*)$/,
  /^(?:\s*>\s)(.+)$/m
];

const checkMatch = str => {
  for (let i=0; i < MD.length; i++) {
    let match = str.match(MD[i])
    if (match) return [i, ...match];
  }
  return null;
}


const applyInline = (text = "") => {
  // Ảnh: ![alt](src)
  text = text.replace(/!\[([^\]]*)\]\((.+?)\)/g, '<img alt="$1" src="$2">');
  // Link: [label](href)
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  // Bold: **...** hoặc __...__
  text = text.replace(/(\*\*|__)(.+?)\1/g, '<strong>$2</strong>');
  // Italic: *...* (không phải **...**) hoặc _..._ (không phải __...__)
  text = text.replace(/\*(?!\*)(.+?)\*(?!\*)/g, '<em>$1</em>');
  text = text.replace(/_(?!_)(.+?)_(?!_)/g, '<em>$1</em>');
  return text;
};


const convertToRawHTML = (reIndx, mdStr1, mdStr2 = "") => {
  switch (reIndx) {
    case 0: return `<h1>${applyInline(mdStr1)}</h1>`;
    case 1: return `<h2>${applyInline(mdStr1)}</h2>`;
    case 2: return `<h3>${applyInline(mdStr1)}</h3>`;
    case 3: return `<strong>${applyInline(mdStr1)}</strong>`;
    case 4: return `<em>${applyInline(mdStr1)}</em>`;
    case 5: return `<img alt="${applyInline(mdStr1)}" src="${applyInline(mdStr2)}">`;
    case 6: return `<a href="${applyInline(mdStr2)}">${applyInline(mdStr1)}</a>`;
    case 7: return `<blockquote>${applyInline(mdStr1)}</blockquote>`;
    default: return mdStr1;
  }
}

const convertMarkdown = () => {
  const raw = mdInput.value;
  const lines = raw.split(/\r?\n/);
  let finalHtml = "";
  for (const line of lines) {
    if (line.trim() === "") {
      continue;
    }
    const match = checkMatch(line);
    if (!match) {
      finalHtml += line;
      continue;
    }
    const html = convertToRawHTML(match[0], match[2], match[3]); 
    finalHtml += html;
  }
    output.textContent = finalHtml;
    preview.innerHTML = finalHtml;
    return finalHtml;
}

mdInput.addEventListener("input", convertMarkdown);
