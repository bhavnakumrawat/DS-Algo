/***
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
**/
function reverseString(str)
{
     
   let start = 0
   let end =str.length -1 ;
    
    
    if(str.length == 0) return str;
    
    else {
        while (start<end){
         [str[start],str[end]] =  [str[end],str[start]]
            start ++;
            end --
       }
    }
}