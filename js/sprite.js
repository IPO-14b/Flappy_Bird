/**
 *Инициализация всех спрайтов
 * 
 * @param  {Image} img спрайт картинка
 */
function initSprites(img) {
    s_bird = [
        new Sprite(img, 156, 115, 17, 12),
        new Sprite(img, 156, 128, 17, 12),
        new Sprite(img, 156, 141, 17, 12)
    ];
	
    s_bg = new Sprite(img,   0, 0, 138, 114);
    s_bg.color = "#70C5CF"; // save background color
    s_fg = new Sprite(img, 138, 0, 112,  56);
	
    s_pipeNorth = new Sprite(img, 251, 0, 26, 200);
    s_pipeSouth = new Sprite(img, 277, 0, 26, 200);
	
    s_text = {
        FlappyBird: new Sprite(img, 59, 114, 96, 22),
        GameOver:   new Sprite(img, 59, 136, 94, 19),
        GetReady:   new Sprite(img, 59, 155, 87, 22)
    }
    s_buttons = {
        Rate:  new Sprite(img,  79, 177, 40, 14),
        Menu:  new Sprite(img, 119, 177, 40, 14),
        Share: new Sprite(img, 159, 177, 40, 14),
        Score: new Sprite(img,  79, 191, 40, 14),
        Ok:    new Sprite(img, 119, 191, 40, 14),
        Start: new Sprite(img, 159, 191, 40, 14)
	}