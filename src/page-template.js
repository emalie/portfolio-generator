const generatePage = (name, github) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head> 
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
    </head>

    <body>
        <h1>${name}</h1>
        <h2><a href="https://github.com/${github}">GitHub</a></h2>  
    </body>
    </htm>
    `;
};

module.exports = generatePage;