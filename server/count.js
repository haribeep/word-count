exports.count = string => {
    let map = {}
    const words = string.split(" ").filter(word => word !== "")
  
    for (let i = 0; i < words.length; i++) {
      const item = words[i]
      map[item] = (map[item] + 1) || 1
    }
  
    return map
  }