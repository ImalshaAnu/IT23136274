const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Minimal Positive & Negative Test Cases
const TEST_DATA = {
  positive: [
     
    {
      tcId: 'Pos_Fun_002',
      name: 'Tense variations (past )',
      input: 'mama iiyee sellam karanna giyaa',
      expected: 'මම ඊයේ සෙල්ලම් කරන්න ගියා'
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'Simple present tense statement',
      input: 'mama iskoolee inna',
      expected: 'මම ඉස්කෝලේ ඉන්න'
    },
    {
      tcId: 'Pos_Fun_004',
      name: 'Tense variations (future)',
      input: 'mama heta panthiyata enna hithan inne',
      expected: 'මම හෙට පන්තියට එන්න හිතන් ඉන්නේ'
    },
      {
      tcId: 'Pos_Fun_005',
      name: 'Tense variations (future)',
      input: 'mama panthi ivara velaa gedhara yanna hadhanne',
      expected: 'මම පන්ති ඉවර වෙලා ගෙදර යන්න හදන්නෙ'
    }, 
    {
      tcId: 'Pos_Fun_006',
      name: 'Singular/plural usage and pronoun variations',
      input: 'mama panthi ivara velaa gedhara yanna hadhanne',
      expected: 'මම පන්ති ඉවර වෙලා ගෙදර යන්න හදන්නෙ'
    },
    {
      tcId: 'Pos_Fun_006',
      name: 'Request forms with varying degrees of politeness',
      input: 'anee mata ee potha dhenna',
      expected: 'අනේ මට ඒ පොත දෙන්න'
    },
     {
      tcId: 'Pos_Fun_007',
      name: 'Paragraph-style input',
      input: 'mama maasayakata passee iiyee gedhara giyaa. gedharata giyaama hithata dhaenenne pudhumaakaara saenasiimak. pavulee ayath ekka idhdhi veelaava yanava theerennee naee. adha havasa yaaluvoth ekka sellam karanna yanna inne. krikat kiyannee magee aasama kriidava. mama podi kaale idhan krikat sellam karanavaa. labana sathiyee mama aaye campus enna oona. viBhaagayak thiyena nisaa paadam karannath thiyenavaa. gedhara avaama paadam karanna hithennema naee.',
      expected: 'මම මාසයකට පස්සේ ඊයේ ගෙදර ගියා. ගෙදරට ගියාම හිතට දැනෙන්නෙ පුදුමාකාර සැනසීමක්. පවුලේ අයත් එක්ක ඉද්දි වේලාව යනව තේරෙන්නේ නෑ. අද හවස යාලුවොත් එක්ක සෙල්ලම් කරන්න යන්න ඉන්නේ. ක්‍රිකට් කියන්නේ මගේ ආසම ක්‍රීඩව. මම පොඩි කාලෙ ඉදන් ක්‍රිකට් සෙල්ලම් කරනවා. ලබන සතියේ මම ආයෙ campus එන්න ඕන. විභාගයක් තියෙන නිසා පාඩම් කරන්නත් තියෙනවා. ගෙදර අවාම පාඩම් කරන්න හිතෙන්නෙම නෑ.'
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Tense variations (future)',
      input: 'api labana sathiyee nuvara yanna inne',
      expected: 'අපි ලබන සතියේ නුවර යන්න ඉන්නේ',
    },
    {
      tcId: 'Pos_Fun_009',
      name: ' Imperative (commands) forms',
      input: 'mata obee prshnaya kiyanna',
      expected: 'මට ඔබේ ප්‍රශ්නය කියන්න',
    },
    {
      tcId: 'Pos_Fun_010',
      name: 'Multi-word expressions and frequent collocations',
      input: 'Oyaa gedharata gihin enna',
      expected: 'ඔයා ගෙදරට ගිහින් එන්න',
    },
     {
      tcId: 'Pos_Fun_011',
      name: 'Proper spacing',
      input: 'mata udheta  paan kanna oonee.',
      expected: 'මට උදෙට  පාන් කන්න ඕනේ.',
    },
      {
      tcId: 'Pos_Fun_012',
      name: 'Negation patterns',
      input: 'mama  ee potha gaena dhannaee.',
      expected: 'මම  ඒ පොත ගැන දන්නෑ.',
    },
    {
      tcId: 'Pos_Fun_013',
      name: 'plural usage and pronoun variations',
      input: 'Api naanna yamuu',
      expected: 'අපි නාන්න යමූ',
    },
     {
      tcId: 'Pos_Fun_014',
      name: ' Tense variations (present)',
      input: 'mama dhaen vaeda karanavaa.',
      expected: 'මම දැන් වැඩ කරනවා.',
    },
      {
      tcId: 'Pos_Fun_015',
      name: ' Singular and pronoun variations',
      input: 'oyaa vaevata yanna enavadha?',
      expected: 'ඔයා වැවට යන්න එනවද?',
    },


    
  
  
  

  ],
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Missing space between words',
      input: 'mamagedharainnee',
      expected: 'මම ගෙදර ඉන්නේ'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Joined compound words',
      input: 'apipassekathakaramu',
      expected: 'අපි පස්සේ කතා කරමු'
    },
       {
      tcId: 'Neg_Fun_001',
      name: 'Missing space between words',
      input: 'mamakadeeinnee',
      expected: 'මම කඩේ ඉන්නේ'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Joined compound words',
      input: 'apimeegaenapassekathakaramu',
      expected: 'අපි මේ ගැන පස්සේ කතා කරමු'
    },
    {
    tcId: 'Neg_Fun_003',
    name: 'Line break in sentence',
    input: 'api game\ngahamu',
    expected: 'අපි game ගහමු',
  },
  {
    tcId: 'Neg_Fun_004',
    name: 'Abbreviation in instruction',
    input: 'mata ASAP oyagen wedak kara ganna one',
    expected: 'මට ASAP ඔයගෙන් වැඩක් කර ගන්න ඕනෙ',
  },
  {
    tcId: 'Neg_Fun_005',
    name: 'Extra spaces in request',
    input: 'mama     ammaava    pudhuma     kaLaa',
    expected: 'මම අම්මාව පුදුම කළා',
  },
  {
    tcId: 'Neg_Fun_006',
    name: 'Missing space in greeting',
    input: 'subaudeasanak',
    expected: 'සුබ උදෑසනක්',
  },
    {
    tcId: 'Neg_Fun_007',
    name: 'Combined words with numbers',
    input: 'mama keama123 kanawa',
    expected: 'මම කෑම කනවා',
  },
  {
    tcId: 'Neg_Fun_008',
    name: 'Slang + typo',
    input: 'bro eka suparne',
    expected: 'bro ඒක සුපර්නෙ',
  },
   {
    tcId: 'Neg_Fun_010',
    name: 'Extra punctuation',
    input: 'oya??kohedha!!!inne',
    expected: 'ඔයා කොහෙද ඉන්නේ',
  },
  ]
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 240000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Minimal Positive & Negative Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });
  
});