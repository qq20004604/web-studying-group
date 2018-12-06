/**
 * Created by 零零水 on 2018/12/6.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */

const ajax = function () {
    // 最大异步请求时间（ms）
    const MAX_AJAX_TIME = 2000;
    // 成功率（0为必定失败，100 为 100% 成功）
    const SUCCESS_PERCENT = 50;

    return new Promise((resolve, reject) => {
        let delay = Math.random() * MAX_AJAX_TIME

        setTimeout(() => {
            console.log("本次异步请求耗时：" + delay + "ms")
            if (Math.random() * 100 < SUCCESS_PERCENT) {
                console.log("%c%s", 'color:green', '成功')
                // 登陆成功
                resolve();
            } else {
                console.log("%c%s", 'color:red', '失败')
                // 登陆失败
                reject();
            }

        }, delay);
    })
}

// 测试代码
ajax().then(() => {
    // 成功
    // ... TODO
    console.log('success');
}).catch(() => {
    // 失败
    // ... TODO
    console.log('fail');
})
