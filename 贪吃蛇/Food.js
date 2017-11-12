/**
 * Created by WH on 2017/11/12.
 */
(function () {
    //创建食物对象，匿名函数自调用防止全局变量污染
    function Food(w,h,t,l,bg) {
        this.width=w||20;
        this.height=h||20;
        this.top=t;
        this.left=l;
        this.background=bg||"green";
    }
    //提升食物的作用范围，用于删除旧食物
    var newDiv=null;
    Food.prototype.init=function (map) {
        //删除旧食物
        removeFood(map);
        //创建新食物
        newDiv=document.createElement("div");
        newDiv.style.position="absolute";
        newDiv.style.width=this.width+"px";
        newDiv.style.height=this.height+"px";
        this.top=parseInt(Math.random()*(map.offsetHeight-this.height)/this.height)*this.height;
        this.left=parseInt(Math.random()*(map.offsetWidth-this.width)/this.width)*this.width;
        //this.top=20;
        //this.left=80;
        newDiv.style.top=this.top+"px";
        newDiv.style.left=this.left+"px";
        newDiv.style.background=this.background;
        //添加到map中
        map.appendChild(newDiv);
    }
     //删除旧食物
    function removeFood(map){
        if(newDiv != null){
            map.removeChild(newDiv);
        }
    }
    //提升为全局变量
    window.Food=Food;
  
})();