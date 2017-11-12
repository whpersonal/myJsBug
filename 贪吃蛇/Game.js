/**
 * Created by WH on 2017/11/12.
 */
(function () {
    //创建游戏对象
    function Game(map) {
        this.map=map;
        this.food=new Food();
        this.snake=new Snake();
    }
    //游戏开始
    Game.prototype.start=function () {
        //调用food和snake原型
        this.food.init(this.map);
        this.snake.init(this.map);
        //定时器移动
        runOfTimer(this.food,this.snake,this.map);
        //按键变换方向
        pressKey(this.snake);
  
    }
    //定时器移动
    function runOfTimer(food,snake,map) {
        var timer=setInterval(function () {
            //移动
            snake.snakeMove(map,food);
            //设置范围
            var snakex=snake.body[0].left*snake.width;
            var snakey=snake.body[0].top*snake.height;
            if(snakex<0||snakey<0){
                alert("Game Over");
                clearInterval(timer);
                map.innerHTML="restart";
                
            }
            if(snakex>=map.offsetWidth||snakey>=map.offsetHeight){
                alert("Game Over");
                clearInterval(timer);
                map.innerHTML="restart";
            }
    
            } ,200);
    }
    //按键变换方向
    function pressKey(snake) {
        document.onkeydown=function (event) {
            var event=event||window.event;
            if(snake.direction == "left" || snake.direction == "right"){
                switch (event.keyCode){
                    case 38: snake.direction="top";break;
                    case 40: snake.direction="bottom";break;
                }
            }else{
                switch (event.keyCode){
                    case 37: snake.direction="left";break;
                    case 39: snake.direction="right";break;
                }
            }
        }
        
        
        
        
        
    }
    
    
    
    
    
    window.Game=Game;
    
})();