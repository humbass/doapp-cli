function createEmptySchema(){
    return {
        name: '',
        version: '',
        mockServer: {
            'port': 52077,
            'mockDir': ''
        },
        openPath: '',
        jsExt: '',
        exports: [],
        alias: {}
    }
}

module.exports = {
    createEmptySchema: createEmptySchema
}
