function check(num)
{
let factor=0;
  for(i=1;i<=num;i++)
{
   factor++;
}

if(factor==2)
{
return true;
}
else
{
return false;
}
}

let ans=check(23);
{
 if(ans==true)
  {
   console.log(num,"is prime");
  }
else
  {
    console.log(num,"is nit prime");
  }