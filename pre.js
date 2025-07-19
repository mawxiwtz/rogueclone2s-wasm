if ((typeof navigator=="object"&&navigator.language||"C") === 'ja') {
    Module['arguments'] = ['/msg/mesg'];
} else {
    Module['arguments'] = ['/msg/mesg_E'];
}

Module['preRun'] = [() => {
    ENV['FIGHTER'] = 'adventurer';

    const url = new URL(import.meta.url);
    const dir = url.pathname.substring(0, url.pathname.lastIndexOf('/'));

    FS.mkdir('/msg', 555);
    FS.createPreloadedFile('/msg', 'mesg', `${dir}/msg/mesg`, true, false);
    FS.createPreloadedFile('/msg', 'mesg_E', `${dir}/msg/mesg_E`, true, false);
    FS.mkdir('/home/web_user/.terminfo', 555);
    FS.mkdir('/home/web_user/.terminfo/x', 555);
    FS.createPreloadedFile(
        '/home/web_user/.terminfo/x',
        'xterm-256color',
        `${dir}/xterm-256color`,
        true,
        false,
    );
}];
