import styled from "styled-components";
import BarChart from "../components/BarChart";
import Calendar from "../components/Calendar";
import chartData from "../data/chartData";
import { GenericContainerStyled } from "../styles/styledComponents";

interface PropsDashboard {
  openSideMenu: boolean;
}

const DashboardContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
gap: 100px;
margin: 0 auto;
justify-content: space-around;
&.hide{
    margin: 0 auto;
  }
  &.show{
    margin-left: 5%;
    margin-right: 5%;
    width: 100%;
    
  }
`
function Dashboard(props:PropsDashboard) {
  
  return (
    <GenericContainerStyled className={props.openSideMenu ? "show" : "hide"}>
    <DashboardContainer className={props.openSideMenu ? "show" : "hide"}>
      <Calendar />
      <BarChart />
    </DashboardContainer>
    </GenericContainerStyled>
  );
}

export default Dashboard;
