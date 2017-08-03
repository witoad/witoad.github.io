// navigator.serviceWorker.register('/sw.js').then(function(registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }).catch(function(err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
let cacheKey = "BA07401E01S-D1211";
let cacheList = ["BA07401E01S-D1211-00 目录-Model.svg",
   				 "BA07401E01S-D1211-01 卷册说明-Model.svg",
                 "BA07401E01S-D1211-02 1000kV第一串断路器继电保护配置图-Model.svg",
                 "BA07401E01S-D1211-03 1000kV第一串I母断路器保护屏屏面布置图-Model.svg",
                 "BA07401E01S-D1211-04 1000kV第一串I母断路器保护屏公用回路图-Model.svg", 
                 "BA07401E01S-D1211-05 1000kV第一串I母断路器保护屏电流电压回路图-Model.svg",
   				 "BA07401E01S-D1211-06 1000kV第一串I母断路器保护屏输入回路图-Model.svg", 
   				 "BA07401E01S-D1211-07 1000kV第一串I母断路器保护屏输出回路图-Model.svg", 
   				 "BA07401E01S-D1211-08 1000kV第一串I母断路器保护屏信号回路图-Model.svg", 
   				 "BA07401E01S-D1211-09 1000kV第一串I母断路器保护屏断路器操作箱接线图一-Model.svg", "BA07401E01S-D1211-10 1000kV第一串I母断路器保护屏断路器操作箱接线图二-Model.svg", "BA07401E01S-D1211-11 1000kV第一串I母断路器保护屏断路器操作箱接线图三-Model.svg", "BA07401E01S-D1211-12 1000kV第一串I母断路器保护屏断路器操作箱接线图四-Model.svg", "BA07401E01S-D1211-13 1000kV第一串I母断路器保护屏断路器操作箱接线图五-Model.svg", "BA07401E01S-D1211-14 1000kV第一串I母断路器保护屏端子排图-Model.svg", "BA07401E01S-D1211-15 1000kV第一串中间断路器保护屏屏面布置图-Model.svg", "BA07401E01S-D1211-16 1000kV第一串中间断路器保护屏公用回路图-Model.svg", "BA07401E01S-D1211-17 1000kV第一串中间断路器保护屏电流电压回路图-Model.svg", "BA07401E01S-D1211-18 1000kV第一串中间断路器保护屏输入回路图-Model.svg", "BA07401E01S-D1211-19 1000kV第一串中间断路器保护屏输出回路图-Model.svg", "BA07401E01S-D1211-20 1000kV第一串中间断路器保护屏信号回路图-Model.svg", "BA07401E01S-D1211-21 1000kV第一串中间断路器保护屏断路器操作箱接线图一-Model.svg", "BA07401E01S-D1211-22 1000kV第一串中间断路器保护屏断路器操作箱接线图二-Model.svg", "BA07401E01S-D1211-23 1000kV第一串中间断路器保护屏断路器操作箱接线图三-Model.svg", "BA07401E01S-D1211-24 1000kV第一串中间断路器保护屏断路器操作箱接线图四-Model.svg", "BA07401E01S-D1211-25 1000kV第一串中间断路器保护屏断路器操作箱接线图五-Model.svg", "BA07401E01S-D1211-26 1000kV第一串中间断路器保护屏端子排图-Model.svg", "BA07401E01S-D1211-27 1000kV第一串II母断路器保护屏屏面布置图-Model.svg", "BA07401E01S-D1211-28 1000kV第一串II母断路器保护屏公用回路图-Model.svg", "BA07401E01S-D1211-29 1000kV第一串II母断路器保护屏电流电压回路图-Model.svg", "BA07401E01S-D1211-30 1000kV第一串II母断路器保护屏输入回路图-Model.svg", "BA07401E01S-D1211-31 1000kV第一串II母断路器保护屏输出回路图-Model.svg", "BA07401E01S-D1211-32 1000kV第一串II母断路器保护屏信号回路图-Model.svg", "BA07401E01S-D1211-33 1000kV第一串II母断路器保护屏断路器操作箱接线图一-Model.svg", "BA07401E01S-D1211-34 1000kV第一串II母断路器保护屏断路器操作箱接线图二-Model.svg", "BA07401E01S-D1211-35 1000kV第一串II母断路器保护屏断路器操作箱接线图三-Model.svg", "BA07401E01S-D1211-36 1000kV第一串II母断路器保护屏断路器操作箱接线图四-Model.svg", "BA07401E01S-D1211-37 1000kV第一串II母断路器保护屏断路器操作箱接线图五-Model.svg", "BA07401E01S-D1211-38 1000kV第一串II母断路器保护屏端子排图-Model.svg", "BA07401E01S-D1211-39 1000kV青州换流站二线线路保护屏I屏面布置图-Model.svg", "BA07401E01S-D1211-40 1000kV青州换流站二线线路保护屏I公用回路图-Model.svg", "BA07401E01S-D1211-41 1000kV青州换流站二线线路保护屏I电流电压回路图-Model.svg", "BA07401E01S-D1211-42 1000kV青州换流站二线线路保护屏I输入回路图-Model.svg", "BA07401E01S-D1211-43 1000kV青州换流站二线线路保护屏I屏出口回路图-Model.svg", "BA07401E01S-D1211-44 1000kV青州换流站二线线路保护屏I信号回路图-Model.svg", "BA07401E01S-D1211-45 1000kV青州换流站二线线路保护屏I保护通道接口示意图-Model.svg", "BA07401E01S-D1211-46 1000kV青州换流站二线线路保护屏I端子排图-Model.svg", "BA07401E01S-D1211-47 1000kV青州换流站二线线路保护屏II屏面布置图-Model.svg", "BA07401E01S-D1211-48 1000kV青州换流站二线线路保护屏II公用回路图-Model.svg", "BA07401E01S-D1211-49 1000kV青州换流站二线线路保护屏II电流电压回路图-Model.svg", "BA07401E01S-D1211-50 1000kV青州换流站二线线路保护屏II输入回路图-Model.svg", "BA07401E01S-D1211-51 1000kV青州换流站二线线路保护屏II屏出口回路图-Model.svg", "BA07401E01S-D1211-52 1000kV青州换流站二线线路保护屏II信号回路图-Model.svg", "BA07401E01S-D1211-53 1000kV青州换流站二线线路保护屏II保护通道接口示意图-Model.svg", "BA07401E01S-D1211-54 1000kV青州换流站二线线路保护屏II端子排图-Model.svg"];
self.addEventListener("install",(event) => {
	event.waitUntil(
		caches
		    .open(cacheKey)
	        .then(cache => cache.addAll(cacheList))
	        );

})
// self.addEventListener("activate",(event) => {
// 	event.waitUntil(
// 		caches.key().then(key =>{
// 			let ops = keys.map(key =>{
// 				if(key !== cacheKey) return caches.delete(key);
// 			});
// 			return Promise.all(ops);
// 		})
//     )
// });
self.addEventListener("fetch",(event) => {
	let req = event.request;
	event.respondWith(
		caches
			  .match(req).then(res => res.clone())
			  .catch(err => fetch(req))
		);
});