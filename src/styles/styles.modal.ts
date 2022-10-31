import styled from 'styled-components'

export const Container = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
background: rgba(0, 0, 0, 0.3);
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
z-index: 9999;
@media (max-width:360px) {
    display: flex;
    justify-content: center;
    margin: 0px 0px 0px 500px;
    height: 100%;
}
`
export const Content = styled.div`
display: flex;
justify-content: space-between;
width: 704px;
height: 453px;
background: #171717;
border-radius: 10px;
@media (max-width:360px) {
    display: flex;
flex-direction: column;
    width: 355vw;
    height: 660vw;
    padding-bottom: 50px;
}
`
export const Img = styled.div`
margin: 44px 0 0 59px;
width: 256px;
height: 356px;
@media (max-width:360px) {
 width: 350vw;
height: 100vw;
}
`

export const StyleImg = styled.img`
border: 2px solid #A6955A;
width: 256px;
height: 356px;
@media (max-width:360px) {
    width: 310vw;
    height: 345vw;
 }

`
export const Main = styled.div`
margin: 60px 0px 0 38px;
font-family: 'Arial';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 30px;
@media (max-width:360px) {
display: flex;
flex-direction: column;
align-items: center;
font-size: 60px;
line-height: 85px;
margin-top: 203vw;
}
`
export const Text = styled.div`
color: #A6955A;
`
export const Color = styled.span`
color: white;
margin-left: 10px;
`
export const Closed = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #A6955A;
border-radius: 50px;
margin: 21px 27px 0 0;
width: 25px;
height: 25px;
color: #031C29;
cursor: pointer;
font-weight: 900;
@media (max-width:360px) {
position: absolute;
left: 205vw;
width: 60px;
height: 60px;
font-size: 30px;
}
`
export const Alignment = styled.div`
padding: 0px 0px 0px 20px;
`
