import todo from "../modol/todo.js"

  export const addTodo = async (request,response) =>{
    try{

        const newTOdO =   await todo.create({
            data: request.body.data,
            createdAt: Date.now()

          
        })
        
        await newTOdO.save();
        
        response.status(200).json(newTOdO);
    }
    catch(error){
        response.status(500).json(error.message);
    }

}

// getAllTodo.......................
 

export const getAllTodo = async(request,response) =>{
    try{  
      const ntodos = await todo.find({}).sort({'createdAt' : -1});
        response.status(200).json(ntodos);
    }
    catch(error){
        response.status(500).json(error.message);
    }
}

// markTodoDone.......................

export const markTodoDone = async (request, response) => {
    try {
        const todoRef = await todo.findById(request.params.id);

        const Todo = await todo.findOneAndUpdate(
            { _id: request.params.id },
            { done: !todoRef.done }
        )

        await Todo.save();

        return response.status(200).json(Todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}


// update todo..................................


export const updateTodo = async (request, response) => {
    try {
     

        await todo.findOneAndUpdate(
            { _id: request.params.id },
            { data: request.body.data }
        )
        const Todo =await todo.findById(request.params.id);
    

        return response.status(200).json(Todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}


// ..............delet todo



export const deletTodo = async (request, response) => {
    try {
     

        const Todo =    await todo.findByIdAndDelete ( request.params.id)
       
    

        return response.status(200).json(Todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
 
