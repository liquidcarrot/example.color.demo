function getRgb(hex) {

    const Regex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(Regex, function(r, g, b) {
            return r + r + g + g + b + b;    
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result ? [
     Math.round(parseInt(result[1], 16) / 2.55) / 100 , 
     Math.round(parseInt(result[2], 16) / 2.55) / 100, 
     Math.round(parseInt(result[3], 16) / 2.55) / 100
    ]  : null;
}
