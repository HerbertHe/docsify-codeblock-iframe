var plugin = {
    markdown: {
        renderer: {
            code: function (code, lang) {
                if (lang === "iframe") {
                    return window.__codeblock_iframe.converter(code)[0]
                }
                return this.origin.code.apply(this, arguments)
            },
            html: function (html) {
                var regex = /<iframe.*?>[\s\S]*?<\/iframe>/
                if (regex.test(html)) {
                    return ""
                } else {
                    return html
                }
            },
        },
    },
}

window.$docsify = Object.assign(window.$docsify, plugin)
