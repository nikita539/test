function findProperty (path, obj) {  // finds property by path of format: "user.brother.name"
    Object.keys(obj).reduce((prev,curr) => {
        return prev[curr]
    }, obj)
}