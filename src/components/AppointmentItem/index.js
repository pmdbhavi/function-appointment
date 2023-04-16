import {Li,TitleCon,Title,Date,ImageButton,StarImg} from './styledComponents'
import {format} from 'date-fns'


const AppointmentItem=(props)=>{
    const {details,isLiked}=props
    const {id,title,date,isLike}=details
    const time=format(date, 'dd MMMM yyyy, EEEE')
    const imageUrl=!isLike?"https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png":"https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
    const isToggled=()=>{
        isLiked(id)
    }

    return(
        <Li>
            <TitleCon>
                <Title>{title}</Title>
                <ImageButton type="button" onClick={isToggled}>
                    <StarImg src={imageUrl} alt="star"/>
                </ImageButton>
            </TitleCon>
            <Date>Date: {time}</Date>
        </Li>
    )
    
}

export default AppointmentItem