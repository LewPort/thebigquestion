<html>
    <body>
    
        <script>
        
            // Cre8 class
            class Butts{
                constructor(theMessage){
                    this.theMessage = theMessage;
                }
                
                theThiccMethod(){
                    console.log(this.theMessage + '!!!!!!!!');   
                }
            }
            
            // Make an instance of said class
            buttsInstance = new Butts('I Like Them Thicc Yes I Do')
            
            // Call theThiccMethod method...
            buttsInstance.theThiccMethod() //prints "I Like Them Thicc Yes I Do!!!!!!!!", as expected
            
            namezValuez = {69: buttsInstance.theThiccMethod} 
            namezValuez[69]() // When you call the method via a Name Value Object, it prints 'undefined!!!!!!!'

            var arse = buttsInstance.theThiccMethod
            arse() // This gives me 'TypeError: this is undefined'

                        //W H Y ? ? ? ? ? ?
            
            
        </script>
    </body>
    
</html>
