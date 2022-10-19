const youtube = document.querySelectorAll('.youtube')

for(let i = 0; i < youtube.length; i++){
    const source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg"

    let image = new Image()
    
    if(youtube[i].dataset.embed === "S6Vouca8pwQ"){
        image.src = '../assets/imgs/mqdefault.jpg'
        console.log('oba')
    } else{
        image.src = source
    }

    image.addEventListener('load', function(){
        youtube[i].appendChild(image);
    }(i))

    youtube[i].addEventListener("click", function(){
        let iframe = document.createElement("iframe")
        iframe.setAttribute( "frameborder", "0" )
        iframe.setAttribute( "allowfullscreen", "" )
        iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" )
        this.innerHTML = ""
        this.appendChild( iframe )
    })
}