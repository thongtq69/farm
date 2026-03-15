OAKFARM CLONE-READY DATA

IMPORTANT
- From now on, prefer the `.json` files.
- The `.csv` files are only kept as intermediate/export references.
- If another agent needs to clone the site, it should start from the JSON files in this folder.

PAGE DATA
- pages_homepage.json: homepage data.
- pages_services.json: service pages.
- pages_projects.json: project pages.
- pages_team.json: team member pages.
- pages_blog_index.json: blog landing page.
- pages_content_pages.json: normal pages such as `chung-toi`, `bao-gia-thiet-ke-farm`.
- pages_taxonomy.json: category, tag, author, project-category pages.
- pages_templates.json: template and breadcrumb pages, usually not needed for the visual clone.

ASSET DATA
- assets_banners.json: banner and hero-like images.
- assets_projects.json: project/gallery images.
- assets_services.json: service images.
- assets_blogs.json: blog images.
- assets_icons.json: icons and svg assets.
- assets_branding.json: logos and branding assets.
- assets_before_after.json: before/after section assets.
- assets_content.json: testimonial/content-supporting assets.
- assets_other.json: uncategorized but still referenced assets.
- assets_sitemap.json: assets found through sitemap image references.

HOMEPAGE-ONLY DATA
- homepage_banners.json: homepage banner subset for fast homepage clone work.
- homepage_all_assets.json: every asset referenced by homepage.

MANIFEST / SUMMARY
- summary.json: quick counts.
- json_manifest.json: mapping between old CSV files and new JSON files.

RECOMMENDED START ORDER FOR CLONING
1. pages_homepage.json
2. homepage_all_assets.json
3. assets_banners.json
4. pages_services.json
5. pages_projects.json
6. assets_branding.json and assets_icons.json
