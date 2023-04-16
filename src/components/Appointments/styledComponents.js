import styled from 'styled-components'

export const MainCon=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image:linear-gradient(to bottom,#9796f0,#fbc7d4);
`
export const Container=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding:20px;
    margin:10px;
    background-color: white;
    border-radius: 10px;
    width:80%;
`

export const Con=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: flex-start;
    width:100%;
`

export const Form=styled.form`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const Head=styled.h1`
    color:#171f46;
    font-weight: bold;
`

export const LabelTitle=styled.label`
    color:#b5b7c4;
    outline:none;
    margin:5px;
`

export const TitleInput=styled.input`
    padding:10px;
    background-color: transparent;
    outline:none;
    border-radius: 2px;
    border:1px solid #b5b7c4;
    width:90%;
    margin:5px;
`

export const LabelDate=styled.label`
    color:#b5b7c4;
    outline:none;
    margin:5px;
`
export const DateInput=styled.input`
    padding:10px;
    background-color: transparent;
    outline:none;
    border:1px solid #b5b7c4;
    border-radius: 2px;
    width:90%;
    margin:5px;
`

export const AddButton=styled.button`
    border:none;
    cursor: pointer;
    background-color:#8b5cf6;
    color:white;
    padding:8px;
    margin:10px;
    border-radius:10px;
`

export const Hr=styled.hr`
    width:100%;
    color:#b5b7c4;
    margin:0px;
`

export const Contain=styled.div`
    display:flex;
    flex-direction: row;
    width:100%;
    justify-content: space-between;
    align-items: center;
    padding:10px;
`

export const ImgCon=styled.div`
    @media screen and (max-width:576px){
        display:none;
    }
`

export const Image=styled.img`
    margin:1px;
`

export const App=styled.p`
    font-weight: bold;
    color:#171f46;
`
export const StarredButton=styled.button`
    background-color:${props=>props.star?"white":"#9897f0"};
    color:${props=>props.star?"#9897f0":"white"};
    border:${props=>props.star?"1px solid #9897f0":"none"};
    border-radius: 10px;
    padding:5px;
    cursor: pointer;
`

export const Ul=styled.ul`
    display:flex;
    flex-wrap: wrap;
    width:100%;
    padding-left:0px;
    margin-left:0px;
`