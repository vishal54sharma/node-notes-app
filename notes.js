const fs = require("fs")

const getNotes=()=>{
    return "Your Notes..."
}


const addNotes=(title, body)=>{

    const notes = loadNotes()
    
    const duplicateNotes=notes.filter(note=>{
        return note.title==title
    })

    

    if(duplicateNotes.length==0){
        notes.push(
            {
                title: title,
                body: body
            }
        )
    
        saveNotes(notes) 
        console.log("New note added")
    }
    else{
        console.log("Note title taken")
    }

       
}

const removeNotes=(title)=>{
    const notes = loadNotes()
    for(let i=0;i<notes.length;i++){
        if(notes[i].title==title){
            notes.splice(i,1)
        }
    } 

    saveNotes(notes)

}

const listNotes=()=>{
    const notes = loadNotes()
    notes.forEach(note => {
        console.log("Title: "+note.title)
        console.log("Body: "+note.body)
        
    });
}

const readNotes=(title)=>{

    const notes = loadNotes()

    const matchedNote = notes.filter(note=>{
        return note.title==title
    })

    if(matchedNote.length>0){
        matchedNote.forEach(note=>{
            console.log("Title: "+note.title)
            console.log("Body: "+note.body)

        })
        

    }
    else{
        console.log("Note not found")
    }

}

const saveNotes=(notes)=>{

    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
    
}

const loadNotes=()=>{
    try{
        const dataBuff = fs.readFileSync('notes.json')
        
        return JSON.parse(dataBuff.toString())

    }catch(e){
        
        return []
    }
    
}

module.exports = {
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}