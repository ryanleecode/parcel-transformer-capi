const { Transformer } = require("@parcel/plugin")
const nearley = require("nearley")
const nearleyCompile = require("nearley/lib/compile")
const nearleyGenerate = require("nearley/lib/generate")
const nearleyGrammar = require("nearley/lib/nearley-language-bootstrapped")

module.exports = new Transformer({
    async transform({ asset }) {
        // parsing the asset
        let grammarParser = new nearley.Parser(nearleyGrammar)
        grammarParser.feed(await asset.getCode())
        let grammarAst = grammarParser.results[0]

        // Nearley adds the path of the dependencies it finds to `alreadycompiled`
        let alreadycompiled = []
        let grammarInfoObject = nearleyCompile(grammarAst, {
            args: [asset.filePath],
            alreadycompiled,
        })

        for (let filePath of alreadycompiled) {
            asset.invalidateOnFileChange(filePath)
        }

        let jsCode = nearleyGenerate(grammarInfoObject, "grammar")
        asset.setCode(jsCode)
        asset.type = "js"
        return [asset]
    },
})
