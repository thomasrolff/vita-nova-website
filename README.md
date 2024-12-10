# Website for BB Vita Nova

## Project setup

This project uses typescript and is formatted using prettier and eslint. To replicate, install the eslint and prettier extentions and add the following to `settings.json`.

```
{
    "typescript.tsdk": "node_modules/typescript/lib",
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.formatOnSave": true
}
```

## Internationalization

Translations can be found at `public/locales`.

## Video url

The video used on the landingpage is hosted through the Bunny cdn on the account of Elene (Hotel Vita Nova). The Allowed Referrers on this Bunny storage are:

-   vita-nova-website-git-development-thomasrolff.vercel.app
-   hotelvitanova.nl

So locally the video won't work.
