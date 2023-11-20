export const soundsPush = ((username, files, dir) => {
    // username - that owns the sounds
    // nft - ID or link
    // dir - is directory location, is it in the user root folder or deeper
    // files - are basically all filenames and their extensions
    let sounds = []
    let haveDir
    dir ? haveDir = dir + '/' : haveDir = ''

    files.forEach(el => {
        sounds.push(new Audio(`/sounds/${username}/${haveDir}${el}`));
    })
    return sounds
})