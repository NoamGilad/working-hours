import AmountPerHour from "./AmountPerHour";
import styled from "styled-components";

const Title = styled.label`
  font-size: ${(p) => p.frontSize};
  text-align: center;
  color: ${(p) => p.color};
  background-color: brown;
`;

function ListEntry(props) {
  const { shifts } = props;

  return (
    <div>
      {shifts.map((listArr, index) => (
        <div key={index}>
          <Title color="white" frontSize="2.5rem">
            {index + 1}.{" "}
          </Title>
          <Title frontSize="2rem">{listArr.date} </Title>
          <Title>from: {listArr.from} </Title>
          <Title>to: {listArr.to} </Title>
          {/* <label>{shiftHours}</label> */}
        </div>
      ))}
    </div>
  );
}

export default ListEntry;
export { Title as Title };
