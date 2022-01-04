// 注意：每次调用 $.get() 或 $.post() 或 $.ajax() 的时候，会先调用 ajaxPrefilter 这个函数（只有这个函数调用完毕之后，才会发起真正的请求）
// 在这个函数中，可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function(options) {
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url;
    console.log(options.url);
})