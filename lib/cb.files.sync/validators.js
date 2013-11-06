// Requires
var has = require('./utils').has;
var truth = require('./utils').truth;

// UTILITY

function isCursor(cursor) {
    return has(cursor,
        ['x', 'y']
    );
}

function isHash(hash) {
    return has(hash,
        ['before', 'after']
    );
}

// VALIDATORS :


// Dummy validators
var ping = truth;
var sync = truth;
var close = truth;


function base(data) {
    return has(data,
        [
            'token',
            'from',
            'action',
            'path'
        ]
    );
}

function selectCursor(data) {
    return isCursor(data.start) && isCursor(data.end);
}

function moveCursor(data) {
    return has(data,
        ['from']
    ) && isCursor(data.cursor);
}

function patch(data) {
    return has(data,
        ['patch']
    ) && isHash(data.hashs);
}

// Exports
exports.base = base;
exports.ping = ping;
exports.sync = sync;
exports.close = close;
exports.patch = patch;
exports.moveCursor = moveCursor;
exports.selectCursor = selectCursor;