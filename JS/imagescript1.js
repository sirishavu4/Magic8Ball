var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'IMAGES/1.png';

imgArray[1] = new Image();
imgArray[1].src = 'IMAGES/2.png';

/* ... more images ... */

imgArray[5] = new Image();
imgArray[5].src = 'IMAGES/6.png';

/*------------------------------------*/

function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}