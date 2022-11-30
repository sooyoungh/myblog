# gitbook-plugin-disqus-legacy

Super duper basic [Disqus](https://disqus.com) integration for Gitbook 3.x.

### book.json

```json
{
    "plugins": [
        "disqus-legacy"
    ],
    "pluginsConfig": {
        "disqus-legacy": {
            "shortname": "blog-short-name",
            "wrapper": "<div class=\"disqus-wrapper\">{{disqus}}</div>",
            "exclude": [
                "README.md",
                "sub-folder/README.md"
            ]
        }
    }
}
```
