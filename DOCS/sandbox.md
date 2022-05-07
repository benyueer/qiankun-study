### 简介
沙箱又叫沙盘，是一个虚拟系统程序，允许你在沙盘环境中运行浏览器程序或其他程序，运行产生的变化可以随后删除。它创造了一个类似沙盘的独立运行环境，在其内部运行的程序并不能对硬盘产生永久性的影响。
qiankun中的沙箱是为了解决微前端方案中的隔离问题。
single-spa存在一些问题，比如为每一个微应用提供一个独立、干净的运行环境。js全局污染是一个很常见的现象，例如：微应用A在全局对象上添加了自己的属性window.a，那么在切换到微应用B时，如何保证全局对象是干净的呢？答案就是沙箱。

### JS沙箱

### 样式沙箱



[reference1](https://juejin.cn/post/6885211340999229454)
[reference2](https://mp.weixin.qq.com/s?__biz=MzA3NTk4NjQ1OQ==&mid=2247484245&idx=1&sn=9ee91018578e6189f3b11a4d688228c5&chksm=9f696021a81ee937847c962e3135017fff9ba8fd0b61f782d7245df98582a1410aa000dc5fdc&token=1002082546&lang=zh_CN#rd)
[reference3](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA3NTk4NjQ1OQ==&action=getalbum&album_id=2251416802327232513&scene=173&from_msgid=2247484245&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
[reference4](https://segmentfault.com/a/1190000022275991)
[reference5](https://juejin.cn/post/6981374562877308936)