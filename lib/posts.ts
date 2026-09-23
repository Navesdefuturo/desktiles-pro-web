export interface Post {
  slug: string
  title: string
  description: string
  date: string
  readingTime: string
  content: string
}

export const posts: Post[] = [
  {
    slug: 'why-folders-fail-mac-power-users',
    title: 'Why folders fail Mac power users (and what to do instead)',
    description: 'Folders made sense when files were the unit of work. They don\'t anymore. Here\'s why the smartest Mac users are rethinking how they organize their desktops.',
    date: 'September 23, 2026',
    readingTime: '4 min read',
    content: `
Every Mac comes with a beautiful desktop. Most people turn it into a pile.

It's not laziness. It's a mismatch between the tool and the job.

## The folder was designed for a different era

Folders were invented when a file was the unit of work. You opened a file, edited it, saved it, closed it. The folder was a natural container: one place for all the files that belonged together.

That's not how most people work today.

A project isn't a file. It's a collection of things that change all the time: a Figma link, three PDFs from last month's meeting, a spreadsheet that someone shared on Slack, a reference screenshot, and a Notion doc that has the real spec. None of these live in the same folder. Many don't live on your Mac at all.

So what do people do? They create a folder called "Project X" and put shortcuts in it. Or they leave everything on the Desktop and hope they remember where things are. Or they spend twenty minutes reorganizing every time a new project starts.

## The real problem: context switching costs

When you switch projects, you don't just open a different folder. You have to rebuild your mental map. Which Safari tabs were open for this? Where was that reference image? What was I looking at when I left off?

Every time you switch projects, you have to rebuild your mental map from scratch. Which Safari tabs were open for this? Where was that reference image? What was I looking at when I left off? The folder doesn't help with this. It holds files, not context.

## What power users actually do

The most productive Mac users tend to converge on similar workarounds:
- Multiple Desktops (Spaces) assigned to different projects
- Saved searches in Finder for recent files per project
- Browser profiles for different clients
- Lots of pinned tabs they never actually close

These work, but they're manual. Every new project means setting up the same scaffolding again.

## A better mental model: the tile

What if instead of organizing files, you organized context?

A tile is a named workspace that remembers everything you put in it: your most-used files, links, references. You switch to a project by activating its tile — and everything is right there, exactly where you left it.

You don't reorganize. You don't search. You just switch.

This is what DeskTiles does. It lives on your Mac desktop and gives each project its own space. When you drop a file onto a tile, DeskTiles moves it into that tile's folder — so everything for a project lives together. If a file needs to stay put (a Dropbox or iCloud document you can't move), hold ⌥⌘ while dragging to drop an alias instead: the original doesn't move, but the tile still knows where to find it.

## Is this for everyone?

Probably not. If you work on one thing at a time and have a simple folder structure that works for you, you don't need this.

But if you juggle three or more projects, switch between clients, or find yourself rebuilding context every time you sit down to work — the folder has been failing you for years. You've just been too busy to notice.

---

DeskTiles is a Mac desktop app for people who work on multiple projects at once. [See how it works](/).
    `.trim(),
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllPosts(): Post[] {
  return posts
}
