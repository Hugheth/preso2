#!/usr/bin/env python
#
# Upload a (set of) named file(s) to TiddlySpace
#
# expects a ~/.tiddlyspace-cookie file
#
# For Example:
#
#   $ tsupload bengillies tsupload -t cli -t upload -t tiddlyspace -t script -t python -B '{{{' -A '}}}'
#
# will upload this file to http://bengillies.tiddlyspace.com/tsupload
#
# written by Ben Gillies

import sys
from optparse import OptionParser
import os
import re
from httplib2 import Http
from urllib import quote

TYPES = {
    'js': 'text/javascript',
    'html': 'text/html',
    'css': 'text/css',
    'png': 'image/png',
    'tid': 'text/plain'
}

def main(space, title, tiddler, tags, before, after):
    cookie = open(os.path.expanduser('~/.tiddlyspace-cookie'), 'r').read()
    http = Http()
    headers = {
        'Cookie': cookie.strip()
    }
    suffix = ''
    stdin = False
    if getattr(tags, '__iter__', None):
        tags = ['[[%s]]' % tag for tag in tags]
    else:
        tags = []

    if tiddler:
        tiddler_file = open(tiddler, 'r')
        if title == None:
            title = tiddler_file.name[tiddler_file.name.rfind('/') + 1:]
    else:
        tiddler = title
        stdin = True

    try:
        suffix = tiddler.rsplit('.', 1)[1]
    except IndexError:
        suffix = 'tid'

    try:
        body_type = TYPES[suffix]
        headers['Content-Type'] = body_type
    except KeyError:
        body_type = None

    if body_type == 'text/html' and title.endswith('.html'):
        title = title.rsplit('.', 1)[0]
    elif body_type == 'text/plain' and title.endswith('.tid'):
        title = title.rsplit('.', 1)[0]

    title = quote(title).replace('/', '%2F')
    uri = 'http://%s.tiddlyspace.com/bags/%s_public/tiddlers/%s' % (space,
        space, title)


    if not stdin:
        body = tiddler_file.read()
    else:
        body = sys.stdin.read()

    if before:
        body = '%s\n%s' % (before, body)
    if after:
        if not body.endswith('\n'):
            body += '\n'
        body += after

    if len(tags) > 0:
        tag_line = 'tags: %s\n' % ' '.join(tags)
        if body_type != 'text/plain':
            type_line = 'type: %s\n' % body_type
            headers['Content-Type'] = 'text/plain'
        else:
            type_line = ''
        body = '%s%s\n%s' % (tag_line, type_line, body)
    elif body_type == 'text/plain':
        regex = '\w+: .*'
        if not re.match(regex, body.split('\n', 1)[0]):
            body = 'tags: \n\n' + body

    res, content = http.request(uri, method='PUT', headers=headers, body=body)


if __name__ == '__main__':
    usage = 'usage: %prog [options] space file1 file2 ..'
    parser = OptionParser(usage=usage)
    parser.add_option('-N', '--name', help='set a custom title')
    parser.add_option('-t', '--tag', action='append', help='add a tag')
    parser.add_option('-B', '--before', help='add text before file')
    parser.add_option('-A', '--after', help='add text after file')
    options, args = parser.parse_args()
    title = options.name
    tags = options.tag
    before = options.before
    after = options.after
    space = args[0]

    try:
        tiddlers = args[1:]
    except IndexError:
        tiddlers = [filename.strip() for filename in sys.stdin.readlines()]

    for tiddler in tiddlers:
        main(space, title, tiddler, tags, before, after)
