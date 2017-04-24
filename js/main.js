var canvas, ctx, width, height,
        frames=0, score=0, best=0, fgpos = 0,
        currentstate,
        states = {
            Splash: 0, Game: 1, Score: 2
        },
        
        birb={
            x: 80,
            y: 0,
            frame:0,
            animation: [0,1,2,1],
            rotation :0,
            gravity: 0.25,
            velocity: 0,
            _jump: 4.6,
            
            jump: function(){
                this.velocity = -this._jump;
            },
            
            update: function(){
                var n  = currentstate===states.Splash ? 10: 5;
                this.frame+= frames % n === 0 ? 1: 0;
                this.frame %=this.animation.length;
                
                if (currentstate === states.Splash){
                    this.y = height-280+5*Math.cos(frames/10);
                    this.rotation = 0;
                }else{
                    this.velocity+=this.gravity;
                    this.y+= this.velocity;
                    
                    if(this.y>= height-s_fg.height-10){
                        this.y=height - s_fg.height-10;
                        
                        if(currentstate===states.Game){
                            currentstate=states.Score;
                        }
                        this.velocity = this._jump;
                    }
                    
                    
                }
            },
            
            draw: function(ctx){
                ctx.save();
                ctx.translate(this.x,this.y);
                ctx.rotate(this.rotation);
                
                var n=this.animation[this.frame];
                s_bird[n].draw(ctx,-s_bird[n].width/2, -s_bird[n].height/2);
                ctx.restore();
            }
        },
        
        pipes = {
            update: function(){
                
            },
            
            draw: function(ctx){
                
            }
        };
        
        function main(){
            canvas = document.createElement("canvas");
            
            width=window.innerWidth;
            height = window.innerHeight;
            
            var evt = "touchstart";
            
            if(width>=500){
                width=320;
                height=480;
                canvas.style.border="1px solid #000";
                evt = "mousedown";
            }
            
            document.addEventListener(evt,onpress);
            
            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext("2d");
            
            currentstate = states.Splash;
            
            document.body.appendChild(canvas);
            
            var img = new Image();
            
            img.onload = function(){
                initSprites(this);
                ctx.fillStyle = s_bg.color;
                run();
            }
            
            img.src = "res/sheet.png";
        }
        
        function run(){
            var loop = function(){
                update();
                render();
                window.requestAnimationFrame(loop, canvas);
            }
            window.requestAnimationFrame(loop, canvas);
        }
 
        function onpress(evt){
            switch(currentstate){
                case states.Splash:
                    currentstate = states.Game;
                    birb.jump();
                    break;
                    
                case states.Game:
                    birb.jump();
                    break;
                    
                case states.Score:
                    break;
            }
        }

        function update(){
            frames++;
            
            fgpos = (fgpos - 2)%14;
            
            birb.update();
            pipes.update();
        }
        
        function render(){ 
            ctx.fillRect(0, 0, width, height);
            
            s_bg.draw(ctx, 0, height - s_bg.height);
	        s_bg.draw(ctx, s_bg.width, height - s_bg.height);
            
            birb.draw(ctx);
            pipes.draw(ctx);
            
            s_fg.draw(ctx, fgpos, height - s_fg.height);
            s_fg.draw(ctx, fgpos+s_fg.width, height - s_fg.height);
            
            var width2 = width/2;
            
            if(currentstate === states.Splash){
                s_splash.draw(ctx, width2-s_splash.width/2,height-300 );
                s_text.GetReady.draw(ctx, width2 - s_text.GetReady.width/2, height-380);
            }
        }