const baseEvent = {
	/**
	 * @desc 自定义防抖函数
	 * @param {Object} fun
	 * @param {Object} delay
	 */
	debounce:function(fun, delay) {
		return function(args) {
			let that = this;
			let _args = args;
			clearTimeout(fun.id);
			fun.id = setTimeout(() => {
				fun.call(that, _args)
			}, delay)
		}
	},
	/**
	 * @desc 自定义节流函数
	 * @param {Object} fn
	 * @param {Object} delay
	 */
	throttle:function(fn, delay) {
		let timer = true;
		return function(args) {
			let that = this;
			let _args = arguments;
			if(!timer){
			   return false;
			}
			timer = false;
			setTimeout(() => {
				fn.apply(that, _args)
				timer = true;
			}, delay)
		}
	},
	
}

export default baseEvent;