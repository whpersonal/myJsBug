/**
 * Created by WH on 2017/11/12.
 */
(function () {
    function Snake(w,h,d) {
        this.width=w||20;
        this.height=h||20;
        this.direction=d||"right";
        this.body=[
            {top:1,left:3,background:"red"},
            {top:1,left:2,background:"orange"},
            {top:1,left:1,background:"orange"}
        ];
    }
    var arr=[];
    Snake.prototype.init=function (map) {
        removeSnake(map);
        //创建新蛇
        for(var i=0;i<this.body.length;i++){
            //创建节点
            var newDiv=document.createElement("div");
            //设置属性
            newDiv.style.position="absolute";
            newDiv.style.width=this.width+"px";//不要忘记写style！！！！！
            newDiv.style.height=this.height+"px";
            newDiv.style.direction=this.direction;
            this.top=this.body[i].top*this.width;
            this.left=this.body[i].left*this.height;
            newDiv.style.top=this.top+"px";
            newDiv.style.left=this.left+"px";
            newDiv.style.background=this.body[i].background;
            map.appendChild(newDiv);
            //添加到数组中，便于删除
            arr.push(newDiv);
        }
    
        
    }
    //删除旧蛇
    function removeSnake(map) {
        for(var i=0;i<arr.length;i++){
            map.removeChild(arr[i]);
            //先按照数组中的元素把map中的小蛇删除，然后单独清空数组;
        }
        arr=[];
    }


    //移动蛇，原型方法
    Snake.prototype.snakeMove=function (map,food) {
        //删除旧蛇，创建新蛇
        removeSnake(map);
        //把前一个身体位置赋值给后一个身体
        for (var i=this.body.length-1;i>=1;i--){
            this.body[i].top=this.body[i-1].top;
            this.body[i].left=this.body[i-1].left;
        }

        //处理头部
        //1.方向设置
        switch (this.direction){
            case "left":
                this.body[0].left-=1;
                break;
            case "right":
                this.body[0].left+=1;
                break;
            case "top":
                this.body[0].top-=1;
                break;
            case "bottom":
                this.body[0].top+=1;
                break;

        }
        //2.长度设置
        var snakex=this.body[0].left*this.width;
        var snakey=this.body[0].top*this.height;
        var last=this.body[this.body.length-1];
        if(snakex == food.left && snakey == food.top){
            var obj={};
            obj.top=last.top;
            obj.left=last.left;
            obj.background=last.background;
            this.body.push(obj);
       
            //吃掉食物后，产生新食物
            food.init(map);
        }

        //画一条新蛇
        this.init(map);
        
    }

    
    
    
    
    
    
    
    window.Snake=Snake;
})();

