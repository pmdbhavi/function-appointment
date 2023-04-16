import styled from 'styled-components'

export const Li=styled.li`
    list-style-type: none;
    border:1px solid #171f46;
    padding:5px;
    margin:10px;
    border-radius: 10px;
    width:25%;
    @media screen and (max-width:576px){
        width:100%;
    }
`

export const TitleCon=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width:100%;
    align-items: center;
`

export const Title=styled.p`
    color:#171f46;
    font-weight: bold;
`

export const Date=styled.p`
    color:#b5b7c4;
`

export const ImageButton=styled.button`
    cursor: pointer;
    background-color: transparent;
    border:none
`

export const StarImg=styled.img`
    margin:1px;
`