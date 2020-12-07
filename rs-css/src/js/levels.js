const levels = [{
  title: 'Type Selector',
  comment: 'Select elements by their type',
  syntax: 'A',
  doThis: 'Select all boxes',
  answer: 'gift',
  hint: 'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.',
  examples: '<strong>div</strong> selects all <tag>div</tag> elements.<hr><strong>p</strong> selects all <tag>p</tag> elements.',
  code: [{
    tag: 'gift',
    class: null,
    child: null,
  }, {
    tag: 'gift',
    class: null,
    child: null,
  }],
  notes: '',
},
{
  title: 'ID Selector',
  comment: 'Select elements with an ID',
  syntax: '#id',
  doThis: 'Select the fancy box',
  answer: '#fancy',
  hint: 'Prefixing the hash symbol to a selector allows us to target by id. This is easily the most common usage, however be cautious when using id selectors.',
  examples: '<strong>#cool</strong> selects any element with id="cool" <hr> <strong>ul#menu</strong> selects <tag>ul id="menu"</tag>',
  code: [{
    tag: 'gift',
    class: null,
    child: null,
  }, {
    tag: 'gift',
    class: null,
    id: 'fancy',
    child: null,
  },
  {
    tag: 'gift',
    class: null,
    child: null,
  },
  ],
  notes: "<strong>NOTE</strong><br>Ask yourself: do I absolutely need to apply an id to this element in order to target it? <br> id selectors are rigid and don't allow for reuse. If possible, first try to use a tag name or even a pseudo-class (levels 13-18).",
},
{
  title: 'Descendant Selector',
  comment: 'Select an element inside another element',
  syntax: 'A&nbsp;&nbsp;B',
  doThis: 'Select all the bears that are inside the boxes',
  answer: 'gift bear',
  hint: 'Selects all B inside of A. When you need to be more specific with your selectors, you use these. For example, what if, rather than targeting all anchor tags, you only need to target the anchors which are within an unordered list?',
  examples: '<strong>p strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>',
  code: [{
    tag: 'bear',
    class: null,
    child: null,
  }, {
    tag: 'gift',
    class: null,
    child: {
      tag: 'bear',
      child: null,
    },
  },
  {
    tag: 'gift',
    class: null,
    child: {
      tag: 'bear',
      child: null,
    },
  },
  {
    tag: 'bear',
    class: null,
    child: null,
  },
  {
    tag: 'gift',
    class: null,
    child: null,
  },
  ],
  notes: "<strong>NOTE</strong><br>If your selector looks like X Y Z A B.error, you're doing it wrong. Always ask yourself if it's absolutely necessary to apply all of that weight.",
},
{
  title: 'Combine the Descendant & ID Selectors',
  comment: '',
  syntax: '#id  A',
  doThis: 'Select the bear that are inside the fancy box',
  answer: '#fancy bear',
  hint: 'You can combine any selector with the descendent selector.',
  examples: '<strong>#cool span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong> <hr> <strong> #fancy span </strong> selects any <tag>span</tag> elements that are inside of the element with <strong> id = "fancy" </strong>',
  code: [{
    tag: 'gift',
    class: null,
    child: {
      tag: 'bear',
      child: null,
    },
  },
  {
    tag: 'gift',
    class: null,
    id: 'fancy',
    child: {
      tag: 'bear',
      child: null,
    },
  },
  {
    tag: 'bear',
    class: null,
    child: null,
  },
  {
    tag: 'gift',
    class: null,
    child: null,
  },
  ],
  notes: '',
},
{
  title: 'Class Selector',
  comment: 'Select elements by their class',
  syntax: '.classname',
  doThis: 'Select all the blue boxes',
  answer: '.blue',
  hint: 'This is a class selector. The difference between ids and classes is that, with the latter, you can target multiple elements. Use classes when you want your styling to apply to a group of elements. Alternatively, use ids to find a needle-in-a-haystack, and style only that specific element.',
  examples: '<strong>.title</strong> selects all elements with <strong>class="title"</strong>',
  code: [{
    tag: 'gift',
    class: null,
    child: {
      tag: 'bear',
      child: null,
    },
  },
  {
    tag: 'gift',
    class: 'blue',
    child: null,
  },
  {
    tag: 'gift',
    class: null,
    child: null,
  }, {
    tag: 'gift',
    class: 'blue',
    child: null,
  },
  ],
  notes: '',
},
{
  title: 'Combine the Class Selector',
  comment: 'Select elements by their class',
  syntax: 'A.classname',
  doThis: 'Select all small boxes',
  answer: 'gift.small',
  hint: 'You can combine the class selector with other selectors, like the type selector.',
  examples: '<strong>ul.important</strong> selects all <tag>ul</tag> elements that have class="important" <hr> <strong>#big.wide</strong> selects all elements with <strong>id="big"</strong> that also have <strong>class="wide"</strong>',
  code: [{
    tag: 'bear',
    class: 'small',
    child: null,
  },
  {
    tag: 'gift',
    class: null,
    child: null,
  },
  {
    tag: 'gift',
    class: 'small',
    child: null,
  },
  {
    tag: 'gift',
    class: 'small',
    child: null,
  },
  {
    tag: 'gift',
    class: 'blue',
    child: null,
  },
  ],
  notes: '',
},
{
  title: 'Comma Combinator',
  comment: 'Combine selectors with commas!',
  syntax: 'A, B',
  doThis: 'Select all the bears and cars',
  answer: 'bear, car',
  hint: 'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
  examples: '<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong> <hr> <strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements',
  code: [{
    tag: 'bear',
    class: null,
    child: null,
  },
  {
    tag: 'car',
    class: null,
    child: null,
  },
  {
    tag: 'gift',
    class: 'blue',
    child: {
      tag: 'car',
      class: null,
      child: null,
    },
  },
  {
    tag: 'gift',
    class: null,
    child: {
      tag: 'bear',
      class: null,
      child: null,
    },
  },
  ],
  notes: '',
},
{
  title: 'The Universal Selector',
  comment: 'You can select everything!',
  syntax: '*',
  doThis: 'Select all the things!',
  answer: '*',
  hint: 'You can select all elements with the universal selector!',
  examples: '<strong>p *</strong> selects any element inside all <tag>p</tag> elements.',
  code: [{
    tag: 'gift',
    class: null,
    child: {
      tag: 'bear',
      class: null,
      child: null,
    },

  },
  {
    tag: 'gift',
    class: 'blue',
    child: {
      tag: 'bear',
      class: null,
      child: null,
    },
  },
  {
    tag: 'gift',
    class: 'small',
    child: null,
  },
  {
    tag: 'car',
    class: null,
    child: null,
  },
  {
    tag: 'bear',
    class: null,
    child: null,
  },
  ],
  notes: '',
}, {
  title: 'Combine the Universal Selector',
  comment: '',
  syntax: 'A *',
  doThis: 'Select everything inside the boxes',
  answer: 'gift *',
  hint: 'This selects all elements inside of <strong>A.</strong>',
  examples: '<strong>p *</strong> selects any element inside all <tag>p</tag> elements. <hr> <strong>ul.fancy *</strong> selects every element inside all <tag>ul class="fancy"</tag> elements.',
  code: [{
    tag: 'gift',
    class: null,
    child: {
      tag: 'bear',
      class: null,
      child: null,
    },
  },
  {
    tag: 'bear',
    class: null,
    child: null,
  },
  {
    tag: 'gift',
    class: null,
    child: {
      tag: 'car',
      class: null,
      child: null,
    },
  },
  {
    tag: 'gift',
    class: 'blue',
    child: {
      tag: 'bear',
      class: null,
      child: null,
    },
  },
  ],
  notes: '',
}, {
  title: 'Adjacent Sibling Selector',
  comment: 'Select an element that directly follows another element',
  syntax: 'A + B',
  doThis: "Select every bag that's next to a gift",
  answer: 'gift + bag',
  hint: "This selects all B elements that directly follow A. Elements that follow one another are called siblings.<br>This is referred to as an adjacent selector. It will select only the element that is immediately preceded by the former element.They're on the same level, or depth.",
  examples: '<strong>p + .intro</strong> selects every element with <strong>class="intro"</strong> that directly follows a <tag>p</tag> <hr> <strong>div + a</strong> selects every <tag>a</tag> element that directly follows a <tag>div</tag>.',
  code: [{
    tag: 'bag',
    class: null,
    child: null,
  },
  {
    tag: 'gift',
    class: null,
    child: null,
  },
  {
    tag: 'bag',
    class: null,
    child: null,
  }, {
    tag: 'gift',
    class: null,
    child: null,
  },
  {
    tag: 'bag',
    class: null,
    child: null,
  },
  {
    tag: 'bag',
    class: null,
    child: null,
  },
  ],
  notes: '',
}, {
  title: 'General Sibling Selector',
  comment: 'Select elements that follows another element',
  syntax: 'A ~ B',
  doThis: 'Select the phones beside the bear',
  answer: 'bear ~ phone',
  hint: 'You can select all siblings of an element that follow it. This is like the <strong>Adjacent Selector (A + B)</strong> except it gets all of the following elements instead of one.',
  examples: '<strong>A ~ B</strong> selects all <strong>B</strong> that follow a <strong>A</strong>',
  code: [{
    tag: 'phone',
    class: null,
    child: null,
  },
  {
    tag: 'phone',
    class: null,
    child: null,
  },
  {
    tag: 'bear',
    class: null,
    child: null,
  },
  {
    tag: 'phone',
    class: null,
    child: null,
  },
  {
    tag: 'phone',
    class: null,
    child: null,
  },
  {
    tag: 'bag',
    class: null,
    child: null,
  },
  ],
  notes: '',
}, {
  title: 'Child Selector',
  comment: 'Select direct children of an element',
  syntax: 'A > B',
  doThis: 'Select the phone directly inside the box',
  answer: 'gift > phone',
  hint: 'You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element.<br>Elements that are nested deeper than that are called descendant elements.',
  examples: '<strong>A > B</strong> selects all <strong>B</strong> that are a direct children <strong>A</strong>',
  code: [{
    tag: 'gift',
    class: null,
    child: {
      tag: 'bear',
      class: null,
      child: null,
    },
  },
  {
    tag: 'phone',
    class: null,
    child: null,
  },
  {
    tag: 'gift',
    class: null,
    child: {
      tag: 'phone',
      class: null,
      child: null,
    },
  },
  {
    tag: 'phone',
    class: null,
    child: null,
  },
  ],
  notes: '',
}, {
  title: 'First Child Pseudo-selector',
  comment: 'Select a first child element inside of another element',
  syntax: ':first-child',
  doThis: 'Select the first bag',
  answer: 'bag:first-child',
  hint: "This structural pseudo class allows us to target only the first child of the element's parent.  A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.",
  examples: '<strong>:first-child</strong> selects all first child elements.<hr><strong>p:first-child</strong> selects all first child <tag>p</tag> elements.<hr><strong>div p:first-child</strong> selects all first child <tag>p</tag> elements that are in a <tag>div</tag>.',
  code: [{
    tag: 'bag',
    class: null,
    child: null,
  },
  {
    tag: 'bag',
    class: null,
    child: null,
  },
  {
    tag: 'gift',
    class: 'blue',
    child: null,
  },
  {
    tag: 'bag',
    class: null,
    child: null,
  },
  ],
  notes: '',
}, {
  title: 'Only Child Pseudo-selector',
  comment: 'Select an element that are the only element inside of another one.',
  syntax: ':only-child',
  doThis: 'Select the car inside the box',
  answer: 'car:only-child',
  hint: 'You can select any element that is the only element inside of another one.',
  examples: '<strong>span:only-child</strong> selects the <span> elements that are the only child of some other element.<hr><strong>ul li:only-child</strong> selects the only <tag>li</tag> element that are in a <tag>ul</tag>.',
  htmlMarkup: '<gift>\n\t<bear></bear>\n</gift>\n<bear></bear>\n<gift>\n\t<car></car>\n</gift>\n<gift></gift>\n',
  code: [{
    tag: 'gift',
    class: null,
    child: {
      tag: 'bear',
      class: null,
      child: null,
    },
  },
  {
    tag: 'bear',
    class: null,
    child: null,
  },
  {
    tag: 'gift',
    class: null,
    child: {
      tag: 'car',
      class: null,
      child: null,
    },
  },
  {
    tag: 'gift',
    class: null,
    child: null,
  },
  ],
  notes: '',
}, {
  title: 'Last Child Pseudo-selector',
  comment: 'Select the last element inside of another element',
  syntax: ':last-child',
  doThis: 'Select the last blue box',
  answer: '.blue:last-child',
  hint: "The opposite of first-child, last-child will target the last item of the element's parent.",
  examples: '<strong>:last-child</strong> selects all last-child elements.<hr><strong>span:last-child</strong> selects all last-child <tag>span</tag> elements.',
  code: [{
    tag: 'gift',
    class: 'blue',
    child: null,
  },
  {
    tag: 'gift',
    class: null,
    child: {
      tag: 'bear',
      class: null,
      child: null,
    },
  },
  {
    tag: 'gift',
    class: null,
    id: 'fancy',
    child: {
      tag: 'bear',
      class: null,
      child: null,
    },
  },
  {
    tag: 'gift',
    class: 'blue',
    child: null,
  },
  ],
  notes: '<strong>NOTE</strong><br>In cases where there is only one element, that element counts as the first-child, only-child and last-child!',
}, {
  title: 'Nth Child Pseudo-selector',
  comment: 'Select an element by its order in another element',
  syntax: ':nth-child(n)',
  doThis: 'Select the third bear',
  answer: 'bear:nth-child(3)',
  hint: 'Selects the <strong>n</strong>th (Ex: 1st, 3rd, 12th etc.) child element in another element.',
  examples: '<strong>:nth-child(8)</strong> selects every element that is the 8th child of another element.<hr><strong>div p:nth-child(2)</strong> selects the second <tag>p</tag> in every <tag>div</tag>',
  code: [{
    tag: 'bear',
    class: 'blue',
    child: null,
  },
  {
    tag: 'gift',
    class: null,
    child: {
      tag: 'bear',
      class: null,
      child: null,
    },
  },
  {
    tag: 'bear',
    class: 'blue',
    child: null,
  },
  {
    tag: 'gift',
    class: 'blue',
    child: {
      tag: 'bear',
      class: null,
      child: null,
    },
  },
  {
    tag: 'bear',
    class: 'blue',
    child: null,
  },
  ],
  notes: '',
}, {
  title: 'Nth-of-type Selector with Formula',
  comment: '',
  syntax: ':nth-of-type(An+B)',
  doThis: 'Select every 2nd small box, starting from the 3rd',
  answer: 'gift.small:nth-of-type(2n+3)',
  hint: 'The nth-of-type formula selects every nth element, starting the count at a specific instance of that element.',
  examples: '<strong>span:nth-of-type(6n+2)</strong> selects every 6th instance of a <tag>span</tag>, starting from (and including) the second instance.',
  code: [{
    tag: 'gift',
    class: 'small',
    child: null,
  },
  {
    tag: 'gift',
    class: 'small',
    child: null,
  }, {
    tag: 'gift',
    class: 'small',
    child: null,
  },
  {
    tag: 'gift',
    class: 'small',
    child: null,
  },
  {
    tag: 'gift',
    class: 'small',
    child: null,
  },
  {
    tag: 'gift',
    class: 'small',
    child: null,
  },
  {
    tag: 'gift',
    class: 'small',
    child: null,
  },
  {
    tag: 'gift',
    class: 'small',
    child: null,
  },
  ],
  notes: '',
}, {
  title: 'Negation Pseudo-class',
  comment: "Select all elements that don't match the negation selector",
  syntax: ':not(X)',
  doThis: 'Select only big red boxes',
  answer: 'gift:not(.small):not(.blue)',
  hint: 'You can use this to select all elements that do not match selector <strong>"X"</strong>.',
  examples: '<strong>:not(#fancy)</strong> selects all elements that do not have id="fancy".<hr><strong>div:not(:first-child)</strong> selects every <tag>div</tag> that is not a <strong>first child</strong>.<hr><strong>:not(.big):not(.medium)</strong>  selects all elements that do not have <strong>class="big"</strong> and <strong>class="medium"</strong>.',
  code: [{
    tag: 'gift',
    class: 'small',
    child: null,
  },
  {
    tag: 'gift',
    class: 'blue',
    child: null,
  },
  {
    tag: 'gift',
    class: null,
    child: null,
  },
  {
    tag: 'gift',
    class: 'small',
    child: null,
  },
  {
    tag: 'gift',
    class: 'blue',
    child: null,
  },
  {
    tag: 'gift',
    class: null,
    child: null,
  },
  {
    tag: 'gift',
    class: 'small',
    child: null,
  },
  ],
  notes: '',
}, {
  title: 'Attribute Selector',
  comment: 'Select all elements that have a specific attribute',
  syntax: '[attribute]',
  doThis: 'Select the gifts for someone',
  answer: '[data-for]',
  hint: 'Attributes appear inside the opening tag of an element, like this: <strong>span attribute="value"</strong>. An attribute does not always have a value, it can be blank!',
  examples: '<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.<hr><strong>[type]</strong> selects all elements that have a <strong>type="anything"</strong> attribute.',
  htmlMarkup: '<gift for="Ann" class="blue"></gift>\n<gift for="Joe"></gift>\n<gift></gift>\n<gift id="fancy">\n\t<bear></bear>\n</gift>\n',
  code: [{
    tag: 'gift',
    class: 'blue',
    for: 'Ann',
    child: null,
  },
  {
    tag: 'gift',
    class: null,
    for: 'Joe',
    child: null,
  },
  {
    tag: 'gift',
    class: null,
    child: null,
  },
  {
    tag: 'gift',
    class: null,
    id: 'fancy',
    child: {
      tag: 'bear',
      class: null,
      child: null,
    },
  },
  ],
  notes: '',
}, {
  title: 'Attribute Value Selector',
  comment: 'Select all elements that have a specific attribute value',
  syntax: '[attribute="value"]',
  doThis: 'Select the gift for Mum!',
  answer: '[data-for="Mum"]',
  hint: 'Attribute selectors are case sensitive, each character must match exactly.',
  examples: '<strong>input[type="checkbox"]</strong> selects all <strong>checkbox</strong> <tag>input</tag> elements.',
  htmlMarkup: '<gift></gift>\n<gift for="Ann">\n\t<bear></bear>\n</gift>\n<gift for="Mum" id="fancy"></gift>\n',
  code: [{
    tag: 'gift',
    class: 'blue',
    for: 'Ann',
    child: null,
  },
  {
    tag: 'bear',
    class: null,
    child: null,
  },
  {
    tag: 'gift',
    class: null,
    child: null,
  },
  {
    tag: 'gift',
    class: null,
    id: 'fancy',
    for: 'Mum',
    child: null,
  },
  ],
  notes: '',
},
];

export default levels;
