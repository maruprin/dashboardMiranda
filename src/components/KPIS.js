import styled from "styled-components";
import icons from "../styles/icons";
import colors from "../styles/colors";

const KPISContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
const KPIContainer = styled.div`
  display: flex;
  align-items: center;
  width: 23%;
  height: 125px;
  background: ${colors.white} 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px #00000018;
  border-radius: 12px;
  :hover {
    box-shadow: 0px 7px 20px #00000048;
  }
`;
const IconContainer = styled.div`
  display: flex;
  background-color: ${colors.lightRed};
  width: 65px;
  height: 65px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 50px;
  color: ${colors.red};
  :hover {
    background-color: ${colors.redLess};
    color: ${colors.lightRed};
  }
`;
const ContentContainer = styled.div`
  display: block;
  font-family: "Poppins", sans-serif;
`;
const NumberContainer = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
const TitleContainer = styled.span`
  color: ${colors.hardGreen};
  font-size: 14px;
  font-weight: 300;
`;

export default function Kpis() {
  return (
    <KPISContainer>
      <KPIContainer>
        <IconContainer>{icons.bed}</IconContainer>
        <ContentContainer>
          <NumberContainer>5.980</NumberContainer>
          <br />
          <TitleContainer>Total Bookings</TitleContainer>
        </ContentContainer>
      </KPIContainer>
      <KPIContainer>
        <IconContainer>{icons.bookings}</IconContainer>
        <ContentContainer>
          <NumberContainer>837</NumberContainer>
          <br />
          <TitleContainer>Scheduled Room</TitleContainer>
        </ContentContainer>
      </KPIContainer>
      <KPIContainer>
        <IconContainer>{icons.checkIn}</IconContainer>
        <ContentContainer>
          <NumberContainer>689</NumberContainer>
          <br />
          <TitleContainer>Check In</TitleContainer>
        </ContentContainer>
      </KPIContainer>
      <KPIContainer>
        <IconContainer>{icons.checkOut}</IconContainer>
        <ContentContainer>
          <NumberContainer>347</NumberContainer>
          <br />
          <TitleContainer>Check Out</TitleContainer>
        </ContentContainer>
      </KPIContainer>
    </KPISContainer>
  );
}
