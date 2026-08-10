const fs = require('fs');
const path = require('path');

const files = [
  'examples/chatlogs/alej/alej-product-chat.md',
  'examples/chatlogs/varia/varia-validation-chat.md',
  'examples/chatlogs/varia/varia-research-chat.md',
  'examples/chatlogs/alexis/alexis-research-chat.md',
  'examples/chatlogs/alexis/alexis-product-chat.md',
  'examples/chatlogs/alexis/alexis-validation-chat.md',
  'examples/chatlogs/iris/iris-validation-chat.md',
  'examples/chatlogs/iris/iris-product-chat.md',
  'examples/chatlogs/iris/iris-research-chat.md',
  'examples/chatlogs/aubrey/aubrey-validation-chat.md',
  'examples/chatlogs/aubrey/aubrey-product-chat.md',
  'examples/chatlogs/aubrey/aubrey-research-chat.md',
  'examples/chatlogs/rachel/rachel-validation-chat.md',
  'examples/chatlogs/rachel/rachel-product-chat.md',
  'examples/chatlogs/rachel/rachel-research-chat.md'
];

files.forEach(filePath => {
  const absolutePath = path.resolve('/Users/alexisluo/tech4good/design-dir-2', filePath);
  if (!fs.existsSync(absolutePath)) return;
  const content = fs.readFileSync(absolutePath, 'utf8');
  const lines = content.split('\n');
  let currentSection = null;
  let userMessage = [];
  let userStartLine = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('### 👤 User') || line.includes('**User**')) {
      if (userMessage.length > 0) {
        processUserTurn(filePath, userStartLine, i, userMessage.join('\n'));
      }
      userMessage = [];
      userStartLine = i + 1;
      currentSection = 'USER';
    } else if (line.includes('### 🤖 Agent') || line.includes('**AI**') || line.includes('---') || line.includes('***')) {
      if (currentSection === 'USER') {
        if (userMessage.length > 0) {
          processUserTurn(filePath, userStartLine, i, userMessage.join('\n'));
        }
        userMessage = [];
        currentSection = null;
      }
    } else {
      if (currentSection === 'USER') {
        userMessage.push(line);
      }
    }
  }
});

function processUserTurn(file, startLine, endLine, text) {
  const normalizedText = text.toLowerCase();
  const keywords = [
    'stuck', 'confused', 'frustrated', 'difficult', 'worry', 'worrying', 'doubt', 'trouble',
    'wrong', 'hallucinate', 'drift', 'mistake', 'critic', 'how does', 'not sure', 'disagree',
    'pushback', 'scared', 'afraid', 'intimidate', 'hard to', 'hesitant', 'struggle', 'concerns',
    'problem', 'tension'
  ];
  const hasKeyword = keywords.some(kw => normalizedText.includes(kw));
  if (hasKeyword && text.trim().length > 20) {
    console.log(`FILE: ${file} (Lines ${startLine}-${endLine})`);
    console.log(`CONTENT: ${text.trim()}`);
    console.log('='.repeat(80));
  }
}
