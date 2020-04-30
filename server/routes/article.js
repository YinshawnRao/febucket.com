const fs = require('fs')
const path = require('path')
const { markdown } = require('markdown')

module.exports = (req, res) => {
    
    let title = req.params.title

    let content
    try {
        content = fs.readFileSync(path.join(__dirname, `../../articles/${title}.md`)).toString()
    } catch(err) {       
       return res.send('Article Not Found')
    }   

    res.send(markdown.toHTML(content))

}