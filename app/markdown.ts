
declare var showdown: any; // const markdown = new showdown.Converter({  });

const markdown = new showdown.Converter({ });
markdown.setFlavor('github');
markdown.setOption('noHeaderId', true);
markdown.setOption('simpleLineBreaks', true);

export default markdown;
