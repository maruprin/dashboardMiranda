import styled from "styled-components";
import BarChart from "../components/BarChart";
import Calendar from "../components/Calendar";
import Kpis from "../components/KPIS";
import { GenericContainerStyled } from "../styles/styledComponents";
const DashboardContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: 100px;
&.hide{
    margin: 0 auto;
    margin-left: -16px;
    margin-bottom: 100px;
  }
  &.show{
    margin-left: 5%;
    margin-right: 5%;
    width: 100%;
    
  }
`
const CalendarBarChartContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
flex-direction: row;
gap: 50px;
justify-content: space-around;
`
function Dashboard(props) {
  
  return (
    <GenericContainerStyled className={props.openSideMenu ? "show" : "hide"}>
    <DashboardContainer className={props.openSideMenu ? "show" : "hide"}>
      <Kpis />
      <CalendarBarChartContainer >
      <Calendar />
      <BarChart />
      </CalendarBarChartContainer>
    </DashboardContainer>
    </GenericContainerStyled>
  );
}

export default Dashboard;
