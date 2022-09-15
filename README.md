# Vitepress Sidebar Builder

A very simple sidebar builder that lets the end user specify which folders to pull data from, and automatically constructs and orders pages based on front-matter (grey-matter) inside of the page itself.

## Features

* Can read all markdown files in a folder.
  * Does not recurse.
* Can read all markdown files from a folder.
  * Recurses and finds all files from all folders.
* Orders files by an `order` front-matter property.
* Automatically uses `title` from `front-matter` property for sidebar title.
* Ability to ignore specific files from being captured.

## Installation

```
npm install @stuyk/vitepress-sidebar-builder
```

## Usage

### Setting Up Markdown Pages

> !!! THIS IS REALLY IMPORTANT

All of your pages need to include some front-matter data.

Append this to the top of your markdown page.

```md
---
title: 'My Fancy Title'
order: 0
---

# {{ $frontmatter.title }}
```

### Constructing the Sidebar

Inside of `docs/.vitepress/theme/config.js`.

Here is an example of retrieving different sections of your documentation.

You will need to append different sections to `themeConfig.sidebar` object.

```ts
import SidebarBuilder from "@stuyk/vitepress-sidebar-builder";

export default {
    ... // Rest of the Config Above
    themeConfig: {
        sidebar: {
            '/section-name/': [
                {
                    text: 'Introduction',
                    collapsible: true,
                    // Retrieves all markdown files, 
                    // but does not retrieve any other files in this folder.
                    // Ignores any files with '_partial' in their name.
                    items: SidebarBuilder.get.filesAndOrder('./docs/section-name', ['_partial'])
                },
            ],
            '/lots-of-files/': [
                // Obtains 1 Folder of Files
                {
                    text: 'Just the Files',
                    collapsible: true,
                    items: [...getFilesAndOrderByPath('./docs/lots-of-files', ['_partial'])]
                },
                // Obtains Many Folders & All files
                ...SidebarBuilder.get.foldersAndOrder('./docs/lots-of-files', {
                        collapsed: false,
                        collapsible: true,
                        partialFileNamesToIgnore: ['_partial'],
                    }
                )
            ]
        }
    }
    ... // Rest of the Config Above
}
```