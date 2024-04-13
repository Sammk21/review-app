export default function ReviewPage(){
return(
    <>

<div class=" flex justify-center items-center min-h-screen p-10 text-black">
    <div class="md:w-3/5 w-3/4 px-10 flex flex-col gap-2 p-5 ">
        <h1 class="py-5 text-lg">Reviews</h1>
        <div class="flex  bg-opacity-20 border  rounded-md border-black">
           
            <input type="email" name="email" id="email" placeholder="Create a review" class="p-2 bg-transparent focus:outline-none"/>
        </div>

        <div>
            <button className="bg-white py-2 px-4 rounded-md text-black">Add Review</button>
        </div>
        
        <div class="flex flex-col gap-3 mt-14">
            <div class="flex flex-col gap-4 p-4">
        
                <div class="flex justify justify-between">
                    <div class="flex gap-2">
                        <div class="w-7 h-7 text-center rounded-full bg-red-500">J</div>
                        <span>Jess Hopkins</span>
                    </div>
                  
                </div>

                <div>
                    Gorgeous design! Even more responsive than the previous version. A pleasure to use!
                </div>

              
            </div>

            <div class="flex flex-col gap-4 p-4">
             
                <div class="flex justify justify-between">
                    <div class="flex gap-2">
                        <div class="w-7 h-7 text-center rounded-full bg-yellow-500">A</div>
                        <span>Alice Banks</span>
                    </div>
                    
                </div>
            
                <div>
                    The device has a clean design and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at.
                </div>
            
              
            </div>
        </div>
    </div>
</div>

    </>
)
}