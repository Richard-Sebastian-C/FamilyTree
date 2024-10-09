class Dad {
    constructor(height, eyeColor, hairColor, voicePitch) {
        this.height = height;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
        this.voicePitch = voicePitch;
    }

    dadHeight() {
        return this.height;
    }

    dadEyeColor() {
        return this.eyeColor;
    }

    dadHairColor() {
        return this.hairColor;
    }

    dadVoicePitch(){
        return this.voicePitch;
    }
}
class Son extends Dad {
    constructor(height, eyeColor, hairColor, voicePitch) {
        super(height, eyeColor, hairColor, voicePitch);
    }
    
    sonHeight(){
        return this.height;
    }

    sonEyeColor(){
        return this.dadEyeColor();
    }

    sonHairColor(){
        return this.dadHairColor();
    }

    sonVoicePitch(){
        return this.dadVoicePitch();
    }
}

let dad = new Dad("5ft 5in", "black", "black", "deep")
let richard = new Son("5ft 7in","black", "black","deep");
document.getElementById("eyeColor").innerHTML = "Eye Color: " + richard.sonEyeColor();
document.getElementById("height").innerHTML = "Height: "+richard.sonHeight();
document.getElementById("hairColor").innerHTML ="Hair Color: " + richard.sonHairColor();
document.getElementById("voicePitch").innerHTML = "Voice Pitch: "+richard.sonVoicePitch();
