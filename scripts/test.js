hexo.extend.processor.register("posts/*path", function (file) {
    console.log('[file]',file.path)
    return file
});