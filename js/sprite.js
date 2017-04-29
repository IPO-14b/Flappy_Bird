var s_bird, s_bg, s_fg, s_pipeNorth, s_pipeSouth, s_text, s_score, s_splash, s_buttons, s_numberS, s_numberB;

/**
 *Спрайт класс
 *
 *@param {Image}  img    спрайт каринка
 * @param {number} x      x-позиция в спрайте
 * @param {number} y      y-позиция в спрайте
 * @param {number} width  ширина спрайта 
 * @param {number} height высота спрайта
 */
function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x*2;
    this.y = y*2;
    this.width = width*2;
    this.height = height*2;
};