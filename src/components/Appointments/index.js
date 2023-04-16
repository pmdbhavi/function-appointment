import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import {MainCon,Container,Ul,Con,Contain,Form,Head,LabelTitle,TitleInput,LabelDate,DateInput,AddButton,ImgCon,Image,Hr,App,StarredButton} from './styledComponents'

const Appointments=()=>{
    const [list,setList]=useState([])
    const [title,setTitle]=useState('')
    const [date,setDate]=useState('')
    const [starred,setStarred]=useState(false)

    const onClickStarred=()=>{
        setStarred(prevState=>!prevState)
    }

    const onChangeTitle=(event)=>{
        setTitle(event.target.value)
    }

    const onChangeDate=(event)=>{
        setDate(event.target.value)
    }

    const addAppointment=(event)=>{
        event.preventDefault()
        if (title.length!==0 && date.length!==0){
        const newAppointment={
            id:uuidv4(),
            title,
            date:new Date(date),
            isLike:false,
        }

        setList(prevState=>[...prevState,newAppointment])
        setTitle('')
        setDate('')
    }
    else{
        alert("Please enter the valid details")
    }
    }

    const isToggle=(id)=>{
        setList(prevState=>prevState.map(each=>{
            if(each.id===id){
                return{...each,isLike:!each.isLike}
            }
            return each
        }))
    }

    const filteredList=()=>{
        if(starred){
            return list.filter(each=>each.isLike)
        }
        return list
    }

    return(
        <MainCon>
            <Container>
                <Con>
                    <Form onSubmit={addAppointment}>
                        <Head>Add Appointments</Head>
                        <LabelTitle htmlFor="title">TITLE</LabelTitle>
                        <TitleInput id="title" type="text" placeholder="Title" value={title} onChange={onChangeTitle} />
                        <LabelDate htmlFor="date" >DATE</LabelDate>
                        <DateInput id="date" type="date" placeholder="dd/mm/yyyy" value={date} onChange={onChangeDate} />
                        <AddButton type="submit">Add</AddButton>
                    </Form>
                    <ImgCon>
                        <Image src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png" alt="appointment" />
                    </ImgCon>
                </Con>
                <Hr/>
                <Contain>
                    <App>Appointments</App>
                    <StarredButton type="button" onClick={onClickStarred} star={!starred}>Starred</StarredButton>
                </Contain>
                <Ul>
                    {filteredList().map(each=>(
                        <AppointmentItem details={each} key={each.id} isLiked={isToggle}/>
                    ))}
                </Ul>
            </Container>
        </MainCon>
    )
}

export default Appointments