function show(obj) {
    this.width = obj.width;
    this.background = obj.background;
    this.height = obj.height;
    this.btn = obj.btn;
    this.con = obj.con;
    this.color = obj.color;
    this.wiw = document.documentElement.clientWidth || document.body.clientWidth;
    this.wih = document.documentElement.clientHeight || document.body.clientHeight;
    this.init();
}
show.prototype = {
    constructor: show,
    init: function() {
        const box = document.createElement('div');
        box.style = 'width:' + this.width + 'px;height:' + this.height + 'px;background:' + this.background + ';left:' + (this.wiw - this.width) / 2 + 'px;top:' + (this.wih - this.height) / 2 + 'px;position:absolute;z-index:999;color:' + this.color;
        if (this.con) {
            box.innerHTML = '<p>' + this.con + '</p>';
        }
        document.body.appendChild(box)
        for (let i = 0; i < this.btn.length; i++) {
            let span = document.createElement('span');
            span.innerHTML = this.btn[i]
            box.appendChild(span);
        }
        const top = document.createElement('div');
        document.body.appendChild(top);
        const spans = document.querySelectorAll('span');
        box.className = 'box';
        top.className = 'top';
        spans[0].onclick = function() {
            document.body.removeChild(top);
            document.body.removeChild(box);
        }
        spans[1].onclick = function() {
            document.body.removeChild(top);
            document.body.removeChild(box);
        }
    }
}