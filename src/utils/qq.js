export const openQQ = (qq)=> {  
    if(plus.os.name == "Android") {  
        var main = plus.android.runtimeMainActivity();  
        var Intent = plus.android.importClass('android.content.Intent');  
        var Uri = plus.android.importClass('android.net.Uri');  
        var intent = new Intent(Intent.ACTION_VIEW, Uri.parse("mqqwpa://im/chat?chat_type=wpa&uin=" + qq));  
        main.startActivity(intent);  
    }  
    if(plus.os.name == "iOS") {  
        plus.runtime.launchApplication({  
            action: "mqq://im/chat?chat_type=wpa&uin=" + qq + "&version=1&src_type=web"  
        }, function(e) {  
            plus.nativeUI.confirm("检查到您未安装qq，请先到appstore搜索下载？", function(i) {  
                if(i.index == 0) {  
                    iosAppstore("itunes.apple.com/cn/app/mqq/");  
                }  
            });  
        });  
    }  
}