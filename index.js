// @flow
const { Transformer } = require("@parcel/plugin")
const nearley = require("nearley")
const nearlCompile = require("nearley/lib/compile")
const nearlyGenerate = require("nearley/lib/generate")
const nearleyGrammar = require("nearley/lib/nearley-language-bootstrapped")

module.exports = new Transformer({
    async transform({ asset }) {
        // parsing the asset
        let grammarParser = new nearley.Parser(nearleyGrammar)
        grammarParser.feed(await asset.getCode())
        let grammarAst = grammarParser.results[0]
        //
        let grammarInfoObject = nearlCompile(grammarAst, {
            args: [asset.filePath],
        })
        let jsCode = nearlyGenerate(grammarInfoObject, "grammar")
        asset.setCode(jsCode)
        asset.type = "js"
        return [asset]
    },
})
