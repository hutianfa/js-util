const BaseMethods = {
	/**
	 * @desc 隐式显示电话号码	 
	 * @param {*} phone 
	 */
	convetPhone:(phone) =>{
		if(typeof phone !== 'string') phone = String(phone);
		return phone.replace(phone.substring(3,7),'****');
	},
	/**
	 * @desc 判断数组对象中是否包含某一属性的值为value的集合
	 * @param {*} arr 
	 * @param {*} attr 
	 * @param {*} value 
	 */
	judgeObjValue: (arr,attr,value)=>{
		if(arr instanceof Array)
		return endArr = Array.from(arr,({attr})=>attr).some(item=>item == value);
	},
	/**
	 * @desc 数组对象去重
	 * @param {*} arr 
	 * @param {*} attr 
	 */
	dedupArr:(arr,attr)=>{
		if(arr instanceof Array)
		return arr.reduce((item, next)=>{
			 hash[next.attr] ? '' : hash[next.attr] = true && item.push(next);
			 return item;
		},[]);
	},
	/**
	 * @desc 取出数组对象属性
	 * @param {*} arr 
	 * @param {*} attr 
	 */
	getAttrs:(arr,attr)=>{
		if(arr instanceof Array)
		return arr.map((item)=>{
			return item[attr]
		})
	},
	/**
	 * @desc 格式化年月日
	 * @param {Object} value
	 */
	formatterChinese:function(value){
		let arr = value.substring(0,10).split('-');
		return arr[0]+'年'+arr[1]+'月'+arr[2]+'日';
	},
	/**
	 * @desc 数组对象分组
	 * @param {Object} arr
	 * @param {Object} attrName
	 */
	gropArr:function(arr,attrName){
	    const s = new Set();//实例化对象
	    arr.forEach(item=>s.add(item[attrName])); //添加值（set可以去掉重复数据）
	    let newdata = Array.from({length:s.size},()=>[]);//创建指定长度数组并添值
	    arr.forEach(item=>{
			let index = [...s].indexOf(item[attrName]);
			newdata[index].push(item);
	    })
	    return newdata;
	},
	/**
	 * @desc 找出数组中重复出现的元素
	 * @param {Object} arr
	 */
	duplicates:function(arr) {
	    return arr.reduce((prev, current, index, arrs) => {
	        if(arrs.lastIndexOf(current) !== index && !prev.includes(current)) {
	            prev.push(current);
	        }
	        return prev;
	    },[]);
	},
	/**
	 * @desc 金额累加
	 * @param {Object} arr
	 * @param {Object} key
	 */
	addMoney:function(arr,key){
		return arr.reduce((pre, cur, index,arr)=>{
		    return pre + cur[key]
		},0)
	},
	/**
	 * @desc 取出数组对象的最大值
	 * @param {Object} arr
	 * @param {Object} key
	 */
	calcMax:function(arr,key){
		return Math.max.apply(Math,arr.map(item=>item[key]));
	},
	/**
	 * @desc 取出数组对象的最小值
	 * @param {Object} arr
	 * @param {Object} key
	 */
	calcMin:function(arr,key){
		return Math.min.apply(Math,arr.map(item=>item[key]));
	},
	/**
	 * @desc 获取浏览器地址参数
	 * @param {Object} sUrl
	 * @param {Object} sKey
	 */
	getUrlParam:function(sUrl, sKey) {
	    let arr = sUrl.split("?")[1].split("#")[0].split("&"), obj={};
	    arr.forEach(item=>{
	        let [key, value] = item.split("=");
	        if(key in obj){
	            obj[key] = [].concat(obj[key], value);
	        }else{
	            obj[key] = value
	        }
	    })
	    return sKey ? obj[sKey] || "" : obj;
	},
	/**
	 * @desc 数组过滤
	 * @param {Object} arr
	 * @param {Object} key
	 * @param {Object} value
	 */
	calcArray:function(arr,key,value){
		return arr.filter(item=>item[key] == value);
	},
	/**
	 * @desc 格式化时间
	 * @param {Object} date
	 * @param {Object} isTime
	 */
	formatterTime:function(date,isTime){
	  isTime = isTime || 0;
	  var time = new Date(date);
	  var Y = time.getFullYear();
	  var M = time.getMonth();
	  M = (M+1) < 10 ? '0' + (M+1) : (M+1); 
	  var d = time.getDate();
	  d = d < 10 ? '0' + d : d;
	  var h = time.getHours();
	  h = h < 10 ? '0' + h : h;
	  var m = time.getMinutes();
	  m = m < 10 ? '0' + m : m;
	  var s = time.getSeconds();
	  s = m < 10 ? '0' + m : m;
	  return isTime == 1 ? (Y+"-"+M+"-"+d+" "+ h + ":" + m + ":" + s) : (Y+"-"+M+"-"+d);
	},
	/**
	 * @desc 下载文件
	 * @param {Object} content
	 * @param {Object} filename
	 */
	downExcel:function(content,filename){
		var eleLink = document.createElement('a'); 
		eleLink.download = filename; 
		eleLink.style.display = 'none'; 
		// 字符内容转变成blob地址 
		var blob = new Blob([content]);
		eleLink.href = URL.createObjectURL(blob); 
		// 自动触发点击 
		document.body.appendChild(eleLink); 
		eleLink.click(); 
		// 然后移除 
		document.body.removeChild(eleLink); 
	},
	/**
	 * @desc 获取浏览器地址参数
	 * @param {Object} id
	 */
	getUrlKey:function(id){
		return decodeURIComponent((new RegExp('[?|&]' + id + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
	},
	/**
	 * 
	 * @desc   url参数转对象
	 * @param  {String} url  default: window.location.href
	 * @return {Object} 
	 */
	parseQueryString:function(url) {
	    url = !url ? window.location.href : url;
	    if(url.indexOf('?') === -1) {
	        return {};
	    }
	    var search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
	    if (search === '') {
	        return {};
	    }
	    search = search.split('&');
	    var query = {};
	    for (var i = 0; i < search.length; i++) {
	        var pair = search[i].split('=');
	        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
	    }
	    return query;
	},
	/**
	 * 
	 * @desc   对象序列化
	 * @param  {Object} obj 
	 * @return {String}
	 */
	stringfyQueryString:function(obj) {
	    if (!obj) return '';
	    var pairs = [];
	    for (var key in obj) {
	        var value = obj[key];
	        if (value instanceof Array) {
	            for (var i = 0; i < value.length; ++i) {
	                pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
	            }
	            continue;
	        }
	        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
	    }
	    return pairs.join('&');
	},
	/** 
	 * @desc 获取指定日期月份的总天数
	 * @param {Date} time
	 * @return {Number}
	*/
	monthDays:function(time){
	    time = new Date(time);
	    var year = time.getFullYear();
	    var month = time.getMonth() + 1;
	    return new Date(year, month, 0).getDate();
	},
	/**
	 * 
	 * @desc H5软键盘缩回、弹起回调
	 * 当软件键盘弹起会改变当前 window.innerHeight，监听这个值变化
	 * @param {Function} downCb 当软键盘弹起后，缩回的回调
	 * @param {Function} upCb 当软键盘弹起的回调
	 */
	windowResize:function(downCb, upCb) {
		var clientHeight = window.innerHeight;
		downCb = typeof downCb === 'function' ? downCb : function () {}
		upCb = typeof upCb === 'function' ? upCb : function () {}
		window.addEventListener('resize', () => {
			var height = window.innerHeight;
			if (height === clientHeight) {
				downCb();
			}
			if (height < clientHeight) {
				upCb();
			}
		});
	},
	/**
	 * 
	 * @desc 随机生成颜色
	 * @return {String} 
	 */
	randomColor:function() {
	    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
	}
	
}
export default BaseMethods