import styled from 'styled-components';

export const TabSectionMainWrp = styled.div`
  height: calc(75% - 3.5rem);
  display: flex;
  flex-direction: column;
  gap: 0.938rem;
  padding: 1.5rem 0rem 0rem 0rem;
  background-color: #ebecf2;
  border-radius: 1rem 1rem 0 0;
`;

export const TabSectionWrp = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
`;

export const TabIcon = styled.img``;
export const TabBtnWrp = styled.div`
  height: 2rem;
  padding: 0rem 0.5rem;
`;
export const TabBtn = styled.button`
  height: 100%;
  font-weight: 600;
  border: none;
  background-color: transparent;
  font-size: 0.85rem;
  padding: 0rem 0.5rem;

  &:hover {
    background-color: #675ef2;
    color: #fff;
    border-radius: 0.5rem;
  }

  &.active {
    background-color: #675ef2;
    color: #fff;
    border-radius: 0.5rem;
  }
`;
export const TabAdd = styled.div`
  display: flex;
  padding: 0.53rem 0.75rem 0.47rem;
  border-radius: 0.5rem;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  height: 2rem;
  margin-top: 1px;
  cursor: pointer;
`;

export const BentoSectionWrp = styled.div`
  height: calc(100% - 3rem);
`;

export const Tabwpr = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
`;

export const Custombtnwpr = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 0.25rem 0.75rem;
  height: 2rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;
  gap: 0.625rem;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

export const Custombtntxt = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text};
`;

export const Imgwpr = styled.img`
  display: flex;
  align-items: center;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
