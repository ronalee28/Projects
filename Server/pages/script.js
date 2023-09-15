
    const addStudent =async () =>{
        const studentName = document.querySelector('#studentName').value;
        const studentAge = document.querySelector('#studentAge').value;
    
        const response = await fetch('/addStudent',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({studentName,studentAge})
        });
        const data = await response.json()
        if(data.msg == 'ok'){
            alert("Done")
        }else{
            alert("No bueno")
        }
    }

    const showAllStudents = async () =>{
        const response = await fetch('/getStudents')
        const data = await response.json()
        console.log(data.result)
    }

    const showStudentsOver20 = async() =>{
        const response = await fetch('/getStudentsOver20')
        const data = await response.json()
        console.log(data.result)
    }

    const updateName = async () =>{
        const oldName = document.getElementById('oldName').value
        const newName = document.getElementById('newName').value
        const response = await fetch('/updateName',{
            method:'put',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({oldName,newName})
        })
        const data = await response.json()
        alert(data)
    }

    const deleteNameFunction = async () =>{
        const deleteName = document.getElementById('deleteName').value;
        const response = await fetch('/deleteName',{
            method:'DELETE',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({deleteName})
        })
        const data = await response.json()
       alert(data)
    }