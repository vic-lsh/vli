#!/bin/sh

# script to automate build process that pulls private git submodule.
# adapted from: https://itsf.red/1337/vercel-private-submodules-workaround/

# repo paths (supplied without the protocol prefix)
MAIN_REPO=github.com/vic-shihang-li/vli.git
# the reference of the submodule in .gitmodules (usually the path)
SUBMODULE_PATH=blogs/content

if [ "$VERCEL_GIT_COMMIT_SHA" == "" ]; then
  echo "Error: VERCEL_GIT_COMMIT_SHA is empty"
  exit 1
fi
if [ "$GITHUB_ACCESS_TOKEN" == "" ]; then
  echo "Error: GITHUB_ACCESS_TOKEN is empty"
  exit 1
fi

# stop script execution on error
set -e
# set up an empty temporary work directory
rm -rf vercel-tmp || true
mkdir vercel-tmp
cd vercel-tmp
# checkout the current commit
git init
git remote add origin https://$GITHUB_ACCESS_TOKEN@$MAIN_REPO
git fetch --depth=1 origin $VERCEL_GIT_COMMIT_SHA
git checkout $VERCEL_GIT_COMMIT_SHA
# set the submodule repo paths to ones that vercel can access
cat .gitmodules > .gitmodules.original
cat .gitmodules | sed "s/github.com/$GITHUB_ACCESS_TOKEN@&/" > .gitmodules
# checkout the submodule
git submodule sync
git submodule update --init --recursive 2>&1 | sed "s/$GITHUB_ACCESS_TOKEN/\*\*\*\*/"
echo "checkout successful"
ls -l vercel-tmp/$SUBMODULE_PATH

# move the submodule to where it should have been if vercel had supported submodules
cd ..
rm -rf vercel-tmp/$SUBMODULE_PATH/.git

mkdir -p $(dirname $SUBMODULE_PATH)
mv vercel-tmp/$SUBMODULE_PATH/ $SUBMODULE_PATH

# show contents of submodule path in logs
ls -l $SUBMODULE_PATH
# clean up
rm -rf vercel-tmp