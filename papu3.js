function detect()
{
    //create a iframe. Append the iframe to the body. And then after 100ms check if their offsetHeight, display or visibility is set such a way that user cannot see them.
    //In the URL use the words specific to advertising so that Adblock can do string matching.
    var iframe = document.createElement("iframe");
    iframe.height = "1px";
    iframe.width = "1px";
    iframe.id = "ads-text-iframe";
    iframe.src = "http://domain.com/ads.html";

    document.body.appendChild(iframe);

    setTimeout(function()
               {
                   var iframe = document.getElementById("ads-text-iframe");
                   if(iframe.style.display == "none" || iframe.style.display == "hidden" || iframe.style.visibility == "hidden" || iframe.offsetHeight == 0)
                   {
                        alert("Adblock is blocking ads on this page");
                        iframe.remove();
                   }
                   else
                   {
                        alert("Adblock is not detecting ads on this page");
                        iframe.remove();
                   }
               }, 100);
}
