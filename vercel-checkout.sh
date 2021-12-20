# This script pulls blog posts, which live on a private repository.
#
# The script pulls the blog repository's private content, and moves it into
# the expected submodule location.
# 
# Dependencies:
# 	GITHUB_ACCESS_TOKEN configured on vercel


set -e

# here we assume this repo always points to the latest commit in the blog 
# posts repo. this should be manually obeyed in practice.
git clone https://$GITHUB_ACCESS_TOKEN@github.com/vic-shihang-li/vli-blogs.git

mv vli-blogs blogs/vli-blogs
mv blogs/vli-blogs/* blogs/content