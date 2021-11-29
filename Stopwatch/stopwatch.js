var timer=false
var ms=0
var s=0
var m=0
var h=0
msec=document.getElementById('msec')
hr=document.getElementById('hr')
min=document.getElementById('min')
sec=document.getElementById('sec')
function startWatch(){
    if (document.getElementById('Start').innerText=="Start"){
        timer=true
        document.getElementById('Start').innerText="Stop"
        watch()

    }
    else{
        timer=false
        document.getElementById('Start').innerText="Start"
    }
    
}

function resetWatch(){
    timer=false
    document.getElementById('Start').innerText="Start"
    ms=0
    s=0
    m=0
    h=0
    msec.innerText="00"
    sec.innerText="00"
    min.innerText="00"
    hr.innerText="00"
    
}
function watch(){
    if (timer==true){
        ms=ms+1

            if(ms>99){
                ms=0
                s=s+1
            }
            if(s>59){
                s=0
                m=m+1
            }
            if(m>59){
                h=h+1
                m=0
                s=0
            }
            msec=document.getElementById('msec')
            hr=document.getElementById('hr')
            min=document.getElementById('min')
            sec=document.getElementById('sec')
            msec.innerText=ms
            if(s<10){
                sec.innerText="0"+s

            }
            else{

                sec.innerText=s
            }
            if(m<10){

                min.innerText="0"+m
            }
            else{

                min.innerText=m
            }
            if(h<10){

                hr.innerText="0"+h
            }
            else{

                hr.innerText=h
            }
            setTimeout("watch()",10)
    }    

}