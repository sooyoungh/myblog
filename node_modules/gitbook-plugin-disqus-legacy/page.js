module.exports = function (page) {
    const config = this.config.values.pluginsConfig['disqus-legacy']
    if (!config) return console.warn('disqus-legacy config missed')

    // Exclude pages fro Disqus
    const exclude = config.exclude || []
    if (exclude.includes(page.path)) {
        return page
    }

    const disqusCode = `
<script>console.log(window.location.pathname)</script>
<div id="disqus_thread"></div>
<script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = window.location.href;
this.page.identifier = window.location.pathname;
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://${config.shortname}.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>`


    // Apply wrapper
    const disqsWrapper = config.wrapper || '{{disqus}}'
    page.content = page.content + disqsWrapper.replace('{{disqus}}', disqusCode)

    return page
}
