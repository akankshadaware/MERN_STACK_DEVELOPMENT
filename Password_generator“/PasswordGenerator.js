// len=8;
// no=Math.round(Math.random()*100000000);
// console.log(no);
// s="";
// capital=['A','B','C','D','E','F','G','H','I','J']
// small=['a','b','c','d','e','f','g','h','i','j']
// specialchar=['@','#','$','%','&','*','!','/','^','|']
// for(i=0;i<len;i++)
// {
//     digit=no%10;
//     if(i==0|| i==4)
//     s=s+capital[digit];
//    else if(i==1 ||i==6)
//    s=s+small[digit];
//     else if(i==2 || i==7)
//    s=s+specialchar[digit];
// else
// s=s+digit;
// no=Math.floor(no/10);

    
// }
// console.log(s);



//another approach
function generatePass(len)
{
    
    let capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let small="abcdefghijklmnopqrstuvwxyz"
    let special="!@#$%^&*"
    while(true)
    {
        pass="";
        for(i=0;i<len;i++)
        {
            rand=Math.floor(Math.random()*4);
            if(rand==0)
            pass+=capital.charAt(Math.floor(Math.random()*capital.length));
            else if(rand==1)
            pass+=small.charAt(Math.floor(Math.random()*small.length));
            else if(rand==2)
            pass+=special.charAt(Math.floor(Math.random()*special.length));
        else
            pass += Math.floor(Math.random() * 10);
        

        }
        if (/[A-Z]/.test(pass) && /[a-z]/.test(pass) && /[@#$%^&*!]/.test(pass) && /[0-9]/.test(pass)) {
            break; 
        }


    }
    document.getElementById('ans').innerHTML=pass;
}
