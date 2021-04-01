export default {
    "type": "document",
    "name": "config",
    "title": "Site Configuration",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Site title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "baseurl",
            "title": "Base URL",
            "description": "Serve the website from the given base URL",
            "hidden": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "permalink",
            "title": "Permalink",
            "description": "The output path for your pages, posts, or collections.",
            "hidden": false,
            "initialValue": "/posts/:slug:output_ext",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "/posts/:slug:output_ext"
                ]
            }
        },
        {
            "type": "string",
            "name": "domain",
            "title": "Domain",
            "description": "The domain of your site, including the protocol, e.g. https://mysite.com/",
            "validation": null
        },
        {
            "type": "image",
            "name": "favicon",
            "title": "Favicon",
            "description": "A square icon that represents your website",
            "validation": null
        },
        {
            "type": "string",
            "name": "color_scheme",
            "title": "Color Scheme",
            "description": "The color scheme used for the site.",
            "initialValue": "light",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "light",
                    "dark"
                ]
            }
        },
        {
            "type": "string",
            "name": "accent_color",
            "title": "Accent Color",
            "description": "The accent color of the site.",
            "initialValue": "pink",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "pink",
                    "green",
                    "blue",
                    "violet",
                    "yellow"
                ]
            }
        },
        {
            "type": "header",
            "name": "header",
            "title": "Header Configuration",
            "validation": null
        },
        {
            "type": "footer",
            "name": "footer",
            "title": "Footer Configuration",
            "validation": null
        },
        {
            "type": "object",
            "name": "sass",
            "title": "Sass",
            "hidden": true,
            "validation": null,
            "fields": [
                {
                    "type": "number",
                    "name": "indentWidth",
                    "title": "Indent Width",
                    "description": "Used to determine the number of spaces or tabs to be used for indentation.",
                    "initialValue": 4,
                    "validation": Rule => Rule.integer()
                },
                {
                    "type": "string",
                    "name": "style",
                    "title": "Output Style",
                    "description": "Determines the output format of the final CSS style.",
                    "initialValue": "nested",
                    "validation": null,
                    "options": {
                        "list": [
                            "nested",
                            "expanded",
                            "compact",
                            "compressed"
                        ]
                    }
                },
                {
                    "type": "number",
                    "name": "precision",
                    "title": "Precision",
                    "description": "Used to determine how many digits after the decimal will be allowed.",
                    "initialValue": 10,
                    "validation": Rule => Rule.integer()
                }
            ]
        },
        {
            "type": "array",
            "name": "plugins",
            "title": "Plugins",
            "hidden": true,
            "validation": null,
            "of": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "type": "array",
            "name": "exclude",
            "title": "Exclude",
            "description": "Exclude directories and/or files from the conversion.",
            "hidden": true,
            "validation": null,
            "of": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Config File Path",
            "description": "The file path of the configuration file",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "_config.yml"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "config"
                ]
            }
        }
    ],
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}