module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({'assets/css': 'css'});
    eleventyConfig.addPassthroughCopy({'assets/img': 'img'});
    eleventyConfig.addPassthroughCopy({'assets/js': 'js'});
    eleventyConfig.addPassthroughCopy({'assets/lib': 'lib'});
    eleventyConfig.addPassthroughCopy({'assets/files': 'files'});
    eleventyConfig.addPassthroughCopy('favicon.ico');
    eleventyConfig.addPassthroughCopy('CNAME');
    return {
        passthroughFileCopy: true
    };
};