const Validate  ={
 	/**
	 * @desc 手机号验证
	 * @param {*} mobile 
	 */
    mobileCheck: (mobile) => {
        let reg = /^[1][3,4,5,7,8][0-9]{9}$/
        return reg.test(mobile)
    },
	/**
	 * @desc 0.01-9999.99 n位数验证
	 * @param {*} number 
	 * @param {*} index 
	 */
	checkFloat:(number,index)=>{
		let reg = `/(^[1-9]\d{0,${index}}$)|(^1\.\d{1,2}$)|(^[0-9]\d{0,${index}}\.\d{1,2}$)/`;
		return reg.test(number)
	},
	/**
	 * @desc 1-99 n位整数验证
	 * @param {*} number 
	 * @param {*} index 
	 */
	checkInt:(number,index)=>{
		let reg =`/^[1-9][0-9]{0,${index}}?$/`;
		return reg.test(number);
	},
	
}
export default Validate;