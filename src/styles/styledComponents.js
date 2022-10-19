import styled from 'styled-components';
import colors from './colors';
import logo from '../assets/images/logo.png';

export const GenericContainerStyled = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  border-radius: 15px;
  background-color: ${colors.bgGray};
  margin-top: 20px;
  &.hide{
    margin-left: 50px;
    width: 95%;
  }
  &.show{
    margin-left: 385px;
    width: 70%;
    
  }
  ul{
    display: flex;
    flex-direction: row;
    width: 40%;
    margin-top: 10px;
    padding-left:10px;
    list-style: none;
    
    &.show{
      width: 55%;
    }
  }
  li{
    width: 25%;
    border-bottom: 2px solid ${colors.borderGray};
    text-align: center;
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
  }
  li:hover{
    border-bottom: 2px solid ${colors.hardGreen};
    color: ${colors.hardGreen};
  }
  div.tableContainer{
    overflow-y: scroll;
    height: 600px;
    background-color: ${colors.white};
    border: 1px solid ${colors.bgGray};
    border-radius: 20px;
    margin-top: 30px;
    
    th{
      padding: 15px;
      text-align: center;
      width: 10%;
      border-bottom: 3px solid ${colors.bgGray};
    }
    td{
      padding: 15px;
      text-align: center;
      border-bottom: 2px solid ${colors.bgGray};
      vertical-align: middle;
    }
    .CheckIn,.Available,.Active{
        color:${colors.hardGreen};
        background-color: ${colors.lightGreen};
        padding: 10px;
        border-radius: 10px;
        width: 130px;
        margin: 0 auto;
        cursor: default;
    }
    .CheckOut,.Booked,.Inactive{
        color:${colors.red};
        background-color: ${colors.lightRed};
        padding: 10px;
        border-radius: 10px;
        width: 130px;
        margin: 0 auto;
        cursor: default;
    }
    .InProgress{
        color:${colors.hardYellow};
        background-color: ${colors.lightYellow};
        padding: 10px;
        border-radius: 10px;
        width: 130px;
        margin: 0 auto;
        cursor: default;
    }
    .Archive{
        color:${colors.hardViolet};
        background-color: ${colors.lightViolet};
        padding: 10px;
        border-radius: 10px;
        width: 130px;
        margin: 0 auto;
        :hover{
          color:${colors.lightViolet};
          background-color: ${colors.hardViolet};
        }
    }
}

`
export const ButtonViewNote = styled.button`
  border: 1px solid ${colors.green};
  color: white;
  width: 130px;
  background-color: ${colors.green};
  border-radius:10px;
  margin: 0 auto;
  padding: 10px;
  :hover{
    color: ${colors.hardGreen};
    background-color: ${colors.white};
  }
`
export const FilterInput = styled.input`
        border: 2px solid ${colors.gray};
        width: 300px;
        height: 40px;
        display: inline-block;
        position: absolute;
        top: 143px;
        right: 48px;
        border-radius: 15px;
        padding: 10px;
`

const Logo = styled.div`
  width: 220px;
  height: 57px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: ${(props) => props.margin.top};
  margin-right: ${(props) => props.margin.right};
  margin-bottom: ${(props) => props.margin.bottom};
  margin-left: ${(props) => props.margin.left};
`;

const Button = styled.button.attrs({ type: 'button' })`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: ${(props) => (props.green ? colors.lightGreen : colors.lightRed)};
  background-color: ${(props) => (props.green ? colors.hardGreen : colors.red)};
  border-radius: 8px;
  cursor: pointer;
  padding: 12px 40px;
  margin: 0 auto;
  border: 1px solid;
  &:hover {
    color: ${colors.hardGreen};
    background-color: ${(props) => (props.green ? colors.lightGreen : colors.red)};
  }
`;

const Subtitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 40px;
`;

const FacilitiesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
`;

const Facility = styled.div`
  width: fit-content;
  background-color: ${colors.lightGreen};
  color: ${colors.hardGreen};
  font-size: 16px;
  border-radius: 12px;
  padding: 20px 25px;
`;

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export {
  Logo, Button, Facility, FacilitiesContainer, Subtitle, Row,
};