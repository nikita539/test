function findProperty (path, obj) {  // finds property by path of format: "user.brother.name"
    return path.split('.').reduce((prev,curr) => {
        return prev[curr]
    }, obj) || null
}