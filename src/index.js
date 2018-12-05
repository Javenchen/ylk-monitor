import Monitor from './report'
// console.log(Report);




// class Monitor extends {
//   constructor(options) {
//     super();
//     this.report = new Report(options);
//     var _this = this;
//     if (options.performance) {
     

//       const oldOnload = window.onload
//       window.onload = e => {
//         if (oldOnload && typeof oldOnload === 'function') {
//           oldOnload(e)
//         }
//         // 尽量不影响页面主线程
//         _this.timing = performance.getEntriesByType('navigation')[0];
//         if (window.requestIdleCallback) {
//           window.requestIdleCallback(pMonitor.logPackage)
//         } else {
//           setTimeout(pMonitor.logPackage)
//         }
//       }

//     }
//   }
// }





window.Monitor=Monitor



// const rep = new Report({
//   dataKey: 'err_msg', //上报数据的属性名，用于服务器获取数据
//   mergeReport: true, // mergeReport 是否合并上报， false 关闭， true 启动（默认）
//   delay: 1000, // 当 mergeReport 为 true 可用，延迟多少毫秒，合并缓冲区中的上报（默认）
//   url: 'http://localhost:80', // 指定错误上报地址
//   getPath: '/read.gif', // get请求路径
//   postPath: '/post/jserr', // post请求路径
//   random: 1, // 抽样上报，1~0 之间数值，1为100%上报（默认 1）
// });

// rep.on('afterReport', function () {
//   console.log('afterReport');
// });
// rep.reportByPost({msg: '1111'}, function (data) {
//   console.log(data);
// });


// return Report;