const levels = [{
        helpTitle: "Select elements by their type",
        selectorName: "Type Selector",
        doThis: "Select the plates",
        selector: "plate",
        syntax: "A",
        help: "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples: [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        boardMarkup: `
    <plate/>
    <plate/>
    `
    },
    {
        doThis: "Select the bento boxes",
        selector: "bento",
        syntax: "A",
        helpTitle: "Select elements by their type",
        selectorName: "Type Selector",
        help: "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
        examples: [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        boardMarkup: `
    <bento/>
    <plate/>
    <bento/>
    `
    },
    {
        doThis: "Select the fancy plate",
        selector: "#fancy",
        selectorName: "ID Selector",
        helpTitle: "Select elements with an ID",
        syntax: "#id",
        help: 'Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.',
        examples: [
            '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
            '<strong>ul#long</strong> selects <tag>ul id="long"</tag>'
        ],
        boardMarkup: `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
    },
    {
        helpTitle: "Select an element inside another element",
        selectorName: "Descendant Selector",
        doThis: "Select the apple on the plate",
        selector: "plate apple",
        syntax: "A&nbsp;&nbsp;B",
        help: "Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.",
        examples: [
            '<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>',
            '<strong>#fancy&nbsp;&nbsp;span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>',
        ],
        boardMarkup: `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
    }
];

export default levels;