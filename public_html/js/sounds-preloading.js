const defaultFiles = ['click.mp3', 'send.mp3', 'message.mp3', 'message-reverse.mp3', 'inspect.mp3', 'bell.mp3', 'like.mp3', 'drawer.mp3', 'drawer-reverse.mp3', 'swing.mp3', 'sword-swing.mp3', 'whoosh.mp3', 'bamboo-swing.mp3', 'dark.mp3', 'light.mp3']

export const defaultSounds = ((username, files, dir) => {
    // username - that owns the sounds
    // nft - ID or link
    // dir - is directory location, is it in the user root folder or deeper
    // files - are basically all filenames and their extensions
    const filesArray = files || defaultFiles;

    let soundOn
    localStorage.getItem('sound') === '1' ? soundOn = true : soundOn = false

    if (soundOn) {
        let sounds = []
        let haveDir
        dir ? haveDir = dir + '/' : haveDir = '';

        filesArray.forEach(el => {
            sounds.push(new Audio(`/sounds/${username}/${haveDir}${el}`));
        })

        return sounds
    } else {
        return null
    }

})