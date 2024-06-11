This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Render Flow : When we hit the npm run dev command the flow goes from package.json to Layout.tsx the children prop in the return statement of Layout always refer to the page.tsx and page component return code is rendered.
Even if layout file is deleted next generates it automatically.

In next all components are Server components by default.
To create a client component it's nexessary to add `use client` keyword at top of file.
## ROUTES
### Routing Conventions
- All routes must be placed inside the app folder.
- Every file that corresponds to a route must be named pags.js or page.tsx.
- Every folder corresponds to a path segment in the browser URL.

### Dynamic Routes
- use `[]` as the folder name for creating dynamic routes. like `[productId]` folderName inside products folder. And you can extract the route query inside the page component of dynamic route by using params as props. like `params.productId`
### Catch All segments Route
- `[...name]` this folder name will take any url specified by its parent folder. like parent folder is docs and inside folder is [...slug], so it will match any url that contains the docs segment in the path.
- `[[...name]]` use for making a default page. like when accessing route `/docs` if we dont apply this, it will generate an error.
### Not found Page
- Base componenet that will load when no route is matched. Make a file inside the `app` directory and name it as `not-found`. You can also define a not-found page inside the routes as well.
- To programically display this not-found page, we can use the `notFound` function from `next/navigation`. Call this function to display the not found page.
- If two not-found pages are there inside the project, then the closest not-found page will render based on the file system.
### Private Folders
- A private folder indicates that it is a private implementation detail and should not be considered by the routing system
- The folder and all its subfolders are excluded from routing.
- Prefix the folder name with an underscore to make it a private file.
- These are useful for separating UI logic from routing logic.
**NOTE- If you want to include underscore in URL, prefix folder name with "%5F, which is URL encoded form of underscore"** 
### Route Groups
- Allows to logically group our routes and project files without affecting the URL path structure.
- To apply a layout to certain segments while leaving others unchanged.
- If you don't want the children folders to use the name of its parent folder as the path suggester you can wrap the parentFolder in parenthesis `(parentFolderName)` 

## LAYOUTS
A page is UI that is unique to a route.
A layout is UI that is shared between multiple pages in the app.
You can define a layout by default exporting a React component from a layout.tsx file.
That component should accept a children prop that will be populated with a child page during rendering.
In a freshly next app page.tsx will replace the children prop in the layout file.
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
