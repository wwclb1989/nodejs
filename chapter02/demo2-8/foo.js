console.log("foo模块被加载");
delete require.cache[module.filename];
