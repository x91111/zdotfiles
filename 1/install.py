#!/usr/bin/env python

import sys
import os

from os import listdir
from os.path import islink, join, expanduser

home = expanduser("~/")
_1_directory = expanduser("~/zdotfiles/1/wDell")
directory = expanduser("~/zdotfiles")

excludes = ["pure", "README.md", ".gitmodules", ".git", "bin"]
linux_only_excludes = ["Xresources", "xinitrc",
                       "xmobarrc", "xmonad.hs", "zprofile"]
# is linux
try:
    if sys.argv[1] == "linux":
        pass
except IndexError:
    excludes = excludes + linux_only_excludes

# list files
files = [f for f in listdir(_1_directory) if f not in excludes]

for f in files:
    src = join(_1_directory, f)
    dest = join(home, ".%s" % f)

    if not islink(dest):
        print "Symlinking %s to %s" % (src, dest)
        os.symlink(src, dest)
    else:
        print "Unlinking %s to %s" % (src, dest)
        os.unlink(dest)
        print "Symlinking %s to %s" % (src, dest)
        os.symlink(src, dest)

