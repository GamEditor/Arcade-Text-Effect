class Effect {
    constructor(text, selector, miliSecondsDelay) {
        const container = document.querySelectorAll(selector);
        if (container.length > 0) {
            this.text = text;
            this.container = container;
            this.delay = miliSecondsDelay;
            this.ready = true;
        } else {
            this.ready = false;
            console.error("invalid selector!");
        }
    }

    start() {
        if (this.ready && !this.interval) {
            let textIndex = 0;
            const _this = this;
            this.interval = setInterval(function () {
                if (textIndex < _this.text.length) {
                    for (let i = 0; i < _this.container.length; i++) {
                        _this.container[i].innerHTML += _this.text[textIndex];
                    }
                    ++textIndex;
                } else {
                    clearInterval(_this.interval);
                }
            }, this.delay);
        }
    }

    skip() {
        clearInterval(this.interval);
        for (let i = 0; i < this.container.length; i++) {
            this.container[i].innerHTML = this.text;
        }
    }
}

let e = new Effect("DO YOU REMEMBER THIS TEXT EFFECT FROM OLD GAMES?", ".arcade", 80);
e.start();