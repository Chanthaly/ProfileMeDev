  
    import { useState, useEffect } from "react";
  
  
  const Typingtext: React.FC =  () => {
  const   text = " ສະບາຍດີ, ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ປະຫັວດຂ້ອຍ";
   const   [index, setIndex] = useState<number>(0);
   const [Dipslay ,setDisplay] = useState <string>("");
   useEffect (() => {
     if(index < text.length) {
        const timeout = setTimeout (()  => {

            setDisplay((prev) => prev + text.charAt(index)); 
               setIndex(index + 1);
        }, 100)
        return () => clearTimeout(timeout)
     }
   }, [text,index])
  

  return (


<h2 className="w-full text-left text-2xl sm:text-3xl md:text-4xl !text-white p-2 transition-all duration-300 ease-in-out">
  {Dipslay}
</h2>

  )
  
  }

  export default Typingtext;