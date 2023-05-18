function path(url) {
    const path = url.split('/');
    path.shift();
  
    if (path[path.length - 1].indexOf('?') !== -1)
      path[path.length - 1] = path[path.length - 1].split('?')[0];
    return path;
  }
  
  function query(url) {
    const queryStr = url.split('?').pop().split('=');
    const queryObj = {};
  
    queryStr.forEach((key, index) => {
      if (index % 2 === 0 && queryStr.length > index + 1) {
        const value = queryStr[index + 1];
        queryObj[key] = value;
      }
    });
  
    return queryObj;
  }
  
  export default { path, query };